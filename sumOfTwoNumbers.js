function calculateSum(a,b){
    return a+b;

}
var num1= 5;
var num2 = 10;
var sum = calculateSum(num1,num2);
console.log("The sum is",+sum);


//-----------------------------
const calculateSum = (a, b) => {
    return a + b;
};

let num1 = 5;
let num2 = 10;
const sum = calculateSum(num1, num2);
console.log(`The sum is ${sum}`);

//-------------------------------------
const numbers = [5, 10, 15, 20];
let totalSum = 0;

numbers.forEach(number => {
    totalSum += number;
});

console.log(`The total sum is ${totalSum}`);

