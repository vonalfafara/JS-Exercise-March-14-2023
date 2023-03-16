const num = [-1, 3, 2, 5, -2, -65, 2, 50];

function getSum(){
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] >= 0 && num[i] % 2 == 0){
            sum += num[i];
        }  
    }
    console.log("The sum of all positive even numbers in the array of numbers is: " + sum);
}
getSum(num);