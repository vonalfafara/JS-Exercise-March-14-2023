// [Array of Objects]
// Given an array of objects, write a function to return an array of comments that contains the text "lorem"

const comments = [
    {
      username: "noobmaster69",
      comment: "Noob"
    },
    {
      username: "von",
      comment: "this is a lorem"
    },
    {
      username: "stanley",
      comment: "this activity sucks lorem"
    },
    {
      username: "jean",
      comment: "Osmanthus wine"
    },
    {
      username: "rey",
      comment: "i am a smurf LOREM"
    },
  ]

function commentWithLorem(text) {
let newArr = [];
const word = "lorem"
for(let i = 0; i < text.length; i++){
    if(text[i].comment.toLowerCase().includes('lorem')){
        newArr.push(text[i].comment);
    }
}
console.log('Here are the comments that contain the word `lorem`: ');
console.log(newArr);
}

commentWithLorem(comments);