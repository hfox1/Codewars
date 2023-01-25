const zipWith = (fn, a0, a1) => {
	// iterate along the two arrays
	// take the matching elements of each one,
	// and run the function on them
	// the value returned goes into the return array
	//
	const args = [];
	const returnArray = [];
	let shorterLength;
	a0.length > a1.length
		? (shorterLength = a1.length)
		: (shorterLength = a0.length);
	for (var i = 0; i < shorterLength; i++) {
		args.push(a0[i]);
		args.push(a1[i]);
		returnArray.push(fn(a0[i], a1[i]));
	}

	return returnArray;
};

module.exports = zipWith;
