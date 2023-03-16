// Write a Javascript program to get the current date in a specific format (mm-dd-yyyy, mm/dd/yyyy)

function getCurrentDate(separator) {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    return `${month < 10 ? '0' + month : month}${separator}${day < 10 ? '0' + day : day}${separator}${year}`;
}

// Example usage
console.log(getCurrentDate('-')); // "03-14-2023"
console.log(getCurrentDate('/')); // "03/14/2023"
