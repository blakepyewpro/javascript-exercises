const fibonacci = function(number) {
  if (number == 0) {
    return 0;
  } else if (number == 1) {
    return 1;
  } else if (number < 0) {
    return "OOPS";
  } else {
    let fib1 = 0;
    let fib2 = 1;
    let result;
    for (let i = 1; i < number; i++) {
      result = fib1 + fib2;
      fib1 = fib2;
      fib2 = result;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = fibonacci;
