function binarySearch(sortedArr, val) {
	// set left-most point at beginning of array
	let left = 0;
	// set right-most point at end of array
	let right = sortedArr.length - 1;
	// set midpoint in middle of array
	let mid = Math.floor((right + left) / 2);

	// loop while the left-point is still less than the right-point
	// and the value of the array at the midpoint doesn't equal the value
	while (left < right && sortedArr[mid] !== val) {
		// if the value of the array at the midpoint is less than the value
		// we're searching for, set the left-point to one more than the mid,
		// set the mid-point to the new middle between your new left and previous right, 
		// and continue the loop
		if (sortedArr[mid] < val) {
			left = mid + 1
			mid = Math.floor((right + left) / 2)
		}
		// if the value of the array at the midpoint is more than the value
		// we're searching for, set the right-point to one less than the mid,
		// set the mid-point to the new middle between your new right and previous left, 
		// and continue the loop
		else if (sortedArr[mid] > val) {
			right = mid - 1
			mid = Math.floor((right + left) / 2)
		}
	}
	// if we find the current value at the midpoint equals the value we're searching for,
	// return the value of the midpoint
	if (sortedArr[mid] === val) {
		return mid
	}
	// if the value does not exist in the array, return -1
	else return -1;
}