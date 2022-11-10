const spoonerise = require('./spoonerise.js');

describe('spoonerise', () => {
	describe('two words cases', () => {
		it('dental receptionist', () => {
			expect(spoonerise('Dental Receptionist')).toEqual('Rental Deceptionist');
		});
		it('crushing blow', () => {
			expect(spoonerise('crushing blow')).toEqual('blushing crow');
		});
		it('strong wrangler', () => {
			expect(spoonerise('strong wrangler')).toEqual('wrong strangler');
		});
	});

	describe('three words cases', () => {
		it('take a shower', () => {
			expect(spoonerise('take a shower')).toEqual('shake a tower');
		});
		it('pack of lies', () => {
			expect(spoonerise('pack of lies')).toEqual('lack of pies');
		});
		it('flipping the channel', () => {
			expect(spoonerise('flipping the channel')).toEqual(
				'chipping the flannel'
			);
		});
	});

	describe('no spoon cases', () => {
		it('single word case', () => {
			expect(spoonerise('spoon')).toEqual('No spoons here');
		});
		it('>=4 word case', () => {
			expect(spoonerise('where are the spoons')).toEqual('No spoons here');
		});
		it('flipping the channel', () => {
			expect(spoonerise('flipping the channel')).toEqual(
				'chipping the flannel'
			);
		});
	});
});
