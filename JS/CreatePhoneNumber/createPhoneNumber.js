const createPhoneNumber = (array) => {
	const e = (index) => {
		return array[index];
	};

	return `(${e(0)}${e(1)}${e(2)}) ${e(3)}${e(4)}${e(5)}-${e(6)}${e(7)}${e(
		8
	)}${e(9)}`;
};

module.exports = createPhoneNumber;
