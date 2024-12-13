const add = function(var1, var2) {
	let result = var1 + var2;
  return result;
};

const subtract = function(var1, var2) {
	const result = var1 - var2;
  return result;
};

const sum = function(array) {
	let sum = array.reduce((total, current) => {
    return total + current;
  }, 0);
  return sum;
};

const multiply = function(array) {
  let product = array.reduce((total, current) => {
    return total * current;
  });
  return product;
};

const power = function(number, exponent) {
	const result = number ** exponent;
  return result;
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      const tmp = result * i;
      result = tmp;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
