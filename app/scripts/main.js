p = require("./patterns")();
var _ = require('underscore');


Gibberish.init();
Gibberish.Binops.export();
var G = Gibberish;

//sineMod2 = new G.Saw(0.2, 500);
sineMod = new G.Sine(0.2, 30);
//mod = new G.Saw(5, Mul(150, sineMod));

//sine = new G.Sine({
	//frequency: Add(sineMod2, Add( 600, mod)),
	//amp: 0.05
//});


//var delay = new G.Delay({input: sine, time: 44100*1, feedback: 0.35 });
//var reverb2 = new G.Reverb({input:delay, roomSize: 0.8});
//reverb2.connect();



//a = new Gibberish.PolyFM({ cmRatio:9, index:3, attack:88200, decay:88200 * 10, maxVoices:20 });
stereoBus = new Gibberish.Bus2();
a = new Gibberish.PolyFM({ cmRatio:19, index:3, attack:88200, decay:88200 * 30, maxVoices:20, pan: -1 }).connect(stereoBus);
f = new Gibberish.PolyFM({ cmRatio:19, index:3, attack:88200, decay:88200 * 30, maxVoices:20, pan: 1}).connect(stereoBus);

b = new Gibberish.Distortion({ input: stereoBus, amount:3 });
//c = new Gibberish.Flanger({input:b, rate: 12.0, amount:125, feedback:.5}).connect();
c = new Gibberish.Flanger({input:b, rate: Add(12.0, sineMod), amount:125, feedback:.5, pan: -1}).connect();
//reverb = new G.Reverb({input:c, damping: 0.2});
//reverb.connect();
var note = 48;
//a.note(note);
//a.note(note*1.5);
note = 28*1.5;
triggerNote = function(freq, synth) {
	synth.note(freq*1);synth.note(freq*0.75);synth.note(freq*1.5);
};
triggerNoteStereo = function(freqs, synths) {
	for(var i = 0; i < synths.length; i++) {
		var synth = synths[i],
			freq = freqs[i];

		synth.note(freq*1);synth.note(freq*0.75);synth.note(freq*1.5);
	}
};


// Sometimes
// c.amount = 12

sampler = new Gibberish.Sampler({ file:'/samples/cuernavaca1.wav' }).connect();
//sampler.note(0.4);

notes = p.Pseq([6,1,9]);
durations = p.Prand([11025, 22050]);

//seq = new Gibberish.Sequencer({ target:sampler, key:'note', durations: p.Pattern(durations), values: p.Pattern(notes) }).start()







/// Markov test

createTransitionMatrix = function(input, order) {
	let dictionary = input.filter(function(elem, pos) {
		  return input.indexOf(elem) == pos;
	});

	let combinations = [];
	for(let i=0; i < dictionary.length; i++) {
		for(let k=0; k < dictionary.length; k++) {
			combinations.push([dictionary[i], dictionary[k]]);
		}
	}


	let transitionMatrix = [];
	for(let i=0; i < combinations.length; i++) {
		let dictionaryLengthArray = [];
		
		for(k=0; k < dictionary.length; k++) {
			dictionaryLengthArray.push(0);
		}

		transitionMatrix.push(dictionaryLengthArray);
	}

	for(let i=1; i < input.length; i++) {
		let currentState = [ input[i-(order-1)], input[i] ];

		let indexOfCurrentState = _.findIndex(combinations, (item) => {
			return _.isEqual(currentState, item);
		});

		//console.log(indexOfCurrentState, currentState);

		// We are assuming a wrapping input
		let nextState = input[(i+1) % input.length];
		let dictionaryIndexOfNextState = dictionary.indexOf(nextState);

		console.log(currentState, nextState);
		// increment the amount of times this transition has occurred
		transitionMatrix[indexOfCurrentState][dictionaryIndexOfNextState]++;

	}

	transitionMatrix = transitionMatrix.map( (dim1) => {
		let dim1Sum = dim1.reduce((a,b) => a+b);
		return dim1Sum > 0 ? dim1.map( (weight) => weight / dim1Sum) : dim1.map(() => 0); // using input.length because we assume wrapping (as opposed to input.length-1 for no wrapping)
	});

	return transitionMatrix;
};
