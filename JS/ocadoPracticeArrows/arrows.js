const solution = (S) => {
	const arrows = S.split('');
	const count = {
		'^': 0,
		'<': 0,
		'>': 0,
		v: 0,
	};

	arrows.forEach((e) => {
		count[e] += 1;
	});

	let countArray = [count['^'], count['<'], count['>'], count.v];
	let countMax = Math.max(...countArray);
	const turns = S.length - countMax;
	return turns;
};
module.exports = solution;
