# tiny

![npm (scoped)](https://img.shields.io/npm/v/@samfuller01/tiny.svg)
[![Build Status](https://dev.azure.com/spfuller01/tiny/_apis/build/status/samfuller01.tiny?branchName=master)](https://dev.azure.com/spfuller01/tiny/_build/latest?definitionId=4&branchName=master)

This is a super tiny JavaScript package designed to make simple calculations very easy. It also makes some `Math` methods easier to use. In the future I will implement all/most of them.

## Installation

npm installation:
`npm install @samfuller/tiny`

yarn installation:
`yarn add @samfuller/tiny`

## Usage

### [Simple Example](https://github.com/samfuller01/tiny/blob/master/examples/add.js):

```js
//add.js
const tiny = require('@samfuller/tiny').tiny;

tiny.add(5, 5);
```

## add

Add two numbers passed in as parameters together and returns them.

```js
tiny.add(5, 5); // Returns 10
```

## subtract

Subtracts two numbers passed in as parameters and returns them.

```js
tiny.subtract(10, 5); // Returns 5
```

## multiply

Multiplies two numbers passed in as parameters together and returns that value.

```js
tiny.multiply(5, 5); // Returns 25
```

## divide

Divides two numbers passed in and returns their value.

```js
tiny.divide(10, 5); // Returns 2
```

## modulo

Returns the result of a modulo operation with the two numbers you passed in.

```js
tiny.modulo(5, 5); // Returns 0
```

## sin

Returns the sine of the number passed in.

```js
tiny.sin(5); // Returns -0.9589242746631385
```

## cos

Returns the cosine of the number passed in.

```js
tiny.cos(5); // Returns 0.28366218546322625
```

## tan

Returns the tangent of the number passed in.

```js
tiny.tan(5); // Returns -3.380515006246586
```

## absoluteValue

Returns the absolute value of a number passed in.

```js
tiny.absoluteValue(-5); // Returns 5
```

## Circle

Circle is a class that contains numerous calculations relating to circles. The class accepts a parameter of the radius.

```js
const tiny = require('@samfuller/tiny').tiny;
const circle = new tiny.Circle(5);

circle.area(); // Returns 78.53981633974483
circle.perimeter(); // Returns 31.41592653589793
circle.diameter(); // Returns 10
```

## Square

Square is a class that contains numerous calculations relating to squares. It accepts a parameter of the side length.

```js
const tiny = require('@samfuller/tiny').tiny;
const square = new tiny.Square(5);

square.area(); // Returns 25
square.perimeter(); // Returns 20
square.diagonal(); // Returns 7.0710678118654755
```

## Rectangle

Rectangle is a class that contains numerous calculations relating to rectangles. It accepts two parameters: side length and side width.

```js
const tiny = require('@samfuller/tiny').tiny;
const rectangle = new tiny.Rectangle(5, 10);

rectangle.area(); // Returns 50
rectangle.perimeter(); // Returns 30
rectangle.diagonal(); // Returns 11.180339887498949
```

## Triangle

Triangle is a class that contains numerous calcualtions relating to triangles. It accepts three parameters which are the three side lengths.

> NOTE: The triangle class assumes that the first two parameters are the base and height of the triangle.

```js
const tiny = require('@samfuller/tiny').tiny;
const triangle = new tiny.Triangle(5, 10, 15);

triangle.area(); // Returns 25
triangle.perimeter(); // Returns 30
```

You can also use import statements instead of require statements.

```js
import { tiny } from '@samfuller01/tiny';

tiny.add(5, 5);
```

# License

This project is available under the MIT license.
