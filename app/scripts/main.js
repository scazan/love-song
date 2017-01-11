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
sampler.note(0.4);

Pseq = function* Pseq(values, repetitions){
	var index = 0;
	var result = () => values[index++ % values.length];

	if(repetitions == undefined) {
		while(true) {
			yield result();
		}
	}
	else {
		for(var i=0; i<repetitions; i++) {
			yield result();
		}
	}
};

Prand = function* Prand(values, repetitions){

	var result = () => values[Math.floor(Math.random() * values.length)];

	if(repetitions == undefined) {
		while(true) {
			yield result();
		}
	}
	else {
		for(var i=0; i<repetitions; i++) {
			yield result();
		}
	}
};


notes = Pseq([6,1,9]);

seq = new Gibberish.Sequencer({ target:sampler, key:'note', durations:[11025, 22050], values: [function() { return notes.next().value;}] }).start()



