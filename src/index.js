var duration = function(faceValue, couponRate, maturity) {
  let time;
  let sum = 0;

  for (time = 1; time <= maturity; time++) {
    let cashFlow = faceValue * couponRate;

    if (time === maturity) {
      cashFlow += faceValue;
    }

    const presentValue = cashFlow / Math.pow(1 + couponRate, time);
    const weight = presentValue / faceValue;
    sum += weight * time;
  }

  return sum;
};

var modifiedDuration = function(faceValue, couponRate, maturity) {
  const macaulayDuration = duration(faceValue, couponRate, maturity);
  const yieldToMaturity = couponRate;

  return macaulayDuration / (1 + (yieldToMaturity / maturity));
};

module.exports = {
  duration: duration,
  modifiedDuration: modifiedDuration
};
