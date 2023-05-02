const add = function (...args) {
  let inputs = Array.from(args);
  let x = 0;

  inputs.forEach((item) => {
    x += item;
  });
  return x;
};

const subtract = function (...args) {
  let inputs = Array.from(args);
  // inputs values are 10 and 4
  let x = inputs[0];

  inputs.slice(1).forEach((item) => {
    x -= item;
  });
  return x;
};

const sum = function (...args) {
  let inputs = [].concat.apply([], args);
  let x = 0;

  inputs.forEach((item) => {
    x += item;
  });
  return x;
};

const multiply = function (...args) {
  let inputs = [].concat.apply([], args);
  let x = inputs[0];

  inputs.slice(1).forEach((item) => {
    x *= item;
  });
  return x;
};

const power = function (...args) {
  let inputs = Array.from(args);
  let x = inputs[0];

  inputs.slice(1).forEach((item) => {
    x = x ** item;
  });
  return x;
};

const factorial = function (...args) {
  let inputs = Array.from(args);
  let x = inputs[0];
  if (x === 0 || x === 1) {
    return 1;
  }
  for (let i = x - 1; i >= 1; i--) {
    x *= i;
  }
  return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
