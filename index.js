/**
 * Add two numbers together
 *
 * @param {number} x
 * @param {number} y
 * @returns {x + y}
 */
add = (x, y) => {
	return x + y;
};

/**
 * Subtracts two numbers
 *
 * @param {number} x
 * @param {number} y
 * @returns {x - y}
 */
subtract = (x, y) => {
	return x - y;
};

/**
 * Multiplies two numbers together
 *
 * @param {number} x
 * @param {number} y
 * @returns {x * y}
 */
multiply = (x, y) => {
	return x * y;
};

/**
 * Add two numbers together
 *
 * @param {number} x
 * @param {number} y
 * @returns {x / y}
 */
divide = (x, y) => {
	return x / y;
};

/**
 * Modulo two numbers
 *
 * @param {number} x
 * @param {number} y
 * @returns {x % y}
 */
modulo = (x, y) => {
	return x % y;
};

/**
 * Sine of a number
 *
 * @param {number} number
 * @returns {Math.sin(number)}
 */
sin = number => {
	return Math.sin(number);
};

/**
 * Cosine of a number
 *
 * @param {number} number
 * @returns {Math.cos(number)}
 */
cos = number => {
	return Math.cos(number);
};

/**
 * Tangent of a number
 *
 * @param {number} number
 * @returns {Math.tan(number)}
 */
tan = number => {
	return Math.tan(number);
};

/**
 * Absolute value of a number
 *
 * @param {number} number
 * @returns {Math.abs(number)}
 */
absoluteValue = number => {
	return Math.abs(number);
};

class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	area() {
		return Math.PI * this.radius * this.radius;
	}

	perimeter() {
		return 2 * Math.PI * this.radius;
	}

	diameter() {
		return 2 * this.radius;
	}
}

class Square {
	constructor(side) {
		this.side = side;
	}

	area() {
		return this.side * this.side;
	}

	perimeter() {
		return this.side * 4;
	}

	diagonal() {
		return Math.sqrt(2) * this.side;
	}
}

class Rectangle {
	constructor(length, width) {
		this.length = length;
		this.width = width;
	}

	area() {
		return this.length * this.width;
	}

	perimeter() {
		return 2 * (this.length + this.width);
	}

	diagonal() {
		return Math.sqrt(Math.pow(this.length, 2) + Math.pow(this.width, 2));
	}
}

class Triangle {
	constructor(side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}

	area() {
		return (this.side1 * this.side2) / 2;
	}

	perimeter() {
		return this.side1 + this.side2 + this.side3;
	}
}

const tiny = {
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

module.exports = {
	tiny
};
