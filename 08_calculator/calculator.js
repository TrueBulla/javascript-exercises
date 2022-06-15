const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, item) => {
    return total += item;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, item) => {
    return total * item;
  }, 0)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let total = a;
  if(a===0){
    return total = 1;
  }
  for(a; a>=2; a--){
    total = total * (a-1);
  }
  return total
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
