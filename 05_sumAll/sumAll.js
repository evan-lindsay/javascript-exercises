


const sumAll = function(...x) {
    let xArray = Array.from(x)

    if (xArray.contains(String)) {
        return "ERROR"
    }
    
    
    else if (xArray[0] > xArray[1])
    { xArray.sort((a, b) => b - a) 

    }

    if (xArray[0] < 0 || xArray[1] < 0){
        return "ERROR"
    }



    let sumArray = 0

    for (let i = xArray[0]; i <= xArray[1]; i++)
    {
        sumArray += i
    }
    console.log(xArray)
    return sumArray
};

// Do not edit below this line
module.exports = sumAll;
