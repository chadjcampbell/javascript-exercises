const findTheOldest = function(array) {
    array.forEach(person => {
        for (let key in person) {
            if (!person.hasOwnProperty('yearOfDeath')) {
                person.yearOfDeath = 2022;
            }
        }
    });
    const sortByLife = array.sort((a,b) => ((a.yearOfDeath-a.yearOfBirth)>(b.yearOfDeath-b.yearOfBirth)) ? -1 : 1);
    return sortByLife[0];
};

// Do not edit below this line
module.exports = findTheOldest;
