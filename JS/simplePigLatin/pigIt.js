const pigIt = (string) => {
	let words = string.split(' ');
	console.log(words);
	let pigArray = words.map((word) => {
		if (word.match(/ay$/) !== null) {
			// if word ends -ay
			if (word.match(/^[^A-Za-z0-9 ]/) !== null) {
				// then if it starts with punctuation
				return word.replace('ay', ''); // remove the -ay
			} else {
				return word; // but if it doesnt start with punctuation, return the word (dont pig it)
			}
		} else if (word.match(/^ay[^A-Za-z0-9 ]$/) !== null) {
			return word.replace('ay', '');
		} else if (word.match(/^[^A-Za-z0-9 ]$/) !== null) {
			return word;
		} else {
			//if the word doesnt end -ay, and therefore is pigable, then pig it:
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
