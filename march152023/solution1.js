// [Array]
//1. Write a Javascript function that returns the first N items of an array, where N is the number of items. The function must accept 2 parameters: the array and the number of items to be returned.

//const array = [...]
//const n = ...

//function getElements(array, numberOfItems) {
  //...
//}

//const result = getElements(array, n)
//console.log(result)



//another example.

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const n = 5

//function getElements(array, numberOfItems) {
 //   return array.slice(0, numberOfItems)
//}

//const result = getElements(array, n)
//console.log(result)




//Write a Javascript function that returns the first N items of an array, where N is the number of items.
// The function must accept 2 parameters: the array and the number of items to be returned.

function returnFirstNItems(arr, N) {
    return arr.slice(0, N);
}

// Here's how to use the function:

const myArray = ["Nag","Dala" ,"Ng" ,"Foods" ,"Huli" ,"Condo" ];
const firstThreeItems = returnFirstNItems(myArray, 3);
console.log(firstThreeItems); // Output: [1, 2, 3]


