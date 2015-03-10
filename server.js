var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

var dateTime = require('date-time');
var https = require('https');

var AWS = require('aws-sdk');

AWS.config.update({
	'region' : 'eu-west-1'
});

var sns = sns || new AWS.SNS();

app.use(morgan('combined'))
app.use(bodyParser.json())

app.get('/', function(req, res){
	res.status(200).send('service is online');
})

app.post('/', function(req, res){
	console.log(req.body);
	sns.publish({TopicArn : 'arn:aws:sns:eu-west-1:831844703282:EM-PART-REPLACED', Message: JSON.stringify(req.body), Subject : 'PART_REPLACED' }, function(err){
		res.sendStatus(200);
	});
});

var server = app.listen(process.env.PORT || 80, function() {
	var host = process.env.IP;
	var port = server.address().port;

	console.log('The api is running at http://%s:%s', host, port);
})
