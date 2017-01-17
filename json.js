// var obj = {
//     name: "Chris"
// };

// var stringObj = JSON.stringify(obj)
// var object = JSON.parse(stringObj)
// console.log(stringObj);


const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: ''
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString)

var notesString = fs.readFileSync('notes.jsvon');
var newNote = JSON.parse(notesString);

console.log(notesString);
console.log(newNote);