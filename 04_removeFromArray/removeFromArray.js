



const removeFromArray = function(inputArray, ...args) {

    let a1 = Array.from(args)
    let holdArray = []

    inputArray.forEach(item => {
        if (!a1.includes(item)) {
            holdArray.push(item);
        }
    });

    return holdArray

};

// Do not edit below this line
module.exports = removeFromArray;
