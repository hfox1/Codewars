const pigIt = require('./pigIt');

describe('pigIt', () => {
	it('does single word ', () => {
		expect(pigIt('Pig')).toEqual('igPay');
	});

	it('does punctuated single word ', () => {
		expect(pigIt('Pig!!')).toEqual('igPay!!');
	});

	xit('does a sentence', () => {
		expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay');
		expect(pigIt('This is my string')).toEqual('hisTay siay ymay tringsay');
	});

	xit('leaves punctuation untouched', () => {
		expect(pigIt('Oay emporatay oay oresmay !ay')).toEqual(
			'Oay emporatay oay oresmay !'
		);
	});
});
