/* eslint-env jest */
const assert = require('assert');
const index = require('./index');

describe('Testing all math functions', () => {
	test('Adds two numbers', () => {
		assert.strictEqual(index.add(5, 5), 10);
	});

	test('Subtracts tfwo numbers', () => {
		assert.strictEqual(index.subtract(5, 5), 0);
	});

	test('Multiplies two numbers', () => {
		assert.strictEqual(index.multiply(5, 5), 25);
	});

	test('Divides two numbers', () => {
		assert.strictEqual(index.divide(5, 5), 1);
	});

	test('Modulo two numbers', () => {
		assert.strictEqual(index.modulo(5, 5), 0);
	});

	test('Sin of a number', () => {
		assert.strictEqual(index.sin(10), -0.5440211108893698);
	});

	test('Cos of a number', () => {
		assert.strictEqual(index.cos(10), -0.8390715290764524);
	});

	test('Tan of a number', () => {
		assert.strictEqual(index.tan(10), 0.6483608274590866);
	});

	test('Absolute value of a number', () => {
		assert.strictEqual(index.absoluteValue(-10), 10);
	});
});
