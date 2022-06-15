const palindromes = function (word){
    let filteredArray = word.toLowerCase().replace(/[^a-z]/g, "");
    return filteredArray.split("").reverse().join("") == filteredArray;
};

console.log(palindromes('ZZZZ car, a man, a maracaz.'))

// Do not edit below this line
module.exports = palindromes;
