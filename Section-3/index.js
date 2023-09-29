let user_input = parseInt(prompt("Enter a number, please"));

//initialize an empty string to add the prime numbers to it to be able to print as asked
let prime = ""

// looping from 2 to the entered number
for (let i = 2; i <= user_input; i++) {
    let isPrime = true; // assume i is prime until proven otherwise
    // looping to go throu the numbers from 2 to i to check for divisors
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false; // If i is divisible by any j, it's not prime
            break; // No need to check further, exit the loop
        }
    }

    if (isPrime) {
        prime += i + " "
        //console.log(i); // Only print i if it's prime
    }
}
console.log(prime);