const moment = require('moment');

exports.indexPage = function(campaigns, characters, data) {


	function random(max) {
		return Math.floor(Math.random() * max);
	}


	const today = moment();

	var battlesToday = [];
	var diedToday = [];
	var bornToday = [];
	var randomBattle;
	var randomGeneral;


	for(var i = 0; i < campaigns.length; i++)  {
		var battlesArray = Object.keys(campaigns[i].battles).map(function(item){ return campaigns[i].battles[item] }) 
		battlesArray.forEach(function(item) {
			// console.log(item);
			if( today.month() === moment(item.date.start).month() &&  today.date() === moment(item.date.start).date() ) {
				// console.log(item);
				battlesToday.push(item)
			}			
		})	
	}

	characters.forEach(function(item) {
		if( today.month() === moment(item.died).month() &&  today.date() === moment(item.died).date() ) {
			diedToday.push(item);
		}	else if ( today.month() === moment(item.DOB).month() &&  today.date() === moment(item.DOB).date() ) {
			bornToday.push(item)
		}		
	})

	if (battlesToday[0] === undefined) {

		const randomCampaign = campaigns[random(campaigns.length)];
		var battlesArray = Object.keys(randomCampaign.battles).map(function(item){ return randomCampaign.battles[item] })
		var randomBattle = battlesArray[random(battlesArray.length)];

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