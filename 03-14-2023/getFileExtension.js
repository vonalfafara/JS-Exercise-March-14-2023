// Write a Javascript program to get the extension of a filename.

function getFileExtension(filename) {
    return filename.slice(filename.lastIndexOf('.') + 1);
}

// Example usage
console.log(getFileExtension('example.txt')); // "txt"
console.log(getFileExtension('script.js')); // "js"
console.log(getFileExtension('image.png')); // "png"