// [Array]
// Write a function that returns the sum of even positive numbers from an array.

const myNumbers = [1, 2, 3, 4, 5, 6];

function getSumOfEvenNumbers(myArray){
    let total = 0;
    for(let number of myArray){
        if(number%2 == 0){
            total += number;
        }
    }
    return total;
}

const solution  = getSumOfEvenNumbers(myNumbers);
console.log(solution);



