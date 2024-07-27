function filterEvenNumber(arr){
    return arr.filter(function(num){
        return num%2 ===0;
    })
}
var numbers = [1,2,3,4,5,6,7,8,9,10];
var evenNumbers = filterEvenNumber(numbers);
console.log("The even number are: " + evenNumbers);


//================================================================================
let array = [1, 2, 4, 5];
let evenNumbers1 = array.filter(num => {
    if (num % 2 === 0) {
        console.log(num); 
        return true; 
    }
    return false; 
});
console.log('Even numbers:', evenNumbers1); 


//----------------------------------------------------------------------------------
let array4 = [3, 6, 5, 2, 10, 7];
const newArray = array4.filter( (element)=>{
    return element%2==0;
});
console.log(newArray);

function filterEvenNumber(arr){
    let array7= arr.filter(num=>{
        return num%2 ===0;
    })
    console.log(array7);
}
var numbers = [1,2,3,4,5,6,7,8,9,10];
var evenNumbers = filterEvenNumber(numbers);


f


