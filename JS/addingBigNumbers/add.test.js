const add = require('./add');

describe('Add two numbers', () => {
	it('should pass basic tests', () => {
		expect(add('1', '1')).toEqual('2');
	});
	it('should pass basic tests', () => {
		expect(add('123', '456')).toEqual('579');
	});
	it('should pass basic tests', () => {
		expect(add('888', '222')).toEqual('1110');
	});
	it('should pass basic tests', () => {
		expect(add('1372', '69')).toEqual('1441');
	});
	it('should pass basic tests', () => {
		expect(add('12', '456')).toEqual('468');
	});
	it('should pass basic tests', () => {
		expect(add('101', '100')).toEqual('201');
	});

	it('should pass basic tests', () => {
		expect(add('63829983432984289347', '63829983432984289347')).toEqual(
			'127659966865968578694'
		);
	});
	it('should pass basic tests', () => {
		expect(
			add('63829983432984289347293874', '90938498237058927340892374089')
		).toEqual('91002328220491911630239667963');
	});
});
