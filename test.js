// 1. Write a Javascript program to check two numbers and return true if one of the numbers is 100 or the sum of both numbers is 100.
// 2. Write a Javascript program to get the extension of a filename.
// 3. Write a Javascript program to get the current date in a specific format (mm-dd-yyyy, mm/dd/yyyy)


// Problem 1
function checkTwoNum(x, y){
    if(Number.isInteger(x) && Number.isInteger(x)){
        if(x == 100 || y == 100 || (x + y == 100)){
            return true;
        }
    }
    return false;
}

// Problem 2 
function getExtension(fileName){
    return fileName.split(".")[1];
}

// Problem 3
function getCurrentDate(){
    let d = new Date();
    return  d.toLocaleDateString();
}



console.log(checkTwoNum(100, 2));
console.log(getExtension("test.txt"))
console.log(getCurrentDate());

