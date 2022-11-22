const duplicateEncoder = require('./duplicateEncoder');

describe('duplicateEncoder', () => {
	it('encodes din', () => {
		expect(duplicateEncoder('din')).toEqual('(((');
	});

	it('encodes recede', () => {
		expect(duplicateEncoder('recede')).toEqual('()()()');
	});
});

// "Success" => ")())())"
// "(( @" => "))(("
