// Write a Javascript program to check two numbers and return true if one of the numbers is 100 or the sum of both numbers is 100.

function checkSum(num1, num2) {
    return num1 === 100 || num2 === 100 || num1 + num2 === 100;
  }
  
  console.log(checkSum(50, 50)); 
  console.log(checkSum(50, 60)); 
  console.log(checkSum(100, 0)); 
  console.log(checkSum(40, 30)); 
  console.log(checkSum(75, 25)); 
  console.log(checkSum(110, -10)); 