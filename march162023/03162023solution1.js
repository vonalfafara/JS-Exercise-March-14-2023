

//const firstThreeItems = returnFirstNItems(myArray, 3);

//console.log(firstThreeItems);

  


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

  function displaycomment(array) {
    for (let index = 0; index < array.length; index++) {
      if (array[index].comment == true) {
        console.log(
          `${array[index].username} ${array[index].comment}`
        )
      }
    }
  }
  
  displaycomment(comments)