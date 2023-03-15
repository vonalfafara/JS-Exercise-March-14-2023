const array = [10,50,"third string",500,1000,1500, "I'm a string"]
const n = 3

function getElements(array, numberOfItems) {
  let deletedArrays
  numberOfItems = n
  // for (let i = 0; i < n; i++) {
  //   newArray.pop()
  //   newArray.push(array[i])
  // }
  deletedArrays = array.splice(0,numberOfItems)
  array = deletedArrays
  return [array, numberOfItems]
}

const result = getElements(array, n)
console.log(result)