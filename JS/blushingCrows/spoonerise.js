const spoonerise = (string) => {
	// split(splice?) into 2 words
	// split each word at first vowel. have 4 array elements
	// join elements 1 & 3 and 2 & 4
	// or else
	//

	let words = string.split(' ');

	if (words.length === 1 || words.length > 3) {
		return 'No spoons here';
	}

	let firstWord = words[0];
	let secondWord = words[words.length - 1];
	console.log('wordsArray:', firstWord, ',', secondWord);

	let firstWordVowelPosition = firstWord.search(/[aeiouAEIOU]/);
	let secondWordVowelPosition = secondWord.search(/[aeiouAEIOU]/);

	let middle = ' ';
	if (words.length === 3) {
		middle = ' ' + words[1] + ' ';
	}

	let f = firstWord.slice(0, firstWordVowelPosition);
	let oo = firstWord.slice(firstWordVowelPosition);
	let b = secondWord.slice(0, secondWordVowelPosition);
	let ar = secondWord.slice(secondWordVowelPosition);

	return b + oo + middle + f + ar;
};

module.exports = spoonerise;
