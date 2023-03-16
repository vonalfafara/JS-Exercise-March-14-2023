
const array = [ 2, 6, 8 ,12 ,3 ,5 ,7]


function sumEvenPositiveNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0 && numbers[i] % 2 === 0) {
        sum += numbers[i];
      }
    }
    return sum;

  }
  console.log(sum)