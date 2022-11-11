const pigIt = require('./pigIt');

describe('pigIt', () => {
	it('does single word ', () => {
		expect(pigIt('Pig')).toEqual('igPay');
	});

	it('does a sentence', () => {
		expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay');
		expect(pigIt('This is my string')).toEqual('hisTay siay ymay tringsay');
	});
});
