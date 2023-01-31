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

	it('gets a 4-k period', () => {
		console.log('output', solution([1, 3, 5, 7]));
		expect(solution([1, 3, 5, 7])).toStrictEqual([
			[0, 1, 2],
			[1, 2, 3],
			[0, 1, 2, 3],
		]);
	});

	it('gets a 7-k period', () => {
		test7 = [1, 3, 5, 7, 9, 11, 13];
		expect(solution(test7)[14]).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	it('trips on 1-length gaps', () => {
		testT = [0, 1, 3, 4, 6, 7, 9, 10];
		// console.log(solution(testT));
		expect(solution(testT).length).toEqual(0);
	});

	xit('gets the long array', () => {
		test = [1, 3, 5, 7, 9, 7, 7, 7, 7, 3, -1, -5, -9, 0, 1, 1, 1, 2, 5, 7];
		console.log(solution(test));
		// expect(solution(test).sort()).toEqual(
		// 	[
		// 		[0, 1, 2, 3, 4],
		// 		[0, 1, 2],
		// 		[1, 2, 3],
		// 		[2, 3, 4],
		// 		[0, 1, 2, 3],
		// 		[1, 2, 3, 4],
		// 		[5, 6, 7, 8],
		// 		[6, 7, 8],
		// 		[5, 6, 7],
		// 		[8, 9, 10, 11, 12],
		// 		[8, 9, 10],
		// 		[9, 10, 11],
		// 		[10, 11, 12],
		// 		[8, 9, 10, 11],
		// 		[9, 10, 11, 12],
		// 		[14, 15, 16],
		// 	].sort()
		// );
	});
});
