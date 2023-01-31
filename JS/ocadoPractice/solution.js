const solution = (A) => {
	const velocitiesEqual = (location, separation) => {
		return (
			A[location + 1] - A[location] ==
			A[location + 2 + separation] - A[location + 1 + separation]
		);
	};

	let answer = [];

	for (location = 0; location < A.length - 2; location++) {
		for (separation = 0; separation < A.length - location; separation++) {
			if (velocitiesEqual(location, separation)) {
				let subAnswer = [location, location + 1];
				for (l = 0; l <= separation; l++) {
					// console.log('velocitiesEqual', velocitiesEqual());
					if (velocitiesEqual(location + l, 0)) {
						subAnswer.push(location + l + 2);
						// console.log(location, separation, subAnswer);
						answer.push(subAnswer);
					}
				}
			}
		}
	}

	return answer;
};

module.exports = solution;
