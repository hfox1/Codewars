const zipWith = (fn, a0, a1) => {
	// iterate along the two arrays
	// take the matching elements of each one,
	// and run the function on them
	// the value returned goes into the return array
	//
	const args = [];
	const returnArray = [];
	args.push(a0[0]);
	args.push(a1[0]);
	returnArray.push(fn(a0[0], a1[0]));

	return returnArray;
};

module.exports = zipWith;
