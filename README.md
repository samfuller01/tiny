# tiny

![npm (scoped)](https://img.shields.io/npm/v/@samfuller01/tiny.svg)
[![Build Status](https://dev.azure.com/spfuller01/tiny/_apis/build/status/samfuller01.tiny?branchName=master)](https://dev.azure.com/spfuller01/tiny/_build/latest?definitionId=4&branchName=master)

This is a super tiny JavaScript package designed to make simple calculations very easy. It also makes some `Math` methods easier to use. In the future I will implement all/most of them.

## Usage

```js
const tiny = require('@samfuller01/tiny);

tiny.add(5, 5); // Returns 10

tiny.subtract(10, 5); // Returns 5

tiny.multiply(5, 5); // Returns 25

tiny.divide(5, 5); // Returns 1

tiny.modulo(5, 5); // Returns 0

tiny.sin(5); // Returns sin of 5

tiny.cos(5); // Returns cos of 5

tiny.tan(5); // Returns tan of 5

tiny.absoluteValue(-10) // Returns 10
```
