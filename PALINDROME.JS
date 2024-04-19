function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

// Test the function
const number = 12321;
console.log(number + " is " + (isPalindrome(number) ? "a" : "not a") + " palindrome.");

