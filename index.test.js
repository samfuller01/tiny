const assert = require("assert");
const tiny = require("./index").tiny;

describe("Testing all math functions", () => {
  test("Adds two numbers", () => {
    assert.strictEqual(tiny.add(5, 5), 10);
  });

  test("Subtracts two numbers", () => {
    assert.strictEqual(tiny.subtract(5, 5), 0);
  });

  test("Multiplies two numbers", () => {
    assert.strictEqual(tiny.multiply(5, 5), 25);
  });

  test("Divides two numbers", () => {
    assert.strictEqual(tiny.divide(5, 5), 1);
  });

  test("Modulo two numbers", () => {
    assert.strictEqual(tiny.modulo(5, 5), 0);
  });

  test("Sin of a number", () => {
    assert.strictEqual(tiny.sin(10), -0.5440211108893698);
  });

  test("Cos of a number", () => {
    assert.strictEqual(tiny.cos(10), -0.8390715290764524);
  });

  test("Tan of a number", () => {
    assert.strictEqual(tiny.tan(10), 0.6483608274590866);
  });

  test("Absolute value of a number", () => {
    assert.strictEqual(tiny.absoluteValue(-10), 10);
  });
});
