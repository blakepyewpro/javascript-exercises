const removeFromArray = function(array, ...args) {
    let result = array;
    for (const arg of args) {
        while (result.includes(arg)) {
            result.splice(result.indexOf(arg), 1);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
