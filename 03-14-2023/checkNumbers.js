// Write a Javascript program to check two numbers and return true if one of the numbers is 100 or the sum of both numbers is 100.

function checkNumbers(num1, num2) {
    return (num1 === 100 || num2 === 100 || num1 + num2 === 100);
}

// Example usage
console.log(checkNumbers(50, 50)); // true
console.log(checkNumbers(100, 0)); // true
console.log(checkNumbers(25, 75)); // true
console.log(checkNumbers(20, 30)); // false