//Write a Javascript function that returns the first N items of an array, where N is the number of items.
// The function must accept 2 parameters: the array and the number of items to be returned.

function returnFirstNItems(arr, N) {
    return arr.slice(0, N);
}

// Here's how to use the function:

const myArray = [1, 2, 3, 4, 5, 6];
const firstThreeItems = returnFirstNItems(myArray, 3);
console.log(firstThreeItems); // Output: [1, 2, 3]
