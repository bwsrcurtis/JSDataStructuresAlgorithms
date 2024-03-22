// Basic implementation of bubble sort with ES2015 syntax
function bubbleSort(arr) {
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};

	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;
}

// This implementation stops running once the array is sorted, instead of continuing to run
function bubbleSortNoSwaps(arr) {
	var noSwaps;
	for (var i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (var j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

