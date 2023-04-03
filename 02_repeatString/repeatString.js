


let result

const repeatString = function(str, num) {
        
    let storage = '';

            for (let i = 0; i < num; i++)
                {
                    {storage = storage + str;};
                }

            if (num < 0) {storage = "ERROR"}
            
        result = storage
        console.log(result)
                return result


};




// Do not edit below this line
module.exports = repeatString;
