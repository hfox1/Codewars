const pigIt = require('./pigIt');

describe('pigIt', () => {
	it('does single word ', () => {
		expect(pigIt('Pig')).toEqual('igPay');
	});

	it('does punctuated single word ', () => {
		expect(pigIt('Pig!!')).toEqual('igPay!!');
	});

	it('does a sentence', () => {
		expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay');
		expect(pigIt('This is my string')).toEqual('hisTay siay ymay tringsay');
	});

	it('leaves words ending in ay', () => {
		expect(pigIt('Oay emporatay oay oresmay')).toEqual(
			'Oay emporatay oay oresmay'
		);
	});

	it('leaves words ending in ay, but removes ay from puncuation', () => {
		expect(pigIt('Oay emporatay oay oresmay !ay')).toEqual(
			'Oay emporatay oay oresmay !'
		);
	});

	it('removes ay from LHS of puncuation', () => {
		expect(pigIt('Oay emporatay oay oresmay ay!')).toEqual(
			'Oay emporatay oay oresmay !'
		);
	});

	it('O tempora o mores !', () => {
		expect(pigIt('O tempora o mores !')).toEqual('Oay emporatay oay oresmay !');
	});
});
