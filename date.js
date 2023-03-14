
// 3. Write a Javascript program to get the current date in a specific format (mm-dd-yyyy, mm/dd/yyyy)

let date = new Date();

let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();

let formattedDate1 = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
let formattedDate2 = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;

console.log(formattedDate1); 
console.log(formattedDate2); 


