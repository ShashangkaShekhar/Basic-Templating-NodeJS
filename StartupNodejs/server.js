'use strict';

var http = require('http');
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', function (req, res) {
    res.sendFile(path.resolve('layout.html'));
});

app.all('/*', function (req, res) {
    res.render('error');
});

var server = app.listen(port, function () {
    console.log('Node server is running on port..' + port);
});
