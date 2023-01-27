const matrixTranspose = require('./matrixTranspose');

describe('matrixTranspose', () => {
	describe('size 1 matrices', () => {
		it('matrix is 1 ', () => {
			expect(matrixTranspose([[1]])).toStrictEqual([[1]]);
		});
	});
	it.only('2x3 matrix', () => {
		expect(
			matrixTranspose([
				[1, 2, 3],
				[4, 5, 6],
			])
		).toStrictEqual([
			[1, 4],
			[2, 5],
			[3, 6],
		]);
	});
});
