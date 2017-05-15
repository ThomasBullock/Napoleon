'use strict'

const express = require('express'),
			pug = require('pug'),
			moment = require('moment');

var data = require('./data/data.json');

// var siteData = Object.keys(data).map(function(item) { return data[item] });


// console.log(today);
// console.log(moment);

var characters = Object.keys(data.Characters).map(function(item) { return data.Characters[item] } );
var campaigns = Object.keys(data.Campaigns).map(function(item) { return data.Campaigns[item]} );
var flags = data.Flags;

var todaysEvents = thisDayIn(campaigns, characters);

// console.log(campaigns)
// console.log(flags);

function thisDayIn(campaigns, characters) {

	const today = moment();

	var battlesToday = [];
	var diedToday = [];

	for(var i = 0; i < campaigns.length; i++)  {
		campaigns[i].battles.forEach(function(item) {
			if( today.month() === moment(item.date.start).month() &&  today.date() === moment(item.date.start).date() ) {
				console.log(`this month!! ${item.title}`)
				item.niceDate = moment(item.date.start).format("MMM Do YYYY");
				battlesToday.push(item)
			}			
		})	
		console.log(battlesToday)
	}

	characters.forEach(function(item) {
		if( today.month() === moment(item.died).month() &&  today.date() === moment(item.died).date() ) {
			console.log(`this month!! ${item.name}`)
			item.niceDate = moment(item.died).format("MMM Do YYYY");
			diedToday.push(item)
		}			
	})

	return {
		died: diedToday,
		battles: battlesToday
	}	
}


var app = express();

app.use('/static', express.static(__dirname + '/public'))

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
	// res.sendFile(__dirname + '/public/index.html');
	res.render('index', todaysEvents);
})


app.get('/campaigns/:name?', function(req, res) {
	var title = req.params.name;	

	if(!title) {
		res.render('campaigns', {data: campaigns})	
	} else if(data.Campaigns[title]){
		var campaign = data.Campaigns[title] || {};	
		console.log(campaign);
		res.render('campaign', {data: campaign, flags: flags})
		// res.render('construction');						
	} else {
		res.render('construction');			
	}
})

app.get('/characters/:name?', function(req, res) {
	var title = req.params.name;	
	if(!title) {
		res.render('characters', {data: characters, flags: flags})	
	} else if(data.Characters[title]) {
			var profile = data.Characters[title] || {};	
			// res.render('character', {data: profile})
			res.render('construction')											
	} else {
			res.render('construction')					
	}
})

app.get('/battles/:name?', function(req, res) {
	var title = req.params.name;	

	if(!title) {
		res.render('construction')	
	} else {
		res.render('construction')		
	}
})



app.listen(process.env.PORT || 3044, () => console.log('All is ok!')); 

// app.listen(3044, function(){
// 	console.log("The frontend server is running on port 3044!")
// });