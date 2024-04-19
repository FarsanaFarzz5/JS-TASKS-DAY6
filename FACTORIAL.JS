function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}


const num = 5;
console.log(`The factorial of ${num} is: ${factorial(num)}`);
