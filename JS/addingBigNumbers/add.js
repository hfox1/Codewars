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
				+longer[i] + +shorter[i - (longer.length - shorter.length)]
			);
		}

		let finalAnswer = '';
		let digit = 0;

		for (j = sumsArray.length - 1; j >= 0; j--) {
			let workingTerm = (+digit + sumsArray[j]).toString();
			if (workingTerm.length > 15) {
				workingArray = workingTerm.split('');
				digit = workingArray.shift();
				partAnswer = workingArray.join('');
				finalAnswer = partAnswer + finalAnswer;
			} else {
				digit = 0;
				finalAnswer = workingTerm.toString() + finalAnswer;
			}
		}
		return finalAnswer;
	}
};
module.exports = add;
