const getTheTitles = function(array) {
    bookList=[]
    for (let i=0; i<array.length; i++) {
        bookList.push(array[i].title); 
    };
    return bookList;
};

// Do not edit below this line
module.exports = getTheTitles;
