const solution = require('./solution');

describe('solution', () => {
	it('returns empty for none', () => {
		expect(solution([1, 2, 5]).toEqual([]));
	});

	xit('gets a single period', () => {
		expect(solution([1, 3, 5]).toEqual([0, 1, 2]));
	});

	xit('gets a single period', () => {});
	xit('gets a single period', () => {});
});
