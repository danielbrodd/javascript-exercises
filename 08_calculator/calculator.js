const add = function(a,b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
  let total = 0;
  for (const e of a) {
    total += e
  };
  return parseInt(total);
};

const multiply = function(a) {
  let sum = 1;

  a.forEach(element => {
    sum *= element
  });
  return sum;
  };

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  if (num === 0 || num === 1){
    return 1;
  }else{
	for (let i = num -1; i >= 1 ; i--) {
    num *= i
  } return num;}
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
