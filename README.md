# Macaulay Duration JS

A library to calculate the [Macaulay Duration](http://www.investopedia.com/terms/m/macaulayduration.asp) and [Modified Duration](http://www.investopedia.com/terms/m/modifiedduration.asp) in Node.js

## Installation

`npm install --save macaulay-duration`

## Usage

**Macaulay Duration**

ES5
``` javascript
var duration = require('macaulay-duration').duration;

var faceValue = 10000; // 10000 dollars
var couponRate = 0.05; // 5%
var maturity = 5; // 5 years
var years = duration(faceValue, couponRage, maturity);

console.log('The Macaulay Duration is ' + years + ' years');
// The Macaulay Duration is 4.546 years
```

ES6
``` javascript
import { duration } from 'macaulay-duration'

const faceValue = 10000 // 10000 dollars
const couponRate = 0.05 // 5%
const maturity = 5 // 5 years
const years = duration(faceValue, couponRate, maturity)

console.log('The Macaulay Duration is ' + years + ' years')
// The Macaulay Duration is 4.546 years
```

**Modified Duration**

ES5
``` javascript
var modifiedDuration = require('macaulay-duration').modifiedDuration;

var faceValue = 10000; // 10000 dollars
var couponRate = 0.05; // 5%
var maturity = 5; // 5 years
var years = modifiedDuration(faceValue, couponRage, maturity);

console.log('The Modified Macaulay Duration is ' + years + ' years');
// The Modified Macaulay Duration is 4.546 years
```

ES6

``` javascript
import { modifiedDuration } from 'macaulay-duration'

const faceValue = 10000 // 10000 dollars
const couponRate = 0.05 // 5%
const maturity = 5 // 5 years
const years = modifiedDuration(faceValue, couponRate, maturity)

console.log('The Modified Macaulay Duration is ' + years + ' years')
// The Modified Macaulay Duration is 4.546 years
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## License

Copyright (c) 2016 Supasate Choochaisri

Licensed under the [Apache License](https://github.com/supasate/Macaulay-Duration-JS/blob/master/LICENSE).
