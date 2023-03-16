//  Write a function that returns the sum of even positive numbers from an array.
const numbers = [5, 7, 3, 4, 10, 6];

function sumOfPositveNum(updateNum) {
  let total = 0;
  
  for (let i = 0; i < updateNum.length; i++) {
    const num = updateNum[i];
    if (num > 0 && num % 2 === 0) {
      total += num;
    }
  }
  return total;
}

console.log(sumOfPositveNum(numbers)); 
