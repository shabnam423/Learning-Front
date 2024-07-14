//user will input a num
//comp will check if its prime
//if prime returns true
//else returns false


function isPrime(num) {
    if (num <= 1) return false; 

    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}

const num = parseInt(prompt("Enter a number:"), 10);

if (isNaN(num)) {
    alert("Please enter a valid number.");
} else {
    const result = isPrime(num);
    alert(result ? `${num} is a prime number.` : `${num} is not a prime number.`);
}