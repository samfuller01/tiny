const assert = require('assert');
const tiny = require('./index').tiny;

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
	const circle = new tiny.Circle(5);
	const square = new tiny.Square(5);
	const rectangle = new tiny.Rectangle(5, 10);
	const triangle = new tiny.Triangle(5, 4, 3);

	test('Circle area', () => {
		const area = circle.area();
		assert.strictEqual(area, 78.53981633974483);
	});

	test('Circle perimeter', () => {
		const perimeter = circle.perimeter();
		assert.strictEqual(perimeter, 31.41592653589793);
	});

	test('Circle diameter', () => {
		const diameter = circle.diameter();
		assert.strictEqual(diameter, 10);
	});

	test('Square area', () => {
		const area = square.area();
		assert.strictEqual(area, 25);
	});

	test('Square perimeter', () => {
		const perimeter = square.perimeter();
		assert.strictEqual(perimeter, 20);
	});

	test('Square diagonal', () => {
		const diagonal = square.diagonal();
		assert.strictEqual(diagonal, 7.0710678118654755);
	});

	test('Rectangle area', () => {
		const area = rectangle.area();
		assert.strictEqual(area, 50);
	});

	test('Rectangle perimeter', () => {
		const perimeter = rectangle.perimeter();
		assert.strictEqual(perimeter, 30);
	});

	test('Rectangle diagonal', () => {
		const diagonal = rectangle.diagonal();
		assert.strictEqual(diagonal, 11.180339887498949);
	});

	test('Triangle area', () => {
		const area = triangle.area();
		assert.strictEqual(area, 10);
	});

	test('Triangle perimeter', () => {
		const perimeter = triangle.perimeter();
		assert.strictEqual(perimeter, 12);
	});
});
