/**
 * Add two numbers
 * @param {number} x
 * @param {number} y
 * @returns {number} x + y
 */
add = (x, y) => {
	return x + y;
};

/**
 * Subtracts two numbers
 * @param {number} x
 * @param {number} y
 * @returns {number} x - y
 */
subtract = (x, y) => {
	return x - y;
};

/**
 * Multiplies two numbers
 * @param {number} x
 * @param {number} y
 * @returns {number} x * y
 */
multiply = (x, y) => {
	return x * y;
};

/**
 * Divide two numbers
 * @param {number} x
 * @param {number} y
 * @returns {number} x / y
 */
divide = (x, y) => {
	return x / y;
};

/**
 * Modulo two numbers
 * @param {number} x
 * @param {number} y
 * @returns {number} x % y
 */
modulo = (x, y) => {
	return x % y;
};

/**
 * Sine of a number
 * @param {number} number
 * @returns {number} Sine of a number
 */
sin = number => {
	return Math.sin(number);
};

/**
 * Cosine of a number
 * @param {number} number
 * @returns {number} Cosine of a number
 */
cos = number => {
	return Math.cos(number);
};

/**
 * Tangent of a number
 * @param {number} number
 * @returns {number} Tangent of a number
 */
tan = number => {
	return Math.tan(number);
};

/**
 * Absolute value of a number
 * @param {number} number
 * @returns {number} Absolute value of a number
 */
absoluteValue = number => {
	return Math.abs(number);
};

/**
 * @class
 * @classdesc Calculations regarding circles.
 * @param {number} radius - The radius of the circle.
 */
class Circle {
	area(radius) {
		return Math.PI * radius * radius;
	}

	perimeter(radius) {
		return 2 * Math.PI * radius;
	}

	diameter(radius) {
		return 2 * radius;
	}
}

/**
 * @class
 * @classdesc Calculations regarding squares.
 * @param {number} side - The length of the side of the square.
 */
class Square {
	area(side) {
		return side * side;
	}

	perimeter(side) {
		return side * 4;
	}

	diagonal(side) {
		return Math.sqrt(2) * side;
	}
}

/**
 * @class
 * @classdesc Calculations regarding rectangles.
 * @param {number} length - The number value of the length of the rectangle.
 * @param {number} width - The number value of the width of the rectangle.
 */
class Rectangle {
	area(length, width) {
    return length * width;
	}

	perimeter(length, width) {
    return 2 * (length + width);
	}

	diagonal(length, width) {
    return Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
	}
}

/**
 * @class
 * @classdesc Calculations regarding triangles.
 * @param {number} base - The numerical value of the base of the triangle.
 * @param {number} height - The numerical value of the height of the triangle.
 * @param {number} side1 - The numerical value of the first side of the triangle.
 * @param {number} side2 - The numerical value of the second side of the triangle.
 * @param {number} side3 - The numerical value of the third side of the triangle.
 */
class Triangle {
	area(base, height) {
		return (base * height) / 2;
	}

	perimeter(side1, side2, side3) {
		return side1 + side2 + side3;
	}
}

module.exports = {
  add,
  subtract,
	multiply,
	divide,
	sin,
	cos,
	tan,
	absoluteValue,
	modulo,
	Circle,
	Square,
	Rectangle,
	Triangle
};