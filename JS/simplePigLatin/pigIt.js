const pigIt = (string) => {
	let words = string.split(' ');
	console.log(words);
	let pigArray = words.map((word) => {
		if (word.match(/ay\b/) !== null) {
			if (word.match(/^[^A-Za-z0-9 ]/) !== null) {
				return word.replace('ay', '');
			} else {
				return word;
			}
		} else {
			let index = word.search(/[^A-Za-z0-9 ]/);
			let punctuation;
			let unpunctuated;
			if (index === -1) {
				punctuation = '';
				unpunctuated = word;
			} else {
				punctuation = word.slice(index);
				unpunctuated = word.slice(0, index);
			}

			let firstLetter = unpunctuated.slice(0, 1);
			let remainder = unpunctuated.slice(1);
			return remainder + firstLetter + 'ay' + punctuation;
		}
	});
	return pigArray.join(' ');
};

module.exports = pigIt;
