var expect = require('chai').expect;
var duration = require('../src').duration;

describe('Duration calculation', () => {
  it('calculate Macaulay Duration correctly', () => {
    const faceValue = 10000;
    const couponRate = 0.05;
    const maturity = 5;
    const years = duration(faceValue, couponRate, maturity);

    expect(years).to.equal(4.545950504162359);
  });
});
