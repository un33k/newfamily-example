/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');

var app : express.Express = express();


app.get('/api', (req, res) => {
	res.send({
		"isApiWorking": true
	});
});

var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var host = server.address().port;
	console.log(host);
});