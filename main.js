/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patterns__ = __webpack_require__(1);
//let p = require("./patterns")();

__WEBPACK_IMPORTED_MODULE_0__patterns__["a" /* Patterns */].exportToScope(window);
/*let notes = Pmarkov([6,0.1, 5, 3, 9, 0.2, 9, 5, 0.2, 0.1, 0.3], 2, [6, 0.1]);

let printNote = () => {
    window.setTimeout(function() {
        console.log(notes.next().value);
        printNote();
    }, 1000);
};

printNote();

*/
//Gibberish.init();
//Gibberish.Binops.export();
//var G = Gibberish;
//sawMod = new G.Saw(0.2, 500);
//sineMod = new G.Sine(0.2, 30);
////mod = new G.Saw(5, Mul(150, sineMod));
////sine = new G.Sine({
////frequency: Add(sineMod2, Add( 600, mod)),
////amp: 0.05
////});
////var delay = new G.Delay({input: sine, time: 44100*1, feedback: 0.35 });
////var reverb2 = new G.Reverb({input:delay, roomSize: 0.8});
////reverb2.connect();
////a = new Gibberish.PolyFM({ cmRatio:9, index:3, attack:88200, decay:88200 * 10, maxVoices:20 });
//stereoBus = new Gibberish.Bus2();
//a = new Gibberish.PolyFM({ cmRatio:19, index:3, attack:88200, decay:88200 * 30, maxVoices:20, pan: -1, amp: 0.2 }).connect(stereoBus);
//f = new Gibberish.PolyFM({ cmRatio:19, index:3, attack:88200, decay:88200 * 30, maxVoices:20, pan: 1, amp: 0.2}).connect(stereoBus);
//a.amp = 0.05;
//f.amp = 0.05;
////b = new Gibberish.Distortion({ input: stereoBus, amount:3 });
//b = new Gibberish.Distortion({ input: stereoBus, amount:40 });
////c = new Gibberish.Flanger({input:b, rate: 12.0, amount:125, feedback:.5}).connect();
//c = new Gibberish.Flanger({input:b, rate: Add(1.0, sineMod), amount:125, feedback:.5, pan: -1}).connect();
//reverb = new G.Reverb({input:c, damping: 0.2});
//reverb.connect();
//var note = 48;
////a.note(note);
////a.note(note*1.5);
//note = 28*1.5;
//triggerNote = function(freq, synth) {
//synth.note(freq*1);synth.note(freq*0.75);synth.note(freq*1.5);
//};
//triggerNoteStereo = function(freqs, synths) {
//for(var i = 0; i < synths.length; i++) {
//var synth = synths[i],
//freq = freqs[i];
//synth.note(freq*1);synth.note(freq*0.75);synth.note(freq*1.5);
//}
//};
//// Sometimes
////c.amount = 12
//c.amount = 615;
//sampler = new Gibberish.Sampler({ file:'/samples/cuernavaca1.wav' }).connect(stereoBus);
//sampler.amp = 0.4;
//sampler.note(0.4);
//notes = Pmarkov([6,0.1, 5, 3, 9, 0.2, 9, 5, 0.2, 0.1, 0.3], 2, [6, 0.1]);
////notes = Pmarkov([6,0.1, 5, 3, 9, 0.2, 9, 5, 0.2], 2, [6, 0.1]);
////durations = Prand([11025, 22050]);
//let SR = 44100;
//durations = Prand([SR * 0.001, SR * 0.25, SR*1, SR * 0.1]);
//seq = new Gibberish.Sequencer({ 
//target: sampler,
//key: 'note',
//durations: [() => durations.next().value],
//values: [() => notes.next().value]
//}).start();
//flangerSeq = new Gibberish.Sequencer({ 
//target: c,
//key:'feedback', durations: [SR*5],
////values: [() => c.feedback < 0.9 ? c.feedback+0.05 : 0.9]
//values: [() => c.feedback < 0.9 ? c.feedback+0.05 : (() => {c.amount = utils.choose([615,12]); return Math.random() * 0.8;})()]
//}).start();
//flangerSeqAmount = new Gibberish.Sequencer({ 
//target: c,
//key:'amount',
//durations: [SR*2],
////values: [() => c.amount < 5000 ? c.amount+100 : 5000]
//values: [() => c.amount < 800 ? c.amount+10 : utils.choose([ 615, 2, 2, 2, 2, 1 ])]
//}).start();
//// Pitches
//let pitchDurs = Prand([60.001, 25, 40, 60]);
//let pitchNotes = Pmarkov([60, 70], 2, [70, 60]);
////let pitchSeq = new Gibberish.Sequencer({ 
////target: a,
////key: 'note',
////durations: [() => pitchDurs.next().value],
////values: [() => pitchNotes.next().value]
////});
//let playPitch = function() {
//let note = pitchNotes.next().value;
//triggerNoteStereo([note, note * 1.2], [a,f]);
//window.setTimeout(function() {
//playPitch();
//}, pitchDurs.next().value * 1000);
//};
//window.setTimeout(function() {
//playPitch();
//}, 20000);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patterns; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Markov__ = __webpack_require__(2);
/*
 * Basic Patterns implementation for Gibberish
 */

let Patterns = {
    Pattern: (pattern) => [() => pattern.next().value],
    Pseq: function* Pseq(values, repetitions) {
        var index = 0;
        var result = () => values[index++ % values.length];
        if (repetitions == undefined) {
            while (true) {
                yield result();
            }
        }
        else {
            for (var i = 0; i < repetitions; i++) {
                yield result();
            }
        }
    },
    Prand: function* Prand(values, repetitions) {
        var result = () => values[Math.floor(Math.random() * values.length)];
        if (repetitions == undefined) {
            while (true) {
                yield result();
            }
        }
        else {
            for (var i = 0; i < repetitions; i++) {
                yield result();
            }
        }
    },
    Pmarkov: function* Pmarkov(seed, order, initialState) {
        let markovChain = new __WEBPACK_IMPORTED_MODULE_0__Markov__["a" /* Markov */](seed, order);
        let lastState = initialState;
        while (true) {
            let nextState = markovChain.getNextState(lastState);
            lastState = [lastState[lastState.length - 1], nextState];
            yield nextState;
        }
    },
    exportToScope: (namespace) => {
        for (var key in Patterns) {
            namespace[key] = Patterns[key];
        }
    },
};



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Markov; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(3);

let isEquivalent = (a, b) => {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    // If we made it this far, objects
    // are considered equivalent
    return true;
};
class Markov {
    constructor(input, order) {
        this.dictionary = [],
            this.combinations = [];
        // Set a default last state for stream behavior
        this.lastState = [];
        for (let i = 0; i < order; i++) {
            this.lastState.push(input[i]);
        }
        this.transitionMatrix = this.createTransitionMatrix(input, order);
    }
    createTransitionMatrix(input, order) {
        this.dictionary = input.filter(function (elem, pos) {
            return input.indexOf(elem) == pos;
        });
        // Computer all possible combinations of the dictionary
        this.combinations = [];
        for (let i = 0; i < this.dictionary.length; i++) {
            for (let k = 0; k < this.dictionary.length; k++) {
                this.combinations.push([this.dictionary[i], this.dictionary[k]]);
            }
        }
        // Setup the transitionMatrix (should be based on order)
        //TODO: This is hardcoded to 2nd order. Make dynamic.
        let transitionMatrix = [];
        for (let i = 0; i < this.combinations.length; i++) {
            let dictionaryLengthArray = [];
            for (let k = 0; k < this.dictionary.length; k++) {
                dictionaryLengthArray.push(0);
            }
            transitionMatrix.push(dictionaryLengthArray);
        }
        // Tally the given combinations to add into the transitionMatrix
        for (let i = 0; i < input.length; i++) {
            let currentState;
            if (i == 0) {
                currentState = [input[input.length - 1], input[i]];
            }
            else {
                currentState = [input[i - (order - 1)], input[i]];
            }
            let indexOfCurrentState = this.combinations.findIndex((item) => {
                return isEquivalent(currentState, item);
            });
            // We are assuming a wrapping input
            let nextState = input[(i + 1) % input.length];
            let dictionaryIndexOfNextState = this.dictionary.indexOf(nextState);
            // increment the amount of times this transition has occurred
            transitionMatrix[indexOfCurrentState][dictionaryIndexOfNextState]++;
        }
        transitionMatrix = transitionMatrix.map(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].normalize);
        return transitionMatrix;
    }
    getNextState(state) {
        const transitionMatrix = this.transitionMatrix;
        let indexOfCurrentState = this.combinations.findIndex((item) => {
            return isEquivalent(state, item);
        });
        let probabilities = transitionMatrix[indexOfCurrentState];
        let nextIndex = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].windex(probabilities);
        return this.dictionary[nextIndex];
    }
    asPattern() {
        let self = this;
        return function* asPattern(initialState) {
            self.lastState = initialState;
            while (true) {
                let nextState = self.getNextState(self.lastState);
                self.lastState = [self.lastState[self.lastState.length - 1], nextState];
                yield nextState;
            }
        };
    }
}
;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    choose: (array) => {
        return array[Math.floor(Math.random() * array.length)];
    },
    normalize: (coll) => {
        let collSum = coll.reduce((a, b) => a + b);
        return collSum > 0 ? coll.map((weight) => weight / collSum) : coll.map(() => 0);
    },
    windex: (weights) => {
        let sumOfWeights = weights.reduce((prev, curr) => prev + curr);
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
});


/***/ })
/******/ ]);