// Write a Javascript program to get the extension of a filename.

function getFileExtension(filename) {
    return filename.slice(filename.lastIndexOf('.') + 1);
  }
  
  console.log(getFileExtension('myfile.txt')); 
  console.log(getFileExtension('script.js')); 
  console.log(getFileExtension('document.pdf')); 
  