// Given an array of objects, write a function to return an array of comments that contains the text "lorem"

function getLoremComments(comments) {
    const loremComments = [];

    for (let i = 0; i < comments.length; i++) {
        if (comments[i].comment.includes('lorem')) {
            loremComments.push(comments[i].comment);
        }
    }

    return loremComments;
}

// testing
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
];

console.log(getLoremComments(comments)); // Output: ["this is a lorem", "this activity sucks lorem"]

