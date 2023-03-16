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
    function findCommentsWithLorem(array) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
          if (array[i].comment.includes("lorem")) {
            result.push(array[i].comment);
          }
        }
        return result;
      }
