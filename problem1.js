// Write a Javascript function that returns the first N items of an array, where N is the number of items. The function must accept 2 parameters: the array and the number of items to be returned

const array = [5, 34, 8, 11, 8979]
const n = 3

function getElements(array, numberOfItems) {
    numberOfItems = array.length
    for (let i = n; i < numberOfItems; i++) {
        array.pop()
    }
    return array
}

const result = getElements(array, n)
console.log(result)