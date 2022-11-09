const spoonerise = (string) => {
	// split(splice?) into 2 words
	// split each word at first vowel. have 4 array elements
	// join elements 1 & 3 and 2 & 4
	// or else
	//
	let words = string.split(' ');
	let firstWord = words[0];
	let secondWord = words[1];
	console.log('wordsArray:', firstWord, ',', secondWord);

	let firstWordVowelPosition = firstWord.search(/[aeiouAEIOU]/);
	let secondWordVowelPosition = secondWord.search(/[aeiouAEIOU]/);

	spoonElements = [];

	spoonElements[2] = ' ';
	spoonElements[3] = firstWord.slice(0, firstWordVowelPosition);
	spoonElements[1] = firstWord.slice(firstWordVowelPosition);
	spoonElements[0] = secondWord.slice(0, secondWordVowelPosition);
	spoonElements[4] = secondWord.slice(secondWordVowelPosition);

	return spoonElements.join('');
};

module.exports = spoonerise;
