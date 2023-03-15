const array = ["This", "Is", "the", "Array", "Of", "object"]
const n = 3

function getElements(array, numberOfItems) {
  return array.slice(0, numberOfItems)
}

const result = getElements(array, n)
console.log(result)