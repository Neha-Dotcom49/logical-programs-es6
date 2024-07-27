function reverseString(str){
    return str.split('').reverse().join('');

}
var inputString = "Hello World!";
var reversedString = reverseString(inputString);
console.log("The reverse string is: " + reversedString);