const solution = (A) => {
	if (A[1] - A[0] == A[2] - A[1]) return [0, 1, 2];
	else return [];
};

module.exports = solution;
