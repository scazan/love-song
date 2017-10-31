
export default {
	choose: (array) => {
		return array[Math.floor(Math.random() * array.length)];
	},
	normalize: (coll) => {
		let collSum = coll.reduce((a,b) => a+b);
		return collSum > 0 ? coll.map( (weight) => weight / collSum) : coll.map(() => 0);
	},
	windex: (weights: Array<number>) => {
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
