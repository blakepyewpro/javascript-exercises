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

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
