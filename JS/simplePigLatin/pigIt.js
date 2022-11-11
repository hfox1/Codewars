const pigIt = (string) => {
	let firstLetter = string.slice(0, 1);
	let remainder = string.slice(1);
	return remainder + firstLetter + 'ay';
};

module.exports = pigIt;
