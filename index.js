/**
 * Add two numbers together
 *
 * @param {number} x
 * @param {number} y
 * @returns {number} x + y
 */
add = (x, y) => {
	return x + y;
};

/**
 * Subtracts two numbers
 *
 * @param {number} x
 * @param {number} y
 * @returns {number} x - y
 */
subtract = (x, y) => {
	return x - y;
};

/**
 * Multiplies two numbers together
 *
 * @param {number} x
 * @param {number} y
 * @returns {number} x * y
 */
multiply = (x, y) => {
	return x * y;
};

/**
 * Add two numbers together
 *
 * @param {number} x
 * @param {number} y
 * @returns {number} x / y
 */
divide = (x, y) => {
	return x / y;
};

/**
 * Modulo two numbers
 *
 * @param {number} x
 * @param {number} y
 * @returns {number} x % y
 */
modulo = (x, y) => {
	return x % y;
};

/**
 * Sine of a number
 *
 * @param {number} number
 * @returns {number} Math.sin(number);
 */
sin = number => {
	return Math.sin(number);
};

/**
 * Cosine of a number
 *
 * @param {number} number
 * @returns {number} Math.cos(number);
 */
cos = number => {
	return Math.cos(number);
};

/**
 * Tangent of a number
 *
 * @param {number} number
 * @returns {number} Math.tan(number);
 */
tan = number => {
	return Math.tan(number);
};

/**
 * Absolute value of a number
 *
 * @param {number} number
 * @returns {number} Math.abs(number);
 */
absoluteValue = number => {
	return Math.abs(number);
};

module.exports = {
	add,
	subtract,
	multiply,
	divide,
	modulo,
	sin,
	cos,
	tan,
	absoluteValue
};
