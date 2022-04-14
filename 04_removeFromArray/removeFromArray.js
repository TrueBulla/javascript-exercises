const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach((item) => {
        if(!args.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};

/*
-------Psuedocode-------

Receive array and the values to remove from the array.
Interate through the array looking for those numbers 
If the current array value is NOT one of those numbers, put that value in a newArray.
*/


// Do not edit below this line
module.exports = removeFromArray;
