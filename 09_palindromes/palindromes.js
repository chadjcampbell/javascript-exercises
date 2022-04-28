const palindromes = function (string) {
    let upper = string.toUpperCase();
    let array = Array.from(upper);
    let stripped = [];
    for (let i=0, j=0; i<array.length; i++) {
        if (array[i].toUpperCase() !== array[i].toLowerCase()) {
            stripped[j] = array[i];
            j++;
        };
    };
    let end = stripped.length - 1;
    for (let i=0, j=end; i<(end/2); i++, j--) {
        if (stripped[i] != stripped[j]) {
            return false;
        };
    };
    return true;
};

// Do not edit below this line
module.exports = palindromes;
