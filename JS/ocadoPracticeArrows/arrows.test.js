const solution = require('./arrows');

describe('solution', () => {
	it('test 1', () => {
		expect(solution('^vv<v')).toEqual(2);
		expect(solution('^vv<v')).toEqual(2);
	});
	it('test 2', () => {
		expect(solution('v>>>vv')).toEqual(3);
		expect(solution('v>>>vv')).toEqual(3);
	});
	it('test 3', () => {
		expect(solution('<<<')).toEqual(0);
		expect(solution('vvv')).toEqual(0);
	});
});
