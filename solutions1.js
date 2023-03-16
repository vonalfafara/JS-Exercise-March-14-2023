let array = [3, 19, 22, 35, 69, 88, 100, 150];

const sumEven = arr => arr.filter(e => !(e % 2)).reduce((a, b) => a + b);

console.log(sumEven(array));