const pigIt = (string) => {
	let words = string.split(' ');
	console.log(words);
	let pigArray = words.map((word) => {
		if (word.match(/ay\b/) !== null) {
			return word;
		} else {
			// let regex = new RegExp('/[^A-Za-z0-9 ]/');
			// console.log(regex.test(word));
			// console.log(e);
			let index = word.search(/[^A-Za-z0-9 ]/);
			// console.log(index);
			let punctuation;
			let unpunctuated;
			if (index === -1) {
				// console.log('inside index = -1');
				punctuation = '';
				unpunctuated = word;
			} else {
				punctuation = word.slice(index);
				unpunctuated = word.slice(0, index);
			}
			// console.log(punctuation, unpunctuated);

			let firstLetter = unpunctuated.slice(0, 1);
			let remainder = unpunctuated.slice(1);
			// console.log(firstLetter, remainder);
			return remainder + firstLetter + 'ay' + punctuation;
		}
	});
	return pigArray.join(' ');
};

module.exports = pigIt;
