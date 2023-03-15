// 3. Write a Javascript program to get the current date in a specific format (mm-dd-yyyy, mm/dd/yyyy)

const currentDate = new Date();

const formattedDate1 = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

console.log(formattedDate1);

 