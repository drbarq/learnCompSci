console.log('hello');

let costOfItemsAtTraderJoes = [1, 2, 6, 7, 8];
let costOfItemsAtWholeFoods = [3, 4, 5, 9, 10];

// let firstHalf = [1, 2, 6, 7, 8];
// let secondHalf = [3, 4, 5, 9, 10];

// function findMinAndRemove(firstHalf, secondHalf) {
// 	let minFirstHalf = firstHalf[0];
// 	let minSecondHalf = secondHalf[0];

// 	if (minFirstHalf < minSecondHalf) {
// 		console.log(minFirstHalf);
// 		return firstHalf.shift();
// 	} else {
// 		console.log(minSecondHalf);
// 		return secondHalf.shift();
// 	}
// }

// findMin(firstHalf, secondHalf);

// function merge(firstHalf, secondHalf) {
// 	let sorted = [];
// 	while (firstHalf.length != 0 && secondHalf.length != 0) {
// 		let currentMin = findMinAndRemove(firstHalf, secondHalf);
// 		sorted.push(currentMin);
// 	}
// 	let sortedArr = sorted.concat(firstHalf).concat(secondHalf);
// 	// console.log(sortedArr);
// 	return sorted.concat(firstHalf).concat(secondHalf);
// }

// merge(firstHalf, secondHalf);

// let unsortedArray = [2, 1];

// function mergeSort(array) {
// 	let midpoint = array.length / 2;
// 	let firstHalf = array.slice(0, midpoint);
// 	let secondHalf = array.slice(midpoint, array.length);
// 	// console.log(merge(firstHalf, secondHalf));
// 	// return merge(firstHalf, secondHalf);
// 	// return merge(mergeSort(firstHalf), mergeSort(secondHalf));

// 	if (array.length < 2) {
// 		return array;
// 	} else {
// 		merge(mergeSort(firstHalf), mergeSort(secondHalf));
// 	}
// }

function findMinAndRemove(firstHalf, secondHalf) {
	let minFirstHalf = firstHalf[0];
	let minSecondHalf = secondHalf[0];

	if (minFirstHalf < minSecondHalf) {
		console.log(minFirstHalf);
		return firstHalf.shift();
	} else {
		console.log(minSecondHalf);
		return secondHalf.shift();
	}
}

function merge(firstHalf, secondHalf) {
	let sorted = [];
	let currentMin;
	// console.log(firstHalf, secondHalf);
	while (firstHalf.length != 0 && secondHalf.length != 0) {
		let currentMin = findMinAndRemove(firstHalf, secondHalf);
		sorted.push(currentMin);
	}
	return sorted.concat(firstHalf).concat(secondHalf);
}

function mergeSort(array) {
	let midpoint = array.length / 2;
	let firstHalf = array.slice(0, midpoint);
	let secondHalf = array.slice(midpoint, array.length);

	if (array.length < 2) {
		return array;
	} else {
		merge(mergeSort(firstHalf), mergeSort(secondHalf));
	}
}

// mergeSort(unsortedArray);
// let array = [7, 8, 1, 6];
let array = [1, 2, 6, 7, 8, 3, 4, 5, 9, 10];
mergeSort(array);
