var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var level = require('level');

app.use(morgan('combined'))
app.use(bodyParser.json())

app.get('/', function(req, res){
	res.status(200).send('service is online');
})

app.post('/', function(req, res){
	console.log(req.body.name);
	res.status(200).send('service is online');
});

var server = app.listen(process.env.PORT || 80, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('The api is running at http://%s:%s', host, port);
})