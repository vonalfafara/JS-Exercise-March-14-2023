//  Write a function that returns the sum of even positive numbers from an array.
// const numbers = [5, 7, 3, 4, 10, 6];

// function sumOfPositveNum(updateNum) {
//   let total = 0;

//   for (let i = 0; i < updateNum.length; i++) {
//      num = updateNum[i];
//     if (num > 0 && num % 2 === 0) {
//       total += num;
//     }
//   }
//   return total;
// }

// console.log(sumOfPositveNum(numbers)); 



// const sum = (updateNum) => {
//   let total = 0;

//   for (let i = 0; i < updateNum.length; i++) {
    
//          num = updateNum[i];
//         if (num > 0 && num % 2 === 0) {
//           total += num;
//         }
//       }
//       return total;
// }

// console.log(sum(numbers)); 

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