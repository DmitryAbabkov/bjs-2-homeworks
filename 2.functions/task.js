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
    searchAvg();

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
