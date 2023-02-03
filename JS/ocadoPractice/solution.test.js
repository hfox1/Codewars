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

	it('trips on 1-length gaps', () => {
		testT = [0, 1, 3, 4, 6, 7, 9, 10];
		expect(solution(testT).length).toEqual(0);
	});

	it('gets a 4-k period', () => {
		// console.log(solution([1, 3, 5, 7]));
		expect(solution([1, 3, 5, 7])).toEqual([
			[0, 1, 2],
			[0, 1, 2, 3],
			[1, 2, 3],
		]);
	});

	it('gets a 7-k period', () => {
		test7 = [1, 3, 5, 7, 9, 11, 13];
		console.log('7-k output', solution(test7));
		expect(solution(test7)).toEqual([
			[0, 1, 2],
			[0, 1, 2, 3],
			[0, 1, 2, 3, 4],
			[0, 1, 2, 3, 4, 5],
			[0, 1, 2, 3, 4, 5, 6],
			[1, 2, 3],
			[1, 2, 3, 4],
			[1, 2, 3, 4, 5],
			[1, 2, 3, 4, 5, 6],
			[2, 3, 4],
			[2, 3, 4, 5],
			[2, 3, 4, 5, 6],
			[3, 4, 5],
			[3, 4, 5, 6],
			[4, 5, 6],
		]);
	});

	it('gets the long array', () => {
		test = [1, 3, 5, 7, 9, 7, 7, 7, 7, 3, -1, -5, -9, 0, 1, 1, 1, 2, 5, 7];
		// console.log('long output', solution(test));
		expect(solution(test).sort()).toEqual(
			[
				[0, 1, 2],
				[0, 1, 2, 3],
				[0, 1, 2, 3, 4],
				[1, 2, 3],
				[1, 2, 3, 4],
				[2, 3, 4],
				[5, 6, 7],
				[5, 6, 7, 8],
				[6, 7, 8],
				[8, 9, 10],
				[8, 9, 10, 11],
				[8, 9, 10, 11, 12],
				[9, 10, 11],
				[9, 10, 11, 12],
				[10, 11, 12],
				[14, 15, 16],
			].sort()
		);
	});
});
