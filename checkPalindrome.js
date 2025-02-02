function isPalindrome(str){
    return str === str.split('').reverse().join('');

}
var inputString = 'abcabc';
if (isPalindrome(inputString)) {
    console.log("The string '" + inputString + "' is a palindrome.");
}
else{
    console.log("The string '" + inputString + "' is not palindrome.");
}



console.log(`------------------Method 2----------------------------`);
function isPalindrome(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}
var inputString = "A man, a plan, a canal,Panama!";
console.log("Is the string is palindrome? " + isPalindrome(inputString));
//.replace(/[^a-z0-9]/g, '') removes all non-alphanumeric characters, resulting in "hellohowareyou123".