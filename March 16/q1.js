// Write a function that returns the sum of even positive numbers from an array. 

const arr = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
const sum = sumEvenPositive(arr);

function sumEvenPositive(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 && arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
    console.log(`The sum of even positive numbers in ${arr} is: ${sum}`);
  