const repeatString = function(stringToRepeat, numberOfRepeats) {
    if(numberOfRepeats < 0){
        return "ERROR";
    }
    let string = '';
    for(let i=0; i<numberOfRepeats; i++){
        string += stringToRepeat;
        
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
