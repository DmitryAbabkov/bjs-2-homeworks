"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    arr[0] = -b / (2 * a);
  } else {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    (percent && contribution && amount && countMonths) == typeof Number ||
    typeof String
  ) {
    percent = percent / 100 / 12;
    amount -= contribution;

    const monthlyPayment =
      amount * (percent + percent / ((1 + percent) ** countMonths - 1));
    const allSumm = monthlyPayment * countMonths;

    if (allSumm == 0) {
      return allSumm;
    } else {
      return +allSumm.toFixed(2);
    }
  } else {
    return false;
  }
}
