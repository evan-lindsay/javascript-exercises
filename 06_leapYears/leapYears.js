const leapYears = function (...args) {
  let year = Array.from(args);
  console.log(year);

  if (year[0] % 4 === 0 && (year[0] % 100 !== 0 || year[0] % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
