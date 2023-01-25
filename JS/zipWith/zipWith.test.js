const zipWith = require('./zipWith');

describe('zipWith', () => {
	it('does .pow for length 1 arrays', () => {
		expect(zipWith(Math.pow, [10], [0])).toEqual([1]);
	});

	xit('does .pow', () => {
		expect(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])).toEqual([
			1, 10, 100, 1000,
		]);
	});

	xit('does .max', () => {
		expect(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1])).toEqual([
			4, 7, 7, 4, 7, 7,
		]);
	});

	xit('does func', () => {
		expect(
			zipWith(
				function (a, b) {
					return a + b;
				},
				[0, 1, 2, 3],
				[0, 1, 2, 3]
			)
		).toEqual([0, 2, 4, 6]);
	});

	xit('does inline', () => {
		expect(zipWith((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3])).toEqual([
			0, 2, 4, 6,
		]);
	});
});
