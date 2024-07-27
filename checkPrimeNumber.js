console.log(`method 1`);
function isPrime(num){
    if(num<=1){
        return  false;
    }
    if (num===2) {
        return true;
    }
    if (num%2===0) {
        return false;
    }
    for (let i = 3; i < Math.sqrt(num); i=i+2) {
        if (num%i===0) {
            return false;
        }    
    }
    return true;
}
var number = 29;
if (isPrime(number)) {
    console.log(number + " is a prime number. ");
}else{
    console.log(number + " is not a prime number. ");
}

console.log(`Method 2`);
function isPrime(num){
    if (num<=1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num%i===0) {
            return false;
        }
        
    }
    return true;
}
var number = 21;
if (isPrime(number)) {
    console.log(number + " is a prime number. ");
}else{
    console.log(number + " is not a prime number. ");
}