const solution = (A) => {
	let answer = [];

	for (k = 0; k < A.length; k++) {
		if (A[k + 1] - A[k] == A[k + 2] - A[k + 1]) answer.push([k, k + 1, k + 2]);
	}
	for (k = 0; k < A.length; k++) {
		if (A[k + 1] - A[k] == A[k + 3] - A[k + 2])
			answer.push([k, k + 1, k + 2, k + 3]);
	}
	console.log(answer);
	return answer;
};

module.exports = solution;
