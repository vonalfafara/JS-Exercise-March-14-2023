const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,26]

function getEvenFromArray(t) {
  let total = 0
  for (let i = 0; i < t.length; i++) {
    if (t[i] % 2 == 0) {
      total = total + t[i]
      // console.log(total)
    }
  }
  return total
}

const result = getEvenFromArray(array)
console.log("The total even numbers: "+result)