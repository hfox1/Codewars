const duplicateEncoder = (s) => {
	let string = s.toLowerCase();
	let chars = string.split('');
	let letters = [];
	for (var i = 0; i < chars.length; i++) {
		let toBeRemainingChars = string.split('');
		toBeRemainingChars.splice(i, 1);
		toBeRemainingChars.includes(chars[i])
			? letters.push(')')
			: letters.push('(');
	}
	return letters.join('');
};

module.exports = duplicateEncoder;
