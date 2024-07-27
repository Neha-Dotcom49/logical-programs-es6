//---------------------------------0, 1, 1, 2, 3, 5, 8, 13, 21-------------------------------
// const number = 6;
// let n1=  0 , n2 = 1, nextTerm;
// console.log("Fibonacci Series:");
// console.log(n1);
// console.log(n2);
// nextTerm = n1+n2;
// while (nextTerm<= number) {
//     console.log(nextTerm);
//     n1=n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }

function fibonacciSeries(number) {
    let n1 = 0, n2 = 1, nextTerm;
    console.log("Fibonacci Series:");
    console.log(n1);
    console.log(n2);
    
    nextTerm = n1 + n2;
    while (nextTerm <= number) {
        console.log(nextTerm);
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
}
// Call the function with the desired number
const number = 6;
fibonacciSeries(number);


//------------------------------------
// function fibonacciSeries(number) {
//     let n1 = 0, n2 = 1, nextTerm;
//     const series = [n1, n2];

//     nextTerm = n1 + n2;
//     while (nextTerm <= number) {
//         series.push(nextTerm);
//         n1 = n2;
//         n2 = nextTerm;
//         nextTerm = n1 + n2;
//     }

//     return series;
// }

// // Call the function with the desired number
// const number = 6;
// const series = fibonacciSeries(number);
// console.log("Fibonacci Series:", series);

//=====================================================
// const number = 6;
// let n1 = 0, n2 = 1, nextTerm;

// console.log("Fibonacci Series:");
// console.log(n1); // Print the first Fibonacci number
// console.log(n2); // Print the second Fibonacci number

// do {
//     nextTerm = n1 + n2; // Calculate the next Fibonacci number
//     if (nextTerm <= number) {
//         console.log(nextTerm); // Print the next Fibonacci number
//     }
//     n1 = n2; // Update n1 to the value of n2
//     n2 = nextTerm; // Update n2 to the value of the nextTerm
// } while (nextTerm <= number);


                                                   



                                                                        
