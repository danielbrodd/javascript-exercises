const sumAll = function(value, maxValue) {
    let sum = 0
    if (Number.isInteger(value) && Number.isInteger(maxValue)){
    if (value > maxValue) {
        for (let i = value; i >= maxValue; i--) {
            sum += i;
        }
        return sum;
    } else if (value < 0) {
        return 'ERROR';
    }
    
    else
    for (let i = value; i <= maxValue; i++) {
        sum += i;
    }
    return sum; }
    else return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
