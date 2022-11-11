const pigIt = (string) => {
	let words = string.split(' ');
	let pigArray = words.map((word) => {
		// separate out punctuation
		// console.log(word.search(/[.,\/#!$%\^&\*;:{}=\-_`~()]/));
		let index = word.search(/[.,\/#!$%\^&\*;:{}=\-_`~()]/);
		let punctuation = word.slice(index);
		let unpunctuated = word.slice(0, index);

		let firstLetter = unpunctuated.slice(0, 1);
		let remainder = unpunctuated.slice(1);
		return remainder + firstLetter + 'ay';
	});
	return pigArray.join(' ');
};

module.exports = pigIt;
