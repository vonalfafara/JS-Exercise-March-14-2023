const array = [5, 10, 15, 20, 25, 30, 60, 90]
const n = 4


function getElements(array, numberOfItems) {
  return array.slice(0,numberOfItems)
  
}

const result = getElements(array, n)
console.log(result)

