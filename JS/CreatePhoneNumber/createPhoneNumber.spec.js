const createPhoneNumber = require('./createPhoneNumber');

describe('Create Phone Number', () => {
	it('formats 1s correctly', () => {
		expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual(
			'(111) 111-1111'
		);
	});

	it('formats a number correctly', () => {
		expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual(
			'(123) 456-7890'
		);
	});

	it('works repeatedly', () => {
		expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual(
			'(111) 111-1111'
		);
		expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual(
			'(123) 456-7890'
		);
	});
});
