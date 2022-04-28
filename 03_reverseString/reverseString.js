const reverseString = function(string) {
    let array = string.split('');
    let newString = '';
    for (let i=0, j=array.length-1; i<array.length; i++, j--) {
        newString += array[j]; 
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
