const findTheOldest = function(ageArray) {
    return ageArray.reduce((oldest, currentOldest) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getAge(currentOldest.yearOfBirth, currentOldest.yearOfDeath)
        return oldestAge < currentAge ? currentOldest : oldest;
    });
};

const getAge = (birth, death) => {
    if(!death) {death = new Date().getFullYear();}
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
