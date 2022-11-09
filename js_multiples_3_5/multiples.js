const solution = (number) => {
	let array = [];
	for (let i = 0; i < number; i++) {
		if (i % 3 === 0) {
			array.push(i);
		}
		if (i % 5 === 0) {
			array.push(i);
		}
	}
	let unique = [...new Set(array)];
	return unique.reduce((a, b) => a + b, 0);
};

module.exports = solution;
