// [Array]
// Write a function that returns the sum of even positive numbers from an array.

const myNumbers = [1, 4, 3, 4, 5, 4];

function getSumOfEvenNumbers(myArray){
    let total = 0;
    for(let number of myArray)
        if(number%2 == 0 && number > 0)
            total += number;   
    return total;
}


const solution  = getSumOfEvenNumbers(myNumbers);
console.log(solution);


function sumEven(array){
    total = 0
    array.forEach(element => {
        (element%2 == 0 && number > 0) ? total += element : total;  });
    return total;
}
console.log(sumEven(myNumbers))

function forSomeReason(myNumbers){
    return myNumbers.reduce(function(total, value){
        if(value % 2 == 0 && number > 0)
            return total + value;
        return total;
    }) - 1  ;
}

console.log(forSomeReason(myNumbers))



