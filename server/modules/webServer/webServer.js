module.exports = function(options) {

	var express = require('express');
		_ = require('underscore'),
		http = require('http'),
		basicAuth = require('basic-auth'),
		path = require('path'),
		fs = require('graceful-fs'),
		events = require('events'),
		leftPad = require('left-pad');

	var fileName = __dirname + "/planets.json",
		LEDsOn = false,
		onTimeHour = 6,
		onTimeMinutes = 0,
		offTimeHour = 18,
		offTimeMinutes = 0,
		checkOnOffTimeoutID = undefined;

	// BASIC AUTH
	var auth = function (req, res, next) {
		function unauthorized(res) {
			res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
			return res.send(401);
		};

		var user = basicAuth(req);

		if (!user || !user.name || !user.pass) {
			return unauthorized(res);
		};

		if (user.name === 'planetcounter' && user.pass === 'keplertelescope') {
			return next();
		} else {
			return unauthorized(res);
		};
	};

	// UPDATE THE LED MATRICES
	var updateLED = function(LEDsOn) {
		if(LEDsOn) {
			try {
				var currentData = fs.readFileSync(fileName);
				currentData = JSON.parse(currentData);

				var outboundRequest = http.get("http://localhost:5555/arduino/habitable?"+leftPad(currentData.habitable, 5, 0)+";");
				outboundRequest.on('error', function(e) {
					console.log('ERROR: ' + e.message);
				});
				outboundRequest = http.get("http://localhost:5555/arduino/confirmed?"+leftPad(currentData.confirmed, 5, 0)+";");
				outboundRequest.on('error', function(e) {
					console.log('ERROR: ' + e.message);
				});
				outboundRequest = http.get("http://localhost:5555/arduino/candidates?"+leftPad(currentData.candidates, 5, 0)+";");
				outboundRequest.on('error', function(e) {
					console.log('ERROR: ' + e.message);
				});

				onTimeHour = currentData.onTime;
				onTimeMinutes = currentData.onTimeMinutes;
				offTimeHour = currentData.offTime;
				offTimeMinutes = currentData.offTimeMinutes;
			}
			catch(error) {
				currentData = {};
			}
		}
	};
	//updateLED(LEDsOn);

	var turnOnLEDs = function() {
		updateLED(LEDsOn);
		//console.log('ON');
		outboundRequest = http.get("http://localhost:5555/arduino/on?;");
		outboundRequest.on('error', function(e) {
			console.log('ERROR: ' + e.message);
		});
	};
	var turnOffLEDs = function() {
		//console.log('OFF');
		outboundRequest = http.get("http://localhost:5555/arduino/off?;");
		outboundRequest.on('error', function(e) {
			console.log('ERROR: ' + e.message);
		});
	};

	// WATCH THE JSON FILE
	// Watch the file and update the planet counter when it is changed by either a file upload or via the web.
	fs.watchFile(fileName, function(curr, prev) {
		updateLED(LEDsOn);
	});

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
	app.get('/planetData', auth, function(req, res){

		try {
			var currentData = fs.readFileSync(fileName);
		}
		catch(error) {
			currentData = "{}";
		}

		res.send(JSON.stringify(JSON.parse(currentData)) );
	});

	app.get('/', auth, function(req, res){
		res.sendfile( path.join( __dirname, '../../dist/index.html' ) );
	});

	app.post('/update', auth, function(req, res){
		onTimeHour = parseInt(req.body.onTime, 10);
		onTimeMinutes = parseInt(req.body.onTimeMinutes, 10);
		offTimeHour = parseInt(req.body.offTime, 10);
		offTimeMinutes = parseInt(req.body.offTimeMinutes, 10);

		// Immediately execute the on/off function to update the state of the sign
		clearTimeout(checkOnOffTimeoutID);
		checkOnOffTime();

		fs.writeFile(fileName, JSON.stringify(req.body), function(error) {
			if(error) {
				console.log('error');
			}
			else {
				console.log('saved');
			}
		});


		res.send(req.body);
	});

	// LOOPED CALLBACK FOR CHECKING ON/OFF STATE
	var checkOnOffTime = function() {
		var currentDate = new Date();
		var currentHour = currentDate.getHours(),
			currentMinutes = currentDate.getMinutes();

		if(currentHour > offTimeHour || (currentHour == offTimeHour && currentMinutes >= offTimeMinutes)) {
			//console.log('We are past the off time, turn "em off', LEDsOn);
			if(LEDsOn) {
				turnOffLEDs();
				LEDsOn = false;
			}
		}
		else if(currentHour > onTimeHour || (currentHour == onTimeHour && currentMinutes >= onTimeMinutes)) {
			//console.log('We are past the on time, turn "em on', LEDsOn);
			if(!LEDsOn) {
				LEDsOn = true;
				turnOnLEDs();
			}
		}
		else if(currentHour < onTimeHour || (currentHour == onTimeHour && currentMinutes < onTimeMinutes)) {
			//console.log('found the time to be in the future, checking LEDsOn:', LEDsOn);
			if(LEDsOn) {
				//console.log('found the time to be in the future, LEDsON was true, turning off');
				turnOffLEDs();
				LEDsOn = false;
			}
		}
		//else {
			//console.log('none of the above', currentHour, onTimeHour, currentMinutes, onTimeMinutes);
		//}

		checkOnOffTimeoutID = setTimeout(checkOnOffTime, 10000);
	};
	checkOnOffTime();

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

