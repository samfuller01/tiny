const assert = require('assert');
const tiny = require('./index');

describe('Testing basic math functions', () => {
	test('Adds two numbers', () => {
		assert.strictEqual(tiny.add(5, 5), 10);
	});

	test('Subtracts two numbers', () => {
		assert.strictEqual(tiny.subtract(5, 5), 0);
	});

	test('Multiplies two numbers', () => {
		assert.strictEqual(tiny.multiply(5, 5), 25);
	});

	test('Divides two numbers', () => {
		assert.strictEqual(tiny.divide(5, 5), 1);
	});

	test('Modulo two numbers', () => {
		assert.strictEqual(tiny.modulo(5, 5), 0);
	});

	test('Sin of a number', () => {
		assert.strictEqual(tiny.sin(10), -0.5440211108893698);
	});

	test('Cos of a number', () => {
		assert.strictEqual(tiny.cos(10), -0.8390715290764524);
	});

	test('Tan of a number', () => {
		assert.strictEqual(tiny.tan(10), 0.6483608274590866);
	});

	test('Absolute value of a number', () => {
		assert.strictEqual(tiny.absoluteValue(-10), 10);
	});
});

describe('Shape Calculations', () => {
	const circle = new tiny.Circle;
	const square = new tiny.Square;
	const rectangle = new tiny.Rectangle;
	const triangle = new tiny.Triangle;

	test('Circle area', () => {
		assert.strictEqual(circle.area(5), 78.53981633974483);
	});

	test('Circle perimeter', () => {
		assert.strictEqual(circle.perimeter(5), 31.41592653589793);
	});

	test('Circle diameter', () => {
		assert.strictEqual(circle.diameter(5), 10);
	});

	test('Square area', () => {
		assert.strictEqual(square.area(5), 25);
	});

	test('Square perimeter', () => {
		assert.strictEqual(square.perimeter(5), 20);
	});

	test('Square diagonal', () => {
		assert.strictEqual(square.diagonal(5), 7.0710678118654755);
	});

	test('Rectangle area', () => {
		assert.strictEqual(rectangle.area(5, 10), 50);
	});

	test('Rectangle perimeter', () => {
		assert.strictEqual(rectangle.perimeter(5, 10), 30);
	});

	test('Rectangle diagonal', () => {
		assert.strictEqual(rectangle.diagonal(5, 10), 11.180339887498949);
	});

	test('Triangle area', () => {
		assert.strictEqual(triangle.area(5, 4), 10);
	});

	test('Triangle perimeter', () => {
		assert.strictEqual(triangle.perimeter(5, 4, 3), 12);
	});
});
