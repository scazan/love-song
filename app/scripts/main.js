var $ = require('jquery');
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
a = new Gibberish.PolyFM({ cmRatio:19, index:3, attack:88200, decay:88200 * 30, maxVoices:20 });
b = new Gibberish.Distortion({ input:a, amount:3 });
//c = new Gibberish.Flanger({input:b, rate: 12.0, amount:125, feedback:.5}).connect();
c = new Gibberish.Flanger({input:b, rate: Add(12.0, sineMod), amount:125, feedback:.5}).connect();
reverb = new G.Reverb({input:c, damping: 0.2});
//reverb.connect();
var note = 48;
//a.note(note);
//a.note(note*1.5);

note = 28*1.5;a.note(note*1);a.note(note*0.75);a.note(note*1.5);


// Sometimes
// c.amount = 12
