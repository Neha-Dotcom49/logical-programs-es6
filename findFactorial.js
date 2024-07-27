console.log(`-----------Method 1 using Recursion--------------`);
function factorial(n){
    if (n<0) {
        return -1;
    }
    if (n===0 || n=== 1) {
        return 1;
    }
    return n* factorial(n-1);
}
var number = 5;
var result = factorial(number);
console.log("The factorial of " + number + " is " + result);



console.log(`-----------Method 1 without Recursion--------------`);
function factorial(n){
    if (n<0) {
       return -1; 
    }
    if (n==0) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <=n; i++) {
        result= result*i
        
    }
    return result;
}
var number = 5;
var result = factorial(number);
console.log("The factorial of " + number + " is " + result);



//-------------------------------------------------------
function factorial(n) {
    if (n < 0) {
        return -1; // Factorial of a negative number is undefined
    }
    if (n === 0 || n === 1) {
        return 1; // Factorial of 0 or 1 is 1
    }
    let fact = 1;
    for (let i = n; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}
var number = 5;
var result = factorial(number);
console.log("The factorial of " + number + " is " + result);
