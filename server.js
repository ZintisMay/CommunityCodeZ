
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 808; // Sets an initial port. We'll use this later in our listener

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

	// If no matching route is found default to home
app.use(function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});