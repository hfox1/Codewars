const solution = (A) => {
	if (A[1] - A[0] == A[2] - A[1]) return [0, 1, 2];
	if (A[2] - A[1] == A[3] - A[2]) return [1, 2, 3];
	else return [];
};

module.exports = solution;
