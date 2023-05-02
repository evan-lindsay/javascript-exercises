const convertToCelsius = function (...args) {
  let inputF = Array.from(args);
  let outputC = inputF.map((inputF) => (inputF - 32) * (5 / 9));
  let cAnswer = parseFloat(outputC[0].toFixed(1));
  return cAnswer;
};

const convertToFahrenheit = function (...args) {
  let inputC = Array.from(args);
  let outputF = inputC.map((inputC) => inputC * (9 / 5) + 32);
  let fAnswer = parseFloat(outputF[0].toFixed(1));
  return fAnswer;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
