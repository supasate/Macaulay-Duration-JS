var expect = require('chai').expect;
var duration = require('../src').duration;
var modifiedDuration  = require('../src').modifiedDuration;

describe('Duration calculation', () => {
  it('calculate Macaulay Duration correctly', () => {
    const faceValue = 10000;
    const couponRate = 0.05;
    const maturity = 5;
    const years = duration(faceValue, couponRate, maturity);

    expect(years).to.equal(4.545950504162359);
  });

  it('calculate Modified Duration correctly', () => {
    const faceValue = 10000;
    const couponRate = 0.05;
    const maturity = 5;
    const years = modifiedDuration(faceValue, couponRate, maturity);

    expect(years).to.equal(4.500941093230058);
  });
});
