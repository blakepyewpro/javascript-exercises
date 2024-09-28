const reverseString = function(string) {
    if (string == '') return '';
    else {
        let resultArray = [];
        for (let i = 1; i <= string.length; i++) {
            resultArray.push(string.at(-i));
        }
        return resultArray.join('');
    }
};

// Do not edit below this line
module.exports = reverseString;
