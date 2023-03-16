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
    {
        username: "brie",
        comment: "i am a smurf Lorem"
    },
  ]

  function commentWithLorem(text) {
    let newArr = [];
    for(let i = 0; i < text.length; i++){
        if(text[i].comment.includes("lorem")){
            newArr.push(text[i]);
        }
    }
    console.log('Here are the comments that contain the word `lorem`: ');
    console.log(newArr);
  }
  
  commentWithLorem(comments);