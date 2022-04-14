const sumAll = function(firstNum, secondNum) {
    let total = 0;
    if((Math.sign(firstNum) === 1 && Math.sign(secondNum) === 1) && (typeof(firstNum) === 'number' && typeof(secondNum) === 'number')){
        if(firstNum < secondNum){
            for(firstNum; firstNum<=secondNum; firstNum++){
                total+=firstNum;
            }
        }else{
            for(firstNum; firstNum>=secondNum; firstNum--){
                total-=(-firstNum);
            }
        }
        return total;
    }else{
        return 'ERROR';
    }
};
/**
 * PSUEDOCODE
 * Make sure both your numbers are positive and are actually numbers
 * Compare the two numbers given to see which one is bigger 
 * If the first number is bigger, take that number n and add n + 1 to it
 * If the second number is bigger, take that number n and add n - 1 to it. 
 */



// Do not edit below this line
module.exports = sumAll;
