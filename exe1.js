// 1. Write a Javascript program to check two numbers and return true if one of the numbers is 100 or the sum of both numbers is 100.

// const num1 = 123
// const num2 = 100

// const numbers = () => {
//   if (num1  === 100 || num2 === 100 || num1 + num2 ===100) {
//     return true
//   }
  
//   return false
// }

// console.log(numbers())


// 1. Write a Javascript function that returns the first N items of an array, where N is the number of items. The function must accept 2 parameters: the array and the number of items to be returned.
const array = [1, 2, 3, 4, 5];
const n = 1;

function getElements(array, numberOfItems) {
  return array.slice(0, numberOfItems)
  
}

const result = getElements(array, n)
console.log(result)

