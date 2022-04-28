const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || num1<0) {
        return 'ERROR';
    }
    if (!Number.isInteger(num2) || num2<0) {
        return 'ERROR';
    }
    let sum = 0;
    if (num1<num2) {
        for (let i=num1, j=num2; i<num2; i++, j--) {
            sum += j;
        }
        return sum + num1;
    }
    else {
        for (let i=num2, j=num1; i<num1; i++, j--) {
            sum += j;
        }
        return sum + num2;
    }
};

// Do not edit below this line
module.exports = sumAll;
