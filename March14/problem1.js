const array = [1, 2, 3, 4, 5];
const n = 3;

function getElements(array, numberOfItems) {
  return array.slice(0, numberOfItems);
}

const result = getElements(array, n);
console.log(result); 
