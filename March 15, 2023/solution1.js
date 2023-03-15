// [Array]
// 1. Write a Javascript function that returns the first N items of an array, where N is the number of items. The function must accept 2 parameters: the array and the number of items to be returned.

const array = [1, 2, 3, 4]
const n = 3

function getElements(array, numberOfItems) {
    if(array.length < numberOfItems){
        return "Your numberOfItems exceeded the length of your Array";
    }else{
        return array.slice(0, numberOfItems);
    }
}

const result = getElements(array, n)
console.log(result)




