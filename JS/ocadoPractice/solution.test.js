const solution = require('./solution');

describe('solution', () => {
	it('returns empty for none', () => {
		expect(solution([1, 2, 5])).toEqual([]);
	});

	it('gets 1 minimal period', () => {
		expect(solution([1, 3, 5])).toEqual([[0, 1, 2]]);
	});
	it('gets a second minimal period', () => {
		expect(solution([0, 3, 5, 7])).toEqual([[1, 2, 3]]);
	});
	it('gets 2 minimal periods', () => {
		expect(solution([1, 3, 5, 7])).toEqual([
			[0, 1, 2],
			[1, 2, 3],
		]);
	});

	xit('gets a 4-k period', () => {
		expect(solution([1, 3, 5, 7])).toEqual([
			[0, 1, 2],
			[1, 2, 3],
		]);
	});
});
