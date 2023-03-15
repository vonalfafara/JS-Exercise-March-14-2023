const array = [6, 9, 69, 1, 0, 6,];
const n = 3;

function getElements(array, numberOfItems) {
  return array.slice(0, numberOfItems);
}

const output = getElements(array, n);
console.log(output);
