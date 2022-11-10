// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3
// or 5 below the number passed in. Additionally, if the number is negative,
// return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// TESTS:
// returns sum of all multiples of 3, and sum of all multiples of 5, below X
// do 10
// do 20
// when x > 15, check 15 and all common multiples only counted once
// if X < 0, return 0

const solution = require('./multiples.js');

describe('multiples', () => {
	it('adds multiples correctly for X = 10', () => {
		expect(solution(10)).toEqual(23);
	});

	it('adds multiples correctly for X = 20', () => {
		expect(solution(20)).toEqual(78);
	});

	it('returns 0 for X = -1', () => {
		expect(solution(-1)).toEqual(0);
	});
});
