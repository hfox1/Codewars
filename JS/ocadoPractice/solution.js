const solution = (A) => {
	let answer = [];

	const consecutiveVelEqual = (location) => {
		return A[location + 1] - A[location] === A[location + 2] - A[location + 1];
	};
	// console.log(A[A.length - 1]);

	// console.log(A.reduce((a, b) => a + b, 0));

	for (location = 0; location < A.length - 2; location++) {
		if (!consecutiveVelEqual(location)) {
			continue;
		} else if (consecutiveVelEqual(location)) {
			let subAnswer = [location, location + 1, location + 2];
			answer.push([...subAnswer]);
			for (length = 1; length < A.length - location; length++) {
				if (!consecutiveVelEqual(location + length)) {
					break;
				}
				if (consecutiveVelEqual(location + length)) {
					subAnswer.push(location + 2 + length);
					answer.push([...subAnswer]);
				}
			}
		}
	}

	return answer;
};

module.exports = solution;
