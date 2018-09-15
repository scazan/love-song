(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("WNS", [], factory);
	else if(typeof exports === 'object')
		exports["WNS"] = factory();
	else
		root["WNS"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const mtof = (note) => Math.pow(2, (note) / 12) * 440;
/* unused harmony export mtof */

const ftom = (note) => Math.sqrt(note / 440) / 12;
/* unused harmony export ftom */

const choose = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};
/* harmony export (immutable) */ __webpack_exports__["a"] = choose;

const getRateFromFrequencies = (freq, baseFreq) => {
    return freq / baseFreq;
};
/* harmony export (immutable) */ __webpack_exports__["e"] = getRateFromFrequencies;

const getClosestMember = (subject, set) => {
    return set.reduce((accum, member) => {
        const prevDistance = accum - subject;
        const currentDistance = member - subject;
        return Math.abs(currentDistance) < Math.abs(prevDistance) ? member : accum;
    }, set[0]);
};
/* harmony export (immutable) */ __webpack_exports__["d"] = getClosestMember;

const findInCollection = (collection, predicateFunction) => {
    return collection.reduce((accum, member) => predicateFunction(member) ? member : accum);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = findInCollection;

const mapToDomain = (set, domain) => {
    const setOffset = Math.min(...domain) - Math.min(...set);
    const domainRange = (Math.max(...domain) - Math.min(...domain));
    const setRange = (Math.max(...set) - Math.min(...set));
    return set.map(member => getClosestMember((((member - Math.min(...set)) / setRange) * domainRange) + setOffset, domain));
};
/* harmony export (immutable) */ __webpack_exports__["h"] = mapToDomain;

// TODO: I did the true/false backwards on this but everything uses it this way.
const flipCoin = (probability = 0.5) => (Math.random() < probability) ? false : true;
/* harmony export (immutable) */ __webpack_exports__["c"] = flipCoin;

const makeFunction = (value) => {
    if (typeof value === "function") {
        return value;
    }
    else {
        return () => value;
    }
};
/* harmony export (immutable) */ __webpack_exports__["g"] = makeFunction;

const windex = (weights) => {
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
};
/* unused harmony export windex */

const normalize = (coll) => {
    let collSum = coll.reduce((a, b) => a + b);
    return collSum > 0 ? coll.map((weight) => weight / collSum) : coll.map(() => 0);
};
/* unused harmony export normalize */

const isEquivalent = (a, b) => {
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
/* unused harmony export isEquivalent */

const mod = (num, modulo) => (num % modulo + modulo) % modulo;
/* harmony export (immutable) */ __webpack_exports__["i"] = mod;

const getSequentialRandomIndex = (lastIndex, length) => {
    const possibleIndexes = Array(length).fill(0).map((item, i) => i).filter(item => item !== lastIndex);
    return choose(possibleIndexes);
};
/* harmony export (immutable) */ __webpack_exports__["f"] = getSequentialRandomIndex;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WNS", function() { return WNS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scene__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Synth__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Noise__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MultiSampler__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spectralData_json__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spectralData_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__spectralData_json__);






;
const defaultConfig = {
    samplePath: "samples/",
};
const WNS = (config) => {
    config = config ? Object.assign({}, defaultConfig, config) : defaultConfig;
    const backgroundSamples = __WEBPACK_IMPORTED_MODULE_5__spectralData_json___default.a;
    // Setup
    const populationSize = 16;
    const context = new AudioContext();
    const chordOscillators = Array(populationSize).fill(0).map(() => new __WEBPACK_IMPORTED_MODULE_1__Synth__["a" /* default */](context));
    const multiSamplerOpts = {
        samples: [
            //{ files: [ config.samplePath + "pipeG.mp3" ], freq: 199 },
            //{ files: [ config.samplePath + "pipeD.mp3" ], freq: 306 },
            { files: [config.samplePath + "pipeA.mp3"], freq: 445 },
            { files: [config.samplePath + "pipeE.mp3"], freq: 666 },
            { files: [config.samplePath + "piano2-324.mp3"], freq: 324 },
            { files: [config.samplePath + "piano3-814.mp3"], freq: 814 },
        ],
    };
    const melodyOscillators = Array(populationSize).fill(0).map(() => Object(__WEBPACK_IMPORTED_MODULE_4__utils__["c" /* flipCoin */])() ? new __WEBPACK_IMPORTED_MODULE_3__MultiSampler__["a" /* default */](context, multiSamplerOpts) : new __WEBPACK_IMPORTED_MODULE_1__Synth__["a" /* default */](context));
    const sourceSamples = backgroundSamples.map(sampleData => new __WEBPACK_IMPORTED_MODULE_3__MultiSampler__["a" /* default */](context, {
        samples: [
            { files: [config.samplePath + sampleData.audioFile], freq: 1 },
        ],
    }));
    const lowDronePlayer = new __WEBPACK_IMPORTED_MODULE_3__MultiSampler__["a" /* default */](context, {
        samples: [
            { files: [config.samplePath + "lowDrone.mp3"], freq: 1 },
        ],
    });
    const bells = Array(2).fill(0).map(() => new __WEBPACK_IMPORTED_MODULE_2__Noise__["a" /* Noise */](context));
    const playBells = () => {
        const duration = 45;
        bells.forEach((bell, i) => {
            const randomMul = (Math.random() * 0.25) + 1;
            const freqs = [2090, 2393];
            bell.play({
                pan: (i * 2) - 1,
                freq: freqs[i] * randomMul,
                vol: 7.8,
                time: duration,
            });
        });
        setTimeout(playNewScene, (duration + 12) * 1000); // Timing is weird in the player. This results in a gap which is what I want
    };
    const playDrone = () => {
        lowDroneIsPlaying = true;
        console.log('playing drone...');
        setTimeout(() => { lowDroneIsPlaying = false; }, 330 * 1000); // Low Drone last 300*1000 milliseconds, add an extra 30 seconds after to decrease repetition
        lowDronePlayer.play({ freq: 1, time: 300 * 1000, vol: 0.70 });
    };
    let sampleIndex = 0;
    let interludeJustPlayed = false;
    let lowDroneIsPlaying = false;
    const playNewScene = () => {
        // Occasionally we want to pause for a moment to play an interlude in silence
        const playInterlude = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["c" /* flipCoin */])(0.80);
        const playLowDrone = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["c" /* flipCoin */])(0.85);
        if (playInterlude && !interludeJustPlayed) {
            interludeJustPlayed = true;
            playBells();
            setTimeout(() => {
                sourceSamples.forEach(samplePlayer => samplePlayer.stop(0, samplePlayer.players[0]));
                chordOscillators.forEach(synth => synth.stop(0));
            }, 15 * 1000);
            return false;
        }
        if (playLowDrone && !lowDroneIsPlaying) {
            playDrone();
        }
        interludeJustPlayed = false;
        sampleIndex = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* getSequentialRandomIndex */])(sampleIndex, backgroundSamples.length);
        //const target = [193, 423, 1668, 2333, 2665, 3078, 4038, 6319, 193+1, 423+1, 1668+1, 2333+1, 2665+1, 3078+1, 4038+1, 6319+1 ]; // in frequency
        const backgroundSample = backgroundSamples[sampleIndex];
        console.log(backgroundSample.audioFile);
        const initialPopulation = Array(80).fill(backgroundSample.spectrum.map(bin => bin.freq));
        // Target is the overtones of the most prominent frequency in the spectrum
        const target = backgroundSample.spectrum
            .reduce((accum, bin) => accum[0].magnitude < bin.magnitude ? [bin] : accum, [{ freq: 0, magnitude: -100 }])
            .map(bin => bin.freq)
            .map((strongestFreq) => Array(backgroundSample.spectrum.length).fill(0).map((item, i) => {
            const harmonic = strongestFreq * (i + 1);
            const highestFreq = 7000;
            if (harmonic > highestFreq) {
                const divisor = Math.ceil(harmonic / highestFreq);
                return harmonic / divisor;
            }
            else {
                return harmonic;
            }
        }))[0];
        const sceneConfig = {
            initialPopulation: initialPopulation.map(item => item.map(item2 => {
                return (Math.random() * (target[target.length - 1] - target[0])) + (target[0] - 20);
            })),
            populationSize: 16,
            maxGenerations: 2,
            target,
            timeBetweenEvents: () => (Math.random() * 15) + 10,
            gapBetweenEvents: () => Object(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* choose */])([25, 10]),
            melodyOscillators,
            chordOscillators,
            onFinish: playNewScene
        };
        sourceSamples[sampleIndex].play({ freq: 1, time: 60 * 3 * 1000, vol: 0.23 });
        // Start the scene
        new __WEBPACK_IMPORTED_MODULE_0__Scene__["a" /* Scene */](sceneConfig).play();
    };
    //playNewScene();
    playBells();
};
/* harmony default export */ __webpack_exports__["default"] = (WNS);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patterns__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);


class Scene {
    constructor(config) {
        this.config = config;
        this.config.timeBetweenEvents = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* makeFunction */])(this.config.timeBetweenEvents);
        this.config.gapBetweenEvents = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* makeFunction */])(this.config.gapBetweenEvents);
        this.notes = Object(__WEBPACK_IMPORTED_MODULE_0__patterns__["a" /* Pgenetic */])(config.initialPopulation, config.target);
        this.config.maxGenerations = config.maxGenerations;
        this.currentGeneration = 0;
        this.config.onFinish = config.onFinish;
    }
    play() {
        const nextGen = this.notes.next().value;
        const newNotes = nextGen;
        let i = 0;
        let k = (Math.random() > 0.5) ? 0 : 1;
        this.config.chordOscillators.map((osc) => {
            const octave = Math.ceil(Math.random() * 5);
            osc.play({ freq: newNotes[i] / octave, time: this.config.timeBetweenEvents(), pan: ((k % 2) * 2) - 1, vol: 0.2 });
            i++;
            k++;
        });
        this.playMelody(newNotes, this.currentGeneration);
        //console.log('GENETIC GENERATION: ', this.currentGeneration, nextGen);
        if (this.currentGeneration <= (this.config.maxGenerations - 1)) {
            window.setTimeout(() => {
                this.currentGeneration++;
                this.play();
            }, (this.config.timeBetweenEvents() + this.config.gapBetweenEvents()) * 1000);
        }
        else {
            this.currentGeneration++;
            this.endOfScene();
        }
        return this;
    }
    playMelody(notes, generation) {
        const order = 3;
        const newNotes = notes;
        // Taken from the sequence of pitches in "Forever in Blue Jeans" by Neil Diamond
        const idealMelody = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["h" /* mapToDomain */])([0, 4, 2, 0, 7, 4, 2, 7, 7, 4, 2, 2, 4, 4, 2, 0], newNotes);
        const randomShiftAmount = Math.floor(Math.random() * (idealMelody.length));
        const initialState = [];
        for (let offset = order; offset >= 0; offset--) {
            initialState.push(idealMelody[Object(__WEBPACK_IMPORTED_MODULE_1__utils__["i" /* mod */])(randomShiftAmount - offset, idealMelody.length)]);
        }
        const markovMelody = Object(__WEBPACK_IMPORTED_MODULE_0__patterns__["b" /* Pmarkov */])(idealMelody, order, initialState);
        let i = 0;
        const playNextNote = (generation) => {
            const octave = Math.ceil(Math.random() * 3) + Math.ceil(Math.random() * 3) + 2;
            const nextNote = markovMelody.next().value;
            //if(nextNote !== undefined && flipCoin(0.75) ) { // Sometimes probablities are zero, so we'll get an undefined next state
            if (nextNote !== undefined && Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* flipCoin */])(0.55)) {
                //console.log('playing note', nextNote);
                this.config.melodyOscillators[i % this.config.melodyOscillators.length].play({
                    freq: nextNote / octave,
                    time: 1 + (Math.random() * 6),
                    pan: 0,
                    vol: 0.15
                });
            }
            i++;
            window.setTimeout(() => {
                if (generation === this.currentGeneration && this.currentGeneration <= this.config.maxGenerations) {
                    playNextNote(generation);
                }
            }, ((Math.random() * 2) + 0.5) * 1000);
        };
        playNextNote(generation);
    }
    endOfScene() {
        const onFinishCallback = this.config.onFinish;
        this.config.chordOscillators.map(synth => synth.stop(1));
        window.setTimeout(onFinishCallback, 1000);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Genetic__ = __webpack_require__(5);
/*
 * Basic Patterns implementation
 */
const Markov = __webpack_require__(4).default;

const Pattern = (pattern) => [() => pattern.next().value];
/* unused harmony export Pattern */

const Pseq = function* Pseq(values, repetitions) {
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
};
/* unused harmony export Pseq */

const Prand = function* Prand(values, repetitions) {
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
};
/* unused harmony export Prand */

const Pmarkov = function Pmarkov(seed, order, initialState) {
    const markovChain = new Markov(seed, order);
    return markovChain.asPattern(initialState);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Pmarkov;

const Pgenetic = function* Pgenetic(inputPopulation, goal) {
    let genetic = new __WEBPACK_IMPORTED_MODULE_0__Genetic__["a" /* Genetic */](inputPopulation, goal);
    let lastState = goal;
    while (true) {
        let nextState = genetic.getNextState(lastState);
        lastState = [lastState[lastState.length - 1], nextState];
        yield nextState;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Pgenetic;



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("MarkovN",[],e):"object"==typeof exports?exports.MarkovN=e():t.MarkovN=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const r=t=>{let e=t.reduce((t,e)=>t+e),n=Math.random()*e,r=0;for(let e=0;e<t.length;e++)if(n<=(r=+(r+=t[e]).toFixed(2)))return e},o=t=>{let e=t.reduce((t,e)=>t+e);return e>0?t.map(t=>t/e):t.map(()=>0)},i=(t,e)=>{var n=Object.getOwnPropertyNames(t),r=Object.getOwnPropertyNames(e);if(n.length!=r.length)return!1;for(var o=0;o<n.length;o++){var i=n[o];if(t[i]!==e[i])return!1}return!0},s=(t,e)=>(t%e+e)%e;n.d(e,"getAllTransitions",function(){return a}),n.d(e,"MarkovN",function(){return l});const a=(t,e)=>t.reduce((n,r,o)=>{const i=[];for(let n=e;n>=0;n--)i.push(t[s(o-n,t.length)]);return n.push(i),n},[]),u=(t,e)=>{const n=[...t];return n.shift(),n.push(e),n};class l{constructor(t,e){this.dictionary=[],this.combinations=[],this.lastState=[];for(let n=0;n<e;n++)this.lastState.push(t[n]);this.transitionMatrix=this.createTransitionMatrix(t,e)}createTransitionMatrix(t,e){this.dictionary=Array.from(new Set(t)),this.combinations=a(t,e);let n=[];for(let t=0;t<this.combinations.length;t++){let t=[];for(let e=0;e<this.dictionary.length;e++)t.push(0);n.push(t)}for(let r=0;r<t.length;r++){let o=[];for(let n=e;n>=0;n--)o.push(t[s(r-n,t.length)]);let a=this.combinations.findIndex(t=>i(o,t)),u=t[(r+1)%t.length],l=this.dictionary.indexOf(u);n[a][l]++}return n=n.map(o)}getNextState(t){const e=this.transitionMatrix[this.combinations.findIndex(e=>i(t,e))],n=r(e);return this.dictionary[n]}*asPattern(t){for(this.lastState=t;;){let t=this.getNextState(this.lastState);this.lastState=u(this.lastState,t),yield t}}}e.default=l}])});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genetic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);

class Genetic {
    constructor(inputPopulation, goal) {
        this.population = inputPopulation;
        this.scores = Array(inputPopulation.length).fill(0);
        this.goal = goal;
        this.lastState = inputPopulation[Math.floor(Math.random() * (inputPopulation.length - 1))];
    }
    // Accumulate and return the score for a single collection
    getTotalFitnessRating(collection, goal) {
        let score = 0; // lower is better
        let normalizedCollection = collection.map((num) => num - Math.min.apply(null, collection));
        for (let i = normalizedCollection.length - 1; i >= 0; i--) {
            score += this.getDistance(normalizedCollection[i], goal[i]);
        }
        return score;
    }
    // TODO: test
    // Using the given scores, get the most "fit" two generations out of the population
    getTopTwoGenerations(scores, population) {
        let indexOfHighestScore = 0;
        for (let i = scores.length - 1; i >= 0; i--) {
            if (scores[indexOfHighestScore] < scores[i]) {
                indexOfHighestScore = i;
            }
            // If there are two of the same scores, choose one randomly
            if (scores[indexOfHighestScore] === scores[i]) {
                const coinFlip = Math.random();
                indexOfHighestScore = (coinFlip > 0.5) ? indexOfHighestScore : i;
            }
        }
        let indexOfNextHighestScore = 0;
        const topGenerationScore = scores[indexOfHighestScore];
        const coinFlipForMutate = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* flipCoin */])(0.25);
        if (coinFlipForMutate) {
            indexOfNextHighestScore = Math.floor(Math.random() * scores.length);
        }
        else {
            for (let i = scores.length - 1; i >= 0; i--) {
                // Ignore any scores that are already the highest score
                if (scores[i] !== topGenerationScore) {
                    if (scores[indexOfNextHighestScore] < scores[i]) {
                        indexOfNextHighestScore = i;
                    }
                    // If there are two of the same scores, choose one randomly
                    if (scores[indexOfNextHighestScore] === scores[i]) {
                        const coinFlip = Math.random();
                        indexOfNextHighestScore = (coinFlip > 0.5) ? indexOfNextHighestScore : i;
                    }
                }
            }
        }
        return [population[indexOfHighestScore], population[indexOfNextHighestScore]];
    }
    // TODO: Make more than one type of mating
    // Take in two arrays (parents) and mate them in a number of different ways to produce multiple offspring
    mateGenerations(parents) {
        const splicedOffspring = this.getSplicedOffspring(parents[0], parents[1]);
        const interlacedOffspring = this.getInterlacedOffspring(parents[0], parents[1]);
        // Generate more than one offspring
        return [splicedOffspring, interlacedOffspring];
    }
    // Splice two equal-length arrays together and return the result
    getInterlacedOffspring(parentOne, parentTwo) {
        const interlacedOffspring = Array(parentOne.length);
        for (let i = interlacedOffspring.length - 1; i >= 0; i--) {
            interlacedOffspring[i] = (i % 2) === 0 ? parentOne[i] : parentTwo[i];
        }
        return interlacedOffspring;
    }
    getSplicedOffspring(parentOne, parentTwo) {
        const coinFlip = Math.random() > 0.5 ? 1 : 0;
        const parents = coinFlip == 0 ? [parentOne, parentTwo] : [parentTwo, parentOne];
        const splitPoint = Math.floor(parentOne.length / 2);
        const splicedOffspring = [...(parents[0].slice(0, splitPoint)), ...(parents[1].slice(splitPoint - 1, parents[1].length - 1))];
        return splicedOffspring;
    }
    // Returns a numerical distance between an input and a goal
    getDistance(input, goal) {
        let rating = goal - input;
        return rating;
    }
    // Calculate and return the scores for all current collections
    getPopulationScores(population, goal) {
        let scores = Array(population.length).fill(0);
        for (let i = (population.length - 1); i >= 0; i--) {
            scores[i] = this.getTotalFitnessRating(population[i], goal);
        }
        return scores;
    }
    getNextGeneration(population, goal) {
        const populationScores = this.getPopulationScores(population, goal);
        const topTwoGenerations = this.getTopTwoGenerations(populationScores, population);
        const newGenerations = this.mateGenerations(topTwoGenerations);
        for (let i = 0; i < (newGenerations.length - 1); i++) {
            this.population.splice(Math.floor(Math.random() * (this.population.length - 1)), 1);
        }
        this.population = [...this.population, ...newGenerations];
        // For now randomly select one of the best generations
        const bestFitGeneration = newGenerations[Math.floor(Math.random() * (newGenerations.length * 0.999))];
        return bestFitGeneration;
    }
    getNextState(state) {
        // TODO: Use state to add into the population
        const nextState = this.getNextGeneration(this.population, this.goal);
        return nextState;
    }
    asPattern() {
        const self = this;
        return function* asPattern(initialState) {
            self.lastState = initialState;
            while (true) {
                const nextState = self.getNextState(self.lastState);
                self.lastState = nextState;
                yield nextState;
            }
        };
    }
}
;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
// Basic curve from https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode
const makeDistortionCurve = amount => {
    var k = typeof amount === 'number' ? amount : 50, n_samples = 44100, curve = new Float32Array(n_samples), deg = Math.PI / 180, i = 0, x;
    for (; i < n_samples; ++i) {
        x = i * 2 / n_samples - 1;
        curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
    }
    return curve;
};

class Synth {
    constructor(context, config) {
        this.context = context;
        this.config = config ? config : {};
    }
    init() {
        this.oscillator = this.context.createOscillator();
        //this.config.waveformType && (this.oscillator.type = this.config.waveformType);
        this.gainNode = this.context.createGain();
        this.panner = this.context.createStereoPanner();
        this.waveShaper = this.context.createWaveShaper();
        this.waveShaper.curve = makeDistortionCurve(800);
        this.waveShaper.oversample = '4x';
        this.oscillator.connect(this.gainNode);
        this.gainNode.connect(this.panner);
        this.panner.connect(this.waveShaper);
        //this.panner.connect(this.context.destination);
        this.waveShaper.connect(this.context.destination);
        this.oscillator.type = this.config.waveformType ? this.config.waveformType : Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* flipCoin */])() ? 'triangle' : 'sine';
        this.gainNode.gain.value = 0;
    }
    play(opt) {
        const { freq = 220, time = 1, pan = 0, vol = 1 } = opt;
        this.init();
        let gain = 0.01;
        this.oscillator.frequency.value = freq;
        opt.distortion && (this.waveShaper.curve = makeDistortionCurve(opt.distortion));
        // some stupid basic psychoacoustic shaping
        if (freq > 200)
            gain = gain * 0.12;
        if (freq > 6000)
            gain = gain * 0.08;
        this.panner.pan.value = pan;
        this.oscillator.start(0);
        this.gainNode.gain.setTargetAtTime(vol * gain * (0.55 - (Math.random() * 0.01)), this.context.currentTime, time * 0.85);
        var self = this;
        window.setTimeout(function () {
            self.stop(time * 0.25);
        }, (time - (time * 0.25)) * 1000);
        return this;
    }
    stop(time) {
        this.gainNode.gain.setTargetAtTime(0, this.context.currentTime, time * 0.9);
        this.oscillator.stop(this.context.currentTime + (time * 4));
        return this;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Synth);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Noise; });
// Basic curve from https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode
const makeDistortionCurve = amount => {
    var k = typeof amount === 'number' ? amount : 50, n_samples = 44100, curve = new Float32Array(n_samples), deg = Math.PI / 180, i = 0, x;
    for (; i < n_samples; ++i) {
        x = i * 2 / n_samples - 1;
        curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
    }
    return curve;
};
const bufferSize = 4096;
const createBrownNoise = audioContext => {
    var lastOut = 0.0;
    var node = audioContext.createScriptProcessor(bufferSize, 1, 1);
    node.onaudioprocess = function (e) {
        var output = e.outputBuffer.getChannelData(0);
        for (var i = 0; i < bufferSize; i++) {
            var white = Math.random() * 2 - 1;
            output[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = output[i];
            output[i] *= 3.5; // (roughly) compensate for gain
        }
    };
    return node;
};
class Noise {
    constructor(context, config) {
        this.context = context;
        this.config = config ? config : {};
    }
    init() {
        this.oscillator = createBrownNoise(this.context);
        //this.config.waveformType && (this.oscillator.type = this.config.waveformType);
        this.gainNode = this.context.createGain();
        this.panner = this.context.createStereoPanner();
        this.filter = this.context.createBiquadFilter();
        this.filter.type = 'peaking';
        this.filter2 = this.context.createBiquadFilter();
        this.filter2.type = 'bandpass';
        this.waveShaper = this.context.createWaveShaper();
        this.waveShaper.curve = makeDistortionCurve(80);
        this.waveShaper.oversample = '4x';
        this.oscillator.connect(this.waveShaper);
        this.waveShaper.connect(this.filter);
        this.filter.connect(this.filter2);
        this.filter2.connect(this.panner);
        this.panner.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);
        //this.oscillator.type = this.config.waveformType ? this.config.waveformType : utils.flipCoin() ? 'triangle' : 'sine';
        this.gainNode.gain.value = 0;
    }
    play(opt) {
        const { freq = 220, time = 1, pan = 0, vol = 1 } = opt;
        this.init();
        let gain = 1.0;
        //this.oscillator.frequency.value = freq;
        this.filter.frequency.value = freq;
        this.filter.Q.value = 50.901;
        this.filter.gain.value = 20;
        this.filter2.frequency.value = freq;
        this.filter2.Q.value = 15.901;
        this.filter2.gain.value = 60;
        opt.distortion && (this.waveShaper.curve = makeDistortionCurve(opt.distortion));
        // some stupid basic pyschoacoustic shaping
        if (freq > 200)
            gain = gain * 0.12;
        this.panner.pan.value = pan;
        this.gainNode.gain.value = 0.001;
        this.gainNode.gain.exponentialRampToValueAtTime(vol * gain, this.context.currentTime + time);
        setTimeout(this.stop.bind(this), (time + 1) * 1000);
        return this;
    }
    stop() {
        this.gainNode.gain.setTargetAtTime(0, this.context.currentTime, 0.01);
        return this;
    }
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_howler__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_howler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_howler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);


class MultiSampler {
    constructor(context, opt) {
        this.context = context;
        this.players = opt.samples.map(sampleConfig => ({ player: new __WEBPACK_IMPORTED_MODULE_0_howler__["Howl"]({ src: sampleConfig.files }), baseFreq: sampleConfig.freq }));
    }
    play(opt) {
        const { freq = 220, time = 1, pan = 0, vol = 1 } = opt;
        let gain = 1;
        const samplePlayer = this.findClosestSamplePlayer(freq);
        const currentlyPlayingSampleID = samplePlayer.player.play();
        samplePlayer.player.loop(false, currentlyPlayingSampleID);
        samplePlayer.player.rate(Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* getRateFromFrequencies */])(freq, samplePlayer.baseFreq), currentlyPlayingSampleID);
        // some stupid basic pyschoacoustic shaping
        if (freq > 200)
            gain = gain * 0.2;
        samplePlayer.player.fade(0, gain * vol, 200, currentlyPlayingSampleID);
        samplePlayer.player.stereo(pan, currentlyPlayingSampleID);
        window.setTimeout(function () {
            samplePlayer.player.fade(gain * vol, 0, 200, currentlyPlayingSampleID);
            this.stop(time, samplePlayer, currentlyPlayingSampleID);
        }.bind(this), (time * 1000) + 200); // adding a 100 ms buffer to avoid any issues
        return this;
    }
    stop(time, samplePlayer, currentlyPlayingSampleID) {
        window.setTimeout(function () {
            samplePlayer.player.stop();
        }.bind(this), 300); // adding a 100 ms buffer to avoid any issues
        return this;
    }
    findClosestSamplePlayer(freq) {
        // Can only get the closest frequency in the set of Players' frequencies so get that frequency, then filter the players
        const closestPlayerFrequency = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* getClosestMember */])(freq, this.players.map(player => player.baseFreq));
        return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* findInCollection */])(this.players, member => member === closestPlayerFrequency);
    }
}
/* harmony default export */ __webpack_exports__["a"] = (MultiSampler);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.0.12
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto iOS enabler.
      self.mobileAutoEnable = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'running' : 'running';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Mobile browsers will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _enableMobileAudio: function() {
      var self = this || Howler;

      // Only run this on mobile devices if audio isn't already eanbled.
      var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent);
      var isTouch = !!(('ontouchend' in window) || (self._navigator && self._navigator.maxTouchPoints > 0) || (self._navigator && self._navigator.msMaxTouchPoints > 0));
      if (self._mobileEnabled || !self.ctx || (!isMobile && !isTouch)) {
        return;
      }

      self._mobileEnabled = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function() {
        // Fix Android can not play in suspend state.
        Howler._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._mobileEnabled = true;
          self.mobileAutoEnable = false;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';
        self.ctx.suspend().then(function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        });
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhrWithCredentials = o.xhrWithCredentials || false;

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio on iOS.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.mobileAutoEnable) {
        Howler._enableMobileAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload) {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended.
        // If there is, play that sound. If not, continue as usual.
        var num = 0;
        for (var i=0; i<self._sounds.length; i++) {
          if (self._sounds[i]._paused && !self._sounds[i]._ended) {
            num++;
            id = self._sounds[i]._id;
          }
        }

        if (num === 1) {
          sprite = null;
        } else {
          id = null;
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Makr this sounded as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);

      // Update the parameters of the sound
      sound._paused = false;
      sound._ended = false;
      sound._sprite = sprite;
      sound._seek = seek;
      sound._start = self._sprite[sprite][0] / 1000;
      sound._stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      sound._loop = !!(sound._loop || self._sprite[sprite][2]);

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
            }, 0);
          }
        };

        if (Howler.state === 'running') {
          playWebAudio();
        } else {
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Mobile browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (typeof Promise !== 'undefined' && play instanceof Promise) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Releases the lock and executes queued actions.
              var runLoadQueue = function() {
                self._playLock = false;
                if (!internal) {
                  self._emit('play', sound._id);
                }
              };
              play.then(runLoadQueue, runLoadQueue);
            } else if (!internal) {
              self._emit('play', sound._id);
            }

            // Setting rate before playing won't work in IE, so we set it again here.
            node.playbackRate = sound._rate;

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default' || sound._loop) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          var listener = function() {
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded') {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Make sure the volume is in the right bounds.
        vol = Math.max(0, vol);
        vol = Math.min(1, vol);

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded') {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            sound._rateSeek = self.seek(id[i]);
            sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return self;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (self._state !== 'loaded') {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Restart the playback if the sound was playing.
          if (playing) {
            self.play(id, true);
          }

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node) {
            sound._node.currentTime = seek;
          }

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                self._emit('seek', id);
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            self._emit('seek', id);
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
          if (!checkIE) {
            sounds[i]._node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
          }

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);

        // Remove the references in the global Howler object.
        var index = Howler._howls.indexOf(self);
        if (index >= 0) {
          Howler._howls.splice(index, 1);
        }
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;

      if (Howler._scratchBuffer) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
      }
      node.bufferSource = null;

      return self;
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else {
        self._node = new Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = 'auto';
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.withCredentials = self._xhrWithCredentials;
      xhr.responseType = 'arraybuffer';
      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Decode the buffer into an audio source.
    Howler.ctx.decodeAudioData(arraybuffer, function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      }
    }, function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    });
  };

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : 1, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // Add support for CommonJS libraries such as browserify.
  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Define globally in case AMD is not available or unused.
  if (typeof window !== 'undefined') {
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
    global.HowlerGlobal = HowlerGlobal;
    global.Howler = Howler;
    global.Howl = Howl;
    global.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.0.12
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];

      if (typeof self.ctx.listener.positionX !== 'undefined') {
        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
      }
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];

      if (typeof self.ctx.listener.forwardX !== 'undefined') {
        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
      }
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(pan, 0, 0);
              }
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(x, y, z);
            }
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
            sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
            sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;

      if (typeof sound._panner.positionX !== 'undefined') {
        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      }

      if (typeof sound._panner.orientationX !== 'undefined') {
        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
      }
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = [{"audioFile":"bollnasBus.mp3","spectrum":[{"freq":172.265625,"magnitude":-17.399746},{"freq":64.599609,"magnitude":-21.96829},{"freq":366.064453,"magnitude":-32.528049},{"freq":516.796875,"magnitude":-38.542358},{"freq":689.0625,"magnitude":-39.038445},{"freq":861.328125,"magnitude":-39.638317},{"freq":775.195312,"magnitude":-39.66655},{"freq":990.527344,"magnitude":-40.016201},{"freq":925.927734,"magnitude":-40.517895},{"freq":1098.193359,"magnitude":-41.060593},{"freq":1356.591797,"magnitude":-41.274876},{"freq":1270.458984,"magnitude":-43.702244},{"freq":1873.388672,"magnitude":-44.169426},{"freq":1528.857422,"magnitude":-45.135281},{"freq":1636.523438,"magnitude":-45.653736},{"freq":1744.189453,"magnitude":-45.790058}]},{"audioFile":"coop.mp3","spectrum":[{"freq":86.132812,"magnitude":-28.932537},{"freq":236.865234,"magnitude":-32.327995},{"freq":452.197266,"magnitude":-36.28949},{"freq":344.53125,"magnitude":-36.789261},{"freq":559.863281,"magnitude":-38.61684},{"freq":732.128906,"magnitude":-39.494778},{"freq":796.728516,"magnitude":-39.511993},{"freq":1076.660156,"magnitude":-48.423088},{"freq":1184.326172,"magnitude":-50.484188},{"freq":1248.925781,"magnitude":-50.664841},{"freq":1464.257812,"magnitude":-51.075733},{"freq":1399.658203,"magnitude":-51.329906},{"freq":1658.056641,"magnitude":-51.729897},{"freq":1851.855469,"magnitude":-53.016678},{"freq":2110.253906,"magnitude":-55.621365},{"freq":2024.121094,"magnitude":-57.550549}]},{"audioFile":"counting1.mp3","spectrum":[{"freq":193.798828,"magnitude":-26.017561},{"freq":409.130859,"magnitude":-35.475403},{"freq":602.929688,"magnitude":-43.021927},{"freq":796.728516,"magnitude":-46.480598},{"freq":7192.089844,"magnitude":-52.308483},{"freq":7235.15625,"magnitude":-52.633369},{"freq":8290.283203,"magnitude":-52.669678},{"freq":7105.957031,"magnitude":-52.945122},{"freq":6567.626953,"magnitude":-52.98806},{"freq":6503.027344,"magnitude":-53.184967},{"freq":6416.894531,"magnitude":-53.473446},{"freq":8182.617188,"magnitude":-53.531357},{"freq":5684.765625,"magnitude":-53.602531},{"freq":8139.550781,"magnitude":-54.062778},{"freq":6653.759766,"magnitude":-54.157398},{"freq":5577.099609,"magnitude":-54.469383}]},{"audioFile":"countingSvenska.mp3","spectrum":[{"freq":215.332031,"magnitude":-18.976727},{"freq":430.664062,"magnitude":-23.805183},{"freq":473.730469,"magnitude":-23.937403},{"freq":667.529297,"magnitude":-36.477356},{"freq":9776.074219,"magnitude":-46.779316},{"freq":9883.740234,"magnitude":-46.87299},{"freq":9948.339844,"magnitude":-47.843761},{"freq":818.261719,"magnitude":-47.975559},{"freq":9108.544922,"magnitude":-50.064014},{"freq":8656.347656,"magnitude":-50.149624},{"freq":2002.587891,"magnitude":-50.343147},{"freq":9711.474609,"magnitude":-50.482002},{"freq":7385.888672,"magnitude":-50.554905},{"freq":9173.144531,"magnitude":-50.921734},{"freq":9646.875,"magnitude":-51.072002},{"freq":1765.722656,"magnitude":-51.101601}]},{"audioFile":"crosswalk.mp3","spectrum":[{"freq":257.8125,"magnitude":-37.666729},{"freq":820.3125,"magnitude":-41.777088},{"freq":750,"magnitude":-43.647976},{"freq":539.0625,"magnitude":-47.038448},{"freq":1382.8125,"magnitude":-47.713871},{"freq":960.9375,"magnitude":-47.815086},{"freq":1453.125,"magnitude":-49.521015},{"freq":1218.75,"magnitude":-49.886189},{"freq":2906.25,"magnitude":-50.243725},{"freq":1289.0625,"magnitude":-50.455692},{"freq":2625,"magnitude":-51.801075},{"freq":1593.75,"magnitude":-51.846096},{"freq":3023.4375,"magnitude":-52.134571},{"freq":2039.0625,"magnitude":-52.144482},{"freq":2320.3125,"magnitude":-52.657024},{"freq":1921.875,"magnitude":-53.338219}]},{"audioFile":"emptyWordsNea.mp3","spectrum":[{"freq":215.332031,"magnitude":-19.520159},{"freq":430.664062,"magnitude":-25.219025},{"freq":602.929688,"magnitude":-31.175522},{"freq":64.599609,"magnitude":-35.193279},{"freq":796.728516,"magnitude":-39.868279},{"freq":1787.255859,"magnitude":-41.391182},{"freq":882.861328,"magnitude":-42.827045},{"freq":1055.126953,"magnitude":-45.009171},{"freq":1679.589844,"magnitude":-45.019444},{"freq":1119.726562,"magnitude":-45.374962},{"freq":1571.923828,"magnitude":-45.392387},{"freq":1421.191406,"magnitude":-46.156982},{"freq":1270.458984,"magnitude":-46.377228},{"freq":1894.921875,"magnitude":-46.470295},{"freq":1485.791016,"magnitude":-47.266369},{"freq":8613.28125,"magnitude":-47.489655}]},{"audioFile":"flightLanding.mp3","spectrum":[{"freq":150.732422,"magnitude":-23.22921},{"freq":322.998047,"magnitude":-27.817633},{"freq":86.132812,"magnitude":-28.757832},{"freq":882.861328,"magnitude":-36.045925},{"freq":452.197266,"magnitude":-36.165146},{"freq":516.796875,"magnitude":-38.192909},{"freq":645.996094,"magnitude":-39.4725},{"freq":1055.126953,"magnitude":-40.918613},{"freq":990.527344,"magnitude":-40.968189},{"freq":732.128906,"magnitude":-41.37928},{"freq":796.728516,"magnitude":-41.518967},{"freq":1485.791016,"magnitude":-42.438782},{"freq":1248.925781,"magnitude":-44.283665},{"freq":1765.722656,"magnitude":-44.834751},{"freq":1162.792969,"magnitude":-45.961536},{"freq":1356.591797,"magnitude":-46.540531}]},{"audioFile":"fromBerlin.mp3","spectrum":[{"freq":129.199219,"magnitude":-19.337328},{"freq":172.265625,"magnitude":-20.061157},{"freq":236.865234,"magnitude":-21.243382},{"freq":366.064453,"magnitude":-25.249617},{"freq":409.130859,"magnitude":-25.250202},{"freq":322.998047,"magnitude":-25.32493},{"freq":473.730469,"magnitude":-25.473864},{"freq":645.996094,"magnitude":-26.291237},{"freq":602.929688,"magnitude":-26.820797},{"freq":968.994141,"magnitude":-28.423075},{"freq":796.728516,"magnitude":-28.616865},{"freq":904.394531,"magnitude":-30.327291},{"freq":1464.257812,"magnitude":-32.71851},{"freq":1184.326172,"magnitude":-33.538372},{"freq":1119.726562,"magnitude":-33.638268},{"freq":1270.458984,"magnitude":-34.200172}]},{"audioFile":"kitchen1.mp3","spectrum":[{"freq":107.666016,"magnitude":-23.018032},{"freq":150.732422,"magnitude":-23.063093},{"freq":107.666016,"magnitude":-23.683832},{"freq":150.732422,"magnitude":-23.870668},{"freq":236.865234,"magnitude":-27.578087},{"freq":236.865234,"magnitude":-28.458439},{"freq":301.464844,"magnitude":-28.528795},{"freq":301.464844,"magnitude":-29.146461},{"freq":430.664062,"magnitude":-31.122925},{"freq":430.664062,"magnitude":-31.620726},{"freq":538.330078,"magnitude":-32.279846},{"freq":538.330078,"magnitude":-32.766731},{"freq":495.263672,"magnitude":-32.782124},{"freq":495.263672,"magnitude":-32.833862},{"freq":645.996094,"magnitude":-33.121647},{"freq":645.996094,"magnitude":-33.218231}]},{"audioFile":"pendelTag.mp3","spectrum":[{"freq":236.865234,"magnitude":-16.221592},{"freq":64.599609,"magnitude":-18.688091},{"freq":409.130859,"magnitude":-20.336178},{"freq":559.863281,"magnitude":-21.620527},{"freq":624.462891,"magnitude":-23.685429},{"freq":861.328125,"magnitude":-25.067635},{"freq":925.927734,"magnitude":-25.832678},{"freq":1722.65625,"magnitude":-27.109802},{"freq":1873.388672,"magnitude":-27.189735},{"freq":1055.126953,"magnitude":-29.507767},{"freq":1248.925781,"magnitude":-29.806211},{"freq":1141.259766,"magnitude":-30.065187},{"freq":1313.525391,"magnitude":-30.253767},{"freq":1916.455078,"magnitude":-30.367163},{"freq":1421.191406,"magnitude":-31.539719},{"freq":1528.857422,"magnitude":-31.722507}]},{"audioFile":"pendelTag2.mp3","spectrum":[{"freq":301.464844,"magnitude":-28.588257},{"freq":150.732422,"magnitude":-29.29398},{"freq":366.064453,"magnitude":-31.429947},{"freq":86.132812,"magnitude":-31.997349},{"freq":689.0625,"magnitude":-32.262497},{"freq":775.195312,"magnitude":-33.855614},{"freq":559.863281,"magnitude":-34.162552},{"freq":947.460938,"magnitude":-35.370667},{"freq":861.328125,"magnitude":-36.640476},{"freq":1076.660156,"magnitude":-39.055378},{"freq":1248.925781,"magnitude":-40.740498},{"freq":1313.525391,"magnitude":-41.248177},{"freq":1442.724609,"magnitude":-43.415245},{"freq":1550.390625,"magnitude":-44.174026},{"freq":1658.056641,"magnitude":-44.426029},{"freq":2002.587891,"magnitude":-45.137405}]},{"audioFile":"sirenBirds.mp3","spectrum":[{"freq":2906.982422,"magnitude":-23.156624},{"freq":732.128906,"magnitude":-26.645731},{"freq":322.998047,"magnitude":-27.420908},{"freq":968.994141,"magnitude":-27.515535},{"freq":172.265625,"magnitude":-27.680265},{"freq":129.199219,"magnitude":-27.757851},{"freq":1937.988281,"magnitude":-29.04484},{"freq":882.861328,"magnitude":-29.5805},{"freq":602.929688,"magnitude":-29.844624},{"freq":452.197266,"magnitude":-30.23547},{"freq":538.330078,"magnitude":-30.711304},{"freq":1098.193359,"magnitude":-31.065268},{"freq":1313.525391,"magnitude":-33.923553},{"freq":2196.386719,"magnitude":-33.927032},{"freq":2131.787109,"magnitude":-35.18816},{"freq":2304.052734,"magnitude":-35.270332}]},{"audioFile":"snow.mp3","spectrum":[{"freq":64.599609,"magnitude":-29.677166},{"freq":344.53125,"magnitude":-40.347485},{"freq":602.929688,"magnitude":-44.040558},{"freq":689.0625,"magnitude":-44.897915},{"freq":925.927734,"magnitude":-48.870106},{"freq":1205.859375,"magnitude":-49.086319},{"freq":1098.193359,"magnitude":-50.976013},{"freq":1291.992188,"magnitude":-52.224236},{"freq":1421.191406,"magnitude":-53.330524},{"freq":1485.791016,"magnitude":-53.476215},{"freq":1378.125,"magnitude":-53.615837},{"freq":1636.523438,"magnitude":-54.583996},{"freq":1744.189453,"magnitude":-55.241005},{"freq":1808.789062,"magnitude":-55.726116},{"freq":1937.988281,"magnitude":-57.665276},{"freq":2024.121094,"magnitude":-59.252815}]},{"audioFile":"walkingInStreet.mp3","spectrum":[{"freq":129.199219,"magnitude":-24.899473},{"freq":258.398438,"magnitude":-30.800665},{"freq":215.332031,"magnitude":-31.003553},{"freq":64.599609,"magnitude":-32.746632},{"freq":904.394531,"magnitude":-35.545536},{"freq":602.929688,"magnitude":-35.755497},{"freq":366.064453,"magnitude":-35.907131},{"freq":839.794922,"magnitude":-36.146004},{"freq":452.197266,"magnitude":-36.174366},{"freq":689.0625,"magnitude":-36.796539},{"freq":968.994141,"magnitude":-37.352345},{"freq":1098.193359,"magnitude":-38.130184},{"freq":1184.326172,"magnitude":-38.222878},{"freq":1141.259766,"magnitude":-38.283627},{"freq":1399.658203,"magnitude":-41.17009},{"freq":1787.255859,"magnitude":-43.650486}]}]

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2YmUzYmRlOWIzNmYzOGYyZjA0ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ducy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhdHRlcm5zLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXJrb3ZuL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9HZW5ldGljLnRzIiwid2VicGFjazovLy8uL3NyYy9TeW50aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm9pc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL011bHRpU2FtcGxlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG93bGVyL2Rpc3QvaG93bGVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwZWN0cmFsRGF0YS5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDdDRGRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7OztBQ3BCQSxtQkFBbUIsMENBQTBDLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsb0NBQW9DLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUseUNBQXlDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsK0NBQStDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHVDQUF1QyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUseUNBQXlDLHVDQUF1QyxFQUFFLHVDQUF1QyxFQUFFLGtDQUFrQyxFQUFFLHVDQUF1QyxFQUFFLHdDQUF3QyxFQUFFLHVDQUF1QyxFQUFFLHVDQUF1QyxFQUFFLHNDQUFzQyxFQUFFLHNDQUFzQyxFQUFFLHdDQUF3QyxFQUFFLG1DQUFtQyxFQUFFLHNDQUFzQyxFQUFFLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHVDQUF1QyxFQUFFLEVBQUUsNkNBQTZDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLEVBQUUsNkNBQTZDLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsMENBQTBDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsd0NBQXdDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLEVBQUUseUNBQXlDLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsMENBQTBDLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsMENBQTBDLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsb0NBQW9DLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHVDQUF1QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsK0NBQStDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLEMiLCJmaWxlIjoid25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJXTlNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiV05TXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIldOU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmJlM2JkZTliMzZmMzhmMmYwNGQiLCJcbmV4cG9ydCBjb25zdCBtdG9mID0gKG5vdGU6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLnBvdygyLCAobm90ZSkvMTIpICogNDQwO1xuXG5leHBvcnQgY29uc3QgZnRvbSA9IChub3RlOiBudW1iZXIpOiBudW1iZXIgPT4gTWF0aC5zcXJ0KG5vdGUvNDQwKS8xMjtcblxuZXhwb3J0IGNvbnN0IGNob29zZSA9IChhcnJheTogQXJyYXk8YW55Pik6IGFueSA9PiB7XG4gICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldO1xuICB9O1xuXG5leHBvcnQgY29uc3QgZ2V0UmF0ZUZyb21GcmVxdWVuY2llcyA9IChmcmVxLCBiYXNlRnJlcSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBmcmVxL2Jhc2VGcmVxO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENsb3Nlc3RNZW1iZXIgPSAoc3ViamVjdCwgc2V0KSA9PiB7XG4gIHJldHVybiBzZXQucmVkdWNlKCAoYWNjdW0sIG1lbWJlcikgPT4ge1xuICAgIGNvbnN0IHByZXZEaXN0YW5jZSA9IGFjY3VtIC0gc3ViamVjdDtcbiAgICBjb25zdCBjdXJyZW50RGlzdGFuY2UgPSBtZW1iZXIgLSBzdWJqZWN0O1xuXG4gICAgcmV0dXJuIE1hdGguYWJzKCBjdXJyZW50RGlzdGFuY2UgKSA8IE1hdGguYWJzKCBwcmV2RGlzdGFuY2UgKSA/IG1lbWJlciA6IGFjY3VtO1xuICB9LCBzZXRbMF0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRJbkNvbGxlY3Rpb24gPSAoY29sbGVjdGlvbiwgcHJlZGljYXRlRnVuY3Rpb24pID0+IHtcbiAgcmV0dXJuIGNvbGxlY3Rpb24ucmVkdWNlKCAoYWNjdW0sIG1lbWJlcikgPT4gcHJlZGljYXRlRnVuY3Rpb24obWVtYmVyKSA/IG1lbWJlciA6IGFjY3VtICk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwVG9Eb21haW4gPSAoc2V0LCBkb21haW4pID0+IHtcbiAgY29uc3Qgc2V0T2Zmc2V0ID0gTWF0aC5taW4oLi4uZG9tYWluKSAtIE1hdGgubWluKC4uLnNldCk7XG4gIGNvbnN0IGRvbWFpblJhbmdlID0gKCBNYXRoLm1heCguLi5kb21haW4pIC0gTWF0aC5taW4oLi4uZG9tYWluKSApO1xuICBjb25zdCBzZXRSYW5nZSA9ICggTWF0aC5tYXgoLi4uc2V0KSAtIE1hdGgubWluKC4uLnNldCkgKTtcblxuICByZXR1cm4gc2V0Lm1hcCggbWVtYmVyID0+IGdldENsb3Nlc3RNZW1iZXIoICgoIChtZW1iZXIgLSBNYXRoLm1pbiguLi5zZXQpKSAvIHNldFJhbmdlKSAqIGRvbWFpblJhbmdlICkgKyBzZXRPZmZzZXQsIGRvbWFpbikpO1xufTtcblxuICAvLyBUT0RPOiBJIGRpZCB0aGUgdHJ1ZS9mYWxzZSBiYWNrd2FyZHMgb24gdGhpcyBidXQgZXZlcnl0aGluZyB1c2VzIGl0IHRoaXMgd2F5LlxuZXhwb3J0IGNvbnN0IGZsaXBDb2luID0gKHByb2JhYmlsaXR5PTAuNSk6IGJvb2xlYW4gPT4gKE1hdGgucmFuZG9tKCkgPCBwcm9iYWJpbGl0eSkgPyBmYWxzZSA6IHRydWU7XG5cbmV4cG9ydCBjb25zdCBtYWtlRnVuY3Rpb24gPSAodmFsdWUpOiBGdW5jdGlvbiA9PiB7XG4gIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiAoKSA9PiB2YWx1ZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHdpbmRleCA9ICh3ZWlnaHRzOiBBcnJheTxudW1iZXI+KTogbnVtYmVyID0+IHtcbiAgbGV0IHN1bU9mV2VpZ2h0cyA9IHdlaWdodHMucmVkdWNlKCAocHJldiwgY3VycikgPT4gcHJldiArIGN1cnIpO1xuXG4gIGxldCByYW5kTnVtID0gTWF0aC5yYW5kb20oKSAqIHN1bU9mV2VpZ2h0cztcbiAgbGV0IHdlaWdodFN1bSA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWlnaHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgd2VpZ2h0U3VtICs9IHdlaWdodHNbaV07XG4gICAgd2VpZ2h0U3VtID0gK3dlaWdodFN1bS50b0ZpeGVkKDIpO1xuXG4gICAgaWYgKHJhbmROdW0gPD0gd2VpZ2h0U3VtKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBub3JtYWxpemUgPSAoY29sbDogbnVtYmVyW10pOiBudW1iZXJbXSA9PiB7XG4gIGxldCBjb2xsU3VtID0gY29sbC5yZWR1Y2UoKGEsYikgPT4gYStiKTtcbiAgcmV0dXJuIGNvbGxTdW0gPiAwID8gY29sbC5tYXAoICh3ZWlnaHQpID0+IHdlaWdodCAvIGNvbGxTdW0pIDogY29sbC5tYXAoKCkgPT4gMCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNFcXVpdmFsZW50ID0gKGEsIGIpOiBib29sZWFuID0+IHtcbiAgLy8gQ3JlYXRlIGFycmF5cyBvZiBwcm9wZXJ0eSBuYW1lc1xuICB2YXIgYVByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSk7XG4gIHZhciBiUHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKTtcblxuICAvLyBJZiBudW1iZXIgb2YgcHJvcGVydGllcyBpcyBkaWZmZXJlbnQsXG4gIC8vIG9iamVjdHMgYXJlIG5vdCBlcXVpdmFsZW50XG4gIGlmIChhUHJvcHMubGVuZ3RoICE9IGJQcm9wcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFQcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwcm9wTmFtZSA9IGFQcm9wc1tpXTtcblxuICAgIC8vIElmIHZhbHVlcyBvZiBzYW1lIHByb3BlcnR5IGFyZSBub3QgZXF1YWwsXG4gICAgLy8gb2JqZWN0cyBhcmUgbm90IGVxdWl2YWxlbnRcbiAgICBpZiAoYVtwcm9wTmFtZV0gIT09IGJbcHJvcE5hbWVdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UgbWFkZSBpdCB0aGlzIGZhciwgb2JqZWN0c1xuICAvLyBhcmUgY29uc2lkZXJlZCBlcXVpdmFsZW50XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IG1vZCA9IChudW0sIG1vZHVsbykgPT4gKG51bSAlIG1vZHVsbyArIG1vZHVsbykgJSBtb2R1bG87XG5cbmV4cG9ydCBjb25zdCBnZXRTZXF1ZW50aWFsUmFuZG9tSW5kZXggPSAoIGxhc3RJbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciApOiBudW1iZXIgPT4ge1xuICBjb25zdCBwb3NzaWJsZUluZGV4ZXMgPSBBcnJheShsZW5ndGgpLmZpbGwoMCkubWFwKCAoaXRlbSxpKSA9PiBpKS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBsYXN0SW5kZXgpO1xuXG4gIHJldHVybiBjaG9vc2UocG9zc2libGVJbmRleGVzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMudHMiLCJpbXBvcnQgeyBTY2VuZSwgSVNjZW5lQ29uZmlnIH0gZnJvbSAnLi9TY2VuZSc7XG5pbXBvcnQgU3ludGggZnJvbSAnLi9TeW50aCc7XG5pbXBvcnQgeyBOb2lzZSB9IGZyb20gJy4vTm9pc2UnO1xuaW1wb3J0IE11bHRpU2FtcGxlciBmcm9tICcuL011bHRpU2FtcGxlcic7XG5pbXBvcnQge0lGcmVxQmlufSBmcm9tICcuLi90b29scy9zcGVjdHJ1bVBlYWtQYXJzZXInO1xuaW1wb3J0IHsgZ2V0U2VxdWVudGlhbFJhbmRvbUluZGV4LCBmbGlwQ29pbiwgY2hvb3NlIH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCBzcGVjdHJhbERhdGEgZnJvbSAnLi9zcGVjdHJhbERhdGEuanNvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdOU0NvbmZpZyB7XG4gIHNhbXBsZVBhdGg6IHN0cmluZ1xufTtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogSVdOU0NvbmZpZyA9IHtcbiAgc2FtcGxlUGF0aDogXCJzYW1wbGVzL1wiLFxufTtcblxuY29uc3QgV05TID0gKGNvbmZpZz86IElXTlNDb25maWcpID0+IHtcbiAgY29uZmlnID0gY29uZmlnID8gey4uLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZ30gOiBkZWZhdWx0Q29uZmlnO1xuXG4gIGNvbnN0IGJhY2tncm91bmRTYW1wbGVzID0gPGFueT5zcGVjdHJhbERhdGE7XG5cbiAgLy8gU2V0dXBcbiAgY29uc3QgcG9wdWxhdGlvblNpemUgPSAxNjtcbiAgY29uc3QgY29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblxuICBjb25zdCBjaG9yZE9zY2lsbGF0b3JzID0gQXJyYXkocG9wdWxhdGlvblNpemUpLmZpbGwoMCkubWFwKCgpID0+XG4gICAgbmV3IFN5bnRoKGNvbnRleHQpXG4gICk7XG5cbiAgY29uc3QgbXVsdGlTYW1wbGVyT3B0cyA9IHtcbiAgICBzYW1wbGVzOiBbXG4gICAgICAvL3sgZmlsZXM6IFsgY29uZmlnLnNhbXBsZVBhdGggKyBcInBpcGVHLm1wM1wiIF0sIGZyZXE6IDE5OSB9LFxuICAgICAgLy97IGZpbGVzOiBbIGNvbmZpZy5zYW1wbGVQYXRoICsgXCJwaXBlRC5tcDNcIiBdLCBmcmVxOiAzMDYgfSxcbiAgICAgIHsgZmlsZXM6IFsgY29uZmlnLnNhbXBsZVBhdGggKyBcInBpcGVBLm1wM1wiIF0sIGZyZXE6IDQ0NSB9LFxuICAgICAgeyBmaWxlczogWyBjb25maWcuc2FtcGxlUGF0aCArIFwicGlwZUUubXAzXCIgXSwgZnJlcTogNjY2IH0sXG4gICAgICB7IGZpbGVzOiBbIGNvbmZpZy5zYW1wbGVQYXRoICsgXCJwaWFubzItMzI0Lm1wM1wiIF0sIGZyZXE6IDMyNCB9LFxuICAgICAgeyBmaWxlczogWyBjb25maWcuc2FtcGxlUGF0aCArIFwicGlhbm8zLTgxNC5tcDNcIiBdLCBmcmVxOiA4MTQgfSxcbiAgICBdLFxuICB9O1xuICBjb25zdCBtZWxvZHlPc2NpbGxhdG9ycyA9IEFycmF5KHBvcHVsYXRpb25TaXplKS5maWxsKDApLm1hcCgoKSA9PiBmbGlwQ29pbigpID8gbmV3IE11bHRpU2FtcGxlciggY29udGV4dCwgbXVsdGlTYW1wbGVyT3B0cyApIDogbmV3IFN5bnRoKGNvbnRleHQpKTtcbiAgY29uc3Qgc291cmNlU2FtcGxlcyA9IGJhY2tncm91bmRTYW1wbGVzLm1hcCggc2FtcGxlRGF0YSA9PiBuZXcgTXVsdGlTYW1wbGVyKGNvbnRleHQsIHtcbiAgICBzYW1wbGVzOiBbXG4gICAgICB7IGZpbGVzOiBbIGNvbmZpZy5zYW1wbGVQYXRoICsgc2FtcGxlRGF0YS5hdWRpb0ZpbGUgXSwgZnJlcTogMSB9LFxuICAgIF0sXG4gIH0pKTtcbiAgY29uc3QgbG93RHJvbmVQbGF5ZXIgPSBuZXcgTXVsdGlTYW1wbGVyKGNvbnRleHQsIHtcbiAgICBzYW1wbGVzOiBbXG4gICAgICB7IGZpbGVzOiBbIGNvbmZpZy5zYW1wbGVQYXRoICsgXCJsb3dEcm9uZS5tcDNcIiBdLCBmcmVxOiAxIH0sXG4gICAgXSxcbiAgfSk7XG5cbiAgY29uc3QgYmVsbHMgPSBBcnJheSgyKS5maWxsKDApLm1hcCggKCkgPT5cbiAgICBuZXcgTm9pc2UoY29udGV4dClcbiAgKTtcblxuICBjb25zdCBwbGF5QmVsbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZHVyYXRpb24gPSA0NTtcbiAgICBiZWxscy5mb3JFYWNoKCAoYmVsbCwgaSkgPT4ge1xuICAgICAgY29uc3QgcmFuZG9tTXVsID0gKE1hdGgucmFuZG9tKCkgKiAwLjI1KSArIDE7XG4gICAgICBjb25zdCBmcmVxcyA9IFsyMDkwLCAyMzkzXTtcbiAgICAgIGJlbGwucGxheSh7XG4gICAgICAgIHBhbjogKGkgKiAyKSAtIDEsXG4gICAgICAgIGZyZXE6IGZyZXFzW2ldICogcmFuZG9tTXVsLFxuICAgICAgICB2b2w6IDcuOCxcbiAgICAgICAgdGltZTogZHVyYXRpb24sXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQocGxheU5ld1NjZW5lLCAoZHVyYXRpb24gKyAxMikgKiAxMDAwKTsgLy8gVGltaW5nIGlzIHdlaXJkIGluIHRoZSBwbGF5ZXIuIFRoaXMgcmVzdWx0cyBpbiBhIGdhcCB3aGljaCBpcyB3aGF0IEkgd2FudFxuICB9O1xuXG4gIGNvbnN0IHBsYXlEcm9uZSA9ICgpID0+IHtcbiAgICBsb3dEcm9uZUlzUGxheWluZyA9IHRydWU7XG4gICAgY29uc29sZS5sb2coJ3BsYXlpbmcgZHJvbmUuLi4nKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgbG93RHJvbmVJc1BsYXlpbmcgPSBmYWxzZTsgfSwgMzMwICogMTAwMCk7IC8vIExvdyBEcm9uZSBsYXN0IDMwMCoxMDAwIG1pbGxpc2Vjb25kcywgYWRkIGFuIGV4dHJhIDMwIHNlY29uZHMgYWZ0ZXIgdG8gZGVjcmVhc2UgcmVwZXRpdGlvblxuICAgIGxvd0Ryb25lUGxheWVyLnBsYXkoe2ZyZXE6IDEsIHRpbWU6IDMwMCAqIDEwMDAsIHZvbDogMC43MH0pO1xuICB9O1xuXG4gIGxldCBzYW1wbGVJbmRleCA9IDA7XG5cbiAgbGV0IGludGVybHVkZUp1c3RQbGF5ZWQgPSBmYWxzZTtcbiAgbGV0IGxvd0Ryb25lSXNQbGF5aW5nID0gZmFsc2U7XG4gIGNvbnN0IHBsYXlOZXdTY2VuZSA9ICgpID0+IHtcbiAgICAvLyBPY2Nhc2lvbmFsbHkgd2Ugd2FudCB0byBwYXVzZSBmb3IgYSBtb21lbnQgdG8gcGxheSBhbiBpbnRlcmx1ZGUgaW4gc2lsZW5jZVxuICAgIGNvbnN0IHBsYXlJbnRlcmx1ZGUgPSBmbGlwQ29pbigwLjgwKTtcbiAgICBjb25zdCBwbGF5TG93RHJvbmUgPSBmbGlwQ29pbigwLjg1KTtcblxuICAgIGlmKHBsYXlJbnRlcmx1ZGUgJiYgIWludGVybHVkZUp1c3RQbGF5ZWQpIHtcbiAgICAgIGludGVybHVkZUp1c3RQbGF5ZWQgPSB0cnVlO1xuICAgICAgcGxheUJlbGxzKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+XG4gICAgICAgIHtcbiAgICAgICAgICBzb3VyY2VTYW1wbGVzLmZvckVhY2goIHNhbXBsZVBsYXllciA9PiBzYW1wbGVQbGF5ZXIuc3RvcCgwLCBzYW1wbGVQbGF5ZXIucGxheWVyc1swXSkgKTtcbiAgICAgICAgICBjaG9yZE9zY2lsbGF0b3JzLmZvckVhY2goIHN5bnRoID0+IHN5bnRoLnN0b3AoMCkgKTtcbiAgICAgICAgfSxcbiAgICAgICAgMTUgKiAxMDAwXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYocGxheUxvd0Ryb25lICYmICFsb3dEcm9uZUlzUGxheWluZykge1xuICAgICAgcGxheURyb25lKCk7XG4gICAgfVxuXG4gICAgaW50ZXJsdWRlSnVzdFBsYXllZCA9IGZhbHNlO1xuICAgIHNhbXBsZUluZGV4ID0gZ2V0U2VxdWVudGlhbFJhbmRvbUluZGV4KHNhbXBsZUluZGV4LCBiYWNrZ3JvdW5kU2FtcGxlcy5sZW5ndGgpO1xuICAgIC8vY29uc3QgdGFyZ2V0ID0gWzE5MywgNDIzLCAxNjY4LCAyMzMzLCAyNjY1LCAzMDc4LCA0MDM4LCA2MzE5LCAxOTMrMSwgNDIzKzEsIDE2NjgrMSwgMjMzMysxLCAyNjY1KzEsIDMwNzgrMSwgNDAzOCsxLCA2MzE5KzEgXTsgLy8gaW4gZnJlcXVlbmN5XG4gICAgY29uc3QgYmFja2dyb3VuZFNhbXBsZSA9IGJhY2tncm91bmRTYW1wbGVzW3NhbXBsZUluZGV4XTtcbiAgICBjb25zb2xlLmxvZyhiYWNrZ3JvdW5kU2FtcGxlLmF1ZGlvRmlsZSk7XG4gICAgY29uc3QgaW5pdGlhbFBvcHVsYXRpb24gPSBBcnJheSg4MCkuZmlsbCggYmFja2dyb3VuZFNhbXBsZS5zcGVjdHJ1bS5tYXAoIGJpbiA9PiBiaW4uZnJlcSkgKTtcblxuICAgIC8vIFRhcmdldCBpcyB0aGUgb3ZlcnRvbmVzIG9mIHRoZSBtb3N0IHByb21pbmVudCBmcmVxdWVuY3kgaW4gdGhlIHNwZWN0cnVtXG4gICAgY29uc3QgdGFyZ2V0ID0gYmFja2dyb3VuZFNhbXBsZS5zcGVjdHJ1bVxuICAgICAgLnJlZHVjZSggKGFjY3VtOiBJRnJlcUJpbltdLCBiaW46IElGcmVxQmluKSA9PiBhY2N1bVswXS5tYWduaXR1ZGUgPCBiaW4ubWFnbml0dWRlID8gWyBiaW4gXSA6IGFjY3VtLCBbe2ZyZXE6IDAsIG1hZ25pdHVkZTogLTEwMH1dKVxuICAgICAgLm1hcCggYmluID0+IGJpbi5mcmVxKVxuICAgICAgLm1hcCggKCBzdHJvbmdlc3RGcmVxOiBudW1iZXIgKSA9PiBBcnJheShiYWNrZ3JvdW5kU2FtcGxlLnNwZWN0cnVtLmxlbmd0aCkuZmlsbCgwKS5tYXAoIChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhcm1vbmljID0gc3Ryb25nZXN0RnJlcSAqIChpKzEpO1xuICAgICAgICBjb25zdCBoaWdoZXN0RnJlcSA9IDcwMDA7XG4gICAgICAgIGlmIChoYXJtb25pYyA+IGhpZ2hlc3RGcmVxKSB7XG4gICAgICAgICAgY29uc3QgZGl2aXNvciA9IE1hdGguY2VpbChoYXJtb25pYyAvIGhpZ2hlc3RGcmVxKTtcbiAgICAgICAgICByZXR1cm4gaGFybW9uaWMgLyBkaXZpc29yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJldHVybiBoYXJtb25pYztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIClbMF07XG5cbiAgICBjb25zdCBzY2VuZUNvbmZpZzogSVNjZW5lQ29uZmlnID0ge1xuICAgICAgaW5pdGlhbFBvcHVsYXRpb246IGluaXRpYWxQb3B1bGF0aW9uLm1hcChcbiAgICAgICAgaXRlbSA9PiBpdGVtLm1hcChcbiAgICAgICAgICBpdGVtMiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKiAodGFyZ2V0W3RhcmdldC5sZW5ndGgtMV0gLSB0YXJnZXRbMF0pKSArICh0YXJnZXRbMF0tMjApXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgcG9wdWxhdGlvblNpemU6IDE2LFxuICAgICAgbWF4R2VuZXJhdGlvbnM6IDIsXG4gICAgICB0YXJnZXQsIC8vIGluIGZyZXF1ZW5jeVxuICAgICAgdGltZUJldHdlZW5FdmVudHM6ICgpID0+IChNYXRoLnJhbmRvbSgpICogMTUpICsgMTAsXG4gICAgICBnYXBCZXR3ZWVuRXZlbnRzOiAoKSA9PiBjaG9vc2UoWzI1LDEwXSksXG4gICAgICBtZWxvZHlPc2NpbGxhdG9ycyxcbiAgICAgIGNob3JkT3NjaWxsYXRvcnMsXG4gICAgICBvbkZpbmlzaDogcGxheU5ld1NjZW5lXG4gICAgfVxuXG4gICAgc291cmNlU2FtcGxlc1tzYW1wbGVJbmRleF0ucGxheSh7ZnJlcTogMSwgdGltZTogNjAgKiAzICogMTAwMCwgdm9sOiAwLjIzfSk7XG5cbiAgICAvLyBTdGFydCB0aGUgc2NlbmVcbiAgICBuZXcgU2NlbmUoc2NlbmVDb25maWcpLnBsYXkoKTtcbiAgfTtcblxuICAvL3BsYXlOZXdTY2VuZSgpO1xuICBwbGF5QmVsbHMoKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgV05TO1xuZXhwb3J0IHsgV05TIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd25zLnRzIiwiXG5pbXBvcnQgeyBQbWFya292LCBQZ2VuZXRpYyB9IGZyb20gJy4vcGF0dGVybnMnO1xuaW1wb3J0IFN5bnRoIGZyb20gJy4vU3ludGgnO1xuaW1wb3J0IHtJU291bmRQbGF5ZXJ9IGZyb20gJy4vU291bmRQbGF5ZXInO1xuaW1wb3J0IHtJRnJlcUJpbn0gZnJvbSAnLi4vdG9vbHMvc3BlY3RydW1QZWFrUGFyc2VyJztcbmltcG9ydCB7IG1vZCwgbWFrZUZ1bmN0aW9uLCBtYXBUb0RvbWFpbiwgZmxpcENvaW4gfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBJU3BlY3RydW1Db25maWcge1xuICBhdWRpb0ZpbGU6IHN0cmluZyxcbiAgc3BlY3RydW06IElGcmVxQmluW10sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNjZW5lQ29uZmlnIHtcbiAgcG9wdWxhdGlvblNpemU6IG51bWJlcixcbiAgaW5pdGlhbFBvcHVsYXRpb246IGFueVtdW10sXG4gIHRhcmdldDogYW55W10sIC8vIEluIEZyZXF1ZW5jeVxuICBtYXhHZW5lcmF0aW9uczogbnVtYmVyO1xuICB0aW1lQmV0d2VlbkV2ZW50czogYW55IHxudW1iZXIgfCBGdW5jdGlvbixcbiAgZ2FwQmV0d2VlbkV2ZW50czogYW55IHwgbnVtYmVyIHwgRnVuY3Rpb24sXG4gIG1lbG9keU9zY2lsbGF0b3JzOiBJU291bmRQbGF5ZXJbXSxcbiAgY2hvcmRPc2NpbGxhdG9yczogSVNvdW5kUGxheWVyW10sXG4gIG9uRmluaXNoOiBGdW5jdGlvbixcbn1cblxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcbiAgbm90ZXM6IEl0ZXJhYmxlSXRlcmF0b3I8YW55PjtcbiAgY3VycmVudEdlbmVyYXRpb246IG51bWJlcjtcbiAgY29uZmlnOiBJU2NlbmVDb25maWc7XG4gIG9uRmluaXNoOiBGdW5jdGlvbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBJU2NlbmVDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgIHRoaXMuY29uZmlnLnRpbWVCZXR3ZWVuRXZlbnRzID0gbWFrZUZ1bmN0aW9uKHRoaXMuY29uZmlnLnRpbWVCZXR3ZWVuRXZlbnRzKTtcbiAgICB0aGlzLmNvbmZpZy5nYXBCZXR3ZWVuRXZlbnRzID0gbWFrZUZ1bmN0aW9uKHRoaXMuY29uZmlnLmdhcEJldHdlZW5FdmVudHMpO1xuICAgIHRoaXMubm90ZXMgPSBQZ2VuZXRpYyhjb25maWcuaW5pdGlhbFBvcHVsYXRpb24sIGNvbmZpZy50YXJnZXQpO1xuICAgIHRoaXMuY29uZmlnLm1heEdlbmVyYXRpb25zID0gY29uZmlnLm1heEdlbmVyYXRpb25zO1xuICAgIHRoaXMuY3VycmVudEdlbmVyYXRpb24gPSAwO1xuXG4gICAgdGhpcy5jb25maWcub25GaW5pc2ggPSBjb25maWcub25GaW5pc2g7XG4gIH1cblxuICBwdWJsaWMgcGxheSgpOiBTY2VuZSB7XG4gICAgY29uc3QgbmV4dEdlbjogbnVtYmVyW10gPSB0aGlzLm5vdGVzLm5leHQoKS52YWx1ZTtcbiAgICBjb25zdCBuZXdOb3RlczogbnVtYmVyW10gPSBuZXh0R2VuO1xuXG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBrID0gKE1hdGgucmFuZG9tKCkgPiAwLjUpID8gMCA6IDE7XG4gICAgdGhpcy5jb25maWcuY2hvcmRPc2NpbGxhdG9ycy5tYXAoKG9zYykgPT4ge1xuICAgICAgY29uc3Qgb2N0YXZlID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA1KTtcbiAgICAgIG9zYy5wbGF5KHtmcmVxOiBuZXdOb3Rlc1tpXS9vY3RhdmUsIHRpbWU6IHRoaXMuY29uZmlnLnRpbWVCZXR3ZWVuRXZlbnRzKCksIHBhbjogKChrJTIpKjIpIC0gMSwgdm9sOiAwLjJ9KTsgaSsrOyBrKys7XG4gICAgfSk7XG5cbiAgICB0aGlzLnBsYXlNZWxvZHkobmV3Tm90ZXMsIHRoaXMuY3VycmVudEdlbmVyYXRpb24pO1xuXG4gICAgLy9jb25zb2xlLmxvZygnR0VORVRJQyBHRU5FUkFUSU9OOiAnLCB0aGlzLmN1cnJlbnRHZW5lcmF0aW9uLCBuZXh0R2VuKTtcbiAgICBpZih0aGlzLmN1cnJlbnRHZW5lcmF0aW9uIDw9ICh0aGlzLmNvbmZpZy5tYXhHZW5lcmF0aW9ucy0xKSApIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50R2VuZXJhdGlvbisrO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgIH0sICh0aGlzLmNvbmZpZy50aW1lQmV0d2VlbkV2ZW50cygpICsgdGhpcy5jb25maWcuZ2FwQmV0d2VlbkV2ZW50cygpKSAqIDEwMDApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudEdlbmVyYXRpb24rKztcbiAgICAgIHRoaXMuZW5kT2ZTY2VuZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5TWVsb2R5KCBub3RlcywgZ2VuZXJhdGlvbiApOiB2b2lkIHtcbiAgICBjb25zdCBvcmRlciA9IDM7XG4gICAgY29uc3QgbmV3Tm90ZXMgPSBub3RlcztcblxuICAgIC8vIFRha2VuIGZyb20gdGhlIHNlcXVlbmNlIG9mIHBpdGNoZXMgaW4gXCJGb3JldmVyIGluIEJsdWUgSmVhbnNcIiBieSBOZWlsIERpYW1vbmRcbiAgICBjb25zdCBpZGVhbE1lbG9keSA9IG1hcFRvRG9tYWluKFswLDQsMiwwLDcsNCwyLDcsNyw0LDIsMiw0LDQsMiwwXSwgbmV3Tm90ZXMpO1xuICAgIGNvbnN0IHJhbmRvbVNoaWZ0QW1vdW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGlkZWFsTWVsb2R5Lmxlbmd0aCkpO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG4gICAgZm9yKGxldCBvZmZzZXQgPSBvcmRlcjsgb2Zmc2V0ID49IDA7IG9mZnNldC0tKSB7XG4gICAgICBpbml0aWFsU3RhdGUucHVzaCggaWRlYWxNZWxvZHlbbW9kKHJhbmRvbVNoaWZ0QW1vdW50LW9mZnNldCwgaWRlYWxNZWxvZHkubGVuZ3RoKV0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtvdk1lbG9keSA9IFBtYXJrb3YoaWRlYWxNZWxvZHksIG9yZGVyLCBpbml0aWFsU3RhdGUgKTtcblxuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBwbGF5TmV4dE5vdGUgPSAoZ2VuZXJhdGlvbikgPT4ge1xuICAgICAgY29uc3Qgb2N0YXZlID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAzKSArIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMyApICsgMjtcbiAgICAgIGNvbnN0IG5leHROb3RlID0gbWFya292TWVsb2R5Lm5leHQoKS52YWx1ZTtcblxuICAgICAgLy9pZihuZXh0Tm90ZSAhPT0gdW5kZWZpbmVkICYmIGZsaXBDb2luKDAuNzUpICkgeyAvLyBTb21ldGltZXMgcHJvYmFibGl0aWVzIGFyZSB6ZXJvLCBzbyB3ZSdsbCBnZXQgYW4gdW5kZWZpbmVkIG5leHQgc3RhdGVcbiAgICAgIGlmKG5leHROb3RlICE9PSB1bmRlZmluZWQgJiYgZmxpcENvaW4oMC41NSkgKSB7IC8vIFNvbWV0aW1lcyBwcm9iYWJsaXRpZXMgYXJlIHplcm8sIHNvIHdlJ2xsIGdldCBhbiB1bmRlZmluZWQgbmV4dCBzdGF0ZVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdwbGF5aW5nIG5vdGUnLCBuZXh0Tm90ZSk7XG4gICAgICAgIHRoaXMuY29uZmlnLm1lbG9keU9zY2lsbGF0b3JzW2kgJSB0aGlzLmNvbmZpZy5tZWxvZHlPc2NpbGxhdG9ycy5sZW5ndGhdLnBsYXkoe1xuICAgICAgICAgIGZyZXE6IG5leHROb3RlL29jdGF2ZSxcbiAgICAgICAgICB0aW1lOiAxICsgKE1hdGgucmFuZG9tKCkgKiA2KSxcbiAgICAgICAgICBwYW46IDAsXG4gICAgICAgICAgdm9sOiAwLjE1XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmKGdlbmVyYXRpb24gPT09IHRoaXMuY3VycmVudEdlbmVyYXRpb24gJiYgdGhpcy5jdXJyZW50R2VuZXJhdGlvbiA8PSB0aGlzLmNvbmZpZy5tYXhHZW5lcmF0aW9ucykge1xuICAgICAgICAgIHBsYXlOZXh0Tm90ZShnZW5lcmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSwgKChNYXRoLnJhbmRvbSgpICogMikgKyAwLjUpICogMTAwMCk7XG4gICAgfVxuXG4gICAgcGxheU5leHROb3RlKGdlbmVyYXRpb24pO1xuXG4gIH1cblxuICBwcml2YXRlIGVuZE9mU2NlbmUoKSB7XG4gICAgY29uc3Qgb25GaW5pc2hDYWxsYmFjayA9IHRoaXMuY29uZmlnLm9uRmluaXNoO1xuXG4gICAgdGhpcy5jb25maWcuY2hvcmRPc2NpbGxhdG9ycy5tYXAoIHN5bnRoID0+IHN5bnRoLnN0b3AoMSkgKTtcblxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KG9uRmluaXNoQ2FsbGJhY2ssIDEwMDApO1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TY2VuZS50cyIsIi8qXG4gKiBCYXNpYyBQYXR0ZXJucyBpbXBsZW1lbnRhdGlvblxuICovXG5cbmNvbnN0IE1hcmtvdiA9IHJlcXVpcmUoXCJtYXJrb3ZuXCIpLmRlZmF1bHQ7XG5pbXBvcnQgeyBHZW5ldGljIH0gZnJvbSBcIi4vR2VuZXRpY1wiO1xuXG5cbmV4cG9ydCBjb25zdCBQYXR0ZXJuID0gKHBhdHRlcm4pID0+IFsoKSA9PiBwYXR0ZXJuLm5leHQoKS52YWx1ZV07XG5cbmV4cG9ydCBjb25zdCBQc2VxID0gZnVuY3Rpb24qIFBzZXEodmFsdWVzOiBBcnJheTxhbnk+LCByZXBldGl0aW9uczogbnVtYmVyKXtcbiAgdmFyIGluZGV4OiBudW1iZXIgPSAwO1xuICB2YXIgcmVzdWx0ID0gKCk6IGFueSA9PiB2YWx1ZXNbaW5kZXgrKyAlIHZhbHVlcy5sZW5ndGhdO1xuXG4gIGlmKHJlcGV0aXRpb25zID09IHVuZGVmaW5lZCkge1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHlpZWxkIHJlc3VsdCgpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBmb3IodmFyIGk9MDsgaTxyZXBldGl0aW9uczsgaSsrKSB7XG4gICAgICB5aWVsZCByZXN1bHQoKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBQcmFuZCA9IGZ1bmN0aW9uKiBQcmFuZCh2YWx1ZXM6IEFycmF5PGFueT4sIHJlcGV0aXRpb25zOiBudW1iZXIpe1xuXG4gIHZhciByZXN1bHQgPSAoKTogYW55ID0+IHZhbHVlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWx1ZXMubGVuZ3RoKV07XG5cbiAgaWYocmVwZXRpdGlvbnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgeWllbGQgcmVzdWx0KCk7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGZvcih2YXIgaT0wOyBpPHJlcGV0aXRpb25zOyBpKyspIHtcbiAgICAgIHlpZWxkIHJlc3VsdCgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBtYXJrb3YgPSBmdW5jdGlvbiBQbWFya292KHNlZWQ6IGFueVtdLCBvcmRlcjogbnVtYmVyLCBpbml0aWFsU3RhdGU6IGFueVtdKSB7XG4gIGNvbnN0IG1hcmtvdkNoYWluID0gbmV3IE1hcmtvdihzZWVkLCBvcmRlcik7XG5cbiAgcmV0dXJuIG1hcmtvdkNoYWluLmFzUGF0dGVybihpbml0aWFsU3RhdGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IFBnZW5ldGljID0gZnVuY3Rpb24qIFBnZW5ldGljKGlucHV0UG9wdWxhdGlvbjogbnVtYmVyW11bXSwgZ29hbDogbnVtYmVyW10pIHtcbiAgbGV0IGdlbmV0aWM6IEdlbmV0aWMgPSBuZXcgR2VuZXRpYyhpbnB1dFBvcHVsYXRpb24sIGdvYWwpO1xuXG4gIGxldCBsYXN0U3RhdGU6IG51bWJlcltdID0gZ29hbDtcblxuICB3aGlsZSh0cnVlKSB7XG4gICAgbGV0IG5leHRTdGF0ZTogYW55ID0gZ2VuZXRpYy5nZXROZXh0U3RhdGUobGFzdFN0YXRlKTtcblxuICAgIGxhc3RTdGF0ZSA9IFtsYXN0U3RhdGVbbGFzdFN0YXRlLmxlbmd0aC0xXSwgbmV4dFN0YXRlXTtcblxuICAgIHlpZWxkIG5leHRTdGF0ZTtcbiAgfVxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhdHRlcm5zLnRzIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJNYXJrb3ZOXCIsW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5NYXJrb3ZOPWUoKTp0Lk1hcmtvdk49ZSgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihyKXtpZihlW3JdKXJldHVybiBlW3JdLmV4cG9ydHM7dmFyIG89ZVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxyKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgbyBpbiB0KW4uZChyLG8sZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSk7Y29uc3Qgcj10PT57bGV0IGU9dC5yZWR1Y2UoKHQsZSk9PnQrZSksbj1NYXRoLnJhbmRvbSgpKmUscj0wO2ZvcihsZXQgZT0wO2U8dC5sZW5ndGg7ZSsrKWlmKG48PShyPSsocis9dFtlXSkudG9GaXhlZCgyKSkpcmV0dXJuIGV9LG89dD0+e2xldCBlPXQucmVkdWNlKCh0LGUpPT50K2UpO3JldHVybiBlPjA/dC5tYXAodD0+dC9lKTp0Lm1hcCgoKT0+MCl9LGk9KHQsZSk9Pnt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KSxyPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpO2lmKG4ubGVuZ3RoIT1yLmxlbmd0aClyZXR1cm4hMTtmb3IodmFyIG89MDtvPG4ubGVuZ3RoO28rKyl7dmFyIGk9bltvXTtpZih0W2ldIT09ZVtpXSlyZXR1cm4hMX1yZXR1cm4hMH0scz0odCxlKT0+KHQlZStlKSVlO24uZChlLFwiZ2V0QWxsVHJhbnNpdGlvbnNcIixmdW5jdGlvbigpe3JldHVybiBhfSksbi5kKGUsXCJNYXJrb3ZOXCIsZnVuY3Rpb24oKXtyZXR1cm4gbH0pO2NvbnN0IGE9KHQsZSk9PnQucmVkdWNlKChuLHIsbyk9Pntjb25zdCBpPVtdO2ZvcihsZXQgbj1lO24+PTA7bi0tKWkucHVzaCh0W3Moby1uLHQubGVuZ3RoKV0pO3JldHVybiBuLnB1c2goaSksbn0sW10pLHU9KHQsZSk9Pntjb25zdCBuPVsuLi50XTtyZXR1cm4gbi5zaGlmdCgpLG4ucHVzaChlKSxufTtjbGFzcyBse2NvbnN0cnVjdG9yKHQsZSl7dGhpcy5kaWN0aW9uYXJ5PVtdLHRoaXMuY29tYmluYXRpb25zPVtdLHRoaXMubGFzdFN0YXRlPVtdO2ZvcihsZXQgbj0wO248ZTtuKyspdGhpcy5sYXN0U3RhdGUucHVzaCh0W25dKTt0aGlzLnRyYW5zaXRpb25NYXRyaXg9dGhpcy5jcmVhdGVUcmFuc2l0aW9uTWF0cml4KHQsZSl9Y3JlYXRlVHJhbnNpdGlvbk1hdHJpeCh0LGUpe3RoaXMuZGljdGlvbmFyeT1BcnJheS5mcm9tKG5ldyBTZXQodCkpLHRoaXMuY29tYmluYXRpb25zPWEodCxlKTtsZXQgbj1bXTtmb3IobGV0IHQ9MDt0PHRoaXMuY29tYmluYXRpb25zLmxlbmd0aDt0Kyspe2xldCB0PVtdO2ZvcihsZXQgZT0wO2U8dGhpcy5kaWN0aW9uYXJ5Lmxlbmd0aDtlKyspdC5wdXNoKDApO24ucHVzaCh0KX1mb3IobGV0IHI9MDtyPHQubGVuZ3RoO3IrKyl7bGV0IG89W107Zm9yKGxldCBuPWU7bj49MDtuLS0pby5wdXNoKHRbcyhyLW4sdC5sZW5ndGgpXSk7bGV0IGE9dGhpcy5jb21iaW5hdGlvbnMuZmluZEluZGV4KHQ9Pmkobyx0KSksdT10WyhyKzEpJXQubGVuZ3RoXSxsPXRoaXMuZGljdGlvbmFyeS5pbmRleE9mKHUpO25bYV1bbF0rK31yZXR1cm4gbj1uLm1hcChvKX1nZXROZXh0U3RhdGUodCl7Y29uc3QgZT10aGlzLnRyYW5zaXRpb25NYXRyaXhbdGhpcy5jb21iaW5hdGlvbnMuZmluZEluZGV4KGU9PmkodCxlKSldLG49cihlKTtyZXR1cm4gdGhpcy5kaWN0aW9uYXJ5W25dfSphc1BhdHRlcm4odCl7Zm9yKHRoaXMubGFzdFN0YXRlPXQ7Oyl7bGV0IHQ9dGhpcy5nZXROZXh0U3RhdGUodGhpcy5sYXN0U3RhdGUpO3RoaXMubGFzdFN0YXRlPXUodGhpcy5sYXN0U3RhdGUsdCkseWllbGQgdH19fWUuZGVmYXVsdD1sfV0pfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWFya292bi9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmltcG9ydCB7IGZsaXBDb2luIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuXG5jbGFzcyBHZW5ldGljIHtcbiAgcHVibGljIHBvcHVsYXRpb246IG51bWJlcltdW107XG4gIHByaXZhdGUgZ29hbDogbnVtYmVyW107XG4gIHByaXZhdGUgc2NvcmVzOiBudW1iZXJbXTtcbiAgcHJpdmF0ZSBsYXN0U3RhdGU6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKGlucHV0UG9wdWxhdGlvbjogbnVtYmVyW11bXSwgZ29hbDogbnVtYmVyW10pIHtcbiAgICB0aGlzLnBvcHVsYXRpb24gPSBpbnB1dFBvcHVsYXRpb247XG4gICAgdGhpcy5zY29yZXMgPSBBcnJheShpbnB1dFBvcHVsYXRpb24ubGVuZ3RoKS5maWxsKDApO1xuICAgIHRoaXMuZ29hbCA9IGdvYWw7XG4gICAgdGhpcy5sYXN0U3RhdGUgPSBpbnB1dFBvcHVsYXRpb25bTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIChpbnB1dFBvcHVsYXRpb24ubGVuZ3RoLTEpKSBdO1xuICB9XG5cblxuICAvLyBBY2N1bXVsYXRlIGFuZCByZXR1cm4gdGhlIHNjb3JlIGZvciBhIHNpbmdsZSBjb2xsZWN0aW9uXG4gIGdldFRvdGFsRml0bmVzc1JhdGluZyhjb2xsZWN0aW9uOiBudW1iZXJbXSwgZ29hbDogbnVtYmVyW10pIHtcbiAgICBsZXQgc2NvcmU6IG51bWJlciA9IDA7IC8vIGxvd2VyIGlzIGJldHRlclxuICAgIGxldCBub3JtYWxpemVkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ubWFwKChudW06IG51bWJlcikgPT4gbnVtIC0gTWF0aC5taW4uYXBwbHkobnVsbCwgY29sbGVjdGlvbikgKTtcblxuICAgIGZvcihsZXQgaT1ub3JtYWxpemVkQ29sbGVjdGlvbi5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHNjb3JlICs9IHRoaXMuZ2V0RGlzdGFuY2Uobm9ybWFsaXplZENvbGxlY3Rpb25baV0sIGdvYWxbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiBzY29yZTtcbiAgfVxuXG4gIC8vIFRPRE86IHRlc3RcbiAgLy8gVXNpbmcgdGhlIGdpdmVuIHNjb3JlcywgZ2V0IHRoZSBtb3N0IFwiZml0XCIgdHdvIGdlbmVyYXRpb25zIG91dCBvZiB0aGUgcG9wdWxhdGlvblxuICBnZXRUb3BUd29HZW5lcmF0aW9ucyhzY29yZXM6IG51bWJlcltdLCBwb3B1bGF0aW9uOiBudW1iZXJbXVtdKTogbnVtYmVyW11bXSB7XG5cbiAgICBsZXQgaW5kZXhPZkhpZ2hlc3RTY29yZSA9IDA7XG5cbiAgICBmb3IobGV0IGk9c2NvcmVzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgIGlmKHNjb3Jlc1tpbmRleE9mSGlnaGVzdFNjb3JlXSA8IHNjb3Jlc1tpXSkge1xuICAgICAgICBpbmRleE9mSGlnaGVzdFNjb3JlID0gaTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlcmUgYXJlIHR3byBvZiB0aGUgc2FtZSBzY29yZXMsIGNob29zZSBvbmUgcmFuZG9tbHlcbiAgICAgIGlmKHNjb3Jlc1tpbmRleE9mSGlnaGVzdFNjb3JlXSA9PT0gc2NvcmVzW2ldKSB7XG4gICAgICAgIGNvbnN0IGNvaW5GbGlwID0gTWF0aC5yYW5kb20oKTtcblxuICAgICAgICBpbmRleE9mSGlnaGVzdFNjb3JlID0gKGNvaW5GbGlwID4gMC41KSA/IGluZGV4T2ZIaWdoZXN0U2NvcmUgOiBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBpbmRleE9mTmV4dEhpZ2hlc3RTY29yZTogbnVtYmVyID0gMDtcbiAgICBjb25zdCB0b3BHZW5lcmF0aW9uU2NvcmU6IG51bWJlciA9IHNjb3Jlc1tpbmRleE9mSGlnaGVzdFNjb3JlXTtcblxuXG4gICAgY29uc3QgY29pbkZsaXBGb3JNdXRhdGUgPSBmbGlwQ29pbigwLjI1KTtcblxuICAgIGlmKGNvaW5GbGlwRm9yTXV0YXRlKSB7XG4gICAgICBpbmRleE9mTmV4dEhpZ2hlc3RTY29yZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNjb3Jlcy5sZW5ndGgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvcihsZXQgaT1zY29yZXMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAvLyBJZ25vcmUgYW55IHNjb3JlcyB0aGF0IGFyZSBhbHJlYWR5IHRoZSBoaWdoZXN0IHNjb3JlXG4gICAgICAgIGlmKHNjb3Jlc1tpXSAhPT0gdG9wR2VuZXJhdGlvblNjb3JlKSB7XG5cbiAgICAgICAgICBpZihzY29yZXNbaW5kZXhPZk5leHRIaWdoZXN0U2NvcmVdIDwgc2NvcmVzW2ldKSB7XG4gICAgICAgICAgICBpbmRleE9mTmV4dEhpZ2hlc3RTY29yZSA9IGk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIHR3byBvZiB0aGUgc2FtZSBzY29yZXMsIGNob29zZSBvbmUgcmFuZG9tbHlcbiAgICAgICAgICBpZihzY29yZXNbaW5kZXhPZk5leHRIaWdoZXN0U2NvcmVdID09PSBzY29yZXNbaV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvaW5GbGlwID0gTWF0aC5yYW5kb20oKTtcblxuICAgICAgICAgICAgaW5kZXhPZk5leHRIaWdoZXN0U2NvcmUgPSAoY29pbkZsaXAgPiAwLjUpID8gaW5kZXhPZk5leHRIaWdoZXN0U2NvcmUgOiBpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbcG9wdWxhdGlvbltpbmRleE9mSGlnaGVzdFNjb3JlXSwgcG9wdWxhdGlvbltpbmRleE9mTmV4dEhpZ2hlc3RTY29yZV0gXTtcbiAgfVxuXG4gIC8vIFRPRE86IE1ha2UgbW9yZSB0aGFuIG9uZSB0eXBlIG9mIG1hdGluZ1xuICAvLyBUYWtlIGluIHR3byBhcnJheXMgKHBhcmVudHMpIGFuZCBtYXRlIHRoZW0gaW4gYSBudW1iZXIgb2YgZGlmZmVyZW50IHdheXMgdG8gcHJvZHVjZSBtdWx0aXBsZSBvZmZzcHJpbmdcbiAgbWF0ZUdlbmVyYXRpb25zKHBhcmVudHM6IG51bWJlcltdW10pOiBudW1iZXJbXVtdIHtcblxuICAgIGNvbnN0IHNwbGljZWRPZmZzcHJpbmcgPSB0aGlzLmdldFNwbGljZWRPZmZzcHJpbmcocGFyZW50c1swXSwgcGFyZW50c1sxXSk7XG4gICAgY29uc3QgaW50ZXJsYWNlZE9mZnNwcmluZyA9IHRoaXMuZ2V0SW50ZXJsYWNlZE9mZnNwcmluZyhwYXJlbnRzWzBdLCBwYXJlbnRzWzFdKTtcblxuICAgIC8vIEdlbmVyYXRlIG1vcmUgdGhhbiBvbmUgb2Zmc3ByaW5nXG4gICAgcmV0dXJuIFtzcGxpY2VkT2Zmc3ByaW5nLCBpbnRlcmxhY2VkT2Zmc3ByaW5nXTtcbiAgfVxuXG4gIC8vIFNwbGljZSB0d28gZXF1YWwtbGVuZ3RoIGFycmF5cyB0b2dldGhlciBhbmQgcmV0dXJuIHRoZSByZXN1bHRcbiAgZ2V0SW50ZXJsYWNlZE9mZnNwcmluZyhwYXJlbnRPbmU6IG51bWJlcltdLCBwYXJlbnRUd286IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IGludGVybGFjZWRPZmZzcHJpbmcgPSBBcnJheShwYXJlbnRPbmUubGVuZ3RoKTtcblxuICAgIGZvcihsZXQgaT1pbnRlcmxhY2VkT2Zmc3ByaW5nLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgIGludGVybGFjZWRPZmZzcHJpbmdbaV0gPSAoaSUyKSA9PT0gMCA/IHBhcmVudE9uZVtpXSA6IHBhcmVudFR3b1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJsYWNlZE9mZnNwcmluZztcbiAgfVxuXG4gIGdldFNwbGljZWRPZmZzcHJpbmcocGFyZW50T25lOiBudW1iZXJbXSwgcGFyZW50VHdvOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICBjb25zdCBjb2luRmxpcDogbnVtYmVyID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAwO1xuICAgIGNvbnN0IHBhcmVudHMgPSBjb2luRmxpcCA9PSAwID8gW3BhcmVudE9uZSwgcGFyZW50VHdvXSA6IFtwYXJlbnRUd28sIHBhcmVudE9uZV07XG4gICAgY29uc3Qgc3BsaXRQb2ludDogbnVtYmVyID0gTWF0aC5mbG9vcihwYXJlbnRPbmUubGVuZ3RoIC8gMik7XG5cbiAgICBjb25zdCBzcGxpY2VkT2Zmc3ByaW5nID0gWy4uLihwYXJlbnRzWzBdLnNsaWNlKDAsIHNwbGl0UG9pbnQpKSwgLi4uKHBhcmVudHNbMV0uc2xpY2Uoc3BsaXRQb2ludC0xLCBwYXJlbnRzWzFdLmxlbmd0aC0xKSkgXTtcblxuICAgIHJldHVybiBzcGxpY2VkT2Zmc3ByaW5nO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIG51bWVyaWNhbCBkaXN0YW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIGdvYWxcbiAgZ2V0RGlzdGFuY2UoaW5wdXQ6IG51bWJlciwgZ29hbDogbnVtYmVyKSB7XG4gICAgbGV0IHJhdGluZzogbnVtYmVyID0gZ29hbCAtIGlucHV0O1xuXG4gICAgcmV0dXJuIHJhdGluZztcbiAgfVxuXG5cblxuXG5cbiAgLy8gQ2FsY3VsYXRlIGFuZCByZXR1cm4gdGhlIHNjb3JlcyBmb3IgYWxsIGN1cnJlbnQgY29sbGVjdGlvbnNcbiAgZ2V0UG9wdWxhdGlvblNjb3Jlcyhwb3B1bGF0aW9uOiBudW1iZXJbXVtdLCBnb2FsOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICBsZXQgc2NvcmVzID0gQXJyYXkocG9wdWxhdGlvbi5sZW5ndGgpLmZpbGwoMCk7XG5cbiAgICBmb3IobGV0IGk9KHBvcHVsYXRpb24ubGVuZ3RoLTEpOyBpPj0wOyBpLS0pIHtcbiAgICAgIHNjb3Jlc1tpXSA9IHRoaXMuZ2V0VG90YWxGaXRuZXNzUmF0aW5nKHBvcHVsYXRpb25baV0sIGdvYWwpO1xuICAgIH1cblxuICAgIHJldHVybiBzY29yZXM7XG4gIH1cblxuICBnZXROZXh0R2VuZXJhdGlvbihwb3B1bGF0aW9uOiBudW1iZXJbXVtdLCBnb2FsOiBudW1iZXJbXSkge1xuICAgIGNvbnN0IHBvcHVsYXRpb25TY29yZXM6bnVtYmVyW10gPSB0aGlzLmdldFBvcHVsYXRpb25TY29yZXMocG9wdWxhdGlvbiwgZ29hbCk7XG4gICAgY29uc3QgdG9wVHdvR2VuZXJhdGlvbnM6bnVtYmVyW11bXSA9IHRoaXMuZ2V0VG9wVHdvR2VuZXJhdGlvbnMocG9wdWxhdGlvblNjb3JlcywgcG9wdWxhdGlvbik7XG4gICAgY29uc3QgbmV3R2VuZXJhdGlvbnM6bnVtYmVyW11bXSA9IHRoaXMubWF0ZUdlbmVyYXRpb25zKHRvcFR3b0dlbmVyYXRpb25zKTtcblxuICAgIGZvcihsZXQgaT0wOyBpIDwgKG5ld0dlbmVyYXRpb25zLmxlbmd0aC0xKTsgaSsrKSB7XG4gICAgICB0aGlzLnBvcHVsYXRpb24uc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLnBvcHVsYXRpb24ubGVuZ3RoLTEpKSwgMSk7XG4gICAgfVxuICAgIHRoaXMucG9wdWxhdGlvbiA9IFsuLi50aGlzLnBvcHVsYXRpb24sIC4uLm5ld0dlbmVyYXRpb25zXTtcbiAgICAvLyBGb3Igbm93IHJhbmRvbWx5IHNlbGVjdCBvbmUgb2YgdGhlIGJlc3QgZ2VuZXJhdGlvbnNcbiAgICBjb25zdCBiZXN0Rml0R2VuZXJhdGlvbiA9IG5ld0dlbmVyYXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChuZXdHZW5lcmF0aW9ucy5sZW5ndGggKiAwLjk5OSkpXTtcblxuICAgIHJldHVybiBiZXN0Rml0R2VuZXJhdGlvbjtcbiAgfVxuXG4gIGdldE5leHRTdGF0ZShzdGF0ZTogbnVtYmVyW10pIHtcbiAgICAvLyBUT0RPOiBVc2Ugc3RhdGUgdG8gYWRkIGludG8gdGhlIHBvcHVsYXRpb25cblxuICAgIGNvbnN0IG5leHRTdGF0ZTogbnVtYmVyW10gPSB0aGlzLmdldE5leHRHZW5lcmF0aW9uKHRoaXMucG9wdWxhdGlvbiwgdGhpcy5nb2FsKTtcblxuICAgIHJldHVybiBuZXh0U3RhdGU7XG4gIH1cblxuICBhc1BhdHRlcm4oKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24qIGFzUGF0dGVybihpbml0aWFsU3RhdGU6IG51bWJlcltdKSB7XG4gICAgICBzZWxmLmxhc3RTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSBzZWxmLmdldE5leHRTdGF0ZShzZWxmLmxhc3RTdGF0ZSk7XG4gICAgICAgIHNlbGYubGFzdFN0YXRlID0gbmV4dFN0YXRlO1xuXG4gICAgICAgIHlpZWxkIG5leHRTdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbn07XG5cbmV4cG9ydCB7IEdlbmV0aWMgfTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0dlbmV0aWMudHMiLCIvLyBCYXNpYyBjdXJ2ZSBmcm9tIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XYXZlU2hhcGVyTm9kZVxuY29uc3QgbWFrZURpc3RvcnRpb25DdXJ2ZSA9IGFtb3VudCA9PiB7XG4gIHZhciBrID0gdHlwZW9mIGFtb3VudCA9PT0gJ251bWJlcicgPyBhbW91bnQgOiA1MCxcbiAgICBuX3NhbXBsZXMgPSA0NDEwMCxcbiAgICBjdXJ2ZSA9IG5ldyBGbG9hdDMyQXJyYXkobl9zYW1wbGVzKSxcbiAgICBkZWcgPSBNYXRoLlBJIC8gMTgwLFxuICAgIGkgPSAwLFxuICAgIHg7XG4gIGZvciAoIDsgaSA8IG5fc2FtcGxlczsgKytpICkge1xuICAgIHggPSBpICogMiAvIG5fc2FtcGxlcyAtIDE7XG4gICAgY3VydmVbaV0gPSAoIDMgKyBrICkgKiB4ICogMjAgKiBkZWcgLyAoIE1hdGguUEkgKyBrICogTWF0aC5hYnMoeCkgKTtcbiAgfVxuICByZXR1cm4gY3VydmU7XG59O1xuXG5cbmltcG9ydCB7SVNvdW5kUGxheWVyLCBJUGxheU9wdGlvbnN9IGZyb20gJy4vU291bmRQbGF5ZXInO1xuaW1wb3J0IHsgZmxpcENvaW4gfSBmcm9tICcuL3V0aWxzJztcblxuaW50ZXJmYWNlIElTeW50aE9wdGlvbnMge1xuICB3YXZlZm9ybVR5cGU/OiBzdHJpbmcsXG59XG5cbmNsYXNzIFN5bnRoIGltcGxlbWVudHMgSVNvdW5kUGxheWVyIHtcbiAgb3NjaWxsYXRvcjogYW55O1xuICBjb250ZXh0OiBBdWRpb0NvbnRleHQ7XG4gIGdhaW5Ob2RlO1xuICB3YXZlU2hhcGVyO1xuICBwYW5uZXI6IFN0ZXJlb1Bhbm5lck5vZGU7XG4gIGNvbmZpZzogSVN5bnRoT3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjb25maWc/OiBJU3ludGhPcHRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnID8gY29uZmlnIDoge307XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgdGhpcy5vc2NpbGxhdG9yID0gdGhpcy5jb250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICAvL3RoaXMuY29uZmlnLndhdmVmb3JtVHlwZSAmJiAodGhpcy5vc2NpbGxhdG9yLnR5cGUgPSB0aGlzLmNvbmZpZy53YXZlZm9ybVR5cGUpO1xuXG4gICAgdGhpcy5nYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5wYW5uZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU3RlcmVvUGFubmVyKCk7XG4gICAgdGhpcy53YXZlU2hhcGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVdhdmVTaGFwZXIoKTtcbiAgICB0aGlzLndhdmVTaGFwZXIuY3VydmUgPSBtYWtlRGlzdG9ydGlvbkN1cnZlKDgwMCk7XG4gICAgdGhpcy53YXZlU2hhcGVyLm92ZXJzYW1wbGUgPSAnNHgnO1xuXG4gICAgdGhpcy5vc2NpbGxhdG9yLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7XG4gICAgdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMucGFubmVyKTtcbiAgICB0aGlzLnBhbm5lci5jb25uZWN0KHRoaXMud2F2ZVNoYXBlcik7XG4gICAgLy90aGlzLnBhbm5lci5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy53YXZlU2hhcGVyLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgIHRoaXMub3NjaWxsYXRvci50eXBlID0gdGhpcy5jb25maWcud2F2ZWZvcm1UeXBlID8gdGhpcy5jb25maWcud2F2ZWZvcm1UeXBlIDogZmxpcENvaW4oKSA/ICd0cmlhbmdsZScgOiAnc2luZSc7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gMDtcbiAgfVxuXG4gIHB1YmxpYyBwbGF5KG9wdDogSVBsYXlPcHRpb25zKSB7XG4gICAgY29uc3Qge2ZyZXE9MjIwLCB0aW1lPTEsIHBhbj0wLCB2b2w9MX0gPSBvcHQ7XG4gICAgdGhpcy5pbml0KCk7XG5cbiAgICBsZXQgZ2FpbiA9IDAuMDE7XG4gICAgdGhpcy5vc2NpbGxhdG9yLmZyZXF1ZW5jeS52YWx1ZSA9IGZyZXE7XG5cbiAgICBvcHQuZGlzdG9ydGlvbiAmJiAodGhpcy53YXZlU2hhcGVyLmN1cnZlID0gbWFrZURpc3RvcnRpb25DdXJ2ZShvcHQuZGlzdG9ydGlvbikgKTtcbiAgICAvLyBzb21lIHN0dXBpZCBiYXNpYyBwc3ljaG9hY291c3RpYyBzaGFwaW5nXG4gICAgaWYoZnJlcSA+IDIwMCkgZ2FpbiA9IGdhaW4qMC4xMjtcbiAgICBpZihmcmVxID4gNjAwMCkgZ2FpbiA9IGdhaW4qMC4wODtcbiAgICB0aGlzLnBhbm5lci5wYW4udmFsdWUgPSBwYW47XG4gICAgdGhpcy5vc2NpbGxhdG9yLnN0YXJ0KDApO1xuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi5zZXRUYXJnZXRBdFRpbWUodm9sICogZ2FpbiAqICgwLjU1IC0gKE1hdGgucmFuZG9tKCkgKiAwLjAxKSksIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSwgdGltZSAqIDAuODUgKTtcblxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5zdG9wKHRpbWUgKiAwLjI1KTtcbiAgICB9LCAodGltZSAtICh0aW1lKjAuMjUpKSAqIDEwMDApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc3RvcCh0aW1lKSB7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnNldFRhcmdldEF0VGltZSgwLCB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUsIHRpbWUqMC45ICk7XG4gICAgdGhpcy5vc2NpbGxhdG9yLnN0b3AodGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lICsgKCB0aW1lICogNCApKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ludGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3ludGgudHMiLCIvLyBCYXNpYyBjdXJ2ZSBmcm9tIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XYXZlU2hhcGVyTm9kZVxuY29uc3QgbWFrZURpc3RvcnRpb25DdXJ2ZSA9IGFtb3VudCA9PiB7XG4gIHZhciBrID0gdHlwZW9mIGFtb3VudCA9PT0gJ251bWJlcicgPyBhbW91bnQgOiA1MCxcbiAgICBuX3NhbXBsZXMgPSA0NDEwMCxcbiAgICBjdXJ2ZSA9IG5ldyBGbG9hdDMyQXJyYXkobl9zYW1wbGVzKSxcbiAgICBkZWcgPSBNYXRoLlBJIC8gMTgwLFxuICAgIGkgPSAwLFxuICAgIHg7XG4gIGZvciAoIDsgaSA8IG5fc2FtcGxlczsgKytpICkge1xuICAgIHggPSBpICogMiAvIG5fc2FtcGxlcyAtIDE7XG4gICAgY3VydmVbaV0gPSAoIDMgKyBrICkgKiB4ICogMjAgKiBkZWcgLyAoIE1hdGguUEkgKyBrICogTWF0aC5hYnMoeCkgKTtcbiAgfVxuICByZXR1cm4gY3VydmU7XG59O1xuXG5cbmltcG9ydCB7SVNvdW5kUGxheWVyLCBJUGxheU9wdGlvbnN9IGZyb20gJy4vU291bmRQbGF5ZXInO1xuXG5pbnRlcmZhY2UgSVN5bnRoT3B0aW9ucyB7XG4gIHdhdmVmb3JtVHlwZT86IHN0cmluZyxcbn1cblxuY29uc3QgYnVmZmVyU2l6ZSA9IDQwOTY7XG5jb25zdCBjcmVhdGVCcm93bk5vaXNlID0gYXVkaW9Db250ZXh0ID0+IHtcbiAgICB2YXIgbGFzdE91dCA9IDAuMDtcbiAgICB2YXIgbm9kZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoYnVmZmVyU2l6ZSwgMSwgMSk7XG4gICAgbm9kZS5vbmF1ZGlvcHJvY2VzcyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IGUub3V0cHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1ZmZlclNpemU7IGkrKykge1xuICAgICAgICAgICAgdmFyIHdoaXRlID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuICAgICAgICAgICAgb3V0cHV0W2ldID0gKGxhc3RPdXQgKyAoMC4wMiAqIHdoaXRlKSkgLyAxLjAyO1xuICAgICAgICAgICAgbGFzdE91dCA9IG91dHB1dFtpXTtcbiAgICAgICAgICAgIG91dHB1dFtpXSAqPSAzLjU7IC8vIChyb3VnaGx5KSBjb21wZW5zYXRlIGZvciBnYWluXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59O1xuXG5jbGFzcyBOb2lzZSBpbXBsZW1lbnRzIElTb3VuZFBsYXllciB7XG4gIG9zY2lsbGF0b3I6IGFueTtcbiAgY29udGV4dDogQXVkaW9Db250ZXh0O1xuICBnYWluTm9kZTtcbiAgd2F2ZVNoYXBlcjtcbiAgcGFubmVyOiBTdGVyZW9QYW5uZXJOb2RlO1xuICBmaWx0ZXI7XG4gIGZpbHRlcjI7XG4gIGNvbmZpZzogSVN5bnRoT3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjb25maWc/OiBJU3ludGhPcHRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnID8gY29uZmlnIDoge307XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgdGhpcy5vc2NpbGxhdG9yID0gY3JlYXRlQnJvd25Ob2lzZSh0aGlzLmNvbnRleHQpO1xuICAgIC8vdGhpcy5jb25maWcud2F2ZWZvcm1UeXBlICYmICh0aGlzLm9zY2lsbGF0b3IudHlwZSA9IHRoaXMuY29uZmlnLndhdmVmb3JtVHlwZSk7XG5cbiAgICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLnBhbm5lciA9IHRoaXMuY29udGV4dC5jcmVhdGVTdGVyZW9QYW5uZXIoKTtcbiAgICB0aGlzLmZpbHRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICB0aGlzLmZpbHRlci50eXBlID0gJ3BlYWtpbmcnO1xuICAgIHRoaXMuZmlsdGVyMiA9IHRoaXMuY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICB0aGlzLmZpbHRlcjIudHlwZSA9ICdiYW5kcGFzcyc7XG5cbiAgICB0aGlzLndhdmVTaGFwZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlV2F2ZVNoYXBlcigpO1xuICAgIHRoaXMud2F2ZVNoYXBlci5jdXJ2ZSA9IG1ha2VEaXN0b3J0aW9uQ3VydmUoODApO1xuICAgIHRoaXMud2F2ZVNoYXBlci5vdmVyc2FtcGxlID0gJzR4JztcblxuICAgIHRoaXMub3NjaWxsYXRvci5jb25uZWN0KHRoaXMud2F2ZVNoYXBlcik7XG4gICAgdGhpcy53YXZlU2hhcGVyLmNvbm5lY3QodGhpcy5maWx0ZXIpO1xuICAgIHRoaXMuZmlsdGVyLmNvbm5lY3QodGhpcy5maWx0ZXIyKTtcbiAgICB0aGlzLmZpbHRlcjIuY29ubmVjdCh0aGlzLnBhbm5lcik7XG4gICAgdGhpcy5wYW5uZXIuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcbiAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgIC8vdGhpcy5vc2NpbGxhdG9yLnR5cGUgPSB0aGlzLmNvbmZpZy53YXZlZm9ybVR5cGUgPyB0aGlzLmNvbmZpZy53YXZlZm9ybVR5cGUgOiB1dGlscy5mbGlwQ29pbigpID8gJ3RyaWFuZ2xlJyA6ICdzaW5lJztcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwO1xuICB9XG5cbiAgcHVibGljIHBsYXkob3B0OiBJUGxheU9wdGlvbnMpIHtcbiAgICBjb25zdCB7ZnJlcT0yMjAsIHRpbWU9MSwgcGFuPTAsIHZvbD0xfSA9IG9wdDtcbiAgICB0aGlzLmluaXQoKTtcblxuICAgIGxldCBnYWluID0gMS4wO1xuICAgIC8vdGhpcy5vc2NpbGxhdG9yLmZyZXF1ZW5jeS52YWx1ZSA9IGZyZXE7XG4gICAgdGhpcy5maWx0ZXIuZnJlcXVlbmN5LnZhbHVlID0gZnJlcTtcbiAgICB0aGlzLmZpbHRlci5RLnZhbHVlID0gNTAuOTAxO1xuICAgIHRoaXMuZmlsdGVyLmdhaW4udmFsdWUgPSAyMDtcblxuICAgIHRoaXMuZmlsdGVyMi5mcmVxdWVuY3kudmFsdWUgPSBmcmVxO1xuICAgIHRoaXMuZmlsdGVyMi5RLnZhbHVlID0gMTUuOTAxO1xuICAgIHRoaXMuZmlsdGVyMi5nYWluLnZhbHVlID0gNjA7XG5cbiAgICBvcHQuZGlzdG9ydGlvbiAmJiAodGhpcy53YXZlU2hhcGVyLmN1cnZlID0gbWFrZURpc3RvcnRpb25DdXJ2ZShvcHQuZGlzdG9ydGlvbikgKTtcbiAgICAvLyBzb21lIHN0dXBpZCBiYXNpYyBweXNjaG9hY291c3RpYyBzaGFwaW5nXG4gICAgaWYoZnJlcSA+IDIwMCkgZ2FpbiA9IGdhaW4qMC4xMjtcbiAgICB0aGlzLnBhbm5lci5wYW4udmFsdWUgPSBwYW47XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gMC4wMDE7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUodm9sICogZ2FpbiwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lICsgdGltZSk7XG5cblxuICAgIHNldFRpbWVvdXQodGhpcy5zdG9wLmJpbmQodGhpcyksICh0aW1lKzEpICogMTAwMCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzdG9wKCkge1xuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi5zZXRUYXJnZXRBdFRpbWUoMCwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lLCAwLjAxICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5leHBvcnQgeyBOb2lzZSB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL05vaXNlLnRzIiwiaW1wb3J0IHtIb3dsLCBIb3dsZXJ9IGZyb20gJ2hvd2xlcic7XG5pbXBvcnQgeyBnZXRSYXRlRnJvbUZyZXF1ZW5jaWVzLCBnZXRDbG9zZXN0TWVtYmVyLCBmaW5kSW5Db2xsZWN0aW9uIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge0lTb3VuZFBsYXllciwgSVBsYXlPcHRpb25zLCBJU2FtcGxlfSBmcm9tICcuL1NvdW5kUGxheWVyJztcblxuaW50ZXJmYWNlIElQbGF5ZXIge1xuICBwbGF5ZXI6IEhvd2wsXG4gIGJhc2VGcmVxOiBudW1iZXIsXG59XG5cbmNsYXNzIE11bHRpU2FtcGxlciBpbXBsZW1lbnRzIElTb3VuZFBsYXllciB7XG4gIHBsYXllcnM6IElQbGF5ZXJbXTtcbiAgY29udGV4dDogQXVkaW9Db250ZXh0O1xuICBnYWluTm9kZTtcbiAgcGFubmVyOiBTdGVyZW9QYW5uZXJOb2RlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG9wdDogeyBzYW1wbGVzOiBJU2FtcGxlW10gfSApIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMucGxheWVycyA9IG9wdC5zYW1wbGVzLm1hcCggc2FtcGxlQ29uZmlnID0+ICh7cGxheWVyOiBuZXcgSG93bCh7c3JjOiBzYW1wbGVDb25maWcuZmlsZXN9KSwgYmFzZUZyZXE6IHNhbXBsZUNvbmZpZy5mcmVxfSkgKTtcbiAgfVxuXG4gIHB1YmxpYyBwbGF5KG9wdDogSVBsYXlPcHRpb25zKSB7XG4gICAgY29uc3Qge2ZyZXE9MjIwLCB0aW1lPTEsIHBhbj0wLCB2b2w9MX0gPSBvcHQ7XG5cbiAgICBsZXQgZ2FpbiA9IDE7XG4gICAgY29uc3Qgc2FtcGxlUGxheWVyID0gdGhpcy5maW5kQ2xvc2VzdFNhbXBsZVBsYXllciggZnJlcSApO1xuICAgIGNvbnN0IGN1cnJlbnRseVBsYXlpbmdTYW1wbGVJRCA9IHNhbXBsZVBsYXllci5wbGF5ZXIucGxheSgpO1xuICAgIHNhbXBsZVBsYXllci5wbGF5ZXIubG9vcCggZmFsc2UsIGN1cnJlbnRseVBsYXlpbmdTYW1wbGVJRCApO1xuICAgIHNhbXBsZVBsYXllci5wbGF5ZXIucmF0ZSggZ2V0UmF0ZUZyb21GcmVxdWVuY2llcyggZnJlcSwgc2FtcGxlUGxheWVyLmJhc2VGcmVxICksIGN1cnJlbnRseVBsYXlpbmdTYW1wbGVJRCApO1xuICAgIC8vIHNvbWUgc3R1cGlkIGJhc2ljIHB5c2Nob2Fjb3VzdGljIHNoYXBpbmdcbiAgICBpZihmcmVxID4gMjAwKSBnYWluID0gZ2FpbiowLjI7XG4gICAgc2FtcGxlUGxheWVyLnBsYXllci5mYWRlKCAwLCBnYWluICogdm9sLCAyMDAsIGN1cnJlbnRseVBsYXlpbmdTYW1wbGVJRCApO1xuICAgIHNhbXBsZVBsYXllci5wbGF5ZXIuc3RlcmVvKCBwYW4sIGN1cnJlbnRseVBsYXlpbmdTYW1wbGVJRCApO1xuXG5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNhbXBsZVBsYXllci5wbGF5ZXIuZmFkZSggZ2FpbiAqIHZvbCwgMCwgMjAwLCBjdXJyZW50bHlQbGF5aW5nU2FtcGxlSUQgKTtcbiAgICAgIHRoaXMuc3RvcCh0aW1lLCBzYW1wbGVQbGF5ZXIsIGN1cnJlbnRseVBsYXlpbmdTYW1wbGVJRCApO1xuICAgIH0uYmluZCh0aGlzKSwgKCB0aW1lICogMTAwMCApICsgMjAwKTsgLy8gYWRkaW5nIGEgMTAwIG1zIGJ1ZmZlciB0byBhdm9pZCBhbnkgaXNzdWVzXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzdG9wKHRpbWUsIHNhbXBsZVBsYXllciwgY3VycmVudGx5UGxheWluZ1NhbXBsZUlEKSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzYW1wbGVQbGF5ZXIucGxheWVyLnN0b3AoKTtcbiAgICB9LmJpbmQodGhpcyksIDMwMCk7IC8vIGFkZGluZyBhIDEwMCBtcyBidWZmZXIgdG8gYXZvaWQgYW55IGlzc3Vlc1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGZpbmRDbG9zZXN0U2FtcGxlUGxheWVyKCBmcmVxOm51bWJlciApOiBJUGxheWVyIHtcbiAgICAvLyBDYW4gb25seSBnZXQgdGhlIGNsb3Nlc3QgZnJlcXVlbmN5IGluIHRoZSBzZXQgb2YgUGxheWVycycgZnJlcXVlbmNpZXMgc28gZ2V0IHRoYXQgZnJlcXVlbmN5LCB0aGVuIGZpbHRlciB0aGUgcGxheWVyc1xuICAgIGNvbnN0IGNsb3Nlc3RQbGF5ZXJGcmVxdWVuY3kgPSBnZXRDbG9zZXN0TWVtYmVyKGZyZXEsIHRoaXMucGxheWVycy5tYXAoIHBsYXllciA9PiBwbGF5ZXIuYmFzZUZyZXEpICk7XG4gICAgcmV0dXJuIGZpbmRJbkNvbGxlY3Rpb24oIHRoaXMucGxheWVycywgbWVtYmVyID0+IG1lbWJlciA9PT0gY2xvc2VzdFBsYXllckZyZXF1ZW5jeSApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpU2FtcGxlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9NdWx0aVNhbXBsZXIudHMiLCIvKiFcbiAqICBob3dsZXIuanMgdjIuMC4xMlxuICogIGhvd2xlcmpzLmNvbVxuICpcbiAqICAoYykgMjAxMy0yMDE4LCBKYW1lcyBTaW1wc29uIG9mIEdvbGRGaXJlIFN0dWRpb3NcbiAqICBnb2xkZmlyZXN0dWRpb3MuY29tXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICAvKiogR2xvYmFsIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgZ2xvYmFsIGNvbnRyb2xsZXIuIEFsbCBjb250YWluZWQgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcHBseVxuICAgKiB0byBhbGwgc291bmRzIHRoYXQgYXJlIGN1cnJlbnRseSBwbGF5aW5nIG9yIHdpbGwgYmUgaW4gdGhlIGZ1dHVyZS5cbiAgICovXG4gIHZhciBIb3dsZXJHbG9iYWwgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfTtcbiAgSG93bGVyR2xvYmFsLnByb3RvdHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoZSBnbG9iYWwgSG93bGVyIG9iamVjdC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICAvLyBDcmVhdGUgYSBnbG9iYWwgSUQgY291bnRlci5cbiAgICAgIHNlbGYuX2NvdW50ZXIgPSAxMDAwO1xuXG4gICAgICAvLyBJbnRlcm5hbCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fY29kZWNzID0ge307XG4gICAgICBzZWxmLl9ob3dscyA9IFtdO1xuICAgICAgc2VsZi5fbXV0ZWQgPSBmYWxzZTtcbiAgICAgIHNlbGYuX3ZvbHVtZSA9IDE7XG4gICAgICBzZWxmLl9jYW5QbGF5RXZlbnQgPSAnY2FucGxheXRocm91Z2gnO1xuICAgICAgc2VsZi5fbmF2aWdhdG9yID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IpID8gd2luZG93Lm5hdmlnYXRvciA6IG51bGw7XG5cbiAgICAgIC8vIFB1YmxpYyBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5tYXN0ZXJHYWluID0gbnVsbDtcbiAgICAgIHNlbGYubm9BdWRpbyA9IGZhbHNlO1xuICAgICAgc2VsZi51c2luZ1dlYkF1ZGlvID0gdHJ1ZTtcbiAgICAgIHNlbGYuYXV0b1N1c3BlbmQgPSB0cnVlO1xuICAgICAgc2VsZi5jdHggPSBudWxsO1xuXG4gICAgICAvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgYXV0byBpT1MgZW5hYmxlci5cbiAgICAgIHNlbGYubW9iaWxlQXV0b0VuYWJsZSA9IHRydWU7XG5cbiAgICAgIC8vIFNldHVwIHRoZSB2YXJpb3VzIHN0YXRlIHZhbHVlcyBmb3IgZ2xvYmFsIHRyYWNraW5nLlxuICAgICAgc2VsZi5fc2V0dXAoKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldC9zZXQgdGhlIGdsb2JhbCB2b2x1bWUgZm9yIGFsbCBzb3VuZHMuXG4gICAgICogQHBhcmFtICB7RmxvYXR9IHZvbCBWb2x1bWUgZnJvbSAwLjAgdG8gMS4wLlxuICAgICAqIEByZXR1cm4ge0hvd2xlci9GbG9hdH0gICAgIFJldHVybnMgc2VsZiBvciBjdXJyZW50IHZvbHVtZS5cbiAgICAgKi9cbiAgICB2b2x1bWU6IGZ1bmN0aW9uKHZvbCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcbiAgICAgIHZvbCA9IHBhcnNlRmxvYXQodm9sKTtcblxuICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhbiBBdWRpb0NvbnRleHQgY3JlYXRlZCB5ZXQsIHJ1biB0aGUgc2V0dXAuXG4gICAgICBpZiAoIXNlbGYuY3R4KSB7XG4gICAgICAgIHNldHVwQXVkaW9Db250ZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygdm9sICE9PSAndW5kZWZpbmVkJyAmJiB2b2wgPj0gMCAmJiB2b2wgPD0gMSkge1xuICAgICAgICBzZWxmLl92b2x1bWUgPSB2b2w7XG5cbiAgICAgICAgLy8gRG9uJ3QgdXBkYXRlIGFueSBvZiB0aGUgbm9kZXMgaWYgd2UgYXJlIG11dGVkLlxuICAgICAgICBpZiAoc2VsZi5fbXV0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gdXNpbmcgV2ViIEF1ZGlvLCB3ZSBqdXN0IG5lZWQgdG8gYWRqdXN0IHRoZSBtYXN0ZXIgZ2Fpbi5cbiAgICAgICAgaWYgKHNlbGYudXNpbmdXZWJBdWRpbykge1xuICAgICAgICAgIHNlbGYubWFzdGVyR2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKHZvbCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYW5kIGNoYW5nZSB2b2x1bWUgZm9yIGFsbCBIVE1MNSBhdWRpbyBub2Rlcy5cbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFzZWxmLl9ob3dsc1tpXS5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAgIC8vIEdldCBhbGwgb2YgdGhlIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAgICAgICAgICB2YXIgaWRzID0gc2VsZi5faG93bHNbaV0uX2dldFNvdW5kSWRzKCk7XG5cbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgc291bmRzIGFuZCBjaGFuZ2UgdGhlIHZvbHVtZXMuXG4gICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8aWRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX2hvd2xzW2ldLl9zb3VuZEJ5SWQoaWRzW2pdKTtcblxuICAgICAgICAgICAgICBpZiAoc291bmQgJiYgc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS52b2x1bWUgPSBzb3VuZC5fdm9sdW1lICogdm9sO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmLl92b2x1bWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBtdXRpbmcgYW5kIHVubXV0aW5nIGdsb2JhbGx5LlxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IG11dGVkIElzIG11dGVkIG9yIG5vdC5cbiAgICAgKi9cbiAgICBtdXRlOiBmdW5jdGlvbihtdXRlZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhbiBBdWRpb0NvbnRleHQgY3JlYXRlZCB5ZXQsIHJ1biB0aGUgc2V0dXAuXG4gICAgICBpZiAoIXNlbGYuY3R4KSB7XG4gICAgICAgIHNldHVwQXVkaW9Db250ZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX211dGVkID0gbXV0ZWQ7XG5cbiAgICAgIC8vIFdpdGggV2ViIEF1ZGlvLCB3ZSBqdXN0IG5lZWQgdG8gbXV0ZSB0aGUgbWFzdGVyIGdhaW4uXG4gICAgICBpZiAoc2VsZi51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICAgIHNlbGYubWFzdGVyR2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKG11dGVkID8gMCA6IHNlbGYuX3ZvbHVtZSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBhbmQgbXV0ZSBhbGwgSFRNTDUgQXVkaW8gbm9kZXMuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFzZWxmLl9ob3dsc1tpXS5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAvLyBHZXQgYWxsIG9mIHRoZSBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAgICAgIHZhciBpZHMgPSBzZWxmLl9ob3dsc1tpXS5fZ2V0U291bmRJZHMoKTtcblxuICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgc291bmRzIGFuZCBtYXJrIHRoZSBhdWRpbyBub2RlIGFzIG11dGVkLlxuICAgICAgICAgIGZvciAodmFyIGo9MDsgajxpZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX2hvd2xzW2ldLl9zb3VuZEJ5SWQoaWRzW2pdKTtcblxuICAgICAgICAgICAgaWYgKHNvdW5kICYmIHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLm11dGVkID0gKG11dGVkKSA/IHRydWUgOiBzb3VuZC5fbXV0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVbmxvYWQgYW5kIGRlc3Ryb3kgYWxsIGN1cnJlbnRseSBsb2FkZWQgSG93bCBvYmplY3RzLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICB1bmxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgZm9yICh2YXIgaT1zZWxmLl9ob3dscy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgIHNlbGYuX2hvd2xzW2ldLnVubG9hZCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgQXVkaW9Db250ZXh0IHRvIG1ha2Ugc3VyZSBpdCBpcyBmdWxseSByZXNldC5cbiAgICAgIGlmIChzZWxmLnVzaW5nV2ViQXVkaW8gJiYgc2VsZi5jdHggJiYgdHlwZW9mIHNlbGYuY3R4LmNsb3NlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLmN0eC5jbG9zZSgpO1xuICAgICAgICBzZWxmLmN0eCA9IG51bGw7XG4gICAgICAgIHNldHVwQXVkaW9Db250ZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgY29kZWMgc3VwcG9ydCBvZiBzcGVjaWZpYyBleHRlbnNpb24uXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBleHQgQXVkaW8gZmlsZSBleHRlbnRpb24uXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBjb2RlY3M6IGZ1bmN0aW9uKGV4dCkge1xuICAgICAgcmV0dXJuICh0aGlzIHx8IEhvd2xlcikuX2NvZGVjc1tleHQucmVwbGFjZSgvXngtLywgJycpXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgdmFyaW91cyBzdGF0ZSB2YWx1ZXMgZm9yIGdsb2JhbCB0cmFja2luZy5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX3NldHVwOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBzdXNwZW5kL3Jlc3VtZSBzdGF0ZSBvZiB0aGUgQXVkaW9Db250ZXh0LlxuICAgICAgc2VsZi5zdGF0ZSA9IHNlbGYuY3R4ID8gc2VsZi5jdHguc3RhdGUgfHwgJ3J1bm5pbmcnIDogJ3J1bm5pbmcnO1xuXG4gICAgICAvLyBBdXRvbWF0aWNhbGx5IGJlZ2luIHRoZSAzMC1zZWNvbmQgc3VzcGVuZCBwcm9jZXNzXG4gICAgICBzZWxmLl9hdXRvU3VzcGVuZCgpO1xuXG4gICAgICAvLyBDaGVjayBpZiBhdWRpbyBpcyBhdmFpbGFibGUuXG4gICAgICBpZiAoIXNlbGYudXNpbmdXZWJBdWRpbykge1xuICAgICAgICAvLyBObyBhdWRpbyBpcyBhdmFpbGFibGUgb24gdGhpcyBzeXN0ZW0gaWYgbm9BdWRpbyBpcyBzZXQgdG8gdHJ1ZS5cbiAgICAgICAgaWYgKHR5cGVvZiBBdWRpbyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHRlc3QgPSBuZXcgQXVkaW8oKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNhbnBsYXl0aHJvdWdoIGV2ZW50IGlzIGF2YWlsYWJsZS5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGVzdC5vbmNhbnBsYXl0aHJvdWdoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICBzZWxmLl9jYW5QbGF5RXZlbnQgPSAnY2FucGxheSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBzZWxmLm5vQXVkaW8gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLm5vQXVkaW8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRlc3QgdG8gbWFrZSBzdXJlIGF1ZGlvIGlzbid0IGRpc2FibGVkIGluIEludGVybmV0IEV4cGxvcmVyLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHRlc3QgPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgaWYgKHRlc3QubXV0ZWQpIHtcbiAgICAgICAgICBzZWxmLm5vQXVkaW8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAvLyBDaGVjayBmb3Igc3VwcG9ydGVkIGNvZGVjcy5cbiAgICAgIGlmICghc2VsZi5ub0F1ZGlvKSB7XG4gICAgICAgIHNlbGYuX3NldHVwQ29kZWNzKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgYnJvd3NlciBzdXBwb3J0IGZvciB2YXJpb3VzIGNvZGVjcyBhbmQgY2FjaGUgdGhlIHJlc3VsdHMuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIF9zZXR1cENvZGVjczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuICAgICAgdmFyIGF1ZGlvVGVzdCA9IG51bGw7XG5cbiAgICAgIC8vIE11c3Qgd3JhcCBpbiBhIHRyeS9jYXRjaCBiZWNhdXNlIElFMTEgaW4gc2VydmVyIG1vZGUgdGhyb3dzIGFuIGVycm9yLlxuICAgICAgdHJ5IHtcbiAgICAgICAgYXVkaW9UZXN0ID0gKHR5cGVvZiBBdWRpbyAhPT0gJ3VuZGVmaW5lZCcpID8gbmV3IEF1ZGlvKCkgOiBudWxsO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWF1ZGlvVGVzdCB8fCB0eXBlb2YgYXVkaW9UZXN0LmNhblBsYXlUeXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICB2YXIgbXBlZ1Rlc3QgPSBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL21wZWc7JykucmVwbGFjZSgvXm5vJC8sICcnKTtcblxuICAgICAgLy8gT3BlcmEgdmVyc2lvbiA8MzMgaGFzIG1peGVkIE1QMyBzdXBwb3J0LCBzbyB3ZSBuZWVkIHRvIGNoZWNrIGZvciBhbmQgYmxvY2sgaXQuXG4gICAgICB2YXIgY2hlY2tPcGVyYSA9IHNlbGYuX25hdmlnYXRvciAmJiBzZWxmLl9uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9PUFJcXC8oWzAtNl0uKS9nKTtcbiAgICAgIHZhciBpc09sZE9wZXJhID0gKGNoZWNrT3BlcmEgJiYgcGFyc2VJbnQoY2hlY2tPcGVyYVswXS5zcGxpdCgnLycpWzFdLCAxMCkgPCAzMyk7XG5cbiAgICAgIHNlbGYuX2NvZGVjcyA9IHtcbiAgICAgICAgbXAzOiAhISghaXNPbGRPcGVyYSAmJiAobXBlZ1Rlc3QgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9tcDM7JykucmVwbGFjZSgvXm5vJC8sICcnKSkpLFxuICAgICAgICBtcGVnOiAhIW1wZWdUZXN0LFxuICAgICAgICBvcHVzOiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJvcHVzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBvZ2c6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgb2dhOiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIHdhdjogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3dhdjsgY29kZWNzPVwiMVwiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgYWFjOiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vYWFjOycpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIGNhZjogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3gtY2FmOycpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIG00YTogISEoYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby94LW00YTsnKSB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL200YTsnKSB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKSkucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgbXA0OiAhIShhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3gtbXA0OycpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vbXA0OycpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vYWFjOycpKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICB3ZWJhOiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vd2VibTsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICB3ZWJtOiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vd2VibTsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBkb2xieTogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL21wNDsgY29kZWNzPVwiZWMtM1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgZmxhYzogISEoYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby94LWZsYWM7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9mbGFjOycpKS5yZXBsYWNlKC9ebm8kLywgJycpXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW9iaWxlIGJyb3dzZXJzIHdpbGwgb25seSBhbGxvdyBhdWRpbyB0byBiZSBwbGF5ZWQgYWZ0ZXIgYSB1c2VyIGludGVyYWN0aW9uLlxuICAgICAqIEF0dGVtcHQgdG8gYXV0b21hdGljYWxseSB1bmxvY2sgYXVkaW8gb24gdGhlIGZpcnN0IHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICogQ29uY2VwdCBmcm9tOiBodHRwOi8vcGF1bGJha2F1cy5jb20vdHV0b3JpYWxzL2h0bWw1L3dlYi1hdWRpby1vbi1pb3MvXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIF9lbmFibGVNb2JpbGVBdWRpbzogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICAvLyBPbmx5IHJ1biB0aGlzIG9uIG1vYmlsZSBkZXZpY2VzIGlmIGF1ZGlvIGlzbid0IGFscmVhZHkgZWFuYmxlZC5cbiAgICAgIHZhciBpc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWR8QmxhY2tCZXJyeXxCQjEwfFNpbGt8TW9iaS9pLnRlc3Qoc2VsZi5fbmF2aWdhdG9yICYmIHNlbGYuX25hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIGlzVG91Y2ggPSAhISgoJ29udG91Y2hlbmQnIGluIHdpbmRvdykgfHwgKHNlbGYuX25hdmlnYXRvciAmJiBzZWxmLl9uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwKSB8fCAoc2VsZi5fbmF2aWdhdG9yICYmIHNlbGYuX25hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMCkpO1xuICAgICAgaWYgKHNlbGYuX21vYmlsZUVuYWJsZWQgfHwgIXNlbGYuY3R4IHx8ICghaXNNb2JpbGUgJiYgIWlzVG91Y2gpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fbW9iaWxlRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAvLyBTb21lIG1vYmlsZSBkZXZpY2VzL3BsYXRmb3JtcyBoYXZlIGRpc3RvcnRpb24gaXNzdWVzIHdoZW4gb3BlbmluZy9jbG9zaW5nIHRhYnMgYW5kL29yIHdlYiB2aWV3cy5cbiAgICAgIC8vIEJ1Z3MgaW4gdGhlIGJyb3dzZXIgKGVzcGVjaWFsbHkgTW9iaWxlIFNhZmFyaSkgY2FuIGNhdXNlIHRoZSBzYW1wbGVSYXRlIHRvIGNoYW5nZSBmcm9tIDQ0MTAwIHRvIDQ4MDAwLlxuICAgICAgLy8gQnkgY2FsbGluZyBIb3dsZXIudW5sb2FkKCksIHdlIGNyZWF0ZSBhIG5ldyBBdWRpb0NvbnRleHQgd2l0aCB0aGUgY29ycmVjdCBzYW1wbGVSYXRlLlxuICAgICAgaWYgKCFzZWxmLl9tb2JpbGVVbmxvYWRlZCAmJiBzZWxmLmN0eC5zYW1wbGVSYXRlICE9PSA0NDEwMCkge1xuICAgICAgICBzZWxmLl9tb2JpbGVVbmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHNlbGYudW5sb2FkKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNjcmF0Y2ggYnVmZmVyIGZvciBlbmFibGluZyBpT1MgdG8gZGlzcG9zZSBvZiB3ZWIgYXVkaW8gYnVmZmVycyBjb3JyZWN0bHksIGFzIHBlcjpcbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQxMTk2ODRcbiAgICAgIHNlbGYuX3NjcmF0Y2hCdWZmZXIgPSBzZWxmLmN0eC5jcmVhdGVCdWZmZXIoMSwgMSwgMjIwNTApO1xuXG4gICAgICAvLyBDYWxsIHRoaXMgbWV0aG9kIG9uIHRvdWNoIHN0YXJ0IHRvIGNyZWF0ZSBhbmQgcGxheSBhIGJ1ZmZlcixcbiAgICAgIC8vIHRoZW4gY2hlY2sgaWYgdGhlIGF1ZGlvIGFjdHVhbGx5IHBsYXllZCB0byBkZXRlcm1pbmUgaWZcbiAgICAgIC8vIGF1ZGlvIGhhcyBub3cgYmVlbiB1bmxvY2tlZCBvbiBpT1MsIEFuZHJvaWQsIGV0Yy5cbiAgICAgIHZhciB1bmxvY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRml4IEFuZHJvaWQgY2FuIG5vdCBwbGF5IGluIHN1c3BlbmQgc3RhdGUuXG4gICAgICAgIEhvd2xlci5fYXV0b1Jlc3VtZSgpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBlbXB0eSBidWZmZXIuXG4gICAgICAgIHZhciBzb3VyY2UgPSBzZWxmLmN0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgc291cmNlLmJ1ZmZlciA9IHNlbGYuX3NjcmF0Y2hCdWZmZXI7XG4gICAgICAgIHNvdXJjZS5jb25uZWN0KHNlbGYuY3R4LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICAvLyBQbGF5IHRoZSBlbXB0eSBidWZmZXIuXG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlLnN0YXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHNvdXJjZS5ub3RlT24oMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc291cmNlLnN0YXJ0KDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbGluZyByZXN1bWUoKSBvbiBhIHN0YWNrIGluaXRpYXRlZCBieSB1c2VyIGdlc3R1cmUgaXMgd2hhdCBhY3R1YWxseSB1bmxvY2tzIHRoZSBhdWRpbyBvbiBBbmRyb2lkIENocm9tZSA+PSA1NS5cbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmN0eC5yZXN1bWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBzZWxmLmN0eC5yZXN1bWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldHVwIGEgdGltZW91dCB0byBjaGVjayB0aGF0IHdlIGFyZSB1bmxvY2tlZCBvbiB0aGUgbmV4dCBldmVudCBsb29wLlxuICAgICAgICBzb3VyY2Uub25lbmRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNvdXJjZS5kaXNjb25uZWN0KDApO1xuXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSB1bmxvY2tlZCBzdGF0ZSBhbmQgcHJldmVudCB0aGlzIGNoZWNrIGZyb20gaGFwcGVuaW5nIGFnYWluLlxuICAgICAgICAgIHNlbGYuX21vYmlsZUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHNlbGYubW9iaWxlQXV0b0VuYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSB0b3VjaCBzdGFydCBsaXN0ZW5lci5cbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdW5sb2NrLCB0cnVlKTtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHVubG9jaywgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICAvLyBTZXR1cCBhIHRvdWNoIHN0YXJ0IGxpc3RlbmVyIHRvIGF0dGVtcHQgYW4gdW5sb2NrIGluLlxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHVubG9jaywgdHJ1ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHVubG9jaywgdHJ1ZSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdXRvbWF0aWNhbGx5IHN1c3BlbmQgdGhlIFdlYiBBdWRpbyBBdWRpb0NvbnRleHQgYWZ0ZXIgbm8gc291bmQgaGFzIHBsYXllZCBmb3IgMzAgc2Vjb25kcy5cbiAgICAgKiBUaGlzIHNhdmVzIHByb2Nlc3NpbmcvZW5lcmd5IGFuZCBmaXhlcyB2YXJpb3VzIGJyb3dzZXItc3BlY2lmaWMgYnVncyB3aXRoIGF1ZGlvIGdldHRpbmcgc3R1Y2suXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIF9hdXRvU3VzcGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICghc2VsZi5hdXRvU3VzcGVuZCB8fCAhc2VsZi5jdHggfHwgdHlwZW9mIHNlbGYuY3R4LnN1c3BlbmQgPT09ICd1bmRlZmluZWQnIHx8ICFIb3dsZXIudXNpbmdXZWJBdWRpbykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIGFueSBzb3VuZHMgYXJlIHBsYXlpbmcuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGYuX2hvd2xzW2ldLl93ZWJBdWRpbykge1xuICAgICAgICAgIGZvciAodmFyIGo9MDsgajxzZWxmLl9ob3dsc1tpXS5fc291bmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoIXNlbGYuX2hvd2xzW2ldLl9zb3VuZHNbal0uX3BhdXNlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYuX3N1c3BlbmRUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5fc3VzcGVuZFRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gc291bmQgaGFzIHBsYXllZCBhZnRlciAzMCBzZWNvbmRzLCBzdXNwZW5kIHRoZSBjb250ZXh0LlxuICAgICAgc2VsZi5fc3VzcGVuZFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFzZWxmLmF1dG9TdXNwZW5kKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5fc3VzcGVuZFRpbWVyID0gbnVsbDtcbiAgICAgICAgc2VsZi5zdGF0ZSA9ICdzdXNwZW5kaW5nJztcbiAgICAgICAgc2VsZi5jdHguc3VzcGVuZCgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5zdGF0ZSA9ICdzdXNwZW5kZWQnO1xuXG4gICAgICAgICAgaWYgKHNlbGYuX3Jlc3VtZUFmdGVyU3VzcGVuZCkge1xuICAgICAgICAgICAgZGVsZXRlIHNlbGYuX3Jlc3VtZUFmdGVyU3VzcGVuZDtcbiAgICAgICAgICAgIHNlbGYuX2F1dG9SZXN1bWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSwgMzAwMDApO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXV0b21hdGljYWxseSByZXN1bWUgdGhlIFdlYiBBdWRpbyBBdWRpb0NvbnRleHQgd2hlbiBhIG5ldyBzb3VuZCBpcyBwbGF5ZWQuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIF9hdXRvUmVzdW1lOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKCFzZWxmLmN0eCB8fCB0eXBlb2Ygc2VsZi5jdHgucmVzdW1lID09PSAndW5kZWZpbmVkJyB8fCAhSG93bGVyLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gJ3J1bm5pbmcnICYmIHNlbGYuX3N1c3BlbmRUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5fc3VzcGVuZFRpbWVyKTtcbiAgICAgICAgc2VsZi5fc3VzcGVuZFRpbWVyID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHtcbiAgICAgICAgc2VsZi5jdHgucmVzdW1lKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLnN0YXRlID0gJ3J1bm5pbmcnO1xuXG4gICAgICAgICAgLy8gRW1pdCB0byBhbGwgSG93bHMgdGhhdCB0aGUgYXVkaW8gaGFzIHJlc3VtZWQuXG4gICAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZWxmLl9ob3dsc1tpXS5fZW1pdCgncmVzdW1lJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2VsZi5fc3VzcGVuZFRpbWVyKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX3N1c3BlbmRUaW1lcik7XG4gICAgICAgICAgc2VsZi5fc3VzcGVuZFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzZWxmLnN0YXRlID09PSAnc3VzcGVuZGluZycpIHtcbiAgICAgICAgc2VsZi5fcmVzdW1lQWZ0ZXJTdXNwZW5kID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNldHVwIHRoZSBnbG9iYWwgYXVkaW8gY29udHJvbGxlci5cbiAgdmFyIEhvd2xlciA9IG5ldyBIb3dsZXJHbG9iYWwoKTtcblxuICAvKiogR3JvdXAgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGF1ZGlvIGdyb3VwIGNvbnRyb2xsZXIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvIFBhc3NlZCBpbiBwcm9wZXJ0aWVzIGZvciB0aGlzIGdyb3VwLlxuICAgKi9cbiAgdmFyIEhvd2wgPSBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgbm8gc291cmNlIGlzIHByb3ZpZGVkLlxuICAgIGlmICghby5zcmMgfHwgby5zcmMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBhcnJheSBvZiBzb3VyY2UgZmlsZXMgbXVzdCBiZSBwYXNzZWQgd2l0aCBhbnkgbmV3IEhvd2wuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5pbml0KG8pO1xuICB9O1xuICBIb3dsLnByb3RvdHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGEgbmV3IEhvd2wgZ3JvdXAgb2JqZWN0LlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gbyBQYXNzZWQgaW4gcHJvcGVydGllcyBmb3IgdGhpcyBncm91cC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uKG8pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhbiBBdWRpb0NvbnRleHQgY3JlYXRlZCB5ZXQsIHJ1biB0aGUgc2V0dXAuXG4gICAgICBpZiAoIUhvd2xlci5jdHgpIHtcbiAgICAgICAgc2V0dXBBdWRpb0NvbnRleHQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXAgdXNlci1kZWZpbmVkIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgICAgIHNlbGYuX2F1dG9wbGF5ID0gby5hdXRvcGxheSB8fCBmYWxzZTtcbiAgICAgIHNlbGYuX2Zvcm1hdCA9ICh0eXBlb2Ygby5mb3JtYXQgIT09ICdzdHJpbmcnKSA/IG8uZm9ybWF0IDogW28uZm9ybWF0XTtcbiAgICAgIHNlbGYuX2h0bWw1ID0gby5odG1sNSB8fCBmYWxzZTtcbiAgICAgIHNlbGYuX211dGVkID0gby5tdXRlIHx8IGZhbHNlO1xuICAgICAgc2VsZi5fbG9vcCA9IG8ubG9vcCB8fCBmYWxzZTtcbiAgICAgIHNlbGYuX3Bvb2wgPSBvLnBvb2wgfHwgNTtcbiAgICAgIHNlbGYuX3ByZWxvYWQgPSAodHlwZW9mIG8ucHJlbG9hZCA9PT0gJ2Jvb2xlYW4nKSA/IG8ucHJlbG9hZCA6IHRydWU7XG4gICAgICBzZWxmLl9yYXRlID0gby5yYXRlIHx8IDE7XG4gICAgICBzZWxmLl9zcHJpdGUgPSBvLnNwcml0ZSB8fCB7fTtcbiAgICAgIHNlbGYuX3NyYyA9ICh0eXBlb2Ygby5zcmMgIT09ICdzdHJpbmcnKSA/IG8uc3JjIDogW28uc3JjXTtcbiAgICAgIHNlbGYuX3ZvbHVtZSA9IG8udm9sdW1lICE9PSB1bmRlZmluZWQgPyBvLnZvbHVtZSA6IDE7XG4gICAgICBzZWxmLl94aHJXaXRoQ3JlZGVudGlhbHMgPSBvLnhocldpdGhDcmVkZW50aWFscyB8fCBmYWxzZTtcblxuICAgICAgLy8gU2V0dXAgYWxsIG90aGVyIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgICAgIHNlbGYuX2R1cmF0aW9uID0gMDtcbiAgICAgIHNlbGYuX3N0YXRlID0gJ3VubG9hZGVkJztcbiAgICAgIHNlbGYuX3NvdW5kcyA9IFtdO1xuICAgICAgc2VsZi5fZW5kVGltZXJzID0ge307XG4gICAgICBzZWxmLl9xdWV1ZSA9IFtdO1xuICAgICAgc2VsZi5fcGxheUxvY2sgPSBmYWxzZTtcblxuICAgICAgLy8gU2V0dXAgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgc2VsZi5fb25lbmQgPSBvLm9uZW5kID8gW3tmbjogby5vbmVuZH1dIDogW107XG4gICAgICBzZWxmLl9vbmZhZGUgPSBvLm9uZmFkZSA/IFt7Zm46IG8ub25mYWRlfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ubG9hZCA9IG8ub25sb2FkID8gW3tmbjogby5vbmxvYWR9XSA6IFtdO1xuICAgICAgc2VsZi5fb25sb2FkZXJyb3IgPSBvLm9ubG9hZGVycm9yID8gW3tmbjogby5vbmxvYWRlcnJvcn1dIDogW107XG4gICAgICBzZWxmLl9vbnBsYXllcnJvciA9IG8ub25wbGF5ZXJyb3IgPyBbe2ZuOiBvLm9ucGxheWVycm9yfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucGF1c2UgPSBvLm9ucGF1c2UgPyBbe2ZuOiBvLm9ucGF1c2V9XSA6IFtdO1xuICAgICAgc2VsZi5fb25wbGF5ID0gby5vbnBsYXkgPyBbe2ZuOiBvLm9ucGxheX1dIDogW107XG4gICAgICBzZWxmLl9vbnN0b3AgPSBvLm9uc3RvcCA/IFt7Zm46IG8ub25zdG9wfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ubXV0ZSA9IG8ub25tdXRlID8gW3tmbjogby5vbm11dGV9XSA6IFtdO1xuICAgICAgc2VsZi5fb252b2x1bWUgPSBvLm9udm9sdW1lID8gW3tmbjogby5vbnZvbHVtZX1dIDogW107XG4gICAgICBzZWxmLl9vbnJhdGUgPSBvLm9ucmF0ZSA/IFt7Zm46IG8ub25yYXRlfV0gOiBbXTtcbiAgICAgIHNlbGYuX29uc2VlayA9IG8ub25zZWVrID8gW3tmbjogby5vbnNlZWt9XSA6IFtdO1xuICAgICAgc2VsZi5fb25yZXN1bWUgPSBbXTtcblxuICAgICAgLy8gV2ViIEF1ZGlvIG9yIEhUTUw1IEF1ZGlvP1xuICAgICAgc2VsZi5fd2ViQXVkaW8gPSBIb3dsZXIudXNpbmdXZWJBdWRpbyAmJiAhc2VsZi5faHRtbDU7XG5cbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgdHJ5IHRvIGVuYWJsZSBhdWRpbyBvbiBpT1MuXG4gICAgICBpZiAodHlwZW9mIEhvd2xlci5jdHggIT09ICd1bmRlZmluZWQnICYmIEhvd2xlci5jdHggJiYgSG93bGVyLm1vYmlsZUF1dG9FbmFibGUpIHtcbiAgICAgICAgSG93bGVyLl9lbmFibGVNb2JpbGVBdWRpbygpO1xuICAgICAgfVxuXG4gICAgICAvLyBLZWVwIHRyYWNrIG9mIHRoaXMgSG93bCBncm91cCBpbiB0aGUgZ2xvYmFsIGNvbnRyb2xsZXIuXG4gICAgICBIb3dsZXIuX2hvd2xzLnB1c2goc2VsZik7XG5cbiAgICAgIC8vIElmIHRoZXkgc2VsZWN0ZWQgYXV0b3BsYXksIGFkZCBhIHBsYXkgZXZlbnQgdG8gdGhlIGxvYWQgcXVldWUuXG4gICAgICBpZiAoc2VsZi5fYXV0b3BsYXkpIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdwbGF5JyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5wbGF5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gTG9hZCB0aGUgc291cmNlIGZpbGUgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gICAgICBpZiAoc2VsZi5fcHJlbG9hZCkge1xuICAgICAgICBzZWxmLmxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIGF1ZGlvIGZpbGUuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHVybCA9IG51bGw7XG5cbiAgICAgIC8vIElmIG5vIGF1ZGlvIGlzIGF2YWlsYWJsZSwgcXVpdCBpbW1lZGlhdGVseS5cbiAgICAgIGlmIChIb3dsZXIubm9BdWRpbykge1xuICAgICAgICBzZWxmLl9lbWl0KCdsb2FkZXJyb3InLCBudWxsLCAnTm8gYXVkaW8gc3VwcG9ydC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIHN1cmUgb3VyIHNvdXJjZSBpcyBpbiBhbiBhcnJheS5cbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5fc3JjID09PSAnc3RyaW5nJykge1xuICAgICAgICBzZWxmLl9zcmMgPSBbc2VsZi5fc3JjXTtcbiAgICAgIH1cblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBzb3VyY2VzIGFuZCBwaWNrIHRoZSBmaXJzdCBvbmUgdGhhdCBpcyBjb21wYXRpYmxlLlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXh0LCBzdHI7XG5cbiAgICAgICAgaWYgKHNlbGYuX2Zvcm1hdCAmJiBzZWxmLl9mb3JtYXRbaV0pIHtcbiAgICAgICAgICAvLyBJZiBhbiBleHRlbnNpb24gd2FzIHNwZWNpZmllZCwgdXNlIHRoYXQgaW5zdGVhZC5cbiAgICAgICAgICBleHQgPSBzZWxmLl9mb3JtYXRbaV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBzb3VyY2UgaXMgYSBzdHJpbmcuXG4gICAgICAgICAgc3RyID0gc2VsZi5fc3JjW2ldO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ05vbi1zdHJpbmcgZm91bmQgaW4gc2VsZWN0ZWQgYXVkaW8gc291cmNlcyAtIGlnbm9yaW5nLicpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRXh0cmFjdCB0aGUgZmlsZSBleHRlbnNpb24gZnJvbSB0aGUgVVJMIG9yIGJhc2U2NCBkYXRhIFVSSS5cbiAgICAgICAgICBleHQgPSAvXmRhdGE6YXVkaW9cXC8oW147LF0rKTsvaS5leGVjKHN0cik7XG4gICAgICAgICAgaWYgKCFleHQpIHtcbiAgICAgICAgICAgIGV4dCA9IC9cXC4oW14uXSspJC8uZXhlYyhzdHIuc3BsaXQoJz8nLCAxKVswXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV4dCkge1xuICAgICAgICAgICAgZXh0ID0gZXh0WzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9nIGEgd2FybmluZyBpZiBubyBleHRlbnNpb24gd2FzIGZvdW5kLlxuICAgICAgICBpZiAoIWV4dCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignTm8gZmlsZSBleHRlbnNpb24gd2FzIGZvdW5kLiBDb25zaWRlciB1c2luZyB0aGUgXCJmb3JtYXRcIiBwcm9wZXJ0eSBvciBzcGVjaWZ5IGFuIGV4dGVuc2lvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoaXMgZXh0ZW5zaW9uIGlzIGF2YWlsYWJsZS5cbiAgICAgICAgaWYgKGV4dCAmJiBIb3dsZXIuY29kZWNzKGV4dCkpIHtcbiAgICAgICAgICB1cmwgPSBzZWxmLl9zcmNbaV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ05vIGNvZGVjIHN1cHBvcnQgZm9yIHNlbGVjdGVkIGF1ZGlvIHNvdXJjZXMuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fc3JjID0gdXJsO1xuICAgICAgc2VsZi5fc3RhdGUgPSAnbG9hZGluZyc7XG5cbiAgICAgIC8vIElmIHRoZSBob3N0aW5nIHBhZ2UgaXMgSFRUUFMgYW5kIHRoZSBzb3VyY2UgaXNuJ3QsXG4gICAgICAvLyBkcm9wIGRvd24gdG8gSFRNTDUgQXVkaW8gdG8gYXZvaWQgTWl4ZWQgQ29udGVudCBlcnJvcnMuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyAmJiB1cmwuc2xpY2UoMCwgNSkgPT09ICdodHRwOicpIHtcbiAgICAgICAgc2VsZi5faHRtbDUgPSB0cnVlO1xuICAgICAgICBzZWxmLl93ZWJBdWRpbyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgc291bmQgb2JqZWN0IGFuZCBhZGQgaXQgdG8gdGhlIHBvb2wuXG4gICAgICBuZXcgU291bmQoc2VsZik7XG5cbiAgICAgIC8vIExvYWQgYW5kIGRlY29kZSB0aGUgYXVkaW8gZGF0YSBmb3IgcGxheWJhY2suXG4gICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgbG9hZEJ1ZmZlcihzZWxmKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBsYXkgYSBzb3VuZCBvciByZXN1bWUgcHJldmlvdXMgcGxheWJhY2suXG4gICAgICogQHBhcmFtICB7U3RyaW5nL051bWJlcn0gc3ByaXRlICAgU3ByaXRlIG5hbWUgZm9yIHNwcml0ZSBwbGF5YmFjayBvciBzb3VuZCBpZCB0byBjb250aW51ZSBwcmV2aW91cy5cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBpbnRlcm5hbCBJbnRlcm5hbCBVc2U6IHRydWUgcHJldmVudHMgZXZlbnQgZmlyaW5nLlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgU291bmQgSUQuXG4gICAgICovXG4gICAgcGxheTogZnVuY3Rpb24oc3ByaXRlLCBpbnRlcm5hbCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGlkID0gbnVsbDtcblxuICAgICAgLy8gRGV0ZXJtaW5lIGlmIGEgc3ByaXRlLCBzb3VuZCBpZCBvciBub3RoaW5nIHdhcyBwYXNzZWRcbiAgICAgIGlmICh0eXBlb2Ygc3ByaXRlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZCA9IHNwcml0ZTtcbiAgICAgICAgc3ByaXRlID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwcml0ZSA9PT0gJ3N0cmluZycgJiYgc2VsZi5fc3RhdGUgPT09ICdsb2FkZWQnICYmICFzZWxmLl9zcHJpdGVbc3ByaXRlXSkge1xuICAgICAgICAvLyBJZiB0aGUgcGFzc2VkIHNwcml0ZSBkb2Vzbid0IGV4aXN0LCBkbyBub3RoaW5nLlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwcml0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBkZWZhdWx0IHNvdW5kIHNwcml0ZSAocGxheXMgdGhlIGZ1bGwgYXVkaW8gbGVuZ3RoKS5cbiAgICAgICAgc3ByaXRlID0gJ19fZGVmYXVsdCc7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBzaW5nbGUgcGF1c2VkIHNvdW5kIHRoYXQgaXNuJ3QgZW5kZWQuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzLCBwbGF5IHRoYXQgc291bmQuIElmIG5vdCwgY29udGludWUgYXMgdXN1YWwuXG4gICAgICAgIHZhciBudW0gPSAwO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHNlbGYuX3NvdW5kc1tpXS5fcGF1c2VkICYmICFzZWxmLl9zb3VuZHNbaV0uX2VuZGVkKSB7XG4gICAgICAgICAgICBudW0rKztcbiAgICAgICAgICAgIGlkID0gc2VsZi5fc291bmRzW2ldLl9pZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobnVtID09PSAxKSB7XG4gICAgICAgICAgc3ByaXRlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHRoZSBzZWxlY3RlZCBub2RlLCBvciBnZXQgb25lIGZyb20gdGhlIHBvb2wuXG4gICAgICB2YXIgc291bmQgPSBpZCA/IHNlbGYuX3NvdW5kQnlJZChpZCkgOiBzZWxmLl9pbmFjdGl2ZVNvdW5kKCk7XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBkb2Vzbid0IGV4aXN0LCBkbyBub3RoaW5nLlxuICAgICAgaWYgKCFzb3VuZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gU2VsZWN0IHRoZSBzcHJpdGUgZGVmaW5pdGlvbi5cbiAgICAgIGlmIChpZCAmJiAhc3ByaXRlKSB7XG4gICAgICAgIHNwcml0ZSA9IHNvdW5kLl9zcHJpdGUgfHwgJ19fZGVmYXVsdCc7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCB3ZSBtdXN0IHdhaXQgdG8gZ2V0IHRoZSBhdWRpbydzIGR1cmF0aW9uLlxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHdhaXQgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJ1biBpbnRvIHJhY2UgY29uZGl0aW9ucyB3aXRoXG4gICAgICAvLyB0aGUgb3JkZXIgb2YgZnVuY3Rpb24gY2FsbHMuXG4gICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICAgIC8vIFNldCB0aGUgc3ByaXRlIHZhbHVlIG9uIHRoaXMgc291bmQuXG4gICAgICAgIHNvdW5kLl9zcHJpdGUgPSBzcHJpdGU7XG5cbiAgICAgICAgLy8gTWFrciB0aGlzIHNvdW5kZWQgYXMgbm90IGVuZGVkIGluIGNhc2UgYW5vdGhlciBzb3VuZCBpcyBwbGF5ZWQgYmVmb3JlIHRoaXMgb25lIGxvYWRzLlxuICAgICAgICBzb3VuZC5fZW5kZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBBZGQgdGhlIHNvdW5kIHRvIHRoZSBxdWV1ZSB0byBiZSBwbGF5ZWQgb24gbG9hZC5cbiAgICAgICAgdmFyIHNvdW5kSWQgPSBzb3VuZC5faWQ7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAncGxheScsXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYucGxheShzb3VuZElkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzb3VuZElkO1xuICAgICAgfVxuXG4gICAgICAvLyBEb24ndCBwbGF5IHRoZSBzb3VuZCBpZiBhbiBpZCB3YXMgcGFzc2VkIGFuZCBpdCBpcyBhbHJlYWR5IHBsYXlpbmcuXG4gICAgICBpZiAoaWQgJiYgIXNvdW5kLl9wYXVzZWQpIHtcbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGxheSBldmVudCwgaW4gb3JkZXIgdG8ga2VlcCBpdGVyYXRpbmcgdGhyb3VnaCBxdWV1ZS5cbiAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgIHNlbGYuX2xvYWRRdWV1ZSgncGxheScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNvdW5kLl9pZDtcbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBBdWRpb0NvbnRleHQgaXNuJ3Qgc3VzcGVuZGVkLCBhbmQgcmVzdW1lIGl0IGlmIGl0IGlzLlxuICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgIEhvd2xlci5fYXV0b1Jlc3VtZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBEZXRlcm1pbmUgaG93IGxvbmcgdG8gcGxheSBmb3IgYW5kIHdoZXJlIHRvIHN0YXJ0IHBsYXlpbmcuXG4gICAgICB2YXIgc2VlayA9IE1hdGgubWF4KDAsIHNvdW5kLl9zZWVrID4gMCA/IHNvdW5kLl9zZWVrIDogc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMF0gLyAxMDAwKTtcbiAgICAgIHZhciBkdXJhdGlvbiA9IE1hdGgubWF4KDAsICgoc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMF0gKyBzZWxmLl9zcHJpdGVbc3ByaXRlXVsxXSkgLyAxMDAwKSAtIHNlZWspO1xuICAgICAgdmFyIHRpbWVvdXQgPSAoZHVyYXRpb24gKiAxMDAwKSAvIE1hdGguYWJzKHNvdW5kLl9yYXRlKTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBzb3VuZFxuICAgICAgc291bmQuX3BhdXNlZCA9IGZhbHNlO1xuICAgICAgc291bmQuX2VuZGVkID0gZmFsc2U7XG4gICAgICBzb3VuZC5fc3ByaXRlID0gc3ByaXRlO1xuICAgICAgc291bmQuX3NlZWsgPSBzZWVrO1xuICAgICAgc291bmQuX3N0YXJ0ID0gc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMF0gLyAxMDAwO1xuICAgICAgc291bmQuX3N0b3AgPSAoc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMF0gKyBzZWxmLl9zcHJpdGVbc3ByaXRlXVsxXSkgLyAxMDAwO1xuICAgICAgc291bmQuX2xvb3AgPSAhIShzb3VuZC5fbG9vcCB8fCBzZWxmLl9zcHJpdGVbc3ByaXRlXVsyXSk7XG5cbiAgICAgIC8vIEJlZ2luIHRoZSBhY3R1YWwgcGxheWJhY2suXG4gICAgICB2YXIgbm9kZSA9IHNvdW5kLl9ub2RlO1xuICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgIC8vIEZpcmUgdGhpcyB3aGVuIHRoZSBzb3VuZCBpcyByZWFkeSB0byBwbGF5IHRvIGJlZ2luIFdlYiBBdWRpbyBwbGF5YmFjay5cbiAgICAgICAgdmFyIHBsYXlXZWJBdWRpbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuX3JlZnJlc2hCdWZmZXIoc291bmQpO1xuXG4gICAgICAgICAgLy8gU2V0dXAgdGhlIHBsYXliYWNrIHBhcmFtcy5cbiAgICAgICAgICB2YXIgdm9sID0gKHNvdW5kLl9tdXRlZCB8fCBzZWxmLl9tdXRlZCkgPyAwIDogc291bmQuX3ZvbHVtZTtcbiAgICAgICAgICBub2RlLmdhaW4uc2V0VmFsdWVBdFRpbWUodm9sLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICBzb3VuZC5fcGxheVN0YXJ0ID0gSG93bGVyLmN0eC5jdXJyZW50VGltZTtcblxuICAgICAgICAgIC8vIFBsYXkgdGhlIHNvdW5kIHVzaW5nIHRoZSBzdXBwb3J0ZWQgbWV0aG9kLlxuICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZS5idWZmZXJTb3VyY2Uuc3RhcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBzb3VuZC5fbG9vcCA/IG5vZGUuYnVmZmVyU291cmNlLm5vdGVHcmFpbk9uKDAsIHNlZWssIDg2NDAwKSA6IG5vZGUuYnVmZmVyU291cmNlLm5vdGVHcmFpbk9uKDAsIHNlZWssIGR1cmF0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc291bmQuX2xvb3AgPyBub2RlLmJ1ZmZlclNvdXJjZS5zdGFydCgwLCBzZWVrLCA4NjQwMCkgOiBub2RlLmJ1ZmZlclNvdXJjZS5zdGFydCgwLCBzZWVrLCBkdXJhdGlvbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3RhcnQgYSBuZXcgdGltZXIgaWYgbm9uZSBpcyBwcmVzZW50LlxuICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0gPSBzZXRUaW1lb3V0KHNlbGYuX2VuZGVkLmJpbmQoc2VsZiwgc291bmQpLCB0aW1lb3V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5Jywgc291bmQuX2lkKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoSG93bGVyLnN0YXRlID09PSAncnVubmluZycpIHtcbiAgICAgICAgICBwbGF5V2ViQXVkaW8oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLm9uY2UoJ3Jlc3VtZScsIHBsYXlXZWJBdWRpbyk7XG5cbiAgICAgICAgICAvLyBDYW5jZWwgdGhlIGVuZCB0aW1lci5cbiAgICAgICAgICBzZWxmLl9jbGVhclRpbWVyKHNvdW5kLl9pZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZpcmUgdGhpcyB3aGVuIHRoZSBzb3VuZCBpcyByZWFkeSB0byBwbGF5IHRvIGJlZ2luIEhUTUw1IEF1ZGlvIHBsYXliYWNrLlxuICAgICAgICB2YXIgcGxheUh0bWw1ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbm9kZS5jdXJyZW50VGltZSA9IHNlZWs7XG4gICAgICAgICAgbm9kZS5tdXRlZCA9IHNvdW5kLl9tdXRlZCB8fCBzZWxmLl9tdXRlZCB8fCBIb3dsZXIuX211dGVkIHx8IG5vZGUubXV0ZWQ7XG4gICAgICAgICAgbm9kZS52b2x1bWUgPSBzb3VuZC5fdm9sdW1lICogSG93bGVyLnZvbHVtZSgpO1xuICAgICAgICAgIG5vZGUucGxheWJhY2tSYXRlID0gc291bmQuX3JhdGU7XG5cbiAgICAgICAgICAvLyBNb2JpbGUgYnJvd3NlcnMgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGlzIGlzIGNhbGxlZCB3aXRob3V0IHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBwbGF5ID0gbm9kZS5wbGF5KCk7XG5cbiAgICAgICAgICAgIC8vIFN1cHBvcnQgb2xkZXIgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHByb21pc2VzLCBhbmQgdGh1cyBkb24ndCBoYXZlIHRoaXMgaXNzdWUuXG4gICAgICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIHBsYXkgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgIC8vIEltcGxlbWVudHMgYSBsb2NrIHRvIHByZXZlbnQgRE9NRXhjZXB0aW9uOiBUaGUgcGxheSgpIHJlcXVlc3Qgd2FzIGludGVycnVwdGVkIGJ5IGEgY2FsbCB0byBwYXVzZSgpLlxuICAgICAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgLy8gUmVsZWFzZXMgdGhlIGxvY2sgYW5kIGV4ZWN1dGVzIHF1ZXVlZCBhY3Rpb25zLlxuICAgICAgICAgICAgICB2YXIgcnVuTG9hZFF1ZXVlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fcGxheUxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5Jywgc291bmQuX2lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHBsYXkudGhlbihydW5Mb2FkUXVldWUsIHJ1bkxvYWRRdWV1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5Jywgc291bmQuX2lkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0dGluZyByYXRlIGJlZm9yZSBwbGF5aW5nIHdvbid0IHdvcmsgaW4gSUUsIHNvIHdlIHNldCBpdCBhZ2FpbiBoZXJlLlxuICAgICAgICAgICAgbm9kZS5wbGF5YmFja1JhdGUgPSBzb3VuZC5fcmF0ZTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIG5vZGUgaXMgc3RpbGwgcGF1c2VkLCB0aGVuIHdlIGNhbiBhc3N1bWUgdGhlcmUgd2FzIGEgcGxheWJhY2sgaXNzdWUuXG4gICAgICAgICAgICBpZiAobm9kZS5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5fZW1pdCgncGxheWVycm9yJywgc291bmQuX2lkLCAnUGxheWJhY2sgd2FzIHVuYWJsZSB0byBzdGFydC4gVGhpcyBpcyBtb3N0IGNvbW1vbmx5IGFuIGlzc3VlICcgK1xuICAgICAgICAgICAgICAgICdvbiBtb2JpbGUgZGV2aWNlcyB3aGVyZSBwbGF5YmFjayB3YXMgbm90IHdpdGhpbiBhIHVzZXIgaW50ZXJhY3Rpb24uJyk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0dXAgdGhlIGVuZCB0aW1lciBvbiBzcHJpdGVzIG9yIGxpc3RlbiBmb3IgdGhlIGVuZGVkIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHNwcml0ZSAhPT0gJ19fZGVmYXVsdCcgfHwgc291bmQuX2xvb3ApIHtcbiAgICAgICAgICAgICAgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0gPSBzZXRUaW1lb3V0KHNlbGYuX2VuZGVkLmJpbmQoc2VsZiwgc291bmQpLCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGYuX2VuZFRpbWVyc1tzb3VuZC5faWRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gRmlyZSBlbmRlZCBvbiB0aGlzIGF1ZGlvIG5vZGUuXG4gICAgICAgICAgICAgICAgc2VsZi5fZW5kZWQoc291bmQpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIHNlbGYuX2VuZFRpbWVyc1tzb3VuZC5faWRdLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5ZXJyb3InLCBzb3VuZC5faWQsIGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFBsYXkgaW1tZWRpYXRlbHkgaWYgcmVhZHksIG9yIHdhaXQgZm9yIHRoZSAnY2FucGxheXRocm91Z2gnZSB2ZW50LlxuICAgICAgICB2YXIgbG9hZGVkTm9SZWFkeVN0YXRlID0gKHdpbmRvdyAmJiB3aW5kb3cuZWplY3RhKSB8fCAoIW5vZGUucmVhZHlTdGF0ZSAmJiBIb3dsZXIuX25hdmlnYXRvci5pc0NvY29vbkpTKTtcbiAgICAgICAgaWYgKG5vZGUucmVhZHlTdGF0ZSA+PSAzIHx8IGxvYWRlZE5vUmVhZHlTdGF0ZSkge1xuICAgICAgICAgIHBsYXlIdG1sNSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gQmVnaW4gcGxheWJhY2suXG4gICAgICAgICAgICBwbGF5SHRtbDUoKTtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihIb3dsZXIuX2NhblBsYXlFdmVudCwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihIb3dsZXIuX2NhblBsYXlFdmVudCwgbGlzdGVuZXIsIGZhbHNlKTtcblxuICAgICAgICAgIC8vIENhbmNlbCB0aGUgZW5kIHRpbWVyLlxuICAgICAgICAgIHNlbGYuX2NsZWFyVGltZXIoc291bmQuX2lkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc291bmQuX2lkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQYXVzZSBwbGF5YmFjayBhbmQgc2F2ZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgVGhlIHNvdW5kIElEIChlbXB0eSB0byBwYXVzZSBhbGwgaW4gZ3JvdXApLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgcGF1c2U6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkIG9yIGEgcGxheSgpIHByb21pc2UgaXMgcGVuZGluZywgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIHBhdXNlIHdoZW4gY2FwYWJsZS5cbiAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcgfHwgc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdwYXVzZScsXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYucGF1c2UoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGlkIGlzIHBhc3NlZCwgZ2V0IGFsbCBJRCdzIHRvIGJlIHBhdXNlZC5cbiAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGVuZCB0aW1lci5cbiAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihpZHNbaV0pO1xuXG4gICAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICAgIGlmIChzb3VuZCAmJiAhc291bmQuX3BhdXNlZCkge1xuICAgICAgICAgIC8vIFJlc2V0IHRoZSBzZWVrIHBvc2l0aW9uLlxuICAgICAgICAgIHNvdW5kLl9zZWVrID0gc2VsZi5zZWVrKGlkc1tpXSk7XG4gICAgICAgICAgc291bmQuX3JhdGVTZWVrID0gMDtcbiAgICAgICAgICBzb3VuZC5fcGF1c2VkID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIFN0b3AgY3VycmVudGx5IHJ1bm5pbmcgZmFkZXMuXG4gICAgICAgICAgc2VsZi5fc3RvcEZhZGUoaWRzW2ldKTtcblxuICAgICAgICAgIGlmIChzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgc291bmQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgICAgICAgICAgaWYgKCFzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQuX25vZGUuYnVmZmVyU291cmNlLnN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLm5vdGVPZmYoMCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLnN0b3AoMCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgYnVmZmVyIHNvdXJjZS5cbiAgICAgICAgICAgICAgc2VsZi5fY2xlYW5CdWZmZXIoc291bmQuX25vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNOYU4oc291bmQuX25vZGUuZHVyYXRpb24pIHx8IHNvdW5kLl9ub2RlLmR1cmF0aW9uID09PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgdGhlIHBhdXNlIGV2ZW50LCB1bmxlc3MgYHRydWVgIGlzIHBhc3NlZCBhcyB0aGUgMm5kIGFyZ3VtZW50LlxuICAgICAgICBpZiAoIWFyZ3VtZW50c1sxXSkge1xuICAgICAgICAgIHNlbGYuX2VtaXQoJ3BhdXNlJywgc291bmQgPyBzb3VuZC5faWQgOiBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RvcCBwbGF5YmFjayBhbmQgcmVzZXQgdG8gc3RhcnQuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBUaGUgc291bmQgSUQgKGVtcHR5IHRvIHN0b3AgYWxsIGluIGdyb3VwKS5cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBpbnRlcm5hbCBJbnRlcm5hbCBVc2U6IHRydWUgcHJldmVudHMgZXZlbnQgZmlyaW5nLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24oaWQsIGludGVybmFsKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gc3RvcCB3aGVuIGNhcGFibGUuXG4gICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAnc3RvcCcsXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuc3RvcChpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gaWQgaXMgcGFzc2VkLCBnZXQgYWxsIElEJ3MgdG8gYmUgc3RvcHBlZC5cbiAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGVuZCB0aW1lci5cbiAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihpZHNbaV0pO1xuXG4gICAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAgIC8vIFJlc2V0IHRoZSBzZWVrIHBvc2l0aW9uLlxuICAgICAgICAgIHNvdW5kLl9zZWVrID0gc291bmQuX3N0YXJ0IHx8IDA7XG4gICAgICAgICAgc291bmQuX3JhdGVTZWVrID0gMDtcbiAgICAgICAgICBzb3VuZC5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICBzb3VuZC5fZW5kZWQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gU3RvcCBjdXJyZW50bHkgcnVubmluZyBmYWRlcy5cbiAgICAgICAgICBzZWxmLl9zdG9wRmFkZShpZHNbaV0pO1xuXG4gICAgICAgICAgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBzb3VuZCdzIEF1ZGlvQnVmZmVyU291cmNlTm9kZSBoYXMgYmVlbiBjcmVhdGVkLlxuICAgICAgICAgICAgICBpZiAoc291bmQuX25vZGUuYnVmZmVyU291cmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uuc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5ub3RlT2ZmKDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uuc3RvcCgwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgYnVmZmVyIHNvdXJjZS5cbiAgICAgICAgICAgICAgICBzZWxmLl9jbGVhbkJ1ZmZlcihzb3VuZC5fbm9kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKHNvdW5kLl9ub2RlLmR1cmF0aW9uKSB8fCBzb3VuZC5fbm9kZS5kdXJhdGlvbiA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUuY3VycmVudFRpbWUgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdzdG9wJywgc291bmQuX2lkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE11dGUvdW5tdXRlIGEgc2luZ2xlIHNvdW5kIG9yIGFsbCBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IG11dGVkIFNldCB0byB0cnVlIHRvIG11dGUgYW5kIGZhbHNlIHRvIHVubXV0ZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkICAgIFRoZSBzb3VuZCBJRCB0byB1cGRhdGUgKG9taXQgdG8gbXV0ZS91bm11dGUgYWxsKS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIG11dGU6IGZ1bmN0aW9uKG11dGVkLCBpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIG11dGUgd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ211dGUnLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLm11dGUobXV0ZWQsIGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBhcHBseWluZyBtdXRlL3VubXV0ZSB0byBhbGwgc291bmRzLCB1cGRhdGUgdGhlIGdyb3VwJ3MgdmFsdWUuXG4gICAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHlwZW9mIG11dGVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBzZWxmLl9tdXRlZCA9IG11dGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzZWxmLl9tdXRlZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBpZCBpcyBwYXNzZWQsIGdldCBhbGwgSUQncyB0byBiZSBtdXRlZC5cbiAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgc291bmQuX211dGVkID0gbXV0ZWQ7XG5cbiAgICAgICAgICAvLyBDYW5jZWwgYWN0aXZlIGZhZGUgYW5kIHNldCB0aGUgdm9sdW1lIHRvIHRoZSBlbmQgdmFsdWUuXG4gICAgICAgICAgaWYgKHNvdW5kLl9pbnRlcnZhbCkge1xuICAgICAgICAgICAgc2VsZi5fc3RvcEZhZGUoc291bmQuX2lkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLmdhaW4uc2V0VmFsdWVBdFRpbWUobXV0ZWQgPyAwIDogc291bmQuX3ZvbHVtZSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgc291bmQuX25vZGUubXV0ZWQgPSBIb3dsZXIuX211dGVkID8gdHJ1ZSA6IG11dGVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX2VtaXQoJ211dGUnLCBzb3VuZC5faWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQvc2V0IHRoZSB2b2x1bWUgb2YgdGhpcyBzb3VuZCBvciBvZiB0aGUgSG93bCBncm91cC4gVGhpcyBtZXRob2QgY2FuIG9wdGlvbmFsbHkgdGFrZSAwLCAxIG9yIDIgYXJndW1lbnRzLlxuICAgICAqICAgdm9sdW1lKCkgLT4gUmV0dXJucyB0aGUgZ3JvdXAncyB2b2x1bWUgdmFsdWUuXG4gICAgICogICB2b2x1bWUoaWQpIC0+IFJldHVybnMgdGhlIHNvdW5kIGlkJ3MgY3VycmVudCB2b2x1bWUuXG4gICAgICogICB2b2x1bWUodm9sKSAtPiBTZXRzIHRoZSB2b2x1bWUgb2YgYWxsIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAgICogICB2b2x1bWUodm9sLCBpZCkgLT4gU2V0cyB0aGUgdm9sdW1lIG9mIHBhc3NlZCBzb3VuZCBpZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsL051bWJlcn0gUmV0dXJucyBzZWxmIG9yIGN1cnJlbnQgdm9sdW1lLlxuICAgICAqL1xuICAgIHZvbHVtZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHZhciB2b2wsIGlkO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIHZhbHVlcyBiYXNlZCBvbiBhcmd1bWVudHMuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSB2YWx1ZSBvZiB0aGUgZ3JvdXBzJyB2b2x1bWUuXG4gICAgICAgIHJldHVybiBzZWxmLl92b2x1bWU7XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxIHx8IGFyZ3MubGVuZ3RoID09PSAyICYmIHR5cGVvZiBhcmdzWzFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBGaXJzdCBjaGVjayBpZiB0aGlzIGlzIGFuIElELCBhbmQgaWYgbm90LCBhc3N1bWUgaXQgaXMgYSBuZXcgdm9sdW1lLlxuICAgICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gaWRzLmluZGV4T2YoYXJnc1swXSk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzBdLCAxMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdm9sID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIHZvbCA9IHBhcnNlRmxvYXQoYXJnc1swXSk7XG4gICAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgdGhlIHZvbHVtZSBvciByZXR1cm4gdGhlIGN1cnJlbnQgdm9sdW1lLlxuICAgICAgdmFyIHNvdW5kO1xuICAgICAgaWYgKHR5cGVvZiB2b2wgIT09ICd1bmRlZmluZWQnICYmIHZvbCA+PSAwICYmIHZvbCA8PSAxKSB7XG4gICAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gY2hhbmdlIHZvbHVtZSB3aGVuIGNhcGFibGUuXG4gICAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiAndm9sdW1lJyxcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYudm9sdW1lLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGhlIGdyb3VwIHZvbHVtZS5cbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBzZWxmLl92b2x1bWUgPSB2b2w7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgb25lIG9yIGFsbCB2b2x1bWVzLlxuICAgICAgICBpZCA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZFtpXSk7XG5cbiAgICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICAgIHNvdW5kLl92b2x1bWUgPSB2b2w7XG5cbiAgICAgICAgICAgIC8vIFN0b3AgY3VycmVudGx5IHJ1bm5pbmcgZmFkZXMuXG4gICAgICAgICAgICBpZiAoIWFyZ3NbMl0pIHtcbiAgICAgICAgICAgICAgc2VsZi5fc3RvcEZhZGUoaWRbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUgJiYgIXNvdW5kLl9tdXRlZCkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKHZvbCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvdW5kLl9ub2RlICYmICFzb3VuZC5fbXV0ZWQpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUudm9sdW1lID0gdm9sICogSG93bGVyLnZvbHVtZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLl9lbWl0KCd2b2x1bWUnLCBzb3VuZC5faWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291bmQgPSBpZCA/IHNlbGYuX3NvdW5kQnlJZChpZCkgOiBzZWxmLl9zb3VuZHNbMF07XG4gICAgICAgIHJldHVybiBzb3VuZCA/IHNvdW5kLl92b2x1bWUgOiAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmFkZSBhIGN1cnJlbnRseSBwbGF5aW5nIHNvdW5kIGJldHdlZW4gdHdvIHZvbHVtZXMgKGlmIG5vIGlkIGlzIHBhc3NzZWQsIGFsbCBzb3VuZHMgd2lsbCBmYWRlKS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGZyb20gVGhlIHZhbHVlIHRvIGZhZGUgZnJvbSAoMC4wIHRvIDEuMCkuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0byAgIFRoZSB2b2x1bWUgdG8gZmFkZSB0byAoMC4wIHRvIDEuMCkuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBsZW4gIFRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIGZhZGUuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAgIFRoZSBzb3VuZCBpZCAob21pdCB0byBmYWRlIGFsbCBzb3VuZHMpLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgZmFkZTogZnVuY3Rpb24oZnJvbSwgdG8sIGxlbiwgaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBmYWRlIHdoZW4gY2FwYWJsZS5cbiAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdmYWRlJyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5mYWRlKGZyb20sIHRvLCBsZW4sIGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXQgdGhlIHZvbHVtZSB0byB0aGUgc3RhcnQgcG9zaXRpb24uXG4gICAgICBzZWxmLnZvbHVtZShmcm9tLCBpZCk7XG5cbiAgICAgIC8vIEZhZGUgdGhlIHZvbHVtZSBvZiBvbmUgb3IgYWxsIHNvdW5kcy5cbiAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIGxpbmVhciBmYWRlIG9yIGZhbGwgYmFjayB0byB0aW1lb3V0cyB3aXRoIEhUTUw1IEF1ZGlvLlxuICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICAvLyBTdG9wIHRoZSBwcmV2aW91cyBmYWRlIGlmIG5vIHNwcml0ZSBpcyBiZWluZyB1c2VkIChvdGhlcndpc2UsIHZvbHVtZSBoYW5kbGVzIHRoaXMpLlxuICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIHNlbGYuX3N0b3BGYWRlKGlkc1tpXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgd2UgYXJlIHVzaW5nIFdlYiBBdWRpbywgbGV0IHRoZSBuYXRpdmUgbWV0aG9kcyBkbyB0aGUgYWN0dWFsIGZhZGUuXG4gICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmICFzb3VuZC5fbXV0ZWQpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGltZSA9IEhvd2xlci5jdHguY3VycmVudFRpbWU7XG4gICAgICAgICAgICB2YXIgZW5kID0gY3VycmVudFRpbWUgKyAobGVuIC8gMTAwMCk7XG4gICAgICAgICAgICBzb3VuZC5fdm9sdW1lID0gZnJvbTtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLmdhaW4uc2V0VmFsdWVBdFRpbWUoZnJvbSwgY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgc291bmQuX25vZGUuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSh0bywgZW5kKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLl9zdGFydEZhZGVJbnRlcnZhbChzb3VuZCwgZnJvbSwgdG8sIGxlbiwgaWRzW2ldLCB0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSBpbnRlcm5hbCBpbnRlcnZhbCB0byBmYWRlIGEgc291bmQuXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBzb3VuZCBSZWZlcmVuY2UgdG8gc291bmQgdG8gZmFkZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGZyb20gVGhlIHZhbHVlIHRvIGZhZGUgZnJvbSAoMC4wIHRvIDEuMCkuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0byAgIFRoZSB2b2x1bWUgdG8gZmFkZSB0byAoMC4wIHRvIDEuMCkuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBsZW4gIFRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIGZhZGUuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAgIFRoZSBzb3VuZCBpZCB0byBmYWRlLlxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGlzR3JvdXAgICBJZiB0cnVlLCBzZXQgdGhlIHZvbHVtZSBvbiB0aGUgZ3JvdXAuXG4gICAgICovXG4gICAgX3N0YXJ0RmFkZUludGVydmFsOiBmdW5jdGlvbihzb3VuZCwgZnJvbSwgdG8sIGxlbiwgaWQsIGlzR3JvdXApIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciB2b2wgPSBmcm9tO1xuICAgICAgdmFyIGRpZmYgPSB0byAtIGZyb207XG4gICAgICB2YXIgc3RlcHMgPSBNYXRoLmFicyhkaWZmIC8gMC4wMSk7XG4gICAgICB2YXIgc3RlcExlbiA9IE1hdGgubWF4KDQsIChzdGVwcyA+IDApID8gbGVuIC8gc3RlcHMgOiBsZW4pO1xuICAgICAgdmFyIGxhc3RUaWNrID0gRGF0ZS5ub3coKTtcblxuICAgICAgLy8gU3RvcmUgdGhlIHZhbHVlIGJlaW5nIGZhZGVkIHRvLlxuICAgICAgc291bmQuX2ZhZGVUbyA9IHRvO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIHZvbHVtZSB2YWx1ZSBvbiBlYWNoIGludGVydmFsIHRpY2suXG4gICAgICBzb3VuZC5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB2b2x1bWUgYmFzZWQgb24gdGhlIHRpbWUgc2luY2UgdGhlIGxhc3QgdGljay5cbiAgICAgICAgdmFyIHRpY2sgPSAoRGF0ZS5ub3coKSAtIGxhc3RUaWNrKSAvIGxlbjtcbiAgICAgICAgbGFzdFRpY2sgPSBEYXRlLm5vdygpO1xuICAgICAgICB2b2wgKz0gZGlmZiAqIHRpY2s7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSB2b2x1bWUgaXMgaW4gdGhlIHJpZ2h0IGJvdW5kcy5cbiAgICAgICAgdm9sID0gTWF0aC5tYXgoMCwgdm9sKTtcbiAgICAgICAgdm9sID0gTWF0aC5taW4oMSwgdm9sKTtcblxuICAgICAgICAvLyBSb3VuZCB0byB3aXRoaW4gMiBkZWNpbWFsIHBvaW50cy5cbiAgICAgICAgdm9sID0gTWF0aC5yb3VuZCh2b2wgKiAxMDApIC8gMTAwO1xuXG4gICAgICAgIC8vIENoYW5nZSB0aGUgdm9sdW1lLlxuICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICBzb3VuZC5fdm9sdW1lID0gdm9sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYudm9sdW1lKHZvbCwgc291bmQuX2lkLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aGUgZ3JvdXAncyB2b2x1bWUuXG4gICAgICAgIGlmIChpc0dyb3VwKSB7XG4gICAgICAgICAgc2VsZi5fdm9sdW1lID0gdm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiB0aGUgZmFkZSBpcyBjb21wbGV0ZSwgc3RvcCBpdCBhbmQgZmlyZSBldmVudC5cbiAgICAgICAgaWYgKCh0byA8IGZyb20gJiYgdm9sIDw9IHRvKSB8fCAodG8gPiBmcm9tICYmIHZvbCA+PSB0bykpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHNvdW5kLl9pbnRlcnZhbCk7XG4gICAgICAgICAgc291bmQuX2ludGVydmFsID0gbnVsbDtcbiAgICAgICAgICBzb3VuZC5fZmFkZVRvID0gbnVsbDtcbiAgICAgICAgICBzZWxmLnZvbHVtZSh0bywgc291bmQuX2lkKTtcbiAgICAgICAgICBzZWxmLl9lbWl0KCdmYWRlJywgc291bmQuX2lkKTtcbiAgICAgICAgfVxuICAgICAgfSwgc3RlcExlbik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIG1ldGhvZCB0aGF0IHN0b3BzIHRoZSBjdXJyZW50bHkgcGxheWluZyBmYWRlIHdoZW5cbiAgICAgKiBhIG5ldyBmYWRlIHN0YXJ0cywgdm9sdW1lIGlzIGNoYW5nZWQgb3IgdGhlIHNvdW5kIGlzIHN0b3BwZWQuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBUaGUgc291bmQgaWQuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfc3RvcEZhZGU6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWQpO1xuXG4gICAgICBpZiAoc291bmQgJiYgc291bmQuX2ludGVydmFsKSB7XG4gICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgIHNvdW5kLl9ub2RlLmdhaW4uY2FuY2VsU2NoZWR1bGVkVmFsdWVzKEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbChzb3VuZC5faW50ZXJ2YWwpO1xuICAgICAgICBzb3VuZC5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICBzZWxmLnZvbHVtZShzb3VuZC5fZmFkZVRvLCBpZCk7XG4gICAgICAgIHNvdW5kLl9mYWRlVG8gPSBudWxsO1xuICAgICAgICBzZWxmLl9lbWl0KCdmYWRlJywgaWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0L3NldCB0aGUgbG9vcCBwYXJhbWV0ZXIgb24gYSBzb3VuZC4gVGhpcyBtZXRob2QgY2FuIG9wdGlvbmFsbHkgdGFrZSAwLCAxIG9yIDIgYXJndW1lbnRzLlxuICAgICAqICAgbG9vcCgpIC0+IFJldHVybnMgdGhlIGdyb3VwJ3MgbG9vcCB2YWx1ZS5cbiAgICAgKiAgIGxvb3AoaWQpIC0+IFJldHVybnMgdGhlIHNvdW5kIGlkJ3MgbG9vcCB2YWx1ZS5cbiAgICAgKiAgIGxvb3AobG9vcCkgLT4gU2V0cyB0aGUgbG9vcCB2YWx1ZSBmb3IgYWxsIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAgICogICBsb29wKGxvb3AsIGlkKSAtPiBTZXRzIHRoZSBsb29wIHZhbHVlIG9mIHBhc3NlZCBzb3VuZCBpZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsL0Jvb2xlYW59IFJldHVybnMgc2VsZiBvciBjdXJyZW50IGxvb3AgdmFsdWUuXG4gICAgICovXG4gICAgbG9vcDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHZhciBsb29wLCBpZCwgc291bmQ7XG5cbiAgICAgIC8vIERldGVybWluZSB0aGUgdmFsdWVzIGZvciBsb29wIGFuZCBpZC5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBSZXR1cm4gdGhlIGdyb3UncyBsb29wIHZhbHVlLlxuICAgICAgICByZXR1cm4gc2VsZi5fbG9vcDtcbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBsb29wID0gYXJnc1swXTtcbiAgICAgICAgICBzZWxmLl9sb29wID0gbG9vcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSZXR1cm4gdGhpcyBzb3VuZCdzIGxvb3AgdmFsdWUuXG4gICAgICAgICAgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQocGFyc2VJbnQoYXJnc1swXSwgMTApKTtcbiAgICAgICAgICByZXR1cm4gc291bmQgPyBzb3VuZC5fbG9vcCA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGxvb3AgPSBhcmdzWzBdO1xuICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gaWQgaXMgcGFzc2VkLCBnZXQgYWxsIElEJ3MgdG8gYmUgbG9vcGVkLlxuICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICBzb3VuZC5fbG9vcCA9IGxvb3A7XG4gICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlICYmIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZSkge1xuICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmxvb3AgPSBsb29wO1xuICAgICAgICAgICAgaWYgKGxvb3ApIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmxvb3BTdGFydCA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcEVuZCA9IHNvdW5kLl9zdG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0L3NldCB0aGUgcGxheWJhY2sgcmF0ZSBvZiBhIHNvdW5kLiBUaGlzIG1ldGhvZCBjYW4gb3B0aW9uYWxseSB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAgICogICByYXRlKCkgLT4gUmV0dXJucyB0aGUgZmlyc3Qgc291bmQgbm9kZSdzIGN1cnJlbnQgcGxheWJhY2sgcmF0ZS5cbiAgICAgKiAgIHJhdGUoaWQpIC0+IFJldHVybnMgdGhlIHNvdW5kIGlkJ3MgY3VycmVudCBwbGF5YmFjayByYXRlLlxuICAgICAqICAgcmF0ZShyYXRlKSAtPiBTZXRzIHRoZSBwbGF5YmFjayByYXRlIG9mIGFsbCBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAqICAgcmF0ZShyYXRlLCBpZCkgLT4gU2V0cyB0aGUgcGxheWJhY2sgcmF0ZSBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAgICogQHJldHVybiB7SG93bC9OdW1iZXJ9IFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCBwbGF5YmFjayByYXRlLlxuICAgICAqL1xuICAgIHJhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgcmF0ZSwgaWQ7XG5cbiAgICAgIC8vIERldGVybWluZSB0aGUgdmFsdWVzIGJhc2VkIG9uIGFyZ3VtZW50cy5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBXZSB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgcmF0ZSBvZiB0aGUgZmlyc3Qgbm9kZS5cbiAgICAgICAgaWQgPSBzZWxmLl9zb3VuZHNbMF0uX2lkO1xuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBGaXJzdCBjaGVjayBpZiB0aGlzIGlzIGFuIElELCBhbmQgaWYgbm90LCBhc3N1bWUgaXQgaXMgYSBuZXcgcmF0ZSB2YWx1ZS5cbiAgICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKCk7XG4gICAgICAgIHZhciBpbmRleCA9IGlkcy5pbmRleE9mKGFyZ3NbMF0pO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1swXSwgMTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJhdGUgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHJhdGUgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHRoZSBwbGF5YmFjayByYXRlIG9yIHJldHVybiB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgIHZhciBzb3VuZDtcbiAgICAgIGlmICh0eXBlb2YgcmF0ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBjaGFuZ2UgcGxheWJhY2sgcmF0ZSB3aGVuIGNhcGFibGUuXG4gICAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiAncmF0ZScsXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzZWxmLnJhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aGUgZ3JvdXAgcmF0ZS5cbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBzZWxmLl9yYXRlID0gcmF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBvbmUgb3IgYWxsIHZvbHVtZXMuXG4gICAgICAgIGlkID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8aWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkW2ldKTtcblxuICAgICAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAgICAgLy8gS2VlcCB0cmFjayBvZiBvdXIgcG9zaXRpb24gd2hlbiB0aGUgcmF0ZSBjaGFuZ2VkIGFuZCB1cGRhdGUgdGhlIHBsYXliYWNrXG4gICAgICAgICAgICAvLyBzdGFydCBwb3NpdGlvbiBzbyB3ZSBjYW4gcHJvcGVybHkgYWRqdXN0IHRoZSBzZWVrIHBvc2l0aW9uIGZvciB0aW1lIGVsYXBzZWQuXG4gICAgICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSBzZWxmLnNlZWsoaWRbaV0pO1xuICAgICAgICAgICAgc291bmQuX3BsYXlTdGFydCA9IHNlbGYuX3dlYkF1ZGlvID8gSG93bGVyLmN0eC5jdXJyZW50VGltZSA6IHNvdW5kLl9wbGF5U3RhcnQ7XG4gICAgICAgICAgICBzb3VuZC5fcmF0ZSA9IHJhdGU7XG5cbiAgICAgICAgICAgIC8vIENoYW5nZSB0aGUgcGxheWJhY2sgcmF0ZS5cbiAgICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSAmJiBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLnBsYXliYWNrUmF0ZS5zZXRWYWx1ZUF0VGltZShyYXRlLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUucGxheWJhY2tSYXRlID0gcmF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHRpbWVycy5cbiAgICAgICAgICAgIHZhciBzZWVrID0gc2VsZi5zZWVrKGlkW2ldKTtcbiAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9ICgoc2VsZi5fc3ByaXRlW3NvdW5kLl9zcHJpdGVdWzBdICsgc2VsZi5fc3ByaXRlW3NvdW5kLl9zcHJpdGVdWzFdKSAvIDEwMDApIC0gc2VlaztcbiAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gKGR1cmF0aW9uICogMTAwMCkgLyBNYXRoLmFicyhzb3VuZC5fcmF0ZSk7XG5cbiAgICAgICAgICAgIC8vIFN0YXJ0IGEgbmV3IGVuZCB0aW1lciBpZiBzb3VuZCBpcyBhbHJlYWR5IHBsYXlpbmcuXG4gICAgICAgICAgICBpZiAoc2VsZi5fZW5kVGltZXJzW2lkW2ldXSB8fCAhc291bmQuX3BhdXNlZCkge1xuICAgICAgICAgICAgICBzZWxmLl9jbGVhclRpbWVyKGlkW2ldKTtcbiAgICAgICAgICAgICAgc2VsZi5fZW5kVGltZXJzW2lkW2ldXSA9IHNldFRpbWVvdXQoc2VsZi5fZW5kZWQuYmluZChzZWxmLCBzb3VuZCksIHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdyYXRlJywgc291bmQuX2lkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcbiAgICAgICAgcmV0dXJuIHNvdW5kID8gc291bmQuX3JhdGUgOiBzZWxmLl9yYXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0L3NldCB0aGUgc2VlayBwb3NpdGlvbiBvZiBhIHNvdW5kLiBUaGlzIG1ldGhvZCBjYW4gb3B0aW9uYWxseSB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAgICogICBzZWVrKCkgLT4gUmV0dXJucyB0aGUgZmlyc3Qgc291bmQgbm9kZSdzIGN1cnJlbnQgc2VlayBwb3NpdGlvbi5cbiAgICAgKiAgIHNlZWsoaWQpIC0+IFJldHVybnMgdGhlIHNvdW5kIGlkJ3MgY3VycmVudCBzZWVrIHBvc2l0aW9uLlxuICAgICAqICAgc2VlayhzZWVrKSAtPiBTZXRzIHRoZSBzZWVrIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBzb3VuZCBub2RlLlxuICAgICAqICAgc2VlayhzZWVrLCBpZCkgLT4gU2V0cyB0aGUgc2VlayBwb3NpdGlvbiBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAgICogQHJldHVybiB7SG93bC9OdW1iZXJ9IFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCBzZWVrIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIHNlZWs6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgc2VlaywgaWQ7XG5cbiAgICAgIC8vIERldGVybWluZSB0aGUgdmFsdWVzIGJhc2VkIG9uIGFyZ3VtZW50cy5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBXZSB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG5vZGUuXG4gICAgICAgIGlkID0gc2VsZi5fc291bmRzWzBdLl9pZDtcbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhpcyBpcyBhbiBJRCwgYW5kIGlmIG5vdCwgYXNzdW1lIGl0IGlzIGEgbmV3IHNlZWsgcG9zaXRpb24uXG4gICAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcygpO1xuICAgICAgICB2YXIgaW5kZXggPSBpZHMuaW5kZXhPZihhcmdzWzBdKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMF0sIDEwKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxmLl9zb3VuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgaWQgPSBzZWxmLl9zb3VuZHNbMF0uX2lkO1xuICAgICAgICAgIHNlZWsgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNlZWsgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gSUQsIGJhaWwgb3V0LlxuICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gc2VlayB3aGVuIGNhcGFibGUuXG4gICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAnc2VlaycsXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuc2Vlay5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VlayA9PT0gJ251bWJlcicgJiYgc2VlayA+PSAwKSB7XG4gICAgICAgICAgLy8gUGF1c2UgdGhlIHNvdW5kIGFuZCB1cGRhdGUgcG9zaXRpb24gZm9yIHJlc3RhcnRpbmcgcGxheWJhY2suXG4gICAgICAgICAgdmFyIHBsYXlpbmcgPSBzZWxmLnBsYXlpbmcoaWQpO1xuICAgICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgICBzZWxmLnBhdXNlKGlkLCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBNb3ZlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJhY2sgYW5kIGNhbmNlbCB0aW1lci5cbiAgICAgICAgICBzb3VuZC5fc2VlayA9IHNlZWs7XG4gICAgICAgICAgc291bmQuX2VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihpZCk7XG5cbiAgICAgICAgICAvLyBSZXN0YXJ0IHRoZSBwbGF5YmFjayBpZiB0aGUgc291bmQgd2FzIHBsYXlpbmcuXG4gICAgICAgICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgICAgICAgIHNlbGYucGxheShpZCwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBzZWVrIHBvc2l0aW9uIGZvciBIVE1MNSBBdWRpby5cbiAgICAgICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5jdXJyZW50VGltZSA9IHNlZWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2FpdCBmb3IgdGhlIHBsYXkgbG9jayB0byBiZSB1bnNldCBiZWZvcmUgZW1pdHRpbmcgKEhUTUw1IEF1ZGlvKS5cbiAgICAgICAgICBpZiAocGxheWluZyAmJiAhc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAgIHZhciBlbWl0U2VlayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoIXNlbGYuX3BsYXlMb2NrKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fZW1pdCgnc2VlaycsIGlkKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGVtaXRTZWVrLCAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW1pdFNlZWssIDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdzZWVrJywgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAgIHZhciByZWFsVGltZSA9IHNlbGYucGxheWluZyhpZCkgPyBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lIC0gc291bmQuX3BsYXlTdGFydCA6IDA7XG4gICAgICAgICAgICB2YXIgcmF0ZVNlZWsgPSBzb3VuZC5fcmF0ZVNlZWsgPyBzb3VuZC5fcmF0ZVNlZWsgLSBzb3VuZC5fc2VlayA6IDA7XG4gICAgICAgICAgICByZXR1cm4gc291bmQuX3NlZWsgKyAocmF0ZVNlZWsgKyByZWFsVGltZSAqIE1hdGguYWJzKHNvdW5kLl9yYXRlKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VuZC5fbm9kZS5jdXJyZW50VGltZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgc3BlY2lmaWMgc291bmQgaXMgY3VycmVudGx5IHBsYXlpbmcgb3Igbm90IChpZiBpZCBpcyBwcm92aWRlZCksIG9yIGNoZWNrIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGUgc291bmRzIGluIHRoZSBncm91cCBpcyBwbGF5aW5nIG9yIG5vdC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9ICBpZCBUaGUgc291bmQgaWQgdG8gY2hlY2suIElmIG5vbmUgaXMgcGFzc2VkLCB0aGUgd2hvbGUgc291bmQgZ3JvdXAgaXMgY2hlY2tlZC5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIHBsYXlpbmcgYW5kIGZhbHNlIGlmIG5vdC5cbiAgICAgKi9cbiAgICBwbGF5aW5nOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBDaGVjayB0aGUgcGFzc2VkIHNvdW5kIElEIChpZiBhbnkpLlxuICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcbiAgICAgICAgcmV0dXJuIHNvdW5kID8gIXNvdW5kLl9wYXVzZWQgOiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlLCBsb29wIHRocm91Z2ggYWxsIHNvdW5kcyBhbmQgY2hlY2sgaWYgYW55IGFyZSBwbGF5aW5nLlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXNlbGYuX3NvdW5kc1tpXS5fcGF1c2VkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGR1cmF0aW9uIG9mIHRoaXMgc291bmQuIFBhc3NpbmcgYSBzb3VuZCBpZCB3aWxsIHJldHVybiB0aGUgc3ByaXRlIGR1cmF0aW9uLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgVGhlIHNvdW5kIGlkIHRvIGNoZWNrLiBJZiBub25lIGlzIHBhc3NlZCwgcmV0dXJuIGZ1bGwgc291cmNlIGR1cmF0aW9uLlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gQXVkaW8gZHVyYXRpb24gaW4gc2Vjb25kcy5cbiAgICAgKi9cbiAgICBkdXJhdGlvbjogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBkdXJhdGlvbiA9IHNlbGYuX2R1cmF0aW9uO1xuXG4gICAgICAvLyBJZiB3ZSBwYXNzIGFuIElELCBnZXQgdGhlIHNvdW5kIGFuZCByZXR1cm4gdGhlIHNwcml0ZSBsZW5ndGguXG4gICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWQpO1xuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGR1cmF0aW9uID0gc2VsZi5fc3ByaXRlW3NvdW5kLl9zcHJpdGVdWzFdIC8gMTAwMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGxvYWRlZCBzdGF0ZSBvZiB0aGlzIEhvd2wuXG4gICAgICogQHJldHVybiB7U3RyaW5nfSAndW5sb2FkZWQnLCAnbG9hZGluZycsICdsb2FkZWQnXG4gICAgICovXG4gICAgc3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVbmxvYWQgYW5kIGRlc3Ryb3kgdGhlIGN1cnJlbnQgSG93bCBvYmplY3QuXG4gICAgICogVGhpcyB3aWxsIGltbWVkaWF0ZWx5IHN0b3AgYWxsIHNvdW5kIGluc3RhbmNlcyBhdHRhY2hlZCB0byB0aGlzIGdyb3VwLlxuICAgICAqL1xuICAgIHVubG9hZDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIFN0b3AgcGxheWluZyBhbnkgYWN0aXZlIHNvdW5kcy5cbiAgICAgIHZhciBzb3VuZHMgPSBzZWxmLl9zb3VuZHM7XG4gICAgICBmb3IgKHZhciBpPTA7IGk8c291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIFN0b3AgdGhlIHNvdW5kIGlmIGl0IGlzIGN1cnJlbnRseSBwbGF5aW5nLlxuICAgICAgICBpZiAoIXNvdW5kc1tpXS5fcGF1c2VkKSB7XG4gICAgICAgICAgc2VsZi5zdG9wKHNvdW5kc1tpXS5faWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBzb3VyY2Ugb3IgZGlzY29ubmVjdC5cbiAgICAgICAgaWYgKCFzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgIC8vIFNldCB0aGUgc291cmNlIHRvIDAtc2Vjb25kIHNpbGVuY2UgdG8gc3RvcCBhbnkgZG93bmxvYWRpbmcgKGV4Y2VwdCBpbiBJRSkuXG4gICAgICAgICAgdmFyIGNoZWNrSUUgPSAvTVNJRSB8VHJpZGVudFxcLy8udGVzdChIb3dsZXIuX25hdmlnYXRvciAmJiBIb3dsZXIuX25hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICAgIGlmICghY2hlY2tJRSkge1xuICAgICAgICAgICAgc291bmRzW2ldLl9ub2RlLnNyYyA9ICdkYXRhOmF1ZGlvL3dhdjtiYXNlNjQsVWtsR1JpZ0FBQUJYUVZaRlptMTBJQklBQUFBQkFBRUFSS3dBQUloWUFRQUNBQkFBQUFCa1lYUmhBZ0FBQUFFQSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZlIGFueSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAgc291bmRzW2ldLl9ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgc291bmRzW2ldLl9lcnJvckZuLCBmYWxzZSk7XG4gICAgICAgICAgc291bmRzW2ldLl9ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoSG93bGVyLl9jYW5QbGF5RXZlbnQsIHNvdW5kc1tpXS5fbG9hZEZuLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbXB0eSBvdXQgYWxsIG9mIHRoZSBub2Rlcy5cbiAgICAgICAgZGVsZXRlIHNvdW5kc1tpXS5fbm9kZTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgYWxsIHRpbWVycyBhcmUgY2xlYXJlZCBvdXQuXG4gICAgICAgIHNlbGYuX2NsZWFyVGltZXIoc291bmRzW2ldLl9pZCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSByZWZlcmVuY2VzIGluIHRoZSBnbG9iYWwgSG93bGVyIG9iamVjdC5cbiAgICAgICAgdmFyIGluZGV4ID0gSG93bGVyLl9ob3dscy5pbmRleE9mKHNlbGYpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIEhvd2xlci5faG93bHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBEZWxldGUgdGhpcyBzb3VuZCBmcm9tIHRoZSBjYWNoZSAoaWYgbm8gb3RoZXIgSG93bCBpcyB1c2luZyBpdCkuXG4gICAgICB2YXIgcmVtQ2FjaGUgPSB0cnVlO1xuICAgICAgZm9yIChpPTA7IGk8SG93bGVyLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoSG93bGVyLl9ob3dsc1tpXS5fc3JjID09PSBzZWxmLl9zcmMpIHtcbiAgICAgICAgICByZW1DYWNoZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWNoZSAmJiByZW1DYWNoZSkge1xuICAgICAgICBkZWxldGUgY2FjaGVbc2VsZi5fc3JjXTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgZ2xvYmFsIGVycm9ycy5cbiAgICAgIEhvd2xlci5ub0F1ZGlvID0gZmFsc2U7XG5cbiAgICAgIC8vIENsZWFyIG91dCBgc2VsZmAuXG4gICAgICBzZWxmLl9zdGF0ZSA9ICd1bmxvYWRlZCc7XG4gICAgICBzZWxmLl9zb3VuZHMgPSBbXTtcbiAgICAgIHNlbGYgPSBudWxsO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIGEgY3VzdG9tIGV2ZW50LlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudCBFdmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICBMaXN0ZW5lciB0byBjYWxsLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gICBpZCAgICAob3B0aW9uYWwpIE9ubHkgbGlzdGVuIHRvIGV2ZW50cyBmb3IgdGhpcyBzb3VuZC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9ICAgb25jZSAgKElOVEVSTkFMKSBNYXJrcyBldmVudCB0byBmaXJlIG9ubHkgb25jZS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIG9uOiBmdW5jdGlvbihldmVudCwgZm4sIGlkLCBvbmNlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZXZlbnRzID0gc2VsZlsnX29uJyArIGV2ZW50XTtcblxuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBldmVudHMucHVzaChvbmNlID8ge2lkOiBpZCwgZm46IGZuLCBvbmNlOiBvbmNlfSA6IHtpZDogaWQsIGZuOiBmbn0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgY3VzdG9tIGV2ZW50LiBDYWxsIHdpdGhvdXQgcGFyYW1ldGVycyB0byByZW1vdmUgYWxsIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnQgRXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgTGlzdGVuZXIgdG8gcmVtb3ZlLiBMZWF2ZSBlbXB0eSB0byByZW1vdmUgYWxsLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gICBpZCAgICAob3B0aW9uYWwpIE9ubHkgcmVtb3ZlIGV2ZW50cyBmb3IgdGhpcyBzb3VuZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIG9mZjogZnVuY3Rpb24oZXZlbnQsIGZuLCBpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGV2ZW50cyA9IHNlbGZbJ19vbicgKyBldmVudF07XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIC8vIEFsbG93IHBhc3NpbmcganVzdCBhbiBldmVudCBhbmQgSUQuXG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZCA9IGZuO1xuICAgICAgICBmbiA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChmbiB8fCBpZCkge1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggZXZlbnQgc3RvcmUgYW5kIHJlbW92ZSB0aGUgcGFzc2VkIGZ1bmN0aW9uLlxuICAgICAgICBmb3IgKGk9MDsgaTxldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaXNJZCA9IChpZCA9PT0gZXZlbnRzW2ldLmlkKTtcbiAgICAgICAgICBpZiAoZm4gPT09IGV2ZW50c1tpXS5mbiAmJiBpc0lkIHx8ICFmbiAmJiBpc0lkKSB7XG4gICAgICAgICAgICBldmVudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50KSB7XG4gICAgICAgIC8vIENsZWFyIG91dCBhbGwgZXZlbnRzIG9mIHRoaXMgdHlwZS5cbiAgICAgICAgc2VsZlsnX29uJyArIGV2ZW50XSA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFsbCBldmVudHMgb2YgZXZlcnkgdHlwZS5cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzZWxmKTtcbiAgICAgICAgZm9yIChpPTA7IGk8a2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICgoa2V5c1tpXS5pbmRleE9mKCdfb24nKSA9PT0gMCkgJiYgQXJyYXkuaXNBcnJheShzZWxmW2tleXNbaV1dKSkge1xuICAgICAgICAgICAgc2VsZltrZXlzW2ldXSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIGEgY3VzdG9tIGV2ZW50IGFuZCByZW1vdmUgaXQgb25jZSBmaXJlZC5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnQgRXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgTGlzdGVuZXIgdG8gY2FsbC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9ICAgaWQgICAgKG9wdGlvbmFsKSBPbmx5IGxpc3RlbiB0byBldmVudHMgZm9yIHRoaXMgc291bmQuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBvbmNlOiBmdW5jdGlvbihldmVudCwgZm4sIGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIFNldHVwIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICAgIHNlbGYub24oZXZlbnQsIGZuLCBpZCwgMSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbWl0IGFsbCBldmVudHMgb2YgYSBzcGVjaWZpYyB0eXBlIGFuZCBwYXNzIHRoZSBzb3VuZCBpZC5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGV2ZW50IEV2ZW50IG5hbWUuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAgICBTb3VuZCBJRC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG1zZyAgIE1lc3NhZ2UgdG8gZ28gd2l0aCBldmVudC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9lbWl0OiBmdW5jdGlvbihldmVudCwgaWQsIG1zZykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGV2ZW50cyA9IHNlbGZbJ19vbicgKyBldmVudF07XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBldmVudCBzdG9yZSBhbmQgZmlyZSBhbGwgZnVuY3Rpb25zLlxuICAgICAgZm9yICh2YXIgaT1ldmVudHMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAvLyBPbmx5IGZpcmUgdGhlIGxpc3RlbmVyIGlmIHRoZSBjb3JyZWN0IElEIGlzIHVzZWQuXG4gICAgICAgIGlmICghZXZlbnRzW2ldLmlkIHx8IGV2ZW50c1tpXS5pZCA9PT0gaWQgfHwgZXZlbnQgPT09ICdsb2FkJykge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgaWQsIG1zZyk7XG4gICAgICAgICAgfS5iaW5kKHNlbGYsIGV2ZW50c1tpXS5mbiksIDApO1xuXG4gICAgICAgICAgLy8gSWYgdGhpcyBldmVudCB3YXMgc2V0dXAgd2l0aCBgb25jZWAsIHJlbW92ZSBpdC5cbiAgICAgICAgICBpZiAoZXZlbnRzW2ldLm9uY2UpIHtcbiAgICAgICAgICAgIHNlbGYub2ZmKGV2ZW50LCBldmVudHNbaV0uZm4sIGV2ZW50c1tpXS5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFBhc3MgdGhlIGV2ZW50IHR5cGUgaW50byBsb2FkIHF1ZXVlIHNvIHRoYXQgaXQgY2FuIGNvbnRpbnVlIHN0ZXBwaW5nLlxuICAgICAgc2VsZi5fbG9hZFF1ZXVlKGV2ZW50KTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFF1ZXVlIG9mIGFjdGlvbnMgaW5pdGlhdGVkIGJlZm9yZSB0aGUgc291bmQgaGFzIGxvYWRlZC5cbiAgICAgKiBUaGVzZSB3aWxsIGJlIGNhbGxlZCBpbiBzZXF1ZW5jZSwgd2l0aCB0aGUgbmV4dCBvbmx5IGZpcmluZ1xuICAgICAqIGFmdGVyIHRoZSBwcmV2aW91cyBoYXMgZmluaXNoZWQgZXhlY3V0aW5nIChldmVuIGlmIGFzeW5jIGxpa2UgcGxheSkuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfbG9hZFF1ZXVlOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoc2VsZi5fcXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgdGFzayA9IHNlbGYuX3F1ZXVlWzBdO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGlzIHRhc2sgaWYgYSBtYXRjaGluZyBldmVudCB3YXMgcGFzc2VkLlxuICAgICAgICBpZiAodGFzay5ldmVudCA9PT0gZXZlbnQpIHtcbiAgICAgICAgICBzZWxmLl9xdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgIHNlbGYuX2xvYWRRdWV1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIHRoZSB0YXNrIGlmIG5vIGV2ZW50IHR5cGUgaXMgcGFzc2VkLlxuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgdGFzay5hY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiBwbGF5YmFjayBlbmRzIGF0IHRoZSBlbmQgb2YgdGhlIGR1cmF0aW9uLlxuICAgICAqIEBwYXJhbSAge1NvdW5kfSBzb3VuZCBUaGUgc291bmQgb2JqZWN0IHRvIHdvcmsgd2l0aC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9lbmRlZDogZnVuY3Rpb24oc291bmQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBzcHJpdGUgPSBzb3VuZC5fc3ByaXRlO1xuXG4gICAgICAvLyBJZiB3ZSBhcmUgdXNpbmcgSUUgYW5kIHRoZXJlIHdhcyBuZXR3b3JrIGxhdGVuY3kgd2UgbWF5IGJlIGNsaXBwaW5nXG4gICAgICAvLyBhdWRpbyBiZWZvcmUgaXQgY29tcGxldGVzIHBsYXlpbmcuIExldHMgY2hlY2sgdGhlIG5vZGUgdG8gbWFrZSBzdXJlIGl0XG4gICAgICAvLyBiZWxpZXZlcyBpdCBoYXMgY29tcGxldGVkLCBiZWZvcmUgZW5kaW5nIHRoZSBwbGF5YmFjay5cbiAgICAgIGlmICghc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUgJiYgIXNvdW5kLl9ub2RlLnBhdXNlZCAmJiAhc291bmQuX25vZGUuZW5kZWQgJiYgc291bmQuX25vZGUuY3VycmVudFRpbWUgPCBzb3VuZC5fc3RvcCkge1xuICAgICAgICBzZXRUaW1lb3V0KHNlbGYuX2VuZGVkLmJpbmQoc2VsZiwgc291bmQpLCAxMDApO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gU2hvdWxkIHRoaXMgc291bmQgbG9vcD9cbiAgICAgIHZhciBsb29wID0gISEoc291bmQuX2xvb3AgfHwgc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMl0pO1xuXG4gICAgICAvLyBGaXJlIHRoZSBlbmRlZCBldmVudC5cbiAgICAgIHNlbGYuX2VtaXQoJ2VuZCcsIHNvdW5kLl9pZCk7XG5cbiAgICAgIC8vIFJlc3RhcnQgdGhlIHBsYXliYWNrIGZvciBIVE1MNSBBdWRpbyBsb29wLlxuICAgICAgaWYgKCFzZWxmLl93ZWJBdWRpbyAmJiBsb29wKSB7XG4gICAgICAgIHNlbGYuc3RvcChzb3VuZC5faWQsIHRydWUpLnBsYXkoc291bmQuX2lkKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVzdGFydCB0aGlzIHRpbWVyIGlmIG9uIGEgV2ViIEF1ZGlvIGxvb3AuXG4gICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgbG9vcCkge1xuICAgICAgICBzZWxmLl9lbWl0KCdwbGF5Jywgc291bmQuX2lkKTtcbiAgICAgICAgc291bmQuX3NlZWsgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgc291bmQuX3JhdGVTZWVrID0gMDtcbiAgICAgICAgc291bmQuX3BsYXlTdGFydCA9IEhvd2xlci5jdHguY3VycmVudFRpbWU7XG5cbiAgICAgICAgdmFyIHRpbWVvdXQgPSAoKHNvdW5kLl9zdG9wIC0gc291bmQuX3N0YXJ0KSAqIDEwMDApIC8gTWF0aC5hYnMoc291bmQuX3JhdGUpO1xuICAgICAgICBzZWxmLl9lbmRUaW1lcnNbc291bmQuX2lkXSA9IHNldFRpbWVvdXQoc2VsZi5fZW5kZWQuYmluZChzZWxmLCBzb3VuZCksIHRpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICAvLyBNYXJrIHRoZSBub2RlIGFzIHBhdXNlZC5cbiAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiAhbG9vcCkge1xuICAgICAgICBzb3VuZC5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgc291bmQuX2VuZGVkID0gdHJ1ZTtcbiAgICAgICAgc291bmQuX3NlZWsgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgc291bmQuX3JhdGVTZWVrID0gMDtcbiAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihzb3VuZC5faWQpO1xuXG4gICAgICAgIC8vIENsZWFuIHVwIHRoZSBidWZmZXIgc291cmNlLlxuICAgICAgICBzZWxmLl9jbGVhbkJ1ZmZlcihzb3VuZC5fbm9kZSk7XG5cbiAgICAgICAgLy8gQXR0ZW1wdCB0byBhdXRvLXN1c3BlbmQgQXVkaW9Db250ZXh0IGlmIG5vIHNvdW5kcyBhcmUgc3RpbGwgcGxheWluZy5cbiAgICAgICAgSG93bGVyLl9hdXRvU3VzcGVuZCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBXaGVuIHVzaW5nIGEgc3ByaXRlLCBlbmQgdGhlIHRyYWNrLlxuICAgICAgaWYgKCFzZWxmLl93ZWJBdWRpbyAmJiAhbG9vcCkge1xuICAgICAgICBzZWxmLnN0b3Aoc291bmQuX2lkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFyIHRoZSBlbmQgdGltZXIgZm9yIGEgc291bmQgcGxheWJhY2suXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBUaGUgc291bmQgSUQuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfY2xlYXJUaW1lcjogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKHNlbGYuX2VuZFRpbWVyc1tpZF0pIHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIHRpbWVvdXQgb3IgcmVtb3ZlIHRoZSBlbmRlZCBsaXN0ZW5lci5cbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLl9lbmRUaW1lcnNbaWRdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX2VuZFRpbWVyc1tpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG4gICAgICAgICAgaWYgKHNvdW5kICYmIHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRlZCcsIHNlbGYuX2VuZFRpbWVyc1tpZF0sIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc2VsZi5fZW5kVGltZXJzW2lkXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc291bmQgaWRlbnRpZmllZCBieSB0aGlzIElELCBvciByZXR1cm4gbnVsbC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFNvdW5kIElEXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAgICBTb3VuZCBvYmplY3Qgb3IgbnVsbC5cbiAgICAgKi9cbiAgICBfc291bmRCeUlkOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHNvdW5kcyBhbmQgZmluZCB0aGUgb25lIHdpdGggdGhpcyBJRC5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9zb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlkID09PSBzZWxmLl9zb3VuZHNbaV0uX2lkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuX3NvdW5kc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIGluYWN0aXZlIHNvdW5kIGZyb20gdGhlIHBvb2wgb3IgY3JlYXRlIGEgbmV3IG9uZS5cbiAgICAgKiBAcmV0dXJuIHtTb3VuZH0gU291bmQgcGxheWJhY2sgb2JqZWN0LlxuICAgICAqL1xuICAgIF9pbmFjdGl2ZVNvdW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgc2VsZi5fZHJhaW4oKTtcblxuICAgICAgLy8gRmluZCB0aGUgZmlyc3QgaW5hY3RpdmUgbm9kZSB0byByZWN5Y2xlLlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5fc291bmRzW2ldLl9lbmRlZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLl9zb3VuZHNbaV0ucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBpbmFjdGl2ZSBub2RlIHdhcyBmb3VuZCwgY3JlYXRlIGEgbmV3IG9uZS5cbiAgICAgIHJldHVybiBuZXcgU291bmQoc2VsZik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERyYWluIGV4Y2VzcyBpbmFjdGl2ZSBzb3VuZHMgZnJvbSB0aGUgcG9vbC5cbiAgICAgKi9cbiAgICBfZHJhaW46IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGxpbWl0ID0gc2VsZi5fcG9vbDtcbiAgICAgIHZhciBjbnQgPSAwO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbGVzcyBzb3VuZHMgdGhhbiB0aGUgbWF4IHBvb2wgc2l6ZSwgd2UgYXJlIGRvbmUuXG4gICAgICBpZiAoc2VsZi5fc291bmRzLmxlbmd0aCA8IGxpbWl0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ291bnQgdGhlIG51bWJlciBvZiBpbmFjdGl2ZSBzb3VuZHMuXG4gICAgICBmb3IgKGk9MDsgaTxzZWxmLl9zb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGYuX3NvdW5kc1tpXS5fZW5kZWQpIHtcbiAgICAgICAgICBjbnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgZXhjZXNzIGluYWN0aXZlIHNvdW5kcywgZ29pbmcgaW4gcmV2ZXJzZSBvcmRlci5cbiAgICAgIGZvciAoaT1zZWxmLl9zb3VuZHMubGVuZ3RoIC0gMTsgaT49MDsgaS0tKSB7XG4gICAgICAgIGlmIChjbnQgPD0gbGltaXQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi5fc291bmRzW2ldLl9lbmRlZCkge1xuICAgICAgICAgIC8vIERpc2Nvbm5lY3QgdGhlIGF1ZGlvIHNvdXJjZSB3aGVuIHVzaW5nIFdlYiBBdWRpby5cbiAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgc2VsZi5fc291bmRzW2ldLl9ub2RlKSB7XG4gICAgICAgICAgICBzZWxmLl9zb3VuZHNbaV0uX25vZGUuZGlzY29ubmVjdCgwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmUgc291bmRzIHVudGlsIHdlIGhhdmUgdGhlIHBvb2wgc2l6ZS5cbiAgICAgICAgICBzZWxmLl9zb3VuZHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGNudC0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgSUQncyBmcm9tIHRoZSBzb3VuZHMgcG9vbC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIE9ubHkgcmV0dXJuIG9uZSBJRCBpZiBvbmUgaXMgcGFzc2VkLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICBBcnJheSBvZiBJRHMuXG4gICAgICovXG4gICAgX2dldFNvdW5kSWRzOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgaWRzID0gW107XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9zb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZHMucHVzaChzZWxmLl9zb3VuZHNbaV0uX2lkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW2lkXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTG9hZCB0aGUgc291bmQgYmFjayBpbnRvIHRoZSBidWZmZXIgc291cmNlLlxuICAgICAqIEBwYXJhbSAge1NvdW5kfSBzb3VuZCBUaGUgc291bmQgb2JqZWN0IHRvIHdvcmsgd2l0aC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9yZWZyZXNoQnVmZmVyOiBmdW5jdGlvbihzb3VuZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBTZXR1cCB0aGUgYnVmZmVyIHNvdXJjZSBmb3IgcGxheWJhY2suXG4gICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UgPSBIb3dsZXIuY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmJ1ZmZlciA9IGNhY2hlW3NlbGYuX3NyY107XG5cbiAgICAgIC8vIENvbm5lY3QgdG8gdGhlIGNvcnJlY3Qgbm9kZS5cbiAgICAgIGlmIChzb3VuZC5fcGFubmVyKSB7XG4gICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5jb25uZWN0KHNvdW5kLl9wYW5uZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmNvbm5lY3Qoc291bmQuX25vZGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cCBsb29waW5nIGFuZCBwbGF5YmFjayByYXRlLlxuICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmxvb3AgPSBzb3VuZC5fbG9vcDtcbiAgICAgIGlmIChzb3VuZC5fbG9vcCkge1xuICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcFN0YXJ0ID0gc291bmQuX3N0YXJ0IHx8IDA7XG4gICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wRW5kID0gc291bmQuX3N0b3A7XG4gICAgICB9XG4gICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UucGxheWJhY2tSYXRlLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9yYXRlLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFByZXZlbnQgbWVtb3J5IGxlYWtzIGJ5IGNsZWFuaW5nIHVwIHRoZSBidWZmZXIgc291cmNlIGFmdGVyIHBsYXliYWNrLlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gbm9kZSBTb3VuZCdzIGF1ZGlvIG5vZGUgY29udGFpbmluZyB0aGUgYnVmZmVyIHNvdXJjZS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9jbGVhbkJ1ZmZlcjogZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoSG93bGVyLl9zY3JhdGNoQnVmZmVyKSB7XG4gICAgICAgIG5vZGUuYnVmZmVyU291cmNlLm9uZW5kZWQgPSBudWxsO1xuICAgICAgICBub2RlLmJ1ZmZlclNvdXJjZS5kaXNjb25uZWN0KDApO1xuICAgICAgICB0cnkgeyBub2RlLmJ1ZmZlclNvdXJjZS5idWZmZXIgPSBIb3dsZXIuX3NjcmF0Y2hCdWZmZXI7IH0gY2F0Y2goZSkge31cbiAgICAgIH1cbiAgICAgIG5vZGUuYnVmZmVyU291cmNlID0gbnVsbDtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuICB9O1xuXG4gIC8qKiBTaW5nbGUgU291bmQgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogU2V0dXAgdGhlIHNvdW5kIG9iamVjdCwgd2hpY2ggZWFjaCBub2RlIGF0dGFjaGVkIHRvIGEgSG93bCBncm91cCBpcyBjb250YWluZWQgaW4uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBob3dsIFRoZSBIb3dsIHBhcmVudCBncm91cC5cbiAgICovXG4gIHZhciBTb3VuZCA9IGZ1bmN0aW9uKGhvd2wpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSBob3dsO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9O1xuICBTb3VuZC5wcm90b3R5cGUgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBhIG5ldyBTb3VuZCBvYmplY3QuXG4gICAgICogQHJldHVybiB7U291bmR9XG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuXG4gICAgICAvLyBTZXR1cCB0aGUgZGVmYXVsdCBwYXJhbWV0ZXJzLlxuICAgICAgc2VsZi5fbXV0ZWQgPSBwYXJlbnQuX211dGVkO1xuICAgICAgc2VsZi5fbG9vcCA9IHBhcmVudC5fbG9vcDtcbiAgICAgIHNlbGYuX3ZvbHVtZSA9IHBhcmVudC5fdm9sdW1lO1xuICAgICAgc2VsZi5fcmF0ZSA9IHBhcmVudC5fcmF0ZTtcbiAgICAgIHNlbGYuX3NlZWsgPSAwO1xuICAgICAgc2VsZi5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgIHNlbGYuX2VuZGVkID0gdHJ1ZTtcbiAgICAgIHNlbGYuX3Nwcml0ZSA9ICdfX2RlZmF1bHQnO1xuXG4gICAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgdGhpcyBzb3VuZC5cbiAgICAgIHNlbGYuX2lkID0gKytIb3dsZXIuX2NvdW50ZXI7XG5cbiAgICAgIC8vIEFkZCBpdHNlbGYgdG8gdGhlIHBhcmVudCdzIHBvb2wuXG4gICAgICBwYXJlbnQuX3NvdW5kcy5wdXNoKHNlbGYpO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIG5ldyBub2RlLlxuICAgICAgc2VsZi5jcmVhdGUoKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbmQgc2V0dXAgYSBuZXcgc291bmQgb2JqZWN0LCB3aGV0aGVyIEhUTUw1IEF1ZGlvIG9yIFdlYiBBdWRpby5cbiAgICAgKiBAcmV0dXJuIHtTb3VuZH1cbiAgICAgKi9cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcbiAgICAgIHZhciB2b2x1bWUgPSAoSG93bGVyLl9tdXRlZCB8fCBzZWxmLl9tdXRlZCB8fCBzZWxmLl9wYXJlbnQuX211dGVkKSA/IDAgOiBzZWxmLl92b2x1bWU7XG5cbiAgICAgIGlmIChwYXJlbnQuX3dlYkF1ZGlvKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZ2FpbiBub2RlIGZvciBjb250cm9sbGluZyB2b2x1bWUgKHRoZSBzb3VyY2Ugd2lsbCBjb25uZWN0IHRvIHRoaXMpLlxuICAgICAgICBzZWxmLl9ub2RlID0gKHR5cGVvZiBIb3dsZXIuY3R4LmNyZWF0ZUdhaW4gPT09ICd1bmRlZmluZWQnKSA/IEhvd2xlci5jdHguY3JlYXRlR2Fpbk5vZGUoKSA6IEhvd2xlci5jdHguY3JlYXRlR2FpbigpO1xuICAgICAgICBzZWxmLl9ub2RlLmdhaW4uc2V0VmFsdWVBdFRpbWUodm9sdW1lLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgc2VsZi5fbm9kZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICBzZWxmLl9ub2RlLmNvbm5lY3QoSG93bGVyLm1hc3RlckdhaW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5fbm9kZSA9IG5ldyBBdWRpbygpO1xuXG4gICAgICAgIC8vIExpc3RlbiBmb3IgZXJyb3JzIChodHRwOi8vZGV2LnczLm9yZy9odG1sNS9zcGVjLWF1dGhvci12aWV3L3NwZWMuaHRtbCNtZWRpYWVycm9yKS5cbiAgICAgICAgc2VsZi5fZXJyb3JGbiA9IHNlbGYuX2Vycm9yTGlzdGVuZXIuYmluZChzZWxmKTtcbiAgICAgICAgc2VsZi5fbm9kZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHNlbGYuX2Vycm9yRm4sIGZhbHNlKTtcblxuICAgICAgICAvLyBMaXN0ZW4gZm9yICdjYW5wbGF5dGhyb3VnaCcgZXZlbnQgdG8gbGV0IHVzIGtub3cgdGhlIHNvdW5kIGlzIHJlYWR5LlxuICAgICAgICBzZWxmLl9sb2FkRm4gPSBzZWxmLl9sb2FkTGlzdGVuZXIuYmluZChzZWxmKTtcbiAgICAgICAgc2VsZi5fbm9kZS5hZGRFdmVudExpc3RlbmVyKEhvd2xlci5fY2FuUGxheUV2ZW50LCBzZWxmLl9sb2FkRm4sIGZhbHNlKTtcblxuICAgICAgICAvLyBTZXR1cCB0aGUgbmV3IGF1ZGlvIG5vZGUuXG4gICAgICAgIHNlbGYuX25vZGUuc3JjID0gcGFyZW50Ll9zcmM7XG4gICAgICAgIHNlbGYuX25vZGUucHJlbG9hZCA9ICdhdXRvJztcbiAgICAgICAgc2VsZi5fbm9kZS52b2x1bWUgPSB2b2x1bWUgKiBIb3dsZXIudm9sdW1lKCk7XG5cbiAgICAgICAgLy8gQmVnaW4gbG9hZGluZyB0aGUgc291cmNlLlxuICAgICAgICBzZWxmLl9ub2RlLmxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBwYXJhbWV0ZXJzIG9mIHRoaXMgc291bmQgdG8gdGhlIG9yaWdpbmFsIHN0YXRlIChmb3IgcmVjeWNsZSkuXG4gICAgICogQHJldHVybiB7U291bmR9XG4gICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcblxuICAgICAgLy8gUmVzZXQgYWxsIG9mIHRoZSBwYXJhbWV0ZXJzIG9mIHRoaXMgc291bmQuXG4gICAgICBzZWxmLl9tdXRlZCA9IHBhcmVudC5fbXV0ZWQ7XG4gICAgICBzZWxmLl9sb29wID0gcGFyZW50Ll9sb29wO1xuICAgICAgc2VsZi5fdm9sdW1lID0gcGFyZW50Ll92b2x1bWU7XG4gICAgICBzZWxmLl9yYXRlID0gcGFyZW50Ll9yYXRlO1xuICAgICAgc2VsZi5fc2VlayA9IDA7XG4gICAgICBzZWxmLl9yYXRlU2VlayA9IDA7XG4gICAgICBzZWxmLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgc2VsZi5fZW5kZWQgPSB0cnVlO1xuICAgICAgc2VsZi5fc3ByaXRlID0gJ19fZGVmYXVsdCc7XG5cbiAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IElEIHNvIHRoYXQgaXQgaXNuJ3QgY29uZnVzZWQgd2l0aCB0aGUgcHJldmlvdXMgc291bmQuXG4gICAgICBzZWxmLl9pZCA9ICsrSG93bGVyLl9jb3VudGVyO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSFRNTDUgQXVkaW8gZXJyb3IgbGlzdGVuZXIgY2FsbGJhY2suXG4gICAgICovXG4gICAgX2Vycm9yTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBGaXJlIGFuIGVycm9yIGV2ZW50IGFuZCBwYXNzIGJhY2sgdGhlIGNvZGUuXG4gICAgICBzZWxmLl9wYXJlbnQuX2VtaXQoJ2xvYWRlcnJvcicsIHNlbGYuX2lkLCBzZWxmLl9ub2RlLmVycm9yID8gc2VsZi5fbm9kZS5lcnJvci5jb2RlIDogMCk7XG5cbiAgICAgIC8vIENsZWFyIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICAgIHNlbGYuX25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBzZWxmLl9lcnJvckZuLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhUTUw1IEF1ZGlvIGNhbnBsYXl0aHJvdWdoIGxpc3RlbmVyIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIF9sb2FkTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcblxuICAgICAgLy8gUm91bmQgdXAgdGhlIGR1cmF0aW9uIHRvIGFjY291bnQgZm9yIHRoZSBsb3dlciBwcmVjaXNpb24gaW4gSFRNTDUgQXVkaW8uXG4gICAgICBwYXJlbnQuX2R1cmF0aW9uID0gTWF0aC5jZWlsKHNlbGYuX25vZGUuZHVyYXRpb24gKiAxMCkgLyAxMDtcblxuICAgICAgLy8gU2V0dXAgYSBzcHJpdGUgaWYgbm9uZSBpcyBkZWZpbmVkLlxuICAgICAgaWYgKE9iamVjdC5rZXlzKHBhcmVudC5fc3ByaXRlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcGFyZW50Ll9zcHJpdGUgPSB7X19kZWZhdWx0OiBbMCwgcGFyZW50Ll9kdXJhdGlvbiAqIDEwMDBdfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmVudC5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICAgIHBhcmVudC5fc3RhdGUgPSAnbG9hZGVkJztcbiAgICAgICAgcGFyZW50Ll9lbWl0KCdsb2FkJyk7XG4gICAgICAgIHBhcmVudC5fbG9hZFF1ZXVlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICAgIHNlbGYuX25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihIb3dsZXIuX2NhblBsYXlFdmVudCwgc2VsZi5fbG9hZEZuLCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKiBIZWxwZXIgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICB2YXIgY2FjaGUgPSB7fTtcblxuICAvKipcbiAgICogQnVmZmVyIGEgc291bmQgZnJvbSBVUkwsIERhdGEgVVJJIG9yIGNhY2hlIGFuZCBkZWNvZGUgdG8gYXVkaW8gc291cmNlIChXZWIgQXVkaW8gQVBJKS5cbiAgICogQHBhcmFtICB7SG93bH0gc2VsZlxuICAgKi9cbiAgdmFyIGxvYWRCdWZmZXIgPSBmdW5jdGlvbihzZWxmKSB7XG4gICAgdmFyIHVybCA9IHNlbGYuX3NyYztcblxuICAgIC8vIENoZWNrIGlmIHRoZSBidWZmZXIgaGFzIGFscmVhZHkgYmVlbiBjYWNoZWQgYW5kIHVzZSBpdCBpbnN0ZWFkLlxuICAgIGlmIChjYWNoZVt1cmxdKSB7XG4gICAgICAvLyBTZXQgdGhlIGR1cmF0aW9uIGZyb20gdGhlIGNhY2hlLlxuICAgICAgc2VsZi5fZHVyYXRpb24gPSBjYWNoZVt1cmxdLmR1cmF0aW9uO1xuXG4gICAgICAvLyBMb2FkIHRoZSBzb3VuZCBpbnRvIHRoaXMgSG93bC5cbiAgICAgIGxvYWRTb3VuZChzZWxmKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgvXmRhdGE6W147XSs7YmFzZTY0LC8udGVzdCh1cmwpKSB7XG4gICAgICAvLyBEZWNvZGUgdGhlIGJhc2U2NCBkYXRhIFVSSSB3aXRob3V0IFhIUiwgc2luY2Ugc29tZSBicm93c2VycyBkb24ndCBzdXBwb3J0IGl0LlxuICAgICAgdmFyIGRhdGEgPSBhdG9iKHVybC5zcGxpdCgnLCcpWzFdKTtcbiAgICAgIHZhciBkYXRhVmlldyA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgICAgIGZvciAodmFyIGk9MDsgaTxkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGRhdGFWaWV3W2ldID0gZGF0YS5jaGFyQ29kZUF0KGkpO1xuICAgICAgfVxuXG4gICAgICBkZWNvZGVBdWRpb0RhdGEoZGF0YVZpZXcuYnVmZmVyLCBzZWxmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTG9hZCB0aGUgYnVmZmVyIGZyb20gdGhlIFVSTC5cbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHNlbGYuX3hocldpdGhDcmVkZW50aWFscztcbiAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZ2V0IGEgc3VjY2Vzc2Z1bCByZXNwb25zZSBiYWNrLlxuICAgICAgICB2YXIgY29kZSA9ICh4aHIuc3RhdHVzICsgJycpWzBdO1xuICAgICAgICBpZiAoY29kZSAhPT0gJzAnICYmIGNvZGUgIT09ICcyJyAmJiBjb2RlICE9PSAnMycpIHtcbiAgICAgICAgICBzZWxmLl9lbWl0KCdsb2FkZXJyb3InLCBudWxsLCAnRmFpbGVkIGxvYWRpbmcgYXVkaW8gZmlsZSB3aXRoIHN0YXR1czogJyArIHhoci5zdGF0dXMgKyAnLicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlY29kZUF1ZGlvRGF0YSh4aHIucmVzcG9uc2UsIHNlbGYpO1xuICAgICAgfTtcbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFuIGVycm9yLCBzd2l0Y2ggdG8gSFRNTDUgQXVkaW8uXG4gICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgIHNlbGYuX2h0bWw1ID0gdHJ1ZTtcbiAgICAgICAgICBzZWxmLl93ZWJBdWRpbyA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYuX3NvdW5kcyA9IFtdO1xuICAgICAgICAgIGRlbGV0ZSBjYWNoZVt1cmxdO1xuICAgICAgICAgIHNlbGYubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgc2FmZVhoclNlbmQoeGhyKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNlbmQgdGhlIFhIUiByZXF1ZXN0IHdyYXBwZWQgaW4gYSB0cnkvY2F0Y2guXG4gICAqIEBwYXJhbSAge09iamVjdH0geGhyIFhIUiB0byBzZW5kLlxuICAgKi9cbiAgdmFyIHNhZmVYaHJTZW5kID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHhoci5zZW5kKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgeGhyLm9uZXJyb3IoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERlY29kZSBhdWRpbyBkYXRhIGZyb20gYW4gYXJyYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0gIHtBcnJheUJ1ZmZlcn0gYXJyYXlidWZmZXIgVGhlIGF1ZGlvIGRhdGEuXG4gICAqIEBwYXJhbSAge0hvd2x9ICAgICAgICBzZWxmXG4gICAqL1xuICB2YXIgZGVjb2RlQXVkaW9EYXRhID0gZnVuY3Rpb24oYXJyYXlidWZmZXIsIHNlbGYpIHtcbiAgICAvLyBEZWNvZGUgdGhlIGJ1ZmZlciBpbnRvIGFuIGF1ZGlvIHNvdXJjZS5cbiAgICBIb3dsZXIuY3R4LmRlY29kZUF1ZGlvRGF0YShhcnJheWJ1ZmZlciwgZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICBpZiAoYnVmZmVyICYmIHNlbGYuX3NvdW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNhY2hlW3NlbGYuX3NyY10gPSBidWZmZXI7XG4gICAgICAgIGxvYWRTb3VuZChzZWxmLCBidWZmZXIpO1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ0RlY29kaW5nIGF1ZGlvIGRhdGEgZmFpbGVkLicpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTb3VuZCBpcyBub3cgbG9hZGVkLCBzbyBmaW5pc2ggc2V0dGluZyBldmVyeXRoaW5nIHVwIGFuZCBmaXJlIHRoZSBsb2FkZWQgZXZlbnQuXG4gICAqIEBwYXJhbSAge0hvd2x9IHNlbGZcbiAgICogQHBhcmFtICB7T2JqZWN0fSBidWZmZXIgVGhlIGRlY29kZWQgYnVmZmVyIHNvdW5kIHNvdXJjZS5cbiAgICovXG4gIHZhciBsb2FkU291bmQgPSBmdW5jdGlvbihzZWxmLCBidWZmZXIpIHtcbiAgICAvLyBTZXQgdGhlIGR1cmF0aW9uLlxuICAgIGlmIChidWZmZXIgJiYgIXNlbGYuX2R1cmF0aW9uKSB7XG4gICAgICBzZWxmLl9kdXJhdGlvbiA9IGJ1ZmZlci5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICAvLyBTZXR1cCBhIHNwcml0ZSBpZiBub25lIGlzIGRlZmluZWQuXG4gICAgaWYgKE9iamVjdC5rZXlzKHNlbGYuX3Nwcml0ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZWxmLl9zcHJpdGUgPSB7X19kZWZhdWx0OiBbMCwgc2VsZi5fZHVyYXRpb24gKiAxMDAwXX07XG4gICAgfVxuXG4gICAgLy8gRmlyZSB0aGUgbG9hZGVkIGV2ZW50LlxuICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgIHNlbGYuX3N0YXRlID0gJ2xvYWRlZCc7XG4gICAgICBzZWxmLl9lbWl0KCdsb2FkJyk7XG4gICAgICBzZWxmLl9sb2FkUXVldWUoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBhdWRpbyBjb250ZXh0IHdoZW4gYXZhaWxhYmxlLCBvciBzd2l0Y2ggdG8gSFRNTDUgQXVkaW8gbW9kZS5cbiAgICovXG4gIHZhciBzZXR1cEF1ZGlvQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIENoZWNrIGlmIHdlIGFyZSB1c2luZyBXZWIgQXVkaW8gYW5kIHNldHVwIHRoZSBBdWRpb0NvbnRleHQgaWYgd2UgYXJlLlxuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZW9mIEF1ZGlvQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgSG93bGVyLmN0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHdlYmtpdEF1ZGlvQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgSG93bGVyLmN0eCA9IG5ldyB3ZWJraXRBdWRpb0NvbnRleHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEhvd2xlci51c2luZ1dlYkF1ZGlvID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBIb3dsZXIudXNpbmdXZWJBdWRpbyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGEgd2VidmlldyBpcyBiZWluZyB1c2VkIG9uIGlPUzggb3IgZWFybGllciAocmF0aGVyIHRoYW4gdGhlIGJyb3dzZXIpLlxuICAgIC8vIElmIGl0IGlzLCBkaXNhYmxlIFdlYiBBdWRpbyBhcyBpdCBjYXVzZXMgY3Jhc2hpbmcuXG4gICAgdmFyIGlPUyA9ICgvaVAoaG9uZXxvZHxhZCkvLnRlc3QoSG93bGVyLl9uYXZpZ2F0b3IgJiYgSG93bGVyLl9uYXZpZ2F0b3IucGxhdGZvcm0pKTtcbiAgICB2YXIgYXBwVmVyc2lvbiA9IEhvd2xlci5fbmF2aWdhdG9yICYmIEhvd2xlci5fbmF2aWdhdG9yLmFwcFZlcnNpb24ubWF0Y2goL09TIChcXGQrKV8oXFxkKylfPyhcXGQrKT8vKTtcbiAgICB2YXIgdmVyc2lvbiA9IGFwcFZlcnNpb24gPyBwYXJzZUludChhcHBWZXJzaW9uWzFdLCAxMCkgOiBudWxsO1xuICAgIGlmIChpT1MgJiYgdmVyc2lvbiAmJiB2ZXJzaW9uIDwgOSkge1xuICAgICAgdmFyIHNhZmFyaSA9IC9zYWZhcmkvLnRlc3QoSG93bGVyLl9uYXZpZ2F0b3IgJiYgSG93bGVyLl9uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKEhvd2xlci5fbmF2aWdhdG9yICYmIEhvd2xlci5fbmF2aWdhdG9yLnN0YW5kYWxvbmUgJiYgIXNhZmFyaSB8fCBIb3dsZXIuX25hdmlnYXRvciAmJiAhSG93bGVyLl9uYXZpZ2F0b3Iuc3RhbmRhbG9uZSAmJiAhc2FmYXJpKSB7XG4gICAgICAgIEhvd2xlci51c2luZ1dlYkF1ZGlvID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGFuZCBleHBvc2UgdGhlIG1hc3RlciBHYWluTm9kZSB3aGVuIHVzaW5nIFdlYiBBdWRpbyAodXNlZnVsIGZvciBwbHVnaW5zIG9yIGFkdmFuY2VkIHVzYWdlKS5cbiAgICBpZiAoSG93bGVyLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgIEhvd2xlci5tYXN0ZXJHYWluID0gKHR5cGVvZiBIb3dsZXIuY3R4LmNyZWF0ZUdhaW4gPT09ICd1bmRlZmluZWQnKSA/IEhvd2xlci5jdHguY3JlYXRlR2Fpbk5vZGUoKSA6IEhvd2xlci5jdHguY3JlYXRlR2FpbigpO1xuICAgICAgSG93bGVyLm1hc3RlckdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZShIb3dsZXIuX211dGVkID8gMCA6IDEsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgSG93bGVyLm1hc3RlckdhaW4uY29ubmVjdChIb3dsZXIuY3R4LmRlc3RpbmF0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZS1ydW4gdGhlIHNldHVwIG9uIEhvd2xlci5cbiAgICBIb3dsZXIuX3NldHVwKCk7XG4gIH07XG5cbiAgLy8gQWRkIHN1cHBvcnQgZm9yIEFNRCAoQXN5bmNocm9ub3VzIE1vZHVsZSBEZWZpbml0aW9uKSBsaWJyYXJpZXMgc3VjaCBhcyByZXF1aXJlLmpzLlxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIEhvd2xlcjogSG93bGVyLFxuICAgICAgICBIb3dsOiBIb3dsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQWRkIHN1cHBvcnQgZm9yIENvbW1vbkpTIGxpYnJhcmllcyBzdWNoIGFzIGJyb3dzZXJpZnkuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBleHBvcnRzLkhvd2xlciA9IEhvd2xlcjtcbiAgICBleHBvcnRzLkhvd2wgPSBIb3dsO1xuICB9XG5cbiAgLy8gRGVmaW5lIGdsb2JhbGx5IGluIGNhc2UgQU1EIGlzIG5vdCBhdmFpbGFibGUgb3IgdW51c2VkLlxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuSG93bGVyR2xvYmFsID0gSG93bGVyR2xvYmFsO1xuICAgIHdpbmRvdy5Ib3dsZXIgPSBIb3dsZXI7XG4gICAgd2luZG93Lkhvd2wgPSBIb3dsO1xuICAgIHdpbmRvdy5Tb3VuZCA9IFNvdW5kO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IC8vIEFkZCB0byBnbG9iYWwgaW4gTm9kZS5qcyAoZm9yIHRlc3RpbmcsIGV0YykuXG4gICAgZ2xvYmFsLkhvd2xlckdsb2JhbCA9IEhvd2xlckdsb2JhbDtcbiAgICBnbG9iYWwuSG93bGVyID0gSG93bGVyO1xuICAgIGdsb2JhbC5Ib3dsID0gSG93bDtcbiAgICBnbG9iYWwuU291bmQgPSBTb3VuZDtcbiAgfVxufSkoKTtcblxuXG4vKiFcbiAqICBTcGF0aWFsIFBsdWdpbiAtIEFkZHMgc3VwcG9ydCBmb3Igc3RlcmVvIGFuZCAzRCBhdWRpbyB3aGVyZSBXZWIgQXVkaW8gaXMgc3VwcG9ydGVkLlxuICogIFxuICogIGhvd2xlci5qcyB2Mi4wLjEyXG4gKiAgaG93bGVyanMuY29tXG4gKlxuICogIChjKSAyMDEzLTIwMTgsIEphbWVzIFNpbXBzb24gb2YgR29sZEZpcmUgU3R1ZGlvc1xuICogIGdvbGRmaXJlc3R1ZGlvcy5jb21cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFNldHVwIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgSG93bGVyR2xvYmFsLnByb3RvdHlwZS5fcG9zID0gWzAsIDAsIDBdO1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLl9vcmllbnRhdGlvbiA9IFswLCAwLCAtMSwgMCwgMSwgMF07XG5cbiAgLyoqIEdsb2JhbCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgc3RlcmVvIHBhbm5pbmcgcG9zaXRpb24gb2YgYWxsIGN1cnJlbnQgSG93bHMuXG4gICAqIEZ1dHVyZSBIb3dscyB3aWxsIG5vdCB1c2UgdGhpcyB2YWx1ZSB1bmxlc3MgZXhwbGljaXRseSBzZXQuXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGFuIEEgdmFsdWUgb2YgLTEuMCBpcyBhbGwgdGhlIHdheSBsZWZ0IGFuZCAxLjAgaXMgYWxsIHRoZSB3YXkgcmlnaHQuXG4gICAqIEByZXR1cm4ge0hvd2xlci9OdW1iZXJ9ICAgICBTZWxmIG9yIGN1cnJlbnQgc3RlcmVvIHBhbm5pbmcgdmFsdWUuXG4gICAqL1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLnN0ZXJlbyA9IGZ1bmN0aW9uKHBhbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5jdHggfHwgIXNlbGYuY3R4Lmxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggYWxsIEhvd2xzIGFuZCB1cGRhdGUgdGhlaXIgc3RlcmVvIHBhbm5pbmcuXG4gICAgZm9yICh2YXIgaT1zZWxmLl9ob3dscy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICBzZWxmLl9ob3dsc1tpXS5zdGVyZW8ocGFuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgcG9zaXRpb24gb2YgdGhlIGxpc3RlbmVyIGluIDNEIGNhcnRlc2lhbiBzcGFjZS4gU291bmRzIHVzaW5nXG4gICAqIDNEIHBvc2l0aW9uIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhlIGxpc3RlbmVyJ3MgcG9zaXRpb24uXG4gICAqIEBwYXJhbSAge051bWJlcn0geCBUaGUgeC1wb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geSBUaGUgeS1wb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geiBUaGUgei1wb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge0hvd2xlci9BcnJheX0gICBTZWxmIG9yIGN1cnJlbnQgbGlzdGVuZXIgcG9zaXRpb24uXG4gICAqL1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLnBvcyA9IGZ1bmN0aW9uKHgsIHksIHopIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuY3R4IHx8ICFzZWxmLmN0eC5saXN0ZW5lcikge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0cyBmb3Igb3B0aW9uYWwgJ3knICYgJ3onLlxuICAgIHkgPSAodHlwZW9mIHkgIT09ICdudW1iZXInKSA/IHNlbGYuX3Bvc1sxXSA6IHk7XG4gICAgeiA9ICh0eXBlb2YgeiAhPT0gJ251bWJlcicpID8gc2VsZi5fcG9zWzJdIDogejtcblxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHNlbGYuX3BvcyA9IFt4LCB5LCB6XTtcblxuICAgICAgaWYgKHR5cGVvZiBzZWxmLmN0eC5saXN0ZW5lci5wb3NpdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnBvc2l0aW9uWC5zZXRUYXJnZXRBdFRpbWUoc2VsZi5fcG9zWzBdLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5wb3NpdGlvblkuc2V0VGFyZ2V0QXRUaW1lKHNlbGYuX3Bvc1sxXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIucG9zaXRpb25aLnNldFRhcmdldEF0VGltZShzZWxmLl9wb3NbMl0sIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5zZXRQb3NpdGlvbihzZWxmLl9wb3NbMF0sIHNlbGYuX3Bvc1sxXSwgc2VsZi5fcG9zWzJdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNlbGYuX3BvcztcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgZGlyZWN0aW9uIHRoZSBsaXN0ZW5lciBpcyBwb2ludGluZyBpbiB0aGUgM0QgY2FydGVzaWFuIHNwYWNlLlxuICAgKiBBIGZyb250IGFuZCB1cCB2ZWN0b3IgbXVzdCBiZSBwcm92aWRlZC4gVGhlIGZyb250IGlzIHRoZSBkaXJlY3Rpb24gdGhlXG4gICAqIGZhY2Ugb2YgdGhlIGxpc3RlbmVyIGlzIHBvaW50aW5nLCBhbmQgdXAgaXMgdGhlIGRpcmVjdGlvbiB0aGUgdG9wIG9mIHRoZVxuICAgKiBsaXN0ZW5lciBpcyBwb2ludGluZy4gVGh1cywgdGhlc2UgdmFsdWVzIGFyZSBleHBlY3RlZCB0byBiZSBhdCByaWdodCBhbmdsZXNcbiAgICogZnJvbSBlYWNoIG90aGVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHggICBUaGUgeC1vcmllbnRhdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geSAgIFRoZSB5LW9yaWVudGF0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB6ICAgVGhlIHotb3JpZW50YXRpb24gb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHhVcCBUaGUgeC1vcmllbnRhdGlvbiBvZiB0aGUgdG9wIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5VXAgVGhlIHktb3JpZW50YXRpb24gb2YgdGhlIHRvcCBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0gelVwIFRoZSB6LW9yaWVudGF0aW9uIG9mIHRoZSB0b3Agb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHtIb3dsZXIvQXJyYXl9ICAgICBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgb3JpZW50YXRpb24gdmVjdG9ycy5cbiAgICovXG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUub3JpZW50YXRpb24gPSBmdW5jdGlvbih4LCB5LCB6LCB4VXAsIHlVcCwgelVwKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLmN0eCB8fCAhc2VsZi5jdHgubGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdHMgZm9yIG9wdGlvbmFsICd5JyAmICd6Jy5cbiAgICB2YXIgb3IgPSBzZWxmLl9vcmllbnRhdGlvbjtcbiAgICB5ID0gKHR5cGVvZiB5ICE9PSAnbnVtYmVyJykgPyBvclsxXSA6IHk7XG4gICAgeiA9ICh0eXBlb2YgeiAhPT0gJ251bWJlcicpID8gb3JbMl0gOiB6O1xuICAgIHhVcCA9ICh0eXBlb2YgeFVwICE9PSAnbnVtYmVyJykgPyBvclszXSA6IHhVcDtcbiAgICB5VXAgPSAodHlwZW9mIHlVcCAhPT0gJ251bWJlcicpID8gb3JbNF0gOiB5VXA7XG4gICAgelVwID0gKHR5cGVvZiB6VXAgIT09ICdudW1iZXInKSA/IG9yWzVdIDogelVwO1xuXG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgc2VsZi5fb3JpZW50YXRpb24gPSBbeCwgeSwgeiwgeFVwLCB5VXAsIHpVcF07XG5cbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5jdHgubGlzdGVuZXIuZm9yd2FyZFggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLmZvcndhcmRYLnNldFRhcmdldEF0VGltZSh4LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5mb3J3YXJkWS5zZXRUYXJnZXRBdFRpbWUoeSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIuZm9yd2FyZFouc2V0VGFyZ2V0QXRUaW1lKHosIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnVwWC5zZXRUYXJnZXRBdFRpbWUoeCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIudXBZLnNldFRhcmdldEF0VGltZSh5LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci51cFouc2V0VGFyZ2V0QXRUaW1lKHosIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5zZXRPcmllbnRhdGlvbih4LCB5LCB6LCB4VXAsIHlVcCwgelVwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9yO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKiBHcm91cCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHByb3BlcnRpZXMgdG8gdGhlIGNvcmUgaW5pdC5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IF9zdXBlciBDb3JlIGluaXQgbWV0aG9kLlxuICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUuaW5pdCA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24obykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBTZXR1cCB1c2VyLWRlZmluZWQgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fb3JpZW50YXRpb24gPSBvLm9yaWVudGF0aW9uIHx8IFsxLCAwLCAwXTtcbiAgICAgIHNlbGYuX3N0ZXJlbyA9IG8uc3RlcmVvIHx8IG51bGw7XG4gICAgICBzZWxmLl9wb3MgPSBvLnBvcyB8fCBudWxsO1xuICAgICAgc2VsZi5fcGFubmVyQXR0ciA9IHtcbiAgICAgICAgY29uZUlubmVyQW5nbGU6IHR5cGVvZiBvLmNvbmVJbm5lckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZUlubmVyQW5nbGUgOiAzNjAsXG4gICAgICAgIGNvbmVPdXRlckFuZ2xlOiB0eXBlb2Ygby5jb25lT3V0ZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLmNvbmVPdXRlckFuZ2xlIDogMzYwLFxuICAgICAgICBjb25lT3V0ZXJHYWluOiB0eXBlb2Ygby5jb25lT3V0ZXJHYWluICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZU91dGVyR2FpbiA6IDAsXG4gICAgICAgIGRpc3RhbmNlTW9kZWw6IHR5cGVvZiBvLmRpc3RhbmNlTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5kaXN0YW5jZU1vZGVsIDogJ2ludmVyc2UnLFxuICAgICAgICBtYXhEaXN0YW5jZTogdHlwZW9mIG8ubWF4RGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5tYXhEaXN0YW5jZSA6IDEwMDAwLFxuICAgICAgICBwYW5uaW5nTW9kZWw6IHR5cGVvZiBvLnBhbm5pbmdNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5pbmdNb2RlbCA6ICdIUlRGJyxcbiAgICAgICAgcmVmRGlzdGFuY2U6IHR5cGVvZiBvLnJlZkRpc3RhbmNlICE9PSAndW5kZWZpbmVkJyA/IG8ucmVmRGlzdGFuY2UgOiAxLFxuICAgICAgICByb2xsb2ZmRmFjdG9yOiB0eXBlb2Ygby5yb2xsb2ZmRmFjdG9yICE9PSAndW5kZWZpbmVkJyA/IG8ucm9sbG9mZkZhY3RvciA6IDFcbiAgICAgIH07XG5cbiAgICAgIC8vIFNldHVwIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgIHNlbGYuX29uc3RlcmVvID0gby5vbnN0ZXJlbyA/IFt7Zm46IG8ub25zdGVyZW99XSA6IFtdO1xuICAgICAgc2VsZi5fb25wb3MgPSBvLm9ucG9zID8gW3tmbjogby5vbnBvc31dIDogW107XG4gICAgICBzZWxmLl9vbm9yaWVudGF0aW9uID0gby5vbm9yaWVudGF0aW9uID8gW3tmbjogby5vbm9yaWVudGF0aW9ufV0gOiBbXTtcblxuICAgICAgLy8gQ29tcGxldGUgaW5pdGlsaXphdGlvbiB3aXRoIGhvd2xlci5qcyBjb3JlJ3MgaW5pdCBmdW5jdGlvbi5cbiAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBvKTtcbiAgICB9O1xuICB9KShIb3dsLnByb3RvdHlwZS5pbml0KTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgc3RlcmVvIHBhbm5pbmcgb2YgdGhlIGF1ZGlvIHNvdXJjZSBmb3IgdGhpcyBzb3VuZCBvciBhbGwgaW4gdGhlIGdyb3VwLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHBhbiAgQSB2YWx1ZSBvZiAtMS4wIGlzIGFsbCB0aGUgd2F5IGxlZnQgYW5kIDEuMCBpcyBhbGwgdGhlIHdheSByaWdodC5cbiAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAob3B0aW9uYWwpIFRoZSBzb3VuZCBJRC4gSWYgbm9uZSBpcyBwYXNzZWQsIGFsbCBpbiBncm91cCB3aWxsIGJlIHVwZGF0ZWQuXG4gICAqIEByZXR1cm4ge0hvd2wvTnVtYmVyfSAgICBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgc3RlcmVvIHBhbm5pbmcgdmFsdWUuXG4gICAqL1xuICBIb3dsLnByb3RvdHlwZS5zdGVyZW8gPSBmdW5jdGlvbihwYW4sIGlkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLl93ZWJBdWRpbykge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBjaGFuZ2Ugc3RlcmVvIHBhbiB3aGVuIGNhcGFibGUuXG4gICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgIGV2ZW50OiAnc3RlcmVvJyxcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLnN0ZXJlbyhwYW4sIGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBQYW5uZXJTdGVyZW9Ob2RlIHN1cHBvcnQgYW5kIGZhbGxiYWNrIHRvIFBhbm5lck5vZGUgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAgICB2YXIgcGFubmVyVHlwZSA9ICh0eXBlb2YgSG93bGVyLmN0eC5jcmVhdGVTdGVyZW9QYW5uZXIgPT09ICd1bmRlZmluZWQnKSA/ICdzcGF0aWFsJyA6ICdzdGVyZW8nO1xuXG4gICAgLy8gU2V0dXAgdGhlIGdyb3VwJ3Mgc3RlcmVvIHBhbm5pbmcgaWYgbm8gSUQgaXMgcGFzc2VkLlxuICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGdyb3VwJ3Mgc3RlcmVvIHBhbm5pbmcgaWYgbm8gcGFyYW1ldGVycyBhcmUgcGFzc2VkLlxuICAgICAgaWYgKHR5cGVvZiBwYW4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNlbGYuX3N0ZXJlbyA9IHBhbjtcbiAgICAgICAgc2VsZi5fcG9zID0gW3BhbiwgMCwgMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2VsZi5fc3RlcmVvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgc3RyZW8gcGFubmluZyBvZiBvbmUgb3IgYWxsIHNvdW5kcyBpbiBncm91cC5cbiAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGFuID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHNvdW5kLl9zdGVyZW8gPSBwYW47XG4gICAgICAgICAgc291bmQuX3BvcyA9IFtwYW4sIDAsIDBdO1xuXG4gICAgICAgICAgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBhcmUgZmFsbGluZyBiYWNrLCBtYWtlIHN1cmUgdGhlIHBhbm5pbmdNb2RlbCBpcyBlcXVhbHBvd2VyLlxuICAgICAgICAgICAgc291bmQuX3Bhbm5lckF0dHIucGFubmluZ01vZGVsID0gJ2VxdWFscG93ZXInO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHBhbm5lciBzZXR1cCBhbmQgY3JlYXRlIGEgbmV3IG9uZSBpZiBub3QuXG4gICAgICAgICAgICBpZiAoIXNvdW5kLl9wYW5uZXIgfHwgIXNvdW5kLl9wYW5uZXIucGFuKSB7XG4gICAgICAgICAgICAgIHNldHVwUGFubmVyKHNvdW5kLCBwYW5uZXJUeXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhbm5lclR5cGUgPT09ICdzcGF0aWFsJykge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kLl9wYW5uZXIucG9zaXRpb25YICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIucG9zaXRpb25YLnNldFZhbHVlQXRUaW1lKHBhbiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblkuc2V0VmFsdWVBdFRpbWUoMCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblouc2V0VmFsdWVBdFRpbWUoMCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5zZXRQb3NpdGlvbihwYW4sIDAsIDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnBhbi5zZXRWYWx1ZUF0VGltZShwYW4sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX2VtaXQoJ3N0ZXJlbycsIHNvdW5kLl9pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNvdW5kLl9zdGVyZW87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgM0Qgc3BhdGlhbCBwb3NpdGlvbiBvZiB0aGUgYXVkaW8gc291cmNlIGZvciB0aGlzIHNvdW5kIG9yIGdyb3VwIHJlbGF0aXZlIHRvIHRoZSBnbG9iYWwgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geCAgVGhlIHgtcG9zaXRpb24gb2YgdGhlIGF1ZGlvIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5ICBUaGUgeS1wb3NpdGlvbiBvZiB0aGUgYXVkaW8gc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHogIFRoZSB6LXBvc2l0aW9uIG9mIHRoZSBhdWRpbyBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0gaWQgKG9wdGlvbmFsKSBUaGUgc291bmQgSUQuIElmIG5vbmUgaXMgcGFzc2VkLCBhbGwgaW4gZ3JvdXAgd2lsbCBiZSB1cGRhdGVkLlxuICAgKiBAcmV0dXJuIHtIb3dsL0FycmF5fSAgICBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgM0Qgc3BhdGlhbCBwb3NpdGlvbjogW3gsIHksIHpdLlxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUucG9zID0gZnVuY3Rpb24oeCwgeSwgeiwgaWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGNoYW5nZSBwb3NpdGlvbiB3aGVuIGNhcGFibGUuXG4gICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgIGV2ZW50OiAncG9zJyxcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLnBvcyh4LCB5LCB6LCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHRzIGZvciBvcHRpb25hbCAneScgJiAneicuXG4gICAgeSA9ICh0eXBlb2YgeSAhPT0gJ251bWJlcicpID8gMCA6IHk7XG4gICAgeiA9ICh0eXBlb2YgeiAhPT0gJ251bWJlcicpID8gLTAuNSA6IHo7XG5cbiAgICAvLyBTZXR1cCB0aGUgZ3JvdXAncyBzcGF0aWFsIHBvc2l0aW9uIGlmIG5vIElEIGlzIHBhc3NlZC5cbiAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gUmV0dXJuIHRoZSBncm91cCdzIHNwYXRpYWwgcG9zaXRpb24gaWYgbm8gcGFyYW1ldGVycyBhcmUgcGFzc2VkLlxuICAgICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICBzZWxmLl9wb3MgPSBbeCwgeSwgel07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2VsZi5fcG9zO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgc3BhdGlhbCBwb3NpdGlvbiBvZiBvbmUgb3IgYWxsIHNvdW5kcyBpbiBncm91cC5cbiAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBzb3VuZC5fcG9zID0gW3gsIHksIHpdO1xuXG4gICAgICAgICAgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHBhbm5lciBzZXR1cCBhbmQgY3JlYXRlIGEgbmV3IG9uZSBpZiBub3QuXG4gICAgICAgICAgICBpZiAoIXNvdW5kLl9wYW5uZXIgfHwgc291bmQuX3Bhbm5lci5wYW4pIHtcbiAgICAgICAgICAgICAgc2V0dXBQYW5uZXIoc291bmQsICdzcGF0aWFsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQuX3Bhbm5lci5wb3NpdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIucG9zaXRpb25YLnNldFZhbHVlQXRUaW1lKHgsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWS5zZXRWYWx1ZUF0VGltZSh5LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblouc2V0VmFsdWVBdFRpbWUoeiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnNldE9yaWVudGF0aW9uKHgsIHksIHopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX2VtaXQoJ3BvcycsIHNvdW5kLl9pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNvdW5kLl9wb3M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgZGlyZWN0aW9uIHRoZSBhdWRpbyBzb3VyY2UgaXMgcG9pbnRpbmcgaW4gdGhlIDNEIGNhcnRlc2lhbiBjb29yZGluYXRlXG4gICAqIHNwYWNlLiBEZXBlbmRpbmcgb24gaG93IGRpcmVjdGlvbiB0aGUgc291bmQgaXMsIGJhc2VkIG9uIHRoZSBgY29uZWAgYXR0cmlidXRlcyxcbiAgICogYSBzb3VuZCBwb2ludGluZyBhd2F5IGZyb20gdGhlIGxpc3RlbmVyIGNhbiBiZSBxdWlldCBvciBzaWxlbnQuXG4gICAqIEBwYXJhbSAge051bWJlcn0geCAgVGhlIHgtb3JpZW50YXRpb24gb2YgdGhlIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5ICBUaGUgeS1vcmllbnRhdGlvbiBvZiB0aGUgc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHogIFRoZSB6LW9yaWVudGF0aW9uIG9mIHRoZSBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0gaWQgKG9wdGlvbmFsKSBUaGUgc291bmQgSUQuIElmIG5vbmUgaXMgcGFzc2VkLCBhbGwgaW4gZ3JvdXAgd2lsbCBiZSB1cGRhdGVkLlxuICAgKiBAcmV0dXJuIHtIb3dsL0FycmF5fSAgICBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgM0Qgc3BhdGlhbCBvcmllbnRhdGlvbjogW3gsIHksIHpdLlxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUub3JpZW50YXRpb24gPSBmdW5jdGlvbih4LCB5LCB6LCBpZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gY2hhbmdlIG9yaWVudGF0aW9uIHdoZW4gY2FwYWJsZS5cbiAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6ICdvcmllbnRhdGlvbicsXG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5vcmllbnRhdGlvbih4LCB5LCB6LCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHRzIGZvciBvcHRpb25hbCAneScgJiAneicuXG4gICAgeSA9ICh0eXBlb2YgeSAhPT0gJ251bWJlcicpID8gc2VsZi5fb3JpZW50YXRpb25bMV0gOiB5O1xuICAgIHogPSAodHlwZW9mIHogIT09ICdudW1iZXInKSA/IHNlbGYuX29yaWVudGF0aW9uWzJdIDogejtcblxuICAgIC8vIFNldHVwIHRoZSBncm91cCdzIHNwYXRpYWwgb3JpZW50YXRpb24gaWYgbm8gSUQgaXMgcGFzc2VkLlxuICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGdyb3VwJ3Mgc3BhdGlhbCBvcmllbnRhdGlvbiBpZiBubyBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQuXG4gICAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNlbGYuX29yaWVudGF0aW9uID0gW3gsIHksIHpdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuX29yaWVudGF0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgc3BhdGlhbCBvcmllbnRhdGlvbiBvZiBvbmUgb3IgYWxsIHNvdW5kcyBpbiBncm91cC5cbiAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBzb3VuZC5fb3JpZW50YXRpb24gPSBbeCwgeSwgel07XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgcGFubmVyIHNldHVwIGFuZCBjcmVhdGUgYSBuZXcgb25lIGlmIG5vdC5cbiAgICAgICAgICAgIGlmICghc291bmQuX3Bhbm5lcikge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHBvc2l0aW9uIHRvIHNldHVwIHRoZSBub2RlIHdpdGguXG4gICAgICAgICAgICAgIGlmICghc291bmQuX3Bvcykge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9wb3MgPSBzZWxmLl9wb3MgfHwgWzAsIDAsIC0wLjVdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2V0dXBQYW5uZXIoc291bmQsICdzcGF0aWFsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25YLnNldFZhbHVlQXRUaW1lKHgsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgc291bmQuX3Bhbm5lci5vcmllbnRhdGlvblkuc2V0VmFsdWVBdFRpbWUoeSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWi5zZXRWYWx1ZUF0VGltZSh6LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLl9lbWl0KCdvcmllbnRhdGlvbicsIHNvdW5kLl9pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNvdW5kLl9vcmllbnRhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSBwYW5uZXIgbm9kZSdzIGF0dHJpYnV0ZXMgZm9yIGEgc291bmQgb3IgZ3JvdXAgb2Ygc291bmRzLlxuICAgKiBUaGlzIG1ldGhvZCBjYW4gb3B0aW9uYWxsIHRha2UgMCwgMSBvciAyIGFyZ3VtZW50cy5cbiAgICogICBwYW5uZXJBdHRyKCkgLT4gUmV0dXJucyB0aGUgZ3JvdXAncyB2YWx1ZXMuXG4gICAqICAgcGFubmVyQXR0cihpZCkgLT4gUmV0dXJucyB0aGUgc291bmQgaWQncyB2YWx1ZXMuXG4gICAqICAgcGFubmVyQXR0cihvKSAtPiBTZXQncyB0aGUgdmFsdWVzIG9mIGFsbCBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgKiAgIHBhbm5lckF0dHIobywgaWQpIC0+IFNldCdzIHRoZSB2YWx1ZXMgb2YgcGFzc2VkIHNvdW5kIGlkLlxuICAgKlxuICAgKiAgIEF0dHJpYnV0ZXM6XG4gICAqICAgICBjb25lSW5uZXJBbmdsZSAtICgzNjAgYnkgZGVmYXVsdCkgQSBwYXJhbWV0ZXIgZm9yIGRpcmVjdGlvbmFsIGF1ZGlvIHNvdXJjZXMsIHRoaXMgaXMgYW4gYW5nbGUsIGluIGRlZ3JlZXMsXG4gICAqICAgICAgICAgICAgICAgICAgICAgIGluc2lkZSBvZiB3aGljaCB0aGVyZSB3aWxsIGJlIG5vIHZvbHVtZSByZWR1Y3Rpb24uXG4gICAqICAgICBjb25lT3V0ZXJBbmdsZSAtICgzNjAgYnkgZGVmYXVsdCkgQSBwYXJhbWV0ZXIgZm9yIGRpcmVjdGlvbmFsIGF1ZGlvIHNvdXJjZXMsIHRoaXMgaXMgYW4gYW5nbGUsIGluIGRlZ3JlZXMsXG4gICAqICAgICAgICAgICAgICAgICAgICAgIG91dHNpZGUgb2Ygd2hpY2ggdGhlIHZvbHVtZSB3aWxsIGJlIHJlZHVjZWQgdG8gYSBjb25zdGFudCB2YWx1ZSBvZiBgY29uZU91dGVyR2FpbmAuXG4gICAqICAgICBjb25lT3V0ZXJHYWluIC0gKDAgYnkgZGVmYXVsdCkgQSBwYXJhbWV0ZXIgZm9yIGRpcmVjdGlvbmFsIGF1ZGlvIHNvdXJjZXMsIHRoaXMgaXMgdGhlIGdhaW4gb3V0c2lkZSBvZiB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICBgY29uZU91dGVyQW5nbGVgLiBJdCBpcyBhIGxpbmVhciB2YWx1ZSBpbiB0aGUgcmFuZ2UgYFswLCAxXWAuXG4gICAqICAgICBkaXN0YW5jZU1vZGVsIC0gKCdpbnZlcnNlJyBieSBkZWZhdWx0KSBEZXRlcm1pbmVzIGFsZ29yaXRobSB1c2VkIHRvIHJlZHVjZSB2b2x1bWUgYXMgYXVkaW8gbW92ZXMgYXdheSBmcm9tXG4gICAqICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuIENhbiBiZSBgbGluZWFyYCwgYGludmVyc2VgIG9yIGBleHBvbmVudGlhbC5cbiAgICogICAgIG1heERpc3RhbmNlIC0gKDEwMDAwIGJ5IGRlZmF1bHQpIFRoZSBtYXhpbXVtIGRpc3RhbmNlIGJldHdlZW4gc291cmNlIGFuZCBsaXN0ZW5lciwgYWZ0ZXIgd2hpY2ggdGhlIHZvbHVtZVxuICAgKiAgICAgICAgICAgICAgICAgICB3aWxsIG5vdCBiZSByZWR1Y2VkIGFueSBmdXJ0aGVyLlxuICAgKiAgICAgcmVmRGlzdGFuY2UgLSAoMSBieSBkZWZhdWx0KSBBIHJlZmVyZW5jZSBkaXN0YW5jZSBmb3IgcmVkdWNpbmcgdm9sdW1lIGFzIHNvdXJjZSBtb3ZlcyBmdXJ0aGVyIGZyb20gdGhlIGxpc3RlbmVyLlxuICAgKiAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHNpbXBseSBhIHZhcmlhYmxlIG9mIHRoZSBkaXN0YW5jZSBtb2RlbCBhbmQgaGFzIGEgZGlmZmVyZW50IGVmZmVjdCBkZXBlbmRpbmcgb24gd2hpY2ggbW9kZWxcbiAgICogICAgICAgICAgICAgICAgICAgaXMgdXNlZCBhbmQgdGhlIHNjYWxlIG9mIHlvdXIgY29vcmRpbmF0ZXMuIEdlbmVyYWxseSwgdm9sdW1lIHdpbGwgYmUgZXF1YWwgdG8gMSBhdCB0aGlzIGRpc3RhbmNlLlxuICAgKiAgICAgcm9sbG9mZkZhY3RvciAtICgxIGJ5IGRlZmF1bHQpIEhvdyBxdWlja2x5IHRoZSB2b2x1bWUgcmVkdWNlcyBhcyBzb3VyY2UgbW92ZXMgZnJvbSBsaXN0ZW5lci4gVGhpcyBpcyBzaW1wbHkgYVxuICAgKiAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlIG9mIHRoZSBkaXN0YW5jZSBtb2RlbCBhbmQgY2FuIGJlIGluIHRoZSByYW5nZSBvZiBgWzAsIDFdYCB3aXRoIGBsaW5lYXJgIGFuZCBgWzAsIOKInl1gXG4gICAqICAgICAgICAgICAgICAgICAgICAgd2l0aCBgaW52ZXJzZWAgYW5kIGBleHBvbmVudGlhbGAuXG4gICAqICAgICBwYW5uaW5nTW9kZWwgLSAoJ0hSVEYnIGJ5IGRlZmF1bHQpIERldGVybWluZXMgd2hpY2ggc3BhdGlhbGl6YXRpb24gYWxnb3JpdGhtIGlzIHVzZWQgdG8gcG9zaXRpb24gYXVkaW8uXG4gICAqICAgICAgICAgICAgICAgICAgICAgQ2FuIGJlIGBIUlRGYCBvciBgZXF1YWxwb3dlcmAuXG4gICAqXG4gICAqIEByZXR1cm4ge0hvd2wvT2JqZWN0fSBSZXR1cm5zIHNlbGYgb3IgY3VycmVudCBwYW5uZXIgYXR0cmlidXRlcy5cbiAgICovXG4gIEhvd2wucHJvdG90eXBlLnBhbm5lckF0dHIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIG8sIGlkLCBzb3VuZDtcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIERldGVybWluZSB0aGUgdmFsdWVzIGJhc2VkIG9uIGFyZ3VtZW50cy5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIFJldHVybiB0aGUgZ3JvdXAncyBwYW5uZXIgYXR0cmlidXRlIHZhbHVlcy5cbiAgICAgIHJldHVybiBzZWxmLl9wYW5uZXJBdHRyO1xuICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbyA9IGFyZ3NbMF07XG5cbiAgICAgICAgLy8gU2V0IHRoZSBncm91J3MgcGFubmVyIGF0dHJpYnV0ZSB2YWx1ZXMuXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaWYgKCFvLnBhbm5lckF0dHIpIHtcbiAgICAgICAgICAgIG8ucGFubmVyQXR0ciA9IHtcbiAgICAgICAgICAgICAgY29uZUlubmVyQW5nbGU6IG8uY29uZUlubmVyQW5nbGUsXG4gICAgICAgICAgICAgIGNvbmVPdXRlckFuZ2xlOiBvLmNvbmVPdXRlckFuZ2xlLFxuICAgICAgICAgICAgICBjb25lT3V0ZXJHYWluOiBvLmNvbmVPdXRlckdhaW4sXG4gICAgICAgICAgICAgIGRpc3RhbmNlTW9kZWw6IG8uZGlzdGFuY2VNb2RlbCxcbiAgICAgICAgICAgICAgbWF4RGlzdGFuY2U6IG8ubWF4RGlzdGFuY2UsXG4gICAgICAgICAgICAgIHJlZkRpc3RhbmNlOiBvLnJlZkRpc3RhbmNlLFxuICAgICAgICAgICAgICByb2xsb2ZmRmFjdG9yOiBvLnJvbGxvZmZGYWN0b3IsXG4gICAgICAgICAgICAgIHBhbm5pbmdNb2RlbDogby5wYW5uaW5nTW9kZWxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fcGFubmVyQXR0ciA9IHtcbiAgICAgICAgICAgIGNvbmVJbm5lckFuZ2xlOiB0eXBlb2Ygby5wYW5uZXJBdHRyLmNvbmVJbm5lckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5jb25lSW5uZXJBbmdsZSA6IHNlbGYuX2NvbmVJbm5lckFuZ2xlLFxuICAgICAgICAgICAgY29uZU91dGVyQW5nbGU6IHR5cGVvZiBvLnBhbm5lckF0dHIuY29uZU91dGVyQW5nbGUgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLmNvbmVPdXRlckFuZ2xlIDogc2VsZi5fY29uZU91dGVyQW5nbGUsXG4gICAgICAgICAgICBjb25lT3V0ZXJHYWluOiB0eXBlb2Ygby5wYW5uZXJBdHRyLmNvbmVPdXRlckdhaW4gIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLmNvbmVPdXRlckdhaW4gOiBzZWxmLl9jb25lT3V0ZXJHYWluLFxuICAgICAgICAgICAgZGlzdGFuY2VNb2RlbDogdHlwZW9mIG8ucGFubmVyQXR0ci5kaXN0YW5jZU1vZGVsICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5kaXN0YW5jZU1vZGVsIDogc2VsZi5fZGlzdGFuY2VNb2RlbCxcbiAgICAgICAgICAgIG1heERpc3RhbmNlOiB0eXBlb2Ygby5wYW5uZXJBdHRyLm1heERpc3RhbmNlICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5tYXhEaXN0YW5jZSA6IHNlbGYuX21heERpc3RhbmNlLFxuICAgICAgICAgICAgcmVmRGlzdGFuY2U6IHR5cGVvZiBvLnBhbm5lckF0dHIucmVmRGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLnJlZkRpc3RhbmNlIDogc2VsZi5fcmVmRGlzdGFuY2UsXG4gICAgICAgICAgICByb2xsb2ZmRmFjdG9yOiB0eXBlb2Ygby5wYW5uZXJBdHRyLnJvbGxvZmZGYWN0b3IgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLnJvbGxvZmZGYWN0b3IgOiBzZWxmLl9yb2xsb2ZmRmFjdG9yLFxuICAgICAgICAgICAgcGFubmluZ01vZGVsOiB0eXBlb2Ygby5wYW5uZXJBdHRyLnBhbm5pbmdNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIucGFubmluZ01vZGVsIDogc2VsZi5fcGFubmluZ01vZGVsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoaXMgc291bmQncyBwYW5uZXIgYXR0cmlidXRlIHZhbHVlcy5cbiAgICAgICAgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQocGFyc2VJbnQoYXJnc1swXSwgMTApKTtcbiAgICAgICAgcmV0dXJuIHNvdW5kID8gc291bmQuX3Bhbm5lckF0dHIgOiBzZWxmLl9wYW5uZXJBdHRyO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgIG8gPSBhcmdzWzBdO1xuICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSB2YWx1ZXMgb2YgdGhlIHNwZWNpZmllZCBzb3VuZHMuXG4gICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgLy8gTWVyZ2UgdGhlIG5ldyB2YWx1ZXMgaW50byB0aGUgc291bmQuXG4gICAgICAgIHZhciBwYSA9IHNvdW5kLl9wYW5uZXJBdHRyO1xuICAgICAgICBwYSA9IHtcbiAgICAgICAgICBjb25lSW5uZXJBbmdsZTogdHlwZW9mIG8uY29uZUlubmVyQW5nbGUgIT09ICd1bmRlZmluZWQnID8gby5jb25lSW5uZXJBbmdsZSA6IHBhLmNvbmVJbm5lckFuZ2xlLFxuICAgICAgICAgIGNvbmVPdXRlckFuZ2xlOiB0eXBlb2Ygby5jb25lT3V0ZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLmNvbmVPdXRlckFuZ2xlIDogcGEuY29uZU91dGVyQW5nbGUsXG4gICAgICAgICAgY29uZU91dGVyR2FpbjogdHlwZW9mIG8uY29uZU91dGVyR2FpbiAhPT0gJ3VuZGVmaW5lZCcgPyBvLmNvbmVPdXRlckdhaW4gOiBwYS5jb25lT3V0ZXJHYWluLFxuICAgICAgICAgIGRpc3RhbmNlTW9kZWw6IHR5cGVvZiBvLmRpc3RhbmNlTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5kaXN0YW5jZU1vZGVsIDogcGEuZGlzdGFuY2VNb2RlbCxcbiAgICAgICAgICBtYXhEaXN0YW5jZTogdHlwZW9mIG8ubWF4RGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5tYXhEaXN0YW5jZSA6IHBhLm1heERpc3RhbmNlLFxuICAgICAgICAgIHJlZkRpc3RhbmNlOiB0eXBlb2Ygby5yZWZEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLnJlZkRpc3RhbmNlIDogcGEucmVmRGlzdGFuY2UsXG4gICAgICAgICAgcm9sbG9mZkZhY3RvcjogdHlwZW9mIG8ucm9sbG9mZkZhY3RvciAhPT0gJ3VuZGVmaW5lZCcgPyBvLnJvbGxvZmZGYWN0b3IgOiBwYS5yb2xsb2ZmRmFjdG9yLFxuICAgICAgICAgIHBhbm5pbmdNb2RlbDogdHlwZW9mIG8ucGFubmluZ01vZGVsICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmluZ01vZGVsIDogcGEucGFubmluZ01vZGVsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBwYW5uZXIgdmFsdWVzIG9yIGNyZWF0ZSBhIG5ldyBwYW5uZXIgaWYgbm9uZSBleGlzdHMuXG4gICAgICAgIHZhciBwYW5uZXIgPSBzb3VuZC5fcGFubmVyO1xuICAgICAgICBpZiAocGFubmVyKSB7XG4gICAgICAgICAgcGFubmVyLmNvbmVJbm5lckFuZ2xlID0gcGEuY29uZUlubmVyQW5nbGU7XG4gICAgICAgICAgcGFubmVyLmNvbmVPdXRlckFuZ2xlID0gcGEuY29uZU91dGVyQW5nbGU7XG4gICAgICAgICAgcGFubmVyLmNvbmVPdXRlckdhaW4gPSBwYS5jb25lT3V0ZXJHYWluO1xuICAgICAgICAgIHBhbm5lci5kaXN0YW5jZU1vZGVsID0gcGEuZGlzdGFuY2VNb2RlbDtcbiAgICAgICAgICBwYW5uZXIubWF4RGlzdGFuY2UgPSBwYS5tYXhEaXN0YW5jZTtcbiAgICAgICAgICBwYW5uZXIucmVmRGlzdGFuY2UgPSBwYS5yZWZEaXN0YW5jZTtcbiAgICAgICAgICBwYW5uZXIucm9sbG9mZkZhY3RvciA9IHBhLnJvbGxvZmZGYWN0b3I7XG4gICAgICAgICAgcGFubmVyLnBhbm5pbmdNb2RlbCA9IHBhLnBhbm5pbmdNb2RlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHBvc2l0aW9uIHRvIHNldHVwIHRoZSBub2RlIHdpdGguXG4gICAgICAgICAgaWYgKCFzb3VuZC5fcG9zKSB7XG4gICAgICAgICAgICBzb3VuZC5fcG9zID0gc2VsZi5fcG9zIHx8IFswLCAwLCAtMC41XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFubmVyIG5vZGUuXG4gICAgICAgICAgc2V0dXBQYW5uZXIoc291bmQsICdzcGF0aWFsJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKiogU2luZ2xlIFNvdW5kIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgcHJvcGVydGllcyB0byB0aGUgY29yZSBTb3VuZCBpbml0LlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gX3N1cGVyIENvcmUgU291bmQgaW5pdCBtZXRob2QuXG4gICAqIEByZXR1cm4ge1NvdW5kfVxuICAgKi9cbiAgU291bmQucHJvdG90eXBlLmluaXQgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcblxuICAgICAgLy8gU2V0dXAgdXNlci1kZWZpbmVkIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgICAgIHNlbGYuX29yaWVudGF0aW9uID0gcGFyZW50Ll9vcmllbnRhdGlvbjtcbiAgICAgIHNlbGYuX3N0ZXJlbyA9IHBhcmVudC5fc3RlcmVvO1xuICAgICAgc2VsZi5fcG9zID0gcGFyZW50Ll9wb3M7XG4gICAgICBzZWxmLl9wYW5uZXJBdHRyID0gcGFyZW50Ll9wYW5uZXJBdHRyO1xuXG4gICAgICAvLyBDb21wbGV0ZSBpbml0aWxpemF0aW9uIHdpdGggaG93bGVyLmpzIGNvcmUgU291bmQncyBpbml0IGZ1bmN0aW9uLlxuICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG5cbiAgICAgIC8vIElmIGEgc3RlcmVvIG9yIHBvc2l0aW9uIHdhcyBzcGVjaWZpZWQsIHNldCBpdCB1cC5cbiAgICAgIGlmIChzZWxmLl9zdGVyZW8pIHtcbiAgICAgICAgcGFyZW50LnN0ZXJlbyhzZWxmLl9zdGVyZW8pO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLl9wb3MpIHtcbiAgICAgICAgcGFyZW50LnBvcyhzZWxmLl9wb3NbMF0sIHNlbGYuX3Bvc1sxXSwgc2VsZi5fcG9zWzJdLCBzZWxmLl9pZCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoU291bmQucHJvdG90eXBlLmluaXQpO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgU291bmQucmVzZXQgbWV0aG9kIHRvIGNsZWFuIHVwIHByb3BlcnRpZXMgZnJvbSB0aGUgc3BhdGlhbCBwbHVnaW4uXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBfc3VwZXIgU291bmQgcmVzZXQgbWV0aG9kLlxuICAgKiBAcmV0dXJuIHtTb3VuZH1cbiAgICovXG4gIFNvdW5kLnByb3RvdHlwZS5yZXNldCA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuXG4gICAgICAvLyBSZXNldCBhbGwgc3BhdGlhbCBwbHVnaW4gcHJvcGVydGllcyBvbiB0aGlzIHNvdW5kLlxuICAgICAgc2VsZi5fb3JpZW50YXRpb24gPSBwYXJlbnQuX29yaWVudGF0aW9uO1xuICAgICAgc2VsZi5fcG9zID0gcGFyZW50Ll9wb3M7XG4gICAgICBzZWxmLl9wYW5uZXJBdHRyID0gcGFyZW50Ll9wYW5uZXJBdHRyO1xuXG4gICAgICAvLyBDb21wbGV0ZSByZXNldHRpbmcgb2YgdGhlIHNvdW5kLlxuICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIH07XG4gIH0pKFNvdW5kLnByb3RvdHlwZS5yZXNldCk7XG5cbiAgLyoqIEhlbHBlciBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgcGFubmVyIG5vZGUgYW5kIHNhdmUgaXQgb24gdGhlIHNvdW5kLlxuICAgKiBAcGFyYW0gIHtTb3VuZH0gc291bmQgU3BlY2lmaWMgc291bmQgdG8gc2V0dXAgcGFubmluZyBvbi5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVHlwZSBvZiBwYW5uZXIgdG8gY3JlYXRlOiAnc3RlcmVvJyBvciAnc3BhdGlhbCcuXG4gICAqL1xuICB2YXIgc2V0dXBQYW5uZXIgPSBmdW5jdGlvbihzb3VuZCwgdHlwZSkge1xuICAgIHR5cGUgPSB0eXBlIHx8ICdzcGF0aWFsJztcblxuICAgIC8vIENyZWF0ZSB0aGUgbmV3IHBhbm5lciBub2RlLlxuICAgIGlmICh0eXBlID09PSAnc3BhdGlhbCcpIHtcbiAgICAgIHNvdW5kLl9wYW5uZXIgPSBIb3dsZXIuY3R4LmNyZWF0ZVBhbm5lcigpO1xuICAgICAgc291bmQuX3Bhbm5lci5jb25lSW5uZXJBbmdsZSA9IHNvdW5kLl9wYW5uZXJBdHRyLmNvbmVJbm5lckFuZ2xlO1xuICAgICAgc291bmQuX3Bhbm5lci5jb25lT3V0ZXJBbmdsZSA9IHNvdW5kLl9wYW5uZXJBdHRyLmNvbmVPdXRlckFuZ2xlO1xuICAgICAgc291bmQuX3Bhbm5lci5jb25lT3V0ZXJHYWluID0gc291bmQuX3Bhbm5lckF0dHIuY29uZU91dGVyR2FpbjtcbiAgICAgIHNvdW5kLl9wYW5uZXIuZGlzdGFuY2VNb2RlbCA9IHNvdW5kLl9wYW5uZXJBdHRyLmRpc3RhbmNlTW9kZWw7XG4gICAgICBzb3VuZC5fcGFubmVyLm1heERpc3RhbmNlID0gc291bmQuX3Bhbm5lckF0dHIubWF4RGlzdGFuY2U7XG4gICAgICBzb3VuZC5fcGFubmVyLnJlZkRpc3RhbmNlID0gc291bmQuX3Bhbm5lckF0dHIucmVmRGlzdGFuY2U7XG4gICAgICBzb3VuZC5fcGFubmVyLnJvbGxvZmZGYWN0b3IgPSBzb3VuZC5fcGFubmVyQXR0ci5yb2xsb2ZmRmFjdG9yO1xuICAgICAgc291bmQuX3Bhbm5lci5wYW5uaW5nTW9kZWwgPSBzb3VuZC5fcGFubmVyQXR0ci5wYW5uaW5nTW9kZWw7XG5cbiAgICAgIGlmICh0eXBlb2Ygc291bmQuX3Bhbm5lci5wb3NpdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNvdW5kLl9wYW5uZXIucG9zaXRpb25YLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9wb3NbMF0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWS5zZXRWYWx1ZUF0VGltZShzb3VuZC5fcG9zWzFdLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblouc2V0VmFsdWVBdFRpbWUoc291bmQuX3Bvc1syXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VuZC5fcGFubmVyLnNldFBvc2l0aW9uKHNvdW5kLl9wb3NbMF0sIHNvdW5kLl9wb3NbMV0sIHNvdW5kLl9wb3NbMl0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25YICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWC5zZXRWYWx1ZUF0VGltZShzb3VuZC5fb3JpZW50YXRpb25bMF0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWS5zZXRWYWx1ZUF0VGltZShzb3VuZC5fb3JpZW50YXRpb25bMV0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWi5zZXRWYWx1ZUF0VGltZShzb3VuZC5fb3JpZW50YXRpb25bMl0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291bmQuX3Bhbm5lci5zZXRPcmllbnRhdGlvbihzb3VuZC5fb3JpZW50YXRpb25bMF0sIHNvdW5kLl9vcmllbnRhdGlvblsxXSwgc291bmQuX29yaWVudGF0aW9uWzJdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc291bmQuX3Bhbm5lciA9IEhvd2xlci5jdHguY3JlYXRlU3RlcmVvUGFubmVyKCk7XG4gICAgICBzb3VuZC5fcGFubmVyLnBhbi5zZXRWYWx1ZUF0VGltZShzb3VuZC5fc3RlcmVvLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICB9XG5cbiAgICBzb3VuZC5fcGFubmVyLmNvbm5lY3Qoc291bmQuX25vZGUpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBjb25uZWN0aW9ucy5cbiAgICBpZiAoIXNvdW5kLl9wYXVzZWQpIHtcbiAgICAgIHNvdW5kLl9wYXJlbnQucGF1c2Uoc291bmQuX2lkLCB0cnVlKS5wbGF5KHNvdW5kLl9pZCwgdHJ1ZSk7XG4gICAgfVxuICB9O1xufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2hvd2xlci9kaXN0L2hvd2xlci5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gW3tcImF1ZGlvRmlsZVwiOlwiYm9sbG5hc0J1cy5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjoxNzIuMjY1NjI1LFwibWFnbml0dWRlXCI6LTE3LjM5OTc0Nn0se1wiZnJlcVwiOjY0LjU5OTYwOSxcIm1hZ25pdHVkZVwiOi0yMS45NjgyOX0se1wiZnJlcVwiOjM2Ni4wNjQ0NTMsXCJtYWduaXR1ZGVcIjotMzIuNTI4MDQ5fSx7XCJmcmVxXCI6NTE2Ljc5Njg3NSxcIm1hZ25pdHVkZVwiOi0zOC41NDIzNTh9LHtcImZyZXFcIjo2ODkuMDYyNSxcIm1hZ25pdHVkZVwiOi0zOS4wMzg0NDV9LHtcImZyZXFcIjo4NjEuMzI4MTI1LFwibWFnbml0dWRlXCI6LTM5LjYzODMxN30se1wiZnJlcVwiOjc3NS4xOTUzMTIsXCJtYWduaXR1ZGVcIjotMzkuNjY2NTV9LHtcImZyZXFcIjo5OTAuNTI3MzQ0LFwibWFnbml0dWRlXCI6LTQwLjAxNjIwMX0se1wiZnJlcVwiOjkyNS45Mjc3MzQsXCJtYWduaXR1ZGVcIjotNDAuNTE3ODk1fSx7XCJmcmVxXCI6MTA5OC4xOTMzNTksXCJtYWduaXR1ZGVcIjotNDEuMDYwNTkzfSx7XCJmcmVxXCI6MTM1Ni41OTE3OTcsXCJtYWduaXR1ZGVcIjotNDEuMjc0ODc2fSx7XCJmcmVxXCI6MTI3MC40NTg5ODQsXCJtYWduaXR1ZGVcIjotNDMuNzAyMjQ0fSx7XCJmcmVxXCI6MTg3My4zODg2NzIsXCJtYWduaXR1ZGVcIjotNDQuMTY5NDI2fSx7XCJmcmVxXCI6MTUyOC44NTc0MjIsXCJtYWduaXR1ZGVcIjotNDUuMTM1MjgxfSx7XCJmcmVxXCI6MTYzNi41MjM0MzgsXCJtYWduaXR1ZGVcIjotNDUuNjUzNzM2fSx7XCJmcmVxXCI6MTc0NC4xODk0NTMsXCJtYWduaXR1ZGVcIjotNDUuNzkwMDU4fV19LHtcImF1ZGlvRmlsZVwiOlwiY29vcC5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjo4Ni4xMzI4MTIsXCJtYWduaXR1ZGVcIjotMjguOTMyNTM3fSx7XCJmcmVxXCI6MjM2Ljg2NTIzNCxcIm1hZ25pdHVkZVwiOi0zMi4zMjc5OTV9LHtcImZyZXFcIjo0NTIuMTk3MjY2LFwibWFnbml0dWRlXCI6LTM2LjI4OTQ5fSx7XCJmcmVxXCI6MzQ0LjUzMTI1LFwibWFnbml0dWRlXCI6LTM2Ljc4OTI2MX0se1wiZnJlcVwiOjU1OS44NjMyODEsXCJtYWduaXR1ZGVcIjotMzguNjE2ODR9LHtcImZyZXFcIjo3MzIuMTI4OTA2LFwibWFnbml0dWRlXCI6LTM5LjQ5NDc3OH0se1wiZnJlcVwiOjc5Ni43Mjg1MTYsXCJtYWduaXR1ZGVcIjotMzkuNTExOTkzfSx7XCJmcmVxXCI6MTA3Ni42NjAxNTYsXCJtYWduaXR1ZGVcIjotNDguNDIzMDg4fSx7XCJmcmVxXCI6MTE4NC4zMjYxNzIsXCJtYWduaXR1ZGVcIjotNTAuNDg0MTg4fSx7XCJmcmVxXCI6MTI0OC45MjU3ODEsXCJtYWduaXR1ZGVcIjotNTAuNjY0ODQxfSx7XCJmcmVxXCI6MTQ2NC4yNTc4MTIsXCJtYWduaXR1ZGVcIjotNTEuMDc1NzMzfSx7XCJmcmVxXCI6MTM5OS42NTgyMDMsXCJtYWduaXR1ZGVcIjotNTEuMzI5OTA2fSx7XCJmcmVxXCI6MTY1OC4wNTY2NDEsXCJtYWduaXR1ZGVcIjotNTEuNzI5ODk3fSx7XCJmcmVxXCI6MTg1MS44NTU0NjksXCJtYWduaXR1ZGVcIjotNTMuMDE2Njc4fSx7XCJmcmVxXCI6MjExMC4yNTM5MDYsXCJtYWduaXR1ZGVcIjotNTUuNjIxMzY1fSx7XCJmcmVxXCI6MjAyNC4xMjEwOTQsXCJtYWduaXR1ZGVcIjotNTcuNTUwNTQ5fV19LHtcImF1ZGlvRmlsZVwiOlwiY291bnRpbmcxLm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjE5My43OTg4MjgsXCJtYWduaXR1ZGVcIjotMjYuMDE3NTYxfSx7XCJmcmVxXCI6NDA5LjEzMDg1OSxcIm1hZ25pdHVkZVwiOi0zNS40NzU0MDN9LHtcImZyZXFcIjo2MDIuOTI5Njg4LFwibWFnbml0dWRlXCI6LTQzLjAyMTkyN30se1wiZnJlcVwiOjc5Ni43Mjg1MTYsXCJtYWduaXR1ZGVcIjotNDYuNDgwNTk4fSx7XCJmcmVxXCI6NzE5Mi4wODk4NDQsXCJtYWduaXR1ZGVcIjotNTIuMzA4NDgzfSx7XCJmcmVxXCI6NzIzNS4xNTYyNSxcIm1hZ25pdHVkZVwiOi01Mi42MzMzNjl9LHtcImZyZXFcIjo4MjkwLjI4MzIwMyxcIm1hZ25pdHVkZVwiOi01Mi42Njk2Nzh9LHtcImZyZXFcIjo3MTA1Ljk1NzAzMSxcIm1hZ25pdHVkZVwiOi01Mi45NDUxMjJ9LHtcImZyZXFcIjo2NTY3LjYyNjk1MyxcIm1hZ25pdHVkZVwiOi01Mi45ODgwNn0se1wiZnJlcVwiOjY1MDMuMDI3MzQ0LFwibWFnbml0dWRlXCI6LTUzLjE4NDk2N30se1wiZnJlcVwiOjY0MTYuODk0NTMxLFwibWFnbml0dWRlXCI6LTUzLjQ3MzQ0Nn0se1wiZnJlcVwiOjgxODIuNjE3MTg4LFwibWFnbml0dWRlXCI6LTUzLjUzMTM1N30se1wiZnJlcVwiOjU2ODQuNzY1NjI1LFwibWFnbml0dWRlXCI6LTUzLjYwMjUzMX0se1wiZnJlcVwiOjgxMzkuNTUwNzgxLFwibWFnbml0dWRlXCI6LTU0LjA2Mjc3OH0se1wiZnJlcVwiOjY2NTMuNzU5NzY2LFwibWFnbml0dWRlXCI6LTU0LjE1NzM5OH0se1wiZnJlcVwiOjU1NzcuMDk5NjA5LFwibWFnbml0dWRlXCI6LTU0LjQ2OTM4M31dfSx7XCJhdWRpb0ZpbGVcIjpcImNvdW50aW5nU3ZlbnNrYS5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjoyMTUuMzMyMDMxLFwibWFnbml0dWRlXCI6LTE4Ljk3NjcyN30se1wiZnJlcVwiOjQzMC42NjQwNjIsXCJtYWduaXR1ZGVcIjotMjMuODA1MTgzfSx7XCJmcmVxXCI6NDczLjczMDQ2OSxcIm1hZ25pdHVkZVwiOi0yMy45Mzc0MDN9LHtcImZyZXFcIjo2NjcuNTI5Mjk3LFwibWFnbml0dWRlXCI6LTM2LjQ3NzM1Nn0se1wiZnJlcVwiOjk3NzYuMDc0MjE5LFwibWFnbml0dWRlXCI6LTQ2Ljc3OTMxNn0se1wiZnJlcVwiOjk4ODMuNzQwMjM0LFwibWFnbml0dWRlXCI6LTQ2Ljg3Mjk5fSx7XCJmcmVxXCI6OTk0OC4zMzk4NDQsXCJtYWduaXR1ZGVcIjotNDcuODQzNzYxfSx7XCJmcmVxXCI6ODE4LjI2MTcxOSxcIm1hZ25pdHVkZVwiOi00Ny45NzU1NTl9LHtcImZyZXFcIjo5MTA4LjU0NDkyMixcIm1hZ25pdHVkZVwiOi01MC4wNjQwMTR9LHtcImZyZXFcIjo4NjU2LjM0NzY1NixcIm1hZ25pdHVkZVwiOi01MC4xNDk2MjR9LHtcImZyZXFcIjoyMDAyLjU4Nzg5MSxcIm1hZ25pdHVkZVwiOi01MC4zNDMxNDd9LHtcImZyZXFcIjo5NzExLjQ3NDYwOSxcIm1hZ25pdHVkZVwiOi01MC40ODIwMDJ9LHtcImZyZXFcIjo3Mzg1Ljg4ODY3MixcIm1hZ25pdHVkZVwiOi01MC41NTQ5MDV9LHtcImZyZXFcIjo5MTczLjE0NDUzMSxcIm1hZ25pdHVkZVwiOi01MC45MjE3MzR9LHtcImZyZXFcIjo5NjQ2Ljg3NSxcIm1hZ25pdHVkZVwiOi01MS4wNzIwMDJ9LHtcImZyZXFcIjoxNzY1LjcyMjY1NixcIm1hZ25pdHVkZVwiOi01MS4xMDE2MDF9XX0se1wiYXVkaW9GaWxlXCI6XCJjcm9zc3dhbGsubXAzXCIsXCJzcGVjdHJ1bVwiOlt7XCJmcmVxXCI6MjU3LjgxMjUsXCJtYWduaXR1ZGVcIjotMzcuNjY2NzI5fSx7XCJmcmVxXCI6ODIwLjMxMjUsXCJtYWduaXR1ZGVcIjotNDEuNzc3MDg4fSx7XCJmcmVxXCI6NzUwLFwibWFnbml0dWRlXCI6LTQzLjY0Nzk3Nn0se1wiZnJlcVwiOjUzOS4wNjI1LFwibWFnbml0dWRlXCI6LTQ3LjAzODQ0OH0se1wiZnJlcVwiOjEzODIuODEyNSxcIm1hZ25pdHVkZVwiOi00Ny43MTM4NzF9LHtcImZyZXFcIjo5NjAuOTM3NSxcIm1hZ25pdHVkZVwiOi00Ny44MTUwODZ9LHtcImZyZXFcIjoxNDUzLjEyNSxcIm1hZ25pdHVkZVwiOi00OS41MjEwMTV9LHtcImZyZXFcIjoxMjE4Ljc1LFwibWFnbml0dWRlXCI6LTQ5Ljg4NjE4OX0se1wiZnJlcVwiOjI5MDYuMjUsXCJtYWduaXR1ZGVcIjotNTAuMjQzNzI1fSx7XCJmcmVxXCI6MTI4OS4wNjI1LFwibWFnbml0dWRlXCI6LTUwLjQ1NTY5Mn0se1wiZnJlcVwiOjI2MjUsXCJtYWduaXR1ZGVcIjotNTEuODAxMDc1fSx7XCJmcmVxXCI6MTU5My43NSxcIm1hZ25pdHVkZVwiOi01MS44NDYwOTZ9LHtcImZyZXFcIjozMDIzLjQzNzUsXCJtYWduaXR1ZGVcIjotNTIuMTM0NTcxfSx7XCJmcmVxXCI6MjAzOS4wNjI1LFwibWFnbml0dWRlXCI6LTUyLjE0NDQ4Mn0se1wiZnJlcVwiOjIzMjAuMzEyNSxcIm1hZ25pdHVkZVwiOi01Mi42NTcwMjR9LHtcImZyZXFcIjoxOTIxLjg3NSxcIm1hZ25pdHVkZVwiOi01My4zMzgyMTl9XX0se1wiYXVkaW9GaWxlXCI6XCJlbXB0eVdvcmRzTmVhLm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjIxNS4zMzIwMzEsXCJtYWduaXR1ZGVcIjotMTkuNTIwMTU5fSx7XCJmcmVxXCI6NDMwLjY2NDA2MixcIm1hZ25pdHVkZVwiOi0yNS4yMTkwMjV9LHtcImZyZXFcIjo2MDIuOTI5Njg4LFwibWFnbml0dWRlXCI6LTMxLjE3NTUyMn0se1wiZnJlcVwiOjY0LjU5OTYwOSxcIm1hZ25pdHVkZVwiOi0zNS4xOTMyNzl9LHtcImZyZXFcIjo3OTYuNzI4NTE2LFwibWFnbml0dWRlXCI6LTM5Ljg2ODI3OX0se1wiZnJlcVwiOjE3ODcuMjU1ODU5LFwibWFnbml0dWRlXCI6LTQxLjM5MTE4Mn0se1wiZnJlcVwiOjg4Mi44NjEzMjgsXCJtYWduaXR1ZGVcIjotNDIuODI3MDQ1fSx7XCJmcmVxXCI6MTA1NS4xMjY5NTMsXCJtYWduaXR1ZGVcIjotNDUuMDA5MTcxfSx7XCJmcmVxXCI6MTY3OS41ODk4NDQsXCJtYWduaXR1ZGVcIjotNDUuMDE5NDQ0fSx7XCJmcmVxXCI6MTExOS43MjY1NjIsXCJtYWduaXR1ZGVcIjotNDUuMzc0OTYyfSx7XCJmcmVxXCI6MTU3MS45MjM4MjgsXCJtYWduaXR1ZGVcIjotNDUuMzkyMzg3fSx7XCJmcmVxXCI6MTQyMS4xOTE0MDYsXCJtYWduaXR1ZGVcIjotNDYuMTU2OTgyfSx7XCJmcmVxXCI6MTI3MC40NTg5ODQsXCJtYWduaXR1ZGVcIjotNDYuMzc3MjI4fSx7XCJmcmVxXCI6MTg5NC45MjE4NzUsXCJtYWduaXR1ZGVcIjotNDYuNDcwMjk1fSx7XCJmcmVxXCI6MTQ4NS43OTEwMTYsXCJtYWduaXR1ZGVcIjotNDcuMjY2MzY5fSx7XCJmcmVxXCI6ODYxMy4yODEyNSxcIm1hZ25pdHVkZVwiOi00Ny40ODk2NTV9XX0se1wiYXVkaW9GaWxlXCI6XCJmbGlnaHRMYW5kaW5nLm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjE1MC43MzI0MjIsXCJtYWduaXR1ZGVcIjotMjMuMjI5MjF9LHtcImZyZXFcIjozMjIuOTk4MDQ3LFwibWFnbml0dWRlXCI6LTI3LjgxNzYzM30se1wiZnJlcVwiOjg2LjEzMjgxMixcIm1hZ25pdHVkZVwiOi0yOC43NTc4MzJ9LHtcImZyZXFcIjo4ODIuODYxMzI4LFwibWFnbml0dWRlXCI6LTM2LjA0NTkyNX0se1wiZnJlcVwiOjQ1Mi4xOTcyNjYsXCJtYWduaXR1ZGVcIjotMzYuMTY1MTQ2fSx7XCJmcmVxXCI6NTE2Ljc5Njg3NSxcIm1hZ25pdHVkZVwiOi0zOC4xOTI5MDl9LHtcImZyZXFcIjo2NDUuOTk2MDk0LFwibWFnbml0dWRlXCI6LTM5LjQ3MjV9LHtcImZyZXFcIjoxMDU1LjEyNjk1MyxcIm1hZ25pdHVkZVwiOi00MC45MTg2MTN9LHtcImZyZXFcIjo5OTAuNTI3MzQ0LFwibWFnbml0dWRlXCI6LTQwLjk2ODE4OX0se1wiZnJlcVwiOjczMi4xMjg5MDYsXCJtYWduaXR1ZGVcIjotNDEuMzc5Mjh9LHtcImZyZXFcIjo3OTYuNzI4NTE2LFwibWFnbml0dWRlXCI6LTQxLjUxODk2N30se1wiZnJlcVwiOjE0ODUuNzkxMDE2LFwibWFnbml0dWRlXCI6LTQyLjQzODc4Mn0se1wiZnJlcVwiOjEyNDguOTI1NzgxLFwibWFnbml0dWRlXCI6LTQ0LjI4MzY2NX0se1wiZnJlcVwiOjE3NjUuNzIyNjU2LFwibWFnbml0dWRlXCI6LTQ0LjgzNDc1MX0se1wiZnJlcVwiOjExNjIuNzkyOTY5LFwibWFnbml0dWRlXCI6LTQ1Ljk2MTUzNn0se1wiZnJlcVwiOjEzNTYuNTkxNzk3LFwibWFnbml0dWRlXCI6LTQ2LjU0MDUzMX1dfSx7XCJhdWRpb0ZpbGVcIjpcImZyb21CZXJsaW4ubXAzXCIsXCJzcGVjdHJ1bVwiOlt7XCJmcmVxXCI6MTI5LjE5OTIxOSxcIm1hZ25pdHVkZVwiOi0xOS4zMzczMjh9LHtcImZyZXFcIjoxNzIuMjY1NjI1LFwibWFnbml0dWRlXCI6LTIwLjA2MTE1N30se1wiZnJlcVwiOjIzNi44NjUyMzQsXCJtYWduaXR1ZGVcIjotMjEuMjQzMzgyfSx7XCJmcmVxXCI6MzY2LjA2NDQ1MyxcIm1hZ25pdHVkZVwiOi0yNS4yNDk2MTd9LHtcImZyZXFcIjo0MDkuMTMwODU5LFwibWFnbml0dWRlXCI6LTI1LjI1MDIwMn0se1wiZnJlcVwiOjMyMi45OTgwNDcsXCJtYWduaXR1ZGVcIjotMjUuMzI0OTN9LHtcImZyZXFcIjo0NzMuNzMwNDY5LFwibWFnbml0dWRlXCI6LTI1LjQ3Mzg2NH0se1wiZnJlcVwiOjY0NS45OTYwOTQsXCJtYWduaXR1ZGVcIjotMjYuMjkxMjM3fSx7XCJmcmVxXCI6NjAyLjkyOTY4OCxcIm1hZ25pdHVkZVwiOi0yNi44MjA3OTd9LHtcImZyZXFcIjo5NjguOTk0MTQxLFwibWFnbml0dWRlXCI6LTI4LjQyMzA3NX0se1wiZnJlcVwiOjc5Ni43Mjg1MTYsXCJtYWduaXR1ZGVcIjotMjguNjE2ODY1fSx7XCJmcmVxXCI6OTA0LjM5NDUzMSxcIm1hZ25pdHVkZVwiOi0zMC4zMjcyOTF9LHtcImZyZXFcIjoxNDY0LjI1NzgxMixcIm1hZ25pdHVkZVwiOi0zMi43MTg1MX0se1wiZnJlcVwiOjExODQuMzI2MTcyLFwibWFnbml0dWRlXCI6LTMzLjUzODM3Mn0se1wiZnJlcVwiOjExMTkuNzI2NTYyLFwibWFnbml0dWRlXCI6LTMzLjYzODI2OH0se1wiZnJlcVwiOjEyNzAuNDU4OTg0LFwibWFnbml0dWRlXCI6LTM0LjIwMDE3Mn1dfSx7XCJhdWRpb0ZpbGVcIjpcImtpdGNoZW4xLm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjEwNy42NjYwMTYsXCJtYWduaXR1ZGVcIjotMjMuMDE4MDMyfSx7XCJmcmVxXCI6MTUwLjczMjQyMixcIm1hZ25pdHVkZVwiOi0yMy4wNjMwOTN9LHtcImZyZXFcIjoxMDcuNjY2MDE2LFwibWFnbml0dWRlXCI6LTIzLjY4MzgzMn0se1wiZnJlcVwiOjE1MC43MzI0MjIsXCJtYWduaXR1ZGVcIjotMjMuODcwNjY4fSx7XCJmcmVxXCI6MjM2Ljg2NTIzNCxcIm1hZ25pdHVkZVwiOi0yNy41NzgwODd9LHtcImZyZXFcIjoyMzYuODY1MjM0LFwibWFnbml0dWRlXCI6LTI4LjQ1ODQzOX0se1wiZnJlcVwiOjMwMS40NjQ4NDQsXCJtYWduaXR1ZGVcIjotMjguNTI4Nzk1fSx7XCJmcmVxXCI6MzAxLjQ2NDg0NCxcIm1hZ25pdHVkZVwiOi0yOS4xNDY0NjF9LHtcImZyZXFcIjo0MzAuNjY0MDYyLFwibWFnbml0dWRlXCI6LTMxLjEyMjkyNX0se1wiZnJlcVwiOjQzMC42NjQwNjIsXCJtYWduaXR1ZGVcIjotMzEuNjIwNzI2fSx7XCJmcmVxXCI6NTM4LjMzMDA3OCxcIm1hZ25pdHVkZVwiOi0zMi4yNzk4NDZ9LHtcImZyZXFcIjo1MzguMzMwMDc4LFwibWFnbml0dWRlXCI6LTMyLjc2NjczMX0se1wiZnJlcVwiOjQ5NS4yNjM2NzIsXCJtYWduaXR1ZGVcIjotMzIuNzgyMTI0fSx7XCJmcmVxXCI6NDk1LjI2MzY3MixcIm1hZ25pdHVkZVwiOi0zMi44MzM4NjJ9LHtcImZyZXFcIjo2NDUuOTk2MDk0LFwibWFnbml0dWRlXCI6LTMzLjEyMTY0N30se1wiZnJlcVwiOjY0NS45OTYwOTQsXCJtYWduaXR1ZGVcIjotMzMuMjE4MjMxfV19LHtcImF1ZGlvRmlsZVwiOlwicGVuZGVsVGFnLm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjIzNi44NjUyMzQsXCJtYWduaXR1ZGVcIjotMTYuMjIxNTkyfSx7XCJmcmVxXCI6NjQuNTk5NjA5LFwibWFnbml0dWRlXCI6LTE4LjY4ODA5MX0se1wiZnJlcVwiOjQwOS4xMzA4NTksXCJtYWduaXR1ZGVcIjotMjAuMzM2MTc4fSx7XCJmcmVxXCI6NTU5Ljg2MzI4MSxcIm1hZ25pdHVkZVwiOi0yMS42MjA1Mjd9LHtcImZyZXFcIjo2MjQuNDYyODkxLFwibWFnbml0dWRlXCI6LTIzLjY4NTQyOX0se1wiZnJlcVwiOjg2MS4zMjgxMjUsXCJtYWduaXR1ZGVcIjotMjUuMDY3NjM1fSx7XCJmcmVxXCI6OTI1LjkyNzczNCxcIm1hZ25pdHVkZVwiOi0yNS44MzI2Nzh9LHtcImZyZXFcIjoxNzIyLjY1NjI1LFwibWFnbml0dWRlXCI6LTI3LjEwOTgwMn0se1wiZnJlcVwiOjE4NzMuMzg4NjcyLFwibWFnbml0dWRlXCI6LTI3LjE4OTczNX0se1wiZnJlcVwiOjEwNTUuMTI2OTUzLFwibWFnbml0dWRlXCI6LTI5LjUwNzc2N30se1wiZnJlcVwiOjEyNDguOTI1NzgxLFwibWFnbml0dWRlXCI6LTI5LjgwNjIxMX0se1wiZnJlcVwiOjExNDEuMjU5NzY2LFwibWFnbml0dWRlXCI6LTMwLjA2NTE4N30se1wiZnJlcVwiOjEzMTMuNTI1MzkxLFwibWFnbml0dWRlXCI6LTMwLjI1Mzc2N30se1wiZnJlcVwiOjE5MTYuNDU1MDc4LFwibWFnbml0dWRlXCI6LTMwLjM2NzE2M30se1wiZnJlcVwiOjE0MjEuMTkxNDA2LFwibWFnbml0dWRlXCI6LTMxLjUzOTcxOX0se1wiZnJlcVwiOjE1MjguODU3NDIyLFwibWFnbml0dWRlXCI6LTMxLjcyMjUwN31dfSx7XCJhdWRpb0ZpbGVcIjpcInBlbmRlbFRhZzIubXAzXCIsXCJzcGVjdHJ1bVwiOlt7XCJmcmVxXCI6MzAxLjQ2NDg0NCxcIm1hZ25pdHVkZVwiOi0yOC41ODgyNTd9LHtcImZyZXFcIjoxNTAuNzMyNDIyLFwibWFnbml0dWRlXCI6LTI5LjI5Mzk4fSx7XCJmcmVxXCI6MzY2LjA2NDQ1MyxcIm1hZ25pdHVkZVwiOi0zMS40Mjk5NDd9LHtcImZyZXFcIjo4Ni4xMzI4MTIsXCJtYWduaXR1ZGVcIjotMzEuOTk3MzQ5fSx7XCJmcmVxXCI6Njg5LjA2MjUsXCJtYWduaXR1ZGVcIjotMzIuMjYyNDk3fSx7XCJmcmVxXCI6Nzc1LjE5NTMxMixcIm1hZ25pdHVkZVwiOi0zMy44NTU2MTR9LHtcImZyZXFcIjo1NTkuODYzMjgxLFwibWFnbml0dWRlXCI6LTM0LjE2MjU1Mn0se1wiZnJlcVwiOjk0Ny40NjA5MzgsXCJtYWduaXR1ZGVcIjotMzUuMzcwNjY3fSx7XCJmcmVxXCI6ODYxLjMyODEyNSxcIm1hZ25pdHVkZVwiOi0zNi42NDA0NzZ9LHtcImZyZXFcIjoxMDc2LjY2MDE1NixcIm1hZ25pdHVkZVwiOi0zOS4wNTUzNzh9LHtcImZyZXFcIjoxMjQ4LjkyNTc4MSxcIm1hZ25pdHVkZVwiOi00MC43NDA0OTh9LHtcImZyZXFcIjoxMzEzLjUyNTM5MSxcIm1hZ25pdHVkZVwiOi00MS4yNDgxNzd9LHtcImZyZXFcIjoxNDQyLjcyNDYwOSxcIm1hZ25pdHVkZVwiOi00My40MTUyNDV9LHtcImZyZXFcIjoxNTUwLjM5MDYyNSxcIm1hZ25pdHVkZVwiOi00NC4xNzQwMjZ9LHtcImZyZXFcIjoxNjU4LjA1NjY0MSxcIm1hZ25pdHVkZVwiOi00NC40MjYwMjl9LHtcImZyZXFcIjoyMDAyLjU4Nzg5MSxcIm1hZ25pdHVkZVwiOi00NS4xMzc0MDV9XX0se1wiYXVkaW9GaWxlXCI6XCJzaXJlbkJpcmRzLm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjI5MDYuOTgyNDIyLFwibWFnbml0dWRlXCI6LTIzLjE1NjYyNH0se1wiZnJlcVwiOjczMi4xMjg5MDYsXCJtYWduaXR1ZGVcIjotMjYuNjQ1NzMxfSx7XCJmcmVxXCI6MzIyLjk5ODA0NyxcIm1hZ25pdHVkZVwiOi0yNy40MjA5MDh9LHtcImZyZXFcIjo5NjguOTk0MTQxLFwibWFnbml0dWRlXCI6LTI3LjUxNTUzNX0se1wiZnJlcVwiOjE3Mi4yNjU2MjUsXCJtYWduaXR1ZGVcIjotMjcuNjgwMjY1fSx7XCJmcmVxXCI6MTI5LjE5OTIxOSxcIm1hZ25pdHVkZVwiOi0yNy43NTc4NTF9LHtcImZyZXFcIjoxOTM3Ljk4ODI4MSxcIm1hZ25pdHVkZVwiOi0yOS4wNDQ4NH0se1wiZnJlcVwiOjg4Mi44NjEzMjgsXCJtYWduaXR1ZGVcIjotMjkuNTgwNX0se1wiZnJlcVwiOjYwMi45Mjk2ODgsXCJtYWduaXR1ZGVcIjotMjkuODQ0NjI0fSx7XCJmcmVxXCI6NDUyLjE5NzI2NixcIm1hZ25pdHVkZVwiOi0zMC4yMzU0N30se1wiZnJlcVwiOjUzOC4zMzAwNzgsXCJtYWduaXR1ZGVcIjotMzAuNzExMzA0fSx7XCJmcmVxXCI6MTA5OC4xOTMzNTksXCJtYWduaXR1ZGVcIjotMzEuMDY1MjY4fSx7XCJmcmVxXCI6MTMxMy41MjUzOTEsXCJtYWduaXR1ZGVcIjotMzMuOTIzNTUzfSx7XCJmcmVxXCI6MjE5Ni4zODY3MTksXCJtYWduaXR1ZGVcIjotMzMuOTI3MDMyfSx7XCJmcmVxXCI6MjEzMS43ODcxMDksXCJtYWduaXR1ZGVcIjotMzUuMTg4MTZ9LHtcImZyZXFcIjoyMzA0LjA1MjczNCxcIm1hZ25pdHVkZVwiOi0zNS4yNzAzMzJ9XX0se1wiYXVkaW9GaWxlXCI6XCJzbm93Lm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjY0LjU5OTYwOSxcIm1hZ25pdHVkZVwiOi0yOS42NzcxNjZ9LHtcImZyZXFcIjozNDQuNTMxMjUsXCJtYWduaXR1ZGVcIjotNDAuMzQ3NDg1fSx7XCJmcmVxXCI6NjAyLjkyOTY4OCxcIm1hZ25pdHVkZVwiOi00NC4wNDA1NTh9LHtcImZyZXFcIjo2ODkuMDYyNSxcIm1hZ25pdHVkZVwiOi00NC44OTc5MTV9LHtcImZyZXFcIjo5MjUuOTI3NzM0LFwibWFnbml0dWRlXCI6LTQ4Ljg3MDEwNn0se1wiZnJlcVwiOjEyMDUuODU5Mzc1LFwibWFnbml0dWRlXCI6LTQ5LjA4NjMxOX0se1wiZnJlcVwiOjEwOTguMTkzMzU5LFwibWFnbml0dWRlXCI6LTUwLjk3NjAxM30se1wiZnJlcVwiOjEyOTEuOTkyMTg4LFwibWFnbml0dWRlXCI6LTUyLjIyNDIzNn0se1wiZnJlcVwiOjE0MjEuMTkxNDA2LFwibWFnbml0dWRlXCI6LTUzLjMzMDUyNH0se1wiZnJlcVwiOjE0ODUuNzkxMDE2LFwibWFnbml0dWRlXCI6LTUzLjQ3NjIxNX0se1wiZnJlcVwiOjEzNzguMTI1LFwibWFnbml0dWRlXCI6LTUzLjYxNTgzN30se1wiZnJlcVwiOjE2MzYuNTIzNDM4LFwibWFnbml0dWRlXCI6LTU0LjU4Mzk5Nn0se1wiZnJlcVwiOjE3NDQuMTg5NDUzLFwibWFnbml0dWRlXCI6LTU1LjI0MTAwNX0se1wiZnJlcVwiOjE4MDguNzg5MDYyLFwibWFnbml0dWRlXCI6LTU1LjcyNjExNn0se1wiZnJlcVwiOjE5MzcuOTg4MjgxLFwibWFnbml0dWRlXCI6LTU3LjY2NTI3Nn0se1wiZnJlcVwiOjIwMjQuMTIxMDk0LFwibWFnbml0dWRlXCI6LTU5LjI1MjgxNX1dfSx7XCJhdWRpb0ZpbGVcIjpcIndhbGtpbmdJblN0cmVldC5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjoxMjkuMTk5MjE5LFwibWFnbml0dWRlXCI6LTI0Ljg5OTQ3M30se1wiZnJlcVwiOjI1OC4zOTg0MzgsXCJtYWduaXR1ZGVcIjotMzAuODAwNjY1fSx7XCJmcmVxXCI6MjE1LjMzMjAzMSxcIm1hZ25pdHVkZVwiOi0zMS4wMDM1NTN9LHtcImZyZXFcIjo2NC41OTk2MDksXCJtYWduaXR1ZGVcIjotMzIuNzQ2NjMyfSx7XCJmcmVxXCI6OTA0LjM5NDUzMSxcIm1hZ25pdHVkZVwiOi0zNS41NDU1MzZ9LHtcImZyZXFcIjo2MDIuOTI5Njg4LFwibWFnbml0dWRlXCI6LTM1Ljc1NTQ5N30se1wiZnJlcVwiOjM2Ni4wNjQ0NTMsXCJtYWduaXR1ZGVcIjotMzUuOTA3MTMxfSx7XCJmcmVxXCI6ODM5Ljc5NDkyMixcIm1hZ25pdHVkZVwiOi0zNi4xNDYwMDR9LHtcImZyZXFcIjo0NTIuMTk3MjY2LFwibWFnbml0dWRlXCI6LTM2LjE3NDM2Nn0se1wiZnJlcVwiOjY4OS4wNjI1LFwibWFnbml0dWRlXCI6LTM2Ljc5NjUzOX0se1wiZnJlcVwiOjk2OC45OTQxNDEsXCJtYWduaXR1ZGVcIjotMzcuMzUyMzQ1fSx7XCJmcmVxXCI6MTA5OC4xOTMzNTksXCJtYWduaXR1ZGVcIjotMzguMTMwMTg0fSx7XCJmcmVxXCI6MTE4NC4zMjYxNzIsXCJtYWduaXR1ZGVcIjotMzguMjIyODc4fSx7XCJmcmVxXCI6MTE0MS4yNTk3NjYsXCJtYWduaXR1ZGVcIjotMzguMjgzNjI3fSx7XCJmcmVxXCI6MTM5OS42NTgyMDMsXCJtYWduaXR1ZGVcIjotNDEuMTcwMDl9LHtcImZyZXFcIjoxNzg3LjI1NTg1OSxcIm1hZ25pdHVkZVwiOi00My42NTA0ODZ9XX1dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3BlY3RyYWxEYXRhLmpzb25cbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=