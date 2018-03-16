module.exports = function(options) {

	var express = require('express');
		_ = require('underscore'),
		http = require('http'),
		path = require('path'),
		fs = require('graceful-fs'),
		events = require('events');

	// WEB SERVER
	app = express();

	// Inherit Events
	events.EventEmitter.call(this);
	_.extend(this, events.EventEmitter.prototype);

	var port = options.port || '9001';
	this.port = port;

	//// simple log
	app.use(function(req, res, next){
		console.log('%s %s', req.method, req.url);
		next();
	});


	this.server = http.createServer(app);

	app.use(express.static( path.join( __dirname, '../../dist') ));
	app.use(express.static( path.join( __dirname, '../../.tmp') ));

	var bodyParser = require('body-parser');
	app.use( bodyParser.json() );       // to support JSON-encoded bodies
	app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
		extended: true
	}));

	// ROUTES
	app.get('/', function(req, res){
		res.sendfile( path.join( __dirname, '../../dist/index.html' ) );
	});

	WebServer = {
		start: function() {
			var server = this.server,
				port = this.port;

				server.listen(port, function(){
					console.log('Webserver has started!');
				});
		},
	}


	_.extend(this, WebServer);
	return this;
};

