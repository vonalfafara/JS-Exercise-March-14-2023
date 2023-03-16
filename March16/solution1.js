const array = [2, 6, 8, 12, 3, 5, 7];

function sumOfEvenPositiveNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}


const sum = sumOfEvenPositiveNumbers(array);
console.log(sum); // Output: 28