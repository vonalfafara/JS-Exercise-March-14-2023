// [Array]
// Write a function that returns the sum of even positive numbers from an array.

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let total = 0

function getEvenSum(sum) {
    for (let index = 0; index <= array.length; index++) {
        const element = array[index];
        if (element % 2 == 0 && element > 0) {
            total = total + element
        }
    }
    return total
}
const result = getEvenSum(total)
console.log('The sum is ' + result)