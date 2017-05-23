const express = require('express');
const router = express.Router();
const initialize = require('../initialize.js');

const data = require('../data/data.json');
const characters = Object.keys(data.Characters).map(function(item) { return data.Characters[item] } );
const campaigns = Object.keys(data.Campaigns).map(function(item) { return data.Campaigns[item]} );
const flags = data.Flags;

router.get('/', function(req, res){
	var indexPageData = initialize.indexPage(campaigns, characters, data);
	res.render('index', indexPageData);
})

router.get('/campaigns/:name?', function(req, res) {
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

router.get('/characters/:name?', function(req, res) {
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

router.get('/battles/', function(req, res) {
	// var campaign = req.params.name;	
	// var battle = req.params.battle


	res.render('construction')	

})

router.get('/campaigns/:name?/:battle', function(req, res) {
	var campaign = req.params.name;	
	var battle = req.params.battle
	if(!battle) {
		res.render('construction')	
	} else {
		res.render('battle', {data: data.Campaigns[campaign].battles[battle], flags: flags})		
	}
})

module.exports = router;