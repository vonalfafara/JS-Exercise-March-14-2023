

  //[Array]
//Write a function that returns the sum of even positive numbers from an array.


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function Positve(Numb) {


    let total = 0;
    

    for (let i = 0; i < Numb.length; i++) {
      const num = Numb[i];
      if (num > 0 && num % 2 === 0) {
        total += num;
      }
    }


    return total;
  }
  
  console.log(Positve(numb)); 




