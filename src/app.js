'use strict'

const express = require('express'),
			pug = require('pug'),
			moment = require('moment');

var data = require('./data/data.json');

// console.log(today);
// console.log(moment);

var characters = Object.keys(data.Characters).map(function(item) { return data.Characters[item] } );
var campaigns = Object.keys(data.Campaigns).map(function(item) { return data.Campaigns[item]} );
var flags = data.Flags;

var indexPageData = thisDayIn(campaigns, characters);


function random(max) {
	return Math.floor(Math.random() * max);
}

console.log(random(characters.length))

function thisDayIn(campaigns, characters) {

	const today = moment();

	var battlesToday = [];
	var diedToday = [];
	var bornToday = [];
	var randomBattle;
	var randomGeneral;


	for(var i = 0; i < campaigns.length; i++)  {
		const battlesArray = Array.from(campaigns[i].battles)
		battlesArray.forEach(function(item) {
			if( today.month() === moment(item.date.start).month() &&  today.date() === moment(item.date.start).date() ) {
				item.niceDate = moment(item.date.start).format("MMM Do YYYY");
				battlesToday.push(item)
			}			
		})	
	}

	characters.forEach(function(item) {
		if( today.month() === moment(item.died).month() &&  today.date() === moment(item.died).date() ) {
			item.niceDate = moment(item.died).format("MMM Do YYYY");
			diedToday.push(item);
		}	else if ( today.month() === moment(item.DOB).month() &&  today.date() === moment(item.DOB).date() ) {
			item.niceDate = moment(item.DOB).format("MMM Do YYYY");
			bornToday.push(item)
		}		
	})

	if (battlesToday[0] === undefined) {
		// randomBattle = campaigns[random(campaigns.length)].battles[random(campaigns[0].battles.length)];
		// randomBattle.niceDate = moment(randomBattle.date.start).format("MMM Do YYYY");
		randomBattle = campaigns[2].battles["Battle of Waterloo"];
		randomBattle.niceDate = moment(randomBattle.date.start).format("MMM Do YYYY");

	}

	if (diedToday[0] === undefined) {
		randomGeneral = characters[0]
		randomGeneral.niceDate = moment(randomGeneral.DOB).format("MMM Do YYYY");
		randomGeneral.dailyQuote = randomGeneral.quotes[random(randomGeneral.quotes.length)];
	}

	return {
			diedToday: diedToday[0] || null,
			bornToday: bornToday[0] || null,
			battleToday: battlesToday[0] || null,
			randomGeneral: randomGeneral,
			randomBattle: randomBattle	
	}	
}

var app = express();

app.use('/static', express.static(__dirname + '/public'))

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
	res.render('index', indexPageData);
})


app.get('/campaigns/:name?', function(req, res) {
	var title = req.params.name;	

	if(!title) {
		res.render('campaigns', {data: campaigns})	
	} else if(data.Campaigns[title]){
		var campaign = data.Campaigns[title] || {};	
		res.render('campaign', {data: campaign, flags: flags})				
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

app.get('/battles/', function(req, res) {
	// var campaign = req.params.name;	
	// var battle = req.params.battle
	// console.log(data.Campaigns[campaign])

	res.render('construction')	

})

app.get('/campaigns/:name?/:battle', function(req, res) {
	var campaign = req.params.name;	
	var battle = req.params.battle
	console.log(data.Campaigns[campaign])
	if(!battle) {
		res.render('construction')	
	} else {
		res.render('battle', {data: data.Campaigns[campaign].battles[battle], flags: flags})		
	}
})



app.listen(process.env.PORT || 3044, () => console.log('All is ok!')); 

// app.listen(3044, function(){
// 	console.log("The frontend server is running on port 3044!")
// });