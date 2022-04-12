const reverseString = function(stringToReverse) {
    let stringIndex = stringToReverse.length - 1;
    let reversedString = ""
    while(stringIndex != -1){
        reversedString += stringToReverse[stringIndex];
        stringIndex--;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
//Set stringIndex equal to the length of the string we want to reverse
//Create an empty string for each letter to go into 
//while stringIndex is not equal to 0, grab each letter of the string 
//  (starting from the last one), and add it to the empty string
//