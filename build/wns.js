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
const utils = {
    mtof: (note) => Math.pow(2, (note) / 12) * 440,
    ftom: (note) => Math.sqrt(note / 440) / 12,
    choose: (array) => {
        return array[Math.floor(Math.random() * array.length)];
    },
    getRateFromFrequencies: (freq, baseFreq) => {
        return freq / baseFreq;
    },
    getClosestMember: (subject, set) => {
        return set.reduce((accum, member) => {
            const prevDistance = accum - subject;
            const currentDistance = member - subject;
            return Math.abs(currentDistance) < Math.abs(prevDistance) ? member : accum;
        }, set[0]);
    },
    findInCollection: (collection, predicateFunction) => {
        return collection.reduce((accum, member) => predicateFunction(member) ? member : accum);
    },
    mapToDomain: (set, domain) => {
        const setOffset = Math.min(...domain) - Math.min(...set);
        const domainRange = (Math.max(...domain) - Math.min(...domain));
        const setRange = (Math.max(...set) - Math.min(...set));
        return set.map(member => utils.getClosestMember((((member - Math.min(...set)) / setRange) * domainRange) + setOffset, domain));
    },
    flipCoin: (probability = 0.5) => (Math.random() < probability) ? false : true,
    makeFunction: (value) => {
        if (typeof value === "function") {
            return value;
        }
        else {
            return () => value;
        }
    }
};
/* harmony default export */ __webpack_exports__["a"] = (utils);
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
/* harmony export (immutable) */ __webpack_exports__["c"] = mod;

const getSequentialRandomIndex = (lastIndex, length) => {
    const possibleIndexes = Array(length).fill(0).map((item, i) => i).filter(item => item !== lastIndex);
    return utils.choose(possibleIndexes);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getSequentialRandomIndex;



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
    const melodyOscillators = Array(populationSize).fill(0).map(() => __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* default */].flipCoin() ? new __WEBPACK_IMPORTED_MODULE_3__MultiSampler__["a" /* default */](context, multiSamplerOpts) : new __WEBPACK_IMPORTED_MODULE_1__Synth__["a" /* default */](context));
    const sourceSamples = backgroundSamples.map(sampleData => new __WEBPACK_IMPORTED_MODULE_3__MultiSampler__["a" /* default */](context, {
        samples: [
            { files: [config.samplePath + sampleData.audioFile], freq: 1 },
        ],
    }));
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
    let sampleIndex = 0;
    let interludeJustPlayed = false;
    const playNewScene = () => {
        // Occasionally we want to pause for a moment to play an interlude in silence
        const playInterlude = __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* default */].flipCoin(0.80);
        if (playInterlude && !interludeJustPlayed) {
            interludeJustPlayed = true;
            playBells();
            window.setTimeout(() => sourceSamples.forEach(samplePlayer => samplePlayer.stop(0, samplePlayer.players[0])), 15 * 1000);
            return false;
        }
        interludeJustPlayed = false;
        sampleIndex = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* getSequentialRandomIndex */])(sampleIndex, backgroundSamples.length);
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
            gapBetweenEvents: () => __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* default */].choose([25, 10]),
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
        this.config.timeBetweenEvents = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].makeFunction(this.config.timeBetweenEvents);
        this.config.gapBetweenEvents = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].makeFunction(this.config.gapBetweenEvents);
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
        const idealMelody = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].mapToDomain([0, 4, 2, 0, 7, 4, 2, 7, 7, 4, 2, 2, 4, 4, 2, 0], newNotes);
        const randomShiftAmount = Math.floor(Math.random() * (idealMelody.length));
        const initialState = [];
        for (let offset = order; offset >= 0; offset--) {
            initialState.push(idealMelody[Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* mod */])(randomShiftAmount - offset, idealMelody.length)]);
        }
        const markovMelody = Object(__WEBPACK_IMPORTED_MODULE_0__patterns__["b" /* Pmarkov */])(idealMelody, order, initialState);
        let i = 0;
        const playNextNote = (generation) => {
            const octave = Math.ceil(Math.random() * 3) + Math.ceil(Math.random() * 3) + 2;
            const nextNote = markovMelody.next().value;
            //if(nextNote !== undefined && utils.flipCoin(0.75) ) { // Sometimes probablities are zero, so we'll get an undefined next state
            if (nextNote !== undefined && __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].flipCoin(0.55)) {
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
        const coinFlipForMutate = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].flipCoin(0.25);
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
        this.oscillator.type = this.config.waveformType ? this.config.waveformType : __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].flipCoin() ? 'triangle' : 'sine';
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
        samplePlayer.player.rate(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].getRateFromFrequencies(freq, samplePlayer.baseFreq), currentlyPlayingSampleID);
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
        const closestPlayerFrequency = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].getClosestMember(freq, this.players.map(player => player.baseFreq));
        return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].findInCollection(this.players, member => member === closestPlayerFrequency);
    }
}
/* harmony default export */ __webpack_exports__["a"] = (MultiSampler);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.0.9
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

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default') {
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
 *  howler.js v2.0.9
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
      self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
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
      self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
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
              sound._panner.setPosition(pan, 0, 0);
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

            sound._panner.setPosition(x, y, z);
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

            sound._panner.setOrientation(x, y, z);
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
      sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
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

module.exports = [{"audioFile":"bollnasBus.mp3","spectrum":[{"freq":172.265625,"magnitude":-17.399746},{"freq":64.599609,"magnitude":-21.96829},{"freq":366.064453,"magnitude":-32.528049},{"freq":516.796875,"magnitude":-38.542358},{"freq":689.0625,"magnitude":-39.038445},{"freq":861.328125,"magnitude":-39.638317},{"freq":775.195312,"magnitude":-39.66655},{"freq":990.527344,"magnitude":-40.016201},{"freq":925.927734,"magnitude":-40.517895},{"freq":1098.193359,"magnitude":-41.060593},{"freq":1356.591797,"magnitude":-41.274876},{"freq":1270.458984,"magnitude":-43.702244},{"freq":1873.388672,"magnitude":-44.169426},{"freq":1528.857422,"magnitude":-45.135281},{"freq":1636.523438,"magnitude":-45.653736},{"freq":1744.189453,"magnitude":-45.790058}]},{"audioFile":"coop.mp3","spectrum":[{"freq":86.132812,"magnitude":-28.932537},{"freq":236.865234,"magnitude":-32.327995},{"freq":452.197266,"magnitude":-36.28949},{"freq":344.53125,"magnitude":-36.789261},{"freq":559.863281,"magnitude":-38.61684},{"freq":732.128906,"magnitude":-39.494778},{"freq":796.728516,"magnitude":-39.511993},{"freq":1076.660156,"magnitude":-48.423088},{"freq":1184.326172,"magnitude":-50.484188},{"freq":1248.925781,"magnitude":-50.664841},{"freq":1464.257812,"magnitude":-51.075733},{"freq":1399.658203,"magnitude":-51.329906},{"freq":1658.056641,"magnitude":-51.729897},{"freq":1851.855469,"magnitude":-53.016678},{"freq":2110.253906,"magnitude":-55.621365},{"freq":2024.121094,"magnitude":-57.550549}]},{"audioFile":"counting1.mp3","spectrum":[{"freq":193.798828,"magnitude":-26.017561},{"freq":409.130859,"magnitude":-35.475403},{"freq":602.929688,"magnitude":-43.021927},{"freq":796.728516,"magnitude":-46.480598},{"freq":7192.089844,"magnitude":-52.308483},{"freq":7235.15625,"magnitude":-52.633369},{"freq":8290.283203,"magnitude":-52.669678},{"freq":7105.957031,"magnitude":-52.945122},{"freq":6567.626953,"magnitude":-52.98806},{"freq":6503.027344,"magnitude":-53.184967},{"freq":6416.894531,"magnitude":-53.473446},{"freq":8182.617188,"magnitude":-53.531357},{"freq":5684.765625,"magnitude":-53.602531},{"freq":8139.550781,"magnitude":-54.062778},{"freq":6653.759766,"magnitude":-54.157398},{"freq":5577.099609,"magnitude":-54.469383}]},{"audioFile":"crosswalk.mp3","spectrum":[{"freq":257.8125,"magnitude":-37.666729},{"freq":820.3125,"magnitude":-41.777088},{"freq":750,"magnitude":-43.647976},{"freq":539.0625,"magnitude":-47.038448},{"freq":1382.8125,"magnitude":-47.713871},{"freq":960.9375,"magnitude":-47.815086},{"freq":1453.125,"magnitude":-49.521015},{"freq":1218.75,"magnitude":-49.886189},{"freq":2906.25,"magnitude":-50.243725},{"freq":1289.0625,"magnitude":-50.455692},{"freq":2625,"magnitude":-51.801075},{"freq":1593.75,"magnitude":-51.846096},{"freq":3023.4375,"magnitude":-52.134571},{"freq":2039.0625,"magnitude":-52.144482},{"freq":2320.3125,"magnitude":-52.657024},{"freq":1921.875,"magnitude":-53.338219}]},{"audioFile":"emptyWordsNea.mp3","spectrum":[{"freq":215.332031,"magnitude":-19.520159},{"freq":430.664062,"magnitude":-25.219025},{"freq":602.929688,"magnitude":-31.175522},{"freq":64.599609,"magnitude":-35.193279},{"freq":796.728516,"magnitude":-39.868279},{"freq":1787.255859,"magnitude":-41.391182},{"freq":882.861328,"magnitude":-42.827045},{"freq":1055.126953,"magnitude":-45.009171},{"freq":1679.589844,"magnitude":-45.019444},{"freq":1119.726562,"magnitude":-45.374962},{"freq":1571.923828,"magnitude":-45.392387},{"freq":1421.191406,"magnitude":-46.156982},{"freq":1270.458984,"magnitude":-46.377228},{"freq":1894.921875,"magnitude":-46.470295},{"freq":1485.791016,"magnitude":-47.266369},{"freq":8613.28125,"magnitude":-47.489655}]},{"audioFile":"flightLanding.mp3","spectrum":[{"freq":150.732422,"magnitude":-23.22921},{"freq":322.998047,"magnitude":-27.817633},{"freq":86.132812,"magnitude":-28.757832},{"freq":882.861328,"magnitude":-36.045925},{"freq":452.197266,"magnitude":-36.165146},{"freq":516.796875,"magnitude":-38.192909},{"freq":645.996094,"magnitude":-39.4725},{"freq":1055.126953,"magnitude":-40.918613},{"freq":990.527344,"magnitude":-40.968189},{"freq":732.128906,"magnitude":-41.37928},{"freq":796.728516,"magnitude":-41.518967},{"freq":1485.791016,"magnitude":-42.438782},{"freq":1248.925781,"magnitude":-44.283665},{"freq":1765.722656,"magnitude":-44.834751},{"freq":1162.792969,"magnitude":-45.961536},{"freq":1356.591797,"magnitude":-46.540531}]},{"audioFile":"fromBerlin.mp3","spectrum":[{"freq":129.199219,"magnitude":-19.337328},{"freq":172.265625,"magnitude":-20.061157},{"freq":236.865234,"magnitude":-21.243382},{"freq":366.064453,"magnitude":-25.249617},{"freq":409.130859,"magnitude":-25.250202},{"freq":322.998047,"magnitude":-25.32493},{"freq":473.730469,"magnitude":-25.473864},{"freq":645.996094,"magnitude":-26.291237},{"freq":602.929688,"magnitude":-26.820797},{"freq":968.994141,"magnitude":-28.423075},{"freq":796.728516,"magnitude":-28.616865},{"freq":904.394531,"magnitude":-30.327291},{"freq":1464.257812,"magnitude":-32.71851},{"freq":1184.326172,"magnitude":-33.538372},{"freq":1119.726562,"magnitude":-33.638268},{"freq":1270.458984,"magnitude":-34.200172}]},{"audioFile":"kitchen1.mp3","spectrum":[{"freq":107.666016,"magnitude":-23.018032},{"freq":150.732422,"magnitude":-23.063093},{"freq":107.666016,"magnitude":-23.683832},{"freq":150.732422,"magnitude":-23.870668},{"freq":236.865234,"magnitude":-27.578087},{"freq":236.865234,"magnitude":-28.458439},{"freq":301.464844,"magnitude":-28.528795},{"freq":301.464844,"magnitude":-29.146461},{"freq":430.664062,"magnitude":-31.122925},{"freq":430.664062,"magnitude":-31.620726},{"freq":538.330078,"magnitude":-32.279846},{"freq":538.330078,"magnitude":-32.766731},{"freq":495.263672,"magnitude":-32.782124},{"freq":495.263672,"magnitude":-32.833862},{"freq":645.996094,"magnitude":-33.121647},{"freq":645.996094,"magnitude":-33.218231}]},{"audioFile":"pendelTag.mp3","spectrum":[{"freq":236.865234,"magnitude":-16.221592},{"freq":64.599609,"magnitude":-18.688091},{"freq":409.130859,"magnitude":-20.336178},{"freq":559.863281,"magnitude":-21.620527},{"freq":624.462891,"magnitude":-23.685429},{"freq":861.328125,"magnitude":-25.067635},{"freq":925.927734,"magnitude":-25.832678},{"freq":1722.65625,"magnitude":-27.109802},{"freq":1873.388672,"magnitude":-27.189735},{"freq":1055.126953,"magnitude":-29.507767},{"freq":1248.925781,"magnitude":-29.806211},{"freq":1141.259766,"magnitude":-30.065187},{"freq":1313.525391,"magnitude":-30.253767},{"freq":1916.455078,"magnitude":-30.367163},{"freq":1421.191406,"magnitude":-31.539719},{"freq":1528.857422,"magnitude":-31.722507}]},{"audioFile":"pendelTag2.mp3","spectrum":[{"freq":301.464844,"magnitude":-28.588257},{"freq":150.732422,"magnitude":-29.29398},{"freq":366.064453,"magnitude":-31.429947},{"freq":86.132812,"magnitude":-31.997349},{"freq":689.0625,"magnitude":-32.262497},{"freq":775.195312,"magnitude":-33.855614},{"freq":559.863281,"magnitude":-34.162552},{"freq":947.460938,"magnitude":-35.370667},{"freq":861.328125,"magnitude":-36.640476},{"freq":1076.660156,"magnitude":-39.055378},{"freq":1248.925781,"magnitude":-40.740498},{"freq":1313.525391,"magnitude":-41.248177},{"freq":1442.724609,"magnitude":-43.415245},{"freq":1550.390625,"magnitude":-44.174026},{"freq":1658.056641,"magnitude":-44.426029},{"freq":2002.587891,"magnitude":-45.137405}]},{"audioFile":"sirenBirds.mp3","spectrum":[{"freq":2906.982422,"magnitude":-23.156624},{"freq":732.128906,"magnitude":-26.645731},{"freq":322.998047,"magnitude":-27.420908},{"freq":968.994141,"magnitude":-27.515535},{"freq":172.265625,"magnitude":-27.680265},{"freq":129.199219,"magnitude":-27.757851},{"freq":1937.988281,"magnitude":-29.04484},{"freq":882.861328,"magnitude":-29.5805},{"freq":602.929688,"magnitude":-29.844624},{"freq":452.197266,"magnitude":-30.23547},{"freq":538.330078,"magnitude":-30.711304},{"freq":1098.193359,"magnitude":-31.065268},{"freq":1313.525391,"magnitude":-33.923553},{"freq":2196.386719,"magnitude":-33.927032},{"freq":2131.787109,"magnitude":-35.18816},{"freq":2304.052734,"magnitude":-35.270332}]},{"audioFile":"snow.mp3","spectrum":[{"freq":64.599609,"magnitude":-29.677166},{"freq":344.53125,"magnitude":-40.347485},{"freq":602.929688,"magnitude":-44.040558},{"freq":689.0625,"magnitude":-44.897915},{"freq":925.927734,"magnitude":-48.870106},{"freq":1205.859375,"magnitude":-49.086319},{"freq":1098.193359,"magnitude":-50.976013},{"freq":1291.992188,"magnitude":-52.224236},{"freq":1421.191406,"magnitude":-53.330524},{"freq":1485.791016,"magnitude":-53.476215},{"freq":1378.125,"magnitude":-53.615837},{"freq":1636.523438,"magnitude":-54.583996},{"freq":1744.189453,"magnitude":-55.241005},{"freq":1808.789062,"magnitude":-55.726116},{"freq":1937.988281,"magnitude":-57.665276},{"freq":2024.121094,"magnitude":-59.252815}]},{"audioFile":"walkingInStreet.mp3","spectrum":[{"freq":129.199219,"magnitude":-24.899473},{"freq":258.398438,"magnitude":-30.800665},{"freq":215.332031,"magnitude":-31.003553},{"freq":64.599609,"magnitude":-32.746632},{"freq":904.394531,"magnitude":-35.545536},{"freq":602.929688,"magnitude":-35.755497},{"freq":366.064453,"magnitude":-35.907131},{"freq":839.794922,"magnitude":-36.146004},{"freq":452.197266,"magnitude":-36.174366},{"freq":689.0625,"magnitude":-36.796539},{"freq":968.994141,"magnitude":-37.352345},{"freq":1098.193359,"magnitude":-38.130184},{"freq":1184.326172,"magnitude":-38.222878},{"freq":1141.259766,"magnitude":-38.283627},{"freq":1399.658203,"magnitude":-41.17009},{"freq":1787.255859,"magnitude":-43.650486}]}]

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZGE3YmNlZGI2MzNhNDQ3YWVkMiIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ducy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhdHRlcm5zLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXJrb3ZuL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9HZW5ldGljLnRzIiwid2VicGFjazovLy8uL3NyYy9TeW50aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm9pc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL011bHRpU2FtcGxlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG93bGVyL2Rpc3QvaG93bGVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwZWN0cmFsRGF0YS5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDNURBLE1BQU0sS0FBSyxHQUFHO0lBQ1osSUFBSSxFQUFFLENBQUMsSUFBWSxFQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUc7SUFFNUQsSUFBSSxFQUFFLENBQUMsSUFBWSxFQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxHQUFHLENBQUMsR0FBQyxFQUFFO0lBRXRELE1BQU0sRUFBRSxDQUFDLEtBQWlCLEVBQU8sRUFBRTtRQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFJRCxzQkFBc0IsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQVUsRUFBRTtRQUNqRCxNQUFNLENBQUMsSUFBSSxHQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbkMsTUFBTSxZQUFZLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUNyQyxNQUFNLGVBQWUsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBRXpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLGVBQWUsQ0FBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsWUFBWSxDQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pGLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxFQUFFO1FBQ2xELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDNUYsQ0FBQztJQUVELFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUMzQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sV0FBVyxHQUFHLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBRSxDQUFDO1FBQ2xFLE1BQU0sUUFBUSxHQUFHLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBRSxDQUFDO1FBRXpELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFFLENBQUMsQ0FBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxXQUFXLENBQUUsR0FBRyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNySSxDQUFDO0lBRUQsUUFBUSxFQUFFLENBQUMsV0FBVyxHQUFDLEdBQUcsRUFBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtJQUVwRixZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQVksRUFBRTtRQUNoQyxFQUFFLEVBQUMsT0FBTyxLQUFLLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztDQUVGLENBQUM7eURBRWEsS0FBSyxFQUFDO0FBRWQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxPQUFzQixFQUFVLEVBQUU7SUFDdkQsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUVoRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDO0lBQzNDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUVsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN4QyxTQUFTLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLFNBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBQUE7QUFBQTtBQUVLLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBYyxFQUFZLEVBQUU7SUFDcEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25GLENBQUMsQ0FBQztBQUFBO0FBQUE7QUFFSyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQVcsRUFBRTtJQUM1QyxrQ0FBa0M7SUFDbEMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzQyx3Q0FBd0M7SUFDeEMsNkJBQTZCO0lBQzdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN2QyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekIsNENBQTRDO1FBQzVDLDZCQUE2QjtRQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFFRCxrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFBQTtBQUFBO0FBRUssTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQUE7QUFBQTtBQUU5RCxNQUFNLHdCQUF3QixHQUFHLENBQUUsU0FBaUIsRUFBRSxNQUFjLEVBQVcsRUFBRTtJQUN0RixNQUFNLGVBQWUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQztJQUVyRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUM7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHNEM7QUFDbEI7QUFDSTtBQUNVO0FBRWQ7QUFDdUI7QUFFSjtBQUk5QyxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQWU7SUFDaEMsVUFBVSxFQUFFLFVBQVU7Q0FDdkIsQ0FBQztBQUVGLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBbUIsRUFBRSxFQUFFO0lBQ2xDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxtQkFBSyxhQUFhLEVBQUssTUFBTSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFFaEUsTUFBTSxpQkFBaUIsR0FBUSwwREFBWSxDQUFDO0lBRTVDLFFBQVE7SUFDUixNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDMUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVuQyxNQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUM5RCxJQUFJLHVEQUFLLENBQUMsT0FBTyxDQUFDLENBQ25CLENBQUM7SUFFRixNQUFNLGdCQUFnQixHQUFHO1FBQ3ZCLE9BQU8sRUFBRTtZQUNQLDREQUE0RDtZQUM1RCw0REFBNEQ7WUFDNUQsRUFBRSxLQUFLLEVBQUUsQ0FBRSxNQUFNLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDekQsRUFBRSxLQUFLLEVBQUUsQ0FBRSxNQUFNLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDekQsRUFBRSxLQUFLLEVBQUUsQ0FBRSxNQUFNLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUM5RCxFQUFFLEtBQUssRUFBRSxDQUFFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO1NBQy9EO0tBQ0YsQ0FBQztJQUNGLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsdURBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSw4REFBWSxDQUFFLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLHVEQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6SixNQUFNLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLDhEQUFZLENBQUMsT0FBTyxFQUFFO1FBQ25GLE9BQU8sRUFBRTtZQUNQLEVBQUUsS0FBSyxFQUFFLENBQUUsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtTQUNqRTtLQUNGLENBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUUsR0FBRyxFQUFFLENBQ3ZDLElBQUkscURBQUssQ0FBQyxPQUFPLENBQUMsQ0FDbkIsQ0FBQztJQUVGLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUNyQixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEIsS0FBSyxDQUFDLE9BQU8sQ0FBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixNQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0MsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDUixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDaEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTO2dCQUMxQixHQUFHLEVBQUUsR0FBRztnQkFDUixJQUFJLEVBQUUsUUFBUTthQUNmLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLDRFQUE0RTtJQUNoSSxDQUFDLENBQUM7SUFFRixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFFcEIsSUFBSSxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDaEMsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLDZFQUE2RTtRQUM3RSxNQUFNLGFBQWEsR0FBRyx1REFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQyxFQUFFLEVBQUMsYUFBYSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLG1CQUFtQixHQUFHLElBQUksQ0FBQztZQUMzQixTQUFTLEVBQUUsQ0FBQztZQUNaLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQ3JCLGFBQWEsQ0FBQyxPQUFPLENBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsRUFDdEYsRUFBRSxHQUFHLElBQUksQ0FDVixDQUFDO1lBRUYsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFFRCxtQkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDNUIsV0FBVyxHQUFHLGdGQUF3QixDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RSwrSUFBK0k7UUFDL0ksTUFBTSxnQkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUM7UUFFNUYsMEVBQTBFO1FBQzFFLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLFFBQVE7YUFDckMsTUFBTSxDQUFFLENBQUMsS0FBaUIsRUFBRSxHQUFhLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7YUFDakksR0FBRyxDQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzthQUNyQixHQUFHLENBQUUsQ0FBRSxhQUFxQixFQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEcsTUFBTSxRQUFRLEdBQUcsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUM7Z0JBQ2xELE1BQU0sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQzVCLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDSixNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2xCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDRCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRVAsTUFBTSxXQUFXLEdBQWlCO1lBQ2hDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEdBQUcsQ0FDdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNkLEtBQUssQ0FBQyxFQUFFO2dCQUNOLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDO1lBQ2pGLENBQUMsQ0FDRixDQUNGO1lBQ0QsY0FBYyxFQUFFLEVBQUU7WUFDbEIsY0FBYyxFQUFFLENBQUM7WUFDakIsTUFBTTtZQUNOLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDbEQsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsdURBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0MsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixRQUFRLEVBQUUsWUFBWTtTQUN2QjtRQUVELGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUUzRSxrQkFBa0I7UUFDbEIsSUFBSSxxREFBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUMsQ0FBQztJQUVGLGlCQUFpQjtJQUNqQixTQUFTLEVBQUUsQ0FBQztBQUVkLENBQUMsQ0FBQzsrREFFYSxHQUFHLEVBQUM7QUFDSjs7Ozs7Ozs7OztBQzNJZ0M7QUFJakI7QUFDRjtBQW1CdEI7SUFNSixZQUFtQixNQUFvQjtRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixHQUFHLHVEQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLHVEQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsS0FBSyxHQUFHLG1FQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN6QyxDQUFDO0lBRU0sSUFBSTtRQUNULE1BQU0sT0FBTyxHQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2xELE1BQU0sUUFBUSxHQUFhLE9BQU8sQ0FBQztRQUVuQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN2QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7WUFBQyxDQUFDLEVBQUUsQ0FBQztZQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFbEQsdUVBQXVFO1FBQ3ZFLEVBQUUsRUFBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEYsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLFVBQVUsQ0FBRSxLQUFLLEVBQUUsVUFBVTtRQUNuQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDaEIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXZCLGdGQUFnRjtRQUNoRixNQUFNLFdBQVcsR0FBRyx1REFBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25GLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUUzRSxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDeEIsR0FBRyxFQUFDLElBQUksTUFBTSxHQUFHLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUM7WUFDOUMsWUFBWSxDQUFDLElBQUksQ0FBRSxXQUFXLENBQUMsMkRBQUcsQ0FBQyxpQkFBaUIsR0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRixDQUFDO1FBRUQsTUFBTSxZQUFZLEdBQUcsa0VBQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBRSxDQUFDO1FBRWhFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLE1BQU0sWUFBWSxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDbEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFFM0MsZ0lBQWdJO1lBQ2hJLEVBQUUsRUFBQyxRQUFRLEtBQUssU0FBUyxJQUFJLHVEQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkQsd0NBQXdDO2dCQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDM0UsSUFBSSxFQUFFLFFBQVEsR0FBQyxNQUFNO29CQUNyQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDN0IsR0FBRyxFQUFFLENBQUM7b0JBQ04sR0FBRyxFQUFFLElBQUk7aUJBQ1YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNELENBQUMsRUFBRSxDQUFDO1lBRUosTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JCLEVBQUUsRUFBQyxVQUFVLEtBQUssSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pHLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFRCxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFM0IsQ0FBQztJQUVPLFVBQVU7UUFDaEIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUU5QyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztRQUUzRCxNQUFNLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRjtBQUFBO0FBQUE7Ozs7Ozs7O0FDekhEO0FBQUE7O0dBRUc7QUFFSCxNQUFNLE1BQU0sR0FBRyxtQkFBTyxDQUFDLENBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNOO0FBRzdCLE1BQU0sT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUFBO0FBQUE7QUFFMUQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sTUFBa0IsRUFBRSxXQUFtQjtJQUN4RSxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7SUFDdEIsSUFBSSxNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV4RCxFQUFFLEVBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsT0FBTSxJQUFJLEVBQUUsQ0FBQztZQUNYLE1BQU0sTUFBTSxFQUFFLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7SUFDRCxJQUFJLENBQUMsQ0FBQztRQUNKLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sTUFBTSxFQUFFLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDLENBQUM7QUFBQTtBQUFBO0FBRUssTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sTUFBa0IsRUFBRSxXQUFtQjtJQUUxRSxJQUFJLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFMUUsRUFBRSxFQUFDLFdBQVcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE9BQU0sSUFBSSxFQUFFLENBQUM7WUFDWCxNQUFNLE1BQU0sRUFBRSxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBSSxDQUFDLENBQUM7UUFDSixHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoQyxNQUFNLE1BQU0sRUFBRSxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBQUE7QUFBQTtBQUVLLE1BQU0sT0FBTyxHQUFHLGlCQUFpQixJQUFXLEVBQUUsS0FBYSxFQUFFLFlBQW1CO0lBQ3JGLE1BQU0sV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUU1QyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUM7QUFBQTtBQUFBO0FBRUssTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFVBQVUsZUFBMkIsRUFBRSxJQUFjO0lBQ3BGLElBQUksT0FBTyxHQUFZLElBQUkseURBQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFMUQsSUFBSSxTQUFTLEdBQWEsSUFBSSxDQUFDO0lBRS9CLE9BQU0sSUFBSSxFQUFFLENBQUM7UUFDWCxJQUFJLFNBQVMsR0FBUSxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJELFNBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXZELE1BQU0sU0FBUyxDQUFDO0lBQ2xCLENBQUM7QUFDSCxDQUFDLENBQUM7QUFBQTtBQUFBOzs7Ozs7O0FDNURGLGVBQWUsaUpBQTZMLCtDQUErQyxtQkFBbUIsU0FBUyxjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsdUNBQXVDLHFDQUFxQyxvQkFBb0IsRUFBRSxpQkFBaUIsNEZBQTRGLGVBQWUsd0NBQXdDLFNBQVMsRUFBRSxtQkFBbUIsOEJBQThCLHFEQUFxRCwwQkFBMEIsNkNBQTZDLHNCQUFzQiw2REFBNkQsWUFBWSxlQUFlLFNBQVMsaUJBQWlCLGlDQUFpQyxpQkFBaUIsWUFBWSxVQUFVLHNCQUFzQixtQkFBbUIsaURBQWlELGlCQUFpQixrQkFBa0IsYUFBYSxPQUFPLFlBQVksaURBQWlELFlBQVksV0FBVyw2Q0FBNkMsT0FBTywyQkFBMkIsc0NBQXNDLFdBQVcsb0VBQW9FLCtCQUErQixZQUFZLFdBQVcsS0FBSyxXQUFXLHdCQUF3QixTQUFTLG9CQUFvQixxQ0FBcUMsU0FBUyw2QkFBNkIsU0FBUyxFQUFFLGtDQUFrQyxXQUFXLFlBQVksS0FBSywrQkFBK0IsbUJBQW1CLGVBQWUsZUFBZSw4QkFBOEIsUUFBUSxpQkFBaUIsMERBQTBELFlBQVksSUFBSSw4QkFBOEIsdURBQXVELDRCQUE0QixnRUFBZ0UsU0FBUyxZQUFZLDJCQUEyQixLQUFLLFNBQVMsWUFBWSx5QkFBeUIsY0FBYyxVQUFVLFlBQVksV0FBVyxLQUFLLFNBQVMsWUFBWSxLQUFLLCtCQUErQiw4RkFBOEYsVUFBVSxrQkFBa0IsZ0JBQWdCLDZFQUE2RSwwQkFBMEIsY0FBYyxzQkFBc0IsRUFBRSx3Q0FBd0MsNkNBQTZDLFlBQVksR0FBRyxFOzs7Ozs7Ozs7QUNDcHBGO0FBRzVCO0lBTUUsWUFBWSxlQUEyQixFQUFFLElBQWM7UUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQzdGLENBQUM7SUFHRCwwREFBMEQ7SUFDMUQscUJBQXFCLENBQUMsVUFBb0IsRUFBRSxJQUFjO1FBQ3hELElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtRQUN6QyxJQUFJLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUUsQ0FBQztRQUVwRyxHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUMsb0JBQW9CLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDckQsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsYUFBYTtJQUNiLG1GQUFtRjtJQUNuRixvQkFBb0IsQ0FBQyxNQUFnQixFQUFFLFVBQXNCO1FBRTNELElBQUksbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBRTVCLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxDQUFDLElBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDckMsRUFBRSxFQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztZQUMxQixDQUFDO1lBRUQsMkRBQTJEO1lBQzNELEVBQUUsRUFBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRS9CLG1CQUFtQixHQUFHLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25FLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSx1QkFBdUIsR0FBVyxDQUFDLENBQUM7UUFDeEMsTUFBTSxrQkFBa0IsR0FBVyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUcvRCxNQUFNLGlCQUFpQixHQUFHLHVEQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLEVBQUUsRUFBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDckIsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxDQUFDLElBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3JDLHVEQUF1RDtnQkFDdkQsRUFBRSxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7b0JBRXBDLEVBQUUsRUFBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQyx1QkFBdUIsR0FBRyxDQUFDLENBQUM7b0JBQzlCLENBQUM7b0JBRUQsMkRBQTJEO29CQUMzRCxFQUFFLEVBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUUvQix1QkFBdUIsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0UsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsRUFBRSxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBRSxDQUFDO0lBQ2pGLENBQUM7SUFFRCwwQ0FBMEM7SUFDMUMseUdBQXlHO0lBQ3pHLGVBQWUsQ0FBQyxPQUFtQjtRQUVqQyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhGLG1DQUFtQztRQUNuQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsc0JBQXNCLENBQUMsU0FBbUIsRUFBRSxTQUFtQjtRQUM3RCxNQUFNLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEQsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2xELG1CQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQztRQUVELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsbUJBQW1CLENBQUMsU0FBbUIsRUFBRSxTQUFtQjtRQUMxRCxNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLE9BQU8sR0FBRyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEYsTUFBTSxVQUFVLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTVELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1FBRTNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkRBQTJEO0lBQzNELFdBQVcsQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUNyQyxJQUFJLE1BQU0sR0FBVyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWxDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQU1ELDhEQUE4RDtJQUM5RCxtQkFBbUIsQ0FBQyxVQUFzQixFQUFFLElBQWM7UUFDeEQsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUMsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELGlCQUFpQixDQUFDLFVBQXNCLEVBQUUsSUFBYztRQUN0RCxNQUFNLGdCQUFnQixHQUFZLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0UsTUFBTSxpQkFBaUIsR0FBYyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDN0YsTUFBTSxjQUFjLEdBQWMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTFFLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRixDQUFDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLGNBQWMsQ0FBQyxDQUFDO1FBQzFELHNEQUFzRDtRQUN0RCxNQUFNLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWU7UUFDMUIsNkNBQTZDO1FBRTdDLE1BQU0sU0FBUyxHQUFhLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvRSxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxZQUFzQjtZQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztZQUU5QixPQUFNLElBQUksRUFBRSxDQUFDO2dCQUNYLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFFM0IsTUFBTSxTQUFTLENBQUM7WUFDbEIsQ0FBQztRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7Q0FFRjtBQUFBLENBQUM7QUFFaUI7Ozs7Ozs7O0FDOUtuQjtBQUFBLG1GQUFtRjtBQUNuRixNQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxFQUFFO0lBQ25DLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzlDLFNBQVMsR0FBRyxLQUFLLEVBQ2pCLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFDbkMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUNuQixDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsQ0FBQztJQUNKLEdBQUcsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDO1FBQzVCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDMUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ3RFLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBSTBCO0FBTTVCO0lBUUUsWUFBWSxPQUFPLEVBQUUsTUFBc0I7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDbEQsZ0ZBQWdGO1FBRWhGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyx1REFBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNwSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBaUI7UUFDM0IsTUFBTSxFQUFDLElBQUksR0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFDLENBQUMsRUFBRSxHQUFHLEdBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBQyxDQUFDLEVBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVosSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFdkMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBRSxDQUFDO1FBQ2pGLDJDQUEyQztRQUMzQyxFQUFFLEVBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUFDLElBQUksR0FBRyxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2hDLEVBQUUsRUFBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQUMsSUFBSSxHQUFHLElBQUksR0FBQyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksR0FBRyxJQUFJLENBQUUsQ0FBQztRQUd6SCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUVoQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLElBQUksQ0FBQyxJQUFJO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLEdBQUMsR0FBRyxDQUFFLENBQUM7UUFDM0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBRSxJQUFJLEdBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQztRQUU5RCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUVGO0FBRUQseURBQWUsS0FBSyxFQUFDOzs7Ozs7OztBQzFGckI7QUFBQSxtRkFBbUY7QUFDbkYsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsRUFBRTtJQUNuQyxJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUM5QyxTQUFTLEdBQUcsS0FBSyxFQUNqQixLQUFLLEdBQUcsSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQ25DLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFDbkIsQ0FBQyxHQUFHLENBQUMsRUFDTCxDQUFDLENBQUM7SUFDSixHQUFHLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQztRQUM1QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFFLENBQUMsR0FBRyxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztJQUN0RSxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQztBQVVGLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQztBQUN4QixNQUFNLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxFQUFFO0lBQ3BDLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNsQixJQUFJLElBQUksR0FBRyxZQUFZLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVMsQ0FBQztRQUM1QixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUM5QyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxnQ0FBZ0M7UUFDdEQsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGO0lBVUUsWUFBWSxPQUFPLEVBQUUsTUFBc0I7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsZ0ZBQWdGO1FBRWhGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBRS9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUVsQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEQsc0hBQXNIO1FBQ3RILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFpQjtRQUMzQixNQUFNLEVBQUMsSUFBSSxHQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFDLENBQUMsRUFBQyxHQUFHLEdBQUcsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFWixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7UUFDZix5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFN0IsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBRSxDQUFDO1FBQ2pGLDJDQUEyQztRQUMzQyxFQUFFLEVBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUFDLElBQUksR0FBRyxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRzdGLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUVsRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLElBQUk7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBRSxDQUFDO1FBQ3ZFLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBRUY7QUFFZ0I7Ozs7Ozs7Ozs7O0FDbkhtQjtBQUNSO0FBUTVCO0lBTUUsWUFBWSxPQUFPLEVBQUUsR0FBMkI7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSw0Q0FBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBRSxDQUFDO0lBQ2pJLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBaUI7UUFDM0IsTUFBTSxFQUFDLElBQUksR0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFDLENBQUMsRUFBRSxHQUFHLEdBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBQyxDQUFDLEVBQUMsR0FBRyxHQUFHLENBQUM7UUFFN0MsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFFLElBQUksQ0FBRSxDQUFDO1FBQzFELE1BQU0sd0JBQXdCLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1RCxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxLQUFLLEVBQUUsd0JBQXdCLENBQUUsQ0FBQztRQUM1RCxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSx1REFBSyxDQUFDLHNCQUFzQixDQUFFLElBQUksRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFFLEVBQUUsd0JBQXdCLENBQUUsQ0FBQztRQUNsSCwyQ0FBMkM7UUFDM0MsRUFBRSxFQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFBQyxJQUFJLEdBQUcsSUFBSSxHQUFDLEdBQUcsQ0FBQztRQUMvQixZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsd0JBQXdCLENBQUUsQ0FBQztRQUN6RSxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxHQUFHLEVBQUUsd0JBQXdCLENBQUUsQ0FBQztRQUc1RCxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ2hCLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSx3QkFBd0IsQ0FBRSxDQUFDO1lBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSx3QkFBd0IsQ0FBRSxDQUFDO1FBQzNELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBRSxJQUFJLEdBQUcsSUFBSSxDQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyw2Q0FBNkM7UUFFbkYsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSx3QkFBd0I7UUFDdEQsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNoQixZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyw2Q0FBNkM7UUFFakUsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyx1QkFBdUIsQ0FBRSxJQUFXO1FBQzFDLHVIQUF1SDtRQUN2SCxNQUFNLHNCQUFzQixHQUFHLHVEQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFFLENBQUM7UUFDM0csTUFBTSxDQUFDLHVEQUFLLENBQUMsZ0JBQWdCLENBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxzQkFBc0IsQ0FBRSxDQUFDO0lBQzdGLENBQUM7Q0FDRjtBQUVELHlEQUFlLFlBQVksRUFBQzs7Ozs7Ozs4Q0N6RDVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QixnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsY0FBYztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsTUFBTTtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQSxpREFBaUQ7QUFDakQsZ0RBQWdEO0FBQ2hELGdEQUFnRDtBQUNoRCxnREFBZ0Q7QUFDaEQsZ0RBQWdEO0FBQ2hELGtEQUFrRDtBQUNsRCxtREFBbUQsdUNBQXVDLHVDQUF1QztBQUNqSSxtREFBbUQsdUNBQXVDLHVDQUF1QztBQUNqSSxrREFBa0Q7QUFDbEQsa0RBQWtEO0FBQ2xELGtEQUFrRDtBQUNsRCxxREFBcUQsd0NBQXdDO0FBQzdGOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDLGtDQUFrQyxhQUFhO0FBQy9DLGtDQUFrQyxhQUFhO0FBQy9DLDRDQUE0QyxrQkFBa0I7QUFDOUQsNENBQTRDLGtCQUFrQjtBQUM5RCxvQ0FBb0MsY0FBYztBQUNsRCxrQ0FBa0MsYUFBYTtBQUMvQyxrQ0FBa0MsYUFBYTtBQUMvQyxrQ0FBa0MsYUFBYTtBQUMvQyxzQ0FBc0MsZUFBZTtBQUNyRCxrQ0FBa0MsYUFBYTtBQUMvQyxrQ0FBa0MsYUFBYTtBQUMvQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxLQUFLO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixjQUFjO0FBQzlCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsR0FBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQixjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxLQUFLO0FBQ25CLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsMENBQTBDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLGNBQWM7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLE1BQU07QUFDMUM7QUFDQTs7QUFFQTtBQUNBOztB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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDdDFGRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7OztBQ3BCQSxtQkFBbUIsMENBQTBDLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsb0NBQW9DLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUseUNBQXlDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUseUNBQXlDLHVDQUF1QyxFQUFFLHVDQUF1QyxFQUFFLGtDQUFrQyxFQUFFLHVDQUF1QyxFQUFFLHdDQUF3QyxFQUFFLHVDQUF1QyxFQUFFLHVDQUF1QyxFQUFFLHNDQUFzQyxFQUFFLHNDQUFzQyxFQUFFLHdDQUF3QyxFQUFFLG1DQUFtQyxFQUFFLHNDQUFzQyxFQUFFLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHVDQUF1QyxFQUFFLEVBQUUsNkNBQTZDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLEVBQUUsNkNBQTZDLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsMENBQTBDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsd0NBQXdDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLEVBQUUseUNBQXlDLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsMENBQTBDLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsMENBQTBDLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsb0NBQW9DLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHVDQUF1QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsK0NBQStDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLEMiLCJmaWxlIjoid25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJXTlNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiV05TXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIldOU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmRhN2JjZWRiNjMzYTQ0N2FlZDIiLCJcbmNvbnN0IHV0aWxzID0ge1xuICBtdG9mOiAobm90ZTogbnVtYmVyKTogbnVtYmVyID0+IE1hdGgucG93KDIsIChub3RlKS8xMikgKiA0NDAsXG5cbiAgZnRvbTogKG5vdGU6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLnNxcnQobm90ZS80NDApLzEyLFxuXG4gIGNob29zZTogKGFycmF5OiBBcnJheTxhbnk+KTogYW55ID0+IHtcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG4gIH0sXG5cblxuXG4gIGdldFJhdGVGcm9tRnJlcXVlbmNpZXM6IChmcmVxLCBiYXNlRnJlcSk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIGZyZXEvYmFzZUZyZXE7XG4gIH0sXG5cbiAgZ2V0Q2xvc2VzdE1lbWJlcjogKHN1YmplY3QsIHNldCkgPT4ge1xuICAgIHJldHVybiBzZXQucmVkdWNlKCAoYWNjdW0sIG1lbWJlcikgPT4ge1xuICAgICAgY29uc3QgcHJldkRpc3RhbmNlID0gYWNjdW0gLSBzdWJqZWN0O1xuICAgICAgY29uc3QgY3VycmVudERpc3RhbmNlID0gbWVtYmVyIC0gc3ViamVjdDtcblxuICAgICAgcmV0dXJuIE1hdGguYWJzKCBjdXJyZW50RGlzdGFuY2UgKSA8IE1hdGguYWJzKCBwcmV2RGlzdGFuY2UgKSA/IG1lbWJlciA6IGFjY3VtO1xuICAgIH0sIHNldFswXSk7XG4gIH0sXG5cbiAgZmluZEluQ29sbGVjdGlvbjogKGNvbGxlY3Rpb24sIHByZWRpY2F0ZUZ1bmN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24ucmVkdWNlKCAoYWNjdW0sIG1lbWJlcikgPT4gcHJlZGljYXRlRnVuY3Rpb24obWVtYmVyKSA/IG1lbWJlciA6IGFjY3VtICk7XG4gIH0sXG5cbiAgbWFwVG9Eb21haW46IChzZXQsIGRvbWFpbikgPT4ge1xuICAgIGNvbnN0IHNldE9mZnNldCA9IE1hdGgubWluKC4uLmRvbWFpbikgLSBNYXRoLm1pbiguLi5zZXQpO1xuICAgIGNvbnN0IGRvbWFpblJhbmdlID0gKCBNYXRoLm1heCguLi5kb21haW4pIC0gTWF0aC5taW4oLi4uZG9tYWluKSApO1xuICAgIGNvbnN0IHNldFJhbmdlID0gKCBNYXRoLm1heCguLi5zZXQpIC0gTWF0aC5taW4oLi4uc2V0KSApO1xuXG4gICAgcmV0dXJuIHNldC5tYXAoIG1lbWJlciA9PiB1dGlscy5nZXRDbG9zZXN0TWVtYmVyKCAoKCAobWVtYmVyIC0gTWF0aC5taW4oLi4uc2V0KSkgLyBzZXRSYW5nZSkgKiBkb21haW5SYW5nZSApICsgc2V0T2Zmc2V0LCBkb21haW4pKTtcbiAgfSxcblxuICBmbGlwQ29pbjogKHByb2JhYmlsaXR5PTAuNSk6IGJvb2xlYW4gPT4gKE1hdGgucmFuZG9tKCkgPCBwcm9iYWJpbGl0eSkgPyBmYWxzZSA6IHRydWUsXG5cbiAgbWFrZUZ1bmN0aW9uOiAodmFsdWUpOiBGdW5jdGlvbiA9PiB7XG4gICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gKCkgPT4gdmFsdWU7XG4gICAgfVxuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuXG5leHBvcnQgY29uc3Qgd2luZGV4ID0gKHdlaWdodHM6IEFycmF5PG51bWJlcj4pOiBudW1iZXIgPT4ge1xuICBsZXQgc3VtT2ZXZWlnaHRzID0gd2VpZ2h0cy5yZWR1Y2UoIChwcmV2LCBjdXJyKSA9PiBwcmV2ICsgY3Vycik7XG5cbiAgbGV0IHJhbmROdW0gPSBNYXRoLnJhbmRvbSgpICogc3VtT2ZXZWlnaHRzO1xuICBsZXQgd2VpZ2h0U3VtID0gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdlaWdodHMubGVuZ3RoOyBpKyspIHtcbiAgICB3ZWlnaHRTdW0gKz0gd2VpZ2h0c1tpXTtcbiAgICB3ZWlnaHRTdW0gPSArd2VpZ2h0U3VtLnRvRml4ZWQoMik7XG5cbiAgICBpZiAocmFuZE51bSA8PSB3ZWlnaHRTdW0pIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZSA9IChjb2xsOiBudW1iZXJbXSk6IG51bWJlcltdID0+IHtcbiAgbGV0IGNvbGxTdW0gPSBjb2xsLnJlZHVjZSgoYSxiKSA9PiBhK2IpO1xuICByZXR1cm4gY29sbFN1bSA+IDAgPyBjb2xsLm1hcCggKHdlaWdodCkgPT4gd2VpZ2h0IC8gY29sbFN1bSkgOiBjb2xsLm1hcCgoKSA9PiAwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0VxdWl2YWxlbnQgPSAoYSwgYik6IGJvb2xlYW4gPT4ge1xuICAvLyBDcmVhdGUgYXJyYXlzIG9mIHByb3BlcnR5IG5hbWVzXG4gIHZhciBhUHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhKTtcbiAgdmFyIGJQcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGIpO1xuXG4gIC8vIElmIG51bWJlciBvZiBwcm9wZXJ0aWVzIGlzIGRpZmZlcmVudCxcbiAgLy8gb2JqZWN0cyBhcmUgbm90IGVxdWl2YWxlbnRcbiAgaWYgKGFQcm9wcy5sZW5ndGggIT0gYlByb3BzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYVByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHByb3BOYW1lID0gYVByb3BzW2ldO1xuXG4gICAgLy8gSWYgdmFsdWVzIG9mIHNhbWUgcHJvcGVydHkgYXJlIG5vdCBlcXVhbCxcbiAgICAvLyBvYmplY3RzIGFyZSBub3QgZXF1aXZhbGVudFxuICAgIGlmIChhW3Byb3BOYW1lXSAhPT0gYltwcm9wTmFtZV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBtYWRlIGl0IHRoaXMgZmFyLCBvYmplY3RzXG4gIC8vIGFyZSBjb25zaWRlcmVkIGVxdWl2YWxlbnRcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgbW9kID0gKG51bSwgbW9kdWxvKSA9PiAobnVtICUgbW9kdWxvICsgbW9kdWxvKSAlIG1vZHVsbztcblxuZXhwb3J0IGNvbnN0IGdldFNlcXVlbnRpYWxSYW5kb21JbmRleCA9ICggbGFzdEluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyICk6IG51bWJlciA9PiB7XG4gIGNvbnN0IHBvc3NpYmxlSW5kZXhlcyA9IEFycmF5KGxlbmd0aCkuZmlsbCgwKS5tYXAoIChpdGVtLGkpID0+IGkpLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGxhc3RJbmRleCk7XG5cbiAgcmV0dXJuIHV0aWxzLmNob29zZShwb3NzaWJsZUluZGV4ZXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy50cyIsImltcG9ydCB7IFNjZW5lLCBJU2NlbmVDb25maWcgfSBmcm9tICcuL1NjZW5lJztcbmltcG9ydCBTeW50aCBmcm9tICcuL1N5bnRoJztcbmltcG9ydCB7IE5vaXNlIH0gZnJvbSAnLi9Ob2lzZSc7XG5pbXBvcnQgTXVsdGlTYW1wbGVyIGZyb20gJy4vTXVsdGlTYW1wbGVyJztcbmltcG9ydCB7SUZyZXFCaW59IGZyb20gJy4uL3Rvb2xzL3NwZWN0cnVtUGVha1BhcnNlcic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBnZXRTZXF1ZW50aWFsUmFuZG9tSW5kZXggfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHNwZWN0cmFsRGF0YSBmcm9tICcuL3NwZWN0cmFsRGF0YS5qc29uJztcblxuZXhwb3J0IGludGVyZmFjZSBJV05TQ29uZmlnIHtcbiAgc2FtcGxlUGF0aDogc3RyaW5nXG59O1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBJV05TQ29uZmlnID0ge1xuICBzYW1wbGVQYXRoOiBcInNhbXBsZXMvXCIsXG59O1xuXG5jb25zdCBXTlMgPSAoY29uZmlnPzogSVdOU0NvbmZpZykgPT4ge1xuICBjb25maWcgPSBjb25maWcgPyB7Li4uZGVmYXVsdENvbmZpZywgLi4uY29uZmlnfSA6IGRlZmF1bHRDb25maWc7XG5cbiAgY29uc3QgYmFja2dyb3VuZFNhbXBsZXMgPSA8YW55PnNwZWN0cmFsRGF0YTtcblxuICAvLyBTZXR1cFxuICBjb25zdCBwb3B1bGF0aW9uU2l6ZSA9IDE2O1xuICBjb25zdCBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gIGNvbnN0IGNob3JkT3NjaWxsYXRvcnMgPSBBcnJheShwb3B1bGF0aW9uU2l6ZSkuZmlsbCgwKS5tYXAoKCkgPT5cbiAgICBuZXcgU3ludGgoY29udGV4dClcbiAgKTtcblxuICBjb25zdCBtdWx0aVNhbXBsZXJPcHRzID0ge1xuICAgIHNhbXBsZXM6IFtcbiAgICAgIC8veyBmaWxlczogWyBjb25maWcuc2FtcGxlUGF0aCArIFwicGlwZUcubXAzXCIgXSwgZnJlcTogMTk5IH0sXG4gICAgICAvL3sgZmlsZXM6IFsgY29uZmlnLnNhbXBsZVBhdGggKyBcInBpcGVELm1wM1wiIF0sIGZyZXE6IDMwNiB9LFxuICAgICAgeyBmaWxlczogWyBjb25maWcuc2FtcGxlUGF0aCArIFwicGlwZUEubXAzXCIgXSwgZnJlcTogNDQ1IH0sXG4gICAgICB7IGZpbGVzOiBbIGNvbmZpZy5zYW1wbGVQYXRoICsgXCJwaXBlRS5tcDNcIiBdLCBmcmVxOiA2NjYgfSxcbiAgICAgIHsgZmlsZXM6IFsgY29uZmlnLnNhbXBsZVBhdGggKyBcInBpYW5vMi0zMjQubXAzXCIgXSwgZnJlcTogMzI0IH0sXG4gICAgICB7IGZpbGVzOiBbIGNvbmZpZy5zYW1wbGVQYXRoICsgXCJwaWFubzMtODE0Lm1wM1wiIF0sIGZyZXE6IDgxNCB9LFxuICAgIF0sXG4gIH07XG4gIGNvbnN0IG1lbG9keU9zY2lsbGF0b3JzID0gQXJyYXkocG9wdWxhdGlvblNpemUpLmZpbGwoMCkubWFwKCgpID0+IHV0aWxzLmZsaXBDb2luKCkgPyBuZXcgTXVsdGlTYW1wbGVyKCBjb250ZXh0LCBtdWx0aVNhbXBsZXJPcHRzICkgOiBuZXcgU3ludGgoY29udGV4dCkpO1xuICBjb25zdCBzb3VyY2VTYW1wbGVzID0gYmFja2dyb3VuZFNhbXBsZXMubWFwKCBzYW1wbGVEYXRhID0+IG5ldyBNdWx0aVNhbXBsZXIoY29udGV4dCwge1xuICAgIHNhbXBsZXM6IFtcbiAgICAgIHsgZmlsZXM6IFsgY29uZmlnLnNhbXBsZVBhdGggKyBzYW1wbGVEYXRhLmF1ZGlvRmlsZSBdLCBmcmVxOiAxIH0sXG4gICAgXSxcbiAgfSkpO1xuXG4gIGNvbnN0IGJlbGxzID0gQXJyYXkoMikuZmlsbCgwKS5tYXAoICgpID0+XG4gICAgbmV3IE5vaXNlKGNvbnRleHQpXG4gICk7XG5cbiAgY29uc3QgcGxheUJlbGxzID0gKCkgPT4ge1xuICAgIGNvbnN0IGR1cmF0aW9uID0gNDU7XG4gICAgYmVsbHMuZm9yRWFjaCggKGJlbGwsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJhbmRvbU11bCA9IChNYXRoLnJhbmRvbSgpICogMC4yNSkgKyAxO1xuICAgICAgY29uc3QgZnJlcXMgPSBbMjA5MCwgMjM5M107XG4gICAgICBiZWxsLnBsYXkoe1xuICAgICAgICBwYW46IChpICogMikgLSAxLFxuICAgICAgICBmcmVxOiBmcmVxc1tpXSAqIHJhbmRvbU11bCxcbiAgICAgICAgdm9sOiA3LjgsXG4gICAgICAgIHRpbWU6IGR1cmF0aW9uLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KHBsYXlOZXdTY2VuZSwgKGR1cmF0aW9uICsgMTIpICogMTAwMCk7IC8vIFRpbWluZyBpcyB3ZWlyZCBpbiB0aGUgcGxheWVyLiBUaGlzIHJlc3VsdHMgaW4gYSBnYXAgd2hpY2ggaXMgd2hhdCBJIHdhbnRcbiAgfTtcblxuICBsZXQgc2FtcGxlSW5kZXggPSAwO1xuXG4gIGxldCBpbnRlcmx1ZGVKdXN0UGxheWVkID0gZmFsc2U7XG4gIGNvbnN0IHBsYXlOZXdTY2VuZSA9ICgpID0+IHtcbiAgICAvLyBPY2Nhc2lvbmFsbHkgd2Ugd2FudCB0byBwYXVzZSBmb3IgYSBtb21lbnQgdG8gcGxheSBhbiBpbnRlcmx1ZGUgaW4gc2lsZW5jZVxuICAgIGNvbnN0IHBsYXlJbnRlcmx1ZGUgPSB1dGlscy5mbGlwQ29pbigwLjgwKTtcblxuICAgIGlmKHBsYXlJbnRlcmx1ZGUgJiYgIWludGVybHVkZUp1c3RQbGF5ZWQpIHtcbiAgICAgIGludGVybHVkZUp1c3RQbGF5ZWQgPSB0cnVlO1xuICAgICAgcGxheUJlbGxzKCk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PlxuICAgICAgICBzb3VyY2VTYW1wbGVzLmZvckVhY2goIHNhbXBsZVBsYXllciA9PiBzYW1wbGVQbGF5ZXIuc3RvcCgwLCBzYW1wbGVQbGF5ZXIucGxheWVyc1swXSkgKSxcbiAgICAgICAgMTUgKiAxMDAwXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaW50ZXJsdWRlSnVzdFBsYXllZCA9IGZhbHNlO1xuICAgIHNhbXBsZUluZGV4ID0gZ2V0U2VxdWVudGlhbFJhbmRvbUluZGV4KHNhbXBsZUluZGV4LCBiYWNrZ3JvdW5kU2FtcGxlcy5sZW5ndGgpO1xuICAgIC8vY29uc3QgdGFyZ2V0ID0gWzE5MywgNDIzLCAxNjY4LCAyMzMzLCAyNjY1LCAzMDc4LCA0MDM4LCA2MzE5LCAxOTMrMSwgNDIzKzEsIDE2NjgrMSwgMjMzMysxLCAyNjY1KzEsIDMwNzgrMSwgNDAzOCsxLCA2MzE5KzEgXTsgLy8gaW4gZnJlcXVlbmN5XG4gICAgY29uc3QgYmFja2dyb3VuZFNhbXBsZSA9IGJhY2tncm91bmRTYW1wbGVzW3NhbXBsZUluZGV4XTtcbiAgICBjb25zb2xlLmxvZyhiYWNrZ3JvdW5kU2FtcGxlLmF1ZGlvRmlsZSk7XG4gICAgY29uc3QgaW5pdGlhbFBvcHVsYXRpb24gPSBBcnJheSg4MCkuZmlsbCggYmFja2dyb3VuZFNhbXBsZS5zcGVjdHJ1bS5tYXAoIGJpbiA9PiBiaW4uZnJlcSkgKTtcblxuICAgIC8vIFRhcmdldCBpcyB0aGUgb3ZlcnRvbmVzIG9mIHRoZSBtb3N0IHByb21pbmVudCBmcmVxdWVuY3kgaW4gdGhlIHNwZWN0cnVtXG4gICAgY29uc3QgdGFyZ2V0ID0gYmFja2dyb3VuZFNhbXBsZS5zcGVjdHJ1bVxuICAgICAgLnJlZHVjZSggKGFjY3VtOiBJRnJlcUJpbltdLCBiaW46IElGcmVxQmluKSA9PiBhY2N1bVswXS5tYWduaXR1ZGUgPCBiaW4ubWFnbml0dWRlID8gWyBiaW4gXSA6IGFjY3VtLCBbe2ZyZXE6IDAsIG1hZ25pdHVkZTogLTEwMH1dKVxuICAgICAgLm1hcCggYmluID0+IGJpbi5mcmVxKVxuICAgICAgLm1hcCggKCBzdHJvbmdlc3RGcmVxOiBudW1iZXIgKSA9PiBBcnJheShiYWNrZ3JvdW5kU2FtcGxlLnNwZWN0cnVtLmxlbmd0aCkuZmlsbCgwKS5tYXAoIChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhcm1vbmljID0gc3Ryb25nZXN0RnJlcSAqIChpKzEpO1xuICAgICAgICBjb25zdCBoaWdoZXN0RnJlcSA9IDcwMDA7XG4gICAgICAgIGlmIChoYXJtb25pYyA+IGhpZ2hlc3RGcmVxKSB7XG4gICAgICAgICAgY29uc3QgZGl2aXNvciA9IE1hdGguY2VpbChoYXJtb25pYyAvIGhpZ2hlc3RGcmVxKTtcbiAgICAgICAgICByZXR1cm4gaGFybW9uaWMgLyBkaXZpc29yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJldHVybiBoYXJtb25pYztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIClbMF07XG5cbiAgICBjb25zdCBzY2VuZUNvbmZpZzogSVNjZW5lQ29uZmlnID0ge1xuICAgICAgaW5pdGlhbFBvcHVsYXRpb246IGluaXRpYWxQb3B1bGF0aW9uLm1hcChcbiAgICAgICAgaXRlbSA9PiBpdGVtLm1hcChcbiAgICAgICAgICBpdGVtMiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKiAodGFyZ2V0W3RhcmdldC5sZW5ndGgtMV0gLSB0YXJnZXRbMF0pKSArICh0YXJnZXRbMF0tMjApXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgcG9wdWxhdGlvblNpemU6IDE2LFxuICAgICAgbWF4R2VuZXJhdGlvbnM6IDIsXG4gICAgICB0YXJnZXQsIC8vIGluIGZyZXF1ZW5jeVxuICAgICAgdGltZUJldHdlZW5FdmVudHM6ICgpID0+IChNYXRoLnJhbmRvbSgpICogMTUpICsgMTAsXG4gICAgICBnYXBCZXR3ZWVuRXZlbnRzOiAoKSA9PiB1dGlscy5jaG9vc2UoWzI1LDEwXSksXG4gICAgICBtZWxvZHlPc2NpbGxhdG9ycyxcbiAgICAgIGNob3JkT3NjaWxsYXRvcnMsXG4gICAgICBvbkZpbmlzaDogcGxheU5ld1NjZW5lXG4gICAgfVxuXG4gICAgc291cmNlU2FtcGxlc1tzYW1wbGVJbmRleF0ucGxheSh7ZnJlcTogMSwgdGltZTogNjAgKiAzICogMTAwMCwgdm9sOiAwLjIzfSk7XG5cbiAgICAvLyBTdGFydCB0aGUgc2NlbmVcbiAgICBuZXcgU2NlbmUoc2NlbmVDb25maWcpLnBsYXkoKTtcbiAgfTtcblxuICAvL3BsYXlOZXdTY2VuZSgpO1xuICBwbGF5QmVsbHMoKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgV05TO1xuZXhwb3J0IHsgV05TIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd25zLnRzIiwiXG5pbXBvcnQgeyBQbWFya292LCBQZ2VuZXRpYyB9IGZyb20gJy4vcGF0dGVybnMnO1xuaW1wb3J0IFN5bnRoIGZyb20gJy4vU3ludGgnO1xuaW1wb3J0IHtJU291bmRQbGF5ZXJ9IGZyb20gJy4vU291bmRQbGF5ZXInO1xuaW1wb3J0IHtJRnJlcUJpbn0gZnJvbSAnLi4vdG9vbHMvc3BlY3RydW1QZWFrUGFyc2VyJztcbmltcG9ydCB7IG1vZCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTcGVjdHJ1bUNvbmZpZyB7XG4gIGF1ZGlvRmlsZTogc3RyaW5nLFxuICBzcGVjdHJ1bTogSUZyZXFCaW5bXSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2NlbmVDb25maWcge1xuICBwb3B1bGF0aW9uU2l6ZTogbnVtYmVyLFxuICBpbml0aWFsUG9wdWxhdGlvbjogYW55W11bXSxcbiAgdGFyZ2V0OiBhbnlbXSwgLy8gSW4gRnJlcXVlbmN5XG4gIG1heEdlbmVyYXRpb25zOiBudW1iZXI7XG4gIHRpbWVCZXR3ZWVuRXZlbnRzOiBhbnkgfG51bWJlciB8IEZ1bmN0aW9uLFxuICBnYXBCZXR3ZWVuRXZlbnRzOiBhbnkgfCBudW1iZXIgfCBGdW5jdGlvbixcbiAgbWVsb2R5T3NjaWxsYXRvcnM6IElTb3VuZFBsYXllcltdLFxuICBjaG9yZE9zY2lsbGF0b3JzOiBJU291bmRQbGF5ZXJbXSxcbiAgb25GaW5pc2g6IEZ1bmN0aW9uLFxufVxuXG5leHBvcnQgY2xhc3MgU2NlbmUge1xuICBub3RlczogSXRlcmFibGVJdGVyYXRvcjxhbnk+O1xuICBjdXJyZW50R2VuZXJhdGlvbjogbnVtYmVyO1xuICBjb25maWc6IElTY2VuZUNvbmZpZztcbiAgb25GaW5pc2g6IEZ1bmN0aW9uO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IElTY2VuZUNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG4gICAgdGhpcy5jb25maWcudGltZUJldHdlZW5FdmVudHMgPSB1dGlscy5tYWtlRnVuY3Rpb24odGhpcy5jb25maWcudGltZUJldHdlZW5FdmVudHMpO1xuICAgIHRoaXMuY29uZmlnLmdhcEJldHdlZW5FdmVudHMgPSB1dGlscy5tYWtlRnVuY3Rpb24odGhpcy5jb25maWcuZ2FwQmV0d2VlbkV2ZW50cyk7XG4gICAgdGhpcy5ub3RlcyA9IFBnZW5ldGljKGNvbmZpZy5pbml0aWFsUG9wdWxhdGlvbiwgY29uZmlnLnRhcmdldCk7XG4gICAgdGhpcy5jb25maWcubWF4R2VuZXJhdGlvbnMgPSBjb25maWcubWF4R2VuZXJhdGlvbnM7XG4gICAgdGhpcy5jdXJyZW50R2VuZXJhdGlvbiA9IDA7XG5cbiAgICB0aGlzLmNvbmZpZy5vbkZpbmlzaCA9IGNvbmZpZy5vbkZpbmlzaDtcbiAgfVxuXG4gIHB1YmxpYyBwbGF5KCk6IFNjZW5lIHtcbiAgICBjb25zdCBuZXh0R2VuOiBudW1iZXJbXSA9IHRoaXMubm90ZXMubmV4dCgpLnZhbHVlO1xuICAgIGNvbnN0IG5ld05vdGVzOiBudW1iZXJbXSA9IG5leHRHZW47XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGsgPSAoTWF0aC5yYW5kb20oKSA+IDAuNSkgPyAwIDogMTtcbiAgICB0aGlzLmNvbmZpZy5jaG9yZE9zY2lsbGF0b3JzLm1hcCgob3NjKSA9PiB7XG4gICAgICBjb25zdCBvY3RhdmUgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDUpO1xuICAgICAgb3NjLnBsYXkoe2ZyZXE6IG5ld05vdGVzW2ldL29jdGF2ZSwgdGltZTogdGhpcy5jb25maWcudGltZUJldHdlZW5FdmVudHMoKSwgcGFuOiAoKGslMikqMikgLSAxLCB2b2w6IDAuMn0pOyBpKys7IGsrKztcbiAgICB9KTtcblxuICAgIHRoaXMucGxheU1lbG9keShuZXdOb3RlcywgdGhpcy5jdXJyZW50R2VuZXJhdGlvbik7XG5cbiAgICAvL2NvbnNvbGUubG9nKCdHRU5FVElDIEdFTkVSQVRJT046ICcsIHRoaXMuY3VycmVudEdlbmVyYXRpb24sIG5leHRHZW4pO1xuICAgIGlmKHRoaXMuY3VycmVudEdlbmVyYXRpb24gPD0gKHRoaXMuY29uZmlnLm1heEdlbmVyYXRpb25zLTEpICkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRHZW5lcmF0aW9uKys7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgfSwgKHRoaXMuY29uZmlnLnRpbWVCZXR3ZWVuRXZlbnRzKCkgKyB0aGlzLmNvbmZpZy5nYXBCZXR3ZWVuRXZlbnRzKCkpICogMTAwMCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50R2VuZXJhdGlvbisrO1xuICAgICAgdGhpcy5lbmRPZlNjZW5lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHBsYXlNZWxvZHkoIG5vdGVzLCBnZW5lcmF0aW9uICk6IHZvaWQge1xuICAgIGNvbnN0IG9yZGVyID0gMztcbiAgICBjb25zdCBuZXdOb3RlcyA9IG5vdGVzO1xuXG4gICAgLy8gVGFrZW4gZnJvbSB0aGUgc2VxdWVuY2Ugb2YgcGl0Y2hlcyBpbiBcIkZvcmV2ZXIgaW4gQmx1ZSBKZWFuc1wiIGJ5IE5laWwgRGlhbW9uZFxuICAgIGNvbnN0IGlkZWFsTWVsb2R5ID0gdXRpbHMubWFwVG9Eb21haW4oWzAsNCwyLDAsNyw0LDIsNyw3LDQsMiwyLDQsNCwyLDBdLCBuZXdOb3Rlcyk7XG4gICAgY29uc3QgcmFuZG9tU2hpZnRBbW91bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaWRlYWxNZWxvZHkubGVuZ3RoKSk7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSBbXTtcbiAgICBmb3IobGV0IG9mZnNldCA9IG9yZGVyOyBvZmZzZXQgPj0gMDsgb2Zmc2V0LS0pIHtcbiAgICAgIGluaXRpYWxTdGF0ZS5wdXNoKCBpZGVhbE1lbG9keVttb2QocmFuZG9tU2hpZnRBbW91bnQtb2Zmc2V0LCBpZGVhbE1lbG9keS5sZW5ndGgpXSk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFya292TWVsb2R5ID0gUG1hcmtvdihpZGVhbE1lbG9keSwgb3JkZXIsIGluaXRpYWxTdGF0ZSApO1xuXG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IHBsYXlOZXh0Tm90ZSA9IChnZW5lcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBvY3RhdmUgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDMpICsgTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAzICkgKyAyO1xuICAgICAgY29uc3QgbmV4dE5vdGUgPSBtYXJrb3ZNZWxvZHkubmV4dCgpLnZhbHVlO1xuXG4gICAgICAvL2lmKG5leHROb3RlICE9PSB1bmRlZmluZWQgJiYgdXRpbHMuZmxpcENvaW4oMC43NSkgKSB7IC8vIFNvbWV0aW1lcyBwcm9iYWJsaXRpZXMgYXJlIHplcm8sIHNvIHdlJ2xsIGdldCBhbiB1bmRlZmluZWQgbmV4dCBzdGF0ZVxuICAgICAgaWYobmV4dE5vdGUgIT09IHVuZGVmaW5lZCAmJiB1dGlscy5mbGlwQ29pbigwLjU1KSApIHsgLy8gU29tZXRpbWVzIHByb2JhYmxpdGllcyBhcmUgemVybywgc28gd2UnbGwgZ2V0IGFuIHVuZGVmaW5lZCBuZXh0IHN0YXRlXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3BsYXlpbmcgbm90ZScsIG5leHROb3RlKTtcbiAgICAgICAgdGhpcy5jb25maWcubWVsb2R5T3NjaWxsYXRvcnNbaSAlIHRoaXMuY29uZmlnLm1lbG9keU9zY2lsbGF0b3JzLmxlbmd0aF0ucGxheSh7XG4gICAgICAgICAgZnJlcTogbmV4dE5vdGUvb2N0YXZlLFxuICAgICAgICAgIHRpbWU6IDEgKyAoTWF0aC5yYW5kb20oKSAqIDYpLFxuICAgICAgICAgIHBhbjogMCxcbiAgICAgICAgICB2b2w6IDAuMTVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpKys7XG5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYoZ2VuZXJhdGlvbiA9PT0gdGhpcy5jdXJyZW50R2VuZXJhdGlvbiAmJiB0aGlzLmN1cnJlbnRHZW5lcmF0aW9uIDw9IHRoaXMuY29uZmlnLm1heEdlbmVyYXRpb25zKSB7XG4gICAgICAgICAgcGxheU5leHROb3RlKGdlbmVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9LCAoKE1hdGgucmFuZG9tKCkgKiAyKSArIDAuNSkgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBwbGF5TmV4dE5vdGUoZ2VuZXJhdGlvbik7XG5cbiAgfVxuXG4gIHByaXZhdGUgZW5kT2ZTY2VuZSgpIHtcbiAgICBjb25zdCBvbkZpbmlzaENhbGxiYWNrID0gdGhpcy5jb25maWcub25GaW5pc2g7XG5cbiAgICB0aGlzLmNvbmZpZy5jaG9yZE9zY2lsbGF0b3JzLm1hcCggc3ludGggPT4gc3ludGguc3RvcCgxKSApO1xuXG4gICAgd2luZG93LnNldFRpbWVvdXQob25GaW5pc2hDYWxsYmFjaywgMTAwMCk7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NjZW5lLnRzIiwiLypcbiAqIEJhc2ljIFBhdHRlcm5zIGltcGxlbWVudGF0aW9uXG4gKi9cblxuY29uc3QgTWFya292ID0gcmVxdWlyZShcIm1hcmtvdm5cIikuZGVmYXVsdDtcbmltcG9ydCB7IEdlbmV0aWMgfSBmcm9tIFwiLi9HZW5ldGljXCI7XG5cblxuZXhwb3J0IGNvbnN0IFBhdHRlcm4gPSAocGF0dGVybikgPT4gWygpID0+IHBhdHRlcm4ubmV4dCgpLnZhbHVlXTtcblxuZXhwb3J0IGNvbnN0IFBzZXEgPSBmdW5jdGlvbiogUHNlcSh2YWx1ZXM6IEFycmF5PGFueT4sIHJlcGV0aXRpb25zOiBudW1iZXIpe1xuICB2YXIgaW5kZXg6IG51bWJlciA9IDA7XG4gIHZhciByZXN1bHQgPSAoKTogYW55ID0+IHZhbHVlc1tpbmRleCsrICUgdmFsdWVzLmxlbmd0aF07XG5cbiAgaWYocmVwZXRpdGlvbnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgeWllbGQgcmVzdWx0KCk7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGZvcih2YXIgaT0wOyBpPHJlcGV0aXRpb25zOyBpKyspIHtcbiAgICAgIHlpZWxkIHJlc3VsdCgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFByYW5kID0gZnVuY3Rpb24qIFByYW5kKHZhbHVlczogQXJyYXk8YW55PiwgcmVwZXRpdGlvbnM6IG51bWJlcil7XG5cbiAgdmFyIHJlc3VsdCA9ICgpOiBhbnkgPT4gdmFsdWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbHVlcy5sZW5ndGgpXTtcblxuICBpZihyZXBldGl0aW9ucyA9PSB1bmRlZmluZWQpIHtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB5aWVsZCByZXN1bHQoKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgZm9yKHZhciBpPTA7IGk8cmVwZXRpdGlvbnM7IGkrKykge1xuICAgICAgeWllbGQgcmVzdWx0KCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgUG1hcmtvdiA9IGZ1bmN0aW9uIFBtYXJrb3Yoc2VlZDogYW55W10sIG9yZGVyOiBudW1iZXIsIGluaXRpYWxTdGF0ZTogYW55W10pIHtcbiAgY29uc3QgbWFya292Q2hhaW4gPSBuZXcgTWFya292KHNlZWQsIG9yZGVyKTtcblxuICByZXR1cm4gbWFya292Q2hhaW4uYXNQYXR0ZXJuKGluaXRpYWxTdGF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgUGdlbmV0aWMgPSBmdW5jdGlvbiogUGdlbmV0aWMoaW5wdXRQb3B1bGF0aW9uOiBudW1iZXJbXVtdLCBnb2FsOiBudW1iZXJbXSkge1xuICBsZXQgZ2VuZXRpYzogR2VuZXRpYyA9IG5ldyBHZW5ldGljKGlucHV0UG9wdWxhdGlvbiwgZ29hbCk7XG5cbiAgbGV0IGxhc3RTdGF0ZTogbnVtYmVyW10gPSBnb2FsO1xuXG4gIHdoaWxlKHRydWUpIHtcbiAgICBsZXQgbmV4dFN0YXRlOiBhbnkgPSBnZW5ldGljLmdldE5leHRTdGF0ZShsYXN0U3RhdGUpO1xuXG4gICAgbGFzdFN0YXRlID0gW2xhc3RTdGF0ZVtsYXN0U3RhdGUubGVuZ3RoLTFdLCBuZXh0U3RhdGVdO1xuXG4gICAgeWllbGQgbmV4dFN0YXRlO1xuICB9XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGF0dGVybnMudHMiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIk1hcmtvdk5cIixbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLk1hcmtvdk49ZSgpOnQuTWFya292Tj1lKCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKHIsbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTApfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24ucihlKTtjb25zdCByPXQ9PntsZXQgZT10LnJlZHVjZSgodCxlKT0+dCtlKSxuPU1hdGgucmFuZG9tKCkqZSxyPTA7Zm9yKGxldCBlPTA7ZTx0Lmxlbmd0aDtlKyspaWYobjw9KHI9KyhyKz10W2VdKS50b0ZpeGVkKDIpKSlyZXR1cm4gZX0sbz10PT57bGV0IGU9dC5yZWR1Y2UoKHQsZSk9PnQrZSk7cmV0dXJuIGU+MD90Lm1hcCh0PT50L2UpOnQubWFwKCgpPT4wKX0saT0odCxlKT0+e3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpLHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZSk7aWYobi5sZW5ndGghPXIubGVuZ3RoKXJldHVybiExO2Zvcih2YXIgbz0wO288bi5sZW5ndGg7bysrKXt2YXIgaT1uW29dO2lmKHRbaV0hPT1lW2ldKXJldHVybiExfXJldHVybiEwfSxzPSh0LGUpPT4odCVlK2UpJWU7bi5kKGUsXCJnZXRBbGxUcmFuc2l0aW9uc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIGF9KSxuLmQoZSxcIk1hcmtvdk5cIixmdW5jdGlvbigpe3JldHVybiBsfSk7Y29uc3QgYT0odCxlKT0+dC5yZWR1Y2UoKG4scixvKT0+e2NvbnN0IGk9W107Zm9yKGxldCBuPWU7bj49MDtuLS0paS5wdXNoKHRbcyhvLW4sdC5sZW5ndGgpXSk7cmV0dXJuIG4ucHVzaChpKSxufSxbXSksdT0odCxlKT0+e2NvbnN0IG49Wy4uLnRdO3JldHVybiBuLnNoaWZ0KCksbi5wdXNoKGUpLG59O2NsYXNzIGx7Y29uc3RydWN0b3IodCxlKXt0aGlzLmRpY3Rpb25hcnk9W10sdGhpcy5jb21iaW5hdGlvbnM9W10sdGhpcy5sYXN0U3RhdGU9W107Zm9yKGxldCBuPTA7bjxlO24rKyl0aGlzLmxhc3RTdGF0ZS5wdXNoKHRbbl0pO3RoaXMudHJhbnNpdGlvbk1hdHJpeD10aGlzLmNyZWF0ZVRyYW5zaXRpb25NYXRyaXgodCxlKX1jcmVhdGVUcmFuc2l0aW9uTWF0cml4KHQsZSl7dGhpcy5kaWN0aW9uYXJ5PUFycmF5LmZyb20obmV3IFNldCh0KSksdGhpcy5jb21iaW5hdGlvbnM9YSh0LGUpO2xldCBuPVtdO2ZvcihsZXQgdD0wO3Q8dGhpcy5jb21iaW5hdGlvbnMubGVuZ3RoO3QrKyl7bGV0IHQ9W107Zm9yKGxldCBlPTA7ZTx0aGlzLmRpY3Rpb25hcnkubGVuZ3RoO2UrKyl0LnB1c2goMCk7bi5wdXNoKHQpfWZvcihsZXQgcj0wO3I8dC5sZW5ndGg7cisrKXtsZXQgbz1bXTtmb3IobGV0IG49ZTtuPj0wO24tLSlvLnB1c2godFtzKHItbix0Lmxlbmd0aCldKTtsZXQgYT10aGlzLmNvbWJpbmF0aW9ucy5maW5kSW5kZXgodD0+aShvLHQpKSx1PXRbKHIrMSkldC5sZW5ndGhdLGw9dGhpcy5kaWN0aW9uYXJ5LmluZGV4T2YodSk7blthXVtsXSsrfXJldHVybiBuPW4ubWFwKG8pfWdldE5leHRTdGF0ZSh0KXtjb25zdCBlPXRoaXMudHJhbnNpdGlvbk1hdHJpeFt0aGlzLmNvbWJpbmF0aW9ucy5maW5kSW5kZXgoZT0+aSh0LGUpKV0sbj1yKGUpO3JldHVybiB0aGlzLmRpY3Rpb25hcnlbbl19KmFzUGF0dGVybih0KXtmb3IodGhpcy5sYXN0U3RhdGU9dDs7KXtsZXQgdD10aGlzLmdldE5leHRTdGF0ZSh0aGlzLmxhc3RTdGF0ZSk7dGhpcy5sYXN0U3RhdGU9dSh0aGlzLmxhc3RTdGF0ZSx0KSx5aWVsZCB0fX19ZS5kZWZhdWx0PWx9XSl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXJrb3ZuL2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5cblxuY2xhc3MgR2VuZXRpYyB7XG4gIHB1YmxpYyBwb3B1bGF0aW9uOiBudW1iZXJbXVtdO1xuICBwcml2YXRlIGdvYWw6IG51bWJlcltdO1xuICBwcml2YXRlIHNjb3JlczogbnVtYmVyW107XG4gIHByaXZhdGUgbGFzdFN0YXRlOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihpbnB1dFBvcHVsYXRpb246IG51bWJlcltdW10sIGdvYWw6IG51bWJlcltdKSB7XG4gICAgdGhpcy5wb3B1bGF0aW9uID0gaW5wdXRQb3B1bGF0aW9uO1xuICAgIHRoaXMuc2NvcmVzID0gQXJyYXkoaW5wdXRQb3B1bGF0aW9uLmxlbmd0aCkuZmlsbCgwKTtcbiAgICB0aGlzLmdvYWwgPSBnb2FsO1xuICAgIHRoaXMubGFzdFN0YXRlID0gaW5wdXRQb3B1bGF0aW9uW01hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiAoaW5wdXRQb3B1bGF0aW9uLmxlbmd0aC0xKSkgXTtcbiAgfVxuXG5cbiAgLy8gQWNjdW11bGF0ZSBhbmQgcmV0dXJuIHRoZSBzY29yZSBmb3IgYSBzaW5nbGUgY29sbGVjdGlvblxuICBnZXRUb3RhbEZpdG5lc3NSYXRpbmcoY29sbGVjdGlvbjogbnVtYmVyW10sIGdvYWw6IG51bWJlcltdKSB7XG4gICAgbGV0IHNjb3JlOiBudW1iZXIgPSAwOyAvLyBsb3dlciBpcyBiZXR0ZXJcbiAgICBsZXQgbm9ybWFsaXplZENvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLm1hcCgobnVtOiBudW1iZXIpID0+IG51bSAtIE1hdGgubWluLmFwcGx5KG51bGwsIGNvbGxlY3Rpb24pICk7XG5cbiAgICBmb3IobGV0IGk9bm9ybWFsaXplZENvbGxlY3Rpb24ubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBzY29yZSArPSB0aGlzLmdldERpc3RhbmNlKG5vcm1hbGl6ZWRDb2xsZWN0aW9uW2ldLCBnb2FsW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2NvcmU7XG4gIH1cblxuICAvLyBUT0RPOiB0ZXN0XG4gIC8vIFVzaW5nIHRoZSBnaXZlbiBzY29yZXMsIGdldCB0aGUgbW9zdCBcImZpdFwiIHR3byBnZW5lcmF0aW9ucyBvdXQgb2YgdGhlIHBvcHVsYXRpb25cbiAgZ2V0VG9wVHdvR2VuZXJhdGlvbnMoc2NvcmVzOiBudW1iZXJbXSwgcG9wdWxhdGlvbjogbnVtYmVyW11bXSk6IG51bWJlcltdW10ge1xuXG4gICAgbGV0IGluZGV4T2ZIaWdoZXN0U2NvcmUgPSAwO1xuXG4gICAgZm9yKGxldCBpPXNjb3Jlcy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICBpZihzY29yZXNbaW5kZXhPZkhpZ2hlc3RTY29yZV0gPCBzY29yZXNbaV0pIHtcbiAgICAgICAgaW5kZXhPZkhpZ2hlc3RTY29yZSA9IGk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZXJlIGFyZSB0d28gb2YgdGhlIHNhbWUgc2NvcmVzLCBjaG9vc2Ugb25lIHJhbmRvbWx5XG4gICAgICBpZihzY29yZXNbaW5kZXhPZkhpZ2hlc3RTY29yZV0gPT09IHNjb3Jlc1tpXSkge1xuICAgICAgICBjb25zdCBjb2luRmxpcCA9IE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgaW5kZXhPZkhpZ2hlc3RTY29yZSA9IChjb2luRmxpcCA+IDAuNSkgPyBpbmRleE9mSGlnaGVzdFNjb3JlIDogaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaW5kZXhPZk5leHRIaWdoZXN0U2NvcmU6IG51bWJlciA9IDA7XG4gICAgY29uc3QgdG9wR2VuZXJhdGlvblNjb3JlOiBudW1iZXIgPSBzY29yZXNbaW5kZXhPZkhpZ2hlc3RTY29yZV07XG5cblxuICAgIGNvbnN0IGNvaW5GbGlwRm9yTXV0YXRlID0gdXRpbHMuZmxpcENvaW4oMC4yNSk7XG5cbiAgICBpZihjb2luRmxpcEZvck11dGF0ZSkge1xuICAgICAgaW5kZXhPZk5leHRIaWdoZXN0U2NvcmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzY29yZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3IobGV0IGk9c2NvcmVzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgLy8gSWdub3JlIGFueSBzY29yZXMgdGhhdCBhcmUgYWxyZWFkeSB0aGUgaGlnaGVzdCBzY29yZVxuICAgICAgICBpZihzY29yZXNbaV0gIT09IHRvcEdlbmVyYXRpb25TY29yZSkge1xuXG4gICAgICAgICAgaWYoc2NvcmVzW2luZGV4T2ZOZXh0SGlnaGVzdFNjb3JlXSA8IHNjb3Jlc1tpXSkge1xuICAgICAgICAgICAgaW5kZXhPZk5leHRIaWdoZXN0U2NvcmUgPSBpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSB0d28gb2YgdGhlIHNhbWUgc2NvcmVzLCBjaG9vc2Ugb25lIHJhbmRvbWx5XG4gICAgICAgICAgaWYoc2NvcmVzW2luZGV4T2ZOZXh0SGlnaGVzdFNjb3JlXSA9PT0gc2NvcmVzW2ldKSB7XG4gICAgICAgICAgICBjb25zdCBjb2luRmxpcCA9IE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgICAgIGluZGV4T2ZOZXh0SGlnaGVzdFNjb3JlID0gKGNvaW5GbGlwID4gMC41KSA/IGluZGV4T2ZOZXh0SGlnaGVzdFNjb3JlIDogaTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3BvcHVsYXRpb25baW5kZXhPZkhpZ2hlc3RTY29yZV0sIHBvcHVsYXRpb25baW5kZXhPZk5leHRIaWdoZXN0U2NvcmVdIF07XG4gIH1cblxuICAvLyBUT0RPOiBNYWtlIG1vcmUgdGhhbiBvbmUgdHlwZSBvZiBtYXRpbmdcbiAgLy8gVGFrZSBpbiB0d28gYXJyYXlzIChwYXJlbnRzKSBhbmQgbWF0ZSB0aGVtIGluIGEgbnVtYmVyIG9mIGRpZmZlcmVudCB3YXlzIHRvIHByb2R1Y2UgbXVsdGlwbGUgb2Zmc3ByaW5nXG4gIG1hdGVHZW5lcmF0aW9ucyhwYXJlbnRzOiBudW1iZXJbXVtdKTogbnVtYmVyW11bXSB7XG5cbiAgICBjb25zdCBzcGxpY2VkT2Zmc3ByaW5nID0gdGhpcy5nZXRTcGxpY2VkT2Zmc3ByaW5nKHBhcmVudHNbMF0sIHBhcmVudHNbMV0pO1xuICAgIGNvbnN0IGludGVybGFjZWRPZmZzcHJpbmcgPSB0aGlzLmdldEludGVybGFjZWRPZmZzcHJpbmcocGFyZW50c1swXSwgcGFyZW50c1sxXSk7XG5cbiAgICAvLyBHZW5lcmF0ZSBtb3JlIHRoYW4gb25lIG9mZnNwcmluZ1xuICAgIHJldHVybiBbc3BsaWNlZE9mZnNwcmluZywgaW50ZXJsYWNlZE9mZnNwcmluZ107XG4gIH1cblxuICAvLyBTcGxpY2UgdHdvIGVxdWFsLWxlbmd0aCBhcnJheXMgdG9nZXRoZXIgYW5kIHJldHVybiB0aGUgcmVzdWx0XG4gIGdldEludGVybGFjZWRPZmZzcHJpbmcocGFyZW50T25lOiBudW1iZXJbXSwgcGFyZW50VHdvOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICBjb25zdCBpbnRlcmxhY2VkT2Zmc3ByaW5nID0gQXJyYXkocGFyZW50T25lLmxlbmd0aCk7XG5cbiAgICBmb3IobGV0IGk9aW50ZXJsYWNlZE9mZnNwcmluZy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICBpbnRlcmxhY2VkT2Zmc3ByaW5nW2ldID0gKGklMikgPT09IDAgPyBwYXJlbnRPbmVbaV0gOiBwYXJlbnRUd29baV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVybGFjZWRPZmZzcHJpbmc7XG4gIH1cblxuICBnZXRTcGxpY2VkT2Zmc3ByaW5nKHBhcmVudE9uZTogbnVtYmVyW10sIHBhcmVudFR3bzogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgY29uc3QgY29pbkZsaXA6IG51bWJlciA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogMDtcbiAgICBjb25zdCBwYXJlbnRzID0gY29pbkZsaXAgPT0gMCA/IFtwYXJlbnRPbmUsIHBhcmVudFR3b10gOiBbcGFyZW50VHdvLCBwYXJlbnRPbmVdO1xuICAgIGNvbnN0IHNwbGl0UG9pbnQ6IG51bWJlciA9IE1hdGguZmxvb3IocGFyZW50T25lLmxlbmd0aCAvIDIpO1xuXG4gICAgY29uc3Qgc3BsaWNlZE9mZnNwcmluZyA9IFsuLi4ocGFyZW50c1swXS5zbGljZSgwLCBzcGxpdFBvaW50KSksIC4uLihwYXJlbnRzWzFdLnNsaWNlKHNwbGl0UG9pbnQtMSwgcGFyZW50c1sxXS5sZW5ndGgtMSkpIF07XG5cbiAgICByZXR1cm4gc3BsaWNlZE9mZnNwcmluZztcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBudW1lcmljYWwgZGlzdGFuY2UgYmV0d2VlbiBhbiBpbnB1dCBhbmQgYSBnb2FsXG4gIGdldERpc3RhbmNlKGlucHV0OiBudW1iZXIsIGdvYWw6IG51bWJlcikge1xuICAgIGxldCByYXRpbmc6IG51bWJlciA9IGdvYWwgLSBpbnB1dDtcblxuICAgIHJldHVybiByYXRpbmc7XG4gIH1cblxuXG5cblxuXG4gIC8vIENhbGN1bGF0ZSBhbmQgcmV0dXJuIHRoZSBzY29yZXMgZm9yIGFsbCBjdXJyZW50IGNvbGxlY3Rpb25zXG4gIGdldFBvcHVsYXRpb25TY29yZXMocG9wdWxhdGlvbjogbnVtYmVyW11bXSwgZ29hbDogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgbGV0IHNjb3JlcyA9IEFycmF5KHBvcHVsYXRpb24ubGVuZ3RoKS5maWxsKDApO1xuXG4gICAgZm9yKGxldCBpPShwb3B1bGF0aW9uLmxlbmd0aC0xKTsgaT49MDsgaS0tKSB7XG4gICAgICBzY29yZXNbaV0gPSB0aGlzLmdldFRvdGFsRml0bmVzc1JhdGluZyhwb3B1bGF0aW9uW2ldLCBnb2FsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2NvcmVzO1xuICB9XG5cbiAgZ2V0TmV4dEdlbmVyYXRpb24ocG9wdWxhdGlvbjogbnVtYmVyW11bXSwgZ29hbDogbnVtYmVyW10pIHtcbiAgICBjb25zdCBwb3B1bGF0aW9uU2NvcmVzOm51bWJlcltdID0gdGhpcy5nZXRQb3B1bGF0aW9uU2NvcmVzKHBvcHVsYXRpb24sIGdvYWwpO1xuICAgIGNvbnN0IHRvcFR3b0dlbmVyYXRpb25zOm51bWJlcltdW10gPSB0aGlzLmdldFRvcFR3b0dlbmVyYXRpb25zKHBvcHVsYXRpb25TY29yZXMsIHBvcHVsYXRpb24pO1xuICAgIGNvbnN0IG5ld0dlbmVyYXRpb25zOm51bWJlcltdW10gPSB0aGlzLm1hdGVHZW5lcmF0aW9ucyh0b3BUd29HZW5lcmF0aW9ucyk7XG5cbiAgICBmb3IobGV0IGk9MDsgaSA8IChuZXdHZW5lcmF0aW9ucy5sZW5ndGgtMSk7IGkrKykge1xuICAgICAgdGhpcy5wb3B1bGF0aW9uLnNwbGljZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5wb3B1bGF0aW9uLmxlbmd0aC0xKSksIDEpO1xuICAgIH1cbiAgICB0aGlzLnBvcHVsYXRpb24gPSBbLi4udGhpcy5wb3B1bGF0aW9uLCAuLi5uZXdHZW5lcmF0aW9uc107XG4gICAgLy8gRm9yIG5vdyByYW5kb21seSBzZWxlY3Qgb25lIG9mIHRoZSBiZXN0IGdlbmVyYXRpb25zXG4gICAgY29uc3QgYmVzdEZpdEdlbmVyYXRpb24gPSBuZXdHZW5lcmF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobmV3R2VuZXJhdGlvbnMubGVuZ3RoICogMC45OTkpKV07XG5cbiAgICByZXR1cm4gYmVzdEZpdEdlbmVyYXRpb247XG4gIH1cblxuICBnZXROZXh0U3RhdGUoc3RhdGU6IG51bWJlcltdKSB7XG4gICAgLy8gVE9ETzogVXNlIHN0YXRlIHRvIGFkZCBpbnRvIHRoZSBwb3B1bGF0aW9uXG5cbiAgICBjb25zdCBuZXh0U3RhdGU6IG51bWJlcltdID0gdGhpcy5nZXROZXh0R2VuZXJhdGlvbih0aGlzLnBvcHVsYXRpb24sIHRoaXMuZ29hbCk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9XG5cbiAgYXNQYXR0ZXJuKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKiBhc1BhdHRlcm4oaW5pdGlhbFN0YXRlOiBudW1iZXJbXSkge1xuICAgICAgc2VsZi5sYXN0U3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0gc2VsZi5nZXROZXh0U3RhdGUoc2VsZi5sYXN0U3RhdGUpO1xuICAgICAgICBzZWxmLmxhc3RTdGF0ZSA9IG5leHRTdGF0ZTtcblxuICAgICAgICB5aWVsZCBuZXh0U3RhdGU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG59O1xuXG5leHBvcnQgeyBHZW5ldGljIH07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9HZW5ldGljLnRzIiwiLy8gQmFzaWMgY3VydmUgZnJvbSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2F2ZVNoYXBlck5vZGVcbmNvbnN0IG1ha2VEaXN0b3J0aW9uQ3VydmUgPSBhbW91bnQgPT4ge1xuICB2YXIgayA9IHR5cGVvZiBhbW91bnQgPT09ICdudW1iZXInID8gYW1vdW50IDogNTAsXG4gICAgbl9zYW1wbGVzID0gNDQxMDAsXG4gICAgY3VydmUgPSBuZXcgRmxvYXQzMkFycmF5KG5fc2FtcGxlcyksXG4gICAgZGVnID0gTWF0aC5QSSAvIDE4MCxcbiAgICBpID0gMCxcbiAgICB4O1xuICBmb3IgKCA7IGkgPCBuX3NhbXBsZXM7ICsraSApIHtcbiAgICB4ID0gaSAqIDIgLyBuX3NhbXBsZXMgLSAxO1xuICAgIGN1cnZlW2ldID0gKCAzICsgayApICogeCAqIDIwICogZGVnIC8gKCBNYXRoLlBJICsgayAqIE1hdGguYWJzKHgpICk7XG4gIH1cbiAgcmV0dXJuIGN1cnZlO1xufTtcblxuXG5pbXBvcnQge0lTb3VuZFBsYXllciwgSVBsYXlPcHRpb25zfSBmcm9tICcuL1NvdW5kUGxheWVyJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuaW50ZXJmYWNlIElTeW50aE9wdGlvbnMge1xuICB3YXZlZm9ybVR5cGU/OiBzdHJpbmcsXG59XG5cbmNsYXNzIFN5bnRoIGltcGxlbWVudHMgSVNvdW5kUGxheWVyIHtcbiAgb3NjaWxsYXRvcjogYW55O1xuICBjb250ZXh0OiBBdWRpb0NvbnRleHQ7XG4gIGdhaW5Ob2RlO1xuICB3YXZlU2hhcGVyO1xuICBwYW5uZXI6IFN0ZXJlb1Bhbm5lck5vZGU7XG4gIGNvbmZpZzogSVN5bnRoT3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjb25maWc/OiBJU3ludGhPcHRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnID8gY29uZmlnIDoge307XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgdGhpcy5vc2NpbGxhdG9yID0gdGhpcy5jb250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICAvL3RoaXMuY29uZmlnLndhdmVmb3JtVHlwZSAmJiAodGhpcy5vc2NpbGxhdG9yLnR5cGUgPSB0aGlzLmNvbmZpZy53YXZlZm9ybVR5cGUpO1xuXG4gICAgdGhpcy5nYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5wYW5uZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU3RlcmVvUGFubmVyKCk7XG4gICAgdGhpcy53YXZlU2hhcGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVdhdmVTaGFwZXIoKTtcbiAgICB0aGlzLndhdmVTaGFwZXIuY3VydmUgPSBtYWtlRGlzdG9ydGlvbkN1cnZlKDgwMCk7XG4gICAgdGhpcy53YXZlU2hhcGVyLm92ZXJzYW1wbGUgPSAnNHgnO1xuXG4gICAgdGhpcy5vc2NpbGxhdG9yLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7XG4gICAgdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMucGFubmVyKTtcbiAgICB0aGlzLnBhbm5lci5jb25uZWN0KHRoaXMud2F2ZVNoYXBlcik7XG4gICAgLy90aGlzLnBhbm5lci5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy53YXZlU2hhcGVyLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgIHRoaXMub3NjaWxsYXRvci50eXBlID0gdGhpcy5jb25maWcud2F2ZWZvcm1UeXBlID8gdGhpcy5jb25maWcud2F2ZWZvcm1UeXBlIDogdXRpbHMuZmxpcENvaW4oKSA/ICd0cmlhbmdsZScgOiAnc2luZSc7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gMDtcbiAgfVxuXG4gIHB1YmxpYyBwbGF5KG9wdDogSVBsYXlPcHRpb25zKSB7XG4gICAgY29uc3Qge2ZyZXE9MjIwLCB0aW1lPTEsIHBhbj0wLCB2b2w9MX0gPSBvcHQ7XG4gICAgdGhpcy5pbml0KCk7XG5cbiAgICBsZXQgZ2FpbiA9IDAuMDE7XG4gICAgdGhpcy5vc2NpbGxhdG9yLmZyZXF1ZW5jeS52YWx1ZSA9IGZyZXE7XG5cbiAgICBvcHQuZGlzdG9ydGlvbiAmJiAodGhpcy53YXZlU2hhcGVyLmN1cnZlID0gbWFrZURpc3RvcnRpb25DdXJ2ZShvcHQuZGlzdG9ydGlvbikgKTtcbiAgICAvLyBzb21lIHN0dXBpZCBiYXNpYyBwc3ljaG9hY291c3RpYyBzaGFwaW5nXG4gICAgaWYoZnJlcSA+IDIwMCkgZ2FpbiA9IGdhaW4qMC4xMjtcbiAgICBpZihmcmVxID4gNjAwMCkgZ2FpbiA9IGdhaW4qMC4wODtcbiAgICB0aGlzLnBhbm5lci5wYW4udmFsdWUgPSBwYW47XG4gICAgdGhpcy5vc2NpbGxhdG9yLnN0YXJ0KDApO1xuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi5zZXRUYXJnZXRBdFRpbWUodm9sICogZ2FpbiAqICgwLjU1IC0gKE1hdGgucmFuZG9tKCkgKiAwLjAxKSksIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSwgdGltZSAqIDAuODUgKTtcblxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5zdG9wKHRpbWUgKiAwLjI1KTtcbiAgICB9LCAodGltZSAtICh0aW1lKjAuMjUpKSAqIDEwMDApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc3RvcCh0aW1lKSB7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnNldFRhcmdldEF0VGltZSgwLCB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUsIHRpbWUqMC45ICk7XG4gICAgdGhpcy5vc2NpbGxhdG9yLnN0b3AodGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lICsgKCB0aW1lICogNCApKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ludGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3ludGgudHMiLCIvLyBCYXNpYyBjdXJ2ZSBmcm9tIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XYXZlU2hhcGVyTm9kZVxuY29uc3QgbWFrZURpc3RvcnRpb25DdXJ2ZSA9IGFtb3VudCA9PiB7XG4gIHZhciBrID0gdHlwZW9mIGFtb3VudCA9PT0gJ251bWJlcicgPyBhbW91bnQgOiA1MCxcbiAgICBuX3NhbXBsZXMgPSA0NDEwMCxcbiAgICBjdXJ2ZSA9IG5ldyBGbG9hdDMyQXJyYXkobl9zYW1wbGVzKSxcbiAgICBkZWcgPSBNYXRoLlBJIC8gMTgwLFxuICAgIGkgPSAwLFxuICAgIHg7XG4gIGZvciAoIDsgaSA8IG5fc2FtcGxlczsgKytpICkge1xuICAgIHggPSBpICogMiAvIG5fc2FtcGxlcyAtIDE7XG4gICAgY3VydmVbaV0gPSAoIDMgKyBrICkgKiB4ICogMjAgKiBkZWcgLyAoIE1hdGguUEkgKyBrICogTWF0aC5hYnMoeCkgKTtcbiAgfVxuICByZXR1cm4gY3VydmU7XG59O1xuXG5cbmltcG9ydCB7SVNvdW5kUGxheWVyLCBJUGxheU9wdGlvbnN9IGZyb20gJy4vU291bmRQbGF5ZXInO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgSVN5bnRoT3B0aW9ucyB7XG4gIHdhdmVmb3JtVHlwZT86IHN0cmluZyxcbn1cblxuY29uc3QgYnVmZmVyU2l6ZSA9IDQwOTY7XG5jb25zdCBjcmVhdGVCcm93bk5vaXNlID0gYXVkaW9Db250ZXh0ID0+IHtcbiAgICB2YXIgbGFzdE91dCA9IDAuMDtcbiAgICB2YXIgbm9kZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoYnVmZmVyU2l6ZSwgMSwgMSk7XG4gICAgbm9kZS5vbmF1ZGlvcHJvY2VzcyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IGUub3V0cHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1ZmZlclNpemU7IGkrKykge1xuICAgICAgICAgICAgdmFyIHdoaXRlID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuICAgICAgICAgICAgb3V0cHV0W2ldID0gKGxhc3RPdXQgKyAoMC4wMiAqIHdoaXRlKSkgLyAxLjAyO1xuICAgICAgICAgICAgbGFzdE91dCA9IG91dHB1dFtpXTtcbiAgICAgICAgICAgIG91dHB1dFtpXSAqPSAzLjU7IC8vIChyb3VnaGx5KSBjb21wZW5zYXRlIGZvciBnYWluXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59O1xuXG5jbGFzcyBOb2lzZSBpbXBsZW1lbnRzIElTb3VuZFBsYXllciB7XG4gIG9zY2lsbGF0b3I6IGFueTtcbiAgY29udGV4dDogQXVkaW9Db250ZXh0O1xuICBnYWluTm9kZTtcbiAgd2F2ZVNoYXBlcjtcbiAgcGFubmVyOiBTdGVyZW9QYW5uZXJOb2RlO1xuICBmaWx0ZXI7XG4gIGZpbHRlcjI7XG4gIGNvbmZpZzogSVN5bnRoT3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjb25maWc/OiBJU3ludGhPcHRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnID8gY29uZmlnIDoge307XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgdGhpcy5vc2NpbGxhdG9yID0gY3JlYXRlQnJvd25Ob2lzZSh0aGlzLmNvbnRleHQpO1xuICAgIC8vdGhpcy5jb25maWcud2F2ZWZvcm1UeXBlICYmICh0aGlzLm9zY2lsbGF0b3IudHlwZSA9IHRoaXMuY29uZmlnLndhdmVmb3JtVHlwZSk7XG5cbiAgICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLnBhbm5lciA9IHRoaXMuY29udGV4dC5jcmVhdGVTdGVyZW9QYW5uZXIoKTtcbiAgICB0aGlzLmZpbHRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICB0aGlzLmZpbHRlci50eXBlID0gJ3BlYWtpbmcnO1xuICAgIHRoaXMuZmlsdGVyMiA9IHRoaXMuY29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICB0aGlzLmZpbHRlcjIudHlwZSA9ICdiYW5kcGFzcyc7XG5cbiAgICB0aGlzLndhdmVTaGFwZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlV2F2ZVNoYXBlcigpO1xuICAgIHRoaXMud2F2ZVNoYXBlci5jdXJ2ZSA9IG1ha2VEaXN0b3J0aW9uQ3VydmUoODApO1xuICAgIHRoaXMud2F2ZVNoYXBlci5vdmVyc2FtcGxlID0gJzR4JztcblxuICAgIHRoaXMub3NjaWxsYXRvci5jb25uZWN0KHRoaXMud2F2ZVNoYXBlcik7XG4gICAgdGhpcy53YXZlU2hhcGVyLmNvbm5lY3QodGhpcy5maWx0ZXIpO1xuICAgIHRoaXMuZmlsdGVyLmNvbm5lY3QodGhpcy5maWx0ZXIyKTtcbiAgICB0aGlzLmZpbHRlcjIuY29ubmVjdCh0aGlzLnBhbm5lcik7XG4gICAgdGhpcy5wYW5uZXIuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcbiAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgIC8vdGhpcy5vc2NpbGxhdG9yLnR5cGUgPSB0aGlzLmNvbmZpZy53YXZlZm9ybVR5cGUgPyB0aGlzLmNvbmZpZy53YXZlZm9ybVR5cGUgOiB1dGlscy5mbGlwQ29pbigpID8gJ3RyaWFuZ2xlJyA6ICdzaW5lJztcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwO1xuICB9XG5cbiAgcHVibGljIHBsYXkob3B0OiBJUGxheU9wdGlvbnMpIHtcbiAgICBjb25zdCB7ZnJlcT0yMjAsIHRpbWU9MSwgcGFuPTAsIHZvbD0xfSA9IG9wdDtcbiAgICB0aGlzLmluaXQoKTtcblxuICAgIGxldCBnYWluID0gMS4wO1xuICAgIC8vdGhpcy5vc2NpbGxhdG9yLmZyZXF1ZW5jeS52YWx1ZSA9IGZyZXE7XG4gICAgdGhpcy5maWx0ZXIuZnJlcXVlbmN5LnZhbHVlID0gZnJlcTtcbiAgICB0aGlzLmZpbHRlci5RLnZhbHVlID0gNTAuOTAxO1xuICAgIHRoaXMuZmlsdGVyLmdhaW4udmFsdWUgPSAyMDtcblxuICAgIHRoaXMuZmlsdGVyMi5mcmVxdWVuY3kudmFsdWUgPSBmcmVxO1xuICAgIHRoaXMuZmlsdGVyMi5RLnZhbHVlID0gMTUuOTAxO1xuICAgIHRoaXMuZmlsdGVyMi5nYWluLnZhbHVlID0gNjA7XG5cbiAgICBvcHQuZGlzdG9ydGlvbiAmJiAodGhpcy53YXZlU2hhcGVyLmN1cnZlID0gbWFrZURpc3RvcnRpb25DdXJ2ZShvcHQuZGlzdG9ydGlvbikgKTtcbiAgICAvLyBzb21lIHN0dXBpZCBiYXNpYyBweXNjaG9hY291c3RpYyBzaGFwaW5nXG4gICAgaWYoZnJlcSA+IDIwMCkgZ2FpbiA9IGdhaW4qMC4xMjtcbiAgICB0aGlzLnBhbm5lci5wYW4udmFsdWUgPSBwYW47XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gMC4wMDE7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUodm9sICogZ2FpbiwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lICsgdGltZSk7XG5cblxuICAgIHNldFRpbWVvdXQodGhpcy5zdG9wLmJpbmQodGhpcyksICh0aW1lKzEpICogMTAwMCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzdG9wKCkge1xuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi5zZXRUYXJnZXRBdFRpbWUoMCwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lLCAwLjAxICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5leHBvcnQgeyBOb2lzZSB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL05vaXNlLnRzIiwiaW1wb3J0IHtIb3dsLCBIb3dsZXJ9IGZyb20gJ2hvd2xlcic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge0lTb3VuZFBsYXllciwgSVBsYXlPcHRpb25zLCBJU2FtcGxlfSBmcm9tICcuL1NvdW5kUGxheWVyJztcblxuaW50ZXJmYWNlIElQbGF5ZXIge1xuICBwbGF5ZXI6IEhvd2wsXG4gIGJhc2VGcmVxOiBudW1iZXIsXG59XG5cbmNsYXNzIE11bHRpU2FtcGxlciBpbXBsZW1lbnRzIElTb3VuZFBsYXllciB7XG4gIHBsYXllcnM6IElQbGF5ZXJbXTtcbiAgY29udGV4dDogQXVkaW9Db250ZXh0O1xuICBnYWluTm9kZTtcbiAgcGFubmVyOiBTdGVyZW9QYW5uZXJOb2RlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG9wdDogeyBzYW1wbGVzOiBJU2FtcGxlW10gfSApIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMucGxheWVycyA9IG9wdC5zYW1wbGVzLm1hcCggc2FtcGxlQ29uZmlnID0+ICh7cGxheWVyOiBuZXcgSG93bCh7c3JjOiBzYW1wbGVDb25maWcuZmlsZXN9KSwgYmFzZUZyZXE6IHNhbXBsZUNvbmZpZy5mcmVxfSkgKTtcbiAgfVxuXG4gIHB1YmxpYyBwbGF5KG9wdDogSVBsYXlPcHRpb25zKSB7XG4gICAgY29uc3Qge2ZyZXE9MjIwLCB0aW1lPTEsIHBhbj0wLCB2b2w9MX0gPSBvcHQ7XG5cbiAgICBsZXQgZ2FpbiA9IDE7XG4gICAgY29uc3Qgc2FtcGxlUGxheWVyID0gdGhpcy5maW5kQ2xvc2VzdFNhbXBsZVBsYXllciggZnJlcSApO1xuICAgIGNvbnN0IGN1cnJlbnRseVBsYXlpbmdTYW1wbGVJRCA9IHNhbXBsZVBsYXllci5wbGF5ZXIucGxheSgpO1xuICAgIHNhbXBsZVBsYXllci5wbGF5ZXIubG9vcCggZmFsc2UsIGN1cnJlbnRseVBsYXlpbmdTYW1wbGVJRCApO1xuICAgIHNhbXBsZVBsYXllci5wbGF5ZXIucmF0ZSggdXRpbHMuZ2V0UmF0ZUZyb21GcmVxdWVuY2llcyggZnJlcSwgc2FtcGxlUGxheWVyLmJhc2VGcmVxICksIGN1cnJlbnRseVBsYXlpbmdTYW1wbGVJRCApO1xuICAgIC8vIHNvbWUgc3R1cGlkIGJhc2ljIHB5c2Nob2Fjb3VzdGljIHNoYXBpbmdcbiAgICBpZihmcmVxID4gMjAwKSBnYWluID0gZ2FpbiowLjI7XG4gICAgc2FtcGxlUGxheWVyLnBsYXllci5mYWRlKCAwLCBnYWluICogdm9sLCAyMDAsIGN1cnJlbnRseVBsYXlpbmdTYW1wbGVJRCApO1xuICAgIHNhbXBsZVBsYXllci5wbGF5ZXIuc3RlcmVvKCBwYW4sIGN1cnJlbnRseVBsYXlpbmdTYW1wbGVJRCApO1xuXG5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNhbXBsZVBsYXllci5wbGF5ZXIuZmFkZSggZ2FpbiAqIHZvbCwgMCwgMjAwLCBjdXJyZW50bHlQbGF5aW5nU2FtcGxlSUQgKTtcbiAgICAgIHRoaXMuc3RvcCh0aW1lLCBzYW1wbGVQbGF5ZXIsIGN1cnJlbnRseVBsYXlpbmdTYW1wbGVJRCApO1xuICAgIH0uYmluZCh0aGlzKSwgKCB0aW1lICogMTAwMCApICsgMjAwKTsgLy8gYWRkaW5nIGEgMTAwIG1zIGJ1ZmZlciB0byBhdm9pZCBhbnkgaXNzdWVzXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzdG9wKHRpbWUsIHNhbXBsZVBsYXllciwgY3VycmVudGx5UGxheWluZ1NhbXBsZUlEKSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzYW1wbGVQbGF5ZXIucGxheWVyLnN0b3AoKTtcbiAgICB9LmJpbmQodGhpcyksIDMwMCk7IC8vIGFkZGluZyBhIDEwMCBtcyBidWZmZXIgdG8gYXZvaWQgYW55IGlzc3Vlc1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGZpbmRDbG9zZXN0U2FtcGxlUGxheWVyKCBmcmVxOm51bWJlciApOiBJUGxheWVyIHtcbiAgICAvLyBDYW4gb25seSBnZXQgdGhlIGNsb3Nlc3QgZnJlcXVlbmN5IGluIHRoZSBzZXQgb2YgUGxheWVycycgZnJlcXVlbmNpZXMgc28gZ2V0IHRoYXQgZnJlcXVlbmN5LCB0aGVuIGZpbHRlciB0aGUgcGxheWVyc1xuICAgIGNvbnN0IGNsb3Nlc3RQbGF5ZXJGcmVxdWVuY3kgPSB1dGlscy5nZXRDbG9zZXN0TWVtYmVyKGZyZXEsIHRoaXMucGxheWVycy5tYXAoIHBsYXllciA9PiBwbGF5ZXIuYmFzZUZyZXEpICk7XG4gICAgcmV0dXJuIHV0aWxzLmZpbmRJbkNvbGxlY3Rpb24oIHRoaXMucGxheWVycywgbWVtYmVyID0+IG1lbWJlciA9PT0gY2xvc2VzdFBsYXllckZyZXF1ZW5jeSApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpU2FtcGxlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9NdWx0aVNhbXBsZXIudHMiLCIvKiFcbiAqICBob3dsZXIuanMgdjIuMC45XG4gKiAgaG93bGVyanMuY29tXG4gKlxuICogIChjKSAyMDEzLTIwMTgsIEphbWVzIFNpbXBzb24gb2YgR29sZEZpcmUgU3R1ZGlvc1xuICogIGdvbGRmaXJlc3R1ZGlvcy5jb21cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKiBHbG9iYWwgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBnbG9iYWwgY29udHJvbGxlci4gQWxsIGNvbnRhaW5lZCBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFwcGx5XG4gICAqIHRvIGFsbCBzb3VuZHMgdGhhdCBhcmUgY3VycmVudGx5IHBsYXlpbmcgb3Igd2lsbCBiZSBpbiB0aGUgZnV0dXJlLlxuICAgKi9cbiAgdmFyIEhvd2xlckdsb2JhbCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9O1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIGdsb2JhbCBIb3dsZXIgb2JqZWN0LlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIC8vIENyZWF0ZSBhIGdsb2JhbCBJRCBjb3VudGVyLlxuICAgICAgc2VsZi5fY291bnRlciA9IDEwMDA7XG5cbiAgICAgIC8vIEludGVybmFsIHByb3BlcnRpZXMuXG4gICAgICBzZWxmLl9jb2RlY3MgPSB7fTtcbiAgICAgIHNlbGYuX2hvd2xzID0gW107XG4gICAgICBzZWxmLl9tdXRlZCA9IGZhbHNlO1xuICAgICAgc2VsZi5fdm9sdW1lID0gMTtcbiAgICAgIHNlbGYuX2NhblBsYXlFdmVudCA9ICdjYW5wbGF5dGhyb3VnaCc7XG4gICAgICBzZWxmLl9uYXZpZ2F0b3IgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvcikgPyB3aW5kb3cubmF2aWdhdG9yIDogbnVsbDtcblxuICAgICAgLy8gUHVibGljIHByb3BlcnRpZXMuXG4gICAgICBzZWxmLm1hc3RlckdhaW4gPSBudWxsO1xuICAgICAgc2VsZi5ub0F1ZGlvID0gZmFsc2U7XG4gICAgICBzZWxmLnVzaW5nV2ViQXVkaW8gPSB0cnVlO1xuICAgICAgc2VsZi5hdXRvU3VzcGVuZCA9IHRydWU7XG4gICAgICBzZWxmLmN0eCA9IG51bGw7XG5cbiAgICAgIC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoZSBhdXRvIGlPUyBlbmFibGVyLlxuICAgICAgc2VsZi5tb2JpbGVBdXRvRW5hYmxlID0gdHJ1ZTtcblxuICAgICAgLy8gU2V0dXAgdGhlIHZhcmlvdXMgc3RhdGUgdmFsdWVzIGZvciBnbG9iYWwgdHJhY2tpbmcuXG4gICAgICBzZWxmLl9zZXR1cCgpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0L3NldCB0aGUgZ2xvYmFsIHZvbHVtZSBmb3IgYWxsIHNvdW5kcy5cbiAgICAgKiBAcGFyYW0gIHtGbG9hdH0gdm9sIFZvbHVtZSBmcm9tIDAuMCB0byAxLjAuXG4gICAgICogQHJldHVybiB7SG93bGVyL0Zsb2F0fSAgICAgUmV0dXJucyBzZWxmIG9yIGN1cnJlbnQgdm9sdW1lLlxuICAgICAqL1xuICAgIHZvbHVtZTogZnVuY3Rpb24odm9sKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuICAgICAgdm9sID0gcGFyc2VGbG9hdCh2b2wpO1xuXG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGFuIEF1ZGlvQ29udGV4dCBjcmVhdGVkIHlldCwgcnVuIHRoZSBzZXR1cC5cbiAgICAgIGlmICghc2VsZi5jdHgpIHtcbiAgICAgICAgc2V0dXBBdWRpb0NvbnRleHQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2b2wgIT09ICd1bmRlZmluZWQnICYmIHZvbCA+PSAwICYmIHZvbCA8PSAxKSB7XG4gICAgICAgIHNlbGYuX3ZvbHVtZSA9IHZvbDtcblxuICAgICAgICAvLyBEb24ndCB1cGRhdGUgYW55IG9mIHRoZSBub2RlcyBpZiB3ZSBhcmUgbXV0ZWQuXG4gICAgICAgIGlmIChzZWxmLl9tdXRlZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiB1c2luZyBXZWIgQXVkaW8sIHdlIGp1c3QgbmVlZCB0byBhZGp1c3QgdGhlIG1hc3RlciBnYWluLlxuICAgICAgICBpZiAoc2VsZi51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICAgICAgc2VsZi5tYXN0ZXJHYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUodm9sLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbmQgY2hhbmdlIHZvbHVtZSBmb3IgYWxsIEhUTUw1IGF1ZGlvIG5vZGVzLlxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoIXNlbGYuX2hvd2xzW2ldLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgLy8gR2V0IGFsbCBvZiB0aGUgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgICAgICAgIHZhciBpZHMgPSBzZWxmLl9ob3dsc1tpXS5fZ2V0U291bmRJZHMoKTtcblxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBzb3VuZHMgYW5kIGNoYW5nZSB0aGUgdm9sdW1lcy5cbiAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajxpZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5faG93bHNbaV0uX3NvdW5kQnlJZChpZHNbal0pO1xuXG4gICAgICAgICAgICAgIGlmIChzb3VuZCAmJiBzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLnZvbHVtZSA9IHNvdW5kLl92b2x1bWUgKiB2b2w7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGYuX3ZvbHVtZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIG11dGluZyBhbmQgdW5tdXRpbmcgZ2xvYmFsbHkuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbXV0ZWQgSXMgbXV0ZWQgb3Igbm90LlxuICAgICAqL1xuICAgIG11dGU6IGZ1bmN0aW9uKG11dGVkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGFuIEF1ZGlvQ29udGV4dCBjcmVhdGVkIHlldCwgcnVuIHRoZSBzZXR1cC5cbiAgICAgIGlmICghc2VsZi5jdHgpIHtcbiAgICAgICAgc2V0dXBBdWRpb0NvbnRleHQoKTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fbXV0ZWQgPSBtdXRlZDtcblxuICAgICAgLy8gV2l0aCBXZWIgQXVkaW8sIHdlIGp1c3QgbmVlZCB0byBtdXRlIHRoZSBtYXN0ZXIgZ2Fpbi5cbiAgICAgIGlmIChzZWxmLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgICAgc2VsZi5tYXN0ZXJHYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUobXV0ZWQgPyAwIDogc2VsZi5fdm9sdW1lLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgIH1cblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGFuZCBtdXRlIGFsbCBIVE1MNSBBdWRpbyBub2Rlcy5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXNlbGYuX2hvd2xzW2ldLl93ZWJBdWRpbykge1xuICAgICAgICAgIC8vIEdldCBhbGwgb2YgdGhlIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAgICAgICAgdmFyIGlkcyA9IHNlbGYuX2hvd2xzW2ldLl9nZXRTb3VuZElkcygpO1xuXG4gICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBzb3VuZHMgYW5kIG1hcmsgdGhlIGF1ZGlvIG5vZGUgYXMgbXV0ZWQuXG4gICAgICAgICAgZm9yICh2YXIgaj0wOyBqPGlkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5faG93bHNbaV0uX3NvdW5kQnlJZChpZHNbal0pO1xuXG4gICAgICAgICAgICBpZiAoc291bmQgJiYgc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUubXV0ZWQgPSAobXV0ZWQpID8gdHJ1ZSA6IHNvdW5kLl9tdXRlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVubG9hZCBhbmQgZGVzdHJveSBhbGwgY3VycmVudGx5IGxvYWRlZCBIb3dsIG9iamVjdHMuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIHVubG9hZDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICBmb3IgKHZhciBpPXNlbGYuX2hvd2xzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgc2VsZi5faG93bHNbaV0udW5sb2FkKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBhIG5ldyBBdWRpb0NvbnRleHQgdG8gbWFrZSBzdXJlIGl0IGlzIGZ1bGx5IHJlc2V0LlxuICAgICAgaWYgKHNlbGYudXNpbmdXZWJBdWRpbyAmJiBzZWxmLmN0eCAmJiB0eXBlb2Ygc2VsZi5jdHguY2xvc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuY3R4LmNsb3NlKCk7XG4gICAgICAgIHNlbGYuY3R4ID0gbnVsbDtcbiAgICAgICAgc2V0dXBBdWRpb0NvbnRleHQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBjb2RlYyBzdXBwb3J0IG9mIHNwZWNpZmljIGV4dGVuc2lvbi5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGV4dCBBdWRpbyBmaWxlIGV4dGVudGlvbi5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGNvZGVjczogZnVuY3Rpb24oZXh0KSB7XG4gICAgICByZXR1cm4gKHRoaXMgfHwgSG93bGVyKS5fY29kZWNzW2V4dC5yZXBsYWNlKC9eeC0vLCAnJyldO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCB2YXJpb3VzIHN0YXRlIHZhbHVlcyBmb3IgZ2xvYmFsIHRyYWNraW5nLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBfc2V0dXA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIHN1c3BlbmQvcmVzdW1lIHN0YXRlIG9mIHRoZSBBdWRpb0NvbnRleHQuXG4gICAgICBzZWxmLnN0YXRlID0gc2VsZi5jdHggPyBzZWxmLmN0eC5zdGF0ZSB8fCAncnVubmluZycgOiAncnVubmluZyc7XG5cbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgYmVnaW4gdGhlIDMwLXNlY29uZCBzdXNwZW5kIHByb2Nlc3NcbiAgICAgIHNlbGYuX2F1dG9TdXNwZW5kKCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIGF1ZGlvIGlzIGF2YWlsYWJsZS5cbiAgICAgIGlmICghc2VsZi51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICAgIC8vIE5vIGF1ZGlvIGlzIGF2YWlsYWJsZSBvbiB0aGlzIHN5c3RlbSBpZiBub0F1ZGlvIGlzIHNldCB0byB0cnVlLlxuICAgICAgICBpZiAodHlwZW9mIEF1ZGlvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdGVzdCA9IG5ldyBBdWRpbygpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2FucGxheXRocm91Z2ggZXZlbnQgaXMgYXZhaWxhYmxlLlxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXN0Lm9uY2FucGxheXRocm91Z2ggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2NhblBsYXlFdmVudCA9ICdjYW5wbGF5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHNlbGYubm9BdWRpbyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYubm9BdWRpbyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGVzdCB0byBtYWtlIHN1cmUgYXVkaW8gaXNuJ3QgZGlzYWJsZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgdGVzdCA9IG5ldyBBdWRpbygpO1xuICAgICAgICBpZiAodGVzdC5tdXRlZCkge1xuICAgICAgICAgIHNlbGYubm9BdWRpbyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIC8vIENoZWNrIGZvciBzdXBwb3J0ZWQgY29kZWNzLlxuICAgICAgaWYgKCFzZWxmLm5vQXVkaW8pIHtcbiAgICAgICAgc2VsZi5fc2V0dXBDb2RlY3MoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBicm93c2VyIHN1cHBvcnQgZm9yIHZhcmlvdXMgY29kZWNzIGFuZCBjYWNoZSB0aGUgcmVzdWx0cy5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX3NldHVwQ29kZWNzOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG4gICAgICB2YXIgYXVkaW9UZXN0ID0gbnVsbDtcblxuICAgICAgLy8gTXVzdCB3cmFwIGluIGEgdHJ5L2NhdGNoIGJlY2F1c2UgSUUxMSBpbiBzZXJ2ZXIgbW9kZSB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICB0cnkge1xuICAgICAgICBhdWRpb1Rlc3QgPSAodHlwZW9mIEF1ZGlvICE9PSAndW5kZWZpbmVkJykgPyBuZXcgQXVkaW8oKSA6IG51bGw7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIGlmICghYXVkaW9UZXN0IHx8IHR5cGVvZiBhdWRpb1Rlc3QuY2FuUGxheVR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIHZhciBtcGVnVGVzdCA9IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vbXBlZzsnKS5yZXBsYWNlKC9ebm8kLywgJycpO1xuXG4gICAgICAvLyBPcGVyYSB2ZXJzaW9uIDwzMyBoYXMgbWl4ZWQgTVAzIHN1cHBvcnQsIHNvIHdlIG5lZWQgdG8gY2hlY2sgZm9yIGFuZCBibG9jayBpdC5cbiAgICAgIHZhciBjaGVja09wZXJhID0gc2VsZi5fbmF2aWdhdG9yICYmIHNlbGYuX25hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL09QUlxcLyhbMC02XS4pL2cpO1xuICAgICAgdmFyIGlzT2xkT3BlcmEgPSAoY2hlY2tPcGVyYSAmJiBwYXJzZUludChjaGVja09wZXJhWzBdLnNwbGl0KCcvJylbMV0sIDEwKSA8IDMzKTtcblxuICAgICAgc2VsZi5fY29kZWNzID0ge1xuICAgICAgICBtcDM6ICEhKCFpc09sZE9wZXJhICYmIChtcGVnVGVzdCB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL21wMzsnKS5yZXBsYWNlKC9ebm8kLywgJycpKSksXG4gICAgICAgIG1wZWc6ICEhbXBlZ1Rlc3QsXG4gICAgICAgIG9wdXM6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cIm9wdXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIG9nZzogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBvZ2E6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgd2F2OiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2OyBjb2RlY3M9XCIxXCInKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBhYWM6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgY2FmOiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8veC1jYWY7JykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgbTRhOiAhIShhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3gtbTRhOycpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vbTRhOycpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vYWFjOycpKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBtcDQ6ICEhKGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8veC1tcDQ7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9tcDQ7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIHdlYmE6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby93ZWJtOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIHdlYm06ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby93ZWJtOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIGRvbGJ5OiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vbXA0OyBjb2RlY3M9XCJlYy0zXCInKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBmbGFjOiAhIShhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3gtZmxhYzsnKSB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL2ZsYWM7JykpLnJlcGxhY2UoL15ubyQvLCAnJylcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNb2JpbGUgYnJvd3NlcnMgd2lsbCBvbmx5IGFsbG93IGF1ZGlvIHRvIGJlIHBsYXllZCBhZnRlciBhIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICogQXR0ZW1wdCB0byBhdXRvbWF0aWNhbGx5IHVubG9jayBhdWRpbyBvbiB0aGUgZmlyc3QgdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgKiBDb25jZXB0IGZyb206IGh0dHA6Ly9wYXVsYmFrYXVzLmNvbS90dXRvcmlhbHMvaHRtbDUvd2ViLWF1ZGlvLW9uLWlvcy9cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX2VuYWJsZU1vYmlsZUF1ZGlvOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIC8vIE9ubHkgcnVuIHRoaXMgb24gbW9iaWxlIGRldmljZXMgaWYgYXVkaW8gaXNuJ3QgYWxyZWFkeSBlYW5ibGVkLlxuICAgICAgdmFyIGlzTW9iaWxlID0gL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZHxCbGFja0JlcnJ5fEJCMTB8U2lsa3xNb2JpL2kudGVzdChzZWxmLl9uYXZpZ2F0b3IgJiYgc2VsZi5fbmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgaXNUb3VjaCA9ICEhKCgnb250b3VjaGVuZCcgaW4gd2luZG93KSB8fCAoc2VsZi5fbmF2aWdhdG9yICYmIHNlbGYuX25hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDApIHx8IChzZWxmLl9uYXZpZ2F0b3IgJiYgc2VsZi5fbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAwKSk7XG4gICAgICBpZiAoc2VsZi5fbW9iaWxlRW5hYmxlZCB8fCAhc2VsZi5jdHggfHwgKCFpc01vYmlsZSAmJiAhaXNUb3VjaCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9tb2JpbGVFbmFibGVkID0gZmFsc2U7XG5cbiAgICAgIC8vIFNvbWUgbW9iaWxlIGRldmljZXMvcGxhdGZvcm1zIGhhdmUgZGlzdG9ydGlvbiBpc3N1ZXMgd2hlbiBvcGVuaW5nL2Nsb3NpbmcgdGFicyBhbmQvb3Igd2ViIHZpZXdzLlxuICAgICAgLy8gQnVncyBpbiB0aGUgYnJvd3NlciAoZXNwZWNpYWxseSBNb2JpbGUgU2FmYXJpKSBjYW4gY2F1c2UgdGhlIHNhbXBsZVJhdGUgdG8gY2hhbmdlIGZyb20gNDQxMDAgdG8gNDgwMDAuXG4gICAgICAvLyBCeSBjYWxsaW5nIEhvd2xlci51bmxvYWQoKSwgd2UgY3JlYXRlIGEgbmV3IEF1ZGlvQ29udGV4dCB3aXRoIHRoZSBjb3JyZWN0IHNhbXBsZVJhdGUuXG4gICAgICBpZiAoIXNlbGYuX21vYmlsZVVubG9hZGVkICYmIHNlbGYuY3R4LnNhbXBsZVJhdGUgIT09IDQ0MTAwKSB7XG4gICAgICAgIHNlbGYuX21vYmlsZVVubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgc2VsZi51bmxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2NyYXRjaCBidWZmZXIgZm9yIGVuYWJsaW5nIGlPUyB0byBkaXNwb3NlIG9mIHdlYiBhdWRpbyBidWZmZXJzIGNvcnJlY3RseSwgYXMgcGVyOlxuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDExOTY4NFxuICAgICAgc2VsZi5fc2NyYXRjaEJ1ZmZlciA9IHNlbGYuY3R4LmNyZWF0ZUJ1ZmZlcigxLCAxLCAyMjA1MCk7XG5cbiAgICAgIC8vIENhbGwgdGhpcyBtZXRob2Qgb24gdG91Y2ggc3RhcnQgdG8gY3JlYXRlIGFuZCBwbGF5IGEgYnVmZmVyLFxuICAgICAgLy8gdGhlbiBjaGVjayBpZiB0aGUgYXVkaW8gYWN0dWFsbHkgcGxheWVkIHRvIGRldGVybWluZSBpZlxuICAgICAgLy8gYXVkaW8gaGFzIG5vdyBiZWVuIHVubG9ja2VkIG9uIGlPUywgQW5kcm9pZCwgZXRjLlxuICAgICAgdmFyIHVubG9jayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBGaXggQW5kcm9pZCBjYW4gbm90IHBsYXkgaW4gc3VzcGVuZCBzdGF0ZS5cbiAgICAgICAgSG93bGVyLl9hdXRvUmVzdW1lKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuIGVtcHR5IGJ1ZmZlci5cbiAgICAgICAgdmFyIHNvdXJjZSA9IHNlbGYuY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICBzb3VyY2UuYnVmZmVyID0gc2VsZi5fc2NyYXRjaEJ1ZmZlcjtcbiAgICAgICAgc291cmNlLmNvbm5lY3Qoc2VsZi5jdHguZGVzdGluYXRpb24pO1xuXG4gICAgICAgIC8vIFBsYXkgdGhlIGVtcHR5IGJ1ZmZlci5cbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2Uuc3RhcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgc291cmNlLm5vdGVPbigwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3VyY2Uuc3RhcnQoMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsaW5nIHJlc3VtZSgpIG9uIGEgc3RhY2sgaW5pdGlhdGVkIGJ5IHVzZXIgZ2VzdHVyZSBpcyB3aGF0IGFjdHVhbGx5IHVubG9ja3MgdGhlIGF1ZGlvIG9uIEFuZHJvaWQgQ2hyb21lID49IDU1LlxuICAgICAgICBpZiAodHlwZW9mIHNlbGYuY3R4LnJlc3VtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHNlbGYuY3R4LnJlc3VtZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0dXAgYSB0aW1lb3V0IHRvIGNoZWNrIHRoYXQgd2UgYXJlIHVubG9ja2VkIG9uIHRoZSBuZXh0IGV2ZW50IGxvb3AuXG4gICAgICAgIHNvdXJjZS5vbmVuZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc291cmNlLmRpc2Nvbm5lY3QoMCk7XG5cbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHVubG9ja2VkIHN0YXRlIGFuZCBwcmV2ZW50IHRoaXMgY2hlY2sgZnJvbSBoYXBwZW5pbmcgYWdhaW4uXG4gICAgICAgICAgc2VsZi5fbW9iaWxlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgc2VsZi5tb2JpbGVBdXRvRW5hYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgdGhlIHRvdWNoIHN0YXJ0IGxpc3RlbmVyLlxuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB1bmxvY2ssIHRydWUpO1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdW5sb2NrLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFNldHVwIGEgdG91Y2ggc3RhcnQgbGlzdGVuZXIgdG8gYXR0ZW1wdCBhbiB1bmxvY2sgaW4uXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdW5sb2NrLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdW5sb2NrLCB0cnVlKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF1dG9tYXRpY2FsbHkgc3VzcGVuZCB0aGUgV2ViIEF1ZGlvIEF1ZGlvQ29udGV4dCBhZnRlciBubyBzb3VuZCBoYXMgcGxheWVkIGZvciAzMCBzZWNvbmRzLlxuICAgICAqIFRoaXMgc2F2ZXMgcHJvY2Vzc2luZy9lbmVyZ3kgYW5kIGZpeGVzIHZhcmlvdXMgYnJvd3Nlci1zcGVjaWZpYyBidWdzIHdpdGggYXVkaW8gZ2V0dGluZyBzdHVjay5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX2F1dG9TdXNwZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKCFzZWxmLmF1dG9TdXNwZW5kIHx8ICFzZWxmLmN0eCB8fCB0eXBlb2Ygc2VsZi5jdHguc3VzcGVuZCA9PT0gJ3VuZGVmaW5lZCcgfHwgIUhvd2xlci51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgYW55IHNvdW5kcyBhcmUgcGxheWluZy5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5faG93bHNbaV0uX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgZm9yICh2YXIgaj0wOyBqPHNlbGYuX2hvd2xzW2ldLl9zb3VuZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5faG93bHNbaV0uX3NvdW5kc1tqXS5fcGF1c2VkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5fc3VzcGVuZFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzZWxmLl9zdXNwZW5kVGltZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBzb3VuZCBoYXMgcGxheWVkIGFmdGVyIDMwIHNlY29uZHMsIHN1c3BlbmQgdGhlIGNvbnRleHQuXG4gICAgICBzZWxmLl9zdXNwZW5kVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXNlbGYuYXV0b1N1c3BlbmQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLl9zdXNwZW5kVGltZXIgPSBudWxsO1xuICAgICAgICBzZWxmLnN0YXRlID0gJ3N1c3BlbmRpbmcnO1xuICAgICAgICBzZWxmLmN0eC5zdXNwZW5kKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLnN0YXRlID0gJ3N1c3BlbmRlZCc7XG5cbiAgICAgICAgICBpZiAoc2VsZi5fcmVzdW1lQWZ0ZXJTdXNwZW5kKSB7XG4gICAgICAgICAgICBkZWxldGUgc2VsZi5fcmVzdW1lQWZ0ZXJTdXNwZW5kO1xuICAgICAgICAgICAgc2VsZi5fYXV0b1Jlc3VtZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCAzMDAwMCk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdXRvbWF0aWNhbGx5IHJlc3VtZSB0aGUgV2ViIEF1ZGlvIEF1ZGlvQ29udGV4dCB3aGVuIGEgbmV3IHNvdW5kIGlzIHBsYXllZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX2F1dG9SZXN1bWU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoIXNlbGYuY3R4IHx8IHR5cGVvZiBzZWxmLmN0eC5yZXN1bWUgPT09ICd1bmRlZmluZWQnIHx8ICFIb3dsZXIudXNpbmdXZWJBdWRpbykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLnN0YXRlID09PSAncnVubmluZycgJiYgc2VsZi5fc3VzcGVuZFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzZWxmLl9zdXNwZW5kVGltZXIpO1xuICAgICAgICBzZWxmLl9zdXNwZW5kVGltZXIgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLnN0YXRlID09PSAnc3VzcGVuZGVkJykge1xuICAgICAgICBzZWxmLmN0eC5yZXN1bWUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuc3RhdGUgPSAncnVubmluZyc7XG5cbiAgICAgICAgICAvLyBFbWl0IHRvIGFsbCBIb3dscyB0aGF0IHRoZSBhdWRpbyBoYXMgcmVzdW1lZC5cbiAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNlbGYuX2hvd2xzW2ldLl9lbWl0KCdyZXN1bWUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzZWxmLl9zdXNwZW5kVGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5fc3VzcGVuZFRpbWVyKTtcbiAgICAgICAgICBzZWxmLl9zdXNwZW5kVGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuc3RhdGUgPT09ICdzdXNwZW5kaW5nJykge1xuICAgICAgICBzZWxmLl9yZXN1bWVBZnRlclN1c3BlbmQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2V0dXAgdGhlIGdsb2JhbCBhdWRpbyBjb250cm9sbGVyLlxuICB2YXIgSG93bGVyID0gbmV3IEhvd2xlckdsb2JhbCgpO1xuXG4gIC8qKiBHcm91cCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gYXVkaW8gZ3JvdXAgY29udHJvbGxlci5cbiAgICogQHBhcmFtIHtPYmplY3R9IG8gUGFzc2VkIGluIHByb3BlcnRpZXMgZm9yIHRoaXMgZ3JvdXAuXG4gICAqL1xuICB2YXIgSG93bCA9IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiBubyBzb3VyY2UgaXMgcHJvdmlkZWQuXG4gICAgaWYgKCFvLnNyYyB8fCBvLnNyYy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGFycmF5IG9mIHNvdXJjZSBmaWxlcyBtdXN0IGJlIHBhc3NlZCB3aXRoIGFueSBuZXcgSG93bC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLmluaXQobyk7XG4gIH07XG4gIEhvd2wucHJvdG90eXBlID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgYSBuZXcgSG93bCBncm91cCBvYmplY3QuXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvIFBhc3NlZCBpbiBwcm9wZXJ0aWVzIGZvciB0aGlzIGdyb3VwLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24obykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGFuIEF1ZGlvQ29udGV4dCBjcmVhdGVkIHlldCwgcnVuIHRoZSBzZXR1cC5cbiAgICAgIGlmICghSG93bGVyLmN0eCkge1xuICAgICAgICBzZXR1cEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cCB1c2VyLWRlZmluZWQgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fYXV0b3BsYXkgPSBvLmF1dG9wbGF5IHx8IGZhbHNlO1xuICAgICAgc2VsZi5fZm9ybWF0ID0gKHR5cGVvZiBvLmZvcm1hdCAhPT0gJ3N0cmluZycpID8gby5mb3JtYXQgOiBbby5mb3JtYXRdO1xuICAgICAgc2VsZi5faHRtbDUgPSBvLmh0bWw1IHx8IGZhbHNlO1xuICAgICAgc2VsZi5fbXV0ZWQgPSBvLm11dGUgfHwgZmFsc2U7XG4gICAgICBzZWxmLl9sb29wID0gby5sb29wIHx8IGZhbHNlO1xuICAgICAgc2VsZi5fcG9vbCA9IG8ucG9vbCB8fCA1O1xuICAgICAgc2VsZi5fcHJlbG9hZCA9ICh0eXBlb2Ygby5wcmVsb2FkID09PSAnYm9vbGVhbicpID8gby5wcmVsb2FkIDogdHJ1ZTtcbiAgICAgIHNlbGYuX3JhdGUgPSBvLnJhdGUgfHwgMTtcbiAgICAgIHNlbGYuX3Nwcml0ZSA9IG8uc3ByaXRlIHx8IHt9O1xuICAgICAgc2VsZi5fc3JjID0gKHR5cGVvZiBvLnNyYyAhPT0gJ3N0cmluZycpID8gby5zcmMgOiBbby5zcmNdO1xuICAgICAgc2VsZi5fdm9sdW1lID0gby52b2x1bWUgIT09IHVuZGVmaW5lZCA/IG8udm9sdW1lIDogMTtcbiAgICAgIHNlbGYuX3hocldpdGhDcmVkZW50aWFscyA9IG8ueGhyV2l0aENyZWRlbnRpYWxzIHx8IGZhbHNlO1xuXG4gICAgICAvLyBTZXR1cCBhbGwgb3RoZXIgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fZHVyYXRpb24gPSAwO1xuICAgICAgc2VsZi5fc3RhdGUgPSAndW5sb2FkZWQnO1xuICAgICAgc2VsZi5fc291bmRzID0gW107XG4gICAgICBzZWxmLl9lbmRUaW1lcnMgPSB7fTtcbiAgICAgIHNlbGYuX3F1ZXVlID0gW107XG4gICAgICBzZWxmLl9wbGF5TG9jayA9IGZhbHNlO1xuXG4gICAgICAvLyBTZXR1cCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICBzZWxmLl9vbmVuZCA9IG8ub25lbmQgPyBbe2ZuOiBvLm9uZW5kfV0gOiBbXTtcbiAgICAgIHNlbGYuX29uZmFkZSA9IG8ub25mYWRlID8gW3tmbjogby5vbmZhZGV9XSA6IFtdO1xuICAgICAgc2VsZi5fb25sb2FkID0gby5vbmxvYWQgPyBbe2ZuOiBvLm9ubG9hZH1dIDogW107XG4gICAgICBzZWxmLl9vbmxvYWRlcnJvciA9IG8ub25sb2FkZXJyb3IgPyBbe2ZuOiBvLm9ubG9hZGVycm9yfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucGxheWVycm9yID0gby5vbnBsYXllcnJvciA/IFt7Zm46IG8ub25wbGF5ZXJyb3J9XSA6IFtdO1xuICAgICAgc2VsZi5fb25wYXVzZSA9IG8ub25wYXVzZSA/IFt7Zm46IG8ub25wYXVzZX1dIDogW107XG4gICAgICBzZWxmLl9vbnBsYXkgPSBvLm9ucGxheSA/IFt7Zm46IG8ub25wbGF5fV0gOiBbXTtcbiAgICAgIHNlbGYuX29uc3RvcCA9IG8ub25zdG9wID8gW3tmbjogby5vbnN0b3B9XSA6IFtdO1xuICAgICAgc2VsZi5fb25tdXRlID0gby5vbm11dGUgPyBbe2ZuOiBvLm9ubXV0ZX1dIDogW107XG4gICAgICBzZWxmLl9vbnZvbHVtZSA9IG8ub252b2x1bWUgPyBbe2ZuOiBvLm9udm9sdW1lfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucmF0ZSA9IG8ub25yYXRlID8gW3tmbjogby5vbnJhdGV9XSA6IFtdO1xuICAgICAgc2VsZi5fb25zZWVrID0gby5vbnNlZWsgPyBbe2ZuOiBvLm9uc2Vla31dIDogW107XG4gICAgICBzZWxmLl9vbnJlc3VtZSA9IFtdO1xuXG4gICAgICAvLyBXZWIgQXVkaW8gb3IgSFRNTDUgQXVkaW8/XG4gICAgICBzZWxmLl93ZWJBdWRpbyA9IEhvd2xlci51c2luZ1dlYkF1ZGlvICYmICFzZWxmLl9odG1sNTtcblxuICAgICAgLy8gQXV0b21hdGljYWxseSB0cnkgdG8gZW5hYmxlIGF1ZGlvIG9uIGlPUy5cbiAgICAgIGlmICh0eXBlb2YgSG93bGVyLmN0eCAhPT0gJ3VuZGVmaW5lZCcgJiYgSG93bGVyLmN0eCAmJiBIb3dsZXIubW9iaWxlQXV0b0VuYWJsZSkge1xuICAgICAgICBIb3dsZXIuX2VuYWJsZU1vYmlsZUF1ZGlvKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhpcyBIb3dsIGdyb3VwIGluIHRoZSBnbG9iYWwgY29udHJvbGxlci5cbiAgICAgIEhvd2xlci5faG93bHMucHVzaChzZWxmKTtcblxuICAgICAgLy8gSWYgdGhleSBzZWxlY3RlZCBhdXRvcGxheSwgYWRkIGEgcGxheSBldmVudCB0byB0aGUgbG9hZCBxdWV1ZS5cbiAgICAgIGlmIChzZWxmLl9hdXRvcGxheSkge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3BsYXknLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBMb2FkIHRoZSBzb3VyY2UgZmlsZSB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAgICAgIGlmIChzZWxmLl9wcmVsb2FkKSB7XG4gICAgICAgIHNlbGYubG9hZCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTG9hZCB0aGUgYXVkaW8gZmlsZS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgdXJsID0gbnVsbDtcblxuICAgICAgLy8gSWYgbm8gYXVkaW8gaXMgYXZhaWxhYmxlLCBxdWl0IGltbWVkaWF0ZWx5LlxuICAgICAgaWYgKEhvd2xlci5ub0F1ZGlvKSB7XG4gICAgICAgIHNlbGYuX2VtaXQoJ2xvYWRlcnJvcicsIG51bGwsICdObyBhdWRpbyBzdXBwb3J0LicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSBvdXIgc291cmNlIGlzIGluIGFuIGFycmF5LlxuICAgICAgaWYgKHR5cGVvZiBzZWxmLl9zcmMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHNlbGYuX3NyYyA9IFtzZWxmLl9zcmNdO1xuICAgICAgfVxuXG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHNvdXJjZXMgYW5kIHBpY2sgdGhlIGZpcnN0IG9uZSB0aGF0IGlzIGNvbXBhdGlibGUuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBleHQsIHN0cjtcblxuICAgICAgICBpZiAoc2VsZi5fZm9ybWF0ICYmIHNlbGYuX2Zvcm1hdFtpXSkge1xuICAgICAgICAgIC8vIElmIGFuIGV4dGVuc2lvbiB3YXMgc3BlY2lmaWVkLCB1c2UgdGhhdCBpbnN0ZWFkLlxuICAgICAgICAgIGV4dCA9IHNlbGYuX2Zvcm1hdFtpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHNvdXJjZSBpcyBhIHN0cmluZy5cbiAgICAgICAgICBzdHIgPSBzZWxmLl9zcmNbaV07XG4gICAgICAgICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdsb2FkZXJyb3InLCBudWxsLCAnTm9uLXN0cmluZyBmb3VuZCBpbiBzZWxlY3RlZCBhdWRpbyBzb3VyY2VzIC0gaWdub3JpbmcuJyk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBFeHRyYWN0IHRoZSBmaWxlIGV4dGVuc2lvbiBmcm9tIHRoZSBVUkwgb3IgYmFzZTY0IGRhdGEgVVJJLlxuICAgICAgICAgIGV4dCA9IC9eZGF0YTphdWRpb1xcLyhbXjssXSspOy9pLmV4ZWMoc3RyKTtcbiAgICAgICAgICBpZiAoIWV4dCkge1xuICAgICAgICAgICAgZXh0ID0gL1xcLihbXi5dKykkLy5leGVjKHN0ci5zcGxpdCgnPycsIDEpWzBdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXh0KSB7XG4gICAgICAgICAgICBleHQgPSBleHRbMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb2cgYSB3YXJuaW5nIGlmIG5vIGV4dGVuc2lvbiB3YXMgZm91bmQuXG4gICAgICAgIGlmICghZXh0KSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdObyBmaWxlIGV4dGVuc2lvbiB3YXMgZm91bmQuIENvbnNpZGVyIHVzaW5nIHRoZSBcImZvcm1hdFwiIHByb3BlcnR5IG9yIHNwZWNpZnkgYW4gZXh0ZW5zaW9uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBleHRlbnNpb24gaXMgYXZhaWxhYmxlLlxuICAgICAgICBpZiAoZXh0ICYmIEhvd2xlci5jb2RlY3MoZXh0KSkge1xuICAgICAgICAgIHVybCA9IHNlbGYuX3NyY1tpXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXVybCkge1xuICAgICAgICBzZWxmLl9lbWl0KCdsb2FkZXJyb3InLCBudWxsLCAnTm8gY29kZWMgc3VwcG9ydCBmb3Igc2VsZWN0ZWQgYXVkaW8gc291cmNlcy4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9zcmMgPSB1cmw7XG4gICAgICBzZWxmLl9zdGF0ZSA9ICdsb2FkaW5nJztcblxuICAgICAgLy8gSWYgdGhlIGhvc3RpbmcgcGFnZSBpcyBIVFRQUyBhbmQgdGhlIHNvdXJjZSBpc24ndCxcbiAgICAgIC8vIGRyb3AgZG93biB0byBIVE1MNSBBdWRpbyB0byBhdm9pZCBNaXhlZCBDb250ZW50IGVycm9ycy5cbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonICYmIHVybC5zbGljZSgwLCA1KSA9PT0gJ2h0dHA6Jykge1xuICAgICAgICBzZWxmLl9odG1sNSA9IHRydWU7XG4gICAgICAgIHNlbGYuX3dlYkF1ZGlvID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBhIG5ldyBzb3VuZCBvYmplY3QgYW5kIGFkZCBpdCB0byB0aGUgcG9vbC5cbiAgICAgIG5ldyBTb3VuZChzZWxmKTtcblxuICAgICAgLy8gTG9hZCBhbmQgZGVjb2RlIHRoZSBhdWRpbyBkYXRhIGZvciBwbGF5YmFjay5cbiAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICBsb2FkQnVmZmVyKHNlbGYpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGxheSBhIHNvdW5kIG9yIHJlc3VtZSBwcmV2aW91cyBwbGF5YmFjay5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmcvTnVtYmVyfSBzcHJpdGUgICBTcHJpdGUgbmFtZSBmb3Igc3ByaXRlIHBsYXliYWNrIG9yIHNvdW5kIGlkIHRvIGNvbnRpbnVlIHByZXZpb3VzLlxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGludGVybmFsIEludGVybmFsIFVzZTogdHJ1ZSBwcmV2ZW50cyBldmVudCBmaXJpbmcuXG4gICAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICBTb3VuZCBJRC5cbiAgICAgKi9cbiAgICBwbGF5OiBmdW5jdGlvbihzcHJpdGUsIGludGVybmFsKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgaWQgPSBudWxsO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgaWYgYSBzcHJpdGUsIHNvdW5kIGlkIG9yIG5vdGhpbmcgd2FzIHBhc3NlZFxuICAgICAgaWYgKHR5cGVvZiBzcHJpdGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlkID0gc3ByaXRlO1xuICAgICAgICBzcHJpdGUgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3ByaXRlID09PSAnc3RyaW5nJyAmJiBzZWxmLl9zdGF0ZSA9PT0gJ2xvYWRlZCcgJiYgIXNlbGYuX3Nwcml0ZVtzcHJpdGVdKSB7XG4gICAgICAgIC8vIElmIHRoZSBwYXNzZWQgc3ByaXRlIGRvZXNuJ3QgZXhpc3QsIGRvIG5vdGhpbmcuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3ByaXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBVc2UgdGhlIGRlZmF1bHQgc291bmQgc3ByaXRlIChwbGF5cyB0aGUgZnVsbCBhdWRpbyBsZW5ndGgpLlxuICAgICAgICBzcHJpdGUgPSAnX19kZWZhdWx0JztcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHNpbmdsZSBwYXVzZWQgc291bmQgdGhhdCBpc24ndCBlbmRlZC5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMsIHBsYXkgdGhhdCBzb3VuZC4gSWYgbm90LCBjb250aW51ZSBhcyB1c3VhbC5cbiAgICAgICAgdmFyIG51bSA9IDA7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9zb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoc2VsZi5fc291bmRzW2ldLl9wYXVzZWQgJiYgIXNlbGYuX3NvdW5kc1tpXS5fZW5kZWQpIHtcbiAgICAgICAgICAgIG51bSsrO1xuICAgICAgICAgICAgaWQgPSBzZWxmLl9zb3VuZHNbaV0uX2lkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChudW0gPT09IDEpIHtcbiAgICAgICAgICBzcHJpdGUgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBHZXQgdGhlIHNlbGVjdGVkIG5vZGUsIG9yIGdldCBvbmUgZnJvbSB0aGUgcG9vbC5cbiAgICAgIHZhciBzb3VuZCA9IGlkID8gc2VsZi5fc291bmRCeUlkKGlkKSA6IHNlbGYuX2luYWN0aXZlU291bmQoKTtcblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGRvZXNuJ3QgZXhpc3QsIGRvIG5vdGhpbmcuXG4gICAgICBpZiAoIXNvdW5kKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWxlY3QgdGhlIHNwcml0ZSBkZWZpbml0aW9uLlxuICAgICAgaWYgKGlkICYmICFzcHJpdGUpIHtcbiAgICAgICAgc3ByaXRlID0gc291bmQuX3Nwcml0ZSB8fCAnX19kZWZhdWx0JztcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIHdlIG11c3Qgd2FpdCB0byBnZXQgdGhlIGF1ZGlvJ3MgZHVyYXRpb24uXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gd2FpdCB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcnVuIGludG8gcmFjZSBjb25kaXRpb25zIHdpdGhcbiAgICAgIC8vIHRoZSBvcmRlciBvZiBmdW5jdGlvbiBjYWxscy5cbiAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgLy8gU2V0IHRoZSBzcHJpdGUgdmFsdWUgb24gdGhpcyBzb3VuZC5cbiAgICAgICAgc291bmQuX3Nwcml0ZSA9IHNwcml0ZTtcblxuICAgICAgICAvLyBNYWtyIHRoaXMgc291bmRlZCBhcyBub3QgZW5kZWQgaW4gY2FzZSBhbm90aGVyIHNvdW5kIGlzIHBsYXllZCBiZWZvcmUgdGhpcyBvbmUgbG9hZHMuXG4gICAgICAgIHNvdW5kLl9lbmRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgc291bmQgdG8gdGhlIHF1ZXVlIHRvIGJlIHBsYXllZCBvbiBsb2FkLlxuICAgICAgICB2YXIgc291bmRJZCA9IHNvdW5kLl9pZDtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdwbGF5JyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5wbGF5KHNvdW5kSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNvdW5kSWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIERvbid0IHBsYXkgdGhlIHNvdW5kIGlmIGFuIGlkIHdhcyBwYXNzZWQgYW5kIGl0IGlzIGFscmVhZHkgcGxheWluZy5cbiAgICAgIGlmIChpZCAmJiAhc291bmQuX3BhdXNlZCkge1xuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBwbGF5IGV2ZW50LCBpbiBvcmRlciB0byBrZWVwIGl0ZXJhdGluZyB0aHJvdWdoIHF1ZXVlLlxuICAgICAgICBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgc2VsZi5fbG9hZFF1ZXVlKCdwbGF5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc291bmQuX2lkO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIEF1ZGlvQ29udGV4dCBpc24ndCBzdXNwZW5kZWQsIGFuZCByZXN1bWUgaXQgaWYgaXQgaXMuXG4gICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgSG93bGVyLl9hdXRvUmVzdW1lKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIERldGVybWluZSBob3cgbG9uZyB0byBwbGF5IGZvciBhbmQgd2hlcmUgdG8gc3RhcnQgcGxheWluZy5cbiAgICAgIHZhciBzZWVrID0gTWF0aC5tYXgoMCwgc291bmQuX3NlZWsgPiAwID8gc291bmQuX3NlZWsgOiBzZWxmLl9zcHJpdGVbc3ByaXRlXVswXSAvIDEwMDApO1xuICAgICAgdmFyIGR1cmF0aW9uID0gTWF0aC5tYXgoMCwgKChzZWxmLl9zcHJpdGVbc3ByaXRlXVswXSArIHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzFdKSAvIDEwMDApIC0gc2Vlayk7XG4gICAgICB2YXIgdGltZW91dCA9IChkdXJhdGlvbiAqIDEwMDApIC8gTWF0aC5hYnMoc291bmQuX3JhdGUpO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIHNvdW5kXG4gICAgICBzb3VuZC5fcGF1c2VkID0gZmFsc2U7XG4gICAgICBzb3VuZC5fZW5kZWQgPSBmYWxzZTtcbiAgICAgIHNvdW5kLl9zcHJpdGUgPSBzcHJpdGU7XG4gICAgICBzb3VuZC5fc2VlayA9IHNlZWs7XG4gICAgICBzb3VuZC5fc3RhcnQgPSBzZWxmLl9zcHJpdGVbc3ByaXRlXVswXSAvIDEwMDA7XG4gICAgICBzb3VuZC5fc3RvcCA9IChzZWxmLl9zcHJpdGVbc3ByaXRlXVswXSArIHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzFdKSAvIDEwMDA7XG4gICAgICBzb3VuZC5fbG9vcCA9ICEhKHNvdW5kLl9sb29wIHx8IHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzJdKTtcblxuICAgICAgLy8gQmVnaW4gdGhlIGFjdHVhbCBwbGF5YmFjay5cbiAgICAgIHZhciBub2RlID0gc291bmQuX25vZGU7XG4gICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgLy8gRmlyZSB0aGlzIHdoZW4gdGhlIHNvdW5kIGlzIHJlYWR5IHRvIHBsYXkgdG8gYmVnaW4gV2ViIEF1ZGlvIHBsYXliYWNrLlxuICAgICAgICB2YXIgcGxheVdlYkF1ZGlvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5fcmVmcmVzaEJ1ZmZlcihzb3VuZCk7XG5cbiAgICAgICAgICAvLyBTZXR1cCB0aGUgcGxheWJhY2sgcGFyYW1zLlxuICAgICAgICAgIHZhciB2b2wgPSAoc291bmQuX211dGVkIHx8IHNlbGYuX211dGVkKSA/IDAgOiBzb3VuZC5fdm9sdW1lO1xuICAgICAgICAgIG5vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZSh2b2wsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgIHNvdW5kLl9wbGF5U3RhcnQgPSBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lO1xuXG4gICAgICAgICAgLy8gUGxheSB0aGUgc291bmQgdXNpbmcgdGhlIHN1cHBvcnRlZCBtZXRob2QuXG4gICAgICAgICAgaWYgKHR5cGVvZiBub2RlLmJ1ZmZlclNvdXJjZS5zdGFydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHNvdW5kLl9sb29wID8gbm9kZS5idWZmZXJTb3VyY2Uubm90ZUdyYWluT24oMCwgc2VlaywgODY0MDApIDogbm9kZS5idWZmZXJTb3VyY2Uubm90ZUdyYWluT24oMCwgc2VlaywgZHVyYXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzb3VuZC5fbG9vcCA/IG5vZGUuYnVmZmVyU291cmNlLnN0YXJ0KDAsIHNlZWssIDg2NDAwKSA6IG5vZGUuYnVmZmVyU291cmNlLnN0YXJ0KDAsIHNlZWssIGR1cmF0aW9uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTdGFydCBhIG5ldyB0aW1lciBpZiBub25lIGlzIHByZXNlbnQuXG4gICAgICAgICAgaWYgKHRpbWVvdXQgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICBzZWxmLl9lbmRUaW1lcnNbc291bmQuX2lkXSA9IHNldFRpbWVvdXQoc2VsZi5fZW5kZWQuYmluZChzZWxmLCBzb3VuZCksIHRpbWVvdXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXknLCBzb3VuZC5faWQpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChIb3dsZXIuc3RhdGUgPT09ICdydW5uaW5nJykge1xuICAgICAgICAgIHBsYXlXZWJBdWRpbygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYub25jZSgncmVzdW1lJywgcGxheVdlYkF1ZGlvKTtcblxuICAgICAgICAgIC8vIENhbmNlbCB0aGUgZW5kIHRpbWVyLlxuICAgICAgICAgIHNlbGYuX2NsZWFyVGltZXIoc291bmQuX2lkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmlyZSB0aGlzIHdoZW4gdGhlIHNvdW5kIGlzIHJlYWR5IHRvIHBsYXkgdG8gYmVnaW4gSFRNTDUgQXVkaW8gcGxheWJhY2suXG4gICAgICAgIHZhciBwbGF5SHRtbDUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBub2RlLmN1cnJlbnRUaW1lID0gc2VlaztcbiAgICAgICAgICBub2RlLm11dGVkID0gc291bmQuX211dGVkIHx8IHNlbGYuX211dGVkIHx8IEhvd2xlci5fbXV0ZWQgfHwgbm9kZS5tdXRlZDtcbiAgICAgICAgICBub2RlLnZvbHVtZSA9IHNvdW5kLl92b2x1bWUgKiBIb3dsZXIudm9sdW1lKCk7XG4gICAgICAgICAgbm9kZS5wbGF5YmFja1JhdGUgPSBzb3VuZC5fcmF0ZTtcblxuICAgICAgICAgIC8vIE1vYmlsZSBicm93c2VycyB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoaXMgaXMgY2FsbGVkIHdpdGhvdXQgdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHBsYXkgPSBub2RlLnBsYXkoKTtcblxuICAgICAgICAgICAgLy8gU3VwcG9ydCBvbGRlciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgcHJvbWlzZXMsIGFuZCB0aHVzIGRvbid0IGhhdmUgdGhpcyBpc3N1ZS5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGxheSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgLy8gSW1wbGVtZW50cyBhIGxvY2sgdG8gcHJldmVudCBET01FeGNlcHRpb246IFRoZSBwbGF5KCkgcmVxdWVzdCB3YXMgaW50ZXJydXB0ZWQgYnkgYSBjYWxsIHRvIHBhdXNlKCkuXG4gICAgICAgICAgICAgIHNlbGYuX3BsYXlMb2NrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAvLyBSZWxlYXNlcyB0aGUgbG9jayBhbmQgZXhlY3V0ZXMgcXVldWVkIGFjdGlvbnMuXG4gICAgICAgICAgICAgIHZhciBydW5Mb2FkUXVldWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXknLCBzb3VuZC5faWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcGxheS50aGVuKHJ1bkxvYWRRdWV1ZSwgcnVuTG9hZFF1ZXVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXknLCBzb3VuZC5faWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGUgbm9kZSBpcyBzdGlsbCBwYXVzZWQsIHRoZW4gd2UgY2FuIGFzc3VtZSB0aGVyZSB3YXMgYSBwbGF5YmFjayBpc3N1ZS5cbiAgICAgICAgICAgIGlmIChub2RlLnBhdXNlZCkge1xuICAgICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5ZXJyb3InLCBzb3VuZC5faWQsICdQbGF5YmFjayB3YXMgdW5hYmxlIHRvIHN0YXJ0LiBUaGlzIGlzIG1vc3QgY29tbW9ubHkgYW4gaXNzdWUgJyArXG4gICAgICAgICAgICAgICAgJ29uIG1vYmlsZSBkZXZpY2VzIHdoZXJlIHBsYXliYWNrIHdhcyBub3Qgd2l0aGluIGEgdXNlciBpbnRlcmFjdGlvbi4nKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXR1cCB0aGUgZW5kIHRpbWVyIG9uIHNwcml0ZXMgb3IgbGlzdGVuIGZvciB0aGUgZW5kZWQgZXZlbnQuXG4gICAgICAgICAgICBpZiAoc3ByaXRlICE9PSAnX19kZWZhdWx0Jykge1xuICAgICAgICAgICAgICBzZWxmLl9lbmRUaW1lcnNbc291bmQuX2lkXSA9IHNldFRpbWVvdXQoc2VsZi5fZW5kZWQuYmluZChzZWxmLCBzb3VuZCksIHRpbWVvdXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyBGaXJlIGVuZGVkIG9uIHRoaXMgYXVkaW8gbm9kZS5cbiAgICAgICAgICAgICAgICBzZWxmLl9lbmRlZChzb3VuZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGlzIGxpc3RlbmVyLlxuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBzZWxmLl9lbmRUaW1lcnNbc291bmQuX2lkXSwgZmFsc2UpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXllcnJvcicsIHNvdW5kLl9pZCwgZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUGxheSBpbW1lZGlhdGVseSBpZiByZWFkeSwgb3Igd2FpdCBmb3IgdGhlICdjYW5wbGF5dGhyb3VnaCdlIHZlbnQuXG4gICAgICAgIHZhciBsb2FkZWROb1JlYWR5U3RhdGUgPSAod2luZG93ICYmIHdpbmRvdy5lamVjdGEpIHx8ICghbm9kZS5yZWFkeVN0YXRlICYmIEhvd2xlci5fbmF2aWdhdG9yLmlzQ29jb29uSlMpO1xuICAgICAgICBpZiAobm9kZS5yZWFkeVN0YXRlID49IDMgfHwgbG9hZGVkTm9SZWFkeVN0YXRlKSB7XG4gICAgICAgICAgcGxheUh0bWw1KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBCZWdpbiBwbGF5YmFjay5cbiAgICAgICAgICAgIHBsYXlIdG1sNSgpO1xuXG4gICAgICAgICAgICAvLyBDbGVhciB0aGlzIGxpc3RlbmVyLlxuICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKEhvd2xlci5fY2FuUGxheUV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKEhvd2xlci5fY2FuUGxheUV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuXG4gICAgICAgICAgLy8gQ2FuY2VsIHRoZSBlbmQgdGltZXIuXG4gICAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihzb3VuZC5faWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzb3VuZC5faWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBhdXNlIHBsYXliYWNrIGFuZCBzYXZlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBUaGUgc291bmQgSUQgKGVtcHR5IHRvIHBhdXNlIGFsbCBpbiBncm91cCkuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBwYXVzZTogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQgb3IgYSBwbGF5KCkgcHJvbWlzZSBpcyBwZW5kaW5nLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gcGF1c2Ugd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJyB8fCBzZWxmLl9wbGF5TG9jaykge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3BhdXNlJyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5wYXVzZShpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gaWQgaXMgcGFzc2VkLCBnZXQgYWxsIElEJ3MgdG8gYmUgcGF1c2VkLlxuICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcblxuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBDbGVhciB0aGUgZW5kIHRpbWVyLlxuICAgICAgICBzZWxmLl9jbGVhclRpbWVyKGlkc1tpXSk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgICAgaWYgKHNvdW5kICYmICFzb3VuZC5fcGF1c2VkKSB7XG4gICAgICAgICAgLy8gUmVzZXQgdGhlIHNlZWsgcG9zaXRpb24uXG4gICAgICAgICAgc291bmQuX3NlZWsgPSBzZWxmLnNlZWsoaWRzW2ldKTtcbiAgICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSAwO1xuICAgICAgICAgIHNvdW5kLl9wYXVzZWQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gU3RvcCBjdXJyZW50bHkgcnVubmluZyBmYWRlcy5cbiAgICAgICAgICBzZWxmLl9zdG9wRmFkZShpZHNbaV0pO1xuXG4gICAgICAgICAgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBzb3VuZCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgICAgICAgICAgICBpZiAoIXNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uuc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uubm90ZU9mZigwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uuc3RvcCgwKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSBidWZmZXIgc291cmNlLlxuICAgICAgICAgICAgICBzZWxmLl9jbGVhbkJ1ZmZlcihzb3VuZC5fbm9kZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihzb3VuZC5fbm9kZS5kdXJhdGlvbikgfHwgc291bmQuX25vZGUuZHVyYXRpb24gPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSB0aGUgcGF1c2UgZXZlbnQsIHVubGVzcyBgdHJ1ZWAgaXMgcGFzc2VkIGFzIHRoZSAybmQgYXJndW1lbnQuXG4gICAgICAgIGlmICghYXJndW1lbnRzWzFdKSB7XG4gICAgICAgICAgc2VsZi5fZW1pdCgncGF1c2UnLCBzb3VuZCA/IHNvdW5kLl9pZCA6IG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wIHBsYXliYWNrIGFuZCByZXNldCB0byBzdGFydC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBJRCAoZW1wdHkgdG8gc3RvcCBhbGwgaW4gZ3JvdXApLlxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGludGVybmFsIEludGVybmFsIFVzZTogdHJ1ZSBwcmV2ZW50cyBldmVudCBmaXJpbmcuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbihpZCwgaW50ZXJuYWwpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBzdG9wIHdoZW4gY2FwYWJsZS5cbiAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdzdG9wJyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5zdG9wKGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBpZCBpcyBwYXNzZWQsIGdldCBhbGwgSUQncyB0byBiZSBzdG9wcGVkLlxuICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcblxuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBDbGVhciB0aGUgZW5kIHRpbWVyLlxuICAgICAgICBzZWxmLl9jbGVhclRpbWVyKGlkc1tpXSk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgLy8gUmVzZXQgdGhlIHNlZWsgcG9zaXRpb24uXG4gICAgICAgICAgc291bmQuX3NlZWsgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSAwO1xuICAgICAgICAgIHNvdW5kLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgIHNvdW5kLl9lbmRlZCA9IHRydWU7XG5cbiAgICAgICAgICAvLyBTdG9wIGN1cnJlbnRseSBydW5uaW5nIGZhZGVzLlxuICAgICAgICAgIHNlbGYuX3N0b3BGYWRlKGlkc1tpXSk7XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHNvdW5kJ3MgQXVkaW9CdWZmZXJTb3VyY2VOb2RlIGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICAgICAgICAgIGlmIChzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5zdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLm5vdGVPZmYoMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5zdG9wKDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSBidWZmZXIgc291cmNlLlxuICAgICAgICAgICAgICAgIHNlbGYuX2NsZWFuQnVmZmVyKHNvdW5kLl9ub2RlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNOYU4oc291bmQuX25vZGUuZHVyYXRpb24pIHx8IHNvdW5kLl9ub2RlLmR1cmF0aW9uID09PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5jdXJyZW50VGltZSA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3N0b3AnLCBzb3VuZC5faWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTXV0ZS91bm11dGUgYSBzaW5nbGUgc291bmQgb3IgYWxsIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbXV0ZWQgU2V0IHRvIHRydWUgdG8gbXV0ZSBhbmQgZmFsc2UgdG8gdW5tdXRlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgICAgVGhlIHNvdW5kIElEIHRvIHVwZGF0ZSAob21pdCB0byBtdXRlL3VubXV0ZSBhbGwpLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgbXV0ZTogZnVuY3Rpb24obXV0ZWQsIGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gbXV0ZSB3aGVuIGNhcGFibGUuXG4gICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAnbXV0ZScsXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYubXV0ZShtdXRlZCwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFwcGx5aW5nIG11dGUvdW5tdXRlIHRvIGFsbCBzb3VuZHMsIHVwZGF0ZSB0aGUgZ3JvdXAncyB2YWx1ZS5cbiAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbXV0ZWQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHNlbGYuX211dGVkID0gbXV0ZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuX211dGVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGlkIGlzIHBhc3NlZCwgZ2V0IGFsbCBJRCdzIHRvIGJlIG11dGVkLlxuICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcblxuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICBzb3VuZC5fbXV0ZWQgPSBtdXRlZDtcblxuICAgICAgICAgIC8vIENhbmNlbCBhY3RpdmUgZmFkZSBhbmQgc2V0IHRoZSB2b2x1bWUgdG8gdGhlIGVuZCB2YWx1ZS5cbiAgICAgICAgICBpZiAoc291bmQuX2ludGVydmFsKSB7XG4gICAgICAgICAgICBzZWxmLl9zdG9wRmFkZShzb3VuZC5faWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgc291bmQuX25vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZShtdXRlZCA/IDAgOiBzb3VuZC5fdm9sdW1lLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5tdXRlZCA9IEhvd2xlci5fbXV0ZWQgPyB0cnVlIDogbXV0ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fZW1pdCgnbXV0ZScsIHNvdW5kLl9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldC9zZXQgdGhlIHZvbHVtZSBvZiB0aGlzIHNvdW5kIG9yIG9mIHRoZSBIb3dsIGdyb3VwLiBUaGlzIG1ldGhvZCBjYW4gb3B0aW9uYWxseSB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAgICogICB2b2x1bWUoKSAtPiBSZXR1cm5zIHRoZSBncm91cCdzIHZvbHVtZSB2YWx1ZS5cbiAgICAgKiAgIHZvbHVtZShpZCkgLT4gUmV0dXJucyB0aGUgc291bmQgaWQncyBjdXJyZW50IHZvbHVtZS5cbiAgICAgKiAgIHZvbHVtZSh2b2wpIC0+IFNldHMgdGhlIHZvbHVtZSBvZiBhbGwgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgKiAgIHZvbHVtZSh2b2wsIGlkKSAtPiBTZXRzIHRoZSB2b2x1bWUgb2YgcGFzc2VkIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2wvTnVtYmVyfSBSZXR1cm5zIHNlbGYgb3IgY3VycmVudCB2b2x1bWUuXG4gICAgICovXG4gICAgdm9sdW1lOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIHZvbCwgaWQ7XG5cbiAgICAgIC8vIERldGVybWluZSB0aGUgdmFsdWVzIGJhc2VkIG9uIGFyZ3VtZW50cy5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBSZXR1cm4gdGhlIHZhbHVlIG9mIHRoZSBncm91cHMnIHZvbHVtZS5cbiAgICAgICAgcmV0dXJuIHNlbGYuX3ZvbHVtZTtcbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEgfHwgYXJncy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoaXMgaXMgYW4gSUQsIGFuZCBpZiBub3QsIGFzc3VtZSBpdCBpcyBhIG5ldyB2b2x1bWUuXG4gICAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcygpO1xuICAgICAgICB2YXIgaW5kZXggPSBpZHMuaW5kZXhPZihhcmdzWzBdKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMF0sIDEwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2b2wgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID49IDIpIHtcbiAgICAgICAgdm9sID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgdm9sdW1lIG9yIHJldHVybiB0aGUgY3VycmVudCB2b2x1bWUuXG4gICAgICB2YXIgc291bmQ7XG4gICAgICBpZiAodHlwZW9mIHZvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdm9sID49IDAgJiYgdm9sIDw9IDEpIHtcbiAgICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBjaGFuZ2Ugdm9sdW1lIHdoZW4gY2FwYWJsZS5cbiAgICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6ICd2b2x1bWUnLFxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc2VsZi52b2x1bWUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aGUgZ3JvdXAgdm9sdW1lLlxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHNlbGYuX3ZvbHVtZSA9IHZvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBvbmUgb3IgYWxsIHZvbHVtZXMuXG4gICAgICAgIGlkID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8aWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkW2ldKTtcblxuICAgICAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAgICAgc291bmQuX3ZvbHVtZSA9IHZvbDtcblxuICAgICAgICAgICAgLy8gU3RvcCBjdXJyZW50bHkgcnVubmluZyBmYWRlcy5cbiAgICAgICAgICAgIGlmICghYXJnc1syXSkge1xuICAgICAgICAgICAgICBzZWxmLl9zdG9wRmFkZShpZFtpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSAmJiAhc291bmQuX211dGVkKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmdhaW4uc2V0VmFsdWVBdFRpbWUodm9sLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc291bmQuX25vZGUgJiYgIXNvdW5kLl9tdXRlZCkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS52b2x1bWUgPSB2b2wgKiBIb3dsZXIudm9sdW1lKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3ZvbHVtZScsIHNvdW5kLl9pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VuZCA9IGlkID8gc2VsZi5fc291bmRCeUlkKGlkKSA6IHNlbGYuX3NvdW5kc1swXTtcbiAgICAgICAgcmV0dXJuIHNvdW5kID8gc291bmQuX3ZvbHVtZSA6IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGYWRlIGEgY3VycmVudGx5IHBsYXlpbmcgc291bmQgYmV0d2VlbiB0d28gdm9sdW1lcyAoaWYgbm8gaWQgaXMgcGFzc3NlZCwgYWxsIHNvdW5kcyB3aWxsIGZhZGUpLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gZnJvbSBUaGUgdmFsdWUgdG8gZmFkZSBmcm9tICgwLjAgdG8gMS4wKS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRvICAgVGhlIHZvbHVtZSB0byBmYWRlIHRvICgwLjAgdG8gMS4wKS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGxlbiAgVGltZSBpbiBtaWxsaXNlY29uZHMgdG8gZmFkZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkICAgVGhlIHNvdW5kIGlkIChvbWl0IHRvIGZhZGUgYWxsIHNvdW5kcykuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBmYWRlOiBmdW5jdGlvbihmcm9tLCB0bywgbGVuLCBpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGZhZGUgd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ2ZhZGUnLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmZhZGUoZnJvbSwgdG8sIGxlbiwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCB0aGUgdm9sdW1lIHRvIHRoZSBzdGFydCBwb3NpdGlvbi5cbiAgICAgIHNlbGYudm9sdW1lKGZyb20sIGlkKTtcblxuICAgICAgLy8gRmFkZSB0aGUgdm9sdW1lIG9mIG9uZSBvciBhbGwgc291bmRzLlxuICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgbGluZWFyIGZhZGUgb3IgZmFsbCBiYWNrIHRvIHRpbWVvdXRzIHdpdGggSFRNTDUgQXVkaW8uXG4gICAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAgIC8vIFN0b3AgdGhlIHByZXZpb3VzIGZhZGUgaWYgbm8gc3ByaXRlIGlzIGJlaW5nIHVzZWQgKG90aGVyd2lzZSwgdm9sdW1lIGhhbmRsZXMgdGhpcykuXG4gICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgc2VsZi5fc3RvcEZhZGUoaWRzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiB3ZSBhcmUgdXNpbmcgV2ViIEF1ZGlvLCBsZXQgdGhlIG5hdGl2ZSBtZXRob2RzIGRvIHRoZSBhY3R1YWwgZmFkZS5cbiAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgIXNvdW5kLl9tdXRlZCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gSG93bGVyLmN0eC5jdXJyZW50VGltZTtcbiAgICAgICAgICAgIHZhciBlbmQgPSBjdXJyZW50VGltZSArIChsZW4gLyAxMDAwKTtcbiAgICAgICAgICAgIHNvdW5kLl92b2x1bWUgPSBmcm9tO1xuICAgICAgICAgICAgc291bmQuX25vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZShmcm9tLCBjdXJyZW50VGltZSk7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHRvLCBlbmQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX3N0YXJ0RmFkZUludGVydmFsKHNvdW5kLCBmcm9tLCB0bywgbGVuLCBpZHNbaV0sIHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIGludGVybmFsIGludGVydmFsIHRvIGZhZGUgYSBzb3VuZC5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHNvdW5kIFJlZmVyZW5jZSB0byBzb3VuZCB0byBmYWRlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gZnJvbSBUaGUgdmFsdWUgdG8gZmFkZSBmcm9tICgwLjAgdG8gMS4wKS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRvICAgVGhlIHZvbHVtZSB0byBmYWRlIHRvICgwLjAgdG8gMS4wKS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGxlbiAgVGltZSBpbiBtaWxsaXNlY29uZHMgdG8gZmFkZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkICAgVGhlIHNvdW5kIGlkIHRvIGZhZGUuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gaXNHcm91cCAgIElmIHRydWUsIHNldCB0aGUgdm9sdW1lIG9uIHRoZSBncm91cC5cbiAgICAgKi9cbiAgICBfc3RhcnRGYWRlSW50ZXJ2YWw6IGZ1bmN0aW9uKHNvdW5kLCBmcm9tLCB0bywgbGVuLCBpZCwgaXNHcm91cCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHZvbCA9IGZyb207XG4gICAgICB2YXIgZGlmZiA9IHRvIC0gZnJvbTtcbiAgICAgIHZhciBzdGVwcyA9IE1hdGguYWJzKGRpZmYgLyAwLjAxKTtcbiAgICAgIHZhciBzdGVwTGVuID0gTWF0aC5tYXgoNCwgKHN0ZXBzID4gMCkgPyBsZW4gLyBzdGVwcyA6IGxlbik7XG4gICAgICB2YXIgbGFzdFRpY2sgPSBEYXRlLm5vdygpO1xuXG4gICAgICAvLyBTdG9yZSB0aGUgdmFsdWUgYmVpbmcgZmFkZWQgdG8uXG4gICAgICBzb3VuZC5fZmFkZVRvID0gdG87XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgdm9sdW1lIHZhbHVlIG9uIGVhY2ggaW50ZXJ2YWwgdGljay5cbiAgICAgIHNvdW5kLl9pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHZvbHVtZSBiYXNlZCBvbiB0aGUgdGltZSBzaW5jZSB0aGUgbGFzdCB0aWNrLlxuICAgICAgICB2YXIgdGljayA9IChEYXRlLm5vdygpIC0gbGFzdFRpY2spIC8gbGVuO1xuICAgICAgICBsYXN0VGljayA9IERhdGUubm93KCk7XG4gICAgICAgIHZvbCArPSBkaWZmICogdGljaztcblxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHZvbHVtZSBpcyBpbiB0aGUgcmlnaHQgYm91bmRzLlxuICAgICAgICB2b2wgPSBNYXRoLm1heCgwLCB2b2wpO1xuICAgICAgICB2b2wgPSBNYXRoLm1pbigxLCB2b2wpO1xuXG4gICAgICAgIC8vIFJvdW5kIHRvIHdpdGhpbiAyIGRlY2ltYWwgcG9pbnRzLlxuICAgICAgICB2b2wgPSBNYXRoLnJvdW5kKHZvbCAqIDEwMCkgLyAxMDA7XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRoZSB2b2x1bWUuXG4gICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgIHNvdW5kLl92b2x1bWUgPSB2b2w7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi52b2x1bWUodm9sLCBzb3VuZC5faWQsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBncm91cCdzIHZvbHVtZS5cbiAgICAgICAgaWYgKGlzR3JvdXApIHtcbiAgICAgICAgICBzZWxmLl92b2x1bWUgPSB2b2w7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaGVuIHRoZSBmYWRlIGlzIGNvbXBsZXRlLCBzdG9wIGl0IGFuZCBmaXJlIGV2ZW50LlxuICAgICAgICBpZiAoKHRvIDwgZnJvbSAmJiB2b2wgPD0gdG8pIHx8ICh0byA+IGZyb20gJiYgdm9sID49IHRvKSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc291bmQuX2ludGVydmFsKTtcbiAgICAgICAgICBzb3VuZC5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgIHNvdW5kLl9mYWRlVG8gPSBudWxsO1xuICAgICAgICAgIHNlbGYudm9sdW1lKHRvLCBzb3VuZC5faWQpO1xuICAgICAgICAgIHNlbGYuX2VtaXQoJ2ZhZGUnLCBzb3VuZC5faWQpO1xuICAgICAgICB9XG4gICAgICB9LCBzdGVwTGVuKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgbWV0aG9kIHRoYXQgc3RvcHMgdGhlIGN1cnJlbnRseSBwbGF5aW5nIGZhZGUgd2hlblxuICAgICAqIGEgbmV3IGZhZGUgc3RhcnRzLCB2b2x1bWUgaXMgY2hhbmdlZCBvciB0aGUgc291bmQgaXMgc3RvcHBlZC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBpZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9zdG9wRmFkZTogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG5cbiAgICAgIGlmIChzb3VuZCAmJiBzb3VuZC5faW50ZXJ2YWwpIHtcbiAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgc291bmQuX25vZGUuZ2Fpbi5jYW5jZWxTY2hlZHVsZWRWYWx1ZXMoSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhckludGVydmFsKHNvdW5kLl9pbnRlcnZhbCk7XG4gICAgICAgIHNvdW5kLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHNlbGYudm9sdW1lKHNvdW5kLl9mYWRlVG8sIGlkKTtcbiAgICAgICAgc291bmQuX2ZhZGVUbyA9IG51bGw7XG4gICAgICAgIHNlbGYuX2VtaXQoJ2ZhZGUnLCBpZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQvc2V0IHRoZSBsb29wIHBhcmFtZXRlciBvbiBhIHNvdW5kLiBUaGlzIG1ldGhvZCBjYW4gb3B0aW9uYWxseSB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAgICogICBsb29wKCkgLT4gUmV0dXJucyB0aGUgZ3JvdXAncyBsb29wIHZhbHVlLlxuICAgICAqICAgbG9vcChpZCkgLT4gUmV0dXJucyB0aGUgc291bmQgaWQncyBsb29wIHZhbHVlLlxuICAgICAqICAgbG9vcChsb29wKSAtPiBTZXRzIHRoZSBsb29wIHZhbHVlIGZvciBhbGwgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgKiAgIGxvb3AobG9vcCwgaWQpIC0+IFNldHMgdGhlIGxvb3AgdmFsdWUgb2YgcGFzc2VkIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2wvQm9vbGVhbn0gUmV0dXJucyBzZWxmIG9yIGN1cnJlbnQgbG9vcCB2YWx1ZS5cbiAgICAgKi9cbiAgICBsb29wOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIGxvb3AsIGlkLCBzb3VuZDtcblxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZXMgZm9yIGxvb3AgYW5kIGlkLlxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgZ3JvdSdzIGxvb3AgdmFsdWUuXG4gICAgICAgIHJldHVybiBzZWxmLl9sb29wO1xuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdib29sZWFuJykge1xuICAgICAgICAgIGxvb3AgPSBhcmdzWzBdO1xuICAgICAgICAgIHNlbGYuX2xvb3AgPSBsb29wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJldHVybiB0aGlzIHNvdW5kJ3MgbG9vcCB2YWx1ZS5cbiAgICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChwYXJzZUludChhcmdzWzBdLCAxMCkpO1xuICAgICAgICAgIHJldHVybiBzb3VuZCA/IHNvdW5kLl9sb29wIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgbG9vcCA9IGFyZ3NbMF07XG4gICAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBpZCBpcyBwYXNzZWQsIGdldCBhbGwgSUQncyB0byBiZSBsb29wZWQuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAgIHNvdW5kLl9sb29wID0gbG9vcDtcbiAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUgJiYgc291bmQuX25vZGUuYnVmZmVyU291cmNlKSB7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcCA9IGxvb3A7XG4gICAgICAgICAgICBpZiAobG9vcCkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcFN0YXJ0ID0gc291bmQuX3N0YXJ0IHx8IDA7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wRW5kID0gc291bmQuX3N0b3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQvc2V0IHRoZSBwbGF5YmFjayByYXRlIG9mIGEgc291bmQuIFRoaXMgbWV0aG9kIGNhbiBvcHRpb25hbGx5IHRha2UgMCwgMSBvciAyIGFyZ3VtZW50cy5cbiAgICAgKiAgIHJhdGUoKSAtPiBSZXR1cm5zIHRoZSBmaXJzdCBzb3VuZCBub2RlJ3MgY3VycmVudCBwbGF5YmFjayByYXRlLlxuICAgICAqICAgcmF0ZShpZCkgLT4gUmV0dXJucyB0aGUgc291bmQgaWQncyBjdXJyZW50IHBsYXliYWNrIHJhdGUuXG4gICAgICogICByYXRlKHJhdGUpIC0+IFNldHMgdGhlIHBsYXliYWNrIHJhdGUgb2YgYWxsIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAgICogICByYXRlKHJhdGUsIGlkKSAtPiBTZXRzIHRoZSBwbGF5YmFjayByYXRlIG9mIHBhc3NlZCBzb3VuZCBpZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsL051bWJlcn0gUmV0dXJucyBzZWxmIG9yIHRoZSBjdXJyZW50IHBsYXliYWNrIHJhdGUuXG4gICAgICovXG4gICAgcmF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHZhciByYXRlLCBpZDtcblxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZXMgYmFzZWQgb24gYXJndW1lbnRzLlxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFdlIHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudCByYXRlIG9mIHRoZSBmaXJzdCBub2RlLlxuICAgICAgICBpZCA9IHNlbGYuX3NvdW5kc1swXS5faWQ7XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoaXMgaXMgYW4gSUQsIGFuZCBpZiBub3QsIGFzc3VtZSBpdCBpcyBhIG5ldyByYXRlIHZhbHVlLlxuICAgICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gaWRzLmluZGV4T2YoYXJnc1swXSk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzBdLCAxMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmF0ZSA9IHBhcnNlRmxvYXQoYXJnc1swXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgcmF0ZSA9IHBhcnNlRmxvYXQoYXJnc1swXSk7XG4gICAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgdGhlIHBsYXliYWNrIHJhdGUgb3IgcmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgICAgdmFyIHNvdW5kO1xuICAgICAgaWYgKHR5cGVvZiByYXRlID09PSAnbnVtYmVyJykge1xuICAgICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGNoYW5nZSBwbGF5YmFjayByYXRlIHdoZW4gY2FwYWJsZS5cbiAgICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6ICdyYXRlJyxcbiAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHNlbGYucmF0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBncm91cCByYXRlLlxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHNlbGYuX3JhdGUgPSByYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIG9uZSBvciBhbGwgdm9sdW1lcy5cbiAgICAgICAgaWQgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICAgICAgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRbaV0pO1xuXG4gICAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgICAvLyBLZWVwIHRyYWNrIG9mIG91ciBwb3NpdGlvbiB3aGVuIHRoZSByYXRlIGNoYW5nZWQgYW5kIHVwZGF0ZSB0aGUgcGxheWJhY2tcbiAgICAgICAgICAgIC8vIHN0YXJ0IHBvc2l0aW9uIHNvIHdlIGNhbiBwcm9wZXJseSBhZGp1c3QgdGhlIHNlZWsgcG9zaXRpb24gZm9yIHRpbWUgZWxhcHNlZC5cbiAgICAgICAgICAgIHNvdW5kLl9yYXRlU2VlayA9IHNlbGYuc2VlayhpZFtpXSk7XG4gICAgICAgICAgICBzb3VuZC5fcGxheVN0YXJ0ID0gc2VsZi5fd2ViQXVkaW8gPyBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lIDogc291bmQuX3BsYXlTdGFydDtcbiAgICAgICAgICAgIHNvdW5kLl9yYXRlID0gcmF0ZTtcblxuICAgICAgICAgICAgLy8gQ2hhbmdlIHRoZSBwbGF5YmFjayByYXRlLlxuICAgICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlICYmIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZSkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UucGxheWJhY2tSYXRlLnNldFZhbHVlQXRUaW1lKHJhdGUsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5wbGF5YmFja1JhdGUgPSByYXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgdGltZXJzLlxuICAgICAgICAgICAgdmFyIHNlZWsgPSBzZWxmLnNlZWsoaWRbaV0pO1xuICAgICAgICAgICAgdmFyIGR1cmF0aW9uID0gKChzZWxmLl9zcHJpdGVbc291bmQuX3Nwcml0ZV1bMF0gKyBzZWxmLl9zcHJpdGVbc291bmQuX3Nwcml0ZV1bMV0pIC8gMTAwMCkgLSBzZWVrO1xuICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSAoZHVyYXRpb24gKiAxMDAwKSAvIE1hdGguYWJzKHNvdW5kLl9yYXRlKTtcblxuICAgICAgICAgICAgLy8gU3RhcnQgYSBuZXcgZW5kIHRpbWVyIGlmIHNvdW5kIGlzIGFscmVhZHkgcGxheWluZy5cbiAgICAgICAgICAgIGlmIChzZWxmLl9lbmRUaW1lcnNbaWRbaV1dIHx8ICFzb3VuZC5fcGF1c2VkKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2NsZWFyVGltZXIoaWRbaV0pO1xuICAgICAgICAgICAgICBzZWxmLl9lbmRUaW1lcnNbaWRbaV1dID0gc2V0VGltZW91dChzZWxmLl9lbmRlZC5iaW5kKHNlbGYsIHNvdW5kKSwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3JhdGUnLCBzb3VuZC5faWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWQpO1xuICAgICAgICByZXR1cm4gc291bmQgPyBzb3VuZC5fcmF0ZSA6IHNlbGYuX3JhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQvc2V0IHRoZSBzZWVrIHBvc2l0aW9uIG9mIGEgc291bmQuIFRoaXMgbWV0aG9kIGNhbiBvcHRpb25hbGx5IHRha2UgMCwgMSBvciAyIGFyZ3VtZW50cy5cbiAgICAgKiAgIHNlZWsoKSAtPiBSZXR1cm5zIHRoZSBmaXJzdCBzb3VuZCBub2RlJ3MgY3VycmVudCBzZWVrIHBvc2l0aW9uLlxuICAgICAqICAgc2VlayhpZCkgLT4gUmV0dXJucyB0aGUgc291bmQgaWQncyBjdXJyZW50IHNlZWsgcG9zaXRpb24uXG4gICAgICogICBzZWVrKHNlZWspIC0+IFNldHMgdGhlIHNlZWsgcG9zaXRpb24gb2YgdGhlIGZpcnN0IHNvdW5kIG5vZGUuXG4gICAgICogICBzZWVrKHNlZWssIGlkKSAtPiBTZXRzIHRoZSBzZWVrIHBvc2l0aW9uIG9mIHBhc3NlZCBzb3VuZCBpZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsL051bWJlcn0gUmV0dXJucyBzZWxmIG9yIHRoZSBjdXJyZW50IHNlZWsgcG9zaXRpb24uXG4gICAgICovXG4gICAgc2VlazogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHZhciBzZWVrLCBpZDtcblxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZXMgYmFzZWQgb24gYXJndW1lbnRzLlxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFdlIHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgbm9kZS5cbiAgICAgICAgaWQgPSBzZWxmLl9zb3VuZHNbMF0uX2lkO1xuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBGaXJzdCBjaGVjayBpZiB0aGlzIGlzIGFuIElELCBhbmQgaWYgbm90LCBhc3N1bWUgaXQgaXMgYSBuZXcgc2VlayBwb3NpdGlvbi5cbiAgICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKCk7XG4gICAgICAgIHZhciBpbmRleCA9IGlkcy5pbmRleE9mKGFyZ3NbMF0pO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1swXSwgMTApO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGYuX3NvdW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICBpZCA9IHNlbGYuX3NvdW5kc1swXS5faWQ7XG4gICAgICAgICAgc2VlayA9IHBhcnNlRmxvYXQoYXJnc1swXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgc2VlayA9IHBhcnNlRmxvYXQoYXJnc1swXSk7XG4gICAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGVyZSBpcyBubyBJRCwgYmFpbCBvdXQuXG4gICAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBzZWVrIHdoZW4gY2FwYWJsZS5cbiAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdzZWVrJyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5zZWVrLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWQpO1xuXG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWVrID09PSAnbnVtYmVyJyAmJiBzZWVrID49IDApIHtcbiAgICAgICAgICAvLyBQYXVzZSB0aGUgc291bmQgYW5kIHVwZGF0ZSBwb3NpdGlvbiBmb3IgcmVzdGFydGluZyBwbGF5YmFjay5cbiAgICAgICAgICB2YXIgcGxheWluZyA9IHNlbGYucGxheWluZyhpZCk7XG4gICAgICAgICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgICAgICAgIHNlbGYucGF1c2UoaWQsIHRydWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE1vdmUgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmFjayBhbmQgY2FuY2VsIHRpbWVyLlxuICAgICAgICAgIHNvdW5kLl9zZWVrID0gc2VlaztcbiAgICAgICAgICBzb3VuZC5fZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLl9jbGVhclRpbWVyKGlkKTtcblxuICAgICAgICAgIC8vIFJlc3RhcnQgdGhlIHBsYXliYWNrIGlmIHRoZSBzb3VuZCB3YXMgcGxheWluZy5cbiAgICAgICAgICBpZiAocGxheWluZykge1xuICAgICAgICAgICAgc2VsZi5wbGF5KGlkLCB0cnVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHNlZWsgcG9zaXRpb24gZm9yIEhUTUw1IEF1ZGlvLlxuICAgICAgICAgIGlmICghc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLmN1cnJlbnRUaW1lID0gc2VlaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXYWl0IGZvciB0aGUgcGxheSBsb2NrIHRvIGJlIHVuc2V0IGJlZm9yZSBlbWl0dGluZyAoSFRNTDUgQXVkaW8pLlxuICAgICAgICAgIGlmIChwbGF5aW5nICYmICFzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgdmFyIGVtaXRTZWVrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmICghc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9lbWl0KCdzZWVrJywgaWQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZW1pdFNlZWssIDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2V0VGltZW91dChlbWl0U2VlaywgMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3NlZWsnLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgdmFyIHJlYWxUaW1lID0gc2VsZi5wbGF5aW5nKGlkKSA/IEhvd2xlci5jdHguY3VycmVudFRpbWUgLSBzb3VuZC5fcGxheVN0YXJ0IDogMDtcbiAgICAgICAgICAgIHZhciByYXRlU2VlayA9IHNvdW5kLl9yYXRlU2VlayA/IHNvdW5kLl9yYXRlU2VlayAtIHNvdW5kLl9zZWVrIDogMDtcbiAgICAgICAgICAgIHJldHVybiBzb3VuZC5fc2VlayArIChyYXRlU2VlayArIHJlYWxUaW1lICogTWF0aC5hYnMoc291bmQuX3JhdGUpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNvdW5kLl9ub2RlLmN1cnJlbnRUaW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBzcGVjaWZpYyBzb3VuZCBpcyBjdXJyZW50bHkgcGxheWluZyBvciBub3QgKGlmIGlkIGlzIHByb3ZpZGVkKSwgb3IgY2hlY2sgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZSBzb3VuZHMgaW4gdGhlIGdyb3VwIGlzIHBsYXlpbmcgb3Igbm90LlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gIGlkIFRoZSBzb3VuZCBpZCB0byBjaGVjay4gSWYgbm9uZSBpcyBwYXNzZWQsIHRoZSB3aG9sZSBzb3VuZCBncm91cCBpcyBjaGVja2VkLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFRydWUgaWYgcGxheWluZyBhbmQgZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIHBsYXlpbmc6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIENoZWNrIHRoZSBwYXNzZWQgc291bmQgSUQgKGlmIGFueSkuXG4gICAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykge1xuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWQpO1xuICAgICAgICByZXR1cm4gc291bmQgPyAhc291bmQuX3BhdXNlZCA6IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UsIGxvb3AgdGhyb3VnaCBhbGwgc291bmRzIGFuZCBjaGVjayBpZiBhbnkgYXJlIHBsYXlpbmcuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghc2VsZi5fc291bmRzW2ldLl9wYXVzZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZHVyYXRpb24gb2YgdGhpcyBzb3VuZC4gUGFzc2luZyBhIHNvdW5kIGlkIHdpbGwgcmV0dXJuIHRoZSBzcHJpdGUgZHVyYXRpb24uXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBUaGUgc291bmQgaWQgdG8gY2hlY2suIElmIG5vbmUgaXMgcGFzc2VkLCByZXR1cm4gZnVsbCBzb3VyY2UgZHVyYXRpb24uXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBdWRpbyBkdXJhdGlvbiBpbiBzZWNvbmRzLlxuICAgICAqL1xuICAgIGR1cmF0aW9uOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGR1cmF0aW9uID0gc2VsZi5fZHVyYXRpb247XG5cbiAgICAgIC8vIElmIHdlIHBhc3MgYW4gSUQsIGdldCB0aGUgc291bmQgYW5kIHJldHVybiB0aGUgc3ByaXRlIGxlbmd0aC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgZHVyYXRpb24gPSBzZWxmLl9zcHJpdGVbc291bmQuX3Nwcml0ZV1bMV0gLyAxMDAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgbG9hZGVkIHN0YXRlIG9mIHRoaXMgSG93bC5cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICd1bmxvYWRlZCcsICdsb2FkaW5nJywgJ2xvYWRlZCdcbiAgICAgKi9cbiAgICBzdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVubG9hZCBhbmQgZGVzdHJveSB0aGUgY3VycmVudCBIb3dsIG9iamVjdC5cbiAgICAgKiBUaGlzIHdpbGwgaW1tZWRpYXRlbHkgc3RvcCBhbGwgc291bmQgaW5zdGFuY2VzIGF0dGFjaGVkIHRvIHRoaXMgZ3JvdXAuXG4gICAgICovXG4gICAgdW5sb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gU3RvcCBwbGF5aW5nIGFueSBhY3RpdmUgc291bmRzLlxuICAgICAgdmFyIHNvdW5kcyA9IHNlbGYuX3NvdW5kcztcbiAgICAgIGZvciAodmFyIGk9MDsgaTxzb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gU3RvcCB0aGUgc291bmQgaWYgaXQgaXMgY3VycmVudGx5IHBsYXlpbmcuXG4gICAgICAgIGlmICghc291bmRzW2ldLl9wYXVzZWQpIHtcbiAgICAgICAgICBzZWxmLnN0b3Aoc291bmRzW2ldLl9pZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHNvdXJjZSBvciBkaXNjb25uZWN0LlxuICAgICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgLy8gU2V0IHRoZSBzb3VyY2UgdG8gMC1zZWNvbmQgc2lsZW5jZSB0byBzdG9wIGFueSBkb3dubG9hZGluZyAoZXhjZXB0IGluIElFKS5cbiAgICAgICAgICB2YXIgY2hlY2tJRSA9IC9NU0lFIHxUcmlkZW50XFwvLy50ZXN0KEhvd2xlci5fbmF2aWdhdG9yICYmIEhvd2xlci5fbmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgICAgaWYgKCFjaGVja0lFKSB7XG4gICAgICAgICAgICBzb3VuZHNbaV0uX25vZGUuc3JjID0gJ2RhdGE6YXVkaW8vd2F2O2Jhc2U2NCxVa2xHUmlnQUFBQlhRVlpGWm0xMElCSUFBQUFCQUFFQVJLd0FBSWhZQVFBQ0FCQUFBQUJrWVhSaEFnQUFBQUVBJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmUgYW55IGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICBzb3VuZHNbaV0uX25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBzb3VuZHNbaV0uX2Vycm9yRm4sIGZhbHNlKTtcbiAgICAgICAgICBzb3VuZHNbaV0uX25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihIb3dsZXIuX2NhblBsYXlFdmVudCwgc291bmRzW2ldLl9sb2FkRm4sIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVtcHR5IG91dCBhbGwgb2YgdGhlIG5vZGVzLlxuICAgICAgICBkZWxldGUgc291bmRzW2ldLl9ub2RlO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgdGltZXJzIGFyZSBjbGVhcmVkIG91dC5cbiAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihzb3VuZHNbaV0uX2lkKTtcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHJlZmVyZW5jZXMgaW4gdGhlIGdsb2JhbCBIb3dsZXIgb2JqZWN0LlxuICAgICAgICB2YXIgaW5kZXggPSBIb3dsZXIuX2hvd2xzLmluZGV4T2Yoc2VsZik7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgSG93bGVyLl9ob3dscy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIERlbGV0ZSB0aGlzIHNvdW5kIGZyb20gdGhlIGNhY2hlIChpZiBubyBvdGhlciBIb3dsIGlzIHVzaW5nIGl0KS5cbiAgICAgIHZhciByZW1DYWNoZSA9IHRydWU7XG4gICAgICBmb3IgKGk9MDsgaTxIb3dsZXIuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChIb3dsZXIuX2hvd2xzW2ldLl9zcmMgPT09IHNlbGYuX3NyYykge1xuICAgICAgICAgIHJlbUNhY2hlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNhY2hlICYmIHJlbUNhY2hlKSB7XG4gICAgICAgIGRlbGV0ZSBjYWNoZVtzZWxmLl9zcmNdO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciBnbG9iYWwgZXJyb3JzLlxuICAgICAgSG93bGVyLm5vQXVkaW8gPSBmYWxzZTtcblxuICAgICAgLy8gQ2xlYXIgb3V0IGBzZWxmYC5cbiAgICAgIHNlbGYuX3N0YXRlID0gJ3VubG9hZGVkJztcbiAgICAgIHNlbGYuX3NvdW5kcyA9IFtdO1xuICAgICAgc2VsZiA9IG51bGw7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gYSBjdXN0b20gZXZlbnQuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50IEV2ZW50IG5hbWUuXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgIExpc3RlbmVyIHRvIGNhbGwuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgIGlkICAgIChvcHRpb25hbCkgT25seSBsaXN0ZW4gdG8gZXZlbnRzIGZvciB0aGlzIHNvdW5kLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gICBvbmNlICAoSU5URVJOQUwpIE1hcmtzIGV2ZW50IHRvIGZpcmUgb25seSBvbmNlLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgb246IGZ1bmN0aW9uKGV2ZW50LCBmbiwgaWQsIG9uY2UpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBldmVudHMgPSBzZWxmWydfb24nICsgZXZlbnRdO1xuXG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKG9uY2UgPyB7aWQ6IGlkLCBmbjogZm4sIG9uY2U6IG9uY2V9IDoge2lkOiBpZCwgZm46IGZufSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBjdXN0b20gZXZlbnQuIENhbGwgd2l0aG91dCBwYXJhbWV0ZXJzIHRvIHJlbW92ZSBhbGwgZXZlbnRzLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudCBFdmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICBMaXN0ZW5lciB0byByZW1vdmUuIExlYXZlIGVtcHR5IHRvIHJlbW92ZSBhbGwuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgIGlkICAgIChvcHRpb25hbCkgT25seSByZW1vdmUgZXZlbnRzIGZvciB0aGlzIHNvdW5kLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgb2ZmOiBmdW5jdGlvbihldmVudCwgZm4sIGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZXZlbnRzID0gc2VsZlsnX29uJyArIGV2ZW50XTtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgLy8gQWxsb3cgcGFzc2luZyBqdXN0IGFuIGV2ZW50IGFuZCBJRC5cbiAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlkID0gZm47XG4gICAgICAgIGZuID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGZuIHx8IGlkKSB7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBldmVudCBzdG9yZSBhbmQgcmVtb3ZlIHRoZSBwYXNzZWQgZnVuY3Rpb24uXG4gICAgICAgIGZvciAoaT0wOyBpPGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpc0lkID0gKGlkID09PSBldmVudHNbaV0uaWQpO1xuICAgICAgICAgIGlmIChmbiA9PT0gZXZlbnRzW2ldLmZuICYmIGlzSWQgfHwgIWZuICYmIGlzSWQpIHtcbiAgICAgICAgICAgIGV2ZW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFsbCBldmVudHMgb2YgdGhpcyB0eXBlLlxuICAgICAgICBzZWxmWydfb24nICsgZXZlbnRdID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDbGVhciBvdXQgYWxsIGV2ZW50cyBvZiBldmVyeSB0eXBlLlxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNlbGYpO1xuICAgICAgICBmb3IgKGk9MDsgaTxrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKChrZXlzW2ldLmluZGV4T2YoJ19vbicpID09PSAwKSAmJiBBcnJheS5pc0FycmF5KHNlbGZba2V5c1tpXV0pKSB7XG4gICAgICAgICAgICBzZWxmW2tleXNbaV1dID0gW107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gYSBjdXN0b20gZXZlbnQgYW5kIHJlbW92ZSBpdCBvbmNlIGZpcmVkLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudCBFdmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICBMaXN0ZW5lciB0byBjYWxsLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gICBpZCAgICAob3B0aW9uYWwpIE9ubHkgbGlzdGVuIHRvIGV2ZW50cyBmb3IgdGhpcyBzb3VuZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIG9uY2U6IGZ1bmN0aW9uKGV2ZW50LCBmbiwgaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gU2V0dXAgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgc2VsZi5vbihldmVudCwgZm4sIGlkLCAxKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVtaXQgYWxsIGV2ZW50cyBvZiBhIHNwZWNpZmljIHR5cGUgYW5kIHBhc3MgdGhlIHNvdW5kIGlkLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZXZlbnQgRXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkICAgIFNvdW5kIElELlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbXNnICAgTWVzc2FnZSB0byBnbyB3aXRoIGV2ZW50LlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX2VtaXQ6IGZ1bmN0aW9uKGV2ZW50LCBpZCwgbXNnKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZXZlbnRzID0gc2VsZlsnX29uJyArIGV2ZW50XTtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGV2ZW50IHN0b3JlIGFuZCBmaXJlIGFsbCBmdW5jdGlvbnMuXG4gICAgICBmb3IgKHZhciBpPWV2ZW50cy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgIC8vIE9ubHkgZmlyZSB0aGUgbGlzdGVuZXIgaWYgdGhlIGNvcnJlY3QgSUQgaXMgdXNlZC5cbiAgICAgICAgaWYgKCFldmVudHNbaV0uaWQgfHwgZXZlbnRzW2ldLmlkID09PSBpZCB8fCBldmVudCA9PT0gJ2xvYWQnKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbihmbikge1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBpZCwgbXNnKTtcbiAgICAgICAgICB9LmJpbmQoc2VsZiwgZXZlbnRzW2ldLmZuKSwgMCk7XG5cbiAgICAgICAgICAvLyBJZiB0aGlzIGV2ZW50IHdhcyBzZXR1cCB3aXRoIGBvbmNlYCwgcmVtb3ZlIGl0LlxuICAgICAgICAgIGlmIChldmVudHNbaV0ub25jZSkge1xuICAgICAgICAgICAgc2VsZi5vZmYoZXZlbnQsIGV2ZW50c1tpXS5mbiwgZXZlbnRzW2ldLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUGFzcyB0aGUgZXZlbnQgdHlwZSBpbnRvIGxvYWQgcXVldWUgc28gdGhhdCBpdCBjYW4gY29udGludWUgc3RlcHBpbmcuXG4gICAgICBzZWxmLl9sb2FkUXVldWUoZXZlbnQpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUXVldWUgb2YgYWN0aW9ucyBpbml0aWF0ZWQgYmVmb3JlIHRoZSBzb3VuZCBoYXMgbG9hZGVkLlxuICAgICAqIFRoZXNlIHdpbGwgYmUgY2FsbGVkIGluIHNlcXVlbmNlLCB3aXRoIHRoZSBuZXh0IG9ubHkgZmlyaW5nXG4gICAgICogYWZ0ZXIgdGhlIHByZXZpb3VzIGhhcyBmaW5pc2hlZCBleGVjdXRpbmcgKGV2ZW4gaWYgYXN5bmMgbGlrZSBwbGF5KS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9sb2FkUXVldWU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmIChzZWxmLl9xdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciB0YXNrID0gc2VsZi5fcXVldWVbMF07XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoaXMgdGFzayBpZiBhIG1hdGNoaW5nIGV2ZW50IHdhcyBwYXNzZWQuXG4gICAgICAgIGlmICh0YXNrLmV2ZW50ID09PSBldmVudCkge1xuICAgICAgICAgIHNlbGYuX3F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgc2VsZi5fbG9hZFF1ZXVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSdW4gdGhlIHRhc2sgaWYgbm8gZXZlbnQgdHlwZSBpcyBwYXNzZWQuXG4gICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICB0YXNrLmFjdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHBsYXliYWNrIGVuZHMgYXQgdGhlIGVuZCBvZiB0aGUgZHVyYXRpb24uXG4gICAgICogQHBhcmFtICB7U291bmR9IHNvdW5kIFRoZSBzb3VuZCBvYmplY3QgdG8gd29yayB3aXRoLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX2VuZGVkOiBmdW5jdGlvbihzb3VuZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHNwcml0ZSA9IHNvdW5kLl9zcHJpdGU7XG5cbiAgICAgIC8vIElmIHdlIGFyZSB1c2luZyBJRSBhbmQgdGhlcmUgd2FzIG5ldHdvcmsgbGF0ZW5jeSB3ZSBtYXkgYmUgY2xpcHBpbmdcbiAgICAgIC8vIGF1ZGlvIGJlZm9yZSBpdCBjb21wbGV0ZXMgcGxheWluZy4gTGV0cyBjaGVjayB0aGUgbm9kZSB0byBtYWtlIHN1cmUgaXRcbiAgICAgIC8vIGJlbGlldmVzIGl0IGhhcyBjb21wbGV0ZWQsIGJlZm9yZSBlbmRpbmcgdGhlIHBsYXliYWNrLlxuICAgICAgaWYgKCFzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSAmJiAhc291bmQuX25vZGUucGF1c2VkICYmICFzb3VuZC5fbm9kZS5lbmRlZCAmJiBzb3VuZC5fbm9kZS5jdXJyZW50VGltZSA8IHNvdW5kLl9zdG9wKSB7XG4gICAgICAgIHNldFRpbWVvdXQoc2VsZi5fZW5kZWQuYmluZChzZWxmLCBzb3VuZCksIDEwMCk7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG91bGQgdGhpcyBzb3VuZCBsb29wP1xuICAgICAgdmFyIGxvb3AgPSAhIShzb3VuZC5fbG9vcCB8fCBzZWxmLl9zcHJpdGVbc3ByaXRlXVsyXSk7XG5cbiAgICAgIC8vIEZpcmUgdGhlIGVuZGVkIGV2ZW50LlxuICAgICAgc2VsZi5fZW1pdCgnZW5kJywgc291bmQuX2lkKTtcblxuICAgICAgLy8gUmVzdGFydCB0aGUgcGxheWJhY2sgZm9yIEhUTUw1IEF1ZGlvIGxvb3AuXG4gICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvICYmIGxvb3ApIHtcbiAgICAgICAgc2VsZi5zdG9wKHNvdW5kLl9pZCwgdHJ1ZSkucGxheShzb3VuZC5faWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXN0YXJ0IHRoaXMgdGltZXIgaWYgb24gYSBXZWIgQXVkaW8gbG9vcC5cbiAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBsb29wKSB7XG4gICAgICAgIHNlbGYuX2VtaXQoJ3BsYXknLCBzb3VuZC5faWQpO1xuICAgICAgICBzb3VuZC5fc2VlayA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSAwO1xuICAgICAgICBzb3VuZC5fcGxheVN0YXJ0ID0gSG93bGVyLmN0eC5jdXJyZW50VGltZTtcblxuICAgICAgICB2YXIgdGltZW91dCA9ICgoc291bmQuX3N0b3AgLSBzb3VuZC5fc3RhcnQpICogMTAwMCkgLyBNYXRoLmFicyhzb3VuZC5fcmF0ZSk7XG4gICAgICAgIHNlbGYuX2VuZFRpbWVyc1tzb3VuZC5faWRdID0gc2V0VGltZW91dChzZWxmLl9lbmRlZC5iaW5kKHNlbGYsIHNvdW5kKSwgdGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1hcmsgdGhlIG5vZGUgYXMgcGF1c2VkLlxuICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmICFsb29wKSB7XG4gICAgICAgIHNvdW5kLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgICBzb3VuZC5fZW5kZWQgPSB0cnVlO1xuICAgICAgICBzb3VuZC5fc2VlayA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSAwO1xuICAgICAgICBzZWxmLl9jbGVhclRpbWVyKHNvdW5kLl9pZCk7XG5cbiAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICAgIHNlbGYuX2NsZWFuQnVmZmVyKHNvdW5kLl9ub2RlKTtcblxuICAgICAgICAvLyBBdHRlbXB0IHRvIGF1dG8tc3VzcGVuZCBBdWRpb0NvbnRleHQgaWYgbm8gc291bmRzIGFyZSBzdGlsbCBwbGF5aW5nLlxuICAgICAgICBIb3dsZXIuX2F1dG9TdXNwZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdoZW4gdXNpbmcgYSBzcHJpdGUsIGVuZCB0aGUgdHJhY2suXG4gICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvICYmICFsb29wKSB7XG4gICAgICAgIHNlbGYuc3RvcChzb3VuZC5faWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgdGhlIGVuZCB0aW1lciBmb3IgYSBzb3VuZCBwbGF5YmFjay5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBJRC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9jbGVhclRpbWVyOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoc2VsZi5fZW5kVGltZXJzW2lkXSkge1xuICAgICAgICAvLyBDbGVhciB0aGUgdGltZW91dCBvciByZW1vdmUgdGhlIGVuZGVkIGxpc3RlbmVyLlxuICAgICAgICBpZiAodHlwZW9mIHNlbGYuX2VuZFRpbWVyc1tpZF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5fZW5kVGltZXJzW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcbiAgICAgICAgICBpZiAoc291bmQgJiYgc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgc2VsZi5fZW5kVGltZXJzW2lkXSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzZWxmLl9lbmRUaW1lcnNbaWRdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzb3VuZCBpZGVudGlmaWVkIGJ5IHRoaXMgSUQsIG9yIHJldHVybiBudWxsLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgU291bmQgSURcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgIFNvdW5kIG9iamVjdCBvciBudWxsLlxuICAgICAqL1xuICAgIF9zb3VuZEJ5SWQ6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgc291bmRzIGFuZCBmaW5kIHRoZSBvbmUgd2l0aCB0aGlzIElELlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaWQgPT09IHNlbGYuX3NvdW5kc1tpXS5faWQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5fc291bmRzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gaW5hY3RpdmUgc291bmQgZnJvbSB0aGUgcG9vbCBvciBjcmVhdGUgYSBuZXcgb25lLlxuICAgICAqIEByZXR1cm4ge1NvdW5kfSBTb3VuZCBwbGF5YmFjayBvYmplY3QuXG4gICAgICovXG4gICAgX2luYWN0aXZlU291bmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBzZWxmLl9kcmFpbigpO1xuXG4gICAgICAvLyBGaW5kIHRoZSBmaXJzdCBpbmFjdGl2ZSBub2RlIHRvIHJlY3ljbGUuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLl9zb3VuZHNbaV0uX2VuZGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuX3NvdW5kc1tpXS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGluYWN0aXZlIG5vZGUgd2FzIGZvdW5kLCBjcmVhdGUgYSBuZXcgb25lLlxuICAgICAgcmV0dXJuIG5ldyBTb3VuZChzZWxmKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRHJhaW4gZXhjZXNzIGluYWN0aXZlIHNvdW5kcyBmcm9tIHRoZSBwb29sLlxuICAgICAqL1xuICAgIF9kcmFpbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgbGltaXQgPSBzZWxmLl9wb29sO1xuICAgICAgdmFyIGNudCA9IDA7XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIC8vIElmIHRoZXJlIGFyZSBsZXNzIHNvdW5kcyB0aGFuIHRoZSBtYXggcG9vbCBzaXplLCB3ZSBhcmUgZG9uZS5cbiAgICAgIGlmIChzZWxmLl9zb3VuZHMubGVuZ3RoIDwgbGltaXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDb3VudCB0aGUgbnVtYmVyIG9mIGluYWN0aXZlIHNvdW5kcy5cbiAgICAgIGZvciAoaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5fc291bmRzW2ldLl9lbmRlZCkge1xuICAgICAgICAgIGNudCsrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBleGNlc3MgaW5hY3RpdmUgc291bmRzLCBnb2luZyBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgZm9yIChpPXNlbGYuX3NvdW5kcy5sZW5ndGggLSAxOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgaWYgKGNudCA8PSBsaW1pdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxmLl9zb3VuZHNbaV0uX2VuZGVkKSB7XG4gICAgICAgICAgLy8gRGlzY29ubmVjdCB0aGUgYXVkaW8gc291cmNlIHdoZW4gdXNpbmcgV2ViIEF1ZGlvLlxuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBzZWxmLl9zb3VuZHNbaV0uX25vZGUpIHtcbiAgICAgICAgICAgIHNlbGYuX3NvdW5kc1tpXS5fbm9kZS5kaXNjb25uZWN0KDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92ZSBzb3VuZHMgdW50aWwgd2UgaGF2ZSB0aGUgcG9vbCBzaXplLlxuICAgICAgICAgIHNlbGYuX3NvdW5kcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgY250LS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBJRCdzIGZyb20gdGhlIHNvdW5kcyBwb29sLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgT25seSByZXR1cm4gb25lIElEIGlmIG9uZSBpcyBwYXNzZWQuXG4gICAgICogQHJldHVybiB7QXJyYXl9ICAgIEFycmF5IG9mIElEcy5cbiAgICAgKi9cbiAgICBfZ2V0U291bmRJZHM6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBpZHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlkcy5wdXNoKHNlbGYuX3NvdW5kc1tpXS5faWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbaWRdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHRoZSBzb3VuZCBiYWNrIGludG8gdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICogQHBhcmFtICB7U291bmR9IHNvdW5kIFRoZSBzb3VuZCBvYmplY3QgdG8gd29yayB3aXRoLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX3JlZnJlc2hCdWZmZXI6IGZ1bmN0aW9uKHNvdW5kKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIFNldHVwIHRoZSBidWZmZXIgc291cmNlIGZvciBwbGF5YmFjay5cbiAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZSA9IEhvd2xlci5jdHguY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UuYnVmZmVyID0gY2FjaGVbc2VsZi5fc3JjXTtcblxuICAgICAgLy8gQ29ubmVjdCB0byB0aGUgY29ycmVjdCBub2RlLlxuICAgICAgaWYgKHNvdW5kLl9wYW5uZXIpIHtcbiAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmNvbm5lY3Qoc291bmQuX3Bhbm5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UuY29ubmVjdChzb3VuZC5fbm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHVwIGxvb3BpbmcgYW5kIHBsYXliYWNrIHJhdGUuXG4gICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcCA9IHNvdW5kLl9sb29wO1xuICAgICAgaWYgKHNvdW5kLl9sb29wKSB7XG4gICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wU3RhcnQgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmxvb3BFbmQgPSBzb3VuZC5fc3RvcDtcbiAgICAgIH1cbiAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5wbGF5YmFja1JhdGUuc2V0VmFsdWVBdFRpbWUoc291bmQuX3JhdGUsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUHJldmVudCBtZW1vcnkgbGVha3MgYnkgY2xlYW5pbmcgdXAgdGhlIGJ1ZmZlciBzb3VyY2UgYWZ0ZXIgcGxheWJhY2suXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBub2RlIFNvdW5kJ3MgYXVkaW8gbm9kZSBjb250YWluaW5nIHRoZSBidWZmZXIgc291cmNlLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX2NsZWFuQnVmZmVyOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmIChIb3dsZXIuX3NjcmF0Y2hCdWZmZXIpIHtcbiAgICAgICAgbm9kZS5idWZmZXJTb3VyY2Uub25lbmRlZCA9IG51bGw7XG4gICAgICAgIG5vZGUuYnVmZmVyU291cmNlLmRpc2Nvbm5lY3QoMCk7XG4gICAgICAgIHRyeSB7IG5vZGUuYnVmZmVyU291cmNlLmJ1ZmZlciA9IEhvd2xlci5fc2NyYXRjaEJ1ZmZlcjsgfSBjYXRjaChlKSB7fVxuICAgICAgfVxuICAgICAgbm9kZS5idWZmZXJTb3VyY2UgPSBudWxsO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG4gIH07XG5cbiAgLyoqIFNpbmdsZSBTb3VuZCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgc291bmQgb2JqZWN0LCB3aGljaCBlYWNoIG5vZGUgYXR0YWNoZWQgdG8gYSBIb3dsIGdyb3VwIGlzIGNvbnRhaW5lZCBpbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IGhvd2wgVGhlIEhvd2wgcGFyZW50IGdyb3VwLlxuICAgKi9cbiAgdmFyIFNvdW5kID0gZnVuY3Rpb24oaG93bCkge1xuICAgIHRoaXMuX3BhcmVudCA9IGhvd2w7XG4gICAgdGhpcy5pbml0KCk7XG4gIH07XG4gIFNvdW5kLnByb3RvdHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGEgbmV3IFNvdW5kIG9iamVjdC5cbiAgICAgKiBAcmV0dXJuIHtTb3VuZH1cbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG5cbiAgICAgIC8vIFNldHVwIHRoZSBkZWZhdWx0IHBhcmFtZXRlcnMuXG4gICAgICBzZWxmLl9tdXRlZCA9IHBhcmVudC5fbXV0ZWQ7XG4gICAgICBzZWxmLl9sb29wID0gcGFyZW50Ll9sb29wO1xuICAgICAgc2VsZi5fdm9sdW1lID0gcGFyZW50Ll92b2x1bWU7XG4gICAgICBzZWxmLl9yYXRlID0gcGFyZW50Ll9yYXRlO1xuICAgICAgc2VsZi5fc2VlayA9IDA7XG4gICAgICBzZWxmLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgc2VsZi5fZW5kZWQgPSB0cnVlO1xuICAgICAgc2VsZi5fc3ByaXRlID0gJ19fZGVmYXVsdCc7XG5cbiAgICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciB0aGlzIHNvdW5kLlxuICAgICAgc2VsZi5faWQgPSArK0hvd2xlci5fY291bnRlcjtcblxuICAgICAgLy8gQWRkIGl0c2VsZiB0byB0aGUgcGFyZW50J3MgcG9vbC5cbiAgICAgIHBhcmVudC5fc291bmRzLnB1c2goc2VsZik7XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgbmV3IG5vZGUuXG4gICAgICBzZWxmLmNyZWF0ZSgpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCBzZXR1cCBhIG5ldyBzb3VuZCBvYmplY3QsIHdoZXRoZXIgSFRNTDUgQXVkaW8gb3IgV2ViIEF1ZGlvLlxuICAgICAqIEByZXR1cm4ge1NvdW5kfVxuICAgICAqL1xuICAgIGNyZWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuICAgICAgdmFyIHZvbHVtZSA9IChIb3dsZXIuX211dGVkIHx8IHNlbGYuX211dGVkIHx8IHNlbGYuX3BhcmVudC5fbXV0ZWQpID8gMCA6IHNlbGYuX3ZvbHVtZTtcblxuICAgICAgaWYgKHBhcmVudC5fd2ViQXVkaW8pIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBnYWluIG5vZGUgZm9yIGNvbnRyb2xsaW5nIHZvbHVtZSAodGhlIHNvdXJjZSB3aWxsIGNvbm5lY3QgdG8gdGhpcykuXG4gICAgICAgIHNlbGYuX25vZGUgPSAodHlwZW9mIEhvd2xlci5jdHguY3JlYXRlR2FpbiA9PT0gJ3VuZGVmaW5lZCcpID8gSG93bGVyLmN0eC5jcmVhdGVHYWluTm9kZSgpIDogSG93bGVyLmN0eC5jcmVhdGVHYWluKCk7XG4gICAgICAgIHNlbGYuX25vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZSh2b2x1bWUsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICBzZWxmLl9ub2RlLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHNlbGYuX25vZGUuY29ubmVjdChIb3dsZXIubWFzdGVyR2Fpbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLl9ub2RlID0gbmV3IEF1ZGlvKCk7XG5cbiAgICAgICAgLy8gTGlzdGVuIGZvciBlcnJvcnMgKGh0dHA6Ly9kZXYudzMub3JnL2h0bWw1L3NwZWMtYXV0aG9yLXZpZXcvc3BlYy5odG1sI21lZGlhZXJyb3IpLlxuICAgICAgICBzZWxmLl9lcnJvckZuID0gc2VsZi5fZXJyb3JMaXN0ZW5lci5iaW5kKHNlbGYpO1xuICAgICAgICBzZWxmLl9ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgc2VsZi5fZXJyb3JGbiwgZmFsc2UpO1xuXG4gICAgICAgIC8vIExpc3RlbiBmb3IgJ2NhbnBsYXl0aHJvdWdoJyBldmVudCB0byBsZXQgdXMga25vdyB0aGUgc291bmQgaXMgcmVhZHkuXG4gICAgICAgIHNlbGYuX2xvYWRGbiA9IHNlbGYuX2xvYWRMaXN0ZW5lci5iaW5kKHNlbGYpO1xuICAgICAgICBzZWxmLl9ub2RlLmFkZEV2ZW50TGlzdGVuZXIoSG93bGVyLl9jYW5QbGF5RXZlbnQsIHNlbGYuX2xvYWRGbiwgZmFsc2UpO1xuXG4gICAgICAgIC8vIFNldHVwIHRoZSBuZXcgYXVkaW8gbm9kZS5cbiAgICAgICAgc2VsZi5fbm9kZS5zcmMgPSBwYXJlbnQuX3NyYztcbiAgICAgICAgc2VsZi5fbm9kZS5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICBzZWxmLl9ub2RlLnZvbHVtZSA9IHZvbHVtZSAqIEhvd2xlci52b2x1bWUoKTtcblxuICAgICAgICAvLyBCZWdpbiBsb2FkaW5nIHRoZSBzb3VyY2UuXG4gICAgICAgIHNlbGYuX25vZGUubG9hZCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHBhcmFtZXRlcnMgb2YgdGhpcyBzb3VuZCB0byB0aGUgb3JpZ2luYWwgc3RhdGUgKGZvciByZWN5Y2xlKS5cbiAgICAgKiBAcmV0dXJuIHtTb3VuZH1cbiAgICAgKi9cbiAgICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuXG4gICAgICAvLyBSZXNldCBhbGwgb2YgdGhlIHBhcmFtZXRlcnMgb2YgdGhpcyBzb3VuZC5cbiAgICAgIHNlbGYuX211dGVkID0gcGFyZW50Ll9tdXRlZDtcbiAgICAgIHNlbGYuX2xvb3AgPSBwYXJlbnQuX2xvb3A7XG4gICAgICBzZWxmLl92b2x1bWUgPSBwYXJlbnQuX3ZvbHVtZTtcbiAgICAgIHNlbGYuX3JhdGUgPSBwYXJlbnQuX3JhdGU7XG4gICAgICBzZWxmLl9zZWVrID0gMDtcbiAgICAgIHNlbGYuX3JhdGVTZWVrID0gMDtcbiAgICAgIHNlbGYuX3BhdXNlZCA9IHRydWU7XG4gICAgICBzZWxmLl9lbmRlZCA9IHRydWU7XG4gICAgICBzZWxmLl9zcHJpdGUgPSAnX19kZWZhdWx0JztcblxuICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgc28gdGhhdCBpdCBpc24ndCBjb25mdXNlZCB3aXRoIHRoZSBwcmV2aW91cyBzb3VuZC5cbiAgICAgIHNlbGYuX2lkID0gKytIb3dsZXIuX2NvdW50ZXI7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIVE1MNSBBdWRpbyBlcnJvciBsaXN0ZW5lciBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBfZXJyb3JMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIEZpcmUgYW4gZXJyb3IgZXZlbnQgYW5kIHBhc3MgYmFjayB0aGUgY29kZS5cbiAgICAgIHNlbGYuX3BhcmVudC5fZW1pdCgnbG9hZGVycm9yJywgc2VsZi5faWQsIHNlbGYuX25vZGUuZXJyb3IgPyBzZWxmLl9ub2RlLmVycm9yLmNvZGUgOiAwKTtcblxuICAgICAgLy8gQ2xlYXIgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgc2VsZi5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHNlbGYuX2Vycm9yRm4sIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSFRNTDUgQXVkaW8gY2FucGxheXRocm91Z2ggbGlzdGVuZXIgY2FsbGJhY2suXG4gICAgICovXG4gICAgX2xvYWRMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuXG4gICAgICAvLyBSb3VuZCB1cCB0aGUgZHVyYXRpb24gdG8gYWNjb3VudCBmb3IgdGhlIGxvd2VyIHByZWNpc2lvbiBpbiBIVE1MNSBBdWRpby5cbiAgICAgIHBhcmVudC5fZHVyYXRpb24gPSBNYXRoLmNlaWwoc2VsZi5fbm9kZS5kdXJhdGlvbiAqIDEwKSAvIDEwO1xuXG4gICAgICAvLyBTZXR1cCBhIHNwcml0ZSBpZiBub25lIGlzIGRlZmluZWQuXG4gICAgICBpZiAoT2JqZWN0LmtleXMocGFyZW50Ll9zcHJpdGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBwYXJlbnQuX3Nwcml0ZSA9IHtfX2RlZmF1bHQ6IFswLCBwYXJlbnQuX2R1cmF0aW9uICogMTAwMF19O1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyZW50Ll9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgcGFyZW50Ll9zdGF0ZSA9ICdsb2FkZWQnO1xuICAgICAgICBwYXJlbnQuX2VtaXQoJ2xvYWQnKTtcbiAgICAgICAgcGFyZW50Ll9sb2FkUXVldWUoKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgc2VsZi5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKEhvd2xlci5fY2FuUGxheUV2ZW50LCBzZWxmLl9sb2FkRm4sIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqIEhlbHBlciBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIHZhciBjYWNoZSA9IHt9O1xuXG4gIC8qKlxuICAgKiBCdWZmZXIgYSBzb3VuZCBmcm9tIFVSTCwgRGF0YSBVUkkgb3IgY2FjaGUgYW5kIGRlY29kZSB0byBhdWRpbyBzb3VyY2UgKFdlYiBBdWRpbyBBUEkpLlxuICAgKiBAcGFyYW0gIHtIb3dsfSBzZWxmXG4gICAqL1xuICB2YXIgbG9hZEJ1ZmZlciA9IGZ1bmN0aW9uKHNlbGYpIHtcbiAgICB2YXIgdXJsID0gc2VsZi5fc3JjO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGJ1ZmZlciBoYXMgYWxyZWFkeSBiZWVuIGNhY2hlZCBhbmQgdXNlIGl0IGluc3RlYWQuXG4gICAgaWYgKGNhY2hlW3VybF0pIHtcbiAgICAgIC8vIFNldCB0aGUgZHVyYXRpb24gZnJvbSB0aGUgY2FjaGUuXG4gICAgICBzZWxmLl9kdXJhdGlvbiA9IGNhY2hlW3VybF0uZHVyYXRpb247XG5cbiAgICAgIC8vIExvYWQgdGhlIHNvdW5kIGludG8gdGhpcyBIb3dsLlxuICAgICAgbG9hZFNvdW5kKHNlbGYpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKC9eZGF0YTpbXjtdKztiYXNlNjQsLy50ZXN0KHVybCkpIHtcbiAgICAgIC8vIERlY29kZSB0aGUgYmFzZTY0IGRhdGEgVVJJIHdpdGhvdXQgWEhSLCBzaW5jZSBzb21lIGJyb3dzZXJzIGRvbid0IHN1cHBvcnQgaXQuXG4gICAgICB2YXIgZGF0YSA9IGF0b2IodXJsLnNwbGl0KCcsJylbMV0pO1xuICAgICAgdmFyIGRhdGFWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZGF0YVZpZXdbaV0gPSBkYXRhLmNoYXJDb2RlQXQoaSk7XG4gICAgICB9XG5cbiAgICAgIGRlY29kZUF1ZGlvRGF0YShkYXRhVmlldy5idWZmZXIsIHNlbGYpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMb2FkIHRoZSBidWZmZXIgZnJvbSB0aGUgVVJMLlxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gc2VsZi5feGhyV2l0aENyZWRlbnRpYWxzO1xuICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBnZXQgYSBzdWNjZXNzZnVsIHJlc3BvbnNlIGJhY2suXG4gICAgICAgIHZhciBjb2RlID0gKHhoci5zdGF0dXMgKyAnJylbMF07XG4gICAgICAgIGlmIChjb2RlICE9PSAnMCcgJiYgY29kZSAhPT0gJzInICYmIGNvZGUgIT09ICczJykge1xuICAgICAgICAgIHNlbGYuX2VtaXQoJ2xvYWRlcnJvcicsIG51bGwsICdGYWlsZWQgbG9hZGluZyBhdWRpbyBmaWxlIHdpdGggc3RhdHVzOiAnICsgeGhyLnN0YXR1cyArICcuJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVjb2RlQXVkaW9EYXRhKHhoci5yZXNwb25zZSwgc2VsZik7XG4gICAgICB9O1xuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3IsIHN3aXRjaCB0byBIVE1MNSBBdWRpby5cbiAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgc2VsZi5faHRtbDUgPSB0cnVlO1xuICAgICAgICAgIHNlbGYuX3dlYkF1ZGlvID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5fc291bmRzID0gW107XG4gICAgICAgICAgZGVsZXRlIGNhY2hlW3VybF07XG4gICAgICAgICAgc2VsZi5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBzYWZlWGhyU2VuZCh4aHIpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2VuZCB0aGUgWEhSIHJlcXVlc3Qgd3JhcHBlZCBpbiBhIHRyeS9jYXRjaC5cbiAgICogQHBhcmFtICB7T2JqZWN0fSB4aHIgWEhSIHRvIHNlbmQuXG4gICAqL1xuICB2YXIgc2FmZVhoclNlbmQgPSBmdW5jdGlvbih4aHIpIHtcbiAgICB0cnkge1xuICAgICAgeGhyLnNlbmQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB4aHIub25lcnJvcigpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGVjb2RlIGF1ZGlvIGRhdGEgZnJvbSBhbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSAge0FycmF5QnVmZmVyfSBhcnJheWJ1ZmZlciBUaGUgYXVkaW8gZGF0YS5cbiAgICogQHBhcmFtICB7SG93bH0gICAgICAgIHNlbGZcbiAgICovXG4gIHZhciBkZWNvZGVBdWRpb0RhdGEgPSBmdW5jdGlvbihhcnJheWJ1ZmZlciwgc2VsZikge1xuICAgIC8vIERlY29kZSB0aGUgYnVmZmVyIGludG8gYW4gYXVkaW8gc291cmNlLlxuICAgIEhvd2xlci5jdHguZGVjb2RlQXVkaW9EYXRhKGFycmF5YnVmZmVyLCBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgIGlmIChidWZmZXIgJiYgc2VsZi5fc291bmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2FjaGVbc2VsZi5fc3JjXSA9IGJ1ZmZlcjtcbiAgICAgICAgbG9hZFNvdW5kKHNlbGYsIGJ1ZmZlcik7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLl9lbWl0KCdsb2FkZXJyb3InLCBudWxsLCAnRGVjb2RpbmcgYXVkaW8gZGF0YSBmYWlsZWQuJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNvdW5kIGlzIG5vdyBsb2FkZWQsIHNvIGZpbmlzaCBzZXR0aW5nIGV2ZXJ5dGhpbmcgdXAgYW5kIGZpcmUgdGhlIGxvYWRlZCBldmVudC5cbiAgICogQHBhcmFtICB7SG93bH0gc2VsZlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGJ1ZmZlciBUaGUgZGVjb2RlZCBidWZmZXIgc291bmQgc291cmNlLlxuICAgKi9cbiAgdmFyIGxvYWRTb3VuZCA9IGZ1bmN0aW9uKHNlbGYsIGJ1ZmZlcikge1xuICAgIC8vIFNldCB0aGUgZHVyYXRpb24uXG4gICAgaWYgKGJ1ZmZlciAmJiAhc2VsZi5fZHVyYXRpb24pIHtcbiAgICAgIHNlbGYuX2R1cmF0aW9uID0gYnVmZmVyLmR1cmF0aW9uO1xuICAgIH1cblxuICAgIC8vIFNldHVwIGEgc3ByaXRlIGlmIG5vbmUgaXMgZGVmaW5lZC5cbiAgICBpZiAoT2JqZWN0LmtleXMoc2VsZi5fc3ByaXRlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNlbGYuX3Nwcml0ZSA9IHtfX2RlZmF1bHQ6IFswLCBzZWxmLl9kdXJhdGlvbiAqIDEwMDBdfTtcbiAgICB9XG5cbiAgICAvLyBGaXJlIHRoZSBsb2FkZWQgZXZlbnQuXG4gICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgc2VsZi5fc3RhdGUgPSAnbG9hZGVkJztcbiAgICAgIHNlbGYuX2VtaXQoJ2xvYWQnKTtcbiAgICAgIHNlbGYuX2xvYWRRdWV1ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2V0dXAgdGhlIGF1ZGlvIGNvbnRleHQgd2hlbiBhdmFpbGFibGUsIG9yIHN3aXRjaCB0byBIVE1MNSBBdWRpbyBtb2RlLlxuICAgKi9cbiAgdmFyIHNldHVwQXVkaW9Db250ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gQ2hlY2sgaWYgd2UgYXJlIHVzaW5nIFdlYiBBdWRpbyBhbmQgc2V0dXAgdGhlIEF1ZGlvQ29udGV4dCBpZiB3ZSBhcmUuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2YgQXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBIb3dsZXIuY3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0QXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBIb3dsZXIuY3R4ID0gbmV3IHdlYmtpdEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgSG93bGVyLnVzaW5nV2ViQXVkaW8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIEhvd2xlci51c2luZ1dlYkF1ZGlvID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYSB3ZWJ2aWV3IGlzIGJlaW5nIHVzZWQgb24gaU9TOCBvciBlYXJsaWVyIChyYXRoZXIgdGhhbiB0aGUgYnJvd3NlcikuXG4gICAgLy8gSWYgaXQgaXMsIGRpc2FibGUgV2ViIEF1ZGlvIGFzIGl0IGNhdXNlcyBjcmFzaGluZy5cbiAgICB2YXIgaU9TID0gKC9pUChob25lfG9kfGFkKS8udGVzdChIb3dsZXIuX25hdmlnYXRvciAmJiBIb3dsZXIuX25hdmlnYXRvci5wbGF0Zm9ybSkpO1xuICAgIHZhciBhcHBWZXJzaW9uID0gSG93bGVyLl9uYXZpZ2F0b3IgJiYgSG93bGVyLl9uYXZpZ2F0b3IuYXBwVmVyc2lvbi5tYXRjaCgvT1MgKFxcZCspXyhcXGQrKV8/KFxcZCspPy8pO1xuICAgIHZhciB2ZXJzaW9uID0gYXBwVmVyc2lvbiA/IHBhcnNlSW50KGFwcFZlcnNpb25bMV0sIDEwKSA6IG51bGw7XG4gICAgaWYgKGlPUyAmJiB2ZXJzaW9uICYmIHZlcnNpb24gPCA5KSB7XG4gICAgICB2YXIgc2FmYXJpID0gL3NhZmFyaS8udGVzdChIb3dsZXIuX25hdmlnYXRvciAmJiBIb3dsZXIuX25hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICBpZiAoSG93bGVyLl9uYXZpZ2F0b3IgJiYgSG93bGVyLl9uYXZpZ2F0b3Iuc3RhbmRhbG9uZSAmJiAhc2FmYXJpIHx8IEhvd2xlci5fbmF2aWdhdG9yICYmICFIb3dsZXIuX25hdmlnYXRvci5zdGFuZGFsb25lICYmICFzYWZhcmkpIHtcbiAgICAgICAgSG93bGVyLnVzaW5nV2ViQXVkaW8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYW5kIGV4cG9zZSB0aGUgbWFzdGVyIEdhaW5Ob2RlIHdoZW4gdXNpbmcgV2ViIEF1ZGlvICh1c2VmdWwgZm9yIHBsdWdpbnMgb3IgYWR2YW5jZWQgdXNhZ2UpLlxuICAgIGlmIChIb3dsZXIudXNpbmdXZWJBdWRpbykge1xuICAgICAgSG93bGVyLm1hc3RlckdhaW4gPSAodHlwZW9mIEhvd2xlci5jdHguY3JlYXRlR2FpbiA9PT0gJ3VuZGVmaW5lZCcpID8gSG93bGVyLmN0eC5jcmVhdGVHYWluTm9kZSgpIDogSG93bGVyLmN0eC5jcmVhdGVHYWluKCk7XG4gICAgICBIb3dsZXIubWFzdGVyR2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKEhvd2xlci5fbXV0ZWQgPyAwIDogMSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICBIb3dsZXIubWFzdGVyR2Fpbi5jb25uZWN0KEhvd2xlci5jdHguZGVzdGluYXRpb24pO1xuICAgIH1cblxuICAgIC8vIFJlLXJ1biB0aGUgc2V0dXAgb24gSG93bGVyLlxuICAgIEhvd2xlci5fc2V0dXAoKTtcbiAgfTtcblxuICAvLyBBZGQgc3VwcG9ydCBmb3IgQU1EIChBc3luY2hyb25vdXMgTW9kdWxlIERlZmluaXRpb24pIGxpYnJhcmllcyBzdWNoIGFzIHJlcXVpcmUuanMuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgSG93bGVyOiBIb3dsZXIsXG4gICAgICAgIEhvd2w6IEhvd2xcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvLyBBZGQgc3VwcG9ydCBmb3IgQ29tbW9uSlMgbGlicmFyaWVzIHN1Y2ggYXMgYnJvd3NlcmlmeS5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGV4cG9ydHMuSG93bGVyID0gSG93bGVyO1xuICAgIGV4cG9ydHMuSG93bCA9IEhvd2w7XG4gIH1cblxuICAvLyBEZWZpbmUgZ2xvYmFsbHkgaW4gY2FzZSBBTUQgaXMgbm90IGF2YWlsYWJsZSBvciB1bnVzZWQuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5Ib3dsZXJHbG9iYWwgPSBIb3dsZXJHbG9iYWw7XG4gICAgd2luZG93Lkhvd2xlciA9IEhvd2xlcjtcbiAgICB3aW5kb3cuSG93bCA9IEhvd2w7XG4gICAgd2luZG93LlNvdW5kID0gU291bmQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gQWRkIHRvIGdsb2JhbCBpbiBOb2RlLmpzIChmb3IgdGVzdGluZywgZXRjKS5cbiAgICBnbG9iYWwuSG93bGVyR2xvYmFsID0gSG93bGVyR2xvYmFsO1xuICAgIGdsb2JhbC5Ib3dsZXIgPSBIb3dsZXI7XG4gICAgZ2xvYmFsLkhvd2wgPSBIb3dsO1xuICAgIGdsb2JhbC5Tb3VuZCA9IFNvdW5kO1xuICB9XG59KSgpO1xuXG5cbi8qIVxuICogIFNwYXRpYWwgUGx1Z2luIC0gQWRkcyBzdXBwb3J0IGZvciBzdGVyZW8gYW5kIDNEIGF1ZGlvIHdoZXJlIFdlYiBBdWRpbyBpcyBzdXBwb3J0ZWQuXG4gKiAgXG4gKiAgaG93bGVyLmpzIHYyLjAuOVxuICogIGhvd2xlcmpzLmNvbVxuICpcbiAqICAoYykgMjAxMy0yMDE4LCBKYW1lcyBTaW1wc29uIG9mIEdvbGRGaXJlIFN0dWRpb3NcbiAqICBnb2xkZmlyZXN0dWRpb3MuY29tXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBTZXR1cCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUuX3BvcyA9IFswLCAwLCAwXTtcbiAgSG93bGVyR2xvYmFsLnByb3RvdHlwZS5fb3JpZW50YXRpb24gPSBbMCwgMCwgLTEsIDAsIDEsIDBdO1xuICBcbiAgLyoqIEdsb2JhbCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgc3RlcmVvIHBhbm5pbmcgcG9zaXRpb24gb2YgYWxsIGN1cnJlbnQgSG93bHMuXG4gICAqIEZ1dHVyZSBIb3dscyB3aWxsIG5vdCB1c2UgdGhpcyB2YWx1ZSB1bmxlc3MgZXhwbGljaXRseSBzZXQuXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGFuIEEgdmFsdWUgb2YgLTEuMCBpcyBhbGwgdGhlIHdheSBsZWZ0IGFuZCAxLjAgaXMgYWxsIHRoZSB3YXkgcmlnaHQuXG4gICAqIEByZXR1cm4ge0hvd2xlci9OdW1iZXJ9ICAgICBTZWxmIG9yIGN1cnJlbnQgc3RlcmVvIHBhbm5pbmcgdmFsdWUuXG4gICAqL1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLnN0ZXJlbyA9IGZ1bmN0aW9uKHBhbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5jdHggfHwgIXNlbGYuY3R4Lmxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggYWxsIEhvd2xzIGFuZCB1cGRhdGUgdGhlaXIgc3RlcmVvIHBhbm5pbmcuXG4gICAgZm9yICh2YXIgaT1zZWxmLl9ob3dscy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICBzZWxmLl9ob3dsc1tpXS5zdGVyZW8ocGFuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgcG9zaXRpb24gb2YgdGhlIGxpc3RlbmVyIGluIDNEIGNhcnRlc2lhbiBzcGFjZS4gU291bmRzIHVzaW5nXG4gICAqIDNEIHBvc2l0aW9uIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhlIGxpc3RlbmVyJ3MgcG9zaXRpb24uXG4gICAqIEBwYXJhbSAge051bWJlcn0geCBUaGUgeC1wb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geSBUaGUgeS1wb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geiBUaGUgei1wb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge0hvd2xlci9BcnJheX0gICBTZWxmIG9yIGN1cnJlbnQgbGlzdGVuZXIgcG9zaXRpb24uXG4gICAqL1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLnBvcyA9IGZ1bmN0aW9uKHgsIHksIHopIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuY3R4IHx8ICFzZWxmLmN0eC5saXN0ZW5lcikge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0cyBmb3Igb3B0aW9uYWwgJ3knICYgJ3onLlxuICAgIHkgPSAodHlwZW9mIHkgIT09ICdudW1iZXInKSA/IHNlbGYuX3Bvc1sxXSA6IHk7XG4gICAgeiA9ICh0eXBlb2YgeiAhPT0gJ251bWJlcicpID8gc2VsZi5fcG9zWzJdIDogejtcblxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHNlbGYuX3BvcyA9IFt4LCB5LCB6XTtcbiAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnNldFBvc2l0aW9uKHNlbGYuX3Bvc1swXSwgc2VsZi5fcG9zWzFdLCBzZWxmLl9wb3NbMl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2VsZi5fcG9zO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSBkaXJlY3Rpb24gdGhlIGxpc3RlbmVyIGlzIHBvaW50aW5nIGluIHRoZSAzRCBjYXJ0ZXNpYW4gc3BhY2UuXG4gICAqIEEgZnJvbnQgYW5kIHVwIHZlY3RvciBtdXN0IGJlIHByb3ZpZGVkLiBUaGUgZnJvbnQgaXMgdGhlIGRpcmVjdGlvbiB0aGVcbiAgICogZmFjZSBvZiB0aGUgbGlzdGVuZXIgaXMgcG9pbnRpbmcsIGFuZCB1cCBpcyB0aGUgZGlyZWN0aW9uIHRoZSB0b3Agb2YgdGhlXG4gICAqIGxpc3RlbmVyIGlzIHBvaW50aW5nLiBUaHVzLCB0aGVzZSB2YWx1ZXMgYXJlIGV4cGVjdGVkIHRvIGJlIGF0IHJpZ2h0IGFuZ2xlc1xuICAgKiBmcm9tIGVhY2ggb3RoZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geCAgIFRoZSB4LW9yaWVudGF0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5ICAgVGhlIHktb3JpZW50YXRpb24gb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHogICBUaGUgei1vcmllbnRhdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geFVwIFRoZSB4LW9yaWVudGF0aW9uIG9mIHRoZSB0b3Agb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHlVcCBUaGUgeS1vcmllbnRhdGlvbiBvZiB0aGUgdG9wIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB6VXAgVGhlIHotb3JpZW50YXRpb24gb2YgdGhlIHRvcCBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge0hvd2xlci9BcnJheX0gICAgIFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCBvcmllbnRhdGlvbiB2ZWN0b3JzLlxuICAgKi9cbiAgSG93bGVyR2xvYmFsLnByb3RvdHlwZS5vcmllbnRhdGlvbiA9IGZ1bmN0aW9uKHgsIHksIHosIHhVcCwgeVVwLCB6VXApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuY3R4IHx8ICFzZWxmLmN0eC5saXN0ZW5lcikge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0cyBmb3Igb3B0aW9uYWwgJ3knICYgJ3onLlxuICAgIHZhciBvciA9IHNlbGYuX29yaWVudGF0aW9uO1xuICAgIHkgPSAodHlwZW9mIHkgIT09ICdudW1iZXInKSA/IG9yWzFdIDogeTtcbiAgICB6ID0gKHR5cGVvZiB6ICE9PSAnbnVtYmVyJykgPyBvclsyXSA6IHo7XG4gICAgeFVwID0gKHR5cGVvZiB4VXAgIT09ICdudW1iZXInKSA/IG9yWzNdIDogeFVwO1xuICAgIHlVcCA9ICh0eXBlb2YgeVVwICE9PSAnbnVtYmVyJykgPyBvcls0XSA6IHlVcDtcbiAgICB6VXAgPSAodHlwZW9mIHpVcCAhPT0gJ251bWJlcicpID8gb3JbNV0gOiB6VXA7XG5cbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICBzZWxmLl9vcmllbnRhdGlvbiA9IFt4LCB5LCB6LCB4VXAsIHlVcCwgelVwXTtcbiAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnNldE9yaWVudGF0aW9uKHgsIHksIHosIHhVcCwgeVVwLCB6VXApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLyoqIEdyb3VwIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgcHJvcGVydGllcyB0byB0aGUgY29yZSBpbml0LlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gX3N1cGVyIENvcmUgaW5pdCBtZXRob2QuXG4gICAqIEByZXR1cm4ge0hvd2x9XG4gICAqL1xuICBIb3dsLnByb3RvdHlwZS5pbml0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbihvKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIFNldHVwIHVzZXItZGVmaW5lZCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gICAgICBzZWxmLl9vcmllbnRhdGlvbiA9IG8ub3JpZW50YXRpb24gfHwgWzEsIDAsIDBdO1xuICAgICAgc2VsZi5fc3RlcmVvID0gby5zdGVyZW8gfHwgbnVsbDtcbiAgICAgIHNlbGYuX3BvcyA9IG8ucG9zIHx8IG51bGw7XG4gICAgICBzZWxmLl9wYW5uZXJBdHRyID0ge1xuICAgICAgICBjb25lSW5uZXJBbmdsZTogdHlwZW9mIG8uY29uZUlubmVyQW5nbGUgIT09ICd1bmRlZmluZWQnID8gby5jb25lSW5uZXJBbmdsZSA6IDM2MCxcbiAgICAgICAgY29uZU91dGVyQW5nbGU6IHR5cGVvZiBvLmNvbmVPdXRlckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZU91dGVyQW5nbGUgOiAzNjAsXG4gICAgICAgIGNvbmVPdXRlckdhaW46IHR5cGVvZiBvLmNvbmVPdXRlckdhaW4gIT09ICd1bmRlZmluZWQnID8gby5jb25lT3V0ZXJHYWluIDogMCxcbiAgICAgICAgZGlzdGFuY2VNb2RlbDogdHlwZW9mIG8uZGlzdGFuY2VNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLmRpc3RhbmNlTW9kZWwgOiAnaW52ZXJzZScsXG4gICAgICAgIG1heERpc3RhbmNlOiB0eXBlb2Ygby5tYXhEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLm1heERpc3RhbmNlIDogMTAwMDAsXG4gICAgICAgIHBhbm5pbmdNb2RlbDogdHlwZW9mIG8ucGFubmluZ01vZGVsICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmluZ01vZGVsIDogJ0hSVEYnLFxuICAgICAgICByZWZEaXN0YW5jZTogdHlwZW9mIG8ucmVmRGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5yZWZEaXN0YW5jZSA6IDEsXG4gICAgICAgIHJvbGxvZmZGYWN0b3I6IHR5cGVvZiBvLnJvbGxvZmZGYWN0b3IgIT09ICd1bmRlZmluZWQnID8gby5yb2xsb2ZmRmFjdG9yIDogMVxuICAgICAgfTtcblxuICAgICAgLy8gU2V0dXAgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgc2VsZi5fb25zdGVyZW8gPSBvLm9uc3RlcmVvID8gW3tmbjogby5vbnN0ZXJlb31dIDogW107XG4gICAgICBzZWxmLl9vbnBvcyA9IG8ub25wb3MgPyBbe2ZuOiBvLm9ucG9zfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ub3JpZW50YXRpb24gPSBvLm9ub3JpZW50YXRpb24gPyBbe2ZuOiBvLm9ub3JpZW50YXRpb259XSA6IFtdO1xuXG4gICAgICAvLyBDb21wbGV0ZSBpbml0aWxpemF0aW9uIHdpdGggaG93bGVyLmpzIGNvcmUncyBpbml0IGZ1bmN0aW9uLlxuICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIG8pO1xuICAgIH07XG4gIH0pKEhvd2wucHJvdG90eXBlLmluaXQpO1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSBzdGVyZW8gcGFubmluZyBvZiB0aGUgYXVkaW8gc291cmNlIGZvciB0aGlzIHNvdW5kIG9yIGFsbCBpbiB0aGUgZ3JvdXAuXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGFuICBBIHZhbHVlIG9mIC0xLjAgaXMgYWxsIHRoZSB3YXkgbGVmdCBhbmQgMS4wIGlzIGFsbCB0aGUgd2F5IHJpZ2h0LlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIChvcHRpb25hbCkgVGhlIHNvdW5kIElELiBJZiBub25lIGlzIHBhc3NlZCwgYWxsIGluIGdyb3VwIHdpbGwgYmUgdXBkYXRlZC5cbiAgICogQHJldHVybiB7SG93bC9OdW1iZXJ9ICAgIFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCBzdGVyZW8gcGFubmluZyB2YWx1ZS5cbiAgICovXG4gIEhvd2wucHJvdG90eXBlLnN0ZXJlbyA9IGZ1bmN0aW9uKHBhbiwgaWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGNoYW5nZSBzdGVyZW8gcGFuIHdoZW4gY2FwYWJsZS5cbiAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6ICdzdGVyZW8nLFxuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuc3RlcmVvKHBhbiwgaWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIFBhbm5lclN0ZXJlb05vZGUgc3VwcG9ydCBhbmQgZmFsbGJhY2sgdG8gUGFubmVyTm9kZSBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICAgIHZhciBwYW5uZXJUeXBlID0gKHR5cGVvZiBIb3dsZXIuY3R4LmNyZWF0ZVN0ZXJlb1Bhbm5lciA9PT0gJ3VuZGVmaW5lZCcpID8gJ3NwYXRpYWwnIDogJ3N0ZXJlbyc7XG5cbiAgICAvLyBTZXR1cCB0aGUgZ3JvdXAncyBzdGVyZW8gcGFubmluZyBpZiBubyBJRCBpcyBwYXNzZWQuXG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFJldHVybiB0aGUgZ3JvdXAncyBzdGVyZW8gcGFubmluZyBpZiBubyBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQuXG4gICAgICBpZiAodHlwZW9mIHBhbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc2VsZi5fc3RlcmVvID0gcGFuO1xuICAgICAgICBzZWxmLl9wb3MgPSBbcGFuLCAwLCAwXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9zdGVyZW87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBzdHJlbyBwYW5uaW5nIG9mIG9uZSBvciBhbGwgc291bmRzIGluIGdyb3VwLlxuICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYW4gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgc291bmQuX3N0ZXJlbyA9IHBhbjtcbiAgICAgICAgICBzb3VuZC5fcG9zID0gW3BhbiwgMCwgMF07XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGFyZSBmYWxsaW5nIGJhY2ssIG1ha2Ugc3VyZSB0aGUgcGFubmluZ01vZGVsIGlzIGVxdWFscG93ZXIuXG4gICAgICAgICAgICBzb3VuZC5fcGFubmVyQXR0ci5wYW5uaW5nTW9kZWwgPSAnZXF1YWxwb3dlcic7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgcGFubmVyIHNldHVwIGFuZCBjcmVhdGUgYSBuZXcgb25lIGlmIG5vdC5cbiAgICAgICAgICAgIGlmICghc291bmQuX3Bhbm5lciB8fCAhc291bmQuX3Bhbm5lci5wYW4pIHtcbiAgICAgICAgICAgICAgc2V0dXBQYW5uZXIoc291bmQsIHBhbm5lclR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFubmVyVHlwZSA9PT0gJ3NwYXRpYWwnKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIuc2V0UG9zaXRpb24ocGFuLCAwLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIucGFuLnNldFZhbHVlQXRUaW1lKHBhbiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fZW1pdCgnc3RlcmVvJywgc291bmQuX2lkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc291bmQuX3N0ZXJlbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSAzRCBzcGF0aWFsIHBvc2l0aW9uIG9mIHRoZSBhdWRpbyBzb3VyY2UgZm9yIHRoaXMgc291bmQgb3IgZ3JvdXAgcmVsYXRpdmUgdG8gdGhlIGdsb2JhbCBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB4ICBUaGUgeC1wb3NpdGlvbiBvZiB0aGUgYXVkaW8gc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHkgIFRoZSB5LXBvc2l0aW9uIG9mIHRoZSBhdWRpbyBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0geiAgVGhlIHotcG9zaXRpb24gb2YgdGhlIGF1ZGlvIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAob3B0aW9uYWwpIFRoZSBzb3VuZCBJRC4gSWYgbm9uZSBpcyBwYXNzZWQsIGFsbCBpbiBncm91cCB3aWxsIGJlIHVwZGF0ZWQuXG4gICAqIEByZXR1cm4ge0hvd2wvQXJyYXl9ICAgIFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCAzRCBzcGF0aWFsIHBvc2l0aW9uOiBbeCwgeSwgel0uXG4gICAqL1xuICBIb3dsLnByb3RvdHlwZS5wb3MgPSBmdW5jdGlvbih4LCB5LCB6LCBpZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gY2hhbmdlIHBvc2l0aW9uIHdoZW4gY2FwYWJsZS5cbiAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6ICdwb3MnLFxuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYucG9zKHgsIHksIHosIGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdHMgZm9yIG9wdGlvbmFsICd5JyAmICd6Jy5cbiAgICB5ID0gKHR5cGVvZiB5ICE9PSAnbnVtYmVyJykgPyAwIDogeTtcbiAgICB6ID0gKHR5cGVvZiB6ICE9PSAnbnVtYmVyJykgPyAtMC41IDogejtcblxuICAgIC8vIFNldHVwIHRoZSBncm91cCdzIHNwYXRpYWwgcG9zaXRpb24gaWYgbm8gSUQgaXMgcGFzc2VkLlxuICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGdyb3VwJ3Mgc3BhdGlhbCBwb3NpdGlvbiBpZiBubyBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQuXG4gICAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNlbGYuX3BvcyA9IFt4LCB5LCB6XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9wb3M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBzcGF0aWFsIHBvc2l0aW9uIG9mIG9uZSBvciBhbGwgc291bmRzIGluIGdyb3VwLlxuICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHNvdW5kLl9wb3MgPSBbeCwgeSwgel07XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgcGFubmVyIHNldHVwIGFuZCBjcmVhdGUgYSBuZXcgb25lIGlmIG5vdC5cbiAgICAgICAgICAgIGlmICghc291bmQuX3Bhbm5lciB8fCBzb3VuZC5fcGFubmVyLnBhbikge1xuICAgICAgICAgICAgICBzZXR1cFBhbm5lcihzb3VuZCwgJ3NwYXRpYWwnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc291bmQuX3Bhbm5lci5zZXRQb3NpdGlvbih4LCB5LCB6KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLl9lbWl0KCdwb3MnLCBzb3VuZC5faWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzb3VuZC5fcG9zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldC9zZXQgdGhlIGRpcmVjdGlvbiB0aGUgYXVkaW8gc291cmNlIGlzIHBvaW50aW5nIGluIHRoZSAzRCBjYXJ0ZXNpYW4gY29vcmRpbmF0ZVxuICAgKiBzcGFjZS4gRGVwZW5kaW5nIG9uIGhvdyBkaXJlY3Rpb24gdGhlIHNvdW5kIGlzLCBiYXNlZCBvbiB0aGUgYGNvbmVgIGF0dHJpYnV0ZXMsXG4gICAqIGEgc291bmQgcG9pbnRpbmcgYXdheSBmcm9tIHRoZSBsaXN0ZW5lciBjYW4gYmUgcXVpZXQgb3Igc2lsZW50LlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHggIFRoZSB4LW9yaWVudGF0aW9uIG9mIHRoZSBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0geSAgVGhlIHktb3JpZW50YXRpb24gb2YgdGhlIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB6ICBUaGUgei1vcmllbnRhdGlvbiBvZiB0aGUgc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIChvcHRpb25hbCkgVGhlIHNvdW5kIElELiBJZiBub25lIGlzIHBhc3NlZCwgYWxsIGluIGdyb3VwIHdpbGwgYmUgdXBkYXRlZC5cbiAgICogQHJldHVybiB7SG93bC9BcnJheX0gICAgUmV0dXJucyBzZWxmIG9yIHRoZSBjdXJyZW50IDNEIHNwYXRpYWwgb3JpZW50YXRpb246IFt4LCB5LCB6XS5cbiAgICovXG4gIEhvd2wucHJvdG90eXBlLm9yaWVudGF0aW9uID0gZnVuY3Rpb24oeCwgeSwgeiwgaWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGNoYW5nZSBvcmllbnRhdGlvbiB3aGVuIGNhcGFibGUuXG4gICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgIGV2ZW50OiAnb3JpZW50YXRpb24nLFxuICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYub3JpZW50YXRpb24oeCwgeSwgeiwgaWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0cyBmb3Igb3B0aW9uYWwgJ3knICYgJ3onLlxuICAgIHkgPSAodHlwZW9mIHkgIT09ICdudW1iZXInKSA/IHNlbGYuX29yaWVudGF0aW9uWzFdIDogeTtcbiAgICB6ID0gKHR5cGVvZiB6ICE9PSAnbnVtYmVyJykgPyBzZWxmLl9vcmllbnRhdGlvblsyXSA6IHo7XG5cbiAgICAvLyBTZXR1cCB0aGUgZ3JvdXAncyBzcGF0aWFsIG9yaWVudGF0aW9uIGlmIG5vIElEIGlzIHBhc3NlZC5cbiAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gUmV0dXJuIHRoZSBncm91cCdzIHNwYXRpYWwgb3JpZW50YXRpb24gaWYgbm8gcGFyYW1ldGVycyBhcmUgcGFzc2VkLlxuICAgICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICBzZWxmLl9vcmllbnRhdGlvbiA9IFt4LCB5LCB6XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9vcmllbnRhdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIHNwYXRpYWwgb3JpZW50YXRpb24gb2Ygb25lIG9yIGFsbCBzb3VuZHMgaW4gZ3JvdXAuXG4gICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgc291bmQuX29yaWVudGF0aW9uID0gW3gsIHksIHpdO1xuXG4gICAgICAgICAgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHBhbm5lciBzZXR1cCBhbmQgY3JlYXRlIGEgbmV3IG9uZSBpZiBub3QuXG4gICAgICAgICAgICBpZiAoIXNvdW5kLl9wYW5uZXIpIHtcbiAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYSBwb3NpdGlvbiB0byBzZXR1cCB0aGUgbm9kZSB3aXRoLlxuICAgICAgICAgICAgICBpZiAoIXNvdW5kLl9wb3MpIHtcbiAgICAgICAgICAgICAgICBzb3VuZC5fcG9zID0gc2VsZi5fcG9zIHx8IFswLCAwLCAtMC41XTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNldHVwUGFubmVyKHNvdW5kLCAnc3BhdGlhbCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzb3VuZC5fcGFubmVyLnNldE9yaWVudGF0aW9uKHgsIHksIHopO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX2VtaXQoJ29yaWVudGF0aW9uJywgc291bmQuX2lkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc291bmQuX29yaWVudGF0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldC9zZXQgdGhlIHBhbm5lciBub2RlJ3MgYXR0cmlidXRlcyBmb3IgYSBzb3VuZCBvciBncm91cCBvZiBzb3VuZHMuXG4gICAqIFRoaXMgbWV0aG9kIGNhbiBvcHRpb25hbGwgdGFrZSAwLCAxIG9yIDIgYXJndW1lbnRzLlxuICAgKiAgIHBhbm5lckF0dHIoKSAtPiBSZXR1cm5zIHRoZSBncm91cCdzIHZhbHVlcy5cbiAgICogICBwYW5uZXJBdHRyKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIHZhbHVlcy5cbiAgICogICBwYW5uZXJBdHRyKG8pIC0+IFNldCdzIHRoZSB2YWx1ZXMgb2YgYWxsIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAqICAgcGFubmVyQXR0cihvLCBpZCkgLT4gU2V0J3MgdGhlIHZhbHVlcyBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAqXG4gICAqICAgQXR0cmlidXRlczpcbiAgICogICAgIGNvbmVJbm5lckFuZ2xlIC0gKDM2MCBieSBkZWZhdWx0KSBBIHBhcmFtZXRlciBmb3IgZGlyZWN0aW9uYWwgYXVkaW8gc291cmNlcywgdGhpcyBpcyBhbiBhbmdsZSwgaW4gZGVncmVlcyxcbiAgICogICAgICAgICAgICAgICAgICAgICAgaW5zaWRlIG9mIHdoaWNoIHRoZXJlIHdpbGwgYmUgbm8gdm9sdW1lIHJlZHVjdGlvbi5cbiAgICogICAgIGNvbmVPdXRlckFuZ2xlIC0gKDM2MCBieSBkZWZhdWx0KSBBIHBhcmFtZXRlciBmb3IgZGlyZWN0aW9uYWwgYXVkaW8gc291cmNlcywgdGhpcyBpcyBhbiBhbmdsZSwgaW4gZGVncmVlcyxcbiAgICogICAgICAgICAgICAgICAgICAgICAgb3V0c2lkZSBvZiB3aGljaCB0aGUgdm9sdW1lIHdpbGwgYmUgcmVkdWNlZCB0byBhIGNvbnN0YW50IHZhbHVlIG9mIGBjb25lT3V0ZXJHYWluYC5cbiAgICogICAgIGNvbmVPdXRlckdhaW4gLSAoMCBieSBkZWZhdWx0KSBBIHBhcmFtZXRlciBmb3IgZGlyZWN0aW9uYWwgYXVkaW8gc291cmNlcywgdGhpcyBpcyB0aGUgZ2FpbiBvdXRzaWRlIG9mIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgIGBjb25lT3V0ZXJBbmdsZWAuIEl0IGlzIGEgbGluZWFyIHZhbHVlIGluIHRoZSByYW5nZSBgWzAsIDFdYC5cbiAgICogICAgIGRpc3RhbmNlTW9kZWwgLSAoJ2ludmVyc2UnIGJ5IGRlZmF1bHQpIERldGVybWluZXMgYWxnb3JpdGhtIHVzZWQgdG8gcmVkdWNlIHZvbHVtZSBhcyBhdWRpbyBtb3ZlcyBhd2F5IGZyb21cbiAgICogICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci4gQ2FuIGJlIGBsaW5lYXJgLCBgaW52ZXJzZWAgb3IgYGV4cG9uZW50aWFsLlxuICAgKiAgICAgbWF4RGlzdGFuY2UgLSAoMTAwMDAgYnkgZGVmYXVsdCkgVGhlIG1heGltdW0gZGlzdGFuY2UgYmV0d2VlbiBzb3VyY2UgYW5kIGxpc3RlbmVyLCBhZnRlciB3aGljaCB0aGUgdm9sdW1lXG4gICAqICAgICAgICAgICAgICAgICAgIHdpbGwgbm90IGJlIHJlZHVjZWQgYW55IGZ1cnRoZXIuXG4gICAqICAgICByZWZEaXN0YW5jZSAtICgxIGJ5IGRlZmF1bHQpIEEgcmVmZXJlbmNlIGRpc3RhbmNlIGZvciByZWR1Y2luZyB2b2x1bWUgYXMgc291cmNlIG1vdmVzIGZ1cnRoZXIgZnJvbSB0aGUgbGlzdGVuZXIuXG4gICAqICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgc2ltcGx5IGEgdmFyaWFibGUgb2YgdGhlIGRpc3RhbmNlIG1vZGVsIGFuZCBoYXMgYSBkaWZmZXJlbnQgZWZmZWN0IGRlcGVuZGluZyBvbiB3aGljaCBtb2RlbFxuICAgKiAgICAgICAgICAgICAgICAgICBpcyB1c2VkIGFuZCB0aGUgc2NhbGUgb2YgeW91ciBjb29yZGluYXRlcy4gR2VuZXJhbGx5LCB2b2x1bWUgd2lsbCBiZSBlcXVhbCB0byAxIGF0IHRoaXMgZGlzdGFuY2UuXG4gICAqICAgICByb2xsb2ZmRmFjdG9yIC0gKDEgYnkgZGVmYXVsdCkgSG93IHF1aWNrbHkgdGhlIHZvbHVtZSByZWR1Y2VzIGFzIHNvdXJjZSBtb3ZlcyBmcm9tIGxpc3RlbmVyLiBUaGlzIGlzIHNpbXBseSBhXG4gICAqICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUgb2YgdGhlIGRpc3RhbmNlIG1vZGVsIGFuZCBjYW4gYmUgaW4gdGhlIHJhbmdlIG9mIGBbMCwgMV1gIHdpdGggYGxpbmVhcmAgYW5kIGBbMCwg4oieXWBcbiAgICogICAgICAgICAgICAgICAgICAgICB3aXRoIGBpbnZlcnNlYCBhbmQgYGV4cG9uZW50aWFsYC5cbiAgICogICAgIHBhbm5pbmdNb2RlbCAtICgnSFJURicgYnkgZGVmYXVsdCkgRGV0ZXJtaW5lcyB3aGljaCBzcGF0aWFsaXphdGlvbiBhbGdvcml0aG0gaXMgdXNlZCB0byBwb3NpdGlvbiBhdWRpby5cbiAgICogICAgICAgICAgICAgICAgICAgICBDYW4gYmUgYEhSVEZgIG9yIGBlcXVhbHBvd2VyYC5cbiAgICogXG4gICAqIEByZXR1cm4ge0hvd2wvT2JqZWN0fSBSZXR1cm5zIHNlbGYgb3IgY3VycmVudCBwYW5uZXIgYXR0cmlidXRlcy5cbiAgICovXG4gIEhvd2wucHJvdG90eXBlLnBhbm5lckF0dHIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIG8sIGlkLCBzb3VuZDtcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIERldGVybWluZSB0aGUgdmFsdWVzIGJhc2VkIG9uIGFyZ3VtZW50cy5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIFJldHVybiB0aGUgZ3JvdXAncyBwYW5uZXIgYXR0cmlidXRlIHZhbHVlcy5cbiAgICAgIHJldHVybiBzZWxmLl9wYW5uZXJBdHRyO1xuICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbyA9IGFyZ3NbMF07XG5cbiAgICAgICAgLy8gU2V0IHRoZSBncm91J3MgcGFubmVyIGF0dHJpYnV0ZSB2YWx1ZXMuXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaWYgKCFvLnBhbm5lckF0dHIpIHtcbiAgICAgICAgICAgIG8ucGFubmVyQXR0ciA9IHtcbiAgICAgICAgICAgICAgY29uZUlubmVyQW5nbGU6IG8uY29uZUlubmVyQW5nbGUsXG4gICAgICAgICAgICAgIGNvbmVPdXRlckFuZ2xlOiBvLmNvbmVPdXRlckFuZ2xlLFxuICAgICAgICAgICAgICBjb25lT3V0ZXJHYWluOiBvLmNvbmVPdXRlckdhaW4sXG4gICAgICAgICAgICAgIGRpc3RhbmNlTW9kZWw6IG8uZGlzdGFuY2VNb2RlbCxcbiAgICAgICAgICAgICAgbWF4RGlzdGFuY2U6IG8ubWF4RGlzdGFuY2UsXG4gICAgICAgICAgICAgIHJlZkRpc3RhbmNlOiBvLnJlZkRpc3RhbmNlLFxuICAgICAgICAgICAgICByb2xsb2ZmRmFjdG9yOiBvLnJvbGxvZmZGYWN0b3IsXG4gICAgICAgICAgICAgIHBhbm5pbmdNb2RlbDogby5wYW5uaW5nTW9kZWxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fcGFubmVyQXR0ciA9IHtcbiAgICAgICAgICAgIGNvbmVJbm5lckFuZ2xlOiB0eXBlb2Ygby5wYW5uZXJBdHRyLmNvbmVJbm5lckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5jb25lSW5uZXJBbmdsZSA6IHNlbGYuX2NvbmVJbm5lckFuZ2xlLFxuICAgICAgICAgICAgY29uZU91dGVyQW5nbGU6IHR5cGVvZiBvLnBhbm5lckF0dHIuY29uZU91dGVyQW5nbGUgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLmNvbmVPdXRlckFuZ2xlIDogc2VsZi5fY29uZU91dGVyQW5nbGUsXG4gICAgICAgICAgICBjb25lT3V0ZXJHYWluOiB0eXBlb2Ygby5wYW5uZXJBdHRyLmNvbmVPdXRlckdhaW4gIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLmNvbmVPdXRlckdhaW4gOiBzZWxmLl9jb25lT3V0ZXJHYWluLFxuICAgICAgICAgICAgZGlzdGFuY2VNb2RlbDogdHlwZW9mIG8ucGFubmVyQXR0ci5kaXN0YW5jZU1vZGVsICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5kaXN0YW5jZU1vZGVsIDogc2VsZi5fZGlzdGFuY2VNb2RlbCxcbiAgICAgICAgICAgIG1heERpc3RhbmNlOiB0eXBlb2Ygby5wYW5uZXJBdHRyLm1heERpc3RhbmNlICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5tYXhEaXN0YW5jZSA6IHNlbGYuX21heERpc3RhbmNlLFxuICAgICAgICAgICAgcmVmRGlzdGFuY2U6IHR5cGVvZiBvLnBhbm5lckF0dHIucmVmRGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLnJlZkRpc3RhbmNlIDogc2VsZi5fcmVmRGlzdGFuY2UsXG4gICAgICAgICAgICByb2xsb2ZmRmFjdG9yOiB0eXBlb2Ygby5wYW5uZXJBdHRyLnJvbGxvZmZGYWN0b3IgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLnJvbGxvZmZGYWN0b3IgOiBzZWxmLl9yb2xsb2ZmRmFjdG9yLFxuICAgICAgICAgICAgcGFubmluZ01vZGVsOiB0eXBlb2Ygby5wYW5uZXJBdHRyLnBhbm5pbmdNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIucGFubmluZ01vZGVsIDogc2VsZi5fcGFubmluZ01vZGVsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoaXMgc291bmQncyBwYW5uZXIgYXR0cmlidXRlIHZhbHVlcy5cbiAgICAgICAgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQocGFyc2VJbnQoYXJnc1swXSwgMTApKTtcbiAgICAgICAgcmV0dXJuIHNvdW5kID8gc291bmQuX3Bhbm5lckF0dHIgOiBzZWxmLl9wYW5uZXJBdHRyO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgIG8gPSBhcmdzWzBdO1xuICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSB2YWx1ZXMgb2YgdGhlIHNwZWNpZmllZCBzb3VuZHMuXG4gICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgLy8gTWVyZ2UgdGhlIG5ldyB2YWx1ZXMgaW50byB0aGUgc291bmQuXG4gICAgICAgIHZhciBwYSA9IHNvdW5kLl9wYW5uZXJBdHRyO1xuICAgICAgICBwYSA9IHtcbiAgICAgICAgICBjb25lSW5uZXJBbmdsZTogdHlwZW9mIG8uY29uZUlubmVyQW5nbGUgIT09ICd1bmRlZmluZWQnID8gby5jb25lSW5uZXJBbmdsZSA6IHBhLmNvbmVJbm5lckFuZ2xlLFxuICAgICAgICAgIGNvbmVPdXRlckFuZ2xlOiB0eXBlb2Ygby5jb25lT3V0ZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLmNvbmVPdXRlckFuZ2xlIDogcGEuY29uZU91dGVyQW5nbGUsXG4gICAgICAgICAgY29uZU91dGVyR2FpbjogdHlwZW9mIG8uY29uZU91dGVyR2FpbiAhPT0gJ3VuZGVmaW5lZCcgPyBvLmNvbmVPdXRlckdhaW4gOiBwYS5jb25lT3V0ZXJHYWluLFxuICAgICAgICAgIGRpc3RhbmNlTW9kZWw6IHR5cGVvZiBvLmRpc3RhbmNlTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5kaXN0YW5jZU1vZGVsIDogcGEuZGlzdGFuY2VNb2RlbCxcbiAgICAgICAgICBtYXhEaXN0YW5jZTogdHlwZW9mIG8ubWF4RGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5tYXhEaXN0YW5jZSA6IHBhLm1heERpc3RhbmNlLFxuICAgICAgICAgIHJlZkRpc3RhbmNlOiB0eXBlb2Ygby5yZWZEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLnJlZkRpc3RhbmNlIDogcGEucmVmRGlzdGFuY2UsXG4gICAgICAgICAgcm9sbG9mZkZhY3RvcjogdHlwZW9mIG8ucm9sbG9mZkZhY3RvciAhPT0gJ3VuZGVmaW5lZCcgPyBvLnJvbGxvZmZGYWN0b3IgOiBwYS5yb2xsb2ZmRmFjdG9yLFxuICAgICAgICAgIHBhbm5pbmdNb2RlbDogdHlwZW9mIG8ucGFubmluZ01vZGVsICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmluZ01vZGVsIDogcGEucGFubmluZ01vZGVsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBwYW5uZXIgdmFsdWVzIG9yIGNyZWF0ZSBhIG5ldyBwYW5uZXIgaWYgbm9uZSBleGlzdHMuXG4gICAgICAgIHZhciBwYW5uZXIgPSBzb3VuZC5fcGFubmVyO1xuICAgICAgICBpZiAocGFubmVyKSB7XG4gICAgICAgICAgcGFubmVyLmNvbmVJbm5lckFuZ2xlID0gcGEuY29uZUlubmVyQW5nbGU7XG4gICAgICAgICAgcGFubmVyLmNvbmVPdXRlckFuZ2xlID0gcGEuY29uZU91dGVyQW5nbGU7XG4gICAgICAgICAgcGFubmVyLmNvbmVPdXRlckdhaW4gPSBwYS5jb25lT3V0ZXJHYWluO1xuICAgICAgICAgIHBhbm5lci5kaXN0YW5jZU1vZGVsID0gcGEuZGlzdGFuY2VNb2RlbDtcbiAgICAgICAgICBwYW5uZXIubWF4RGlzdGFuY2UgPSBwYS5tYXhEaXN0YW5jZTtcbiAgICAgICAgICBwYW5uZXIucmVmRGlzdGFuY2UgPSBwYS5yZWZEaXN0YW5jZTtcbiAgICAgICAgICBwYW5uZXIucm9sbG9mZkZhY3RvciA9IHBhLnJvbGxvZmZGYWN0b3I7XG4gICAgICAgICAgcGFubmVyLnBhbm5pbmdNb2RlbCA9IHBhLnBhbm5pbmdNb2RlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHBvc2l0aW9uIHRvIHNldHVwIHRoZSBub2RlIHdpdGguXG4gICAgICAgICAgaWYgKCFzb3VuZC5fcG9zKSB7XG4gICAgICAgICAgICBzb3VuZC5fcG9zID0gc2VsZi5fcG9zIHx8IFswLCAwLCAtMC41XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFubmVyIG5vZGUuXG4gICAgICAgICAgc2V0dXBQYW5uZXIoc291bmQsICdzcGF0aWFsJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKiogU2luZ2xlIFNvdW5kIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgcHJvcGVydGllcyB0byB0aGUgY29yZSBTb3VuZCBpbml0LlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gX3N1cGVyIENvcmUgU291bmQgaW5pdCBtZXRob2QuXG4gICAqIEByZXR1cm4ge1NvdW5kfVxuICAgKi9cbiAgU291bmQucHJvdG90eXBlLmluaXQgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcblxuICAgICAgLy8gU2V0dXAgdXNlci1kZWZpbmVkIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgICAgIHNlbGYuX29yaWVudGF0aW9uID0gcGFyZW50Ll9vcmllbnRhdGlvbjtcbiAgICAgIHNlbGYuX3N0ZXJlbyA9IHBhcmVudC5fc3RlcmVvO1xuICAgICAgc2VsZi5fcG9zID0gcGFyZW50Ll9wb3M7XG4gICAgICBzZWxmLl9wYW5uZXJBdHRyID0gcGFyZW50Ll9wYW5uZXJBdHRyO1xuXG4gICAgICAvLyBDb21wbGV0ZSBpbml0aWxpemF0aW9uIHdpdGggaG93bGVyLmpzIGNvcmUgU291bmQncyBpbml0IGZ1bmN0aW9uLlxuICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG5cbiAgICAgIC8vIElmIGEgc3RlcmVvIG9yIHBvc2l0aW9uIHdhcyBzcGVjaWZpZWQsIHNldCBpdCB1cC5cbiAgICAgIGlmIChzZWxmLl9zdGVyZW8pIHtcbiAgICAgICAgcGFyZW50LnN0ZXJlbyhzZWxmLl9zdGVyZW8pO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLl9wb3MpIHtcbiAgICAgICAgcGFyZW50LnBvcyhzZWxmLl9wb3NbMF0sIHNlbGYuX3Bvc1sxXSwgc2VsZi5fcG9zWzJdLCBzZWxmLl9pZCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoU291bmQucHJvdG90eXBlLmluaXQpO1xuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgU291bmQucmVzZXQgbWV0aG9kIHRvIGNsZWFuIHVwIHByb3BlcnRpZXMgZnJvbSB0aGUgc3BhdGlhbCBwbHVnaW4uXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBfc3VwZXIgU291bmQgcmVzZXQgbWV0aG9kLlxuICAgKiBAcmV0dXJuIHtTb3VuZH1cbiAgICovXG4gIFNvdW5kLnByb3RvdHlwZS5yZXNldCA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuXG4gICAgICAvLyBSZXNldCBhbGwgc3BhdGlhbCBwbHVnaW4gcHJvcGVydGllcyBvbiB0aGlzIHNvdW5kLlxuICAgICAgc2VsZi5fb3JpZW50YXRpb24gPSBwYXJlbnQuX29yaWVudGF0aW9uO1xuICAgICAgc2VsZi5fcG9zID0gcGFyZW50Ll9wb3M7XG4gICAgICBzZWxmLl9wYW5uZXJBdHRyID0gcGFyZW50Ll9wYW5uZXJBdHRyO1xuXG4gICAgICAvLyBDb21wbGV0ZSByZXNldHRpbmcgb2YgdGhlIHNvdW5kLlxuICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIH07XG4gIH0pKFNvdW5kLnByb3RvdHlwZS5yZXNldCk7XG5cbiAgLyoqIEhlbHBlciBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgcGFubmVyIG5vZGUgYW5kIHNhdmUgaXQgb24gdGhlIHNvdW5kLlxuICAgKiBAcGFyYW0gIHtTb3VuZH0gc291bmQgU3BlY2lmaWMgc291bmQgdG8gc2V0dXAgcGFubmluZyBvbi5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVHlwZSBvZiBwYW5uZXIgdG8gY3JlYXRlOiAnc3RlcmVvJyBvciAnc3BhdGlhbCcuXG4gICAqL1xuICB2YXIgc2V0dXBQYW5uZXIgPSBmdW5jdGlvbihzb3VuZCwgdHlwZSkge1xuICAgIHR5cGUgPSB0eXBlIHx8ICdzcGF0aWFsJztcblxuICAgIC8vIENyZWF0ZSB0aGUgbmV3IHBhbm5lciBub2RlLlxuICAgIGlmICh0eXBlID09PSAnc3BhdGlhbCcpIHtcbiAgICAgIHNvdW5kLl9wYW5uZXIgPSBIb3dsZXIuY3R4LmNyZWF0ZVBhbm5lcigpO1xuICAgICAgc291bmQuX3Bhbm5lci5jb25lSW5uZXJBbmdsZSA9IHNvdW5kLl9wYW5uZXJBdHRyLmNvbmVJbm5lckFuZ2xlO1xuICAgICAgc291bmQuX3Bhbm5lci5jb25lT3V0ZXJBbmdsZSA9IHNvdW5kLl9wYW5uZXJBdHRyLmNvbmVPdXRlckFuZ2xlO1xuICAgICAgc291bmQuX3Bhbm5lci5jb25lT3V0ZXJHYWluID0gc291bmQuX3Bhbm5lckF0dHIuY29uZU91dGVyR2FpbjtcbiAgICAgIHNvdW5kLl9wYW5uZXIuZGlzdGFuY2VNb2RlbCA9IHNvdW5kLl9wYW5uZXJBdHRyLmRpc3RhbmNlTW9kZWw7XG4gICAgICBzb3VuZC5fcGFubmVyLm1heERpc3RhbmNlID0gc291bmQuX3Bhbm5lckF0dHIubWF4RGlzdGFuY2U7XG4gICAgICBzb3VuZC5fcGFubmVyLnJlZkRpc3RhbmNlID0gc291bmQuX3Bhbm5lckF0dHIucmVmRGlzdGFuY2U7XG4gICAgICBzb3VuZC5fcGFubmVyLnJvbGxvZmZGYWN0b3IgPSBzb3VuZC5fcGFubmVyQXR0ci5yb2xsb2ZmRmFjdG9yO1xuICAgICAgc291bmQuX3Bhbm5lci5wYW5uaW5nTW9kZWwgPSBzb3VuZC5fcGFubmVyQXR0ci5wYW5uaW5nTW9kZWw7XG4gICAgICBzb3VuZC5fcGFubmVyLnNldFBvc2l0aW9uKHNvdW5kLl9wb3NbMF0sIHNvdW5kLl9wb3NbMV0sIHNvdW5kLl9wb3NbMl0pO1xuICAgICAgc291bmQuX3Bhbm5lci5zZXRPcmllbnRhdGlvbihzb3VuZC5fb3JpZW50YXRpb25bMF0sIHNvdW5kLl9vcmllbnRhdGlvblsxXSwgc291bmQuX29yaWVudGF0aW9uWzJdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc291bmQuX3Bhbm5lciA9IEhvd2xlci5jdHguY3JlYXRlU3RlcmVvUGFubmVyKCk7XG4gICAgICBzb3VuZC5fcGFubmVyLnBhbi5zZXRWYWx1ZUF0VGltZShzb3VuZC5fc3RlcmVvLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICB9XG5cbiAgICBzb3VuZC5fcGFubmVyLmNvbm5lY3Qoc291bmQuX25vZGUpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBjb25uZWN0aW9ucy5cbiAgICBpZiAoIXNvdW5kLl9wYXVzZWQpIHtcbiAgICAgIHNvdW5kLl9wYXJlbnQucGF1c2Uoc291bmQuX2lkLCB0cnVlKS5wbGF5KHNvdW5kLl9pZCwgdHJ1ZSk7XG4gICAgfVxuICB9O1xufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2hvd2xlci9kaXN0L2hvd2xlci5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gW3tcImF1ZGlvRmlsZVwiOlwiYm9sbG5hc0J1cy5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjoxNzIuMjY1NjI1LFwibWFnbml0dWRlXCI6LTE3LjM5OTc0Nn0se1wiZnJlcVwiOjY0LjU5OTYwOSxcIm1hZ25pdHVkZVwiOi0yMS45NjgyOX0se1wiZnJlcVwiOjM2Ni4wNjQ0NTMsXCJtYWduaXR1ZGVcIjotMzIuNTI4MDQ5fSx7XCJmcmVxXCI6NTE2Ljc5Njg3NSxcIm1hZ25pdHVkZVwiOi0zOC41NDIzNTh9LHtcImZyZXFcIjo2ODkuMDYyNSxcIm1hZ25pdHVkZVwiOi0zOS4wMzg0NDV9LHtcImZyZXFcIjo4NjEuMzI4MTI1LFwibWFnbml0dWRlXCI6LTM5LjYzODMxN30se1wiZnJlcVwiOjc3NS4xOTUzMTIsXCJtYWduaXR1ZGVcIjotMzkuNjY2NTV9LHtcImZyZXFcIjo5OTAuNTI3MzQ0LFwibWFnbml0dWRlXCI6LTQwLjAxNjIwMX0se1wiZnJlcVwiOjkyNS45Mjc3MzQsXCJtYWduaXR1ZGVcIjotNDAuNTE3ODk1fSx7XCJmcmVxXCI6MTA5OC4xOTMzNTksXCJtYWduaXR1ZGVcIjotNDEuMDYwNTkzfSx7XCJmcmVxXCI6MTM1Ni41OTE3OTcsXCJtYWduaXR1ZGVcIjotNDEuMjc0ODc2fSx7XCJmcmVxXCI6MTI3MC40NTg5ODQsXCJtYWduaXR1ZGVcIjotNDMuNzAyMjQ0fSx7XCJmcmVxXCI6MTg3My4zODg2NzIsXCJtYWduaXR1ZGVcIjotNDQuMTY5NDI2fSx7XCJmcmVxXCI6MTUyOC44NTc0MjIsXCJtYWduaXR1ZGVcIjotNDUuMTM1MjgxfSx7XCJmcmVxXCI6MTYzNi41MjM0MzgsXCJtYWduaXR1ZGVcIjotNDUuNjUzNzM2fSx7XCJmcmVxXCI6MTc0NC4xODk0NTMsXCJtYWduaXR1ZGVcIjotNDUuNzkwMDU4fV19LHtcImF1ZGlvRmlsZVwiOlwiY29vcC5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjo4Ni4xMzI4MTIsXCJtYWduaXR1ZGVcIjotMjguOTMyNTM3fSx7XCJmcmVxXCI6MjM2Ljg2NTIzNCxcIm1hZ25pdHVkZVwiOi0zMi4zMjc5OTV9LHtcImZyZXFcIjo0NTIuMTk3MjY2LFwibWFnbml0dWRlXCI6LTM2LjI4OTQ5fSx7XCJmcmVxXCI6MzQ0LjUzMTI1LFwibWFnbml0dWRlXCI6LTM2Ljc4OTI2MX0se1wiZnJlcVwiOjU1OS44NjMyODEsXCJtYWduaXR1ZGVcIjotMzguNjE2ODR9LHtcImZyZXFcIjo3MzIuMTI4OTA2LFwibWFnbml0dWRlXCI6LTM5LjQ5NDc3OH0se1wiZnJlcVwiOjc5Ni43Mjg1MTYsXCJtYWduaXR1ZGVcIjotMzkuNTExOTkzfSx7XCJmcmVxXCI6MTA3Ni42NjAxNTYsXCJtYWduaXR1ZGVcIjotNDguNDIzMDg4fSx7XCJmcmVxXCI6MTE4NC4zMjYxNzIsXCJtYWduaXR1ZGVcIjotNTAuNDg0MTg4fSx7XCJmcmVxXCI6MTI0OC45MjU3ODEsXCJtYWduaXR1ZGVcIjotNTAuNjY0ODQxfSx7XCJmcmVxXCI6MTQ2NC4yNTc4MTIsXCJtYWduaXR1ZGVcIjotNTEuMDc1NzMzfSx7XCJmcmVxXCI6MTM5OS42NTgyMDMsXCJtYWduaXR1ZGVcIjotNTEuMzI5OTA2fSx7XCJmcmVxXCI6MTY1OC4wNTY2NDEsXCJtYWduaXR1ZGVcIjotNTEuNzI5ODk3fSx7XCJmcmVxXCI6MTg1MS44NTU0NjksXCJtYWduaXR1ZGVcIjotNTMuMDE2Njc4fSx7XCJmcmVxXCI6MjExMC4yNTM5MDYsXCJtYWduaXR1ZGVcIjotNTUuNjIxMzY1fSx7XCJmcmVxXCI6MjAyNC4xMjEwOTQsXCJtYWduaXR1ZGVcIjotNTcuNTUwNTQ5fV19LHtcImF1ZGlvRmlsZVwiOlwiY291bnRpbmcxLm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjE5My43OTg4MjgsXCJtYWduaXR1ZGVcIjotMjYuMDE3NTYxfSx7XCJmcmVxXCI6NDA5LjEzMDg1OSxcIm1hZ25pdHVkZVwiOi0zNS40NzU0MDN9LHtcImZyZXFcIjo2MDIuOTI5Njg4LFwibWFnbml0dWRlXCI6LTQzLjAyMTkyN30se1wiZnJlcVwiOjc5Ni43Mjg1MTYsXCJtYWduaXR1ZGVcIjotNDYuNDgwNTk4fSx7XCJmcmVxXCI6NzE5Mi4wODk4NDQsXCJtYWduaXR1ZGVcIjotNTIuMzA4NDgzfSx7XCJmcmVxXCI6NzIzNS4xNTYyNSxcIm1hZ25pdHVkZVwiOi01Mi42MzMzNjl9LHtcImZyZXFcIjo4MjkwLjI4MzIwMyxcIm1hZ25pdHVkZVwiOi01Mi42Njk2Nzh9LHtcImZyZXFcIjo3MTA1Ljk1NzAzMSxcIm1hZ25pdHVkZVwiOi01Mi45NDUxMjJ9LHtcImZyZXFcIjo2NTY3LjYyNjk1MyxcIm1hZ25pdHVkZVwiOi01Mi45ODgwNn0se1wiZnJlcVwiOjY1MDMuMDI3MzQ0LFwibWFnbml0dWRlXCI6LTUzLjE4NDk2N30se1wiZnJlcVwiOjY0MTYuODk0NTMxLFwibWFnbml0dWRlXCI6LTUzLjQ3MzQ0Nn0se1wiZnJlcVwiOjgxODIuNjE3MTg4LFwibWFnbml0dWRlXCI6LTUzLjUzMTM1N30se1wiZnJlcVwiOjU2ODQuNzY1NjI1LFwibWFnbml0dWRlXCI6LTUzLjYwMjUzMX0se1wiZnJlcVwiOjgxMzkuNTUwNzgxLFwibWFnbml0dWRlXCI6LTU0LjA2Mjc3OH0se1wiZnJlcVwiOjY2NTMuNzU5NzY2LFwibWFnbml0dWRlXCI6LTU0LjE1NzM5OH0se1wiZnJlcVwiOjU1NzcuMDk5NjA5LFwibWFnbml0dWRlXCI6LTU0LjQ2OTM4M31dfSx7XCJhdWRpb0ZpbGVcIjpcImNyb3Nzd2Fsay5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjoyNTcuODEyNSxcIm1hZ25pdHVkZVwiOi0zNy42NjY3Mjl9LHtcImZyZXFcIjo4MjAuMzEyNSxcIm1hZ25pdHVkZVwiOi00MS43NzcwODh9LHtcImZyZXFcIjo3NTAsXCJtYWduaXR1ZGVcIjotNDMuNjQ3OTc2fSx7XCJmcmVxXCI6NTM5LjA2MjUsXCJtYWduaXR1ZGVcIjotNDcuMDM4NDQ4fSx7XCJmcmVxXCI6MTM4Mi44MTI1LFwibWFnbml0dWRlXCI6LTQ3LjcxMzg3MX0se1wiZnJlcVwiOjk2MC45Mzc1LFwibWFnbml0dWRlXCI6LTQ3LjgxNTA4Nn0se1wiZnJlcVwiOjE0NTMuMTI1LFwibWFnbml0dWRlXCI6LTQ5LjUyMTAxNX0se1wiZnJlcVwiOjEyMTguNzUsXCJtYWduaXR1ZGVcIjotNDkuODg2MTg5fSx7XCJmcmVxXCI6MjkwNi4yNSxcIm1hZ25pdHVkZVwiOi01MC4yNDM3MjV9LHtcImZyZXFcIjoxMjg5LjA2MjUsXCJtYWduaXR1ZGVcIjotNTAuNDU1NjkyfSx7XCJmcmVxXCI6MjYyNSxcIm1hZ25pdHVkZVwiOi01MS44MDEwNzV9LHtcImZyZXFcIjoxNTkzLjc1LFwibWFnbml0dWRlXCI6LTUxLjg0NjA5Nn0se1wiZnJlcVwiOjMwMjMuNDM3NSxcIm1hZ25pdHVkZVwiOi01Mi4xMzQ1NzF9LHtcImZyZXFcIjoyMDM5LjA2MjUsXCJtYWduaXR1ZGVcIjotNTIuMTQ0NDgyfSx7XCJmcmVxXCI6MjMyMC4zMTI1LFwibWFnbml0dWRlXCI6LTUyLjY1NzAyNH0se1wiZnJlcVwiOjE5MjEuODc1LFwibWFnbml0dWRlXCI6LTUzLjMzODIxOX1dfSx7XCJhdWRpb0ZpbGVcIjpcImVtcHR5V29yZHNOZWEubXAzXCIsXCJzcGVjdHJ1bVwiOlt7XCJmcmVxXCI6MjE1LjMzMjAzMSxcIm1hZ25pdHVkZVwiOi0xOS41MjAxNTl9LHtcImZyZXFcIjo0MzAuNjY0MDYyLFwibWFnbml0dWRlXCI6LTI1LjIxOTAyNX0se1wiZnJlcVwiOjYwMi45Mjk2ODgsXCJtYWduaXR1ZGVcIjotMzEuMTc1NTIyfSx7XCJmcmVxXCI6NjQuNTk5NjA5LFwibWFnbml0dWRlXCI6LTM1LjE5MzI3OX0se1wiZnJlcVwiOjc5Ni43Mjg1MTYsXCJtYWduaXR1ZGVcIjotMzkuODY4Mjc5fSx7XCJmcmVxXCI6MTc4Ny4yNTU4NTksXCJtYWduaXR1ZGVcIjotNDEuMzkxMTgyfSx7XCJmcmVxXCI6ODgyLjg2MTMyOCxcIm1hZ25pdHVkZVwiOi00Mi44MjcwNDV9LHtcImZyZXFcIjoxMDU1LjEyNjk1MyxcIm1hZ25pdHVkZVwiOi00NS4wMDkxNzF9LHtcImZyZXFcIjoxNjc5LjU4OTg0NCxcIm1hZ25pdHVkZVwiOi00NS4wMTk0NDR9LHtcImZyZXFcIjoxMTE5LjcyNjU2MixcIm1hZ25pdHVkZVwiOi00NS4zNzQ5NjJ9LHtcImZyZXFcIjoxNTcxLjkyMzgyOCxcIm1hZ25pdHVkZVwiOi00NS4zOTIzODd9LHtcImZyZXFcIjoxNDIxLjE5MTQwNixcIm1hZ25pdHVkZVwiOi00Ni4xNTY5ODJ9LHtcImZyZXFcIjoxMjcwLjQ1ODk4NCxcIm1hZ25pdHVkZVwiOi00Ni4zNzcyMjh9LHtcImZyZXFcIjoxODk0LjkyMTg3NSxcIm1hZ25pdHVkZVwiOi00Ni40NzAyOTV9LHtcImZyZXFcIjoxNDg1Ljc5MTAxNixcIm1hZ25pdHVkZVwiOi00Ny4yNjYzNjl9LHtcImZyZXFcIjo4NjEzLjI4MTI1LFwibWFnbml0dWRlXCI6LTQ3LjQ4OTY1NX1dfSx7XCJhdWRpb0ZpbGVcIjpcImZsaWdodExhbmRpbmcubXAzXCIsXCJzcGVjdHJ1bVwiOlt7XCJmcmVxXCI6MTUwLjczMjQyMixcIm1hZ25pdHVkZVwiOi0yMy4yMjkyMX0se1wiZnJlcVwiOjMyMi45OTgwNDcsXCJtYWduaXR1ZGVcIjotMjcuODE3NjMzfSx7XCJmcmVxXCI6ODYuMTMyODEyLFwibWFnbml0dWRlXCI6LTI4Ljc1NzgzMn0se1wiZnJlcVwiOjg4Mi44NjEzMjgsXCJtYWduaXR1ZGVcIjotMzYuMDQ1OTI1fSx7XCJmcmVxXCI6NDUyLjE5NzI2NixcIm1hZ25pdHVkZVwiOi0zNi4xNjUxNDZ9LHtcImZyZXFcIjo1MTYuNzk2ODc1LFwibWFnbml0dWRlXCI6LTM4LjE5MjkwOX0se1wiZnJlcVwiOjY0NS45OTYwOTQsXCJtYWduaXR1ZGVcIjotMzkuNDcyNX0se1wiZnJlcVwiOjEwNTUuMTI2OTUzLFwibWFnbml0dWRlXCI6LTQwLjkxODYxM30se1wiZnJlcVwiOjk5MC41MjczNDQsXCJtYWduaXR1ZGVcIjotNDAuOTY4MTg5fSx7XCJmcmVxXCI6NzMyLjEyODkwNixcIm1hZ25pdHVkZVwiOi00MS4zNzkyOH0se1wiZnJlcVwiOjc5Ni43Mjg1MTYsXCJtYWduaXR1ZGVcIjotNDEuNTE4OTY3fSx7XCJmcmVxXCI6MTQ4NS43OTEwMTYsXCJtYWduaXR1ZGVcIjotNDIuNDM4NzgyfSx7XCJmcmVxXCI6MTI0OC45MjU3ODEsXCJtYWduaXR1ZGVcIjotNDQuMjgzNjY1fSx7XCJmcmVxXCI6MTc2NS43MjI2NTYsXCJtYWduaXR1ZGVcIjotNDQuODM0NzUxfSx7XCJmcmVxXCI6MTE2Mi43OTI5NjksXCJtYWduaXR1ZGVcIjotNDUuOTYxNTM2fSx7XCJmcmVxXCI6MTM1Ni41OTE3OTcsXCJtYWduaXR1ZGVcIjotNDYuNTQwNTMxfV19LHtcImF1ZGlvRmlsZVwiOlwiZnJvbUJlcmxpbi5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjoxMjkuMTk5MjE5LFwibWFnbml0dWRlXCI6LTE5LjMzNzMyOH0se1wiZnJlcVwiOjE3Mi4yNjU2MjUsXCJtYWduaXR1ZGVcIjotMjAuMDYxMTU3fSx7XCJmcmVxXCI6MjM2Ljg2NTIzNCxcIm1hZ25pdHVkZVwiOi0yMS4yNDMzODJ9LHtcImZyZXFcIjozNjYuMDY0NDUzLFwibWFnbml0dWRlXCI6LTI1LjI0OTYxN30se1wiZnJlcVwiOjQwOS4xMzA4NTksXCJtYWduaXR1ZGVcIjotMjUuMjUwMjAyfSx7XCJmcmVxXCI6MzIyLjk5ODA0NyxcIm1hZ25pdHVkZVwiOi0yNS4zMjQ5M30se1wiZnJlcVwiOjQ3My43MzA0NjksXCJtYWduaXR1ZGVcIjotMjUuNDczODY0fSx7XCJmcmVxXCI6NjQ1Ljk5NjA5NCxcIm1hZ25pdHVkZVwiOi0yNi4yOTEyMzd9LHtcImZyZXFcIjo2MDIuOTI5Njg4LFwibWFnbml0dWRlXCI6LTI2LjgyMDc5N30se1wiZnJlcVwiOjk2OC45OTQxNDEsXCJtYWduaXR1ZGVcIjotMjguNDIzMDc1fSx7XCJmcmVxXCI6Nzk2LjcyODUxNixcIm1hZ25pdHVkZVwiOi0yOC42MTY4NjV9LHtcImZyZXFcIjo5MDQuMzk0NTMxLFwibWFnbml0dWRlXCI6LTMwLjMyNzI5MX0se1wiZnJlcVwiOjE0NjQuMjU3ODEyLFwibWFnbml0dWRlXCI6LTMyLjcxODUxfSx7XCJmcmVxXCI6MTE4NC4zMjYxNzIsXCJtYWduaXR1ZGVcIjotMzMuNTM4MzcyfSx7XCJmcmVxXCI6MTExOS43MjY1NjIsXCJtYWduaXR1ZGVcIjotMzMuNjM4MjY4fSx7XCJmcmVxXCI6MTI3MC40NTg5ODQsXCJtYWduaXR1ZGVcIjotMzQuMjAwMTcyfV19LHtcImF1ZGlvRmlsZVwiOlwia2l0Y2hlbjEubXAzXCIsXCJzcGVjdHJ1bVwiOlt7XCJmcmVxXCI6MTA3LjY2NjAxNixcIm1hZ25pdHVkZVwiOi0yMy4wMTgwMzJ9LHtcImZyZXFcIjoxNTAuNzMyNDIyLFwibWFnbml0dWRlXCI6LTIzLjA2MzA5M30se1wiZnJlcVwiOjEwNy42NjYwMTYsXCJtYWduaXR1ZGVcIjotMjMuNjgzODMyfSx7XCJmcmVxXCI6MTUwLjczMjQyMixcIm1hZ25pdHVkZVwiOi0yMy44NzA2Njh9LHtcImZyZXFcIjoyMzYuODY1MjM0LFwibWFnbml0dWRlXCI6LTI3LjU3ODA4N30se1wiZnJlcVwiOjIzNi44NjUyMzQsXCJtYWduaXR1ZGVcIjotMjguNDU4NDM5fSx7XCJmcmVxXCI6MzAxLjQ2NDg0NCxcIm1hZ25pdHVkZVwiOi0yOC41Mjg3OTV9LHtcImZyZXFcIjozMDEuNDY0ODQ0LFwibWFnbml0dWRlXCI6LTI5LjE0NjQ2MX0se1wiZnJlcVwiOjQzMC42NjQwNjIsXCJtYWduaXR1ZGVcIjotMzEuMTIyOTI1fSx7XCJmcmVxXCI6NDMwLjY2NDA2MixcIm1hZ25pdHVkZVwiOi0zMS42MjA3MjZ9LHtcImZyZXFcIjo1MzguMzMwMDc4LFwibWFnbml0dWRlXCI6LTMyLjI3OTg0Nn0se1wiZnJlcVwiOjUzOC4zMzAwNzgsXCJtYWduaXR1ZGVcIjotMzIuNzY2NzMxfSx7XCJmcmVxXCI6NDk1LjI2MzY3MixcIm1hZ25pdHVkZVwiOi0zMi43ODIxMjR9LHtcImZyZXFcIjo0OTUuMjYzNjcyLFwibWFnbml0dWRlXCI6LTMyLjgzMzg2Mn0se1wiZnJlcVwiOjY0NS45OTYwOTQsXCJtYWduaXR1ZGVcIjotMzMuMTIxNjQ3fSx7XCJmcmVxXCI6NjQ1Ljk5NjA5NCxcIm1hZ25pdHVkZVwiOi0zMy4yMTgyMzF9XX0se1wiYXVkaW9GaWxlXCI6XCJwZW5kZWxUYWcubXAzXCIsXCJzcGVjdHJ1bVwiOlt7XCJmcmVxXCI6MjM2Ljg2NTIzNCxcIm1hZ25pdHVkZVwiOi0xNi4yMjE1OTJ9LHtcImZyZXFcIjo2NC41OTk2MDksXCJtYWduaXR1ZGVcIjotMTguNjg4MDkxfSx7XCJmcmVxXCI6NDA5LjEzMDg1OSxcIm1hZ25pdHVkZVwiOi0yMC4zMzYxNzh9LHtcImZyZXFcIjo1NTkuODYzMjgxLFwibWFnbml0dWRlXCI6LTIxLjYyMDUyN30se1wiZnJlcVwiOjYyNC40NjI4OTEsXCJtYWduaXR1ZGVcIjotMjMuNjg1NDI5fSx7XCJmcmVxXCI6ODYxLjMyODEyNSxcIm1hZ25pdHVkZVwiOi0yNS4wNjc2MzV9LHtcImZyZXFcIjo5MjUuOTI3NzM0LFwibWFnbml0dWRlXCI6LTI1LjgzMjY3OH0se1wiZnJlcVwiOjE3MjIuNjU2MjUsXCJtYWduaXR1ZGVcIjotMjcuMTA5ODAyfSx7XCJmcmVxXCI6MTg3My4zODg2NzIsXCJtYWduaXR1ZGVcIjotMjcuMTg5NzM1fSx7XCJmcmVxXCI6MTA1NS4xMjY5NTMsXCJtYWduaXR1ZGVcIjotMjkuNTA3NzY3fSx7XCJmcmVxXCI6MTI0OC45MjU3ODEsXCJtYWduaXR1ZGVcIjotMjkuODA2MjExfSx7XCJmcmVxXCI6MTE0MS4yNTk3NjYsXCJtYWduaXR1ZGVcIjotMzAuMDY1MTg3fSx7XCJmcmVxXCI6MTMxMy41MjUzOTEsXCJtYWduaXR1ZGVcIjotMzAuMjUzNzY3fSx7XCJmcmVxXCI6MTkxNi40NTUwNzgsXCJtYWduaXR1ZGVcIjotMzAuMzY3MTYzfSx7XCJmcmVxXCI6MTQyMS4xOTE0MDYsXCJtYWduaXR1ZGVcIjotMzEuNTM5NzE5fSx7XCJmcmVxXCI6MTUyOC44NTc0MjIsXCJtYWduaXR1ZGVcIjotMzEuNzIyNTA3fV19LHtcImF1ZGlvRmlsZVwiOlwicGVuZGVsVGFnMi5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjozMDEuNDY0ODQ0LFwibWFnbml0dWRlXCI6LTI4LjU4ODI1N30se1wiZnJlcVwiOjE1MC43MzI0MjIsXCJtYWduaXR1ZGVcIjotMjkuMjkzOTh9LHtcImZyZXFcIjozNjYuMDY0NDUzLFwibWFnbml0dWRlXCI6LTMxLjQyOTk0N30se1wiZnJlcVwiOjg2LjEzMjgxMixcIm1hZ25pdHVkZVwiOi0zMS45OTczNDl9LHtcImZyZXFcIjo2ODkuMDYyNSxcIm1hZ25pdHVkZVwiOi0zMi4yNjI0OTd9LHtcImZyZXFcIjo3NzUuMTk1MzEyLFwibWFnbml0dWRlXCI6LTMzLjg1NTYxNH0se1wiZnJlcVwiOjU1OS44NjMyODEsXCJtYWduaXR1ZGVcIjotMzQuMTYyNTUyfSx7XCJmcmVxXCI6OTQ3LjQ2MDkzOCxcIm1hZ25pdHVkZVwiOi0zNS4zNzA2Njd9LHtcImZyZXFcIjo4NjEuMzI4MTI1LFwibWFnbml0dWRlXCI6LTM2LjY0MDQ3Nn0se1wiZnJlcVwiOjEwNzYuNjYwMTU2LFwibWFnbml0dWRlXCI6LTM5LjA1NTM3OH0se1wiZnJlcVwiOjEyNDguOTI1NzgxLFwibWFnbml0dWRlXCI6LTQwLjc0MDQ5OH0se1wiZnJlcVwiOjEzMTMuNTI1MzkxLFwibWFnbml0dWRlXCI6LTQxLjI0ODE3N30se1wiZnJlcVwiOjE0NDIuNzI0NjA5LFwibWFnbml0dWRlXCI6LTQzLjQxNTI0NX0se1wiZnJlcVwiOjE1NTAuMzkwNjI1LFwibWFnbml0dWRlXCI6LTQ0LjE3NDAyNn0se1wiZnJlcVwiOjE2NTguMDU2NjQxLFwibWFnbml0dWRlXCI6LTQ0LjQyNjAyOX0se1wiZnJlcVwiOjIwMDIuNTg3ODkxLFwibWFnbml0dWRlXCI6LTQ1LjEzNzQwNX1dfSx7XCJhdWRpb0ZpbGVcIjpcInNpcmVuQmlyZHMubXAzXCIsXCJzcGVjdHJ1bVwiOlt7XCJmcmVxXCI6MjkwNi45ODI0MjIsXCJtYWduaXR1ZGVcIjotMjMuMTU2NjI0fSx7XCJmcmVxXCI6NzMyLjEyODkwNixcIm1hZ25pdHVkZVwiOi0yNi42NDU3MzF9LHtcImZyZXFcIjozMjIuOTk4MDQ3LFwibWFnbml0dWRlXCI6LTI3LjQyMDkwOH0se1wiZnJlcVwiOjk2OC45OTQxNDEsXCJtYWduaXR1ZGVcIjotMjcuNTE1NTM1fSx7XCJmcmVxXCI6MTcyLjI2NTYyNSxcIm1hZ25pdHVkZVwiOi0yNy42ODAyNjV9LHtcImZyZXFcIjoxMjkuMTk5MjE5LFwibWFnbml0dWRlXCI6LTI3Ljc1Nzg1MX0se1wiZnJlcVwiOjE5MzcuOTg4MjgxLFwibWFnbml0dWRlXCI6LTI5LjA0NDg0fSx7XCJmcmVxXCI6ODgyLjg2MTMyOCxcIm1hZ25pdHVkZVwiOi0yOS41ODA1fSx7XCJmcmVxXCI6NjAyLjkyOTY4OCxcIm1hZ25pdHVkZVwiOi0yOS44NDQ2MjR9LHtcImZyZXFcIjo0NTIuMTk3MjY2LFwibWFnbml0dWRlXCI6LTMwLjIzNTQ3fSx7XCJmcmVxXCI6NTM4LjMzMDA3OCxcIm1hZ25pdHVkZVwiOi0zMC43MTEzMDR9LHtcImZyZXFcIjoxMDk4LjE5MzM1OSxcIm1hZ25pdHVkZVwiOi0zMS4wNjUyNjh9LHtcImZyZXFcIjoxMzEzLjUyNTM5MSxcIm1hZ25pdHVkZVwiOi0zMy45MjM1NTN9LHtcImZyZXFcIjoyMTk2LjM4NjcxOSxcIm1hZ25pdHVkZVwiOi0zMy45MjcwMzJ9LHtcImZyZXFcIjoyMTMxLjc4NzEwOSxcIm1hZ25pdHVkZVwiOi0zNS4xODgxNn0se1wiZnJlcVwiOjIzMDQuMDUyNzM0LFwibWFnbml0dWRlXCI6LTM1LjI3MDMzMn1dfSx7XCJhdWRpb0ZpbGVcIjpcInNub3cubXAzXCIsXCJzcGVjdHJ1bVwiOlt7XCJmcmVxXCI6NjQuNTk5NjA5LFwibWFnbml0dWRlXCI6LTI5LjY3NzE2Nn0se1wiZnJlcVwiOjM0NC41MzEyNSxcIm1hZ25pdHVkZVwiOi00MC4zNDc0ODV9LHtcImZyZXFcIjo2MDIuOTI5Njg4LFwibWFnbml0dWRlXCI6LTQ0LjA0MDU1OH0se1wiZnJlcVwiOjY4OS4wNjI1LFwibWFnbml0dWRlXCI6LTQ0Ljg5NzkxNX0se1wiZnJlcVwiOjkyNS45Mjc3MzQsXCJtYWduaXR1ZGVcIjotNDguODcwMTA2fSx7XCJmcmVxXCI6MTIwNS44NTkzNzUsXCJtYWduaXR1ZGVcIjotNDkuMDg2MzE5fSx7XCJmcmVxXCI6MTA5OC4xOTMzNTksXCJtYWduaXR1ZGVcIjotNTAuOTc2MDEzfSx7XCJmcmVxXCI6MTI5MS45OTIxODgsXCJtYWduaXR1ZGVcIjotNTIuMjI0MjM2fSx7XCJmcmVxXCI6MTQyMS4xOTE0MDYsXCJtYWduaXR1ZGVcIjotNTMuMzMwNTI0fSx7XCJmcmVxXCI6MTQ4NS43OTEwMTYsXCJtYWduaXR1ZGVcIjotNTMuNDc2MjE1fSx7XCJmcmVxXCI6MTM3OC4xMjUsXCJtYWduaXR1ZGVcIjotNTMuNjE1ODM3fSx7XCJmcmVxXCI6MTYzNi41MjM0MzgsXCJtYWduaXR1ZGVcIjotNTQuNTgzOTk2fSx7XCJmcmVxXCI6MTc0NC4xODk0NTMsXCJtYWduaXR1ZGVcIjotNTUuMjQxMDA1fSx7XCJmcmVxXCI6MTgwOC43ODkwNjIsXCJtYWduaXR1ZGVcIjotNTUuNzI2MTE2fSx7XCJmcmVxXCI6MTkzNy45ODgyODEsXCJtYWduaXR1ZGVcIjotNTcuNjY1Mjc2fSx7XCJmcmVxXCI6MjAyNC4xMjEwOTQsXCJtYWduaXR1ZGVcIjotNTkuMjUyODE1fV19LHtcImF1ZGlvRmlsZVwiOlwid2Fsa2luZ0luU3RyZWV0Lm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjEyOS4xOTkyMTksXCJtYWduaXR1ZGVcIjotMjQuODk5NDczfSx7XCJmcmVxXCI6MjU4LjM5ODQzOCxcIm1hZ25pdHVkZVwiOi0zMC44MDA2NjV9LHtcImZyZXFcIjoyMTUuMzMyMDMxLFwibWFnbml0dWRlXCI6LTMxLjAwMzU1M30se1wiZnJlcVwiOjY0LjU5OTYwOSxcIm1hZ25pdHVkZVwiOi0zMi43NDY2MzJ9LHtcImZyZXFcIjo5MDQuMzk0NTMxLFwibWFnbml0dWRlXCI6LTM1LjU0NTUzNn0se1wiZnJlcVwiOjYwMi45Mjk2ODgsXCJtYWduaXR1ZGVcIjotMzUuNzU1NDk3fSx7XCJmcmVxXCI6MzY2LjA2NDQ1MyxcIm1hZ25pdHVkZVwiOi0zNS45MDcxMzF9LHtcImZyZXFcIjo4MzkuNzk0OTIyLFwibWFnbml0dWRlXCI6LTM2LjE0NjAwNH0se1wiZnJlcVwiOjQ1Mi4xOTcyNjYsXCJtYWduaXR1ZGVcIjotMzYuMTc0MzY2fSx7XCJmcmVxXCI6Njg5LjA2MjUsXCJtYWduaXR1ZGVcIjotMzYuNzk2NTM5fSx7XCJmcmVxXCI6OTY4Ljk5NDE0MSxcIm1hZ25pdHVkZVwiOi0zNy4zNTIzNDV9LHtcImZyZXFcIjoxMDk4LjE5MzM1OSxcIm1hZ25pdHVkZVwiOi0zOC4xMzAxODR9LHtcImZyZXFcIjoxMTg0LjMyNjE3MixcIm1hZ25pdHVkZVwiOi0zOC4yMjI4Nzh9LHtcImZyZXFcIjoxMTQxLjI1OTc2NixcIm1hZ25pdHVkZVwiOi0zOC4yODM2Mjd9LHtcImZyZXFcIjoxMzk5LjY1ODIwMyxcIm1hZ25pdHVkZVwiOi00MS4xNzAwOX0se1wiZnJlcVwiOjE3ODcuMjU1ODU5LFwibWFnbml0dWRlXCI6LTQzLjY1MDQ4Nn1dfV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zcGVjdHJhbERhdGEuanNvblxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==