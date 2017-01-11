/*
 * Basic Patterns implementation for Gibberish
 */
module.exports = function() {

	return {
		Pattern: (pattern) => [() => pattern.next().value],

		Pseq: function* Pseq(values, repetitions){
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
		},

		Prand: function* Prand(values, repetitions){

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
		},
	};

};
