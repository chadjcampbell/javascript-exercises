const add = function(a, b) {
  let sum = a+b;
  return sum;
};

const subtract = function(a,b) {
	let sub = a-b;
  return sub;
};

const sum = function(array) {
	let sum = 0;
  for (let i=0;i<array.length; i++) {
    sum+= array[i];
  }
  return sum;
};

const multiply = function(array) {
  let multi =1;
  for (let i=0;i<array.length; i++) {
    multi*= array[i];
  }
  return multi;
};

const power = function(a,b) {
  pow = a;
	for (let i=0;i<b-1; i++) {
    pow *= a;
  };
  return pow;
};

const factorial = function(a) {
  if (a==0) {
    return 1;
  }
  else {
    return a * factorial(a-1);
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
