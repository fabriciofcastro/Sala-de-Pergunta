"use strict";

var express = require('express');

var app = express();

var route = require('./route');

var path = require('path');

app.set('view engine', 'ejs');
app.use(express["static"]('public'));
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({
  extended: true
}));
app.use(route);
app.listen(3000, function () {
  console.log('rondado');
});