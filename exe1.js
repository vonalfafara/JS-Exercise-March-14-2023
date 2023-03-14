// 1. Write a Javascript program to check two numbers and return true if one of the numbers is 100 or the sum of both numbers is 100.

const num1 = 100
const num2 = 50

const numbers = () => {
  if ((num1 >= 100 || num2 >= 100) && (num1 + num2 >= 100)) {
    return true
  }
}

console.log(numbers())
