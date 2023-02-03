let num = '12345678910';

const add = (a, b) => {
	if ((Number(a) + Number(b)) / 1e20 < 1) {
		return `${Number(a) + Number(b)}`;
	} else {
		function subNumbers(c) {
			newArray = [];
			newArray.push(c.slice(0, c.length % 15));
			for (i = c.length % 15; i < c.length; i += 15) {
				newArray.push(c.slice(i, i + 15));
			}
			return newArray;
		}

		const subNumbersA = subNumbers(a);
		const subNumbersB = subNumbers(b);

		let longer;
		let shorter;

		if (subNumbersA.length > subNumbersB.length) {
			longer = subNumbersA;
			shorter = subNumbersB;
		} else {
			shorter = subNumbersA;
			longer = subNumbersB;
		}

		sumsArray = [];
		for (i = longer.length - 1; i >= 0; i--) {
			sumsArray.unshift(
				Number(longer[i]) +
					Number(shorter[i - (longer.length - shorter.length)])
			);
		}
		console.log(sumsArray);

		// do end case since it's an exception to the loop
		let finalAnswer = '';
		let digit = 0;

		for (j = sumsArray.length - 1; j >= 0; j--) {
			let calc = digit + sumsArray[j];
			if (calc.length > 15 || calc[0] === 0) {
				digit = calc.split('').shift();
				partAnswer = calc.join('');
				finalAnswer = partAnswer + finalAnswer;
			} else {
				digit = 0;
				finalAnswer = calc.toString() + finalAnswer;
			}
		}
		return finalAnswer;
	}

	// looping, starting with the final item
	// get the first digit with .shift()
	// add the truncated item to the final string
	// add the returned digit to the next item
	// then loop
};
module.exports = add;

// there is number
