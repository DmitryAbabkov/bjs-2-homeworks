function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let avg = 0;
	let sum = 0;

	function searchAvg() {
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
			avg = sum / arr.length;
		}
	}

	function searchMaxAndMin() {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i];
			} else if (arr[i] < min) {
				min = arr[i];
			}
		}
	}

	searchMaxAndMin();
	searchAvg();

	return {
		min: min,
		max: max,
		avg: +avg.toFixed(2)
	};
}


function summElementsWorker(...arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;

}


function differenceMaxMinWorker(...arr) {
	let min = arr[0];
	let max = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
	}
	return max - min;

}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0,
		sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0,
		countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			++countEvenElement;
		}
	}
	return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}