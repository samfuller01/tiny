# tiny

![npm (scoped)](https://img.shields.io/npm/v/@samfuller01/tiny.svg)
[![Build Status](https://dev.azure.com/spfuller01/tiny/_apis/build/status/samfuller01.tiny?branchName=master)](https://dev.azure.com/spfuller01/tiny/_build/latest?definitionId=4&branchName=master)

![Tiny Logo](https://github.com/samfuller01/tiny/blob/master/images/logo.jpg)

This is a super tiny(heh, get it?) JavaScript package designed to make simple calculations very easy. It also allows you to perform basic mathematical operations on shapes.

## Installation

npm installation:
`npm install @samfuller01/tiny`

yarn installation:
`yarn add @samfuller01/tiny`

### Documentation

## add

Add two numbers passed in as parameters together and returns that value.

```js
tiny.add(5, 5); // Returns 10
```

## subtract

Subtracts two numbers passed in as parameters and returns that value.

```js
tiny.subtract(10, 5); // Returns 5
```

## multiply

Multiplies two numbers passed in as parameters together and returns that value.

```js
tiny.multiply(5, 5); // Returns 25
```

## divide

Divides two numbers passed in and returns that value.

> NOTE: The first number passed in is divided by the second.

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

Circle is a class that contains numerous calculations relating to circles. All the functions accept one parameter: the radius.

```js
const tiny = require('@samfuller/tiny');
const circle = new tiny.Circle;

circle.area(5); // Returns 78.53981633974483
circle.perimeter(5); // Returns 31.41592653589793
circle.diameter(5); // Returns 10
```

## Square

Square is a class that contains numerous calculations relating to squares. All functions accept one parameter: the side length.

```js
const tiny = require('@samfuller/tiny');
const square = new tiny.Square;

square.area(5); // Returns 25
square.perimeter(5); // Returns 20
square.diagonal(5); // Returns 7.0710678118654755
```

## Rectangle

Rectangle is a class that contains numerous calculations relating to rectangles. All functions accept two parameters: side length and side width.

```js
const tiny = require('@samfuller/tiny');
const rectangle = new tiny.Rectangle;

rectangle.area(5, 10); // Returns 50
rectangle.perimeter(5, 10); // Returns 30
rectangle.diagonal(5, 10); // Returns 11.180339887498949
```

## Triangle

Triangle is a class that contains numerous calcualtions relating to triangles. The parameters depends on which function is being used.

> NOTE: The area function accepts two parameters: The base and height of the triangle. The perimeter function accepts three parameters: All three side lengths.

```js
const tiny = require('@samfuller/tiny');
const triangle = new tiny.Triangle;

triangle.area(5, 10); // Returns 25
triangle.perimeter(5, 10, 15); // Returns 30
```

# License

This project is available under the MIT license.

# Attribution
Logo attribution:
<a href='https://www.freepik.com/free-photos-vectors/3d'>3d vector created by rawpixel.com - www.freepik.com</a>