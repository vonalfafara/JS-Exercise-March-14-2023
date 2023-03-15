const array = [5, 9, 8, 3, 69];
const n = 3;

function getElements(array, numberOfItems) {
    numberOfItems = array.length;
    return `The first ${n} items in an array with ${numberOfItems} items are ${array.slice(0, n)}`
}

const result = getElements(array, n)
console.log(result);