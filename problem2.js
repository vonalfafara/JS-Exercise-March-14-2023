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
      comment: "i am a smurf"
    },
  ]

function getLorem(lorem) {
    return lorem.comment === "lorem";
}

console.log(comments.find(getLorem));