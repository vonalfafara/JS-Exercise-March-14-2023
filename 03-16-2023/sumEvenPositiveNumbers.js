// Write a function that returns the sum of even positive numbers from an array.

function sumEvenPositiveNumbers(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 === 0) {
            sum += array[i];
        }
    }

    return sum;
}

// testing

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumEvenPositiveNumbers(arr)); // Output: 20 (2 + 4 + 6 + 8)
