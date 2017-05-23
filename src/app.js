'use strict'

const express = require('express');
const moment = require('moment');
const	helpers = require('./helpers');	
const routes = require('./routes/index');		



// console.log(today);
// console.log(moment);



// var indexPageData = thisDayIn(campaigns, characters);
// console.log(indexPageData);

// function random(max) {
// 	return Math.floor(Math.random() * max);
// }

// // console.log(random(characters.length))
// function getRandomFromObj(Obj) {
// 	console.log(Obj)
// 	var arr = Array.from(Object.keys(Obj));
// 	console.log(arr);
// 	return arr[random(arr.length)]
// }


var app = express();

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});

app.use('/static', express.static(__dirname + '/public'))

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', routes);


app.listen(process.env.PORT || 3044, () => console.log('All is ok!')); 

// app.listen(3044, function(){
// 	console.log("The frontend server is running on port 3044!")
// });