const repeatString = function(string, num) {
    let result = '';
    let iterator = 0;

    if (num == 0) return result;
    else if (num < 0) return 'ERROR';
    else if (string == '') return result;
    else while (iterator < num) {
        result += string;
        iterator++;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
