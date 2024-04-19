function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfEvens = sumOfEvenNumbers(numbers);
console.log("Sum of even numbers:", sumOfEvens);
