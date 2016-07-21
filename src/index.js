exports.duration = function(faceValue, couponRate, maturity) {
  let time;
  let sum = 0;
  for (time = 1; time <= maturity; time++) {
    let cashFlow = faceValue * couponRate
    if (time === maturity) {
      cashFlow += faceValue;
    }
    
    const presentValue = cashFlow / Math.pow(1 + couponRate, time);
    const weight = presentValue / faceValue;
    sum += weight * time;
  }

  return sum;
}
