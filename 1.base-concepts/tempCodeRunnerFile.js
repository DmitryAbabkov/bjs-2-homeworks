function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if((percent && contribution && amount && countMonths) == typeof(Number) || typeof(String)) {
    percent = (percent / 100) / 12;
    amount = amount - contribution;

    const monthlyPayment = amount * (percent + (percent / (((1 + percent)** countMonths) - 1)));
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