'use strict'

const express = require('express');
const moment = require('moment');
const	helpers = require('./helpers');	
const routes = require('./routes/index');		
const errorHandlers = require('./handlers/errorHandlers');


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

app.use(errorHandlers.notFound)


app.listen(process.env.PORT || 3044, () => console.log('All is ok!')); 

// app.listen(3044, function(){
// 	console.log("The frontend server is running on port 3044!")
// });