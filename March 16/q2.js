// Give an array of objects. Write a function to return an array of comments that contains the text "lorem".


const comments = [
  {
    username: "pinkbaby",
    comment: "I'm the OG."
  },
  {
    username: "fuchsia88",
    comment: "No, you're not! You're just basic."
  },
  {
    username: "BalletSlipper",
    comment: "Peace, y'all! lorem still prevails."
  },
  {
    username: "Taffymuffy",
    comment: "True! lorem is the best!"
  },
  {
    username: "Magenta",
    comment: "What even is a lorem?"
  },
]

const loremComments = getLoremComments(comments);

function getLoremComments(comments) {
    return comments.filter(comment => comment.comment.includes("lorem"));
  }


console.log(loremComments);
