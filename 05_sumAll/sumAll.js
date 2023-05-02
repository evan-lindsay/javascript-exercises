let resultValue = 0;

const sumAll = function (...args) {
  let sumArray = Array.from(args);
  let x = 0;
  let y = 0;
  let storage = 0;

  if (parseInt(sumArray[0]) < 0 || parseInt(sumArray[1]) < 0) {
    return "ERROR";
  } else if (isNaN(sumArray[0]) || isNaN(sumArray[1])) {
    return "ERROR";
  } else if (
    typeof sumArray[0] !== "number" ||
    typeof sumArray[1] !== "number"
  ) {
    return "ERROR";
  } else if (parseInt(sumArray[0]) < parseInt(sumArray[1])) {
    x = parseInt(sumArray[0]);
    y = parseInt(sumArray[1]);
  } else if (parseInt(sumArray[1]) < parseInt(sumArray[0])) {
    y = parseInt(sumArray[0]);
    x = parseInt(sumArray[1]);
  }

  for (let i = x; i <= y; i++) {
    {
      storage = storage + i;
    }
    resultValue = storage;
  }

  console.log(resultValue);
  return resultValue;
};

// Do not edit below this line
module.exports = sumAll;
