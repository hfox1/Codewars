function matrixTranspose(matrix) {
	// const returnRows = matrix[0].length;
	// const returnColumns = matrix.length;

	// for (let i = 0; i < returnRows; i++) {
	// 	answer.push([]);
	// 	for (let e = 0; e < returnColumns; e++) {
	// 		answer[i].push(matrix[e][i]);
	// 	}
	// }
	// return answer;

	// const answer = Array.from(new Array(matrix[0].length), () => []);

	// matrix.forEach((row, i) => {
	// 	row.forEach((element, j) => {
	// 		answer[j].push(element);
	// 	});
	// 	console.log(answer);
	// });
	// return answer;

	return matrix[0].map((_, i) => matrix.map((__, j) => matrix[j][i]));
}

module.exports = matrixTranspose;
