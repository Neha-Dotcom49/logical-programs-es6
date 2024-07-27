function findMax(arr){
    if (arr.length===0) {
        return null;
    }
    let max = arr[0];
    for (let i = 0; i <arr.length; i++) {
        if (arr[i]>max) {
            max = arr[i];
        }
    }
    return max;
}
var numbers = [10,5,20,50,70];
var maxNumber = findMax(numbers);
console.log("Maximum number is:", +maxNumber);



let arr = [10, 5, 20, 50, 70];
let max = arr[0]; // Initialize max with the first element of the array

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]; // Update max if the current element is greater than max
    }
}

console.log("Maximum number is:", max); // Output: Maximum number is: 70








