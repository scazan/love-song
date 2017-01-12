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





// Tools

let utils = {
	normalize: (coll) => {
		let collSum = coll.reduce((a,b) => a+b);
		return collSum > 0 ? coll.map( (weight) => weight / collSum) : coll.map(() => 0);
	},
	windex: (weights) => {
		let sumOfWeights = weights.reduce( (prev, curr) => prev + curr);

		let randNum = Math.random() * sumOfWeights;
		let weightSum = 0;

		for (let i = 0; i < weights.length; i++) {
			weightSum += weights[i];
			weightSum = +weightSum.toFixed(2);

			if (randNum <= weightSum) {
				return i;
			}
		}
	},
};


class Markov {
	constructor(input, order) {
		this.dictionary = [],
		this.combinations = [];

		this.transitionMatrix = this.createTransitionMatrix(input, order);
	}

	createTransitionMatrix(input, order) {

		this.dictionary = input.filter(function(elem, pos) {
			return input.indexOf(elem) == pos;
		});

		this.combinations = [];
		for(let i=0; i < this.dictionary.length; i++) {
			for(let k=0; k < this.dictionary.length; k++) {
				this.combinations.push([this.dictionary[i], this.dictionary[k]]);
			}
		}


		let transitionMatrix = [];
		for(let i=0; i < this.combinations.length; i++) {
			let dictionaryLengthArray = [];

			for(let k=0; k < this.dictionary.length; k++) {
				dictionaryLengthArray.push(0);
			}

			transitionMatrix.push(dictionaryLengthArray);
		}

		for(let i=1; i < input.length; i++) {
			let currentState = [ input[i-(order-1)], input[i] ];

			let indexOfCurrentState = _.findIndex(this.combinations, (item) => {
				return _.isEqual(currentState, item);
			});

			// We are assuming a wrapping input
			let nextState = input[(i+1) % input.length];
			let dictionaryIndexOfNextState = this.dictionary.indexOf(nextState);

			// increment the amount of times this transition has occurred
			transitionMatrix[indexOfCurrentState][dictionaryIndexOfNextState]++;

		}


		transitionMatrix = transitionMatrix.map( utils.normalize );

		return transitionMatrix;
	}


	getNextState(state) {
		const transitionMatrix = this.transitionMatrix;

		let indexOfCurrentState = _.findIndex(this.combinations, (item) => {
			return _.isEqual(state, item);
		});

		let probabilities = transitionMatrix[indexOfCurrentState];

		let nextIndex = utils.windex( probabilities );

		return this.dictionary[nextIndex];
	}

};

GG = Markov;
