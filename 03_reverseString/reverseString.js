


const reverseString = function(input) {

    let inputString = input.toString();
    array1 = inputString.split("");
    arrayReverse = array1.reverse();
    arrayJoin = arrayReverse.join('');
    return arrayJoin;
};

// Do not edit below this line
module.exports = reverseString;
