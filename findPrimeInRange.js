function findPrimesInRange(start, end){
    const primes = [];
    for (let num = start; num < end; num++) {
        let isPrime = num>1;
        for (let i = 2; i <=Math.sqrt(num); i++){
            if (num%i===0) {
                isPrime = false;
                break
            }
        }
        if (isPrime) {
            primes.push(num);
        }
        
    }
    return primes;
}
const start = 10;
const end = 50;
const primeNumbers = findPrimesInRange(start, end);
console.log(" Prime number between " + start + " and " + end + " : " + primeNumbers.join(","));

// For example, if num = 36, Math.sqrt(36) is 6. Instead of checking divisibility by numbers up to 35, we only need to check up to 6, which is more efficient.