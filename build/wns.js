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
            const freqs = [2090, 2393];
            bell.play({
                pan: (i * 2) - 1,
                freq: freqs[i],
                vol: 8.8,
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
                console.log('playing note', nextNote);
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
        // some stupid basic pyschoacoustic shaping
        if (freq > 200)
            gain = gain * 0.12;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3MWIzNDMwZmU2ODUyZTU3NTdhOCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ducy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhdHRlcm5zLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXJrb3ZuL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9HZW5ldGljLnRzIiwid2VicGFjazovLy8uL3NyYy9TeW50aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm9pc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL011bHRpU2FtcGxlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG93bGVyL2Rpc3QvaG93bGVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwZWN0cmFsRGF0YS5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsR0FBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQixjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDdDFGRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7OztBQ3BCQSxtQkFBbUIsMENBQTBDLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsb0NBQW9DLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUseUNBQXlDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUseUNBQXlDLHVDQUF1QyxFQUFFLHVDQUF1QyxFQUFFLGtDQUFrQyxFQUFFLHVDQUF1QyxFQUFFLHdDQUF3QyxFQUFFLHVDQUF1QyxFQUFFLHVDQUF1QyxFQUFFLHNDQUFzQyxFQUFFLHNDQUFzQyxFQUFFLHdDQUF3QyxFQUFFLG1DQUFtQyxFQUFFLHNDQUFzQyxFQUFFLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHVDQUF1QyxFQUFFLEVBQUUsNkNBQTZDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLEVBQUUsNkNBQTZDLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsMENBQTBDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsd0NBQXdDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLEVBQUUseUNBQXlDLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsMENBQTBDLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsMENBQTBDLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsb0NBQW9DLHdDQUF3QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHVDQUF1QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLEVBQUUsK0NBQStDLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHdDQUF3QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHlDQUF5QyxFQUFFLHVDQUF1QyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLDBDQUEwQyxFQUFFLHlDQUF5QyxFQUFFLDBDQUEwQyxFQUFFLEMiLCJmaWxlIjoid25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJXTlNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiV05TXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIldOU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzFiMzQzMGZlNjg1MmU1NzU3YTgiLCJcbmNvbnN0IHV0aWxzID0ge1xuICBtdG9mOiAobm90ZTogbnVtYmVyKTogbnVtYmVyID0+IE1hdGgucG93KDIsIChub3RlKS8xMikgKiA0NDAsXG5cbiAgZnRvbTogKG5vdGU6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLnNxcnQobm90ZS80NDApLzEyLFxuXG4gIGNob29zZTogKGFycmF5OiBBcnJheTxhbnk+KTogYW55ID0+IHtcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG4gIH0sXG5cblxuXG4gIGdldFJhdGVGcm9tRnJlcXVlbmNpZXM6IChmcmVxLCBiYXNlRnJlcSk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIGZyZXEvYmFzZUZyZXE7XG4gIH0sXG5cbiAgZ2V0Q2xvc2VzdE1lbWJlcjogKHN1YmplY3QsIHNldCkgPT4ge1xuICAgIHJldHVybiBzZXQucmVkdWNlKCAoYWNjdW0sIG1lbWJlcikgPT4ge1xuICAgICAgY29uc3QgcHJldkRpc3RhbmNlID0gYWNjdW0gLSBzdWJqZWN0O1xuICAgICAgY29uc3QgY3VycmVudERpc3RhbmNlID0gbWVtYmVyIC0gc3ViamVjdDtcblxuICAgICAgcmV0dXJuIE1hdGguYWJzKCBjdXJyZW50RGlzdGFuY2UgKSA8IE1hdGguYWJzKCBwcmV2RGlzdGFuY2UgKSA/IG1lbWJlciA6IGFjY3VtO1xuICAgIH0sIHNldFswXSk7XG4gIH0sXG5cbiAgZmluZEluQ29sbGVjdGlvbjogKGNvbGxlY3Rpb24sIHByZWRpY2F0ZUZ1bmN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24ucmVkdWNlKCAoYWNjdW0sIG1lbWJlcikgPT4gcHJlZGljYXRlRnVuY3Rpb24obWVtYmVyKSA/IG1lbWJlciA6IGFjY3VtICk7XG4gIH0sXG5cbiAgbWFwVG9Eb21haW46IChzZXQsIGRvbWFpbikgPT4ge1xuICAgIGNvbnN0IHNldE9mZnNldCA9IE1hdGgubWluKC4uLmRvbWFpbikgLSBNYXRoLm1pbiguLi5zZXQpO1xuICAgIGNvbnN0IGRvbWFpblJhbmdlID0gKCBNYXRoLm1heCguLi5kb21haW4pIC0gTWF0aC5taW4oLi4uZG9tYWluKSApO1xuICAgIGNvbnN0IHNldFJhbmdlID0gKCBNYXRoLm1heCguLi5zZXQpIC0gTWF0aC5taW4oLi4uc2V0KSApO1xuXG4gICAgcmV0dXJuIHNldC5tYXAoIG1lbWJlciA9PiB1dGlscy5nZXRDbG9zZXN0TWVtYmVyKCAoKCAobWVtYmVyIC0gTWF0aC5taW4oLi4uc2V0KSkgLyBzZXRSYW5nZSkgKiBkb21haW5SYW5nZSApICsgc2V0T2Zmc2V0LCBkb21haW4pKTtcbiAgfSxcblxuICBmbGlwQ29pbjogKHByb2JhYmlsaXR5PTAuNSk6IGJvb2xlYW4gPT4gKE1hdGgucmFuZG9tKCkgPCBwcm9iYWJpbGl0eSkgPyBmYWxzZSA6IHRydWUsXG5cbiAgbWFrZUZ1bmN0aW9uOiAodmFsdWUpOiBGdW5jdGlvbiA9PiB7XG4gICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gKCkgPT4gdmFsdWU7XG4gICAgfVxuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuXG5leHBvcnQgY29uc3Qgd2luZGV4ID0gKHdlaWdodHM6IEFycmF5PG51bWJlcj4pOiBudW1iZXIgPT4ge1xuICBsZXQgc3VtT2ZXZWlnaHRzID0gd2VpZ2h0cy5yZWR1Y2UoIChwcmV2LCBjdXJyKSA9PiBwcmV2ICsgY3Vycik7XG5cbiAgbGV0IHJhbmROdW0gPSBNYXRoLnJhbmRvbSgpICogc3VtT2ZXZWlnaHRzO1xuICBsZXQgd2VpZ2h0U3VtID0gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdlaWdodHMubGVuZ3RoOyBpKyspIHtcbiAgICB3ZWlnaHRTdW0gKz0gd2VpZ2h0c1tpXTtcbiAgICB3ZWlnaHRTdW0gPSArd2VpZ2h0U3VtLnRvRml4ZWQoMik7XG5cbiAgICBpZiAocmFuZE51bSA8PSB3ZWlnaHRTdW0pIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZSA9IChjb2xsOiBudW1iZXJbXSk6IG51bWJlcltdID0+IHtcbiAgbGV0IGNvbGxTdW0gPSBjb2xsLnJlZHVjZSgoYSxiKSA9PiBhK2IpO1xuICByZXR1cm4gY29sbFN1bSA+IDAgPyBjb2xsLm1hcCggKHdlaWdodCkgPT4gd2VpZ2h0IC8gY29sbFN1bSkgOiBjb2xsLm1hcCgoKSA9PiAwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0VxdWl2YWxlbnQgPSAoYSwgYik6IGJvb2xlYW4gPT4ge1xuICAvLyBDcmVhdGUgYXJyYXlzIG9mIHByb3BlcnR5IG5hbWVzXG4gIHZhciBhUHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhKTtcbiAgdmFyIGJQcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGIpO1xuXG4gIC8vIElmIG51bWJlciBvZiBwcm9wZXJ0aWVzIGlzIGRpZmZlcmVudCxcbiAgLy8gb2JqZWN0cyBhcmUgbm90IGVxdWl2YWxlbnRcbiAgaWYgKGFQcm9wcy5sZW5ndGggIT0gYlByb3BzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYVByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHByb3BOYW1lID0gYVByb3BzW2ldO1xuXG4gICAgLy8gSWYgdmFsdWVzIG9mIHNhbWUgcHJvcGVydHkgYXJlIG5vdCBlcXVhbCxcbiAgICAvLyBvYmplY3RzIGFyZSBub3QgZXF1aXZhbGVudFxuICAgIGlmIChhW3Byb3BOYW1lXSAhPT0gYltwcm9wTmFtZV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBtYWRlIGl0IHRoaXMgZmFyLCBvYmplY3RzXG4gIC8vIGFyZSBjb25zaWRlcmVkIGVxdWl2YWxlbnRcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgbW9kID0gKG51bSwgbW9kdWxvKSA9PiAobnVtICUgbW9kdWxvICsgbW9kdWxvKSAlIG1vZHVsbztcblxuZXhwb3J0IGNvbnN0IGdldFNlcXVlbnRpYWxSYW5kb21JbmRleCA9ICggbGFzdEluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyICk6IG51bWJlciA9PiB7XG4gIGNvbnN0IHBvc3NpYmxlSW5kZXhlcyA9IEFycmF5KGxlbmd0aCkuZmlsbCgwKS5tYXAoIChpdGVtLGkpID0+IGkpLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGxhc3RJbmRleCk7XG5cbiAgcmV0dXJuIHV0aWxzLmNob29zZShwb3NzaWJsZUluZGV4ZXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy50cyIsImltcG9ydCB7IFNjZW5lLCBJU2NlbmVDb25maWcgfSBmcm9tICcuL1NjZW5lJztcbmltcG9ydCBTeW50aCBmcm9tICcuL1N5bnRoJztcbmltcG9ydCB7IE5vaXNlIH0gZnJvbSAnLi9Ob2lzZSc7XG5pbXBvcnQgTXVsdGlTYW1wbGVyIGZyb20gJy4vTXVsdGlTYW1wbGVyJztcbmltcG9ydCB7SUZyZXFCaW59IGZyb20gJy4uL3Rvb2xzL3NwZWN0cnVtUGVha1BhcnNlcic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBnZXRTZXF1ZW50aWFsUmFuZG9tSW5kZXggfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHNwZWN0cmFsRGF0YSBmcm9tICcuL3NwZWN0cmFsRGF0YS5qc29uJztcblxuZXhwb3J0IGludGVyZmFjZSBJV05TQ29uZmlnIHtcbiAgc2FtcGxlUGF0aDogc3RyaW5nXG59O1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBJV05TQ29uZmlnID0ge1xuICBzYW1wbGVQYXRoOiBcInNhbXBsZXMvXCIsXG59O1xuXG5jb25zdCBXTlMgPSAoY29uZmlnPzogSVdOU0NvbmZpZykgPT4ge1xuICBjb25maWcgPSBjb25maWcgPyB7Li4uZGVmYXVsdENvbmZpZywgLi4uY29uZmlnfSA6IGRlZmF1bHRDb25maWc7XG5cbiAgY29uc3QgYmFja2dyb3VuZFNhbXBsZXMgPSA8YW55PnNwZWN0cmFsRGF0YTtcblxuICAvLyBTZXR1cFxuICBjb25zdCBwb3B1bGF0aW9uU2l6ZSA9IDE2O1xuICBjb25zdCBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gIGNvbnN0IGNob3JkT3NjaWxsYXRvcnMgPSBBcnJheShwb3B1bGF0aW9uU2l6ZSkuZmlsbCgwKS5tYXAoKCkgPT5cbiAgICBuZXcgU3ludGgoY29udGV4dClcbiAgKTtcblxuICBjb25zdCBtdWx0aVNhbXBsZXJPcHRzID0ge1xuICAgIHNhbXBsZXM6IFtcbiAgICAgIC8veyBmaWxlczogWyBjb25maWcuc2FtcGxlUGF0aCArIFwicGlwZUcubXAzXCIgXSwgZnJlcTogMTk5IH0sXG4gICAgICAvL3sgZmlsZXM6IFsgY29uZmlnLnNhbXBsZVBhdGggKyBcInBpcGVELm1wM1wiIF0sIGZyZXE6IDMwNiB9LFxuICAgICAgeyBmaWxlczogWyBjb25maWcuc2FtcGxlUGF0aCArIFwicGlwZUEubXAzXCIgXSwgZnJlcTogNDQ1IH0sXG4gICAgICB7IGZpbGVzOiBbIGNvbmZpZy5zYW1wbGVQYXRoICsgXCJwaXBlRS5tcDNcIiBdLCBmcmVxOiA2NjYgfSxcbiAgICAgIHsgZmlsZXM6IFsgY29uZmlnLnNhbXBsZVBhdGggKyBcInBpYW5vMi0zMjQubXAzXCIgXSwgZnJlcTogMzI0IH0sXG4gICAgICB7IGZpbGVzOiBbIGNvbmZpZy5zYW1wbGVQYXRoICsgXCJwaWFubzMtODE0Lm1wM1wiIF0sIGZyZXE6IDgxNCB9LFxuICAgIF0sXG4gIH07XG4gIGNvbnN0IG1lbG9keU9zY2lsbGF0b3JzID0gQXJyYXkocG9wdWxhdGlvblNpemUpLmZpbGwoMCkubWFwKCgpID0+IHV0aWxzLmZsaXBDb2luKCkgPyBuZXcgTXVsdGlTYW1wbGVyKCBjb250ZXh0LCBtdWx0aVNhbXBsZXJPcHRzICkgOiBuZXcgU3ludGgoY29udGV4dCkpO1xuICBjb25zdCBzb3VyY2VTYW1wbGVzID0gYmFja2dyb3VuZFNhbXBsZXMubWFwKCBzYW1wbGVEYXRhID0+IG5ldyBNdWx0aVNhbXBsZXIoY29udGV4dCwge1xuICAgIHNhbXBsZXM6IFtcbiAgICAgIHsgZmlsZXM6IFsgY29uZmlnLnNhbXBsZVBhdGggKyBzYW1wbGVEYXRhLmF1ZGlvRmlsZSBdLCBmcmVxOiAxIH0sXG4gICAgXSxcbiAgfSkpO1xuXG4gIGNvbnN0IGJlbGxzID0gQXJyYXkoMikuZmlsbCgwKS5tYXAoICgpID0+XG4gICAgbmV3IE5vaXNlKGNvbnRleHQpXG4gICk7XG5cbiAgY29uc3QgcGxheUJlbGxzID0gKCkgPT4ge1xuICAgIGNvbnN0IGR1cmF0aW9uID0gNDU7XG4gICAgYmVsbHMuZm9yRWFjaCggKGJlbGwsIGkpID0+IHtcbiAgICAgIGNvbnN0IGZyZXFzID0gWzIwOTAsIDIzOTNdO1xuICAgICAgYmVsbC5wbGF5KHtcbiAgICAgICAgcGFuOiAoaSAqIDIpIC0gMSxcbiAgICAgICAgZnJlcTogZnJlcXNbaV0sXG4gICAgICAgIHZvbDogOC44LFxuICAgICAgICB0aW1lOiBkdXJhdGlvbixcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dChwbGF5TmV3U2NlbmUsIChkdXJhdGlvbiArIDEyKSAqIDEwMDApOyAvLyBUaW1pbmcgaXMgd2VpcmQgaW4gdGhlIHBsYXllci4gVGhpcyByZXN1bHRzIGluIGEgZ2FwIHdoaWNoIGlzIHdoYXQgSSB3YW50XG4gIH07XG5cbiAgbGV0IHNhbXBsZUluZGV4ID0gMDtcblxuICBsZXQgaW50ZXJsdWRlSnVzdFBsYXllZCA9IGZhbHNlO1xuICBjb25zdCBwbGF5TmV3U2NlbmUgPSAoKSA9PiB7XG4gICAgLy8gT2NjYXNpb25hbGx5IHdlIHdhbnQgdG8gcGF1c2UgZm9yIGEgbW9tZW50IHRvIHBsYXkgYW4gaW50ZXJsdWRlIGluIHNpbGVuY2VcbiAgICBjb25zdCBwbGF5SW50ZXJsdWRlID0gdXRpbHMuZmxpcENvaW4oMC44MCk7XG5cbiAgICBpZihwbGF5SW50ZXJsdWRlICYmICFpbnRlcmx1ZGVKdXN0UGxheWVkKSB7XG4gICAgICBpbnRlcmx1ZGVKdXN0UGxheWVkID0gdHJ1ZTtcbiAgICAgIHBsYXlCZWxscygpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT5cbiAgICAgICAgc291cmNlU2FtcGxlcy5mb3JFYWNoKCBzYW1wbGVQbGF5ZXIgPT4gc2FtcGxlUGxheWVyLnN0b3AoMCwgc2FtcGxlUGxheWVyLnBsYXllcnNbMF0pICksXG4gICAgICAgIDE1ICogMTAwMFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGludGVybHVkZUp1c3RQbGF5ZWQgPSBmYWxzZTtcbiAgICBzYW1wbGVJbmRleCA9IGdldFNlcXVlbnRpYWxSYW5kb21JbmRleChzYW1wbGVJbmRleCwgYmFja2dyb3VuZFNhbXBsZXMubGVuZ3RoKTtcbiAgICAvL2NvbnN0IHRhcmdldCA9IFsxOTMsIDQyMywgMTY2OCwgMjMzMywgMjY2NSwgMzA3OCwgNDAzOCwgNjMxOSwgMTkzKzEsIDQyMysxLCAxNjY4KzEsIDIzMzMrMSwgMjY2NSsxLCAzMDc4KzEsIDQwMzgrMSwgNjMxOSsxIF07IC8vIGluIGZyZXF1ZW5jeVxuICAgIGNvbnN0IGJhY2tncm91bmRTYW1wbGUgPSBiYWNrZ3JvdW5kU2FtcGxlc1tzYW1wbGVJbmRleF07XG4gICAgY29uc29sZS5sb2coYmFja2dyb3VuZFNhbXBsZS5hdWRpb0ZpbGUpO1xuICAgIGNvbnN0IGluaXRpYWxQb3B1bGF0aW9uID0gQXJyYXkoODApLmZpbGwoIGJhY2tncm91bmRTYW1wbGUuc3BlY3RydW0ubWFwKCBiaW4gPT4gYmluLmZyZXEpICk7XG5cbiAgICAvLyBUYXJnZXQgaXMgdGhlIG92ZXJ0b25lcyBvZiB0aGUgbW9zdCBwcm9taW5lbnQgZnJlcXVlbmN5IGluIHRoZSBzcGVjdHJ1bVxuICAgIGNvbnN0IHRhcmdldCA9IGJhY2tncm91bmRTYW1wbGUuc3BlY3RydW1cbiAgICAgIC5yZWR1Y2UoIChhY2N1bTogSUZyZXFCaW5bXSwgYmluOiBJRnJlcUJpbikgPT4gYWNjdW1bMF0ubWFnbml0dWRlIDwgYmluLm1hZ25pdHVkZSA/IFsgYmluIF0gOiBhY2N1bSwgW3tmcmVxOiAwLCBtYWduaXR1ZGU6IC0xMDB9XSlcbiAgICAgIC5tYXAoIGJpbiA9PiBiaW4uZnJlcSlcbiAgICAgIC5tYXAoICggc3Ryb25nZXN0RnJlcTogbnVtYmVyICkgPT4gQXJyYXkoYmFja2dyb3VuZFNhbXBsZS5zcGVjdHJ1bS5sZW5ndGgpLmZpbGwoMCkubWFwKCAoaXRlbSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBoYXJtb25pYyA9IHN0cm9uZ2VzdEZyZXEgKiAoaSsxKTtcbiAgICAgICAgY29uc3QgaGlnaGVzdEZyZXEgPSA3MDAwO1xuICAgICAgICBpZiAoaGFybW9uaWMgPiBoaWdoZXN0RnJlcSkge1xuICAgICAgICAgIGNvbnN0IGRpdmlzb3IgPSBNYXRoLmNlaWwoaGFybW9uaWMgLyBoaWdoZXN0RnJlcSk7XG4gICAgICAgICAgcmV0dXJuIGhhcm1vbmljIC8gZGl2aXNvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gaGFybW9uaWM7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICApWzBdO1xuXG4gICAgY29uc3Qgc2NlbmVDb25maWc6IElTY2VuZUNvbmZpZyA9IHtcbiAgICAgIGluaXRpYWxQb3B1bGF0aW9uOiBpbml0aWFsUG9wdWxhdGlvbi5tYXAoXG4gICAgICAgIGl0ZW0gPT4gaXRlbS5tYXAoXG4gICAgICAgICAgaXRlbTIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChNYXRoLnJhbmRvbSgpICogKHRhcmdldFt0YXJnZXQubGVuZ3RoLTFdIC0gdGFyZ2V0WzBdKSkgKyAodGFyZ2V0WzBdLTIwKVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHBvcHVsYXRpb25TaXplOiAxNixcbiAgICAgIG1heEdlbmVyYXRpb25zOiAyLFxuICAgICAgdGFyZ2V0LCAvLyBpbiBmcmVxdWVuY3lcbiAgICAgIHRpbWVCZXR3ZWVuRXZlbnRzOiAoKSA9PiAoTWF0aC5yYW5kb20oKSAqIDE1KSArIDEwLFxuICAgICAgZ2FwQmV0d2VlbkV2ZW50czogKCkgPT4gdXRpbHMuY2hvb3NlKFsyNSwxMF0pLFxuICAgICAgbWVsb2R5T3NjaWxsYXRvcnMsXG4gICAgICBjaG9yZE9zY2lsbGF0b3JzLFxuICAgICAgb25GaW5pc2g6IHBsYXlOZXdTY2VuZVxuICAgIH1cblxuICAgIHNvdXJjZVNhbXBsZXNbc2FtcGxlSW5kZXhdLnBsYXkoe2ZyZXE6IDEsIHRpbWU6IDYwICogMyAqIDEwMDAsIHZvbDogMC4yM30pO1xuXG4gICAgLy8gU3RhcnQgdGhlIHNjZW5lXG4gICAgbmV3IFNjZW5lKHNjZW5lQ29uZmlnKS5wbGF5KCk7XG4gIH07XG5cbiAgLy9wbGF5TmV3U2NlbmUoKTtcbiAgcGxheUJlbGxzKCk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdOUztcbmV4cG9ydCB7IFdOUyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ducy50cyIsIlxuaW1wb3J0IHsgUG1hcmtvdiwgUGdlbmV0aWMgfSBmcm9tICcuL3BhdHRlcm5zJztcbmltcG9ydCBTeW50aCBmcm9tICcuL1N5bnRoJztcbmltcG9ydCB7SVNvdW5kUGxheWVyfSBmcm9tICcuL1NvdW5kUGxheWVyJztcbmltcG9ydCB7SUZyZXFCaW59IGZyb20gJy4uL3Rvb2xzL3NwZWN0cnVtUGVha1BhcnNlcic7XG5pbXBvcnQgeyBtb2QgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBJU3BlY3RydW1Db25maWcge1xuICBhdWRpb0ZpbGU6IHN0cmluZyxcbiAgc3BlY3RydW06IElGcmVxQmluW10sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNjZW5lQ29uZmlnIHtcbiAgcG9wdWxhdGlvblNpemU6IG51bWJlcixcbiAgaW5pdGlhbFBvcHVsYXRpb246IGFueVtdW10sXG4gIHRhcmdldDogYW55W10sIC8vIEluIEZyZXF1ZW5jeVxuICBtYXhHZW5lcmF0aW9uczogbnVtYmVyO1xuICB0aW1lQmV0d2VlbkV2ZW50czogYW55IHxudW1iZXIgfCBGdW5jdGlvbixcbiAgZ2FwQmV0d2VlbkV2ZW50czogYW55IHwgbnVtYmVyIHwgRnVuY3Rpb24sXG4gIG1lbG9keU9zY2lsbGF0b3JzOiBJU291bmRQbGF5ZXJbXSxcbiAgY2hvcmRPc2NpbGxhdG9yczogSVNvdW5kUGxheWVyW10sXG4gIG9uRmluaXNoOiBGdW5jdGlvbixcbn1cblxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcbiAgbm90ZXM6IEl0ZXJhYmxlSXRlcmF0b3I8YW55PjtcbiAgY3VycmVudEdlbmVyYXRpb246IG51bWJlcjtcbiAgY29uZmlnOiBJU2NlbmVDb25maWc7XG4gIG9uRmluaXNoOiBGdW5jdGlvbjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBJU2NlbmVDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgIHRoaXMuY29uZmlnLnRpbWVCZXR3ZWVuRXZlbnRzID0gdXRpbHMubWFrZUZ1bmN0aW9uKHRoaXMuY29uZmlnLnRpbWVCZXR3ZWVuRXZlbnRzKTtcbiAgICB0aGlzLmNvbmZpZy5nYXBCZXR3ZWVuRXZlbnRzID0gdXRpbHMubWFrZUZ1bmN0aW9uKHRoaXMuY29uZmlnLmdhcEJldHdlZW5FdmVudHMpO1xuICAgIHRoaXMubm90ZXMgPSBQZ2VuZXRpYyhjb25maWcuaW5pdGlhbFBvcHVsYXRpb24sIGNvbmZpZy50YXJnZXQpO1xuICAgIHRoaXMuY29uZmlnLm1heEdlbmVyYXRpb25zID0gY29uZmlnLm1heEdlbmVyYXRpb25zO1xuICAgIHRoaXMuY3VycmVudEdlbmVyYXRpb24gPSAwO1xuXG4gICAgdGhpcy5jb25maWcub25GaW5pc2ggPSBjb25maWcub25GaW5pc2g7XG4gIH1cblxuICBwdWJsaWMgcGxheSgpOiBTY2VuZSB7XG4gICAgY29uc3QgbmV4dEdlbjogbnVtYmVyW10gPSB0aGlzLm5vdGVzLm5leHQoKS52YWx1ZTtcbiAgICBjb25zdCBuZXdOb3RlczogbnVtYmVyW10gPSBuZXh0R2VuO1xuXG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBrID0gKE1hdGgucmFuZG9tKCkgPiAwLjUpID8gMCA6IDE7XG4gICAgdGhpcy5jb25maWcuY2hvcmRPc2NpbGxhdG9ycy5tYXAoKG9zYykgPT4ge1xuICAgICAgY29uc3Qgb2N0YXZlID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA1KTtcbiAgICAgIG9zYy5wbGF5KHtmcmVxOiBuZXdOb3Rlc1tpXS9vY3RhdmUsIHRpbWU6IHRoaXMuY29uZmlnLnRpbWVCZXR3ZWVuRXZlbnRzKCksIHBhbjogKChrJTIpKjIpIC0gMSwgdm9sOiAwLjJ9KTsgaSsrOyBrKys7XG4gICAgfSk7XG5cbiAgICB0aGlzLnBsYXlNZWxvZHkobmV3Tm90ZXMsIHRoaXMuY3VycmVudEdlbmVyYXRpb24pO1xuXG4gICAgLy9jb25zb2xlLmxvZygnR0VORVRJQyBHRU5FUkFUSU9OOiAnLCB0aGlzLmN1cnJlbnRHZW5lcmF0aW9uLCBuZXh0R2VuKTtcbiAgICBpZih0aGlzLmN1cnJlbnRHZW5lcmF0aW9uIDw9ICh0aGlzLmNvbmZpZy5tYXhHZW5lcmF0aW9ucy0xKSApIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50R2VuZXJhdGlvbisrO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgIH0sICh0aGlzLmNvbmZpZy50aW1lQmV0d2VlbkV2ZW50cygpICsgdGhpcy5jb25maWcuZ2FwQmV0d2VlbkV2ZW50cygpKSAqIDEwMDApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudEdlbmVyYXRpb24rKztcbiAgICAgIHRoaXMuZW5kT2ZTY2VuZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5TWVsb2R5KCBub3RlcywgZ2VuZXJhdGlvbiApOiB2b2lkIHtcbiAgICBjb25zdCBvcmRlciA9IDM7XG4gICAgY29uc3QgbmV3Tm90ZXMgPSBub3RlcztcblxuICAgIC8vIFRha2VuIGZyb20gdGhlIHNlcXVlbmNlIG9mIHBpdGNoZXMgaW4gXCJGb3JldmVyIGluIEJsdWUgSmVhbnNcIiBieSBOZWlsIERpYW1vbmRcbiAgICBjb25zdCBpZGVhbE1lbG9keSA9IHV0aWxzLm1hcFRvRG9tYWluKFswLDQsMiwwLDcsNCwyLDcsNyw0LDIsMiw0LDQsMiwwXSwgbmV3Tm90ZXMpO1xuICAgIGNvbnN0IHJhbmRvbVNoaWZ0QW1vdW50ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGlkZWFsTWVsb2R5Lmxlbmd0aCkpO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG4gICAgZm9yKGxldCBvZmZzZXQgPSBvcmRlcjsgb2Zmc2V0ID49IDA7IG9mZnNldC0tKSB7XG4gICAgICBpbml0aWFsU3RhdGUucHVzaCggaWRlYWxNZWxvZHlbbW9kKHJhbmRvbVNoaWZ0QW1vdW50LW9mZnNldCwgaWRlYWxNZWxvZHkubGVuZ3RoKV0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtvdk1lbG9keSA9IFBtYXJrb3YoaWRlYWxNZWxvZHksIG9yZGVyLCBpbml0aWFsU3RhdGUgKTtcblxuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBwbGF5TmV4dE5vdGUgPSAoZ2VuZXJhdGlvbikgPT4ge1xuICAgICAgY29uc3Qgb2N0YXZlID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAzKSArIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMyApICsgMjtcbiAgICAgIGNvbnN0IG5leHROb3RlID0gbWFya292TWVsb2R5Lm5leHQoKS52YWx1ZTtcblxuICAgICAgLy9pZihuZXh0Tm90ZSAhPT0gdW5kZWZpbmVkICYmIHV0aWxzLmZsaXBDb2luKDAuNzUpICkgeyAvLyBTb21ldGltZXMgcHJvYmFibGl0aWVzIGFyZSB6ZXJvLCBzbyB3ZSdsbCBnZXQgYW4gdW5kZWZpbmVkIG5leHQgc3RhdGVcbiAgICAgIGlmKG5leHROb3RlICE9PSB1bmRlZmluZWQgJiYgdXRpbHMuZmxpcENvaW4oMC41NSkgKSB7IC8vIFNvbWV0aW1lcyBwcm9iYWJsaXRpZXMgYXJlIHplcm8sIHNvIHdlJ2xsIGdldCBhbiB1bmRlZmluZWQgbmV4dCBzdGF0ZVxuICAgICAgICBjb25zb2xlLmxvZygncGxheWluZyBub3RlJywgbmV4dE5vdGUpO1xuICAgICAgICB0aGlzLmNvbmZpZy5tZWxvZHlPc2NpbGxhdG9yc1tpICUgdGhpcy5jb25maWcubWVsb2R5T3NjaWxsYXRvcnMubGVuZ3RoXS5wbGF5KHtcbiAgICAgICAgICBmcmVxOiBuZXh0Tm90ZS9vY3RhdmUsXG4gICAgICAgICAgdGltZTogMSArIChNYXRoLnJhbmRvbSgpICogNiksXG4gICAgICAgICAgcGFuOiAwLFxuICAgICAgICAgIHZvbDogMC4xNVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGkrKztcblxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZihnZW5lcmF0aW9uID09PSB0aGlzLmN1cnJlbnRHZW5lcmF0aW9uICYmIHRoaXMuY3VycmVudEdlbmVyYXRpb24gPD0gdGhpcy5jb25maWcubWF4R2VuZXJhdGlvbnMpIHtcbiAgICAgICAgICBwbGF5TmV4dE5vdGUoZ2VuZXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0sICgoTWF0aC5yYW5kb20oKSAqIDIpICsgMC41KSAqIDEwMDApO1xuICAgIH1cblxuICAgIHBsYXlOZXh0Tm90ZShnZW5lcmF0aW9uKTtcblxuICB9XG5cbiAgcHJpdmF0ZSBlbmRPZlNjZW5lKCkge1xuICAgIGNvbnN0IG9uRmluaXNoQ2FsbGJhY2sgPSB0aGlzLmNvbmZpZy5vbkZpbmlzaDtcblxuICAgIHRoaXMuY29uZmlnLmNob3JkT3NjaWxsYXRvcnMubWFwKCBzeW50aCA9PiBzeW50aC5zdG9wKDEpICk7XG5cbiAgICB3aW5kb3cuc2V0VGltZW91dChvbkZpbmlzaENhbGxiYWNrLCAxMDAwKTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2NlbmUudHMiLCIvKlxuICogQmFzaWMgUGF0dGVybnMgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5jb25zdCBNYXJrb3YgPSByZXF1aXJlKFwibWFya292blwiKS5kZWZhdWx0O1xuaW1wb3J0IHsgR2VuZXRpYyB9IGZyb20gXCIuL0dlbmV0aWNcIjtcblxuXG5leHBvcnQgY29uc3QgUGF0dGVybiA9IChwYXR0ZXJuKSA9PiBbKCkgPT4gcGF0dGVybi5uZXh0KCkudmFsdWVdO1xuXG5leHBvcnQgY29uc3QgUHNlcSA9IGZ1bmN0aW9uKiBQc2VxKHZhbHVlczogQXJyYXk8YW55PiwgcmVwZXRpdGlvbnM6IG51bWJlcil7XG4gIHZhciBpbmRleDogbnVtYmVyID0gMDtcbiAgdmFyIHJlc3VsdCA9ICgpOiBhbnkgPT4gdmFsdWVzW2luZGV4KysgJSB2YWx1ZXMubGVuZ3RoXTtcblxuICBpZihyZXBldGl0aW9ucyA9PSB1bmRlZmluZWQpIHtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB5aWVsZCByZXN1bHQoKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgZm9yKHZhciBpPTA7IGk8cmVwZXRpdGlvbnM7IGkrKykge1xuICAgICAgeWllbGQgcmVzdWx0KCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgUHJhbmQgPSBmdW5jdGlvbiogUHJhbmQodmFsdWVzOiBBcnJheTxhbnk+LCByZXBldGl0aW9uczogbnVtYmVyKXtcblxuICB2YXIgcmVzdWx0ID0gKCk6IGFueSA9PiB2YWx1ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsdWVzLmxlbmd0aCldO1xuXG4gIGlmKHJlcGV0aXRpb25zID09IHVuZGVmaW5lZCkge1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHlpZWxkIHJlc3VsdCgpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBmb3IodmFyIGk9MDsgaTxyZXBldGl0aW9uczsgaSsrKSB7XG4gICAgICB5aWVsZCByZXN1bHQoKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBQbWFya292ID0gZnVuY3Rpb24gUG1hcmtvdihzZWVkOiBhbnlbXSwgb3JkZXI6IG51bWJlciwgaW5pdGlhbFN0YXRlOiBhbnlbXSkge1xuICBjb25zdCBtYXJrb3ZDaGFpbiA9IG5ldyBNYXJrb3Yoc2VlZCwgb3JkZXIpO1xuXG4gIHJldHVybiBtYXJrb3ZDaGFpbi5hc1BhdHRlcm4oaW5pdGlhbFN0YXRlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBQZ2VuZXRpYyA9IGZ1bmN0aW9uKiBQZ2VuZXRpYyhpbnB1dFBvcHVsYXRpb246IG51bWJlcltdW10sIGdvYWw6IG51bWJlcltdKSB7XG4gIGxldCBnZW5ldGljOiBHZW5ldGljID0gbmV3IEdlbmV0aWMoaW5wdXRQb3B1bGF0aW9uLCBnb2FsKTtcblxuICBsZXQgbGFzdFN0YXRlOiBudW1iZXJbXSA9IGdvYWw7XG5cbiAgd2hpbGUodHJ1ZSkge1xuICAgIGxldCBuZXh0U3RhdGU6IGFueSA9IGdlbmV0aWMuZ2V0TmV4dFN0YXRlKGxhc3RTdGF0ZSk7XG5cbiAgICBsYXN0U3RhdGUgPSBbbGFzdFN0YXRlW2xhc3RTdGF0ZS5sZW5ndGgtMV0sIG5leHRTdGF0ZV07XG5cbiAgICB5aWVsZCBuZXh0U3RhdGU7XG4gIH1cbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYXR0ZXJucy50cyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiTWFya292TlwiLFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuTWFya292Tj1lKCk6dC5NYXJrb3ZOPWUoKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT10LG4uYz1lLG4uZD1mdW5jdGlvbih0LGUscil7bi5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIG8gaW4gdCluLmQocixvLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG4uZChlLFwiYVwiLGUpLGV9LG4ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbi5wPVwiXCIsbihuLnM9MCl9KFtmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKGUpO2NvbnN0IHI9dD0+e2xldCBlPXQucmVkdWNlKCh0LGUpPT50K2UpLG49TWF0aC5yYW5kb20oKSplLHI9MDtmb3IobGV0IGU9MDtlPHQubGVuZ3RoO2UrKylpZihuPD0ocj0rKHIrPXRbZV0pLnRvRml4ZWQoMikpKXJldHVybiBlfSxvPXQ9PntsZXQgZT10LnJlZHVjZSgodCxlKT0+dCtlKTtyZXR1cm4gZT4wP3QubWFwKHQ9PnQvZSk6dC5tYXAoKCk9PjApfSxpPSh0LGUpPT57dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModCkscj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKTtpZihuLmxlbmd0aCE9ci5sZW5ndGgpcmV0dXJuITE7Zm9yKHZhciBvPTA7bzxuLmxlbmd0aDtvKyspe3ZhciBpPW5bb107aWYodFtpXSE9PWVbaV0pcmV0dXJuITF9cmV0dXJuITB9LHM9KHQsZSk9Pih0JWUrZSklZTtuLmQoZSxcImdldEFsbFRyYW5zaXRpb25zXCIsZnVuY3Rpb24oKXtyZXR1cm4gYX0pLG4uZChlLFwiTWFya292TlwiLGZ1bmN0aW9uKCl7cmV0dXJuIGx9KTtjb25zdCBhPSh0LGUpPT50LnJlZHVjZSgobixyLG8pPT57Y29uc3QgaT1bXTtmb3IobGV0IG49ZTtuPj0wO24tLSlpLnB1c2godFtzKG8tbix0Lmxlbmd0aCldKTtyZXR1cm4gbi5wdXNoKGkpLG59LFtdKSx1PSh0LGUpPT57Y29uc3Qgbj1bLi4udF07cmV0dXJuIG4uc2hpZnQoKSxuLnB1c2goZSksbn07Y2xhc3MgbHtjb25zdHJ1Y3Rvcih0LGUpe3RoaXMuZGljdGlvbmFyeT1bXSx0aGlzLmNvbWJpbmF0aW9ucz1bXSx0aGlzLmxhc3RTdGF0ZT1bXTtmb3IobGV0IG49MDtuPGU7bisrKXRoaXMubGFzdFN0YXRlLnB1c2godFtuXSk7dGhpcy50cmFuc2l0aW9uTWF0cml4PXRoaXMuY3JlYXRlVHJhbnNpdGlvbk1hdHJpeCh0LGUpfWNyZWF0ZVRyYW5zaXRpb25NYXRyaXgodCxlKXt0aGlzLmRpY3Rpb25hcnk9QXJyYXkuZnJvbShuZXcgU2V0KHQpKSx0aGlzLmNvbWJpbmF0aW9ucz1hKHQsZSk7bGV0IG49W107Zm9yKGxldCB0PTA7dDx0aGlzLmNvbWJpbmF0aW9ucy5sZW5ndGg7dCsrKXtsZXQgdD1bXTtmb3IobGV0IGU9MDtlPHRoaXMuZGljdGlvbmFyeS5sZW5ndGg7ZSsrKXQucHVzaCgwKTtuLnB1c2godCl9Zm9yKGxldCByPTA7cjx0Lmxlbmd0aDtyKyspe2xldCBvPVtdO2ZvcihsZXQgbj1lO24+PTA7bi0tKW8ucHVzaCh0W3Moci1uLHQubGVuZ3RoKV0pO2xldCBhPXRoaXMuY29tYmluYXRpb25zLmZpbmRJbmRleCh0PT5pKG8sdCkpLHU9dFsocisxKSV0Lmxlbmd0aF0sbD10aGlzLmRpY3Rpb25hcnkuaW5kZXhPZih1KTtuW2FdW2xdKyt9cmV0dXJuIG49bi5tYXAobyl9Z2V0TmV4dFN0YXRlKHQpe2NvbnN0IGU9dGhpcy50cmFuc2l0aW9uTWF0cml4W3RoaXMuY29tYmluYXRpb25zLmZpbmRJbmRleChlPT5pKHQsZSkpXSxuPXIoZSk7cmV0dXJuIHRoaXMuZGljdGlvbmFyeVtuXX0qYXNQYXR0ZXJuKHQpe2Zvcih0aGlzLmxhc3RTdGF0ZT10Ozspe2xldCB0PXRoaXMuZ2V0TmV4dFN0YXRlKHRoaXMubGFzdFN0YXRlKTt0aGlzLmxhc3RTdGF0ZT11KHRoaXMubGFzdFN0YXRlLHQpLHlpZWxkIHR9fX1lLmRlZmF1bHQ9bH1dKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hcmtvdm4vYnVpbGQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcblxuXG5jbGFzcyBHZW5ldGljIHtcbiAgcHVibGljIHBvcHVsYXRpb246IG51bWJlcltdW107XG4gIHByaXZhdGUgZ29hbDogbnVtYmVyW107XG4gIHByaXZhdGUgc2NvcmVzOiBudW1iZXJbXTtcbiAgcHJpdmF0ZSBsYXN0U3RhdGU6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKGlucHV0UG9wdWxhdGlvbjogbnVtYmVyW11bXSwgZ29hbDogbnVtYmVyW10pIHtcbiAgICB0aGlzLnBvcHVsYXRpb24gPSBpbnB1dFBvcHVsYXRpb247XG4gICAgdGhpcy5zY29yZXMgPSBBcnJheShpbnB1dFBvcHVsYXRpb24ubGVuZ3RoKS5maWxsKDApO1xuICAgIHRoaXMuZ29hbCA9IGdvYWw7XG4gICAgdGhpcy5sYXN0U3RhdGUgPSBpbnB1dFBvcHVsYXRpb25bTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIChpbnB1dFBvcHVsYXRpb24ubGVuZ3RoLTEpKSBdO1xuICB9XG5cblxuICAvLyBBY2N1bXVsYXRlIGFuZCByZXR1cm4gdGhlIHNjb3JlIGZvciBhIHNpbmdsZSBjb2xsZWN0aW9uXG4gIGdldFRvdGFsRml0bmVzc1JhdGluZyhjb2xsZWN0aW9uOiBudW1iZXJbXSwgZ29hbDogbnVtYmVyW10pIHtcbiAgICBsZXQgc2NvcmU6IG51bWJlciA9IDA7IC8vIGxvd2VyIGlzIGJldHRlclxuICAgIGxldCBub3JtYWxpemVkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24ubWFwKChudW06IG51bWJlcikgPT4gbnVtIC0gTWF0aC5taW4uYXBwbHkobnVsbCwgY29sbGVjdGlvbikgKTtcblxuICAgIGZvcihsZXQgaT1ub3JtYWxpemVkQ29sbGVjdGlvbi5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHNjb3JlICs9IHRoaXMuZ2V0RGlzdGFuY2Uobm9ybWFsaXplZENvbGxlY3Rpb25baV0sIGdvYWxbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiBzY29yZTtcbiAgfVxuXG4gIC8vIFRPRE86IHRlc3RcbiAgLy8gVXNpbmcgdGhlIGdpdmVuIHNjb3JlcywgZ2V0IHRoZSBtb3N0IFwiZml0XCIgdHdvIGdlbmVyYXRpb25zIG91dCBvZiB0aGUgcG9wdWxhdGlvblxuICBnZXRUb3BUd29HZW5lcmF0aW9ucyhzY29yZXM6IG51bWJlcltdLCBwb3B1bGF0aW9uOiBudW1iZXJbXVtdKTogbnVtYmVyW11bXSB7XG5cbiAgICBsZXQgaW5kZXhPZkhpZ2hlc3RTY29yZSA9IDA7XG5cbiAgICBmb3IobGV0IGk9c2NvcmVzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgIGlmKHNjb3Jlc1tpbmRleE9mSGlnaGVzdFNjb3JlXSA8IHNjb3Jlc1tpXSkge1xuICAgICAgICBpbmRleE9mSGlnaGVzdFNjb3JlID0gaTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlcmUgYXJlIHR3byBvZiB0aGUgc2FtZSBzY29yZXMsIGNob29zZSBvbmUgcmFuZG9tbHlcbiAgICAgIGlmKHNjb3Jlc1tpbmRleE9mSGlnaGVzdFNjb3JlXSA9PT0gc2NvcmVzW2ldKSB7XG4gICAgICAgIGNvbnN0IGNvaW5GbGlwID0gTWF0aC5yYW5kb20oKTtcblxuICAgICAgICBpbmRleE9mSGlnaGVzdFNjb3JlID0gKGNvaW5GbGlwID4gMC41KSA/IGluZGV4T2ZIaWdoZXN0U2NvcmUgOiBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBpbmRleE9mTmV4dEhpZ2hlc3RTY29yZTogbnVtYmVyID0gMDtcbiAgICBjb25zdCB0b3BHZW5lcmF0aW9uU2NvcmU6IG51bWJlciA9IHNjb3Jlc1tpbmRleE9mSGlnaGVzdFNjb3JlXTtcblxuXG4gICAgY29uc3QgY29pbkZsaXBGb3JNdXRhdGUgPSB1dGlscy5mbGlwQ29pbigwLjI1KTtcblxuICAgIGlmKGNvaW5GbGlwRm9yTXV0YXRlKSB7XG4gICAgICBpbmRleE9mTmV4dEhpZ2hlc3RTY29yZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNjb3Jlcy5sZW5ndGgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvcihsZXQgaT1zY29yZXMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAvLyBJZ25vcmUgYW55IHNjb3JlcyB0aGF0IGFyZSBhbHJlYWR5IHRoZSBoaWdoZXN0IHNjb3JlXG4gICAgICAgIGlmKHNjb3Jlc1tpXSAhPT0gdG9wR2VuZXJhdGlvblNjb3JlKSB7XG5cbiAgICAgICAgICBpZihzY29yZXNbaW5kZXhPZk5leHRIaWdoZXN0U2NvcmVdIDwgc2NvcmVzW2ldKSB7XG4gICAgICAgICAgICBpbmRleE9mTmV4dEhpZ2hlc3RTY29yZSA9IGk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIHR3byBvZiB0aGUgc2FtZSBzY29yZXMsIGNob29zZSBvbmUgcmFuZG9tbHlcbiAgICAgICAgICBpZihzY29yZXNbaW5kZXhPZk5leHRIaWdoZXN0U2NvcmVdID09PSBzY29yZXNbaV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvaW5GbGlwID0gTWF0aC5yYW5kb20oKTtcblxuICAgICAgICAgICAgaW5kZXhPZk5leHRIaWdoZXN0U2NvcmUgPSAoY29pbkZsaXAgPiAwLjUpID8gaW5kZXhPZk5leHRIaWdoZXN0U2NvcmUgOiBpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbcG9wdWxhdGlvbltpbmRleE9mSGlnaGVzdFNjb3JlXSwgcG9wdWxhdGlvbltpbmRleE9mTmV4dEhpZ2hlc3RTY29yZV0gXTtcbiAgfVxuXG4gIC8vIFRPRE86IE1ha2UgbW9yZSB0aGFuIG9uZSB0eXBlIG9mIG1hdGluZ1xuICAvLyBUYWtlIGluIHR3byBhcnJheXMgKHBhcmVudHMpIGFuZCBtYXRlIHRoZW0gaW4gYSBudW1iZXIgb2YgZGlmZmVyZW50IHdheXMgdG8gcHJvZHVjZSBtdWx0aXBsZSBvZmZzcHJpbmdcbiAgbWF0ZUdlbmVyYXRpb25zKHBhcmVudHM6IG51bWJlcltdW10pOiBudW1iZXJbXVtdIHtcblxuICAgIGNvbnN0IHNwbGljZWRPZmZzcHJpbmcgPSB0aGlzLmdldFNwbGljZWRPZmZzcHJpbmcocGFyZW50c1swXSwgcGFyZW50c1sxXSk7XG4gICAgY29uc3QgaW50ZXJsYWNlZE9mZnNwcmluZyA9IHRoaXMuZ2V0SW50ZXJsYWNlZE9mZnNwcmluZyhwYXJlbnRzWzBdLCBwYXJlbnRzWzFdKTtcblxuICAgIC8vIEdlbmVyYXRlIG1vcmUgdGhhbiBvbmUgb2Zmc3ByaW5nXG4gICAgcmV0dXJuIFtzcGxpY2VkT2Zmc3ByaW5nLCBpbnRlcmxhY2VkT2Zmc3ByaW5nXTtcbiAgfVxuXG4gIC8vIFNwbGljZSB0d28gZXF1YWwtbGVuZ3RoIGFycmF5cyB0b2dldGhlciBhbmQgcmV0dXJuIHRoZSByZXN1bHRcbiAgZ2V0SW50ZXJsYWNlZE9mZnNwcmluZyhwYXJlbnRPbmU6IG51bWJlcltdLCBwYXJlbnRUd286IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IGludGVybGFjZWRPZmZzcHJpbmcgPSBBcnJheShwYXJlbnRPbmUubGVuZ3RoKTtcblxuICAgIGZvcihsZXQgaT1pbnRlcmxhY2VkT2Zmc3ByaW5nLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgIGludGVybGFjZWRPZmZzcHJpbmdbaV0gPSAoaSUyKSA9PT0gMCA/IHBhcmVudE9uZVtpXSA6IHBhcmVudFR3b1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJsYWNlZE9mZnNwcmluZztcbiAgfVxuXG4gIGdldFNwbGljZWRPZmZzcHJpbmcocGFyZW50T25lOiBudW1iZXJbXSwgcGFyZW50VHdvOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICBjb25zdCBjb2luRmxpcDogbnVtYmVyID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAwO1xuICAgIGNvbnN0IHBhcmVudHMgPSBjb2luRmxpcCA9PSAwID8gW3BhcmVudE9uZSwgcGFyZW50VHdvXSA6IFtwYXJlbnRUd28sIHBhcmVudE9uZV07XG4gICAgY29uc3Qgc3BsaXRQb2ludDogbnVtYmVyID0gTWF0aC5mbG9vcihwYXJlbnRPbmUubGVuZ3RoIC8gMik7XG5cbiAgICBjb25zdCBzcGxpY2VkT2Zmc3ByaW5nID0gWy4uLihwYXJlbnRzWzBdLnNsaWNlKDAsIHNwbGl0UG9pbnQpKSwgLi4uKHBhcmVudHNbMV0uc2xpY2Uoc3BsaXRQb2ludC0xLCBwYXJlbnRzWzFdLmxlbmd0aC0xKSkgXTtcblxuICAgIHJldHVybiBzcGxpY2VkT2Zmc3ByaW5nO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIG51bWVyaWNhbCBkaXN0YW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIGdvYWxcbiAgZ2V0RGlzdGFuY2UoaW5wdXQ6IG51bWJlciwgZ29hbDogbnVtYmVyKSB7XG4gICAgbGV0IHJhdGluZzogbnVtYmVyID0gZ29hbCAtIGlucHV0O1xuXG4gICAgcmV0dXJuIHJhdGluZztcbiAgfVxuXG5cblxuXG5cbiAgLy8gQ2FsY3VsYXRlIGFuZCByZXR1cm4gdGhlIHNjb3JlcyBmb3IgYWxsIGN1cnJlbnQgY29sbGVjdGlvbnNcbiAgZ2V0UG9wdWxhdGlvblNjb3Jlcyhwb3B1bGF0aW9uOiBudW1iZXJbXVtdLCBnb2FsOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICBsZXQgc2NvcmVzID0gQXJyYXkocG9wdWxhdGlvbi5sZW5ndGgpLmZpbGwoMCk7XG5cbiAgICBmb3IobGV0IGk9KHBvcHVsYXRpb24ubGVuZ3RoLTEpOyBpPj0wOyBpLS0pIHtcbiAgICAgIHNjb3Jlc1tpXSA9IHRoaXMuZ2V0VG90YWxGaXRuZXNzUmF0aW5nKHBvcHVsYXRpb25baV0sIGdvYWwpO1xuICAgIH1cblxuICAgIHJldHVybiBzY29yZXM7XG4gIH1cblxuICBnZXROZXh0R2VuZXJhdGlvbihwb3B1bGF0aW9uOiBudW1iZXJbXVtdLCBnb2FsOiBudW1iZXJbXSkge1xuICAgIGNvbnN0IHBvcHVsYXRpb25TY29yZXM6bnVtYmVyW10gPSB0aGlzLmdldFBvcHVsYXRpb25TY29yZXMocG9wdWxhdGlvbiwgZ29hbCk7XG4gICAgY29uc3QgdG9wVHdvR2VuZXJhdGlvbnM6bnVtYmVyW11bXSA9IHRoaXMuZ2V0VG9wVHdvR2VuZXJhdGlvbnMocG9wdWxhdGlvblNjb3JlcywgcG9wdWxhdGlvbik7XG4gICAgY29uc3QgbmV3R2VuZXJhdGlvbnM6bnVtYmVyW11bXSA9IHRoaXMubWF0ZUdlbmVyYXRpb25zKHRvcFR3b0dlbmVyYXRpb25zKTtcblxuICAgIGZvcihsZXQgaT0wOyBpIDwgKG5ld0dlbmVyYXRpb25zLmxlbmd0aC0xKTsgaSsrKSB7XG4gICAgICB0aGlzLnBvcHVsYXRpb24uc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLnBvcHVsYXRpb24ubGVuZ3RoLTEpKSwgMSk7XG4gICAgfVxuICAgIHRoaXMucG9wdWxhdGlvbiA9IFsuLi50aGlzLnBvcHVsYXRpb24sIC4uLm5ld0dlbmVyYXRpb25zXTtcbiAgICAvLyBGb3Igbm93IHJhbmRvbWx5IHNlbGVjdCBvbmUgb2YgdGhlIGJlc3QgZ2VuZXJhdGlvbnNcbiAgICBjb25zdCBiZXN0Rml0R2VuZXJhdGlvbiA9IG5ld0dlbmVyYXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChuZXdHZW5lcmF0aW9ucy5sZW5ndGggKiAwLjk5OSkpXTtcblxuICAgIHJldHVybiBiZXN0Rml0R2VuZXJhdGlvbjtcbiAgfVxuXG4gIGdldE5leHRTdGF0ZShzdGF0ZTogbnVtYmVyW10pIHtcbiAgICAvLyBUT0RPOiBVc2Ugc3RhdGUgdG8gYWRkIGludG8gdGhlIHBvcHVsYXRpb25cblxuICAgIGNvbnN0IG5leHRTdGF0ZTogbnVtYmVyW10gPSB0aGlzLmdldE5leHRHZW5lcmF0aW9uKHRoaXMucG9wdWxhdGlvbiwgdGhpcy5nb2FsKTtcblxuICAgIHJldHVybiBuZXh0U3RhdGU7XG4gIH1cblxuICBhc1BhdHRlcm4oKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24qIGFzUGF0dGVybihpbml0aWFsU3RhdGU6IG51bWJlcltdKSB7XG4gICAgICBzZWxmLmxhc3RTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSBzZWxmLmdldE5leHRTdGF0ZShzZWxmLmxhc3RTdGF0ZSk7XG4gICAgICAgIHNlbGYubGFzdFN0YXRlID0gbmV4dFN0YXRlO1xuXG4gICAgICAgIHlpZWxkIG5leHRTdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbn07XG5cbmV4cG9ydCB7IEdlbmV0aWMgfTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0dlbmV0aWMudHMiLCIvLyBCYXNpYyBjdXJ2ZSBmcm9tIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XYXZlU2hhcGVyTm9kZVxuY29uc3QgbWFrZURpc3RvcnRpb25DdXJ2ZSA9IGFtb3VudCA9PiB7XG4gIHZhciBrID0gdHlwZW9mIGFtb3VudCA9PT0gJ251bWJlcicgPyBhbW91bnQgOiA1MCxcbiAgICBuX3NhbXBsZXMgPSA0NDEwMCxcbiAgICBjdXJ2ZSA9IG5ldyBGbG9hdDMyQXJyYXkobl9zYW1wbGVzKSxcbiAgICBkZWcgPSBNYXRoLlBJIC8gMTgwLFxuICAgIGkgPSAwLFxuICAgIHg7XG4gIGZvciAoIDsgaSA8IG5fc2FtcGxlczsgKytpICkge1xuICAgIHggPSBpICogMiAvIG5fc2FtcGxlcyAtIDE7XG4gICAgY3VydmVbaV0gPSAoIDMgKyBrICkgKiB4ICogMjAgKiBkZWcgLyAoIE1hdGguUEkgKyBrICogTWF0aC5hYnMoeCkgKTtcbiAgfVxuICByZXR1cm4gY3VydmU7XG59O1xuXG5cbmltcG9ydCB7SVNvdW5kUGxheWVyLCBJUGxheU9wdGlvbnN9IGZyb20gJy4vU291bmRQbGF5ZXInO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgSVN5bnRoT3B0aW9ucyB7XG4gIHdhdmVmb3JtVHlwZT86IHN0cmluZyxcbn1cblxuY2xhc3MgU3ludGggaW1wbGVtZW50cyBJU291bmRQbGF5ZXIge1xuICBvc2NpbGxhdG9yOiBhbnk7XG4gIGNvbnRleHQ6IEF1ZGlvQ29udGV4dDtcbiAgZ2Fpbk5vZGU7XG4gIHdhdmVTaGFwZXI7XG4gIHBhbm5lcjogU3RlcmVvUGFubmVyTm9kZTtcbiAgY29uZmlnOiBJU3ludGhPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNvbmZpZz86IElTeW50aE9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb25maWcgPSBjb25maWcgPyBjb25maWcgOiB7fTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLm9zY2lsbGF0b3IgPSB0aGlzLmNvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgIC8vdGhpcy5jb25maWcud2F2ZWZvcm1UeXBlICYmICh0aGlzLm9zY2lsbGF0b3IudHlwZSA9IHRoaXMuY29uZmlnLndhdmVmb3JtVHlwZSk7XG5cbiAgICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLnBhbm5lciA9IHRoaXMuY29udGV4dC5jcmVhdGVTdGVyZW9QYW5uZXIoKTtcbiAgICB0aGlzLndhdmVTaGFwZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlV2F2ZVNoYXBlcigpO1xuICAgIHRoaXMud2F2ZVNoYXBlci5jdXJ2ZSA9IG1ha2VEaXN0b3J0aW9uQ3VydmUoODAwKTtcbiAgICB0aGlzLndhdmVTaGFwZXIub3ZlcnNhbXBsZSA9ICc0eCc7XG5cbiAgICB0aGlzLm9zY2lsbGF0b3IuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcbiAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5wYW5uZXIpO1xuICAgIHRoaXMucGFubmVyLmNvbm5lY3QodGhpcy53YXZlU2hhcGVyKTtcbiAgICAvL3RoaXMucGFubmVyLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLndhdmVTaGFwZXIuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgdGhpcy5vc2NpbGxhdG9yLnR5cGUgPSB0aGlzLmNvbmZpZy53YXZlZm9ybVR5cGUgPyB0aGlzLmNvbmZpZy53YXZlZm9ybVR5cGUgOiB1dGlscy5mbGlwQ29pbigpID8gJ3RyaWFuZ2xlJyA6ICdzaW5lJztcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwO1xuICB9XG5cbiAgcHVibGljIHBsYXkob3B0OiBJUGxheU9wdGlvbnMpIHtcbiAgICBjb25zdCB7ZnJlcT0yMjAsIHRpbWU9MSwgcGFuPTAsIHZvbD0xfSA9IG9wdDtcbiAgICB0aGlzLmluaXQoKTtcblxuICAgIGxldCBnYWluID0gMC4wMTtcbiAgICB0aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gZnJlcTtcblxuICAgIG9wdC5kaXN0b3J0aW9uICYmICh0aGlzLndhdmVTaGFwZXIuY3VydmUgPSBtYWtlRGlzdG9ydGlvbkN1cnZlKG9wdC5kaXN0b3J0aW9uKSApO1xuICAgIC8vIHNvbWUgc3R1cGlkIGJhc2ljIHB5c2Nob2Fjb3VzdGljIHNoYXBpbmdcbiAgICBpZihmcmVxID4gMjAwKSBnYWluID0gZ2FpbiowLjEyO1xuICAgIHRoaXMucGFubmVyLnBhbi52YWx1ZSA9IHBhbjtcbiAgICB0aGlzLm9zY2lsbGF0b3Iuc3RhcnQoMCk7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnNldFRhcmdldEF0VGltZSh2b2wgKiBnYWluICogKDAuNTUgLSAoTWF0aC5yYW5kb20oKSAqIDAuMDEpKSwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lLCB0aW1lICogMC44NSApO1xuXG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLnN0b3AodGltZSAqIDAuMjUpO1xuICAgIH0sICh0aW1lIC0gKHRpbWUqMC4yNSkpICogMTAwMCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzdG9wKHRpbWUpIHtcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4uc2V0VGFyZ2V0QXRUaW1lKDAsIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSwgdGltZSowLjkgKTtcbiAgICB0aGlzLm9zY2lsbGF0b3Iuc3RvcCh0aGlzLmNvbnRleHQuY3VycmVudFRpbWUgKyAoIHRpbWUgKiA0ICkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTeW50aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TeW50aC50cyIsIi8vIEJhc2ljIGN1cnZlIGZyb20gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dhdmVTaGFwZXJOb2RlXG5jb25zdCBtYWtlRGlzdG9ydGlvbkN1cnZlID0gYW1vdW50ID0+IHtcbiAgdmFyIGsgPSB0eXBlb2YgYW1vdW50ID09PSAnbnVtYmVyJyA/IGFtb3VudCA6IDUwLFxuICAgIG5fc2FtcGxlcyA9IDQ0MTAwLFxuICAgIGN1cnZlID0gbmV3IEZsb2F0MzJBcnJheShuX3NhbXBsZXMpLFxuICAgIGRlZyA9IE1hdGguUEkgLyAxODAsXG4gICAgaSA9IDAsXG4gICAgeDtcbiAgZm9yICggOyBpIDwgbl9zYW1wbGVzOyArK2kgKSB7XG4gICAgeCA9IGkgKiAyIC8gbl9zYW1wbGVzIC0gMTtcbiAgICBjdXJ2ZVtpXSA9ICggMyArIGsgKSAqIHggKiAyMCAqIGRlZyAvICggTWF0aC5QSSArIGsgKiBNYXRoLmFicyh4KSApO1xuICB9XG4gIHJldHVybiBjdXJ2ZTtcbn07XG5cblxuaW1wb3J0IHtJU291bmRQbGF5ZXIsIElQbGF5T3B0aW9uc30gZnJvbSAnLi9Tb3VuZFBsYXllcic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmludGVyZmFjZSBJU3ludGhPcHRpb25zIHtcbiAgd2F2ZWZvcm1UeXBlPzogc3RyaW5nLFxufVxuXG5jb25zdCBidWZmZXJTaXplID0gNDA5NjtcbmNvbnN0IGNyZWF0ZUJyb3duTm9pc2UgPSBhdWRpb0NvbnRleHQgPT4ge1xuICAgIHZhciBsYXN0T3V0ID0gMC4wO1xuICAgIHZhciBub2RlID0gYXVkaW9Db250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihidWZmZXJTaXplLCAxLCAxKTtcbiAgICBub2RlLm9uYXVkaW9wcm9jZXNzID0gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gZS5vdXRwdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnVmZmVyU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgd2hpdGUgPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7XG4gICAgICAgICAgICBvdXRwdXRbaV0gPSAobGFzdE91dCArICgwLjAyICogd2hpdGUpKSAvIDEuMDI7XG4gICAgICAgICAgICBsYXN0T3V0ID0gb3V0cHV0W2ldO1xuICAgICAgICAgICAgb3V0cHV0W2ldICo9IDMuNTsgLy8gKHJvdWdobHkpIGNvbXBlbnNhdGUgZm9yIGdhaW5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbn07XG5cbmNsYXNzIE5vaXNlIGltcGxlbWVudHMgSVNvdW5kUGxheWVyIHtcbiAgb3NjaWxsYXRvcjogYW55O1xuICBjb250ZXh0OiBBdWRpb0NvbnRleHQ7XG4gIGdhaW5Ob2RlO1xuICB3YXZlU2hhcGVyO1xuICBwYW5uZXI6IFN0ZXJlb1Bhbm5lck5vZGU7XG4gIGZpbHRlcjtcbiAgZmlsdGVyMjtcbiAgY29uZmlnOiBJU3ludGhPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNvbmZpZz86IElTeW50aE9wdGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb25maWcgPSBjb25maWcgPyBjb25maWcgOiB7fTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLm9zY2lsbGF0b3IgPSBjcmVhdGVCcm93bk5vaXNlKHRoaXMuY29udGV4dCk7XG4gICAgLy90aGlzLmNvbmZpZy53YXZlZm9ybVR5cGUgJiYgKHRoaXMub3NjaWxsYXRvci50eXBlID0gdGhpcy5jb25maWcud2F2ZWZvcm1UeXBlKTtcblxuICAgIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMucGFubmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVN0ZXJlb1Bhbm5lcigpO1xuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgIHRoaXMuZmlsdGVyLnR5cGUgPSAncGVha2luZyc7XG4gICAgdGhpcy5maWx0ZXIyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgIHRoaXMuZmlsdGVyMi50eXBlID0gJ2JhbmRwYXNzJztcblxuICAgIHRoaXMud2F2ZVNoYXBlciA9IHRoaXMuY29udGV4dC5jcmVhdGVXYXZlU2hhcGVyKCk7XG4gICAgdGhpcy53YXZlU2hhcGVyLmN1cnZlID0gbWFrZURpc3RvcnRpb25DdXJ2ZSg4MCk7XG4gICAgdGhpcy53YXZlU2hhcGVyLm92ZXJzYW1wbGUgPSAnNHgnO1xuXG4gICAgdGhpcy5vc2NpbGxhdG9yLmNvbm5lY3QodGhpcy53YXZlU2hhcGVyKTtcbiAgICB0aGlzLndhdmVTaGFwZXIuY29ubmVjdCh0aGlzLmZpbHRlcik7XG4gICAgdGhpcy5maWx0ZXIuY29ubmVjdCh0aGlzLmZpbHRlcjIpO1xuICAgIHRoaXMuZmlsdGVyMi5jb25uZWN0KHRoaXMucGFubmVyKTtcbiAgICB0aGlzLnBhbm5lci5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO1xuICAgIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgLy90aGlzLm9zY2lsbGF0b3IudHlwZSA9IHRoaXMuY29uZmlnLndhdmVmb3JtVHlwZSA/IHRoaXMuY29uZmlnLndhdmVmb3JtVHlwZSA6IHV0aWxzLmZsaXBDb2luKCkgPyAndHJpYW5nbGUnIDogJ3NpbmUnO1xuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDA7XG4gIH1cblxuICBwdWJsaWMgcGxheShvcHQ6IElQbGF5T3B0aW9ucykge1xuICAgIGNvbnN0IHtmcmVxPTIyMCwgdGltZT0xLCBwYW49MCwgdm9sPTF9ID0gb3B0O1xuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgbGV0IGdhaW4gPSAxLjA7XG4gICAgLy90aGlzLm9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gZnJlcTtcbiAgICB0aGlzLmZpbHRlci5mcmVxdWVuY3kudmFsdWUgPSBmcmVxO1xuICAgIHRoaXMuZmlsdGVyLlEudmFsdWUgPSA1MC45MDE7XG4gICAgdGhpcy5maWx0ZXIuZ2Fpbi52YWx1ZSA9IDIwO1xuXG4gICAgdGhpcy5maWx0ZXIyLmZyZXF1ZW5jeS52YWx1ZSA9IGZyZXE7XG4gICAgdGhpcy5maWx0ZXIyLlEudmFsdWUgPSAxNS45MDE7XG4gICAgdGhpcy5maWx0ZXIyLmdhaW4udmFsdWUgPSA2MDtcblxuICAgIG9wdC5kaXN0b3J0aW9uICYmICh0aGlzLndhdmVTaGFwZXIuY3VydmUgPSBtYWtlRGlzdG9ydGlvbkN1cnZlKG9wdC5kaXN0b3J0aW9uKSApO1xuICAgIC8vIHNvbWUgc3R1cGlkIGJhc2ljIHB5c2Nob2Fjb3VzdGljIHNoYXBpbmdcbiAgICBpZihmcmVxID4gMjAwKSBnYWluID0gZ2FpbiowLjEyO1xuICAgIHRoaXMucGFubmVyLnBhbi52YWx1ZSA9IHBhbjtcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjAwMTtcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSh2b2wgKiBnYWluLCB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUgKyB0aW1lKTtcblxuXG4gICAgc2V0VGltZW91dCh0aGlzLnN0b3AuYmluZCh0aGlzKSwgKHRpbWUrMSkgKiAxMDAwKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHN0b3AoKSB7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnNldFRhcmdldEF0VGltZSgwLCB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUsIDAuMDEgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbmV4cG9ydCB7IE5vaXNlIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTm9pc2UudHMiLCJpbXBvcnQge0hvd2wsIEhvd2xlcn0gZnJvbSAnaG93bGVyJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7SVNvdW5kUGxheWVyLCBJUGxheU9wdGlvbnMsIElTYW1wbGV9IGZyb20gJy4vU291bmRQbGF5ZXInO1xuXG5pbnRlcmZhY2UgSVBsYXllciB7XG4gIHBsYXllcjogSG93bCxcbiAgYmFzZUZyZXE6IG51bWJlcixcbn1cblxuY2xhc3MgTXVsdGlTYW1wbGVyIGltcGxlbWVudHMgSVNvdW5kUGxheWVyIHtcbiAgcGxheWVyczogSVBsYXllcltdO1xuICBjb250ZXh0OiBBdWRpb0NvbnRleHQ7XG4gIGdhaW5Ob2RlO1xuICBwYW5uZXI6IFN0ZXJlb1Bhbm5lck5vZGU7XG5cbiAgY29uc3RydWN0b3IoY29udGV4dCwgb3B0OiB7IHNhbXBsZXM6IElTYW1wbGVbXSB9ICkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5wbGF5ZXJzID0gb3B0LnNhbXBsZXMubWFwKCBzYW1wbGVDb25maWcgPT4gKHtwbGF5ZXI6IG5ldyBIb3dsKHtzcmM6IHNhbXBsZUNvbmZpZy5maWxlc30pLCBiYXNlRnJlcTogc2FtcGxlQ29uZmlnLmZyZXF9KSApO1xuICB9XG5cbiAgcHVibGljIHBsYXkob3B0OiBJUGxheU9wdGlvbnMpIHtcbiAgICBjb25zdCB7ZnJlcT0yMjAsIHRpbWU9MSwgcGFuPTAsIHZvbD0xfSA9IG9wdDtcblxuICAgIGxldCBnYWluID0gMTtcbiAgICBjb25zdCBzYW1wbGVQbGF5ZXIgPSB0aGlzLmZpbmRDbG9zZXN0U2FtcGxlUGxheWVyKCBmcmVxICk7XG4gICAgY29uc3QgY3VycmVudGx5UGxheWluZ1NhbXBsZUlEID0gc2FtcGxlUGxheWVyLnBsYXllci5wbGF5KCk7XG4gICAgc2FtcGxlUGxheWVyLnBsYXllci5sb29wKCBmYWxzZSwgY3VycmVudGx5UGxheWluZ1NhbXBsZUlEICk7XG4gICAgc2FtcGxlUGxheWVyLnBsYXllci5yYXRlKCB1dGlscy5nZXRSYXRlRnJvbUZyZXF1ZW5jaWVzKCBmcmVxLCBzYW1wbGVQbGF5ZXIuYmFzZUZyZXEgKSwgY3VycmVudGx5UGxheWluZ1NhbXBsZUlEICk7XG4gICAgLy8gc29tZSBzdHVwaWQgYmFzaWMgcHlzY2hvYWNvdXN0aWMgc2hhcGluZ1xuICAgIGlmKGZyZXEgPiAyMDApIGdhaW4gPSBnYWluKjAuMjtcbiAgICBzYW1wbGVQbGF5ZXIucGxheWVyLmZhZGUoIDAsIGdhaW4gKiB2b2wsIDIwMCwgY3VycmVudGx5UGxheWluZ1NhbXBsZUlEICk7XG4gICAgc2FtcGxlUGxheWVyLnBsYXllci5zdGVyZW8oIHBhbiwgY3VycmVudGx5UGxheWluZ1NhbXBsZUlEICk7XG5cblxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2FtcGxlUGxheWVyLnBsYXllci5mYWRlKCBnYWluICogdm9sLCAwLCAyMDAsIGN1cnJlbnRseVBsYXlpbmdTYW1wbGVJRCApO1xuICAgICAgdGhpcy5zdG9wKHRpbWUsIHNhbXBsZVBsYXllciwgY3VycmVudGx5UGxheWluZ1NhbXBsZUlEICk7XG4gICAgfS5iaW5kKHRoaXMpLCAoIHRpbWUgKiAxMDAwICkgKyAyMDApOyAvLyBhZGRpbmcgYSAxMDAgbXMgYnVmZmVyIHRvIGF2b2lkIGFueSBpc3N1ZXNcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHN0b3AodGltZSwgc2FtcGxlUGxheWVyLCBjdXJyZW50bHlQbGF5aW5nU2FtcGxlSUQpIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNhbXBsZVBsYXllci5wbGF5ZXIuc3RvcCgpO1xuICAgIH0uYmluZCh0aGlzKSwgMzAwKTsgLy8gYWRkaW5nIGEgMTAwIG1zIGJ1ZmZlciB0byBhdm9pZCBhbnkgaXNzdWVzXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgZmluZENsb3Nlc3RTYW1wbGVQbGF5ZXIoIGZyZXE6bnVtYmVyICk6IElQbGF5ZXIge1xuICAgIC8vIENhbiBvbmx5IGdldCB0aGUgY2xvc2VzdCBmcmVxdWVuY3kgaW4gdGhlIHNldCBvZiBQbGF5ZXJzJyBmcmVxdWVuY2llcyBzbyBnZXQgdGhhdCBmcmVxdWVuY3ksIHRoZW4gZmlsdGVyIHRoZSBwbGF5ZXJzXG4gICAgY29uc3QgY2xvc2VzdFBsYXllckZyZXF1ZW5jeSA9IHV0aWxzLmdldENsb3Nlc3RNZW1iZXIoZnJlcSwgdGhpcy5wbGF5ZXJzLm1hcCggcGxheWVyID0+IHBsYXllci5iYXNlRnJlcSkgKTtcbiAgICByZXR1cm4gdXRpbHMuZmluZEluQ29sbGVjdGlvbiggdGhpcy5wbGF5ZXJzLCBtZW1iZXIgPT4gbWVtYmVyID09PSBjbG9zZXN0UGxheWVyRnJlcXVlbmN5ICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlTYW1wbGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL011bHRpU2FtcGxlci50cyIsIi8qIVxuICogIGhvd2xlci5qcyB2Mi4wLjlcbiAqICBob3dsZXJqcy5jb21cbiAqXG4gKiAgKGMpIDIwMTMtMjAxOCwgSmFtZXMgU2ltcHNvbiBvZiBHb2xkRmlyZSBTdHVkaW9zXG4gKiAgZ29sZGZpcmVzdHVkaW9zLmNvbVxuICpcbiAqICBNSVQgTGljZW5zZVxuICovXG5cbihmdW5jdGlvbigpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqIEdsb2JhbCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGdsb2JhbCBjb250cm9sbGVyLiBBbGwgY29udGFpbmVkIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXBwbHlcbiAgICogdG8gYWxsIHNvdW5kcyB0aGF0IGFyZSBjdXJyZW50bHkgcGxheWluZyBvciB3aWxsIGJlIGluIHRoZSBmdXR1cmUuXG4gICAqL1xuICB2YXIgSG93bGVyR2xvYmFsID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH07XG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgZ2xvYmFsIEhvd2xlciBvYmplY3QuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgLy8gQ3JlYXRlIGEgZ2xvYmFsIElEIGNvdW50ZXIuXG4gICAgICBzZWxmLl9jb3VudGVyID0gMTAwMDtcblxuICAgICAgLy8gSW50ZXJuYWwgcHJvcGVydGllcy5cbiAgICAgIHNlbGYuX2NvZGVjcyA9IHt9O1xuICAgICAgc2VsZi5faG93bHMgPSBbXTtcbiAgICAgIHNlbGYuX211dGVkID0gZmFsc2U7XG4gICAgICBzZWxmLl92b2x1bWUgPSAxO1xuICAgICAgc2VsZi5fY2FuUGxheUV2ZW50ID0gJ2NhbnBsYXl0aHJvdWdoJztcbiAgICAgIHNlbGYuX25hdmlnYXRvciA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yKSA/IHdpbmRvdy5uYXZpZ2F0b3IgOiBudWxsO1xuXG4gICAgICAvLyBQdWJsaWMgcHJvcGVydGllcy5cbiAgICAgIHNlbGYubWFzdGVyR2FpbiA9IG51bGw7XG4gICAgICBzZWxmLm5vQXVkaW8gPSBmYWxzZTtcbiAgICAgIHNlbGYudXNpbmdXZWJBdWRpbyA9IHRydWU7XG4gICAgICBzZWxmLmF1dG9TdXNwZW5kID0gdHJ1ZTtcbiAgICAgIHNlbGYuY3R4ID0gbnVsbDtcblxuICAgICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGF1dG8gaU9TIGVuYWJsZXIuXG4gICAgICBzZWxmLm1vYmlsZUF1dG9FbmFibGUgPSB0cnVlO1xuXG4gICAgICAvLyBTZXR1cCB0aGUgdmFyaW91cyBzdGF0ZSB2YWx1ZXMgZm9yIGdsb2JhbCB0cmFja2luZy5cbiAgICAgIHNlbGYuX3NldHVwKCk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQvc2V0IHRoZSBnbG9iYWwgdm9sdW1lIGZvciBhbGwgc291bmRzLlxuICAgICAqIEBwYXJhbSAge0Zsb2F0fSB2b2wgVm9sdW1lIGZyb20gMC4wIHRvIDEuMC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXIvRmxvYXR9ICAgICBSZXR1cm5zIHNlbGYgb3IgY3VycmVudCB2b2x1bWUuXG4gICAgICovXG4gICAgdm9sdW1lOiBmdW5jdGlvbih2b2wpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG4gICAgICB2b2wgPSBwYXJzZUZsb2F0KHZvbCk7XG5cbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYW4gQXVkaW9Db250ZXh0IGNyZWF0ZWQgeWV0LCBydW4gdGhlIHNldHVwLlxuICAgICAgaWYgKCFzZWxmLmN0eCkge1xuICAgICAgICBzZXR1cEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdm9sID49IDAgJiYgdm9sIDw9IDEpIHtcbiAgICAgICAgc2VsZi5fdm9sdW1lID0gdm9sO1xuXG4gICAgICAgIC8vIERvbid0IHVwZGF0ZSBhbnkgb2YgdGhlIG5vZGVzIGlmIHdlIGFyZSBtdXRlZC5cbiAgICAgICAgaWYgKHNlbGYuX211dGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaGVuIHVzaW5nIFdlYiBBdWRpbywgd2UganVzdCBuZWVkIHRvIGFkanVzdCB0aGUgbWFzdGVyIGdhaW4uXG4gICAgICAgIGlmIChzZWxmLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgICAgICBzZWxmLm1hc3RlckdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSh2b2wsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFuZCBjaGFuZ2Ugdm9sdW1lIGZvciBhbGwgSFRNTDUgYXVkaW8gbm9kZXMuXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICghc2VsZi5faG93bHNbaV0uX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICAvLyBHZXQgYWxsIG9mIHRoZSBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAgICAgICAgdmFyIGlkcyA9IHNlbGYuX2hvd2xzW2ldLl9nZXRTb3VuZElkcygpO1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHNvdW5kcyBhbmQgY2hhbmdlIHRoZSB2b2x1bWVzLlxuICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPGlkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9ob3dsc1tpXS5fc291bmRCeUlkKGlkc1tqXSk7XG5cbiAgICAgICAgICAgICAgaWYgKHNvdW5kICYmIHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAgICAgc291bmQuX25vZGUudm9sdW1lID0gc291bmQuX3ZvbHVtZSAqIHZvbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZi5fdm9sdW1lO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgbXV0aW5nIGFuZCB1bm11dGluZyBnbG9iYWxseS5cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBtdXRlZCBJcyBtdXRlZCBvciBub3QuXG4gICAgICovXG4gICAgbXV0ZTogZnVuY3Rpb24obXV0ZWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYW4gQXVkaW9Db250ZXh0IGNyZWF0ZWQgeWV0LCBydW4gdGhlIHNldHVwLlxuICAgICAgaWYgKCFzZWxmLmN0eCkge1xuICAgICAgICBzZXR1cEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLl9tdXRlZCA9IG11dGVkO1xuXG4gICAgICAvLyBXaXRoIFdlYiBBdWRpbywgd2UganVzdCBuZWVkIHRvIG11dGUgdGhlIG1hc3RlciBnYWluLlxuICAgICAgaWYgKHNlbGYudXNpbmdXZWJBdWRpbykge1xuICAgICAgICBzZWxmLm1hc3RlckdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZShtdXRlZCA/IDAgOiBzZWxmLl92b2x1bWUsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgfVxuXG4gICAgICAvLyBMb29wIHRocm91Z2ggYW5kIG11dGUgYWxsIEhUTUw1IEF1ZGlvIG5vZGVzLlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghc2VsZi5faG93bHNbaV0uX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgLy8gR2V0IGFsbCBvZiB0aGUgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgICAgICB2YXIgaWRzID0gc2VsZi5faG93bHNbaV0uX2dldFNvdW5kSWRzKCk7XG5cbiAgICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHNvdW5kcyBhbmQgbWFyayB0aGUgYXVkaW8gbm9kZSBhcyBtdXRlZC5cbiAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8aWRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9ob3dsc1tpXS5fc291bmRCeUlkKGlkc1tqXSk7XG5cbiAgICAgICAgICAgIGlmIChzb3VuZCAmJiBzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5tdXRlZCA9IChtdXRlZCkgPyB0cnVlIDogc291bmQuX211dGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5sb2FkIGFuZCBkZXN0cm95IGFsbCBjdXJyZW50bHkgbG9hZGVkIEhvd2wgb2JqZWN0cy5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgdW5sb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIGZvciAodmFyIGk9c2VsZi5faG93bHMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICBzZWxmLl9ob3dsc1tpXS51bmxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IEF1ZGlvQ29udGV4dCB0byBtYWtlIHN1cmUgaXQgaXMgZnVsbHkgcmVzZXQuXG4gICAgICBpZiAoc2VsZi51c2luZ1dlYkF1ZGlvICYmIHNlbGYuY3R4ICYmIHR5cGVvZiBzZWxmLmN0eC5jbG9zZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5jdHguY2xvc2UoKTtcbiAgICAgICAgc2VsZi5jdHggPSBudWxsO1xuICAgICAgICBzZXR1cEF1ZGlvQ29udGV4dCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGNvZGVjIHN1cHBvcnQgb2Ygc3BlY2lmaWMgZXh0ZW5zaW9uLlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZXh0IEF1ZGlvIGZpbGUgZXh0ZW50aW9uLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgY29kZWNzOiBmdW5jdGlvbihleHQpIHtcbiAgICAgIHJldHVybiAodGhpcyB8fCBIb3dsZXIpLl9jb2RlY3NbZXh0LnJlcGxhY2UoL154LS8sICcnKV07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHVwIHZhcmlvdXMgc3RhdGUgdmFsdWVzIGZvciBnbG9iYWwgdHJhY2tpbmcuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIF9zZXR1cDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgc3VzcGVuZC9yZXN1bWUgc3RhdGUgb2YgdGhlIEF1ZGlvQ29udGV4dC5cbiAgICAgIHNlbGYuc3RhdGUgPSBzZWxmLmN0eCA/IHNlbGYuY3R4LnN0YXRlIHx8ICdydW5uaW5nJyA6ICdydW5uaW5nJztcblxuICAgICAgLy8gQXV0b21hdGljYWxseSBiZWdpbiB0aGUgMzAtc2Vjb25kIHN1c3BlbmQgcHJvY2Vzc1xuICAgICAgc2VsZi5fYXV0b1N1c3BlbmQoKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgYXVkaW8gaXMgYXZhaWxhYmxlLlxuICAgICAgaWYgKCFzZWxmLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgICAgLy8gTm8gYXVkaW8gaXMgYXZhaWxhYmxlIG9uIHRoaXMgc3lzdGVtIGlmIG5vQXVkaW8gaXMgc2V0IHRvIHRydWUuXG4gICAgICAgIGlmICh0eXBlb2YgQXVkaW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB0ZXN0ID0gbmV3IEF1ZGlvKCk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjYW5wbGF5dGhyb3VnaCBldmVudCBpcyBhdmFpbGFibGUuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRlc3Qub25jYW5wbGF5dGhyb3VnaCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgc2VsZi5fY2FuUGxheUV2ZW50ID0gJ2NhbnBsYXknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgc2VsZi5ub0F1ZGlvID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5ub0F1ZGlvID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUZXN0IHRvIG1ha2Ugc3VyZSBhdWRpbyBpc24ndCBkaXNhYmxlZCBpbiBJbnRlcm5ldCBFeHBsb3Jlci5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciB0ZXN0ID0gbmV3IEF1ZGlvKCk7XG4gICAgICAgIGlmICh0ZXN0Lm11dGVkKSB7XG4gICAgICAgICAgc2VsZi5ub0F1ZGlvID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgLy8gQ2hlY2sgZm9yIHN1cHBvcnRlZCBjb2RlY3MuXG4gICAgICBpZiAoIXNlbGYubm9BdWRpbykge1xuICAgICAgICBzZWxmLl9zZXR1cENvZGVjcygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGJyb3dzZXIgc3VwcG9ydCBmb3IgdmFyaW91cyBjb2RlY3MgYW5kIGNhY2hlIHRoZSByZXN1bHRzLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBfc2V0dXBDb2RlY3M6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcbiAgICAgIHZhciBhdWRpb1Rlc3QgPSBudWxsO1xuXG4gICAgICAvLyBNdXN0IHdyYXAgaW4gYSB0cnkvY2F0Y2ggYmVjYXVzZSBJRTExIGluIHNlcnZlciBtb2RlIHRocm93cyBhbiBlcnJvci5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF1ZGlvVGVzdCA9ICh0eXBlb2YgQXVkaW8gIT09ICd1bmRlZmluZWQnKSA/IG5ldyBBdWRpbygpIDogbnVsbDtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhdWRpb1Rlc3QgfHwgdHlwZW9mIGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgdmFyIG1wZWdUZXN0ID0gYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9tcGVnOycpLnJlcGxhY2UoL15ubyQvLCAnJyk7XG5cbiAgICAgIC8vIE9wZXJhIHZlcnNpb24gPDMzIGhhcyBtaXhlZCBNUDMgc3VwcG9ydCwgc28gd2UgbmVlZCB0byBjaGVjayBmb3IgYW5kIGJsb2NrIGl0LlxuICAgICAgdmFyIGNoZWNrT3BlcmEgPSBzZWxmLl9uYXZpZ2F0b3IgJiYgc2VsZi5fbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT1BSXFwvKFswLTZdLikvZyk7XG4gICAgICB2YXIgaXNPbGRPcGVyYSA9IChjaGVja09wZXJhICYmIHBhcnNlSW50KGNoZWNrT3BlcmFbMF0uc3BsaXQoJy8nKVsxXSwgMTApIDwgMzMpO1xuXG4gICAgICBzZWxmLl9jb2RlY3MgPSB7XG4gICAgICAgIG1wMzogISEoIWlzT2xkT3BlcmEgJiYgKG1wZWdUZXN0IHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vbXAzOycpLnJlcGxhY2UoL15ubyQvLCAnJykpKSxcbiAgICAgICAgbXBlZzogISFtcGVnVGVzdCxcbiAgICAgICAgb3B1czogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwib3B1c1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgb2dnOiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIG9nYTogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICB3YXY6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby93YXY7IGNvZGVjcz1cIjFcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIGFhYzogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBjYWY6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby94LWNhZjsnKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBtNGE6ICEhKGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8veC1tNGE7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9tNGE7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIG1wNDogISEoYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby94LW1wNDsnKSB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL21wNDsnKSB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKSkucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgd2ViYTogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3dlYm07IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgd2VibTogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3dlYm07IGNvZGVjcz1cInZvcmJpc1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgZG9sYnk6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9tcDQ7IGNvZGVjcz1cImVjLTNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIGZsYWM6ICEhKGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8veC1mbGFjOycpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vZmxhYzsnKSkucmVwbGFjZSgvXm5vJC8sICcnKVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1vYmlsZSBicm93c2VycyB3aWxsIG9ubHkgYWxsb3cgYXVkaW8gdG8gYmUgcGxheWVkIGFmdGVyIGEgdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgKiBBdHRlbXB0IHRvIGF1dG9tYXRpY2FsbHkgdW5sb2NrIGF1ZGlvIG9uIHRoZSBmaXJzdCB1c2VyIGludGVyYWN0aW9uLlxuICAgICAqIENvbmNlcHQgZnJvbTogaHR0cDovL3BhdWxiYWthdXMuY29tL3R1dG9yaWFscy9odG1sNS93ZWItYXVkaW8tb24taW9zL1xuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBfZW5hYmxlTW9iaWxlQXVkaW86IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgLy8gT25seSBydW4gdGhpcyBvbiBtb2JpbGUgZGV2aWNlcyBpZiBhdWRpbyBpc24ndCBhbHJlYWR5IGVhbmJsZWQuXG4gICAgICB2YXIgaXNNb2JpbGUgPSAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkfEJsYWNrQmVycnl8QkIxMHxTaWxrfE1vYmkvaS50ZXN0KHNlbGYuX25hdmlnYXRvciAmJiBzZWxmLl9uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciBpc1RvdWNoID0gISEoKCdvbnRvdWNoZW5kJyBpbiB3aW5kb3cpIHx8IChzZWxmLl9uYXZpZ2F0b3IgJiYgc2VsZi5fbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCkgfHwgKHNlbGYuX25hdmlnYXRvciAmJiBzZWxmLl9uYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDApKTtcbiAgICAgIGlmIChzZWxmLl9tb2JpbGVFbmFibGVkIHx8ICFzZWxmLmN0eCB8fCAoIWlzTW9iaWxlICYmICFpc1RvdWNoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX21vYmlsZUVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgLy8gU29tZSBtb2JpbGUgZGV2aWNlcy9wbGF0Zm9ybXMgaGF2ZSBkaXN0b3J0aW9uIGlzc3VlcyB3aGVuIG9wZW5pbmcvY2xvc2luZyB0YWJzIGFuZC9vciB3ZWIgdmlld3MuXG4gICAgICAvLyBCdWdzIGluIHRoZSBicm93c2VyIChlc3BlY2lhbGx5IE1vYmlsZSBTYWZhcmkpIGNhbiBjYXVzZSB0aGUgc2FtcGxlUmF0ZSB0byBjaGFuZ2UgZnJvbSA0NDEwMCB0byA0ODAwMC5cbiAgICAgIC8vIEJ5IGNhbGxpbmcgSG93bGVyLnVubG9hZCgpLCB3ZSBjcmVhdGUgYSBuZXcgQXVkaW9Db250ZXh0IHdpdGggdGhlIGNvcnJlY3Qgc2FtcGxlUmF0ZS5cbiAgICAgIGlmICghc2VsZi5fbW9iaWxlVW5sb2FkZWQgJiYgc2VsZi5jdHguc2FtcGxlUmF0ZSAhPT0gNDQxMDApIHtcbiAgICAgICAgc2VsZi5fbW9iaWxlVW5sb2FkZWQgPSB0cnVlO1xuICAgICAgICBzZWxmLnVubG9hZCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBTY3JhdGNoIGJ1ZmZlciBmb3IgZW5hYmxpbmcgaU9TIHRvIGRpc3Bvc2Ugb2Ygd2ViIGF1ZGlvIGJ1ZmZlcnMgY29ycmVjdGx5LCBhcyBwZXI6XG4gICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0MTE5Njg0XG4gICAgICBzZWxmLl9zY3JhdGNoQnVmZmVyID0gc2VsZi5jdHguY3JlYXRlQnVmZmVyKDEsIDEsIDIyMDUwKTtcblxuICAgICAgLy8gQ2FsbCB0aGlzIG1ldGhvZCBvbiB0b3VjaCBzdGFydCB0byBjcmVhdGUgYW5kIHBsYXkgYSBidWZmZXIsXG4gICAgICAvLyB0aGVuIGNoZWNrIGlmIHRoZSBhdWRpbyBhY3R1YWxseSBwbGF5ZWQgdG8gZGV0ZXJtaW5lIGlmXG4gICAgICAvLyBhdWRpbyBoYXMgbm93IGJlZW4gdW5sb2NrZWQgb24gaU9TLCBBbmRyb2lkLCBldGMuXG4gICAgICB2YXIgdW5sb2NrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEZpeCBBbmRyb2lkIGNhbiBub3QgcGxheSBpbiBzdXNwZW5kIHN0YXRlLlxuICAgICAgICBIb3dsZXIuX2F1dG9SZXN1bWUoKTtcblxuICAgICAgICAvLyBDcmVhdGUgYW4gZW1wdHkgYnVmZmVyLlxuICAgICAgICB2YXIgc291cmNlID0gc2VsZi5jdHguY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgIHNvdXJjZS5idWZmZXIgPSBzZWxmLl9zY3JhdGNoQnVmZmVyO1xuICAgICAgICBzb3VyY2UuY29ubmVjdChzZWxmLmN0eC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgLy8gUGxheSB0aGUgZW1wdHkgYnVmZmVyLlxuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZS5zdGFydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBzb3VyY2Uubm90ZU9uKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvdXJjZS5zdGFydCgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGxpbmcgcmVzdW1lKCkgb24gYSBzdGFjayBpbml0aWF0ZWQgYnkgdXNlciBnZXN0dXJlIGlzIHdoYXQgYWN0dWFsbHkgdW5sb2NrcyB0aGUgYXVkaW8gb24gQW5kcm9pZCBDaHJvbWUgPj0gNTUuXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5jdHgucmVzdW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgc2VsZi5jdHgucmVzdW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXR1cCBhIHRpbWVvdXQgdG8gY2hlY2sgdGhhdCB3ZSBhcmUgdW5sb2NrZWQgb24gdGhlIG5leHQgZXZlbnQgbG9vcC5cbiAgICAgICAgc291cmNlLm9uZW5kZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzb3VyY2UuZGlzY29ubmVjdCgwKTtcblxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgdW5sb2NrZWQgc3RhdGUgYW5kIHByZXZlbnQgdGhpcyBjaGVjayBmcm9tIGhhcHBlbmluZyBhZ2Fpbi5cbiAgICAgICAgICBzZWxmLl9tb2JpbGVFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICBzZWxmLm1vYmlsZUF1dG9FbmFibGUgPSBmYWxzZTtcblxuICAgICAgICAgIC8vIFJlbW92ZSB0aGUgdG91Y2ggc3RhcnQgbGlzdGVuZXIuXG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHVubG9jaywgdHJ1ZSk7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB1bmxvY2ssIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgLy8gU2V0dXAgYSB0b3VjaCBzdGFydCBsaXN0ZW5lciB0byBhdHRlbXB0IGFuIHVubG9jayBpbi5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB1bmxvY2ssIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB1bmxvY2ssIHRydWUpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXV0b21hdGljYWxseSBzdXNwZW5kIHRoZSBXZWIgQXVkaW8gQXVkaW9Db250ZXh0IGFmdGVyIG5vIHNvdW5kIGhhcyBwbGF5ZWQgZm9yIDMwIHNlY29uZHMuXG4gICAgICogVGhpcyBzYXZlcyBwcm9jZXNzaW5nL2VuZXJneSBhbmQgZml4ZXMgdmFyaW91cyBicm93c2VyLXNwZWNpZmljIGJ1Z3Mgd2l0aCBhdWRpbyBnZXR0aW5nIHN0dWNrLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBfYXV0b1N1c3BlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoIXNlbGYuYXV0b1N1c3BlbmQgfHwgIXNlbGYuY3R4IHx8IHR5cGVvZiBzZWxmLmN0eC5zdXNwZW5kID09PSAndW5kZWZpbmVkJyB8fCAhSG93bGVyLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiBhbnkgc291bmRzIGFyZSBwbGF5aW5nLlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLl9ob3dsc1tpXS5fd2ViQXVkaW8pIHtcbiAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8c2VsZi5faG93bHNbaV0uX3NvdW5kcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKCFzZWxmLl9ob3dsc1tpXS5fc291bmRzW2pdLl9wYXVzZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLl9zdXNwZW5kVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX3N1c3BlbmRUaW1lcik7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIHNvdW5kIGhhcyBwbGF5ZWQgYWZ0ZXIgMzAgc2Vjb25kcywgc3VzcGVuZCB0aGUgY29udGV4dC5cbiAgICAgIHNlbGYuX3N1c3BlbmRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghc2VsZi5hdXRvU3VzcGVuZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuX3N1c3BlbmRUaW1lciA9IG51bGw7XG4gICAgICAgIHNlbGYuc3RhdGUgPSAnc3VzcGVuZGluZyc7XG4gICAgICAgIHNlbGYuY3R4LnN1c3BlbmQoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuc3RhdGUgPSAnc3VzcGVuZGVkJztcblxuICAgICAgICAgIGlmIChzZWxmLl9yZXN1bWVBZnRlclN1c3BlbmQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzZWxmLl9yZXN1bWVBZnRlclN1c3BlbmQ7XG4gICAgICAgICAgICBzZWxmLl9hdXRvUmVzdW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIDMwMDAwKTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF1dG9tYXRpY2FsbHkgcmVzdW1lIHRoZSBXZWIgQXVkaW8gQXVkaW9Db250ZXh0IHdoZW4gYSBuZXcgc291bmQgaXMgcGxheWVkLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBfYXV0b1Jlc3VtZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICghc2VsZi5jdHggfHwgdHlwZW9mIHNlbGYuY3R4LnJlc3VtZSA9PT0gJ3VuZGVmaW5lZCcgfHwgIUhvd2xlci51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYuc3RhdGUgPT09ICdydW5uaW5nJyAmJiBzZWxmLl9zdXNwZW5kVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX3N1c3BlbmRUaW1lcik7XG4gICAgICAgIHNlbGYuX3N1c3BlbmRUaW1lciA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XG4gICAgICAgIHNlbGYuY3R4LnJlc3VtZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5zdGF0ZSA9ICdydW5uaW5nJztcblxuICAgICAgICAgIC8vIEVtaXQgdG8gYWxsIEhvd2xzIHRoYXQgdGhlIGF1ZGlvIGhhcyByZXN1bWVkLlxuICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2VsZi5faG93bHNbaV0uX2VtaXQoJ3Jlc3VtZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNlbGYuX3N1c3BlbmRUaW1lcikge1xuICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLl9zdXNwZW5kVGltZXIpO1xuICAgICAgICAgIHNlbGYuX3N1c3BlbmRUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5zdGF0ZSA9PT0gJ3N1c3BlbmRpbmcnKSB7XG4gICAgICAgIHNlbGYuX3Jlc3VtZUFmdGVyU3VzcGVuZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cbiAgfTtcblxuICAvLyBTZXR1cCB0aGUgZ2xvYmFsIGF1ZGlvIGNvbnRyb2xsZXIuXG4gIHZhciBIb3dsZXIgPSBuZXcgSG93bGVyR2xvYmFsKCk7XG5cbiAgLyoqIEdyb3VwIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBhdWRpbyBncm91cCBjb250cm9sbGVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gbyBQYXNzZWQgaW4gcHJvcGVydGllcyBmb3IgdGhpcyBncm91cC5cbiAgICovXG4gIHZhciBIb3dsID0gZnVuY3Rpb24obykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFRocm93IGFuIGVycm9yIGlmIG5vIHNvdXJjZSBpcyBwcm92aWRlZC5cbiAgICBpZiAoIW8uc3JjIHx8IG8uc3JjLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS5lcnJvcignQW4gYXJyYXkgb2Ygc291cmNlIGZpbGVzIG11c3QgYmUgcGFzc2VkIHdpdGggYW55IG5ldyBIb3dsLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYuaW5pdChvKTtcbiAgfTtcbiAgSG93bC5wcm90b3R5cGUgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBhIG5ldyBIb3dsIGdyb3VwIG9iamVjdC5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG8gUGFzc2VkIGluIHByb3BlcnRpZXMgZm9yIHRoaXMgZ3JvdXAuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbihvKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYW4gQXVkaW9Db250ZXh0IGNyZWF0ZWQgeWV0LCBydW4gdGhlIHNldHVwLlxuICAgICAgaWYgKCFIb3dsZXIuY3R4KSB7XG4gICAgICAgIHNldHVwQXVkaW9Db250ZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHVwIHVzZXItZGVmaW5lZCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gICAgICBzZWxmLl9hdXRvcGxheSA9IG8uYXV0b3BsYXkgfHwgZmFsc2U7XG4gICAgICBzZWxmLl9mb3JtYXQgPSAodHlwZW9mIG8uZm9ybWF0ICE9PSAnc3RyaW5nJykgPyBvLmZvcm1hdCA6IFtvLmZvcm1hdF07XG4gICAgICBzZWxmLl9odG1sNSA9IG8uaHRtbDUgfHwgZmFsc2U7XG4gICAgICBzZWxmLl9tdXRlZCA9IG8ubXV0ZSB8fCBmYWxzZTtcbiAgICAgIHNlbGYuX2xvb3AgPSBvLmxvb3AgfHwgZmFsc2U7XG4gICAgICBzZWxmLl9wb29sID0gby5wb29sIHx8IDU7XG4gICAgICBzZWxmLl9wcmVsb2FkID0gKHR5cGVvZiBvLnByZWxvYWQgPT09ICdib29sZWFuJykgPyBvLnByZWxvYWQgOiB0cnVlO1xuICAgICAgc2VsZi5fcmF0ZSA9IG8ucmF0ZSB8fCAxO1xuICAgICAgc2VsZi5fc3ByaXRlID0gby5zcHJpdGUgfHwge307XG4gICAgICBzZWxmLl9zcmMgPSAodHlwZW9mIG8uc3JjICE9PSAnc3RyaW5nJykgPyBvLnNyYyA6IFtvLnNyY107XG4gICAgICBzZWxmLl92b2x1bWUgPSBvLnZvbHVtZSAhPT0gdW5kZWZpbmVkID8gby52b2x1bWUgOiAxO1xuICAgICAgc2VsZi5feGhyV2l0aENyZWRlbnRpYWxzID0gby54aHJXaXRoQ3JlZGVudGlhbHMgfHwgZmFsc2U7XG5cbiAgICAgIC8vIFNldHVwIGFsbCBvdGhlciBkZWZhdWx0IHByb3BlcnRpZXMuXG4gICAgICBzZWxmLl9kdXJhdGlvbiA9IDA7XG4gICAgICBzZWxmLl9zdGF0ZSA9ICd1bmxvYWRlZCc7XG4gICAgICBzZWxmLl9zb3VuZHMgPSBbXTtcbiAgICAgIHNlbGYuX2VuZFRpbWVycyA9IHt9O1xuICAgICAgc2VsZi5fcXVldWUgPSBbXTtcbiAgICAgIHNlbGYuX3BsYXlMb2NrID0gZmFsc2U7XG5cbiAgICAgIC8vIFNldHVwIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgIHNlbGYuX29uZW5kID0gby5vbmVuZCA/IFt7Zm46IG8ub25lbmR9XSA6IFtdO1xuICAgICAgc2VsZi5fb25mYWRlID0gby5vbmZhZGUgPyBbe2ZuOiBvLm9uZmFkZX1dIDogW107XG4gICAgICBzZWxmLl9vbmxvYWQgPSBvLm9ubG9hZCA/IFt7Zm46IG8ub25sb2FkfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ubG9hZGVycm9yID0gby5vbmxvYWRlcnJvciA/IFt7Zm46IG8ub25sb2FkZXJyb3J9XSA6IFtdO1xuICAgICAgc2VsZi5fb25wbGF5ZXJyb3IgPSBvLm9ucGxheWVycm9yID8gW3tmbjogby5vbnBsYXllcnJvcn1dIDogW107XG4gICAgICBzZWxmLl9vbnBhdXNlID0gby5vbnBhdXNlID8gW3tmbjogby5vbnBhdXNlfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucGxheSA9IG8ub25wbGF5ID8gW3tmbjogby5vbnBsYXl9XSA6IFtdO1xuICAgICAgc2VsZi5fb25zdG9wID0gby5vbnN0b3AgPyBbe2ZuOiBvLm9uc3RvcH1dIDogW107XG4gICAgICBzZWxmLl9vbm11dGUgPSBvLm9ubXV0ZSA/IFt7Zm46IG8ub25tdXRlfV0gOiBbXTtcbiAgICAgIHNlbGYuX29udm9sdW1lID0gby5vbnZvbHVtZSA/IFt7Zm46IG8ub252b2x1bWV9XSA6IFtdO1xuICAgICAgc2VsZi5fb25yYXRlID0gby5vbnJhdGUgPyBbe2ZuOiBvLm9ucmF0ZX1dIDogW107XG4gICAgICBzZWxmLl9vbnNlZWsgPSBvLm9uc2VlayA/IFt7Zm46IG8ub25zZWVrfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucmVzdW1lID0gW107XG5cbiAgICAgIC8vIFdlYiBBdWRpbyBvciBIVE1MNSBBdWRpbz9cbiAgICAgIHNlbGYuX3dlYkF1ZGlvID0gSG93bGVyLnVzaW5nV2ViQXVkaW8gJiYgIXNlbGYuX2h0bWw1O1xuXG4gICAgICAvLyBBdXRvbWF0aWNhbGx5IHRyeSB0byBlbmFibGUgYXVkaW8gb24gaU9TLlxuICAgICAgaWYgKHR5cGVvZiBIb3dsZXIuY3R4ICE9PSAndW5kZWZpbmVkJyAmJiBIb3dsZXIuY3R4ICYmIEhvd2xlci5tb2JpbGVBdXRvRW5hYmxlKSB7XG4gICAgICAgIEhvd2xlci5fZW5hYmxlTW9iaWxlQXVkaW8oKTtcbiAgICAgIH1cblxuICAgICAgLy8gS2VlcCB0cmFjayBvZiB0aGlzIEhvd2wgZ3JvdXAgaW4gdGhlIGdsb2JhbCBjb250cm9sbGVyLlxuICAgICAgSG93bGVyLl9ob3dscy5wdXNoKHNlbGYpO1xuXG4gICAgICAvLyBJZiB0aGV5IHNlbGVjdGVkIGF1dG9wbGF5LCBhZGQgYSBwbGF5IGV2ZW50IHRvIHRoZSBsb2FkIHF1ZXVlLlxuICAgICAgaWYgKHNlbGYuX2F1dG9wbGF5KSB7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAncGxheScsXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYucGxheSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIExvYWQgdGhlIHNvdXJjZSBmaWxlIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICAgICAgaWYgKHNlbGYuX3ByZWxvYWQpIHtcbiAgICAgICAgc2VsZi5sb2FkKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHRoZSBhdWRpbyBmaWxlLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciB1cmwgPSBudWxsO1xuXG4gICAgICAvLyBJZiBubyBhdWRpbyBpcyBhdmFpbGFibGUsIHF1aXQgaW1tZWRpYXRlbHkuXG4gICAgICBpZiAoSG93bGVyLm5vQXVkaW8pIHtcbiAgICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ05vIGF1ZGlvIHN1cHBvcnQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBzdXJlIG91ciBzb3VyY2UgaXMgaW4gYW4gYXJyYXkuXG4gICAgICBpZiAodHlwZW9mIHNlbGYuX3NyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc2VsZi5fc3JjID0gW3NlbGYuX3NyY107XG4gICAgICB9XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgc291cmNlcyBhbmQgcGljayB0aGUgZmlyc3Qgb25lIHRoYXQgaXMgY29tcGF0aWJsZS5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9zcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGV4dCwgc3RyO1xuXG4gICAgICAgIGlmIChzZWxmLl9mb3JtYXQgJiYgc2VsZi5fZm9ybWF0W2ldKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXh0ZW5zaW9uIHdhcyBzcGVjaWZpZWQsIHVzZSB0aGF0IGluc3RlYWQuXG4gICAgICAgICAgZXh0ID0gc2VsZi5fZm9ybWF0W2ldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgc291cmNlIGlzIGEgc3RyaW5nLlxuICAgICAgICAgIHN0ciA9IHNlbGYuX3NyY1tpXTtcbiAgICAgICAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ2xvYWRlcnJvcicsIG51bGwsICdOb24tc3RyaW5nIGZvdW5kIGluIHNlbGVjdGVkIGF1ZGlvIHNvdXJjZXMgLSBpZ25vcmluZy4nKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIGZpbGUgZXh0ZW5zaW9uIGZyb20gdGhlIFVSTCBvciBiYXNlNjQgZGF0YSBVUkkuXG4gICAgICAgICAgZXh0ID0gL15kYXRhOmF1ZGlvXFwvKFteOyxdKyk7L2kuZXhlYyhzdHIpO1xuICAgICAgICAgIGlmICghZXh0KSB7XG4gICAgICAgICAgICBleHQgPSAvXFwuKFteLl0rKSQvLmV4ZWMoc3RyLnNwbGl0KCc/JywgMSlbMF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChleHQpIHtcbiAgICAgICAgICAgIGV4dCA9IGV4dFsxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvZyBhIHdhcm5pbmcgaWYgbm8gZXh0ZW5zaW9uIHdhcyBmb3VuZC5cbiAgICAgICAgaWYgKCFleHQpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIGZpbGUgZXh0ZW5zaW9uIHdhcyBmb3VuZC4gQ29uc2lkZXIgdXNpbmcgdGhlIFwiZm9ybWF0XCIgcHJvcGVydHkgb3Igc3BlY2lmeSBhbiBleHRlbnNpb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGV4dGVuc2lvbiBpcyBhdmFpbGFibGUuXG4gICAgICAgIGlmIChleHQgJiYgSG93bGVyLmNvZGVjcyhleHQpKSB7XG4gICAgICAgICAgdXJsID0gc2VsZi5fc3JjW2ldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHNlbGYuX2VtaXQoJ2xvYWRlcnJvcicsIG51bGwsICdObyBjb2RlYyBzdXBwb3J0IGZvciBzZWxlY3RlZCBhdWRpbyBzb3VyY2VzLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX3NyYyA9IHVybDtcbiAgICAgIHNlbGYuX3N0YXRlID0gJ2xvYWRpbmcnO1xuXG4gICAgICAvLyBJZiB0aGUgaG9zdGluZyBwYWdlIGlzIEhUVFBTIGFuZCB0aGUgc291cmNlIGlzbid0LFxuICAgICAgLy8gZHJvcCBkb3duIHRvIEhUTUw1IEF1ZGlvIHRvIGF2b2lkIE1peGVkIENvbnRlbnQgZXJyb3JzLlxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgJiYgdXJsLnNsaWNlKDAsIDUpID09PSAnaHR0cDonKSB7XG4gICAgICAgIHNlbGYuX2h0bWw1ID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5fd2ViQXVkaW8gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IHNvdW5kIG9iamVjdCBhbmQgYWRkIGl0IHRvIHRoZSBwb29sLlxuICAgICAgbmV3IFNvdW5kKHNlbGYpO1xuXG4gICAgICAvLyBMb2FkIGFuZCBkZWNvZGUgdGhlIGF1ZGlvIGRhdGEgZm9yIHBsYXliYWNrLlxuICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgIGxvYWRCdWZmZXIoc2VsZik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQbGF5IGEgc291bmQgb3IgcmVzdW1lIHByZXZpb3VzIHBsYXliYWNrLlxuICAgICAqIEBwYXJhbSAge1N0cmluZy9OdW1iZXJ9IHNwcml0ZSAgIFNwcml0ZSBuYW1lIGZvciBzcHJpdGUgcGxheWJhY2sgb3Igc291bmQgaWQgdG8gY29udGludWUgcHJldmlvdXMuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gaW50ZXJuYWwgSW50ZXJuYWwgVXNlOiB0cnVlIHByZXZlbnRzIGV2ZW50IGZpcmluZy5cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgIFNvdW5kIElELlxuICAgICAqL1xuICAgIHBsYXk6IGZ1bmN0aW9uKHNwcml0ZSwgaW50ZXJuYWwpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBpZCA9IG51bGw7XG5cbiAgICAgIC8vIERldGVybWluZSBpZiBhIHNwcml0ZSwgc291bmQgaWQgb3Igbm90aGluZyB3YXMgcGFzc2VkXG4gICAgICBpZiAodHlwZW9mIHNwcml0ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWQgPSBzcHJpdGU7XG4gICAgICAgIHNwcml0ZSA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzcHJpdGUgPT09ICdzdHJpbmcnICYmIHNlbGYuX3N0YXRlID09PSAnbG9hZGVkJyAmJiAhc2VsZi5fc3ByaXRlW3Nwcml0ZV0pIHtcbiAgICAgICAgLy8gSWYgdGhlIHBhc3NlZCBzcHJpdGUgZG9lc24ndCBleGlzdCwgZG8gbm90aGluZy5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzcHJpdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgZGVmYXVsdCBzb3VuZCBzcHJpdGUgKHBsYXlzIHRoZSBmdWxsIGF1ZGlvIGxlbmd0aCkuXG4gICAgICAgIHNwcml0ZSA9ICdfX2RlZmF1bHQnO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgc2luZ2xlIHBhdXNlZCBzb3VuZCB0aGF0IGlzbid0IGVuZGVkLlxuICAgICAgICAvLyBJZiB0aGVyZSBpcywgcGxheSB0aGF0IHNvdW5kLiBJZiBub3QsIGNvbnRpbnVlIGFzIHVzdWFsLlxuICAgICAgICB2YXIgbnVtID0gMDtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChzZWxmLl9zb3VuZHNbaV0uX3BhdXNlZCAmJiAhc2VsZi5fc291bmRzW2ldLl9lbmRlZCkge1xuICAgICAgICAgICAgbnVtKys7XG4gICAgICAgICAgICBpZCA9IHNlbGYuX3NvdW5kc1tpXS5faWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG51bSA9PT0gMSkge1xuICAgICAgICAgIHNwcml0ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCB0aGUgc2VsZWN0ZWQgbm9kZSwgb3IgZ2V0IG9uZSBmcm9tIHRoZSBwb29sLlxuICAgICAgdmFyIHNvdW5kID0gaWQgPyBzZWxmLl9zb3VuZEJ5SWQoaWQpIDogc2VsZi5faW5hY3RpdmVTb3VuZCgpO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgZG9lc24ndCBleGlzdCwgZG8gbm90aGluZy5cbiAgICAgIGlmICghc291bmQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlbGVjdCB0aGUgc3ByaXRlIGRlZmluaXRpb24uXG4gICAgICBpZiAoaWQgJiYgIXNwcml0ZSkge1xuICAgICAgICBzcHJpdGUgPSBzb3VuZC5fc3ByaXRlIHx8ICdfX2RlZmF1bHQnO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgd2UgbXVzdCB3YWl0IHRvIGdldCB0aGUgYXVkaW8ncyBkdXJhdGlvbi5cbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byB3YWl0IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBydW4gaW50byByYWNlIGNvbmRpdGlvbnMgd2l0aFxuICAgICAgLy8gdGhlIG9yZGVyIG9mIGZ1bmN0aW9uIGNhbGxzLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgICAvLyBTZXQgdGhlIHNwcml0ZSB2YWx1ZSBvbiB0aGlzIHNvdW5kLlxuICAgICAgICBzb3VuZC5fc3ByaXRlID0gc3ByaXRlO1xuXG4gICAgICAgIC8vIE1ha3IgdGhpcyBzb3VuZGVkIGFzIG5vdCBlbmRlZCBpbiBjYXNlIGFub3RoZXIgc291bmQgaXMgcGxheWVkIGJlZm9yZSB0aGlzIG9uZSBsb2Fkcy5cbiAgICAgICAgc291bmQuX2VuZGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQWRkIHRoZSBzb3VuZCB0byB0aGUgcXVldWUgdG8gYmUgcGxheWVkIG9uIGxvYWQuXG4gICAgICAgIHZhciBzb3VuZElkID0gc291bmQuX2lkO1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3BsYXknLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXkoc291bmRJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc291bmRJZDtcbiAgICAgIH1cblxuICAgICAgLy8gRG9uJ3QgcGxheSB0aGUgc291bmQgaWYgYW4gaWQgd2FzIHBhc3NlZCBhbmQgaXQgaXMgYWxyZWFkeSBwbGF5aW5nLlxuICAgICAgaWYgKGlkICYmICFzb3VuZC5fcGF1c2VkKSB7XG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIHBsYXkgZXZlbnQsIGluIG9yZGVyIHRvIGtlZXAgaXRlcmF0aW5nIHRocm91Z2ggcXVldWUuXG4gICAgICAgIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgICBzZWxmLl9sb2FkUXVldWUoJ3BsYXknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzb3VuZC5faWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgQXVkaW9Db250ZXh0IGlzbid0IHN1c3BlbmRlZCwgYW5kIHJlc3VtZSBpdCBpZiBpdCBpcy5cbiAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICBIb3dsZXIuX2F1dG9SZXN1bWUoKTtcbiAgICAgIH1cblxuICAgICAgLy8gRGV0ZXJtaW5lIGhvdyBsb25nIHRvIHBsYXkgZm9yIGFuZCB3aGVyZSB0byBzdGFydCBwbGF5aW5nLlxuICAgICAgdmFyIHNlZWsgPSBNYXRoLm1heCgwLCBzb3VuZC5fc2VlayA+IDAgPyBzb3VuZC5fc2VlayA6IHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzBdIC8gMTAwMCk7XG4gICAgICB2YXIgZHVyYXRpb24gPSBNYXRoLm1heCgwLCAoKHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzBdICsgc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMV0pIC8gMTAwMCkgLSBzZWVrKTtcbiAgICAgIHZhciB0aW1lb3V0ID0gKGR1cmF0aW9uICogMTAwMCkgLyBNYXRoLmFicyhzb3VuZC5fcmF0ZSk7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgcGFyYW1ldGVycyBvZiB0aGUgc291bmRcbiAgICAgIHNvdW5kLl9wYXVzZWQgPSBmYWxzZTtcbiAgICAgIHNvdW5kLl9lbmRlZCA9IGZhbHNlO1xuICAgICAgc291bmQuX3Nwcml0ZSA9IHNwcml0ZTtcbiAgICAgIHNvdW5kLl9zZWVrID0gc2VlaztcbiAgICAgIHNvdW5kLl9zdGFydCA9IHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzBdIC8gMTAwMDtcbiAgICAgIHNvdW5kLl9zdG9wID0gKHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzBdICsgc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMV0pIC8gMTAwMDtcbiAgICAgIHNvdW5kLl9sb29wID0gISEoc291bmQuX2xvb3AgfHwgc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMl0pO1xuXG4gICAgICAvLyBCZWdpbiB0aGUgYWN0dWFsIHBsYXliYWNrLlxuICAgICAgdmFyIG5vZGUgPSBzb3VuZC5fbm9kZTtcbiAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAvLyBGaXJlIHRoaXMgd2hlbiB0aGUgc291bmQgaXMgcmVhZHkgdG8gcGxheSB0byBiZWdpbiBXZWIgQXVkaW8gcGxheWJhY2suXG4gICAgICAgIHZhciBwbGF5V2ViQXVkaW8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLl9yZWZyZXNoQnVmZmVyKHNvdW5kKTtcblxuICAgICAgICAgIC8vIFNldHVwIHRoZSBwbGF5YmFjayBwYXJhbXMuXG4gICAgICAgICAgdmFyIHZvbCA9IChzb3VuZC5fbXV0ZWQgfHwgc2VsZi5fbXV0ZWQpID8gMCA6IHNvdW5kLl92b2x1bWU7XG4gICAgICAgICAgbm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKHZvbCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgc291bmQuX3BsYXlTdGFydCA9IEhvd2xlci5jdHguY3VycmVudFRpbWU7XG5cbiAgICAgICAgICAvLyBQbGF5IHRoZSBzb3VuZCB1c2luZyB0aGUgc3VwcG9ydGVkIG1ldGhvZC5cbiAgICAgICAgICBpZiAodHlwZW9mIG5vZGUuYnVmZmVyU291cmNlLnN0YXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgc291bmQuX2xvb3AgPyBub2RlLmJ1ZmZlclNvdXJjZS5ub3RlR3JhaW5PbigwLCBzZWVrLCA4NjQwMCkgOiBub2RlLmJ1ZmZlclNvdXJjZS5ub3RlR3JhaW5PbigwLCBzZWVrLCBkdXJhdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNvdW5kLl9sb29wID8gbm9kZS5idWZmZXJTb3VyY2Uuc3RhcnQoMCwgc2VlaywgODY0MDApIDogbm9kZS5idWZmZXJTb3VyY2Uuc3RhcnQoMCwgc2VlaywgZHVyYXRpb24pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN0YXJ0IGEgbmV3IHRpbWVyIGlmIG5vbmUgaXMgcHJlc2VudC5cbiAgICAgICAgICBpZiAodGltZW91dCAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgIHNlbGYuX2VuZFRpbWVyc1tzb3VuZC5faWRdID0gc2V0VGltZW91dChzZWxmLl9lbmRlZC5iaW5kKHNlbGYsIHNvdW5kKSwgdGltZW91dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc2VsZi5fZW1pdCgncGxheScsIHNvdW5kLl9pZCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKEhvd2xlci5zdGF0ZSA9PT0gJ3J1bm5pbmcnKSB7XG4gICAgICAgICAgcGxheVdlYkF1ZGlvKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5vbmNlKCdyZXN1bWUnLCBwbGF5V2ViQXVkaW8pO1xuXG4gICAgICAgICAgLy8gQ2FuY2VsIHRoZSBlbmQgdGltZXIuXG4gICAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihzb3VuZC5faWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGaXJlIHRoaXMgd2hlbiB0aGUgc291bmQgaXMgcmVhZHkgdG8gcGxheSB0byBiZWdpbiBIVE1MNSBBdWRpbyBwbGF5YmFjay5cbiAgICAgICAgdmFyIHBsYXlIdG1sNSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG5vZGUuY3VycmVudFRpbWUgPSBzZWVrO1xuICAgICAgICAgIG5vZGUubXV0ZWQgPSBzb3VuZC5fbXV0ZWQgfHwgc2VsZi5fbXV0ZWQgfHwgSG93bGVyLl9tdXRlZCB8fCBub2RlLm11dGVkO1xuICAgICAgICAgIG5vZGUudm9sdW1lID0gc291bmQuX3ZvbHVtZSAqIEhvd2xlci52b2x1bWUoKTtcbiAgICAgICAgICBub2RlLnBsYXliYWNrUmF0ZSA9IHNvdW5kLl9yYXRlO1xuXG4gICAgICAgICAgLy8gTW9iaWxlIGJyb3dzZXJzIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhpcyBpcyBjYWxsZWQgd2l0aG91dCB1c2VyIGludGVyYWN0aW9uLlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcGxheSA9IG5vZGUucGxheSgpO1xuXG4gICAgICAgICAgICAvLyBTdXBwb3J0IG9sZGVyIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBwcm9taXNlcywgYW5kIHRodXMgZG9uJ3QgaGF2ZSB0aGlzIGlzc3VlLlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiBwbGF5IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAvLyBJbXBsZW1lbnRzIGEgbG9jayB0byBwcmV2ZW50IERPTUV4Y2VwdGlvbjogVGhlIHBsYXkoKSByZXF1ZXN0IHdhcyBpbnRlcnJ1cHRlZCBieSBhIGNhbGwgdG8gcGF1c2UoKS5cbiAgICAgICAgICAgICAgc2VsZi5fcGxheUxvY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIC8vIFJlbGVhc2VzIHRoZSBsb2NrIGFuZCBleGVjdXRlcyBxdWV1ZWQgYWN0aW9ucy5cbiAgICAgICAgICAgICAgdmFyIHJ1bkxvYWRRdWV1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuX3BsYXlMb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5fZW1pdCgncGxheScsIHNvdW5kLl9pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBwbGF5LnRoZW4ocnVuTG9hZFF1ZXVlLCBydW5Mb2FkUXVldWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgICAgICAgc2VsZi5fZW1pdCgncGxheScsIHNvdW5kLl9pZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBub2RlIGlzIHN0aWxsIHBhdXNlZCwgdGhlbiB3ZSBjYW4gYXNzdW1lIHRoZXJlIHdhcyBhIHBsYXliYWNrIGlzc3VlLlxuICAgICAgICAgICAgaWYgKG5vZGUucGF1c2VkKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXllcnJvcicsIHNvdW5kLl9pZCwgJ1BsYXliYWNrIHdhcyB1bmFibGUgdG8gc3RhcnQuIFRoaXMgaXMgbW9zdCBjb21tb25seSBhbiBpc3N1ZSAnICtcbiAgICAgICAgICAgICAgICAnb24gbW9iaWxlIGRldmljZXMgd2hlcmUgcGxheWJhY2sgd2FzIG5vdCB3aXRoaW4gYSB1c2VyIGludGVyYWN0aW9uLicpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldHVwIHRoZSBlbmQgdGltZXIgb24gc3ByaXRlcyBvciBsaXN0ZW4gZm9yIHRoZSBlbmRlZCBldmVudC5cbiAgICAgICAgICAgIGlmIChzcHJpdGUgIT09ICdfX2RlZmF1bHQnKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2VuZFRpbWVyc1tzb3VuZC5faWRdID0gc2V0VGltZW91dChzZWxmLl9lbmRlZC5iaW5kKHNlbGYsIHNvdW5kKSwgdGltZW91dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxmLl9lbmRUaW1lcnNbc291bmQuX2lkXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vIEZpcmUgZW5kZWQgb24gdGhpcyBhdWRpbyBub2RlLlxuICAgICAgICAgICAgICAgIHNlbGYuX2VuZGVkKHNvdW5kKTtcblxuICAgICAgICAgICAgICAgIC8vIENsZWFyIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRlZCcsIHNlbGYuX2VuZFRpbWVyc1tzb3VuZC5faWRdLCBmYWxzZSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBzZWxmLl9lbmRUaW1lcnNbc291bmQuX2lkXSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2VsZi5fZW1pdCgncGxheWVycm9yJywgc291bmQuX2lkLCBlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQbGF5IGltbWVkaWF0ZWx5IGlmIHJlYWR5LCBvciB3YWl0IGZvciB0aGUgJ2NhbnBsYXl0aHJvdWdoJ2UgdmVudC5cbiAgICAgICAgdmFyIGxvYWRlZE5vUmVhZHlTdGF0ZSA9ICh3aW5kb3cgJiYgd2luZG93LmVqZWN0YSkgfHwgKCFub2RlLnJlYWR5U3RhdGUgJiYgSG93bGVyLl9uYXZpZ2F0b3IuaXNDb2Nvb25KUyk7XG4gICAgICAgIGlmIChub2RlLnJlYWR5U3RhdGUgPj0gMyB8fCBsb2FkZWROb1JlYWR5U3RhdGUpIHtcbiAgICAgICAgICBwbGF5SHRtbDUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIEJlZ2luIHBsYXliYWNrLlxuICAgICAgICAgICAgcGxheUh0bWw1KCk7XG5cbiAgICAgICAgICAgIC8vIENsZWFyIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoSG93bGVyLl9jYW5QbGF5RXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoSG93bGVyLl9jYW5QbGF5RXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG5cbiAgICAgICAgICAvLyBDYW5jZWwgdGhlIGVuZCB0aW1lci5cbiAgICAgICAgICBzZWxmLl9jbGVhclRpbWVyKHNvdW5kLl9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNvdW5kLl9pZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGF1c2UgcGxheWJhY2sgYW5kIHNhdmUgY3VycmVudCBwb3NpdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBJRCAoZW1wdHkgdG8gcGF1c2UgYWxsIGluIGdyb3VwKS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIHBhdXNlOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCBvciBhIHBsYXkoKSBwcm9taXNlIGlzIHBlbmRpbmcsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBwYXVzZSB3aGVuIGNhcGFibGUuXG4gICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnIHx8IHNlbGYuX3BsYXlMb2NrKSB7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAncGF1c2UnLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnBhdXNlKGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBpZCBpcyBwYXNzZWQsIGdldCBhbGwgSUQncyB0byBiZSBwYXVzZWQuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBlbmQgdGltZXIuXG4gICAgICAgIHNlbGYuX2NsZWFyVGltZXIoaWRzW2ldKTtcblxuICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgICBpZiAoc291bmQgJiYgIXNvdW5kLl9wYXVzZWQpIHtcbiAgICAgICAgICAvLyBSZXNldCB0aGUgc2VlayBwb3NpdGlvbi5cbiAgICAgICAgICBzb3VuZC5fc2VlayA9IHNlbGYuc2VlayhpZHNbaV0pO1xuICAgICAgICAgIHNvdW5kLl9yYXRlU2VlayA9IDA7XG4gICAgICAgICAgc291bmQuX3BhdXNlZCA9IHRydWU7XG5cbiAgICAgICAgICAvLyBTdG9wIGN1cnJlbnRseSBydW5uaW5nIGZhZGVzLlxuICAgICAgICAgIHNlbGYuX3N0b3BGYWRlKGlkc1tpXSk7XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHNvdW5kIGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICAgICAgICAgIGlmICghc291bmQuX25vZGUuYnVmZmVyU291cmNlKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5zdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5ub3RlT2ZmKDApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5zdG9wKDApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICAgICAgICAgIHNlbGYuX2NsZWFuQnVmZmVyKHNvdW5kLl9ub2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKHNvdW5kLl9ub2RlLmR1cmF0aW9uKSB8fCBzb3VuZC5fbm9kZS5kdXJhdGlvbiA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUucGF1c2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIHRoZSBwYXVzZSBldmVudCwgdW5sZXNzIGB0cnVlYCBpcyBwYXNzZWQgYXMgdGhlIDJuZCBhcmd1bWVudC5cbiAgICAgICAgaWYgKCFhcmd1bWVudHNbMV0pIHtcbiAgICAgICAgICBzZWxmLl9lbWl0KCdwYXVzZScsIHNvdW5kID8gc291bmQuX2lkIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0b3AgcGxheWJhY2sgYW5kIHJlc2V0IHRvIHN0YXJ0LlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgVGhlIHNvdW5kIElEIChlbXB0eSB0byBzdG9wIGFsbCBpbiBncm91cCkuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gaW50ZXJuYWwgSW50ZXJuYWwgVXNlOiB0cnVlIHByZXZlbnRzIGV2ZW50IGZpcmluZy5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uKGlkLCBpbnRlcm5hbCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIHN0b3Agd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3N0b3AnLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnN0b3AoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGlkIGlzIHBhc3NlZCwgZ2V0IGFsbCBJRCdzIHRvIGJlIHN0b3BwZWQuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBlbmQgdGltZXIuXG4gICAgICAgIHNlbGYuX2NsZWFyVGltZXIoaWRzW2ldKTtcblxuICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICAvLyBSZXNldCB0aGUgc2VlayBwb3NpdGlvbi5cbiAgICAgICAgICBzb3VuZC5fc2VlayA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICAgIHNvdW5kLl9yYXRlU2VlayA9IDA7XG4gICAgICAgICAgc291bmQuX3BhdXNlZCA9IHRydWU7XG4gICAgICAgICAgc291bmQuX2VuZGVkID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIFN0b3AgY3VycmVudGx5IHJ1bm5pbmcgZmFkZXMuXG4gICAgICAgICAgc2VsZi5fc3RvcEZhZGUoaWRzW2ldKTtcblxuICAgICAgICAgIGlmIChzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgc291bmQncyBBdWRpb0J1ZmZlclNvdXJjZU5vZGUgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgICAgICAgICAgaWYgKHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQuX25vZGUuYnVmZmVyU291cmNlLnN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uubm90ZU9mZigwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLnN0b3AoMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICAgICAgICAgICAgc2VsZi5fY2xlYW5CdWZmZXIoc291bmQuX25vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihzb3VuZC5fbm9kZS5kdXJhdGlvbikgfHwgc291bmQuX25vZGUuZHVyYXRpb24gPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmN1cnJlbnRUaW1lID0gc291bmQuX3N0YXJ0IHx8IDA7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgICAgc2VsZi5fZW1pdCgnc3RvcCcsIHNvdW5kLl9pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNdXRlL3VubXV0ZSBhIHNpbmdsZSBzb3VuZCBvciBhbGwgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBtdXRlZCBTZXQgdG8gdHJ1ZSB0byBtdXRlIGFuZCBmYWxzZSB0byB1bm11dGUuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAgICBUaGUgc291bmQgSUQgdG8gdXBkYXRlIChvbWl0IHRvIG11dGUvdW5tdXRlIGFsbCkuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBtdXRlOiBmdW5jdGlvbihtdXRlZCwgaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBtdXRlIHdoZW4gY2FwYWJsZS5cbiAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdtdXRlJyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5tdXRlKG11dGVkLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXBwbHlpbmcgbXV0ZS91bm11dGUgdG8gYWxsIHNvdW5kcywgdXBkYXRlIHRoZSBncm91cCdzIHZhbHVlLlxuICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtdXRlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgc2VsZi5fbXV0ZWQgPSBtdXRlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5fbXV0ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gaWQgaXMgcGFzc2VkLCBnZXQgYWxsIElEJ3MgdG8gYmUgbXV0ZWQuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAgIHNvdW5kLl9tdXRlZCA9IG11dGVkO1xuXG4gICAgICAgICAgLy8gQ2FuY2VsIGFjdGl2ZSBmYWRlIGFuZCBzZXQgdGhlIHZvbHVtZSB0byB0aGUgZW5kIHZhbHVlLlxuICAgICAgICAgIGlmIChzb3VuZC5faW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHNlbGYuX3N0b3BGYWRlKHNvdW5kLl9pZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKG11dGVkID8gMCA6IHNvdW5kLl92b2x1bWUsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLm11dGVkID0gSG93bGVyLl9tdXRlZCA/IHRydWUgOiBtdXRlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLl9lbWl0KCdtdXRlJywgc291bmQuX2lkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0L3NldCB0aGUgdm9sdW1lIG9mIHRoaXMgc291bmQgb3Igb2YgdGhlIEhvd2wgZ3JvdXAuIFRoaXMgbWV0aG9kIGNhbiBvcHRpb25hbGx5IHRha2UgMCwgMSBvciAyIGFyZ3VtZW50cy5cbiAgICAgKiAgIHZvbHVtZSgpIC0+IFJldHVybnMgdGhlIGdyb3VwJ3Mgdm9sdW1lIHZhbHVlLlxuICAgICAqICAgdm9sdW1lKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIGN1cnJlbnQgdm9sdW1lLlxuICAgICAqICAgdm9sdW1lKHZvbCkgLT4gU2V0cyB0aGUgdm9sdW1lIG9mIGFsbCBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAqICAgdm9sdW1lKHZvbCwgaWQpIC0+IFNldHMgdGhlIHZvbHVtZSBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAgICogQHJldHVybiB7SG93bC9OdW1iZXJ9IFJldHVybnMgc2VsZiBvciBjdXJyZW50IHZvbHVtZS5cbiAgICAgKi9cbiAgICB2b2x1bWU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgdm9sLCBpZDtcblxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZXMgYmFzZWQgb24gYXJndW1lbnRzLlxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgdmFsdWUgb2YgdGhlIGdyb3Vwcycgdm9sdW1lLlxuICAgICAgICByZXR1cm4gc2VsZi5fdm9sdW1lO1xuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSB8fCBhcmdzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgYXJnc1sxXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhpcyBpcyBhbiBJRCwgYW5kIGlmIG5vdCwgYXNzdW1lIGl0IGlzIGEgbmV3IHZvbHVtZS5cbiAgICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKCk7XG4gICAgICAgIHZhciBpbmRleCA9IGlkcy5pbmRleE9mKGFyZ3NbMF0pO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1swXSwgMTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZvbCA9IHBhcnNlRmxvYXQoYXJnc1swXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPj0gMikge1xuICAgICAgICB2b2wgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHRoZSB2b2x1bWUgb3IgcmV0dXJuIHRoZSBjdXJyZW50IHZvbHVtZS5cbiAgICAgIHZhciBzb3VuZDtcbiAgICAgIGlmICh0eXBlb2Ygdm9sICE9PSAndW5kZWZpbmVkJyAmJiB2b2wgPj0gMCAmJiB2b2wgPD0gMSkge1xuICAgICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGNoYW5nZSB2b2x1bWUgd2hlbiBjYXBhYmxlLlxuICAgICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgICBldmVudDogJ3ZvbHVtZScsXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzZWxmLnZvbHVtZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBncm91cCB2b2x1bWUuXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgc2VsZi5fdm9sdW1lID0gdm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIG9uZSBvciBhbGwgdm9sdW1lcy5cbiAgICAgICAgaWQgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICAgICAgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRbaV0pO1xuXG4gICAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgICBzb3VuZC5fdm9sdW1lID0gdm9sO1xuXG4gICAgICAgICAgICAvLyBTdG9wIGN1cnJlbnRseSBydW5uaW5nIGZhZGVzLlxuICAgICAgICAgICAgaWYgKCFhcmdzWzJdKSB7XG4gICAgICAgICAgICAgIHNlbGYuX3N0b3BGYWRlKGlkW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlICYmICFzb3VuZC5fbXV0ZWQpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZSh2b2wsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3VuZC5fbm9kZSAmJiAhc291bmQuX211dGVkKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLnZvbHVtZSA9IHZvbCAqIEhvd2xlci52b2x1bWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5fZW1pdCgndm9sdW1lJywgc291bmQuX2lkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdW5kID0gaWQgPyBzZWxmLl9zb3VuZEJ5SWQoaWQpIDogc2VsZi5fc291bmRzWzBdO1xuICAgICAgICByZXR1cm4gc291bmQgPyBzb3VuZC5fdm9sdW1lIDogMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZhZGUgYSBjdXJyZW50bHkgcGxheWluZyBzb3VuZCBiZXR3ZWVuIHR3byB2b2x1bWVzIChpZiBubyBpZCBpcyBwYXNzc2VkLCBhbGwgc291bmRzIHdpbGwgZmFkZSkuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBmcm9tIFRoZSB2YWx1ZSB0byBmYWRlIGZyb20gKDAuMCB0byAxLjApLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdG8gICBUaGUgdm9sdW1lIHRvIGZhZGUgdG8gKDAuMCB0byAxLjApLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbGVuICBUaW1lIGluIG1pbGxpc2Vjb25kcyB0byBmYWRlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgICBUaGUgc291bmQgaWQgKG9taXQgdG8gZmFkZSBhbGwgc291bmRzKS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIGZhZGU6IGZ1bmN0aW9uKGZyb20sIHRvLCBsZW4sIGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gZmFkZSB3aGVuIGNhcGFibGUuXG4gICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAnZmFkZScsXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuZmFkZShmcm9tLCB0bywgbGVuLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IHRoZSB2b2x1bWUgdG8gdGhlIHN0YXJ0IHBvc2l0aW9uLlxuICAgICAgc2VsZi52b2x1bWUoZnJvbSwgaWQpO1xuXG4gICAgICAvLyBGYWRlIHRoZSB2b2x1bWUgb2Ygb25lIG9yIGFsbCBzb3VuZHMuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBsaW5lYXIgZmFkZSBvciBmYWxsIGJhY2sgdG8gdGltZW91dHMgd2l0aCBIVE1MNSBBdWRpby5cbiAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgLy8gU3RvcCB0aGUgcHJldmlvdXMgZmFkZSBpZiBubyBzcHJpdGUgaXMgYmVpbmcgdXNlZCAob3RoZXJ3aXNlLCB2b2x1bWUgaGFuZGxlcyB0aGlzKS5cbiAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICBzZWxmLl9zdG9wRmFkZShpZHNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHdlIGFyZSB1c2luZyBXZWIgQXVkaW8sIGxldCB0aGUgbmF0aXZlIG1ldGhvZHMgZG8gdGhlIGFjdHVhbCBmYWRlLlxuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiAhc291bmQuX211dGVkKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdmFyIGVuZCA9IGN1cnJlbnRUaW1lICsgKGxlbiAvIDEwMDApO1xuICAgICAgICAgICAgc291bmQuX3ZvbHVtZSA9IGZyb207XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKGZyb20sIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUodG8sIGVuZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fc3RhcnRGYWRlSW50ZXJ2YWwoc291bmQsIGZyb20sIHRvLCBsZW4sIGlkc1tpXSwgdHlwZW9mIGlkID09PSAndW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgaW50ZXJuYWwgaW50ZXJ2YWwgdG8gZmFkZSBhIHNvdW5kLlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gc291bmQgUmVmZXJlbmNlIHRvIHNvdW5kIHRvIGZhZGUuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBmcm9tIFRoZSB2YWx1ZSB0byBmYWRlIGZyb20gKDAuMCB0byAxLjApLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdG8gICBUaGUgdm9sdW1lIHRvIGZhZGUgdG8gKDAuMCB0byAxLjApLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gbGVuICBUaW1lIGluIG1pbGxpc2Vjb25kcyB0byBmYWRlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgICBUaGUgc291bmQgaWQgdG8gZmFkZS5cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBpc0dyb3VwICAgSWYgdHJ1ZSwgc2V0IHRoZSB2b2x1bWUgb24gdGhlIGdyb3VwLlxuICAgICAqL1xuICAgIF9zdGFydEZhZGVJbnRlcnZhbDogZnVuY3Rpb24oc291bmQsIGZyb20sIHRvLCBsZW4sIGlkLCBpc0dyb3VwKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgdm9sID0gZnJvbTtcbiAgICAgIHZhciBkaWZmID0gdG8gLSBmcm9tO1xuICAgICAgdmFyIHN0ZXBzID0gTWF0aC5hYnMoZGlmZiAvIDAuMDEpO1xuICAgICAgdmFyIHN0ZXBMZW4gPSBNYXRoLm1heCg0LCAoc3RlcHMgPiAwKSA/IGxlbiAvIHN0ZXBzIDogbGVuKTtcbiAgICAgIHZhciBsYXN0VGljayA9IERhdGUubm93KCk7XG5cbiAgICAgIC8vIFN0b3JlIHRoZSB2YWx1ZSBiZWluZyBmYWRlZCB0by5cbiAgICAgIHNvdW5kLl9mYWRlVG8gPSB0bztcblxuICAgICAgLy8gVXBkYXRlIHRoZSB2b2x1bWUgdmFsdWUgb24gZWFjaCBpbnRlcnZhbCB0aWNrLlxuICAgICAgc291bmQuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdm9sdW1lIGJhc2VkIG9uIHRoZSB0aW1lIHNpbmNlIHRoZSBsYXN0IHRpY2suXG4gICAgICAgIHZhciB0aWNrID0gKERhdGUubm93KCkgLSBsYXN0VGljaykgLyBsZW47XG4gICAgICAgIGxhc3RUaWNrID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdm9sICs9IGRpZmYgKiB0aWNrO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdm9sdW1lIGlzIGluIHRoZSByaWdodCBib3VuZHMuXG4gICAgICAgIHZvbCA9IE1hdGgubWF4KDAsIHZvbCk7XG4gICAgICAgIHZvbCA9IE1hdGgubWluKDEsIHZvbCk7XG5cbiAgICAgICAgLy8gUm91bmQgdG8gd2l0aGluIDIgZGVjaW1hbCBwb2ludHMuXG4gICAgICAgIHZvbCA9IE1hdGgucm91bmQodm9sICogMTAwKSAvIDEwMDtcblxuICAgICAgICAvLyBDaGFuZ2UgdGhlIHZvbHVtZS5cbiAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgc291bmQuX3ZvbHVtZSA9IHZvbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLnZvbHVtZSh2b2wsIHNvdW5kLl9pZCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGhlIGdyb3VwJ3Mgdm9sdW1lLlxuICAgICAgICBpZiAoaXNHcm91cCkge1xuICAgICAgICAgIHNlbGYuX3ZvbHVtZSA9IHZvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gdGhlIGZhZGUgaXMgY29tcGxldGUsIHN0b3AgaXQgYW5kIGZpcmUgZXZlbnQuXG4gICAgICAgIGlmICgodG8gPCBmcm9tICYmIHZvbCA8PSB0bykgfHwgKHRvID4gZnJvbSAmJiB2b2wgPj0gdG8pKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChzb3VuZC5faW50ZXJ2YWwpO1xuICAgICAgICAgIHNvdW5kLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICAgICAgc291bmQuX2ZhZGVUbyA9IG51bGw7XG4gICAgICAgICAgc2VsZi52b2x1bWUodG8sIHNvdW5kLl9pZCk7XG4gICAgICAgICAgc2VsZi5fZW1pdCgnZmFkZScsIHNvdW5kLl9pZCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHN0ZXBMZW4pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBtZXRob2QgdGhhdCBzdG9wcyB0aGUgY3VycmVudGx5IHBsYXlpbmcgZmFkZSB3aGVuXG4gICAgICogYSBuZXcgZmFkZSBzdGFydHMsIHZvbHVtZSBpcyBjaGFuZ2VkIG9yIHRoZSBzb3VuZCBpcyBzdG9wcGVkLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgVGhlIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX3N0b3BGYWRlOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcblxuICAgICAgaWYgKHNvdW5kICYmIHNvdW5kLl9pbnRlcnZhbCkge1xuICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLmNhbmNlbFNjaGVkdWxlZFZhbHVlcyhIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc291bmQuX2ludGVydmFsKTtcbiAgICAgICAgc291bmQuX2ludGVydmFsID0gbnVsbDtcbiAgICAgICAgc2VsZi52b2x1bWUoc291bmQuX2ZhZGVUbywgaWQpO1xuICAgICAgICBzb3VuZC5fZmFkZVRvID0gbnVsbDtcbiAgICAgICAgc2VsZi5fZW1pdCgnZmFkZScsIGlkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldC9zZXQgdGhlIGxvb3AgcGFyYW1ldGVyIG9uIGEgc291bmQuIFRoaXMgbWV0aG9kIGNhbiBvcHRpb25hbGx5IHRha2UgMCwgMSBvciAyIGFyZ3VtZW50cy5cbiAgICAgKiAgIGxvb3AoKSAtPiBSZXR1cm5zIHRoZSBncm91cCdzIGxvb3AgdmFsdWUuXG4gICAgICogICBsb29wKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIGxvb3AgdmFsdWUuXG4gICAgICogICBsb29wKGxvb3ApIC0+IFNldHMgdGhlIGxvb3AgdmFsdWUgZm9yIGFsbCBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAqICAgbG9vcChsb29wLCBpZCkgLT4gU2V0cyB0aGUgbG9vcCB2YWx1ZSBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAgICogQHJldHVybiB7SG93bC9Cb29sZWFufSBSZXR1cm5zIHNlbGYgb3IgY3VycmVudCBsb29wIHZhbHVlLlxuICAgICAqL1xuICAgIGxvb3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgbG9vcCwgaWQsIHNvdW5kO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIHZhbHVlcyBmb3IgbG9vcCBhbmQgaWQuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBncm91J3MgbG9vcCB2YWx1ZS5cbiAgICAgICAgcmV0dXJuIHNlbGYuX2xvb3A7XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgbG9vcCA9IGFyZ3NbMF07XG4gICAgICAgICAgc2VsZi5fbG9vcCA9IGxvb3A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmV0dXJuIHRoaXMgc291bmQncyBsb29wIHZhbHVlLlxuICAgICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKHBhcnNlSW50KGFyZ3NbMF0sIDEwKSk7XG4gICAgICAgICAgcmV0dXJuIHNvdW5kID8gc291bmQuX2xvb3AgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBsb29wID0gYXJnc1swXTtcbiAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGlkIGlzIHBhc3NlZCwgZ2V0IGFsbCBJRCdzIHRvIGJlIGxvb3BlZC5cbiAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgc291bmQuX2xvb3AgPSBsb29wO1xuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSAmJiBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UpIHtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wID0gbG9vcDtcbiAgICAgICAgICAgIGlmIChsb29wKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wU3RhcnQgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmxvb3BFbmQgPSBzb3VuZC5fc3RvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldC9zZXQgdGhlIHBsYXliYWNrIHJhdGUgb2YgYSBzb3VuZC4gVGhpcyBtZXRob2QgY2FuIG9wdGlvbmFsbHkgdGFrZSAwLCAxIG9yIDIgYXJndW1lbnRzLlxuICAgICAqICAgcmF0ZSgpIC0+IFJldHVybnMgdGhlIGZpcnN0IHNvdW5kIG5vZGUncyBjdXJyZW50IHBsYXliYWNrIHJhdGUuXG4gICAgICogICByYXRlKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIGN1cnJlbnQgcGxheWJhY2sgcmF0ZS5cbiAgICAgKiAgIHJhdGUocmF0ZSkgLT4gU2V0cyB0aGUgcGxheWJhY2sgcmF0ZSBvZiBhbGwgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgKiAgIHJhdGUocmF0ZSwgaWQpIC0+IFNldHMgdGhlIHBsYXliYWNrIHJhdGUgb2YgcGFzc2VkIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2wvTnVtYmVyfSBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgcGxheWJhY2sgcmF0ZS5cbiAgICAgKi9cbiAgICByYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIHJhdGUsIGlkO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIHZhbHVlcyBiYXNlZCBvbiBhcmd1bWVudHMuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gV2Ugd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IHJhdGUgb2YgdGhlIGZpcnN0IG5vZGUuXG4gICAgICAgIGlkID0gc2VsZi5fc291bmRzWzBdLl9pZDtcbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhpcyBpcyBhbiBJRCwgYW5kIGlmIG5vdCwgYXNzdW1lIGl0IGlzIGEgbmV3IHJhdGUgdmFsdWUuXG4gICAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcygpO1xuICAgICAgICB2YXIgaW5kZXggPSBpZHMuaW5kZXhPZihhcmdzWzBdKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMF0sIDEwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByYXRlID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICByYXRlID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgcGxheWJhY2sgcmF0ZSBvciByZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICB2YXIgc291bmQ7XG4gICAgICBpZiAodHlwZW9mIHJhdGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gY2hhbmdlIHBsYXliYWNrIHJhdGUgd2hlbiBjYXBhYmxlLlxuICAgICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgICBldmVudDogJ3JhdGUnLFxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc2VsZi5yYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGhlIGdyb3VwIHJhdGUuXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgc2VsZi5fcmF0ZSA9IHJhdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgb25lIG9yIGFsbCB2b2x1bWVzLlxuICAgICAgICBpZCA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZFtpXSk7XG5cbiAgICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICAgIC8vIEtlZXAgdHJhY2sgb2Ygb3VyIHBvc2l0aW9uIHdoZW4gdGhlIHJhdGUgY2hhbmdlZCBhbmQgdXBkYXRlIHRoZSBwbGF5YmFja1xuICAgICAgICAgICAgLy8gc3RhcnQgcG9zaXRpb24gc28gd2UgY2FuIHByb3Blcmx5IGFkanVzdCB0aGUgc2VlayBwb3NpdGlvbiBmb3IgdGltZSBlbGFwc2VkLlxuICAgICAgICAgICAgc291bmQuX3JhdGVTZWVrID0gc2VsZi5zZWVrKGlkW2ldKTtcbiAgICAgICAgICAgIHNvdW5kLl9wbGF5U3RhcnQgPSBzZWxmLl93ZWJBdWRpbyA/IEhvd2xlci5jdHguY3VycmVudFRpbWUgOiBzb3VuZC5fcGxheVN0YXJ0O1xuICAgICAgICAgICAgc291bmQuX3JhdGUgPSByYXRlO1xuXG4gICAgICAgICAgICAvLyBDaGFuZ2UgdGhlIHBsYXliYWNrIHJhdGUuXG4gICAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUgJiYgc291bmQuX25vZGUuYnVmZmVyU291cmNlKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5wbGF5YmFja1JhdGUuc2V0VmFsdWVBdFRpbWUocmF0ZSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLnBsYXliYWNrUmF0ZSA9IHJhdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlc2V0IHRoZSB0aW1lcnMuXG4gICAgICAgICAgICB2YXIgc2VlayA9IHNlbGYuc2VlayhpZFtpXSk7XG4gICAgICAgICAgICB2YXIgZHVyYXRpb24gPSAoKHNlbGYuX3Nwcml0ZVtzb3VuZC5fc3ByaXRlXVswXSArIHNlbGYuX3Nwcml0ZVtzb3VuZC5fc3ByaXRlXVsxXSkgLyAxMDAwKSAtIHNlZWs7XG4gICAgICAgICAgICB2YXIgdGltZW91dCA9IChkdXJhdGlvbiAqIDEwMDApIC8gTWF0aC5hYnMoc291bmQuX3JhdGUpO1xuXG4gICAgICAgICAgICAvLyBTdGFydCBhIG5ldyBlbmQgdGltZXIgaWYgc291bmQgaXMgYWxyZWFkeSBwbGF5aW5nLlxuICAgICAgICAgICAgaWYgKHNlbGYuX2VuZFRpbWVyc1tpZFtpXV0gfHwgIXNvdW5kLl9wYXVzZWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihpZFtpXSk7XG4gICAgICAgICAgICAgIHNlbGYuX2VuZFRpbWVyc1tpZFtpXV0gPSBzZXRUaW1lb3V0KHNlbGYuX2VuZGVkLmJpbmQoc2VsZiwgc291bmQpLCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5fZW1pdCgncmF0ZScsIHNvdW5kLl9pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG4gICAgICAgIHJldHVybiBzb3VuZCA/IHNvdW5kLl9yYXRlIDogc2VsZi5fcmF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldC9zZXQgdGhlIHNlZWsgcG9zaXRpb24gb2YgYSBzb3VuZC4gVGhpcyBtZXRob2QgY2FuIG9wdGlvbmFsbHkgdGFrZSAwLCAxIG9yIDIgYXJndW1lbnRzLlxuICAgICAqICAgc2VlaygpIC0+IFJldHVybnMgdGhlIGZpcnN0IHNvdW5kIG5vZGUncyBjdXJyZW50IHNlZWsgcG9zaXRpb24uXG4gICAgICogICBzZWVrKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIGN1cnJlbnQgc2VlayBwb3NpdGlvbi5cbiAgICAgKiAgIHNlZWsoc2VlaykgLT4gU2V0cyB0aGUgc2VlayBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgc291bmQgbm9kZS5cbiAgICAgKiAgIHNlZWsoc2VlaywgaWQpIC0+IFNldHMgdGhlIHNlZWsgcG9zaXRpb24gb2YgcGFzc2VkIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2wvTnVtYmVyfSBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgc2VlayBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBzZWVrOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIHNlZWssIGlkO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIHZhbHVlcyBiYXNlZCBvbiBhcmd1bWVudHMuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gV2Ugd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBub2RlLlxuICAgICAgICBpZCA9IHNlbGYuX3NvdW5kc1swXS5faWQ7XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoaXMgaXMgYW4gSUQsIGFuZCBpZiBub3QsIGFzc3VtZSBpdCBpcyBhIG5ldyBzZWVrIHBvc2l0aW9uLlxuICAgICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gaWRzLmluZGV4T2YoYXJnc1swXSk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzBdLCAxMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi5fc291bmRzLmxlbmd0aCkge1xuICAgICAgICAgIGlkID0gc2VsZi5fc291bmRzWzBdLl9pZDtcbiAgICAgICAgICBzZWVrID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBzZWVrID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIElELCBiYWlsIG91dC5cbiAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIHNlZWsgd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3NlZWsnLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnNlZWsuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG5cbiAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICBpZiAodHlwZW9mIHNlZWsgPT09ICdudW1iZXInICYmIHNlZWsgPj0gMCkge1xuICAgICAgICAgIC8vIFBhdXNlIHRoZSBzb3VuZCBhbmQgdXBkYXRlIHBvc2l0aW9uIGZvciByZXN0YXJ0aW5nIHBsYXliYWNrLlxuICAgICAgICAgIHZhciBwbGF5aW5nID0gc2VsZi5wbGF5aW5nKGlkKTtcbiAgICAgICAgICBpZiAocGxheWluZykge1xuICAgICAgICAgICAgc2VsZi5wYXVzZShpZCwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTW92ZSB0aGUgcG9zaXRpb24gb2YgdGhlIHRyYWNrIGFuZCBjYW5jZWwgdGltZXIuXG4gICAgICAgICAgc291bmQuX3NlZWsgPSBzZWVrO1xuICAgICAgICAgIHNvdW5kLl9lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYuX2NsZWFyVGltZXIoaWQpO1xuXG4gICAgICAgICAgLy8gUmVzdGFydCB0aGUgcGxheWJhY2sgaWYgdGhlIHNvdW5kIHdhcyBwbGF5aW5nLlxuICAgICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXkoaWQsIHRydWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc2VlayBwb3NpdGlvbiBmb3IgSFRNTDUgQXVkaW8uXG4gICAgICAgICAgaWYgKCFzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgc291bmQuX25vZGUuY3VycmVudFRpbWUgPSBzZWVrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFdhaXQgZm9yIHRoZSBwbGF5IGxvY2sgdG8gYmUgdW5zZXQgYmVmb3JlIGVtaXR0aW5nIChIVE1MNSBBdWRpbykuXG4gICAgICAgICAgaWYgKHBsYXlpbmcgJiYgIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICB2YXIgZW1pdFNlZWsgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKCFzZWxmLl9wbGF5TG9jaykge1xuICAgICAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3NlZWsnLCBpZCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChlbWl0U2VlaywgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGVtaXRTZWVrLCAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5fZW1pdCgnc2VlaycsIGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICB2YXIgcmVhbFRpbWUgPSBzZWxmLnBsYXlpbmcoaWQpID8gSG93bGVyLmN0eC5jdXJyZW50VGltZSAtIHNvdW5kLl9wbGF5U3RhcnQgOiAwO1xuICAgICAgICAgICAgdmFyIHJhdGVTZWVrID0gc291bmQuX3JhdGVTZWVrID8gc291bmQuX3JhdGVTZWVrIC0gc291bmQuX3NlZWsgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIHNvdW5kLl9zZWVrICsgKHJhdGVTZWVrICsgcmVhbFRpbWUgKiBNYXRoLmFicyhzb3VuZC5fcmF0ZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc291bmQuX25vZGUuY3VycmVudFRpbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIHNwZWNpZmljIHNvdW5kIGlzIGN1cnJlbnRseSBwbGF5aW5nIG9yIG5vdCAoaWYgaWQgaXMgcHJvdmlkZWQpLCBvciBjaGVjayBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlIHNvdW5kcyBpbiB0aGUgZ3JvdXAgaXMgcGxheWluZyBvciBub3QuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgaWQgVGhlIHNvdW5kIGlkIHRvIGNoZWNrLiBJZiBub25lIGlzIHBhc3NlZCwgdGhlIHdob2xlIHNvdW5kIGdyb3VwIGlzIGNoZWNrZWQuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBwbGF5aW5nIGFuZCBmYWxzZSBpZiBub3QuXG4gICAgICovXG4gICAgcGxheWluZzogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gQ2hlY2sgdGhlIHBhc3NlZCBzb3VuZCBJRCAoaWYgYW55KS5cbiAgICAgIGlmICh0eXBlb2YgaWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG4gICAgICAgIHJldHVybiBzb3VuZCA/ICFzb3VuZC5fcGF1c2VkIDogZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgbG9vcCB0aHJvdWdoIGFsbCBzb3VuZHMgYW5kIGNoZWNrIGlmIGFueSBhcmUgcGxheWluZy5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9zb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFzZWxmLl9zb3VuZHNbaV0uX3BhdXNlZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkdXJhdGlvbiBvZiB0aGlzIHNvdW5kLiBQYXNzaW5nIGEgc291bmQgaWQgd2lsbCByZXR1cm4gdGhlIHNwcml0ZSBkdXJhdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBpZCB0byBjaGVjay4gSWYgbm9uZSBpcyBwYXNzZWQsIHJldHVybiBmdWxsIHNvdXJjZSBkdXJhdGlvbi5cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEF1ZGlvIGR1cmF0aW9uIGluIHNlY29uZHMuXG4gICAgICovXG4gICAgZHVyYXRpb246IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZHVyYXRpb24gPSBzZWxmLl9kdXJhdGlvbjtcblxuICAgICAgLy8gSWYgd2UgcGFzcyBhbiBJRCwgZ2V0IHRoZSBzb3VuZCBhbmQgcmV0dXJuIHRoZSBzcHJpdGUgbGVuZ3RoLlxuICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcbiAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICBkdXJhdGlvbiA9IHNlbGYuX3Nwcml0ZVtzb3VuZC5fc3ByaXRlXVsxXSAvIDEwMDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBsb2FkZWQgc3RhdGUgb2YgdGhpcyBIb3dsLlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gJ3VubG9hZGVkJywgJ2xvYWRpbmcnLCAnbG9hZGVkJ1xuICAgICAqL1xuICAgIHN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVW5sb2FkIGFuZCBkZXN0cm95IHRoZSBjdXJyZW50IEhvd2wgb2JqZWN0LlxuICAgICAqIFRoaXMgd2lsbCBpbW1lZGlhdGVseSBzdG9wIGFsbCBzb3VuZCBpbnN0YW5jZXMgYXR0YWNoZWQgdG8gdGhpcyBncm91cC5cbiAgICAgKi9cbiAgICB1bmxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBTdG9wIHBsYXlpbmcgYW55IGFjdGl2ZSBzb3VuZHMuXG4gICAgICB2YXIgc291bmRzID0gc2VsZi5fc291bmRzO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPHNvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBTdG9wIHRoZSBzb3VuZCBpZiBpdCBpcyBjdXJyZW50bHkgcGxheWluZy5cbiAgICAgICAgaWYgKCFzb3VuZHNbaV0uX3BhdXNlZCkge1xuICAgICAgICAgIHNlbGYuc3RvcChzb3VuZHNbaV0uX2lkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc291cmNlIG9yIGRpc2Nvbm5lY3QuXG4gICAgICAgIGlmICghc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAvLyBTZXQgdGhlIHNvdXJjZSB0byAwLXNlY29uZCBzaWxlbmNlIHRvIHN0b3AgYW55IGRvd25sb2FkaW5nIChleGNlcHQgaW4gSUUpLlxuICAgICAgICAgIHZhciBjaGVja0lFID0gL01TSUUgfFRyaWRlbnRcXC8vLnRlc3QoSG93bGVyLl9uYXZpZ2F0b3IgJiYgSG93bGVyLl9uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgICBpZiAoIWNoZWNrSUUpIHtcbiAgICAgICAgICAgIHNvdW5kc1tpXS5fbm9kZS5zcmMgPSAnZGF0YTphdWRpby93YXY7YmFzZTY0LFVrbEdSaWdBQUFCWFFWWkZabTEwSUJJQUFBQUJBQUVBUkt3QUFJaFlBUUFDQUJBQUFBQmtZWFJoQWdBQUFBRUEnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92ZSBhbnkgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgIHNvdW5kc1tpXS5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHNvdW5kc1tpXS5fZXJyb3JGbiwgZmFsc2UpO1xuICAgICAgICAgIHNvdW5kc1tpXS5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKEhvd2xlci5fY2FuUGxheUV2ZW50LCBzb3VuZHNbaV0uX2xvYWRGbiwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW1wdHkgb3V0IGFsbCBvZiB0aGUgbm9kZXMuXG4gICAgICAgIGRlbGV0ZSBzb3VuZHNbaV0uX25vZGU7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCB0aW1lcnMgYXJlIGNsZWFyZWQgb3V0LlxuICAgICAgICBzZWxmLl9jbGVhclRpbWVyKHNvdW5kc1tpXS5faWQpO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgcmVmZXJlbmNlcyBpbiB0aGUgZ2xvYmFsIEhvd2xlciBvYmplY3QuXG4gICAgICAgIHZhciBpbmRleCA9IEhvd2xlci5faG93bHMuaW5kZXhPZihzZWxmKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBIb3dsZXIuX2hvd2xzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRGVsZXRlIHRoaXMgc291bmQgZnJvbSB0aGUgY2FjaGUgKGlmIG5vIG90aGVyIEhvd2wgaXMgdXNpbmcgaXQpLlxuICAgICAgdmFyIHJlbUNhY2hlID0gdHJ1ZTtcbiAgICAgIGZvciAoaT0wOyBpPEhvd2xlci5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKEhvd2xlci5faG93bHNbaV0uX3NyYyA9PT0gc2VsZi5fc3JjKSB7XG4gICAgICAgICAgcmVtQ2FjaGUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2FjaGUgJiYgcmVtQ2FjaGUpIHtcbiAgICAgICAgZGVsZXRlIGNhY2hlW3NlbGYuX3NyY107XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIGdsb2JhbCBlcnJvcnMuXG4gICAgICBIb3dsZXIubm9BdWRpbyA9IGZhbHNlO1xuXG4gICAgICAvLyBDbGVhciBvdXQgYHNlbGZgLlxuICAgICAgc2VsZi5fc3RhdGUgPSAndW5sb2FkZWQnO1xuICAgICAgc2VsZi5fc291bmRzID0gW107XG4gICAgICBzZWxmID0gbnVsbDtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBhIGN1c3RvbSBldmVudC5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnQgRXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgTGlzdGVuZXIgdG8gY2FsbC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9ICAgaWQgICAgKG9wdGlvbmFsKSBPbmx5IGxpc3RlbiB0byBldmVudHMgZm9yIHRoaXMgc291bmQuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgIG9uY2UgIChJTlRFUk5BTCkgTWFya3MgZXZlbnQgdG8gZmlyZSBvbmx5IG9uY2UuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBvbjogZnVuY3Rpb24oZXZlbnQsIGZuLCBpZCwgb25jZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGV2ZW50cyA9IHNlbGZbJ19vbicgKyBldmVudF07XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXZlbnRzLnB1c2gob25jZSA/IHtpZDogaWQsIGZuOiBmbiwgb25jZTogb25jZX0gOiB7aWQ6IGlkLCBmbjogZm59KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGN1c3RvbSBldmVudC4gQ2FsbCB3aXRob3V0IHBhcmFtZXRlcnMgdG8gcmVtb3ZlIGFsbCBldmVudHMuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50IEV2ZW50IG5hbWUuXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgIExpc3RlbmVyIHRvIHJlbW92ZS4gTGVhdmUgZW1wdHkgdG8gcmVtb3ZlIGFsbC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9ICAgaWQgICAgKG9wdGlvbmFsKSBPbmx5IHJlbW92ZSBldmVudHMgZm9yIHRoaXMgc291bmQuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBvZmY6IGZ1bmN0aW9uKGV2ZW50LCBmbiwgaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBldmVudHMgPSBzZWxmWydfb24nICsgZXZlbnRdO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAvLyBBbGxvdyBwYXNzaW5nIGp1c3QgYW4gZXZlbnQgYW5kIElELlxuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWQgPSBmbjtcbiAgICAgICAgZm4gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm4gfHwgaWQpIHtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGV2ZW50IHN0b3JlIGFuZCByZW1vdmUgdGhlIHBhc3NlZCBmdW5jdGlvbi5cbiAgICAgICAgZm9yIChpPTA7IGk8ZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGlzSWQgPSAoaWQgPT09IGV2ZW50c1tpXS5pZCk7XG4gICAgICAgICAgaWYgKGZuID09PSBldmVudHNbaV0uZm4gJiYgaXNJZCB8fCAhZm4gJiYgaXNJZCkge1xuICAgICAgICAgICAgZXZlbnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudCkge1xuICAgICAgICAvLyBDbGVhciBvdXQgYWxsIGV2ZW50cyBvZiB0aGlzIHR5cGUuXG4gICAgICAgIHNlbGZbJ19vbicgKyBldmVudF0gPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENsZWFyIG91dCBhbGwgZXZlbnRzIG9mIGV2ZXJ5IHR5cGUuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc2VsZik7XG4gICAgICAgIGZvciAoaT0wOyBpPGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoKGtleXNbaV0uaW5kZXhPZignX29uJykgPT09IDApICYmIEFycmF5LmlzQXJyYXkoc2VsZltrZXlzW2ldXSkpIHtcbiAgICAgICAgICAgIHNlbGZba2V5c1tpXV0gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBhIGN1c3RvbSBldmVudCBhbmQgcmVtb3ZlIGl0IG9uY2UgZmlyZWQuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50IEV2ZW50IG5hbWUuXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgIExpc3RlbmVyIHRvIGNhbGwuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgIGlkICAgIChvcHRpb25hbCkgT25seSBsaXN0ZW4gdG8gZXZlbnRzIGZvciB0aGlzIHNvdW5kLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgb25jZTogZnVuY3Rpb24oZXZlbnQsIGZuLCBpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBTZXR1cCB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICBzZWxmLm9uKGV2ZW50LCBmbiwgaWQsIDEpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRW1pdCBhbGwgZXZlbnRzIG9mIGEgc3BlY2lmaWMgdHlwZSBhbmQgcGFzcyB0aGUgc291bmQgaWQuXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBldmVudCBFdmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgICAgU291bmQgSUQuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBtc2cgICBNZXNzYWdlIHRvIGdvIHdpdGggZXZlbnQuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfZW1pdDogZnVuY3Rpb24oZXZlbnQsIGlkLCBtc2cpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBldmVudHMgPSBzZWxmWydfb24nICsgZXZlbnRdO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggZXZlbnQgc3RvcmUgYW5kIGZpcmUgYWxsIGZ1bmN0aW9ucy5cbiAgICAgIGZvciAodmFyIGk9ZXZlbnRzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgLy8gT25seSBmaXJlIHRoZSBsaXN0ZW5lciBpZiB0aGUgY29ycmVjdCBJRCBpcyB1c2VkLlxuICAgICAgICBpZiAoIWV2ZW50c1tpXS5pZCB8fCBldmVudHNbaV0uaWQgPT09IGlkIHx8IGV2ZW50ID09PSAnbG9hZCcpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMsIGlkLCBtc2cpO1xuICAgICAgICAgIH0uYmluZChzZWxmLCBldmVudHNbaV0uZm4pLCAwKTtcblxuICAgICAgICAgIC8vIElmIHRoaXMgZXZlbnQgd2FzIHNldHVwIHdpdGggYG9uY2VgLCByZW1vdmUgaXQuXG4gICAgICAgICAgaWYgKGV2ZW50c1tpXS5vbmNlKSB7XG4gICAgICAgICAgICBzZWxmLm9mZihldmVudCwgZXZlbnRzW2ldLmZuLCBldmVudHNbaV0uaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBQYXNzIHRoZSBldmVudCB0eXBlIGludG8gbG9hZCBxdWV1ZSBzbyB0aGF0IGl0IGNhbiBjb250aW51ZSBzdGVwcGluZy5cbiAgICAgIHNlbGYuX2xvYWRRdWV1ZShldmVudCk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBRdWV1ZSBvZiBhY3Rpb25zIGluaXRpYXRlZCBiZWZvcmUgdGhlIHNvdW5kIGhhcyBsb2FkZWQuXG4gICAgICogVGhlc2Ugd2lsbCBiZSBjYWxsZWQgaW4gc2VxdWVuY2UsIHdpdGggdGhlIG5leHQgb25seSBmaXJpbmdcbiAgICAgKiBhZnRlciB0aGUgcHJldmlvdXMgaGFzIGZpbmlzaGVkIGV4ZWN1dGluZyAoZXZlbiBpZiBhc3luYyBsaWtlIHBsYXkpLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX2xvYWRRdWV1ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKHNlbGYuX3F1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHRhc2sgPSBzZWxmLl9xdWV1ZVswXTtcblxuICAgICAgICAvLyBSZW1vdmUgdGhpcyB0YXNrIGlmIGEgbWF0Y2hpbmcgZXZlbnQgd2FzIHBhc3NlZC5cbiAgICAgICAgaWYgKHRhc2suZXZlbnQgPT09IGV2ZW50KSB7XG4gICAgICAgICAgc2VsZi5fcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICBzZWxmLl9sb2FkUXVldWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1biB0aGUgdGFzayBpZiBubyBldmVudCB0eXBlIGlzIHBhc3NlZC5cbiAgICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICAgIHRhc2suYWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gcGxheWJhY2sgZW5kcyBhdCB0aGUgZW5kIG9mIHRoZSBkdXJhdGlvbi5cbiAgICAgKiBAcGFyYW0gIHtTb3VuZH0gc291bmQgVGhlIHNvdW5kIG9iamVjdCB0byB3b3JrIHdpdGguXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfZW5kZWQ6IGZ1bmN0aW9uKHNvdW5kKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgc3ByaXRlID0gc291bmQuX3Nwcml0ZTtcblxuICAgICAgLy8gSWYgd2UgYXJlIHVzaW5nIElFIGFuZCB0aGVyZSB3YXMgbmV0d29yayBsYXRlbmN5IHdlIG1heSBiZSBjbGlwcGluZ1xuICAgICAgLy8gYXVkaW8gYmVmb3JlIGl0IGNvbXBsZXRlcyBwbGF5aW5nLiBMZXRzIGNoZWNrIHRoZSBub2RlIHRvIG1ha2Ugc3VyZSBpdFxuICAgICAgLy8gYmVsaWV2ZXMgaXQgaGFzIGNvbXBsZXRlZCwgYmVmb3JlIGVuZGluZyB0aGUgcGxheWJhY2suXG4gICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlICYmICFzb3VuZC5fbm9kZS5wYXVzZWQgJiYgIXNvdW5kLl9ub2RlLmVuZGVkICYmIHNvdW5kLl9ub2RlLmN1cnJlbnRUaW1lIDwgc291bmQuX3N0b3ApIHtcbiAgICAgICAgc2V0VGltZW91dChzZWxmLl9lbmRlZC5iaW5kKHNlbGYsIHNvdW5kKSwgMTAwKTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIFNob3VsZCB0aGlzIHNvdW5kIGxvb3A/XG4gICAgICB2YXIgbG9vcCA9ICEhKHNvdW5kLl9sb29wIHx8IHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzJdKTtcblxuICAgICAgLy8gRmlyZSB0aGUgZW5kZWQgZXZlbnQuXG4gICAgICBzZWxmLl9lbWl0KCdlbmQnLCBzb3VuZC5faWQpO1xuXG4gICAgICAvLyBSZXN0YXJ0IHRoZSBwbGF5YmFjayBmb3IgSFRNTDUgQXVkaW8gbG9vcC5cbiAgICAgIGlmICghc2VsZi5fd2ViQXVkaW8gJiYgbG9vcCkge1xuICAgICAgICBzZWxmLnN0b3Aoc291bmQuX2lkLCB0cnVlKS5wbGF5KHNvdW5kLl9pZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlc3RhcnQgdGhpcyB0aW1lciBpZiBvbiBhIFdlYiBBdWRpbyBsb29wLlxuICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmIGxvb3ApIHtcbiAgICAgICAgc2VsZi5fZW1pdCgncGxheScsIHNvdW5kLl9pZCk7XG4gICAgICAgIHNvdW5kLl9zZWVrID0gc291bmQuX3N0YXJ0IHx8IDA7XG4gICAgICAgIHNvdW5kLl9yYXRlU2VlayA9IDA7XG4gICAgICAgIHNvdW5kLl9wbGF5U3RhcnQgPSBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lO1xuXG4gICAgICAgIHZhciB0aW1lb3V0ID0gKChzb3VuZC5fc3RvcCAtIHNvdW5kLl9zdGFydCkgKiAxMDAwKSAvIE1hdGguYWJzKHNvdW5kLl9yYXRlKTtcbiAgICAgICAgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0gPSBzZXRUaW1lb3V0KHNlbGYuX2VuZGVkLmJpbmQoc2VsZiwgc291bmQpLCB0aW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgLy8gTWFyayB0aGUgbm9kZSBhcyBwYXVzZWQuXG4gICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgIWxvb3ApIHtcbiAgICAgICAgc291bmQuX3BhdXNlZCA9IHRydWU7XG4gICAgICAgIHNvdW5kLl9lbmRlZCA9IHRydWU7XG4gICAgICAgIHNvdW5kLl9zZWVrID0gc291bmQuX3N0YXJ0IHx8IDA7XG4gICAgICAgIHNvdW5kLl9yYXRlU2VlayA9IDA7XG4gICAgICAgIHNlbGYuX2NsZWFyVGltZXIoc291bmQuX2lkKTtcblxuICAgICAgICAvLyBDbGVhbiB1cCB0aGUgYnVmZmVyIHNvdXJjZS5cbiAgICAgICAgc2VsZi5fY2xlYW5CdWZmZXIoc291bmQuX25vZGUpO1xuXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gYXV0by1zdXNwZW5kIEF1ZGlvQ29udGV4dCBpZiBubyBzb3VuZHMgYXJlIHN0aWxsIHBsYXlpbmcuXG4gICAgICAgIEhvd2xlci5fYXV0b1N1c3BlbmQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gV2hlbiB1c2luZyBhIHNwcml0ZSwgZW5kIHRoZSB0cmFjay5cbiAgICAgIGlmICghc2VsZi5fd2ViQXVkaW8gJiYgIWxvb3ApIHtcbiAgICAgICAgc2VsZi5zdG9wKHNvdW5kLl9pZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhciB0aGUgZW5kIHRpbWVyIGZvciBhIHNvdW5kIHBsYXliYWNrLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gaWQgVGhlIHNvdW5kIElELlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX2NsZWFyVGltZXI6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmIChzZWxmLl9lbmRUaW1lcnNbaWRdKSB7XG4gICAgICAgIC8vIENsZWFyIHRoZSB0aW1lb3V0IG9yIHJlbW92ZSB0aGUgZW5kZWQgbGlzdGVuZXIuXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5fZW5kVGltZXJzW2lkXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLl9lbmRUaW1lcnNbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWQpO1xuICAgICAgICAgIGlmIChzb3VuZCAmJiBzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgc291bmQuX25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBzZWxmLl9lbmRUaW1lcnNbaWRdLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHNlbGYuX2VuZFRpbWVyc1tpZF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHNvdW5kIGlkZW50aWZpZWQgYnkgdGhpcyBJRCwgb3IgcmV0dXJuIG51bGwuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBTb3VuZCBJRFxuICAgICAqIEByZXR1cm4ge09iamVjdH0gICAgU291bmQgb2JqZWN0IG9yIG51bGwuXG4gICAgICovXG4gICAgX3NvdW5kQnlJZDogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBzb3VuZHMgYW5kIGZpbmQgdGhlIG9uZSB3aXRoIHRoaXMgSUQuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpZCA9PT0gc2VsZi5fc291bmRzW2ldLl9pZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLl9zb3VuZHNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybiBhbiBpbmFjdGl2ZSBzb3VuZCBmcm9tIHRoZSBwb29sIG9yIGNyZWF0ZSBhIG5ldyBvbmUuXG4gICAgICogQHJldHVybiB7U291bmR9IFNvdW5kIHBsYXliYWNrIG9iamVjdC5cbiAgICAgKi9cbiAgICBfaW5hY3RpdmVTb3VuZDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHNlbGYuX2RyYWluKCk7XG5cbiAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IGluYWN0aXZlIG5vZGUgdG8gcmVjeWNsZS5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9zb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGYuX3NvdW5kc1tpXS5fZW5kZWQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5fc291bmRzW2ldLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gaW5hY3RpdmUgbm9kZSB3YXMgZm91bmQsIGNyZWF0ZSBhIG5ldyBvbmUuXG4gICAgICByZXR1cm4gbmV3IFNvdW5kKHNlbGYpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEcmFpbiBleGNlc3MgaW5hY3RpdmUgc291bmRzIGZyb20gdGhlIHBvb2wuXG4gICAgICovXG4gICAgX2RyYWluOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBsaW1pdCA9IHNlbGYuX3Bvb2w7XG4gICAgICB2YXIgY250ID0gMDtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgLy8gSWYgdGhlcmUgYXJlIGxlc3Mgc291bmRzIHRoYW4gdGhlIG1heCBwb29sIHNpemUsIHdlIGFyZSBkb25lLlxuICAgICAgaWYgKHNlbGYuX3NvdW5kcy5sZW5ndGggPCBsaW1pdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENvdW50IHRoZSBudW1iZXIgb2YgaW5hY3RpdmUgc291bmRzLlxuICAgICAgZm9yIChpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxmLl9zb3VuZHNbaV0uX2VuZGVkKSB7XG4gICAgICAgICAgY250Kys7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIGV4Y2VzcyBpbmFjdGl2ZSBzb3VuZHMsIGdvaW5nIGluIHJldmVyc2Ugb3JkZXIuXG4gICAgICBmb3IgKGk9c2VsZi5fc291bmRzLmxlbmd0aCAtIDE7IGk+PTA7IGktLSkge1xuICAgICAgICBpZiAoY250IDw9IGxpbWl0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGYuX3NvdW5kc1tpXS5fZW5kZWQpIHtcbiAgICAgICAgICAvLyBEaXNjb25uZWN0IHRoZSBhdWRpbyBzb3VyY2Ugd2hlbiB1c2luZyBXZWIgQXVkaW8uXG4gICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmIHNlbGYuX3NvdW5kc1tpXS5fbm9kZSkge1xuICAgICAgICAgICAgc2VsZi5fc291bmRzW2ldLl9ub2RlLmRpc2Nvbm5lY3QoMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZlIHNvdW5kcyB1bnRpbCB3ZSBoYXZlIHRoZSBwb29sIHNpemUuXG4gICAgICAgICAgc2VsZi5fc291bmRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBjbnQtLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIElEJ3MgZnJvbSB0aGUgc291bmRzIHBvb2wuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBPbmx5IHJldHVybiBvbmUgSUQgaWYgb25lIGlzIHBhc3NlZC5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gICAgQXJyYXkgb2YgSURzLlxuICAgICAqL1xuICAgIF9nZXRTb3VuZElkczogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGlkcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWRzLnB1c2goc2VsZi5fc291bmRzW2ldLl9pZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtpZF07XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIHNvdW5kIGJhY2sgaW50byB0aGUgYnVmZmVyIHNvdXJjZS5cbiAgICAgKiBAcGFyYW0gIHtTb3VuZH0gc291bmQgVGhlIHNvdW5kIG9iamVjdCB0byB3b3JrIHdpdGguXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfcmVmcmVzaEJ1ZmZlcjogZnVuY3Rpb24oc291bmQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gU2V0dXAgdGhlIGJ1ZmZlciBzb3VyY2UgZm9yIHBsYXliYWNrLlxuICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlID0gSG93bGVyLmN0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5idWZmZXIgPSBjYWNoZVtzZWxmLl9zcmNdO1xuXG4gICAgICAvLyBDb25uZWN0IHRvIHRoZSBjb3JyZWN0IG5vZGUuXG4gICAgICBpZiAoc291bmQuX3Bhbm5lcikge1xuICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UuY29ubmVjdChzb3VuZC5fcGFubmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5jb25uZWN0KHNvdW5kLl9ub2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXAgbG9vcGluZyBhbmQgcGxheWJhY2sgcmF0ZS5cbiAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wID0gc291bmQuX2xvb3A7XG4gICAgICBpZiAoc291bmQuX2xvb3ApIHtcbiAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmxvb3BTdGFydCA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcEVuZCA9IHNvdW5kLl9zdG9wO1xuICAgICAgfVxuICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLnBsYXliYWNrUmF0ZS5zZXRWYWx1ZUF0VGltZShzb3VuZC5fcmF0ZSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQcmV2ZW50IG1lbW9yeSBsZWFrcyBieSBjbGVhbmluZyB1cCB0aGUgYnVmZmVyIHNvdXJjZSBhZnRlciBwbGF5YmFjay5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IG5vZGUgU291bmQncyBhdWRpbyBub2RlIGNvbnRhaW5pbmcgdGhlIGJ1ZmZlciBzb3VyY2UuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfY2xlYW5CdWZmZXI6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKEhvd2xlci5fc2NyYXRjaEJ1ZmZlcikge1xuICAgICAgICBub2RlLmJ1ZmZlclNvdXJjZS5vbmVuZGVkID0gbnVsbDtcbiAgICAgICAgbm9kZS5idWZmZXJTb3VyY2UuZGlzY29ubmVjdCgwKTtcbiAgICAgICAgdHJ5IHsgbm9kZS5idWZmZXJTb3VyY2UuYnVmZmVyID0gSG93bGVyLl9zY3JhdGNoQnVmZmVyOyB9IGNhdGNoKGUpIHt9XG4gICAgICB9XG4gICAgICBub2RlLmJ1ZmZlclNvdXJjZSA9IG51bGw7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cbiAgfTtcblxuICAvKiogU2luZ2xlIFNvdW5kIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBzb3VuZCBvYmplY3QsIHdoaWNoIGVhY2ggbm9kZSBhdHRhY2hlZCB0byBhIEhvd2wgZ3JvdXAgaXMgY29udGFpbmVkIGluLlxuICAgKiBAcGFyYW0ge09iamVjdH0gaG93bCBUaGUgSG93bCBwYXJlbnQgZ3JvdXAuXG4gICAqL1xuICB2YXIgU291bmQgPSBmdW5jdGlvbihob3dsKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gaG93bDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfTtcbiAgU291bmQucHJvdG90eXBlID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgYSBuZXcgU291bmQgb2JqZWN0LlxuICAgICAqIEByZXR1cm4ge1NvdW5kfVxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcblxuICAgICAgLy8gU2V0dXAgdGhlIGRlZmF1bHQgcGFyYW1ldGVycy5cbiAgICAgIHNlbGYuX211dGVkID0gcGFyZW50Ll9tdXRlZDtcbiAgICAgIHNlbGYuX2xvb3AgPSBwYXJlbnQuX2xvb3A7XG4gICAgICBzZWxmLl92b2x1bWUgPSBwYXJlbnQuX3ZvbHVtZTtcbiAgICAgIHNlbGYuX3JhdGUgPSBwYXJlbnQuX3JhdGU7XG4gICAgICBzZWxmLl9zZWVrID0gMDtcbiAgICAgIHNlbGYuX3BhdXNlZCA9IHRydWU7XG4gICAgICBzZWxmLl9lbmRlZCA9IHRydWU7XG4gICAgICBzZWxmLl9zcHJpdGUgPSAnX19kZWZhdWx0JztcblxuICAgICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIHRoaXMgc291bmQuXG4gICAgICBzZWxmLl9pZCA9ICsrSG93bGVyLl9jb3VudGVyO1xuXG4gICAgICAvLyBBZGQgaXRzZWxmIHRvIHRoZSBwYXJlbnQncyBwb29sLlxuICAgICAgcGFyZW50Ll9zb3VuZHMucHVzaChzZWxmKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBuZXcgbm9kZS5cbiAgICAgIHNlbGYuY3JlYXRlKCk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIHNldHVwIGEgbmV3IHNvdW5kIG9iamVjdCwgd2hldGhlciBIVE1MNSBBdWRpbyBvciBXZWIgQXVkaW8uXG4gICAgICogQHJldHVybiB7U291bmR9XG4gICAgICovXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG4gICAgICB2YXIgdm9sdW1lID0gKEhvd2xlci5fbXV0ZWQgfHwgc2VsZi5fbXV0ZWQgfHwgc2VsZi5fcGFyZW50Ll9tdXRlZCkgPyAwIDogc2VsZi5fdm9sdW1lO1xuXG4gICAgICBpZiAocGFyZW50Ll93ZWJBdWRpbykge1xuICAgICAgICAvLyBDcmVhdGUgdGhlIGdhaW4gbm9kZSBmb3IgY29udHJvbGxpbmcgdm9sdW1lICh0aGUgc291cmNlIHdpbGwgY29ubmVjdCB0byB0aGlzKS5cbiAgICAgICAgc2VsZi5fbm9kZSA9ICh0eXBlb2YgSG93bGVyLmN0eC5jcmVhdGVHYWluID09PSAndW5kZWZpbmVkJykgPyBIb3dsZXIuY3R4LmNyZWF0ZUdhaW5Ob2RlKCkgOiBIb3dsZXIuY3R4LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgc2VsZi5fbm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKHZvbHVtZSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgIHNlbGYuX25vZGUucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5fbm9kZS5jb25uZWN0KEhvd2xlci5tYXN0ZXJHYWluKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuX25vZGUgPSBuZXcgQXVkaW8oKTtcblxuICAgICAgICAvLyBMaXN0ZW4gZm9yIGVycm9ycyAoaHR0cDovL2Rldi53My5vcmcvaHRtbDUvc3BlYy1hdXRob3Itdmlldy9zcGVjLmh0bWwjbWVkaWFlcnJvcikuXG4gICAgICAgIHNlbGYuX2Vycm9yRm4gPSBzZWxmLl9lcnJvckxpc3RlbmVyLmJpbmQoc2VsZik7XG4gICAgICAgIHNlbGYuX25vZGUuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBzZWxmLl9lcnJvckZuLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gTGlzdGVuIGZvciAnY2FucGxheXRocm91Z2gnIGV2ZW50IHRvIGxldCB1cyBrbm93IHRoZSBzb3VuZCBpcyByZWFkeS5cbiAgICAgICAgc2VsZi5fbG9hZEZuID0gc2VsZi5fbG9hZExpc3RlbmVyLmJpbmQoc2VsZik7XG4gICAgICAgIHNlbGYuX25vZGUuYWRkRXZlbnRMaXN0ZW5lcihIb3dsZXIuX2NhblBsYXlFdmVudCwgc2VsZi5fbG9hZEZuLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gU2V0dXAgdGhlIG5ldyBhdWRpbyBub2RlLlxuICAgICAgICBzZWxmLl9ub2RlLnNyYyA9IHBhcmVudC5fc3JjO1xuICAgICAgICBzZWxmLl9ub2RlLnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgIHNlbGYuX25vZGUudm9sdW1lID0gdm9sdW1lICogSG93bGVyLnZvbHVtZSgpO1xuXG4gICAgICAgIC8vIEJlZ2luIGxvYWRpbmcgdGhlIHNvdXJjZS5cbiAgICAgICAgc2VsZi5fbm9kZS5sb2FkKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgcGFyYW1ldGVycyBvZiB0aGlzIHNvdW5kIHRvIHRoZSBvcmlnaW5hbCBzdGF0ZSAoZm9yIHJlY3ljbGUpLlxuICAgICAqIEByZXR1cm4ge1NvdW5kfVxuICAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG5cbiAgICAgIC8vIFJlc2V0IGFsbCBvZiB0aGUgcGFyYW1ldGVycyBvZiB0aGlzIHNvdW5kLlxuICAgICAgc2VsZi5fbXV0ZWQgPSBwYXJlbnQuX211dGVkO1xuICAgICAgc2VsZi5fbG9vcCA9IHBhcmVudC5fbG9vcDtcbiAgICAgIHNlbGYuX3ZvbHVtZSA9IHBhcmVudC5fdm9sdW1lO1xuICAgICAgc2VsZi5fcmF0ZSA9IHBhcmVudC5fcmF0ZTtcbiAgICAgIHNlbGYuX3NlZWsgPSAwO1xuICAgICAgc2VsZi5fcmF0ZVNlZWsgPSAwO1xuICAgICAgc2VsZi5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgIHNlbGYuX2VuZGVkID0gdHJ1ZTtcbiAgICAgIHNlbGYuX3Nwcml0ZSA9ICdfX2RlZmF1bHQnO1xuXG4gICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBJRCBzbyB0aGF0IGl0IGlzbid0IGNvbmZ1c2VkIHdpdGggdGhlIHByZXZpb3VzIHNvdW5kLlxuICAgICAgc2VsZi5faWQgPSArK0hvd2xlci5fY291bnRlcjtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhUTUw1IEF1ZGlvIGVycm9yIGxpc3RlbmVyIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIF9lcnJvckxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gRmlyZSBhbiBlcnJvciBldmVudCBhbmQgcGFzcyBiYWNrIHRoZSBjb2RlLlxuICAgICAgc2VsZi5fcGFyZW50Ll9lbWl0KCdsb2FkZXJyb3InLCBzZWxmLl9pZCwgc2VsZi5fbm9kZS5lcnJvciA/IHNlbGYuX25vZGUuZXJyb3IuY29kZSA6IDApO1xuXG4gICAgICAvLyBDbGVhciB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICBzZWxmLl9ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgc2VsZi5fZXJyb3JGbiwgZmFsc2UpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIVE1MNSBBdWRpbyBjYW5wbGF5dGhyb3VnaCBsaXN0ZW5lciBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBfbG9hZExpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG5cbiAgICAgIC8vIFJvdW5kIHVwIHRoZSBkdXJhdGlvbiB0byBhY2NvdW50IGZvciB0aGUgbG93ZXIgcHJlY2lzaW9uIGluIEhUTUw1IEF1ZGlvLlxuICAgICAgcGFyZW50Ll9kdXJhdGlvbiA9IE1hdGguY2VpbChzZWxmLl9ub2RlLmR1cmF0aW9uICogMTApIC8gMTA7XG5cbiAgICAgIC8vIFNldHVwIGEgc3ByaXRlIGlmIG5vbmUgaXMgZGVmaW5lZC5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhwYXJlbnQuX3Nwcml0ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHBhcmVudC5fc3ByaXRlID0ge19fZGVmYXVsdDogWzAsIHBhcmVudC5fZHVyYXRpb24gKiAxMDAwXX07XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnQuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgICBwYXJlbnQuX3N0YXRlID0gJ2xvYWRlZCc7XG4gICAgICAgIHBhcmVudC5fZW1pdCgnbG9hZCcpO1xuICAgICAgICBwYXJlbnQuX2xvYWRRdWV1ZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICBzZWxmLl9ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoSG93bGVyLl9jYW5QbGF5RXZlbnQsIHNlbGYuX2xvYWRGbiwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICAvKiogSGVscGVyIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgdmFyIGNhY2hlID0ge307XG5cbiAgLyoqXG4gICAqIEJ1ZmZlciBhIHNvdW5kIGZyb20gVVJMLCBEYXRhIFVSSSBvciBjYWNoZSBhbmQgZGVjb2RlIHRvIGF1ZGlvIHNvdXJjZSAoV2ViIEF1ZGlvIEFQSSkuXG4gICAqIEBwYXJhbSAge0hvd2x9IHNlbGZcbiAgICovXG4gIHZhciBsb2FkQnVmZmVyID0gZnVuY3Rpb24oc2VsZikge1xuICAgIHZhciB1cmwgPSBzZWxmLl9zcmM7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgYnVmZmVyIGhhcyBhbHJlYWR5IGJlZW4gY2FjaGVkIGFuZCB1c2UgaXQgaW5zdGVhZC5cbiAgICBpZiAoY2FjaGVbdXJsXSkge1xuICAgICAgLy8gU2V0IHRoZSBkdXJhdGlvbiBmcm9tIHRoZSBjYWNoZS5cbiAgICAgIHNlbGYuX2R1cmF0aW9uID0gY2FjaGVbdXJsXS5kdXJhdGlvbjtcblxuICAgICAgLy8gTG9hZCB0aGUgc291bmQgaW50byB0aGlzIEhvd2wuXG4gICAgICBsb2FkU291bmQoc2VsZik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoL15kYXRhOlteO10rO2Jhc2U2NCwvLnRlc3QodXJsKSkge1xuICAgICAgLy8gRGVjb2RlIHRoZSBiYXNlNjQgZGF0YSBVUkkgd2l0aG91dCBYSFIsIHNpbmNlIHNvbWUgYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCBpdC5cbiAgICAgIHZhciBkYXRhID0gYXRvYih1cmwuc3BsaXQoJywnKVsxXSk7XG4gICAgICB2YXIgZGF0YVZpZXcgPSBuZXcgVWludDhBcnJheShkYXRhLmxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpPTA7IGk8ZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICBkYXRhVmlld1tpXSA9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICAgIH1cblxuICAgICAgZGVjb2RlQXVkaW9EYXRhKGRhdGFWaWV3LmJ1ZmZlciwgc2VsZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExvYWQgdGhlIGJ1ZmZlciBmcm9tIHRoZSBVUkwuXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBzZWxmLl94aHJXaXRoQ3JlZGVudGlhbHM7XG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGdldCBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgYmFjay5cbiAgICAgICAgdmFyIGNvZGUgPSAoeGhyLnN0YXR1cyArICcnKVswXTtcbiAgICAgICAgaWYgKGNvZGUgIT09ICcwJyAmJiBjb2RlICE9PSAnMicgJiYgY29kZSAhPT0gJzMnKSB7XG4gICAgICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ0ZhaWxlZCBsb2FkaW5nIGF1ZGlvIGZpbGUgd2l0aCBzdGF0dXM6ICcgKyB4aHIuc3RhdHVzICsgJy4nKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVBdWRpb0RhdGEoeGhyLnJlc3BvbnNlLCBzZWxmKTtcbiAgICAgIH07XG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciwgc3dpdGNoIHRvIEhUTUw1IEF1ZGlvLlxuICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICBzZWxmLl9odG1sNSA9IHRydWU7XG4gICAgICAgICAgc2VsZi5fd2ViQXVkaW8gPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLl9zb3VuZHMgPSBbXTtcbiAgICAgICAgICBkZWxldGUgY2FjaGVbdXJsXTtcbiAgICAgICAgICBzZWxmLmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHNhZmVYaHJTZW5kKHhocik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBYSFIgcmVxdWVzdCB3cmFwcGVkIGluIGEgdHJ5L2NhdGNoLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHhociBYSFIgdG8gc2VuZC5cbiAgICovXG4gIHZhciBzYWZlWGhyU2VuZCA9IGZ1bmN0aW9uKHhocikge1xuICAgIHRyeSB7XG4gICAgICB4aHIuc2VuZCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHhoci5vbmVycm9yKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEZWNvZGUgYXVkaW8gZGF0YSBmcm9tIGFuIGFycmF5IGJ1ZmZlci5cbiAgICogQHBhcmFtICB7QXJyYXlCdWZmZXJ9IGFycmF5YnVmZmVyIFRoZSBhdWRpbyBkYXRhLlxuICAgKiBAcGFyYW0gIHtIb3dsfSAgICAgICAgc2VsZlxuICAgKi9cbiAgdmFyIGRlY29kZUF1ZGlvRGF0YSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyLCBzZWxmKSB7XG4gICAgLy8gRGVjb2RlIHRoZSBidWZmZXIgaW50byBhbiBhdWRpbyBzb3VyY2UuXG4gICAgSG93bGVyLmN0eC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlidWZmZXIsIGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgICAgaWYgKGJ1ZmZlciAmJiBzZWxmLl9zb3VuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjYWNoZVtzZWxmLl9zcmNdID0gYnVmZmVyO1xuICAgICAgICBsb2FkU291bmQoc2VsZiwgYnVmZmVyKTtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuX2VtaXQoJ2xvYWRlcnJvcicsIG51bGwsICdEZWNvZGluZyBhdWRpbyBkYXRhIGZhaWxlZC4nKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogU291bmQgaXMgbm93IGxvYWRlZCwgc28gZmluaXNoIHNldHRpbmcgZXZlcnl0aGluZyB1cCBhbmQgZmlyZSB0aGUgbG9hZGVkIGV2ZW50LlxuICAgKiBAcGFyYW0gIHtIb3dsfSBzZWxmXG4gICAqIEBwYXJhbSAge09iamVjdH0gYnVmZmVyIFRoZSBkZWNvZGVkIGJ1ZmZlciBzb3VuZCBzb3VyY2UuXG4gICAqL1xuICB2YXIgbG9hZFNvdW5kID0gZnVuY3Rpb24oc2VsZiwgYnVmZmVyKSB7XG4gICAgLy8gU2V0IHRoZSBkdXJhdGlvbi5cbiAgICBpZiAoYnVmZmVyICYmICFzZWxmLl9kdXJhdGlvbikge1xuICAgICAgc2VsZi5fZHVyYXRpb24gPSBidWZmZXIuZHVyYXRpb247XG4gICAgfVxuXG4gICAgLy8gU2V0dXAgYSBzcHJpdGUgaWYgbm9uZSBpcyBkZWZpbmVkLlxuICAgIGlmIChPYmplY3Qua2V5cyhzZWxmLl9zcHJpdGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2VsZi5fc3ByaXRlID0ge19fZGVmYXVsdDogWzAsIHNlbGYuX2R1cmF0aW9uICogMTAwMF19O1xuICAgIH1cblxuICAgIC8vIEZpcmUgdGhlIGxvYWRlZCBldmVudC5cbiAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICBzZWxmLl9zdGF0ZSA9ICdsb2FkZWQnO1xuICAgICAgc2VsZi5fZW1pdCgnbG9hZCcpO1xuICAgICAgc2VsZi5fbG9hZFF1ZXVlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgYXVkaW8gY29udGV4dCB3aGVuIGF2YWlsYWJsZSwgb3Igc3dpdGNoIHRvIEhUTUw1IEF1ZGlvIG1vZGUuXG4gICAqL1xuICB2YXIgc2V0dXBBdWRpb0NvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBDaGVjayBpZiB3ZSBhcmUgdXNpbmcgV2ViIEF1ZGlvIGFuZCBzZXR1cCB0aGUgQXVkaW9Db250ZXh0IGlmIHdlIGFyZS5cbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZiBBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIEhvd2xlci5jdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3ZWJraXRBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIEhvd2xlci5jdHggPSBuZXcgd2Via2l0QXVkaW9Db250ZXh0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBIb3dsZXIudXNpbmdXZWJBdWRpbyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgSG93bGVyLnVzaW5nV2ViQXVkaW8gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBhIHdlYnZpZXcgaXMgYmVpbmcgdXNlZCBvbiBpT1M4IG9yIGVhcmxpZXIgKHJhdGhlciB0aGFuIHRoZSBicm93c2VyKS5cbiAgICAvLyBJZiBpdCBpcywgZGlzYWJsZSBXZWIgQXVkaW8gYXMgaXQgY2F1c2VzIGNyYXNoaW5nLlxuICAgIHZhciBpT1MgPSAoL2lQKGhvbmV8b2R8YWQpLy50ZXN0KEhvd2xlci5fbmF2aWdhdG9yICYmIEhvd2xlci5fbmF2aWdhdG9yLnBsYXRmb3JtKSk7XG4gICAgdmFyIGFwcFZlcnNpb24gPSBIb3dsZXIuX25hdmlnYXRvciAmJiBIb3dsZXIuX25hdmlnYXRvci5hcHBWZXJzaW9uLm1hdGNoKC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Lyk7XG4gICAgdmFyIHZlcnNpb24gPSBhcHBWZXJzaW9uID8gcGFyc2VJbnQoYXBwVmVyc2lvblsxXSwgMTApIDogbnVsbDtcbiAgICBpZiAoaU9TICYmIHZlcnNpb24gJiYgdmVyc2lvbiA8IDkpIHtcbiAgICAgIHZhciBzYWZhcmkgPSAvc2FmYXJpLy50ZXN0KEhvd2xlci5fbmF2aWdhdG9yICYmIEhvd2xlci5fbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGlmIChIb3dsZXIuX25hdmlnYXRvciAmJiBIb3dsZXIuX25hdmlnYXRvci5zdGFuZGFsb25lICYmICFzYWZhcmkgfHwgSG93bGVyLl9uYXZpZ2F0b3IgJiYgIUhvd2xlci5fbmF2aWdhdG9yLnN0YW5kYWxvbmUgJiYgIXNhZmFyaSkge1xuICAgICAgICBIb3dsZXIudXNpbmdXZWJBdWRpbyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhbmQgZXhwb3NlIHRoZSBtYXN0ZXIgR2Fpbk5vZGUgd2hlbiB1c2luZyBXZWIgQXVkaW8gKHVzZWZ1bCBmb3IgcGx1Z2lucyBvciBhZHZhbmNlZCB1c2FnZSkuXG4gICAgaWYgKEhvd2xlci51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICBIb3dsZXIubWFzdGVyR2FpbiA9ICh0eXBlb2YgSG93bGVyLmN0eC5jcmVhdGVHYWluID09PSAndW5kZWZpbmVkJykgPyBIb3dsZXIuY3R4LmNyZWF0ZUdhaW5Ob2RlKCkgOiBIb3dsZXIuY3R4LmNyZWF0ZUdhaW4oKTtcbiAgICAgIEhvd2xlci5tYXN0ZXJHYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoSG93bGVyLl9tdXRlZCA/IDAgOiAxLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgIEhvd2xlci5tYXN0ZXJHYWluLmNvbm5lY3QoSG93bGVyLmN0eC5kZXN0aW5hdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmUtcnVuIHRoZSBzZXR1cCBvbiBIb3dsZXIuXG4gICAgSG93bGVyLl9zZXR1cCgpO1xuICB9O1xuXG4gIC8vIEFkZCBzdXBwb3J0IGZvciBBTUQgKEFzeW5jaHJvbm91cyBNb2R1bGUgRGVmaW5pdGlvbikgbGlicmFyaWVzIHN1Y2ggYXMgcmVxdWlyZS5qcy5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBIb3dsZXI6IEhvd2xlcixcbiAgICAgICAgSG93bDogSG93bFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEFkZCBzdXBwb3J0IGZvciBDb21tb25KUyBsaWJyYXJpZXMgc3VjaCBhcyBicm93c2VyaWZ5LlxuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZXhwb3J0cy5Ib3dsZXIgPSBIb3dsZXI7XG4gICAgZXhwb3J0cy5Ib3dsID0gSG93bDtcbiAgfVxuXG4gIC8vIERlZmluZSBnbG9iYWxseSBpbiBjYXNlIEFNRCBpcyBub3QgYXZhaWxhYmxlIG9yIHVudXNlZC5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Lkhvd2xlckdsb2JhbCA9IEhvd2xlckdsb2JhbDtcbiAgICB3aW5kb3cuSG93bGVyID0gSG93bGVyO1xuICAgIHdpbmRvdy5Ib3dsID0gSG93bDtcbiAgICB3aW5kb3cuU291bmQgPSBTb3VuZDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgeyAvLyBBZGQgdG8gZ2xvYmFsIGluIE5vZGUuanMgKGZvciB0ZXN0aW5nLCBldGMpLlxuICAgIGdsb2JhbC5Ib3dsZXJHbG9iYWwgPSBIb3dsZXJHbG9iYWw7XG4gICAgZ2xvYmFsLkhvd2xlciA9IEhvd2xlcjtcbiAgICBnbG9iYWwuSG93bCA9IEhvd2w7XG4gICAgZ2xvYmFsLlNvdW5kID0gU291bmQ7XG4gIH1cbn0pKCk7XG5cblxuLyohXG4gKiAgU3BhdGlhbCBQbHVnaW4gLSBBZGRzIHN1cHBvcnQgZm9yIHN0ZXJlbyBhbmQgM0QgYXVkaW8gd2hlcmUgV2ViIEF1ZGlvIGlzIHN1cHBvcnRlZC5cbiAqICBcbiAqICBob3dsZXIuanMgdjIuMC45XG4gKiAgaG93bGVyanMuY29tXG4gKlxuICogIChjKSAyMDEzLTIwMTgsIEphbWVzIFNpbXBzb24gb2YgR29sZEZpcmUgU3R1ZGlvc1xuICogIGdvbGRmaXJlc3R1ZGlvcy5jb21cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFNldHVwIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgSG93bGVyR2xvYmFsLnByb3RvdHlwZS5fcG9zID0gWzAsIDAsIDBdO1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLl9vcmllbnRhdGlvbiA9IFswLCAwLCAtMSwgMCwgMSwgMF07XG4gIFxuICAvKiogR2xvYmFsIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBzdGVyZW8gcGFubmluZyBwb3NpdGlvbiBvZiBhbGwgY3VycmVudCBIb3dscy5cbiAgICogRnV0dXJlIEhvd2xzIHdpbGwgbm90IHVzZSB0aGlzIHZhbHVlIHVubGVzcyBleHBsaWNpdGx5IHNldC5cbiAgICogQHBhcmFtICB7TnVtYmVyfSBwYW4gQSB2YWx1ZSBvZiAtMS4wIGlzIGFsbCB0aGUgd2F5IGxlZnQgYW5kIDEuMCBpcyBhbGwgdGhlIHdheSByaWdodC5cbiAgICogQHJldHVybiB7SG93bGVyL051bWJlcn0gICAgIFNlbGYgb3IgY3VycmVudCBzdGVyZW8gcGFubmluZyB2YWx1ZS5cbiAgICovXG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUuc3RlcmVvID0gZnVuY3Rpb24ocGFuKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLmN0eCB8fCAhc2VsZi5jdHgubGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgSG93bHMgYW5kIHVwZGF0ZSB0aGVpciBzdGVyZW8gcGFubmluZy5cbiAgICBmb3IgKHZhciBpPXNlbGYuX2hvd2xzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgIHNlbGYuX2hvd2xzW2ldLnN0ZXJlbyhwYW4pO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQvc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIgaW4gM0QgY2FydGVzaWFuIHNwYWNlLiBTb3VuZHMgdXNpbmdcbiAgICogM0QgcG9zaXRpb24gd2lsbCBiZSByZWxhdGl2ZSB0byB0aGUgbGlzdGVuZXIncyBwb3NpdGlvbi5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB4IFRoZSB4LXBvc2l0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5IFRoZSB5LXBvc2l0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB6IFRoZSB6LXBvc2l0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHJldHVybiB7SG93bGVyL0FycmF5fSAgIFNlbGYgb3IgY3VycmVudCBsaXN0ZW5lciBwb3NpdGlvbi5cbiAgICovXG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUucG9zID0gZnVuY3Rpb24oeCwgeSwgeikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5jdHggfHwgIXNlbGYuY3R4Lmxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHRzIGZvciBvcHRpb25hbCAneScgJiAneicuXG4gICAgeSA9ICh0eXBlb2YgeSAhPT0gJ251bWJlcicpID8gc2VsZi5fcG9zWzFdIDogeTtcbiAgICB6ID0gKHR5cGVvZiB6ICE9PSAnbnVtYmVyJykgPyBzZWxmLl9wb3NbMl0gOiB6O1xuXG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgc2VsZi5fcG9zID0gW3gsIHksIHpdO1xuICAgICAgc2VsZi5jdHgubGlzdGVuZXIuc2V0UG9zaXRpb24oc2VsZi5fcG9zWzBdLCBzZWxmLl9wb3NbMV0sIHNlbGYuX3Bvc1syXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzZWxmLl9wb3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldC9zZXQgdGhlIGRpcmVjdGlvbiB0aGUgbGlzdGVuZXIgaXMgcG9pbnRpbmcgaW4gdGhlIDNEIGNhcnRlc2lhbiBzcGFjZS5cbiAgICogQSBmcm9udCBhbmQgdXAgdmVjdG9yIG11c3QgYmUgcHJvdmlkZWQuIFRoZSBmcm9udCBpcyB0aGUgZGlyZWN0aW9uIHRoZVxuICAgKiBmYWNlIG9mIHRoZSBsaXN0ZW5lciBpcyBwb2ludGluZywgYW5kIHVwIGlzIHRoZSBkaXJlY3Rpb24gdGhlIHRvcCBvZiB0aGVcbiAgICogbGlzdGVuZXIgaXMgcG9pbnRpbmcuIFRodXMsIHRoZXNlIHZhbHVlcyBhcmUgZXhwZWN0ZWQgdG8gYmUgYXQgcmlnaHQgYW5nbGVzXG4gICAqIGZyb20gZWFjaCBvdGhlci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB4ICAgVGhlIHgtb3JpZW50YXRpb24gb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHkgICBUaGUgeS1vcmllbnRhdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geiAgIFRoZSB6LW9yaWVudGF0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB4VXAgVGhlIHgtb3JpZW50YXRpb24gb2YgdGhlIHRvcCBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geVVwIFRoZSB5LW9yaWVudGF0aW9uIG9mIHRoZSB0b3Agb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHpVcCBUaGUgei1vcmllbnRhdGlvbiBvZiB0aGUgdG9wIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHJldHVybiB7SG93bGVyL0FycmF5fSAgICAgUmV0dXJucyBzZWxmIG9yIHRoZSBjdXJyZW50IG9yaWVudGF0aW9uIHZlY3RvcnMuXG4gICAqL1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLm9yaWVudGF0aW9uID0gZnVuY3Rpb24oeCwgeSwgeiwgeFVwLCB5VXAsIHpVcCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5jdHggfHwgIXNlbGYuY3R4Lmxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHRzIGZvciBvcHRpb25hbCAneScgJiAneicuXG4gICAgdmFyIG9yID0gc2VsZi5fb3JpZW50YXRpb247XG4gICAgeSA9ICh0eXBlb2YgeSAhPT0gJ251bWJlcicpID8gb3JbMV0gOiB5O1xuICAgIHogPSAodHlwZW9mIHogIT09ICdudW1iZXInKSA/IG9yWzJdIDogejtcbiAgICB4VXAgPSAodHlwZW9mIHhVcCAhPT0gJ251bWJlcicpID8gb3JbM10gOiB4VXA7XG4gICAgeVVwID0gKHR5cGVvZiB5VXAgIT09ICdudW1iZXInKSA/IG9yWzRdIDogeVVwO1xuICAgIHpVcCA9ICh0eXBlb2YgelVwICE9PSAnbnVtYmVyJykgPyBvcls1XSA6IHpVcDtcblxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHNlbGYuX29yaWVudGF0aW9uID0gW3gsIHksIHosIHhVcCwgeVVwLCB6VXBdO1xuICAgICAgc2VsZi5jdHgubGlzdGVuZXIuc2V0T3JpZW50YXRpb24oeCwgeSwgeiwgeFVwLCB5VXAsIHpVcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKiogR3JvdXAgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogQWRkIG5ldyBwcm9wZXJ0aWVzIHRvIHRoZSBjb3JlIGluaXQuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBfc3VwZXIgQ29yZSBpbml0IG1ldGhvZC5cbiAgICogQHJldHVybiB7SG93bH1cbiAgICovXG4gIEhvd2wucHJvdG90eXBlLmluaXQgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG8pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gU2V0dXAgdXNlci1kZWZpbmVkIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgICAgIHNlbGYuX29yaWVudGF0aW9uID0gby5vcmllbnRhdGlvbiB8fCBbMSwgMCwgMF07XG4gICAgICBzZWxmLl9zdGVyZW8gPSBvLnN0ZXJlbyB8fCBudWxsO1xuICAgICAgc2VsZi5fcG9zID0gby5wb3MgfHwgbnVsbDtcbiAgICAgIHNlbGYuX3Bhbm5lckF0dHIgPSB7XG4gICAgICAgIGNvbmVJbm5lckFuZ2xlOiB0eXBlb2Ygby5jb25lSW5uZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLmNvbmVJbm5lckFuZ2xlIDogMzYwLFxuICAgICAgICBjb25lT3V0ZXJBbmdsZTogdHlwZW9mIG8uY29uZU91dGVyQW5nbGUgIT09ICd1bmRlZmluZWQnID8gby5jb25lT3V0ZXJBbmdsZSA6IDM2MCxcbiAgICAgICAgY29uZU91dGVyR2FpbjogdHlwZW9mIG8uY29uZU91dGVyR2FpbiAhPT0gJ3VuZGVmaW5lZCcgPyBvLmNvbmVPdXRlckdhaW4gOiAwLFxuICAgICAgICBkaXN0YW5jZU1vZGVsOiB0eXBlb2Ygby5kaXN0YW5jZU1vZGVsICE9PSAndW5kZWZpbmVkJyA/IG8uZGlzdGFuY2VNb2RlbCA6ICdpbnZlcnNlJyxcbiAgICAgICAgbWF4RGlzdGFuY2U6IHR5cGVvZiBvLm1heERpc3RhbmNlICE9PSAndW5kZWZpbmVkJyA/IG8ubWF4RGlzdGFuY2UgOiAxMDAwMCxcbiAgICAgICAgcGFubmluZ01vZGVsOiB0eXBlb2Ygby5wYW5uaW5nTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5wYW5uaW5nTW9kZWwgOiAnSFJURicsXG4gICAgICAgIHJlZkRpc3RhbmNlOiB0eXBlb2Ygby5yZWZEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLnJlZkRpc3RhbmNlIDogMSxcbiAgICAgICAgcm9sbG9mZkZhY3RvcjogdHlwZW9mIG8ucm9sbG9mZkZhY3RvciAhPT0gJ3VuZGVmaW5lZCcgPyBvLnJvbGxvZmZGYWN0b3IgOiAxXG4gICAgICB9O1xuXG4gICAgICAvLyBTZXR1cCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICBzZWxmLl9vbnN0ZXJlbyA9IG8ub25zdGVyZW8gPyBbe2ZuOiBvLm9uc3RlcmVvfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucG9zID0gby5vbnBvcyA/IFt7Zm46IG8ub25wb3N9XSA6IFtdO1xuICAgICAgc2VsZi5fb25vcmllbnRhdGlvbiA9IG8ub25vcmllbnRhdGlvbiA/IFt7Zm46IG8ub25vcmllbnRhdGlvbn1dIDogW107XG5cbiAgICAgIC8vIENvbXBsZXRlIGluaXRpbGl6YXRpb24gd2l0aCBob3dsZXIuanMgY29yZSdzIGluaXQgZnVuY3Rpb24uXG4gICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgbyk7XG4gICAgfTtcbiAgfSkoSG93bC5wcm90b3R5cGUuaW5pdCk7XG5cbiAgLyoqXG4gICAqIEdldC9zZXQgdGhlIHN0ZXJlbyBwYW5uaW5nIG9mIHRoZSBhdWRpbyBzb3VyY2UgZm9yIHRoaXMgc291bmQgb3IgYWxsIGluIHRoZSBncm91cC5cbiAgICogQHBhcmFtICB7TnVtYmVyfSBwYW4gIEEgdmFsdWUgb2YgLTEuMCBpcyBhbGwgdGhlIHdheSBsZWZ0IGFuZCAxLjAgaXMgYWxsIHRoZSB3YXkgcmlnaHQuXG4gICAqIEBwYXJhbSAge051bWJlcn0gaWQgKG9wdGlvbmFsKSBUaGUgc291bmQgSUQuIElmIG5vbmUgaXMgcGFzc2VkLCBhbGwgaW4gZ3JvdXAgd2lsbCBiZSB1cGRhdGVkLlxuICAgKiBAcmV0dXJuIHtIb3dsL051bWJlcn0gICAgUmV0dXJucyBzZWxmIG9yIHRoZSBjdXJyZW50IHN0ZXJlbyBwYW5uaW5nIHZhbHVlLlxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUuc3RlcmVvID0gZnVuY3Rpb24ocGFuLCBpZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gY2hhbmdlIHN0ZXJlbyBwYW4gd2hlbiBjYXBhYmxlLlxuICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICBldmVudDogJ3N0ZXJlbycsXG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5zdGVyZW8ocGFuLCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgUGFubmVyU3RlcmVvTm9kZSBzdXBwb3J0IGFuZCBmYWxsYmFjayB0byBQYW5uZXJOb2RlIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgdmFyIHBhbm5lclR5cGUgPSAodHlwZW9mIEhvd2xlci5jdHguY3JlYXRlU3RlcmVvUGFubmVyID09PSAndW5kZWZpbmVkJykgPyAnc3BhdGlhbCcgOiAnc3RlcmVvJztcblxuICAgIC8vIFNldHVwIHRoZSBncm91cCdzIHN0ZXJlbyBwYW5uaW5nIGlmIG5vIElEIGlzIHBhc3NlZC5cbiAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gUmV0dXJuIHRoZSBncm91cCdzIHN0ZXJlbyBwYW5uaW5nIGlmIG5vIHBhcmFtZXRlcnMgYXJlIHBhc3NlZC5cbiAgICAgIGlmICh0eXBlb2YgcGFuID09PSAnbnVtYmVyJykge1xuICAgICAgICBzZWxmLl9zdGVyZW8gPSBwYW47XG4gICAgICAgIHNlbGYuX3BvcyA9IFtwYW4sIDAsIDBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuX3N0ZXJlbztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIHN0cmVvIHBhbm5pbmcgb2Ygb25lIG9yIGFsbCBzb3VuZHMgaW4gZ3JvdXAuXG4gICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICBpZiAodHlwZW9mIHBhbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBzb3VuZC5fc3RlcmVvID0gcGFuO1xuICAgICAgICAgIHNvdW5kLl9wb3MgPSBbcGFuLCAwLCAwXTtcblxuICAgICAgICAgIGlmIChzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGZhbGxpbmcgYmFjaywgbWFrZSBzdXJlIHRoZSBwYW5uaW5nTW9kZWwgaXMgZXF1YWxwb3dlci5cbiAgICAgICAgICAgIHNvdW5kLl9wYW5uZXJBdHRyLnBhbm5pbmdNb2RlbCA9ICdlcXVhbHBvd2VyJztcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBwYW5uZXIgc2V0dXAgYW5kIGNyZWF0ZSBhIG5ldyBvbmUgaWYgbm90LlxuICAgICAgICAgICAgaWYgKCFzb3VuZC5fcGFubmVyIHx8ICFzb3VuZC5fcGFubmVyLnBhbikge1xuICAgICAgICAgICAgICBzZXR1cFBhbm5lcihzb3VuZCwgcGFubmVyVHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYW5uZXJUeXBlID09PSAnc3BhdGlhbCcpIHtcbiAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5zZXRQb3NpdGlvbihwYW4sIDAsIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wYW4uc2V0VmFsdWVBdFRpbWUocGFuLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLl9lbWl0KCdzdGVyZW8nLCBzb3VuZC5faWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzb3VuZC5fc3RlcmVvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldC9zZXQgdGhlIDNEIHNwYXRpYWwgcG9zaXRpb24gb2YgdGhlIGF1ZGlvIHNvdXJjZSBmb3IgdGhpcyBzb3VuZCBvciBncm91cCByZWxhdGl2ZSB0byB0aGUgZ2xvYmFsIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHggIFRoZSB4LXBvc2l0aW9uIG9mIHRoZSBhdWRpbyBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0geSAgVGhlIHktcG9zaXRpb24gb2YgdGhlIGF1ZGlvIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB6ICBUaGUgei1wb3NpdGlvbiBvZiB0aGUgYXVkaW8gc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIChvcHRpb25hbCkgVGhlIHNvdW5kIElELiBJZiBub25lIGlzIHBhc3NlZCwgYWxsIGluIGdyb3VwIHdpbGwgYmUgdXBkYXRlZC5cbiAgICogQHJldHVybiB7SG93bC9BcnJheX0gICAgUmV0dXJucyBzZWxmIG9yIHRoZSBjdXJyZW50IDNEIHNwYXRpYWwgcG9zaXRpb246IFt4LCB5LCB6XS5cbiAgICovXG4gIEhvd2wucHJvdG90eXBlLnBvcyA9IGZ1bmN0aW9uKHgsIHksIHosIGlkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLl93ZWJBdWRpbykge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBjaGFuZ2UgcG9zaXRpb24gd2hlbiBjYXBhYmxlLlxuICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICBldmVudDogJ3BvcycsXG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5wb3MoeCwgeSwgeiwgaWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0cyBmb3Igb3B0aW9uYWwgJ3knICYgJ3onLlxuICAgIHkgPSAodHlwZW9mIHkgIT09ICdudW1iZXInKSA/IDAgOiB5O1xuICAgIHogPSAodHlwZW9mIHogIT09ICdudW1iZXInKSA/IC0wLjUgOiB6O1xuXG4gICAgLy8gU2V0dXAgdGhlIGdyb3VwJ3Mgc3BhdGlhbCBwb3NpdGlvbiBpZiBubyBJRCBpcyBwYXNzZWQuXG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFJldHVybiB0aGUgZ3JvdXAncyBzcGF0aWFsIHBvc2l0aW9uIGlmIG5vIHBhcmFtZXRlcnMgYXJlIHBhc3NlZC5cbiAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc2VsZi5fcG9zID0gW3gsIHksIHpdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuX3BvcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIHNwYXRpYWwgcG9zaXRpb24gb2Ygb25lIG9yIGFsbCBzb3VuZHMgaW4gZ3JvdXAuXG4gICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICBmb3IgKHZhciBpPTA7IGk8aWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgc291bmQuX3BvcyA9IFt4LCB5LCB6XTtcblxuICAgICAgICAgIGlmIChzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBwYW5uZXIgc2V0dXAgYW5kIGNyZWF0ZSBhIG5ldyBvbmUgaWYgbm90LlxuICAgICAgICAgICAgaWYgKCFzb3VuZC5fcGFubmVyIHx8IHNvdW5kLl9wYW5uZXIucGFuKSB7XG4gICAgICAgICAgICAgIHNldHVwUGFubmVyKHNvdW5kLCAnc3BhdGlhbCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzb3VuZC5fcGFubmVyLnNldFBvc2l0aW9uKHgsIHksIHopO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX2VtaXQoJ3BvcycsIHNvdW5kLl9pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNvdW5kLl9wb3M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgZGlyZWN0aW9uIHRoZSBhdWRpbyBzb3VyY2UgaXMgcG9pbnRpbmcgaW4gdGhlIDNEIGNhcnRlc2lhbiBjb29yZGluYXRlXG4gICAqIHNwYWNlLiBEZXBlbmRpbmcgb24gaG93IGRpcmVjdGlvbiB0aGUgc291bmQgaXMsIGJhc2VkIG9uIHRoZSBgY29uZWAgYXR0cmlidXRlcyxcbiAgICogYSBzb3VuZCBwb2ludGluZyBhd2F5IGZyb20gdGhlIGxpc3RlbmVyIGNhbiBiZSBxdWlldCBvciBzaWxlbnQuXG4gICAqIEBwYXJhbSAge051bWJlcn0geCAgVGhlIHgtb3JpZW50YXRpb24gb2YgdGhlIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5ICBUaGUgeS1vcmllbnRhdGlvbiBvZiB0aGUgc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHogIFRoZSB6LW9yaWVudGF0aW9uIG9mIHRoZSBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0gaWQgKG9wdGlvbmFsKSBUaGUgc291bmQgSUQuIElmIG5vbmUgaXMgcGFzc2VkLCBhbGwgaW4gZ3JvdXAgd2lsbCBiZSB1cGRhdGVkLlxuICAgKiBAcmV0dXJuIHtIb3dsL0FycmF5fSAgICBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgM0Qgc3BhdGlhbCBvcmllbnRhdGlvbjogW3gsIHksIHpdLlxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUub3JpZW50YXRpb24gPSBmdW5jdGlvbih4LCB5LCB6LCBpZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gY2hhbmdlIG9yaWVudGF0aW9uIHdoZW4gY2FwYWJsZS5cbiAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6ICdvcmllbnRhdGlvbicsXG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5vcmllbnRhdGlvbih4LCB5LCB6LCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHRzIGZvciBvcHRpb25hbCAneScgJiAneicuXG4gICAgeSA9ICh0eXBlb2YgeSAhPT0gJ251bWJlcicpID8gc2VsZi5fb3JpZW50YXRpb25bMV0gOiB5O1xuICAgIHogPSAodHlwZW9mIHogIT09ICdudW1iZXInKSA/IHNlbGYuX29yaWVudGF0aW9uWzJdIDogejtcblxuICAgIC8vIFNldHVwIHRoZSBncm91cCdzIHNwYXRpYWwgb3JpZW50YXRpb24gaWYgbm8gSUQgaXMgcGFzc2VkLlxuICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGdyb3VwJ3Mgc3BhdGlhbCBvcmllbnRhdGlvbiBpZiBubyBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQuXG4gICAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNlbGYuX29yaWVudGF0aW9uID0gW3gsIHksIHpdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuX29yaWVudGF0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgc3BhdGlhbCBvcmllbnRhdGlvbiBvZiBvbmUgb3IgYWxsIHNvdW5kcyBpbiBncm91cC5cbiAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBzb3VuZC5fb3JpZW50YXRpb24gPSBbeCwgeSwgel07XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgcGFubmVyIHNldHVwIGFuZCBjcmVhdGUgYSBuZXcgb25lIGlmIG5vdC5cbiAgICAgICAgICAgIGlmICghc291bmQuX3Bhbm5lcikge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHBvc2l0aW9uIHRvIHNldHVwIHRoZSBub2RlIHdpdGguXG4gICAgICAgICAgICAgIGlmICghc291bmQuX3Bvcykge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9wb3MgPSBzZWxmLl9wb3MgfHwgWzAsIDAsIC0wLjVdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2V0dXBQYW5uZXIoc291bmQsICdzcGF0aWFsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIuc2V0T3JpZW50YXRpb24oeCwgeSwgeik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fZW1pdCgnb3JpZW50YXRpb24nLCBzb3VuZC5faWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzb3VuZC5fb3JpZW50YXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgcGFubmVyIG5vZGUncyBhdHRyaWJ1dGVzIGZvciBhIHNvdW5kIG9yIGdyb3VwIG9mIHNvdW5kcy5cbiAgICogVGhpcyBtZXRob2QgY2FuIG9wdGlvbmFsbCB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAqICAgcGFubmVyQXR0cigpIC0+IFJldHVybnMgdGhlIGdyb3VwJ3MgdmFsdWVzLlxuICAgKiAgIHBhbm5lckF0dHIoaWQpIC0+IFJldHVybnMgdGhlIHNvdW5kIGlkJ3MgdmFsdWVzLlxuICAgKiAgIHBhbm5lckF0dHIobykgLT4gU2V0J3MgdGhlIHZhbHVlcyBvZiBhbGwgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICogICBwYW5uZXJBdHRyKG8sIGlkKSAtPiBTZXQncyB0aGUgdmFsdWVzIG9mIHBhc3NlZCBzb3VuZCBpZC5cbiAgICpcbiAgICogICBBdHRyaWJ1dGVzOlxuICAgKiAgICAgY29uZUlubmVyQW5nbGUgLSAoMzYwIGJ5IGRlZmF1bHQpIEEgcGFyYW1ldGVyIGZvciBkaXJlY3Rpb25hbCBhdWRpbyBzb3VyY2VzLCB0aGlzIGlzIGFuIGFuZ2xlLCBpbiBkZWdyZWVzLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICBpbnNpZGUgb2Ygd2hpY2ggdGhlcmUgd2lsbCBiZSBubyB2b2x1bWUgcmVkdWN0aW9uLlxuICAgKiAgICAgY29uZU91dGVyQW5nbGUgLSAoMzYwIGJ5IGRlZmF1bHQpIEEgcGFyYW1ldGVyIGZvciBkaXJlY3Rpb25hbCBhdWRpbyBzb3VyY2VzLCB0aGlzIGlzIGFuIGFuZ2xlLCBpbiBkZWdyZWVzLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICBvdXRzaWRlIG9mIHdoaWNoIHRoZSB2b2x1bWUgd2lsbCBiZSByZWR1Y2VkIHRvIGEgY29uc3RhbnQgdmFsdWUgb2YgYGNvbmVPdXRlckdhaW5gLlxuICAgKiAgICAgY29uZU91dGVyR2FpbiAtICgwIGJ5IGRlZmF1bHQpIEEgcGFyYW1ldGVyIGZvciBkaXJlY3Rpb25hbCBhdWRpbyBzb3VyY2VzLCB0aGlzIGlzIHRoZSBnYWluIG91dHNpZGUgb2YgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgYGNvbmVPdXRlckFuZ2xlYC4gSXQgaXMgYSBsaW5lYXIgdmFsdWUgaW4gdGhlIHJhbmdlIGBbMCwgMV1gLlxuICAgKiAgICAgZGlzdGFuY2VNb2RlbCAtICgnaW52ZXJzZScgYnkgZGVmYXVsdCkgRGV0ZXJtaW5lcyBhbGdvcml0aG0gdXNlZCB0byByZWR1Y2Ugdm9sdW1lIGFzIGF1ZGlvIG1vdmVzIGF3YXkgZnJvbVxuICAgKiAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLiBDYW4gYmUgYGxpbmVhcmAsIGBpbnZlcnNlYCBvciBgZXhwb25lbnRpYWwuXG4gICAqICAgICBtYXhEaXN0YW5jZSAtICgxMDAwMCBieSBkZWZhdWx0KSBUaGUgbWF4aW11bSBkaXN0YW5jZSBiZXR3ZWVuIHNvdXJjZSBhbmQgbGlzdGVuZXIsIGFmdGVyIHdoaWNoIHRoZSB2b2x1bWVcbiAgICogICAgICAgICAgICAgICAgICAgd2lsbCBub3QgYmUgcmVkdWNlZCBhbnkgZnVydGhlci5cbiAgICogICAgIHJlZkRpc3RhbmNlIC0gKDEgYnkgZGVmYXVsdCkgQSByZWZlcmVuY2UgZGlzdGFuY2UgZm9yIHJlZHVjaW5nIHZvbHVtZSBhcyBzb3VyY2UgbW92ZXMgZnVydGhlciBmcm9tIHRoZSBsaXN0ZW5lci5cbiAgICogICAgICAgICAgICAgICAgICAgVGhpcyBpcyBzaW1wbHkgYSB2YXJpYWJsZSBvZiB0aGUgZGlzdGFuY2UgbW9kZWwgYW5kIGhhcyBhIGRpZmZlcmVudCBlZmZlY3QgZGVwZW5kaW5nIG9uIHdoaWNoIG1vZGVsXG4gICAqICAgICAgICAgICAgICAgICAgIGlzIHVzZWQgYW5kIHRoZSBzY2FsZSBvZiB5b3VyIGNvb3JkaW5hdGVzLiBHZW5lcmFsbHksIHZvbHVtZSB3aWxsIGJlIGVxdWFsIHRvIDEgYXQgdGhpcyBkaXN0YW5jZS5cbiAgICogICAgIHJvbGxvZmZGYWN0b3IgLSAoMSBieSBkZWZhdWx0KSBIb3cgcXVpY2tseSB0aGUgdm9sdW1lIHJlZHVjZXMgYXMgc291cmNlIG1vdmVzIGZyb20gbGlzdGVuZXIuIFRoaXMgaXMgc2ltcGx5IGFcbiAgICogICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZSBvZiB0aGUgZGlzdGFuY2UgbW9kZWwgYW5kIGNhbiBiZSBpbiB0aGUgcmFuZ2Ugb2YgYFswLCAxXWAgd2l0aCBgbGluZWFyYCBhbmQgYFswLCDiiJ5dYFxuICAgKiAgICAgICAgICAgICAgICAgICAgIHdpdGggYGludmVyc2VgIGFuZCBgZXhwb25lbnRpYWxgLlxuICAgKiAgICAgcGFubmluZ01vZGVsIC0gKCdIUlRGJyBieSBkZWZhdWx0KSBEZXRlcm1pbmVzIHdoaWNoIHNwYXRpYWxpemF0aW9uIGFsZ29yaXRobSBpcyB1c2VkIHRvIHBvc2l0aW9uIGF1ZGlvLlxuICAgKiAgICAgICAgICAgICAgICAgICAgIENhbiBiZSBgSFJURmAgb3IgYGVxdWFscG93ZXJgLlxuICAgKiBcbiAgICogQHJldHVybiB7SG93bC9PYmplY3R9IFJldHVybnMgc2VsZiBvciBjdXJyZW50IHBhbm5lciBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUucGFubmVyQXR0ciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgbywgaWQsIHNvdW5kO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLl93ZWJBdWRpbykge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZXMgYmFzZWQgb24gYXJndW1lbnRzLlxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gUmV0dXJuIHRoZSBncm91cCdzIHBhbm5lciBhdHRyaWJ1dGUgdmFsdWVzLlxuICAgICAgcmV0dXJuIHNlbGYuX3Bhbm5lckF0dHI7XG4gICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvID0gYXJnc1swXTtcblxuICAgICAgICAvLyBTZXQgdGhlIGdyb3UncyBwYW5uZXIgYXR0cmlidXRlIHZhbHVlcy5cbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAoIW8ucGFubmVyQXR0cikge1xuICAgICAgICAgICAgby5wYW5uZXJBdHRyID0ge1xuICAgICAgICAgICAgICBjb25lSW5uZXJBbmdsZTogby5jb25lSW5uZXJBbmdsZSxcbiAgICAgICAgICAgICAgY29uZU91dGVyQW5nbGU6IG8uY29uZU91dGVyQW5nbGUsXG4gICAgICAgICAgICAgIGNvbmVPdXRlckdhaW46IG8uY29uZU91dGVyR2FpbixcbiAgICAgICAgICAgICAgZGlzdGFuY2VNb2RlbDogby5kaXN0YW5jZU1vZGVsLFxuICAgICAgICAgICAgICBtYXhEaXN0YW5jZTogby5tYXhEaXN0YW5jZSxcbiAgICAgICAgICAgICAgcmVmRGlzdGFuY2U6IG8ucmVmRGlzdGFuY2UsXG4gICAgICAgICAgICAgIHJvbGxvZmZGYWN0b3I6IG8ucm9sbG9mZkZhY3RvcixcbiAgICAgICAgICAgICAgcGFubmluZ01vZGVsOiBvLnBhbm5pbmdNb2RlbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLl9wYW5uZXJBdHRyID0ge1xuICAgICAgICAgICAgY29uZUlubmVyQW5nbGU6IHR5cGVvZiBvLnBhbm5lckF0dHIuY29uZUlubmVyQW5nbGUgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLmNvbmVJbm5lckFuZ2xlIDogc2VsZi5fY29uZUlubmVyQW5nbGUsXG4gICAgICAgICAgICBjb25lT3V0ZXJBbmdsZTogdHlwZW9mIG8ucGFubmVyQXR0ci5jb25lT3V0ZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIuY29uZU91dGVyQW5nbGUgOiBzZWxmLl9jb25lT3V0ZXJBbmdsZSxcbiAgICAgICAgICAgIGNvbmVPdXRlckdhaW46IHR5cGVvZiBvLnBhbm5lckF0dHIuY29uZU91dGVyR2FpbiAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIuY29uZU91dGVyR2FpbiA6IHNlbGYuX2NvbmVPdXRlckdhaW4sXG4gICAgICAgICAgICBkaXN0YW5jZU1vZGVsOiB0eXBlb2Ygby5wYW5uZXJBdHRyLmRpc3RhbmNlTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLmRpc3RhbmNlTW9kZWwgOiBzZWxmLl9kaXN0YW5jZU1vZGVsLFxuICAgICAgICAgICAgbWF4RGlzdGFuY2U6IHR5cGVvZiBvLnBhbm5lckF0dHIubWF4RGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLm1heERpc3RhbmNlIDogc2VsZi5fbWF4RGlzdGFuY2UsXG4gICAgICAgICAgICByZWZEaXN0YW5jZTogdHlwZW9mIG8ucGFubmVyQXR0ci5yZWZEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIucmVmRGlzdGFuY2UgOiBzZWxmLl9yZWZEaXN0YW5jZSxcbiAgICAgICAgICAgIHJvbGxvZmZGYWN0b3I6IHR5cGVvZiBvLnBhbm5lckF0dHIucm9sbG9mZkZhY3RvciAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIucm9sbG9mZkZhY3RvciA6IHNlbGYuX3JvbGxvZmZGYWN0b3IsXG4gICAgICAgICAgICBwYW5uaW5nTW9kZWw6IHR5cGVvZiBvLnBhbm5lckF0dHIucGFubmluZ01vZGVsICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5wYW5uaW5nTW9kZWwgOiBzZWxmLl9wYW5uaW5nTW9kZWxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gdGhpcyBzb3VuZCdzIHBhbm5lciBhdHRyaWJ1dGUgdmFsdWVzLlxuICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChwYXJzZUludChhcmdzWzBdLCAxMCkpO1xuICAgICAgICByZXR1cm4gc291bmQgPyBzb3VuZC5fcGFubmVyQXR0ciA6IHNlbGYuX3Bhbm5lckF0dHI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgbyA9IGFyZ3NbMF07XG4gICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIHZhbHVlcyBvZiB0aGUgc3BlY2lmaWVkIHNvdW5kcy5cbiAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAvLyBNZXJnZSB0aGUgbmV3IHZhbHVlcyBpbnRvIHRoZSBzb3VuZC5cbiAgICAgICAgdmFyIHBhID0gc291bmQuX3Bhbm5lckF0dHI7XG4gICAgICAgIHBhID0ge1xuICAgICAgICAgIGNvbmVJbm5lckFuZ2xlOiB0eXBlb2Ygby5jb25lSW5uZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLmNvbmVJbm5lckFuZ2xlIDogcGEuY29uZUlubmVyQW5nbGUsXG4gICAgICAgICAgY29uZU91dGVyQW5nbGU6IHR5cGVvZiBvLmNvbmVPdXRlckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZU91dGVyQW5nbGUgOiBwYS5jb25lT3V0ZXJBbmdsZSxcbiAgICAgICAgICBjb25lT3V0ZXJHYWluOiB0eXBlb2Ygby5jb25lT3V0ZXJHYWluICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZU91dGVyR2FpbiA6IHBhLmNvbmVPdXRlckdhaW4sXG4gICAgICAgICAgZGlzdGFuY2VNb2RlbDogdHlwZW9mIG8uZGlzdGFuY2VNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLmRpc3RhbmNlTW9kZWwgOiBwYS5kaXN0YW5jZU1vZGVsLFxuICAgICAgICAgIG1heERpc3RhbmNlOiB0eXBlb2Ygby5tYXhEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLm1heERpc3RhbmNlIDogcGEubWF4RGlzdGFuY2UsXG4gICAgICAgICAgcmVmRGlzdGFuY2U6IHR5cGVvZiBvLnJlZkRpc3RhbmNlICE9PSAndW5kZWZpbmVkJyA/IG8ucmVmRGlzdGFuY2UgOiBwYS5yZWZEaXN0YW5jZSxcbiAgICAgICAgICByb2xsb2ZmRmFjdG9yOiB0eXBlb2Ygby5yb2xsb2ZmRmFjdG9yICE9PSAndW5kZWZpbmVkJyA/IG8ucm9sbG9mZkZhY3RvciA6IHBhLnJvbGxvZmZGYWN0b3IsXG4gICAgICAgICAgcGFubmluZ01vZGVsOiB0eXBlb2Ygby5wYW5uaW5nTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5wYW5uaW5nTW9kZWwgOiBwYS5wYW5uaW5nTW9kZWxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHBhbm5lciB2YWx1ZXMgb3IgY3JlYXRlIGEgbmV3IHBhbm5lciBpZiBub25lIGV4aXN0cy5cbiAgICAgICAgdmFyIHBhbm5lciA9IHNvdW5kLl9wYW5uZXI7XG4gICAgICAgIGlmIChwYW5uZXIpIHtcbiAgICAgICAgICBwYW5uZXIuY29uZUlubmVyQW5nbGUgPSBwYS5jb25lSW5uZXJBbmdsZTtcbiAgICAgICAgICBwYW5uZXIuY29uZU91dGVyQW5nbGUgPSBwYS5jb25lT3V0ZXJBbmdsZTtcbiAgICAgICAgICBwYW5uZXIuY29uZU91dGVyR2FpbiA9IHBhLmNvbmVPdXRlckdhaW47XG4gICAgICAgICAgcGFubmVyLmRpc3RhbmNlTW9kZWwgPSBwYS5kaXN0YW5jZU1vZGVsO1xuICAgICAgICAgIHBhbm5lci5tYXhEaXN0YW5jZSA9IHBhLm1heERpc3RhbmNlO1xuICAgICAgICAgIHBhbm5lci5yZWZEaXN0YW5jZSA9IHBhLnJlZkRpc3RhbmNlO1xuICAgICAgICAgIHBhbm5lci5yb2xsb2ZmRmFjdG9yID0gcGEucm9sbG9mZkZhY3RvcjtcbiAgICAgICAgICBwYW5uZXIucGFubmluZ01vZGVsID0gcGEucGFubmluZ01vZGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgcG9zaXRpb24gdG8gc2V0dXAgdGhlIG5vZGUgd2l0aC5cbiAgICAgICAgICBpZiAoIXNvdW5kLl9wb3MpIHtcbiAgICAgICAgICAgIHNvdW5kLl9wb3MgPSBzZWxmLl9wb3MgfHwgWzAsIDAsIC0wLjVdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYW5uZXIgbm9kZS5cbiAgICAgICAgICBzZXR1cFBhbm5lcihzb3VuZCwgJ3NwYXRpYWwnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKiBTaW5nbGUgU291bmQgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogQWRkIG5ldyBwcm9wZXJ0aWVzIHRvIHRoZSBjb3JlIFNvdW5kIGluaXQuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBfc3VwZXIgQ29yZSBTb3VuZCBpbml0IG1ldGhvZC5cbiAgICogQHJldHVybiB7U291bmR9XG4gICAqL1xuICBTb3VuZC5wcm90b3R5cGUuaW5pdCA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuXG4gICAgICAvLyBTZXR1cCB1c2VyLWRlZmluZWQgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fb3JpZW50YXRpb24gPSBwYXJlbnQuX29yaWVudGF0aW9uO1xuICAgICAgc2VsZi5fc3RlcmVvID0gcGFyZW50Ll9zdGVyZW87XG4gICAgICBzZWxmLl9wb3MgPSBwYXJlbnQuX3BvcztcbiAgICAgIHNlbGYuX3Bhbm5lckF0dHIgPSBwYXJlbnQuX3Bhbm5lckF0dHI7XG5cbiAgICAgIC8vIENvbXBsZXRlIGluaXRpbGl6YXRpb24gd2l0aCBob3dsZXIuanMgY29yZSBTb3VuZCdzIGluaXQgZnVuY3Rpb24uXG4gICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcblxuICAgICAgLy8gSWYgYSBzdGVyZW8gb3IgcG9zaXRpb24gd2FzIHNwZWNpZmllZCwgc2V0IGl0IHVwLlxuICAgICAgaWYgKHNlbGYuX3N0ZXJlbykge1xuICAgICAgICBwYXJlbnQuc3RlcmVvKHNlbGYuX3N0ZXJlbyk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuX3Bvcykge1xuICAgICAgICBwYXJlbnQucG9zKHNlbGYuX3Bvc1swXSwgc2VsZi5fcG9zWzFdLCBzZWxmLl9wb3NbMl0sIHNlbGYuX2lkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KShTb3VuZC5wcm90b3R5cGUuaW5pdCk7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBTb3VuZC5yZXNldCBtZXRob2QgdG8gY2xlYW4gdXAgcHJvcGVydGllcyBmcm9tIHRoZSBzcGF0aWFsIHBsdWdpbi5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IF9zdXBlciBTb3VuZCByZXNldCBtZXRob2QuXG4gICAqIEByZXR1cm4ge1NvdW5kfVxuICAgKi9cbiAgU291bmQucHJvdG90eXBlLnJlc2V0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG5cbiAgICAgIC8vIFJlc2V0IGFsbCBzcGF0aWFsIHBsdWdpbiBwcm9wZXJ0aWVzIG9uIHRoaXMgc291bmQuXG4gICAgICBzZWxmLl9vcmllbnRhdGlvbiA9IHBhcmVudC5fb3JpZW50YXRpb247XG4gICAgICBzZWxmLl9wb3MgPSBwYXJlbnQuX3BvcztcbiAgICAgIHNlbGYuX3Bhbm5lckF0dHIgPSBwYXJlbnQuX3Bhbm5lckF0dHI7XG5cbiAgICAgIC8vIENvbXBsZXRlIHJlc2V0dGluZyBvZiB0aGUgc291bmQuXG4gICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgfSkoU291bmQucHJvdG90eXBlLnJlc2V0KTtcblxuICAvKiogSGVscGVyIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBwYW5uZXIgbm9kZSBhbmQgc2F2ZSBpdCBvbiB0aGUgc291bmQuXG4gICAqIEBwYXJhbSAge1NvdW5kfSBzb3VuZCBTcGVjaWZpYyBzb3VuZCB0byBzZXR1cCBwYW5uaW5nIG9uLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUeXBlIG9mIHBhbm5lciB0byBjcmVhdGU6ICdzdGVyZW8nIG9yICdzcGF0aWFsJy5cbiAgICovXG4gIHZhciBzZXR1cFBhbm5lciA9IGZ1bmN0aW9uKHNvdW5kLCB0eXBlKSB7XG4gICAgdHlwZSA9IHR5cGUgfHwgJ3NwYXRpYWwnO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgcGFubmVyIG5vZGUuXG4gICAgaWYgKHR5cGUgPT09ICdzcGF0aWFsJykge1xuICAgICAgc291bmQuX3Bhbm5lciA9IEhvd2xlci5jdHguY3JlYXRlUGFubmVyKCk7XG4gICAgICBzb3VuZC5fcGFubmVyLmNvbmVJbm5lckFuZ2xlID0gc291bmQuX3Bhbm5lckF0dHIuY29uZUlubmVyQW5nbGU7XG4gICAgICBzb3VuZC5fcGFubmVyLmNvbmVPdXRlckFuZ2xlID0gc291bmQuX3Bhbm5lckF0dHIuY29uZU91dGVyQW5nbGU7XG4gICAgICBzb3VuZC5fcGFubmVyLmNvbmVPdXRlckdhaW4gPSBzb3VuZC5fcGFubmVyQXR0ci5jb25lT3V0ZXJHYWluO1xuICAgICAgc291bmQuX3Bhbm5lci5kaXN0YW5jZU1vZGVsID0gc291bmQuX3Bhbm5lckF0dHIuZGlzdGFuY2VNb2RlbDtcbiAgICAgIHNvdW5kLl9wYW5uZXIubWF4RGlzdGFuY2UgPSBzb3VuZC5fcGFubmVyQXR0ci5tYXhEaXN0YW5jZTtcbiAgICAgIHNvdW5kLl9wYW5uZXIucmVmRGlzdGFuY2UgPSBzb3VuZC5fcGFubmVyQXR0ci5yZWZEaXN0YW5jZTtcbiAgICAgIHNvdW5kLl9wYW5uZXIucm9sbG9mZkZhY3RvciA9IHNvdW5kLl9wYW5uZXJBdHRyLnJvbGxvZmZGYWN0b3I7XG4gICAgICBzb3VuZC5fcGFubmVyLnBhbm5pbmdNb2RlbCA9IHNvdW5kLl9wYW5uZXJBdHRyLnBhbm5pbmdNb2RlbDtcbiAgICAgIHNvdW5kLl9wYW5uZXIuc2V0UG9zaXRpb24oc291bmQuX3Bvc1swXSwgc291bmQuX3Bvc1sxXSwgc291bmQuX3Bvc1syXSk7XG4gICAgICBzb3VuZC5fcGFubmVyLnNldE9yaWVudGF0aW9uKHNvdW5kLl9vcmllbnRhdGlvblswXSwgc291bmQuX29yaWVudGF0aW9uWzFdLCBzb3VuZC5fb3JpZW50YXRpb25bMl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzb3VuZC5fcGFubmVyID0gSG93bGVyLmN0eC5jcmVhdGVTdGVyZW9QYW5uZXIoKTtcbiAgICAgIHNvdW5kLl9wYW5uZXIucGFuLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9zdGVyZW8sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgIH1cblxuICAgIHNvdW5kLl9wYW5uZXIuY29ubmVjdChzb3VuZC5fbm9kZSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNvbm5lY3Rpb25zLlxuICAgIGlmICghc291bmQuX3BhdXNlZCkge1xuICAgICAgc291bmQuX3BhcmVudC5wYXVzZShzb3VuZC5faWQsIHRydWUpLnBsYXkoc291bmQuX2lkLCB0cnVlKTtcbiAgICB9XG4gIH07XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaG93bGVyL2Rpc3QvaG93bGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wiYXVkaW9GaWxlXCI6XCJib2xsbmFzQnVzLm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjE3Mi4yNjU2MjUsXCJtYWduaXR1ZGVcIjotMTcuMzk5NzQ2fSx7XCJmcmVxXCI6NjQuNTk5NjA5LFwibWFnbml0dWRlXCI6LTIxLjk2ODI5fSx7XCJmcmVxXCI6MzY2LjA2NDQ1MyxcIm1hZ25pdHVkZVwiOi0zMi41MjgwNDl9LHtcImZyZXFcIjo1MTYuNzk2ODc1LFwibWFnbml0dWRlXCI6LTM4LjU0MjM1OH0se1wiZnJlcVwiOjY4OS4wNjI1LFwibWFnbml0dWRlXCI6LTM5LjAzODQ0NX0se1wiZnJlcVwiOjg2MS4zMjgxMjUsXCJtYWduaXR1ZGVcIjotMzkuNjM4MzE3fSx7XCJmcmVxXCI6Nzc1LjE5NTMxMixcIm1hZ25pdHVkZVwiOi0zOS42NjY1NX0se1wiZnJlcVwiOjk5MC41MjczNDQsXCJtYWduaXR1ZGVcIjotNDAuMDE2MjAxfSx7XCJmcmVxXCI6OTI1LjkyNzczNCxcIm1hZ25pdHVkZVwiOi00MC41MTc4OTV9LHtcImZyZXFcIjoxMDk4LjE5MzM1OSxcIm1hZ25pdHVkZVwiOi00MS4wNjA1OTN9LHtcImZyZXFcIjoxMzU2LjU5MTc5NyxcIm1hZ25pdHVkZVwiOi00MS4yNzQ4NzZ9LHtcImZyZXFcIjoxMjcwLjQ1ODk4NCxcIm1hZ25pdHVkZVwiOi00My43MDIyNDR9LHtcImZyZXFcIjoxODczLjM4ODY3MixcIm1hZ25pdHVkZVwiOi00NC4xNjk0MjZ9LHtcImZyZXFcIjoxNTI4Ljg1NzQyMixcIm1hZ25pdHVkZVwiOi00NS4xMzUyODF9LHtcImZyZXFcIjoxNjM2LjUyMzQzOCxcIm1hZ25pdHVkZVwiOi00NS42NTM3MzZ9LHtcImZyZXFcIjoxNzQ0LjE4OTQ1MyxcIm1hZ25pdHVkZVwiOi00NS43OTAwNTh9XX0se1wiYXVkaW9GaWxlXCI6XCJjb29wLm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjg2LjEzMjgxMixcIm1hZ25pdHVkZVwiOi0yOC45MzI1Mzd9LHtcImZyZXFcIjoyMzYuODY1MjM0LFwibWFnbml0dWRlXCI6LTMyLjMyNzk5NX0se1wiZnJlcVwiOjQ1Mi4xOTcyNjYsXCJtYWduaXR1ZGVcIjotMzYuMjg5NDl9LHtcImZyZXFcIjozNDQuNTMxMjUsXCJtYWduaXR1ZGVcIjotMzYuNzg5MjYxfSx7XCJmcmVxXCI6NTU5Ljg2MzI4MSxcIm1hZ25pdHVkZVwiOi0zOC42MTY4NH0se1wiZnJlcVwiOjczMi4xMjg5MDYsXCJtYWduaXR1ZGVcIjotMzkuNDk0Nzc4fSx7XCJmcmVxXCI6Nzk2LjcyODUxNixcIm1hZ25pdHVkZVwiOi0zOS41MTE5OTN9LHtcImZyZXFcIjoxMDc2LjY2MDE1NixcIm1hZ25pdHVkZVwiOi00OC40MjMwODh9LHtcImZyZXFcIjoxMTg0LjMyNjE3MixcIm1hZ25pdHVkZVwiOi01MC40ODQxODh9LHtcImZyZXFcIjoxMjQ4LjkyNTc4MSxcIm1hZ25pdHVkZVwiOi01MC42NjQ4NDF9LHtcImZyZXFcIjoxNDY0LjI1NzgxMixcIm1hZ25pdHVkZVwiOi01MS4wNzU3MzN9LHtcImZyZXFcIjoxMzk5LjY1ODIwMyxcIm1hZ25pdHVkZVwiOi01MS4zMjk5MDZ9LHtcImZyZXFcIjoxNjU4LjA1NjY0MSxcIm1hZ25pdHVkZVwiOi01MS43Mjk4OTd9LHtcImZyZXFcIjoxODUxLjg1NTQ2OSxcIm1hZ25pdHVkZVwiOi01My4wMTY2Nzh9LHtcImZyZXFcIjoyMTEwLjI1MzkwNixcIm1hZ25pdHVkZVwiOi01NS42MjEzNjV9LHtcImZyZXFcIjoyMDI0LjEyMTA5NCxcIm1hZ25pdHVkZVwiOi01Ny41NTA1NDl9XX0se1wiYXVkaW9GaWxlXCI6XCJjb3VudGluZzEubXAzXCIsXCJzcGVjdHJ1bVwiOlt7XCJmcmVxXCI6MTkzLjc5ODgyOCxcIm1hZ25pdHVkZVwiOi0yNi4wMTc1NjF9LHtcImZyZXFcIjo0MDkuMTMwODU5LFwibWFnbml0dWRlXCI6LTM1LjQ3NTQwM30se1wiZnJlcVwiOjYwMi45Mjk2ODgsXCJtYWduaXR1ZGVcIjotNDMuMDIxOTI3fSx7XCJmcmVxXCI6Nzk2LjcyODUxNixcIm1hZ25pdHVkZVwiOi00Ni40ODA1OTh9LHtcImZyZXFcIjo3MTkyLjA4OTg0NCxcIm1hZ25pdHVkZVwiOi01Mi4zMDg0ODN9LHtcImZyZXFcIjo3MjM1LjE1NjI1LFwibWFnbml0dWRlXCI6LTUyLjYzMzM2OX0se1wiZnJlcVwiOjgyOTAuMjgzMjAzLFwibWFnbml0dWRlXCI6LTUyLjY2OTY3OH0se1wiZnJlcVwiOjcxMDUuOTU3MDMxLFwibWFnbml0dWRlXCI6LTUyLjk0NTEyMn0se1wiZnJlcVwiOjY1NjcuNjI2OTUzLFwibWFnbml0dWRlXCI6LTUyLjk4ODA2fSx7XCJmcmVxXCI6NjUwMy4wMjczNDQsXCJtYWduaXR1ZGVcIjotNTMuMTg0OTY3fSx7XCJmcmVxXCI6NjQxNi44OTQ1MzEsXCJtYWduaXR1ZGVcIjotNTMuNDczNDQ2fSx7XCJmcmVxXCI6ODE4Mi42MTcxODgsXCJtYWduaXR1ZGVcIjotNTMuNTMxMzU3fSx7XCJmcmVxXCI6NTY4NC43NjU2MjUsXCJtYWduaXR1ZGVcIjotNTMuNjAyNTMxfSx7XCJmcmVxXCI6ODEzOS41NTA3ODEsXCJtYWduaXR1ZGVcIjotNTQuMDYyNzc4fSx7XCJmcmVxXCI6NjY1My43NTk3NjYsXCJtYWduaXR1ZGVcIjotNTQuMTU3Mzk4fSx7XCJmcmVxXCI6NTU3Ny4wOTk2MDksXCJtYWduaXR1ZGVcIjotNTQuNDY5MzgzfV19LHtcImF1ZGlvRmlsZVwiOlwiY3Jvc3N3YWxrLm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjI1Ny44MTI1LFwibWFnbml0dWRlXCI6LTM3LjY2NjcyOX0se1wiZnJlcVwiOjgyMC4zMTI1LFwibWFnbml0dWRlXCI6LTQxLjc3NzA4OH0se1wiZnJlcVwiOjc1MCxcIm1hZ25pdHVkZVwiOi00My42NDc5NzZ9LHtcImZyZXFcIjo1MzkuMDYyNSxcIm1hZ25pdHVkZVwiOi00Ny4wMzg0NDh9LHtcImZyZXFcIjoxMzgyLjgxMjUsXCJtYWduaXR1ZGVcIjotNDcuNzEzODcxfSx7XCJmcmVxXCI6OTYwLjkzNzUsXCJtYWduaXR1ZGVcIjotNDcuODE1MDg2fSx7XCJmcmVxXCI6MTQ1My4xMjUsXCJtYWduaXR1ZGVcIjotNDkuNTIxMDE1fSx7XCJmcmVxXCI6MTIxOC43NSxcIm1hZ25pdHVkZVwiOi00OS44ODYxODl9LHtcImZyZXFcIjoyOTA2LjI1LFwibWFnbml0dWRlXCI6LTUwLjI0MzcyNX0se1wiZnJlcVwiOjEyODkuMDYyNSxcIm1hZ25pdHVkZVwiOi01MC40NTU2OTJ9LHtcImZyZXFcIjoyNjI1LFwibWFnbml0dWRlXCI6LTUxLjgwMTA3NX0se1wiZnJlcVwiOjE1OTMuNzUsXCJtYWduaXR1ZGVcIjotNTEuODQ2MDk2fSx7XCJmcmVxXCI6MzAyMy40Mzc1LFwibWFnbml0dWRlXCI6LTUyLjEzNDU3MX0se1wiZnJlcVwiOjIwMzkuMDYyNSxcIm1hZ25pdHVkZVwiOi01Mi4xNDQ0ODJ9LHtcImZyZXFcIjoyMzIwLjMxMjUsXCJtYWduaXR1ZGVcIjotNTIuNjU3MDI0fSx7XCJmcmVxXCI6MTkyMS44NzUsXCJtYWduaXR1ZGVcIjotNTMuMzM4MjE5fV19LHtcImF1ZGlvRmlsZVwiOlwiZW1wdHlXb3Jkc05lYS5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjoyMTUuMzMyMDMxLFwibWFnbml0dWRlXCI6LTE5LjUyMDE1OX0se1wiZnJlcVwiOjQzMC42NjQwNjIsXCJtYWduaXR1ZGVcIjotMjUuMjE5MDI1fSx7XCJmcmVxXCI6NjAyLjkyOTY4OCxcIm1hZ25pdHVkZVwiOi0zMS4xNzU1MjJ9LHtcImZyZXFcIjo2NC41OTk2MDksXCJtYWduaXR1ZGVcIjotMzUuMTkzMjc5fSx7XCJmcmVxXCI6Nzk2LjcyODUxNixcIm1hZ25pdHVkZVwiOi0zOS44NjgyNzl9LHtcImZyZXFcIjoxNzg3LjI1NTg1OSxcIm1hZ25pdHVkZVwiOi00MS4zOTExODJ9LHtcImZyZXFcIjo4ODIuODYxMzI4LFwibWFnbml0dWRlXCI6LTQyLjgyNzA0NX0se1wiZnJlcVwiOjEwNTUuMTI2OTUzLFwibWFnbml0dWRlXCI6LTQ1LjAwOTE3MX0se1wiZnJlcVwiOjE2NzkuNTg5ODQ0LFwibWFnbml0dWRlXCI6LTQ1LjAxOTQ0NH0se1wiZnJlcVwiOjExMTkuNzI2NTYyLFwibWFnbml0dWRlXCI6LTQ1LjM3NDk2Mn0se1wiZnJlcVwiOjE1NzEuOTIzODI4LFwibWFnbml0dWRlXCI6LTQ1LjM5MjM4N30se1wiZnJlcVwiOjE0MjEuMTkxNDA2LFwibWFnbml0dWRlXCI6LTQ2LjE1Njk4Mn0se1wiZnJlcVwiOjEyNzAuNDU4OTg0LFwibWFnbml0dWRlXCI6LTQ2LjM3NzIyOH0se1wiZnJlcVwiOjE4OTQuOTIxODc1LFwibWFnbml0dWRlXCI6LTQ2LjQ3MDI5NX0se1wiZnJlcVwiOjE0ODUuNzkxMDE2LFwibWFnbml0dWRlXCI6LTQ3LjI2NjM2OX0se1wiZnJlcVwiOjg2MTMuMjgxMjUsXCJtYWduaXR1ZGVcIjotNDcuNDg5NjU1fV19LHtcImF1ZGlvRmlsZVwiOlwiZmxpZ2h0TGFuZGluZy5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjoxNTAuNzMyNDIyLFwibWFnbml0dWRlXCI6LTIzLjIyOTIxfSx7XCJmcmVxXCI6MzIyLjk5ODA0NyxcIm1hZ25pdHVkZVwiOi0yNy44MTc2MzN9LHtcImZyZXFcIjo4Ni4xMzI4MTIsXCJtYWduaXR1ZGVcIjotMjguNzU3ODMyfSx7XCJmcmVxXCI6ODgyLjg2MTMyOCxcIm1hZ25pdHVkZVwiOi0zNi4wNDU5MjV9LHtcImZyZXFcIjo0NTIuMTk3MjY2LFwibWFnbml0dWRlXCI6LTM2LjE2NTE0Nn0se1wiZnJlcVwiOjUxNi43OTY4NzUsXCJtYWduaXR1ZGVcIjotMzguMTkyOTA5fSx7XCJmcmVxXCI6NjQ1Ljk5NjA5NCxcIm1hZ25pdHVkZVwiOi0zOS40NzI1fSx7XCJmcmVxXCI6MTA1NS4xMjY5NTMsXCJtYWduaXR1ZGVcIjotNDAuOTE4NjEzfSx7XCJmcmVxXCI6OTkwLjUyNzM0NCxcIm1hZ25pdHVkZVwiOi00MC45NjgxODl9LHtcImZyZXFcIjo3MzIuMTI4OTA2LFwibWFnbml0dWRlXCI6LTQxLjM3OTI4fSx7XCJmcmVxXCI6Nzk2LjcyODUxNixcIm1hZ25pdHVkZVwiOi00MS41MTg5Njd9LHtcImZyZXFcIjoxNDg1Ljc5MTAxNixcIm1hZ25pdHVkZVwiOi00Mi40Mzg3ODJ9LHtcImZyZXFcIjoxMjQ4LjkyNTc4MSxcIm1hZ25pdHVkZVwiOi00NC4yODM2NjV9LHtcImZyZXFcIjoxNzY1LjcyMjY1NixcIm1hZ25pdHVkZVwiOi00NC44MzQ3NTF9LHtcImZyZXFcIjoxMTYyLjc5Mjk2OSxcIm1hZ25pdHVkZVwiOi00NS45NjE1MzZ9LHtcImZyZXFcIjoxMzU2LjU5MTc5NyxcIm1hZ25pdHVkZVwiOi00Ni41NDA1MzF9XX0se1wiYXVkaW9GaWxlXCI6XCJmcm9tQmVybGluLm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjEyOS4xOTkyMTksXCJtYWduaXR1ZGVcIjotMTkuMzM3MzI4fSx7XCJmcmVxXCI6MTcyLjI2NTYyNSxcIm1hZ25pdHVkZVwiOi0yMC4wNjExNTd9LHtcImZyZXFcIjoyMzYuODY1MjM0LFwibWFnbml0dWRlXCI6LTIxLjI0MzM4Mn0se1wiZnJlcVwiOjM2Ni4wNjQ0NTMsXCJtYWduaXR1ZGVcIjotMjUuMjQ5NjE3fSx7XCJmcmVxXCI6NDA5LjEzMDg1OSxcIm1hZ25pdHVkZVwiOi0yNS4yNTAyMDJ9LHtcImZyZXFcIjozMjIuOTk4MDQ3LFwibWFnbml0dWRlXCI6LTI1LjMyNDkzfSx7XCJmcmVxXCI6NDczLjczMDQ2OSxcIm1hZ25pdHVkZVwiOi0yNS40NzM4NjR9LHtcImZyZXFcIjo2NDUuOTk2MDk0LFwibWFnbml0dWRlXCI6LTI2LjI5MTIzN30se1wiZnJlcVwiOjYwMi45Mjk2ODgsXCJtYWduaXR1ZGVcIjotMjYuODIwNzk3fSx7XCJmcmVxXCI6OTY4Ljk5NDE0MSxcIm1hZ25pdHVkZVwiOi0yOC40MjMwNzV9LHtcImZyZXFcIjo3OTYuNzI4NTE2LFwibWFnbml0dWRlXCI6LTI4LjYxNjg2NX0se1wiZnJlcVwiOjkwNC4zOTQ1MzEsXCJtYWduaXR1ZGVcIjotMzAuMzI3MjkxfSx7XCJmcmVxXCI6MTQ2NC4yNTc4MTIsXCJtYWduaXR1ZGVcIjotMzIuNzE4NTF9LHtcImZyZXFcIjoxMTg0LjMyNjE3MixcIm1hZ25pdHVkZVwiOi0zMy41MzgzNzJ9LHtcImZyZXFcIjoxMTE5LjcyNjU2MixcIm1hZ25pdHVkZVwiOi0zMy42MzgyNjh9LHtcImZyZXFcIjoxMjcwLjQ1ODk4NCxcIm1hZ25pdHVkZVwiOi0zNC4yMDAxNzJ9XX0se1wiYXVkaW9GaWxlXCI6XCJraXRjaGVuMS5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjoxMDcuNjY2MDE2LFwibWFnbml0dWRlXCI6LTIzLjAxODAzMn0se1wiZnJlcVwiOjE1MC43MzI0MjIsXCJtYWduaXR1ZGVcIjotMjMuMDYzMDkzfSx7XCJmcmVxXCI6MTA3LjY2NjAxNixcIm1hZ25pdHVkZVwiOi0yMy42ODM4MzJ9LHtcImZyZXFcIjoxNTAuNzMyNDIyLFwibWFnbml0dWRlXCI6LTIzLjg3MDY2OH0se1wiZnJlcVwiOjIzNi44NjUyMzQsXCJtYWduaXR1ZGVcIjotMjcuNTc4MDg3fSx7XCJmcmVxXCI6MjM2Ljg2NTIzNCxcIm1hZ25pdHVkZVwiOi0yOC40NTg0Mzl9LHtcImZyZXFcIjozMDEuNDY0ODQ0LFwibWFnbml0dWRlXCI6LTI4LjUyODc5NX0se1wiZnJlcVwiOjMwMS40NjQ4NDQsXCJtYWduaXR1ZGVcIjotMjkuMTQ2NDYxfSx7XCJmcmVxXCI6NDMwLjY2NDA2MixcIm1hZ25pdHVkZVwiOi0zMS4xMjI5MjV9LHtcImZyZXFcIjo0MzAuNjY0MDYyLFwibWFnbml0dWRlXCI6LTMxLjYyMDcyNn0se1wiZnJlcVwiOjUzOC4zMzAwNzgsXCJtYWduaXR1ZGVcIjotMzIuMjc5ODQ2fSx7XCJmcmVxXCI6NTM4LjMzMDA3OCxcIm1hZ25pdHVkZVwiOi0zMi43NjY3MzF9LHtcImZyZXFcIjo0OTUuMjYzNjcyLFwibWFnbml0dWRlXCI6LTMyLjc4MjEyNH0se1wiZnJlcVwiOjQ5NS4yNjM2NzIsXCJtYWduaXR1ZGVcIjotMzIuODMzODYyfSx7XCJmcmVxXCI6NjQ1Ljk5NjA5NCxcIm1hZ25pdHVkZVwiOi0zMy4xMjE2NDd9LHtcImZyZXFcIjo2NDUuOTk2MDk0LFwibWFnbml0dWRlXCI6LTMzLjIxODIzMX1dfSx7XCJhdWRpb0ZpbGVcIjpcInBlbmRlbFRhZy5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjoyMzYuODY1MjM0LFwibWFnbml0dWRlXCI6LTE2LjIyMTU5Mn0se1wiZnJlcVwiOjY0LjU5OTYwOSxcIm1hZ25pdHVkZVwiOi0xOC42ODgwOTF9LHtcImZyZXFcIjo0MDkuMTMwODU5LFwibWFnbml0dWRlXCI6LTIwLjMzNjE3OH0se1wiZnJlcVwiOjU1OS44NjMyODEsXCJtYWduaXR1ZGVcIjotMjEuNjIwNTI3fSx7XCJmcmVxXCI6NjI0LjQ2Mjg5MSxcIm1hZ25pdHVkZVwiOi0yMy42ODU0Mjl9LHtcImZyZXFcIjo4NjEuMzI4MTI1LFwibWFnbml0dWRlXCI6LTI1LjA2NzYzNX0se1wiZnJlcVwiOjkyNS45Mjc3MzQsXCJtYWduaXR1ZGVcIjotMjUuODMyNjc4fSx7XCJmcmVxXCI6MTcyMi42NTYyNSxcIm1hZ25pdHVkZVwiOi0yNy4xMDk4MDJ9LHtcImZyZXFcIjoxODczLjM4ODY3MixcIm1hZ25pdHVkZVwiOi0yNy4xODk3MzV9LHtcImZyZXFcIjoxMDU1LjEyNjk1MyxcIm1hZ25pdHVkZVwiOi0yOS41MDc3Njd9LHtcImZyZXFcIjoxMjQ4LjkyNTc4MSxcIm1hZ25pdHVkZVwiOi0yOS44MDYyMTF9LHtcImZyZXFcIjoxMTQxLjI1OTc2NixcIm1hZ25pdHVkZVwiOi0zMC4wNjUxODd9LHtcImZyZXFcIjoxMzEzLjUyNTM5MSxcIm1hZ25pdHVkZVwiOi0zMC4yNTM3Njd9LHtcImZyZXFcIjoxOTE2LjQ1NTA3OCxcIm1hZ25pdHVkZVwiOi0zMC4zNjcxNjN9LHtcImZyZXFcIjoxNDIxLjE5MTQwNixcIm1hZ25pdHVkZVwiOi0zMS41Mzk3MTl9LHtcImZyZXFcIjoxNTI4Ljg1NzQyMixcIm1hZ25pdHVkZVwiOi0zMS43MjI1MDd9XX0se1wiYXVkaW9GaWxlXCI6XCJwZW5kZWxUYWcyLm1wM1wiLFwic3BlY3RydW1cIjpbe1wiZnJlcVwiOjMwMS40NjQ4NDQsXCJtYWduaXR1ZGVcIjotMjguNTg4MjU3fSx7XCJmcmVxXCI6MTUwLjczMjQyMixcIm1hZ25pdHVkZVwiOi0yOS4yOTM5OH0se1wiZnJlcVwiOjM2Ni4wNjQ0NTMsXCJtYWduaXR1ZGVcIjotMzEuNDI5OTQ3fSx7XCJmcmVxXCI6ODYuMTMyODEyLFwibWFnbml0dWRlXCI6LTMxLjk5NzM0OX0se1wiZnJlcVwiOjY4OS4wNjI1LFwibWFnbml0dWRlXCI6LTMyLjI2MjQ5N30se1wiZnJlcVwiOjc3NS4xOTUzMTIsXCJtYWduaXR1ZGVcIjotMzMuODU1NjE0fSx7XCJmcmVxXCI6NTU5Ljg2MzI4MSxcIm1hZ25pdHVkZVwiOi0zNC4xNjI1NTJ9LHtcImZyZXFcIjo5NDcuNDYwOTM4LFwibWFnbml0dWRlXCI6LTM1LjM3MDY2N30se1wiZnJlcVwiOjg2MS4zMjgxMjUsXCJtYWduaXR1ZGVcIjotMzYuNjQwNDc2fSx7XCJmcmVxXCI6MTA3Ni42NjAxNTYsXCJtYWduaXR1ZGVcIjotMzkuMDU1Mzc4fSx7XCJmcmVxXCI6MTI0OC45MjU3ODEsXCJtYWduaXR1ZGVcIjotNDAuNzQwNDk4fSx7XCJmcmVxXCI6MTMxMy41MjUzOTEsXCJtYWduaXR1ZGVcIjotNDEuMjQ4MTc3fSx7XCJmcmVxXCI6MTQ0Mi43MjQ2MDksXCJtYWduaXR1ZGVcIjotNDMuNDE1MjQ1fSx7XCJmcmVxXCI6MTU1MC4zOTA2MjUsXCJtYWduaXR1ZGVcIjotNDQuMTc0MDI2fSx7XCJmcmVxXCI6MTY1OC4wNTY2NDEsXCJtYWduaXR1ZGVcIjotNDQuNDI2MDI5fSx7XCJmcmVxXCI6MjAwMi41ODc4OTEsXCJtYWduaXR1ZGVcIjotNDUuMTM3NDA1fV19LHtcImF1ZGlvRmlsZVwiOlwic2lyZW5CaXJkcy5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjoyOTA2Ljk4MjQyMixcIm1hZ25pdHVkZVwiOi0yMy4xNTY2MjR9LHtcImZyZXFcIjo3MzIuMTI4OTA2LFwibWFnbml0dWRlXCI6LTI2LjY0NTczMX0se1wiZnJlcVwiOjMyMi45OTgwNDcsXCJtYWduaXR1ZGVcIjotMjcuNDIwOTA4fSx7XCJmcmVxXCI6OTY4Ljk5NDE0MSxcIm1hZ25pdHVkZVwiOi0yNy41MTU1MzV9LHtcImZyZXFcIjoxNzIuMjY1NjI1LFwibWFnbml0dWRlXCI6LTI3LjY4MDI2NX0se1wiZnJlcVwiOjEyOS4xOTkyMTksXCJtYWduaXR1ZGVcIjotMjcuNzU3ODUxfSx7XCJmcmVxXCI6MTkzNy45ODgyODEsXCJtYWduaXR1ZGVcIjotMjkuMDQ0ODR9LHtcImZyZXFcIjo4ODIuODYxMzI4LFwibWFnbml0dWRlXCI6LTI5LjU4MDV9LHtcImZyZXFcIjo2MDIuOTI5Njg4LFwibWFnbml0dWRlXCI6LTI5Ljg0NDYyNH0se1wiZnJlcVwiOjQ1Mi4xOTcyNjYsXCJtYWduaXR1ZGVcIjotMzAuMjM1NDd9LHtcImZyZXFcIjo1MzguMzMwMDc4LFwibWFnbml0dWRlXCI6LTMwLjcxMTMwNH0se1wiZnJlcVwiOjEwOTguMTkzMzU5LFwibWFnbml0dWRlXCI6LTMxLjA2NTI2OH0se1wiZnJlcVwiOjEzMTMuNTI1MzkxLFwibWFnbml0dWRlXCI6LTMzLjkyMzU1M30se1wiZnJlcVwiOjIxOTYuMzg2NzE5LFwibWFnbml0dWRlXCI6LTMzLjkyNzAzMn0se1wiZnJlcVwiOjIxMzEuNzg3MTA5LFwibWFnbml0dWRlXCI6LTM1LjE4ODE2fSx7XCJmcmVxXCI6MjMwNC4wNTI3MzQsXCJtYWduaXR1ZGVcIjotMzUuMjcwMzMyfV19LHtcImF1ZGlvRmlsZVwiOlwic25vdy5tcDNcIixcInNwZWN0cnVtXCI6W3tcImZyZXFcIjo2NC41OTk2MDksXCJtYWduaXR1ZGVcIjotMjkuNjc3MTY2fSx7XCJmcmVxXCI6MzQ0LjUzMTI1LFwibWFnbml0dWRlXCI6LTQwLjM0NzQ4NX0se1wiZnJlcVwiOjYwMi45Mjk2ODgsXCJtYWduaXR1ZGVcIjotNDQuMDQwNTU4fSx7XCJmcmVxXCI6Njg5LjA2MjUsXCJtYWduaXR1ZGVcIjotNDQuODk3OTE1fSx7XCJmcmVxXCI6OTI1LjkyNzczNCxcIm1hZ25pdHVkZVwiOi00OC44NzAxMDZ9LHtcImZyZXFcIjoxMjA1Ljg1OTM3NSxcIm1hZ25pdHVkZVwiOi00OS4wODYzMTl9LHtcImZyZXFcIjoxMDk4LjE5MzM1OSxcIm1hZ25pdHVkZVwiOi01MC45NzYwMTN9LHtcImZyZXFcIjoxMjkxLjk5MjE4OCxcIm1hZ25pdHVkZVwiOi01Mi4yMjQyMzZ9LHtcImZyZXFcIjoxNDIxLjE5MTQwNixcIm1hZ25pdHVkZVwiOi01My4zMzA1MjR9LHtcImZyZXFcIjoxNDg1Ljc5MTAxNixcIm1hZ25pdHVkZVwiOi01My40NzYyMTV9LHtcImZyZXFcIjoxMzc4LjEyNSxcIm1hZ25pdHVkZVwiOi01My42MTU4Mzd9LHtcImZyZXFcIjoxNjM2LjUyMzQzOCxcIm1hZ25pdHVkZVwiOi01NC41ODM5OTZ9LHtcImZyZXFcIjoxNzQ0LjE4OTQ1MyxcIm1hZ25pdHVkZVwiOi01NS4yNDEwMDV9LHtcImZyZXFcIjoxODA4Ljc4OTA2MixcIm1hZ25pdHVkZVwiOi01NS43MjYxMTZ9LHtcImZyZXFcIjoxOTM3Ljk4ODI4MSxcIm1hZ25pdHVkZVwiOi01Ny42NjUyNzZ9LHtcImZyZXFcIjoyMDI0LjEyMTA5NCxcIm1hZ25pdHVkZVwiOi01OS4yNTI4MTV9XX0se1wiYXVkaW9GaWxlXCI6XCJ3YWxraW5nSW5TdHJlZXQubXAzXCIsXCJzcGVjdHJ1bVwiOlt7XCJmcmVxXCI6MTI5LjE5OTIxOSxcIm1hZ25pdHVkZVwiOi0yNC44OTk0NzN9LHtcImZyZXFcIjoyNTguMzk4NDM4LFwibWFnbml0dWRlXCI6LTMwLjgwMDY2NX0se1wiZnJlcVwiOjIxNS4zMzIwMzEsXCJtYWduaXR1ZGVcIjotMzEuMDAzNTUzfSx7XCJmcmVxXCI6NjQuNTk5NjA5LFwibWFnbml0dWRlXCI6LTMyLjc0NjYzMn0se1wiZnJlcVwiOjkwNC4zOTQ1MzEsXCJtYWduaXR1ZGVcIjotMzUuNTQ1NTM2fSx7XCJmcmVxXCI6NjAyLjkyOTY4OCxcIm1hZ25pdHVkZVwiOi0zNS43NTU0OTd9LHtcImZyZXFcIjozNjYuMDY0NDUzLFwibWFnbml0dWRlXCI6LTM1LjkwNzEzMX0se1wiZnJlcVwiOjgzOS43OTQ5MjIsXCJtYWduaXR1ZGVcIjotMzYuMTQ2MDA0fSx7XCJmcmVxXCI6NDUyLjE5NzI2NixcIm1hZ25pdHVkZVwiOi0zNi4xNzQzNjZ9LHtcImZyZXFcIjo2ODkuMDYyNSxcIm1hZ25pdHVkZVwiOi0zNi43OTY1Mzl9LHtcImZyZXFcIjo5NjguOTk0MTQxLFwibWFnbml0dWRlXCI6LTM3LjM1MjM0NX0se1wiZnJlcVwiOjEwOTguMTkzMzU5LFwibWFnbml0dWRlXCI6LTM4LjEzMDE4NH0se1wiZnJlcVwiOjExODQuMzI2MTcyLFwibWFnbml0dWRlXCI6LTM4LjIyMjg3OH0se1wiZnJlcVwiOjExNDEuMjU5NzY2LFwibWFnbml0dWRlXCI6LTM4LjI4MzYyN30se1wiZnJlcVwiOjEzOTkuNjU4MjAzLFwibWFnbml0dWRlXCI6LTQxLjE3MDA5fSx7XCJmcmVxXCI6MTc4Ny4yNTU4NTksXCJtYWduaXR1ZGVcIjotNDMuNjUwNDg2fV19XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NwZWN0cmFsRGF0YS5qc29uXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9