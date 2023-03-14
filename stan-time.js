// 3. Write a Javascript program to get the current date in a specific format (mm-dd-yyyy, mm/dd/yyyy)

let date = new Date();
let month = date.getMonth () + 1
let day = date.getDay ()
let year = date.getFullYear()


console.log (month + "/" + day + "/" + year)

