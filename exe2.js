// 2. Write a Javascript program to get the extension of a filename.

// const fileName = ["index.html"]

// const extension = fileName.map(name => {
//   const newValue = name.split(".")
// //   console.log(newValue)

//   return newValue.slice(1).pop()

// });
const fileName = "index.html";

const extension = fileName.split(".").pop();

console.log(extension)