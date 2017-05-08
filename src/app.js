'use strict'

var data = require('./data/data.json');

var siteData = Object.keys(data).map(function(item) { return data[item] });

var characters = Object.keys(data.Characters).map(function(item) { return data.Characters[item] } );
var campaigns = Object.keys(data.Campaigns).map(function(item) { return data.Campaigns[item]} );
var flags = data.Flags;
// console.log(campaigns)
// console.log(flags);

const express = require('express'),
			pug = require('pug');


var app = express();

app.use('/static', express.static(__dirname + '/public'))

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
	// res.sendFile(__dirname + '/public/index.html');
	res.render('index');
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


var port_number = server.listen(process.env.PORT || 3044);
app.listen(port_number); 

// app.listen(3044, function(){
// 	console.log("The frontend server is running on port 3044!")
// });