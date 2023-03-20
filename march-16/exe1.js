const numbers = [5, 7, 3, 4, 10, 6];

const sum = (num) => {
  let startNumber = 0
  for (i = 0; i < num.length; i++) {
    lag  = num[i]

    if (lag > 0 &&  lag % 2 === 0) {
      startNumber +=num
    }
  }
  return startNumber
}

console.log(sum(numbers))