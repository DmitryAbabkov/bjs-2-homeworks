function getArrayParams(...arr) {
  let min = 0;
  let max = 0;
  let avg = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum / arr.length; 
  }

  function searchMaxAndMin () {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  }

    searchMaxAndMin();

  return { min: min, max: max, avg: +avg.toFixed(2) };
}


function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
