const sumAll = function(start, end) {
    if (start < 0 || end < 0) return 'ERROR';
    else if (typeof start != 'number' || typeof end != 'number') return 'ERROR';
    else if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
    else {
        let result = 0;
        if (start <= end) for (let i = start; i <= end; i++) result += i;
        else if (end < start) for (let i = end; i <= start; i++) result += i;
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
