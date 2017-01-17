var fs = require('fs');
var _ = require('lodash');

var parseNotes = () => {
    try 
    {
        var storedNotes = fs.readFileSync("notes.json", "utf8");
        return JSON.parse(storedNotes);
    }
    catch (e)
    {
        return [];
    }
}
var saveNotes = (notes) => {
        try {
            fs.writeFileSync("notes.json", JSON.stringify(notes))
            return notes;
        }
        catch (e){
            console.log ("write file exception", e);
        }
}

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    
    var notes = parseNotes();
    var duplicatedNotes = notes.filter((note) => note.title === title)

    if (duplicatedNotes.length === 0) {
        notes.push(note);
        saveNotes(note);
        return note
    }
}



var getAll = () => {
    console.log(fs.readFileSync("notes.json", "utf8"));
}

var getNote = (title) => {
    var notes = parseNotes();
    console.log(_.pull(notes,  (t) => t.title === title ).body);
}

var removeNote = (title) => {
    var notes = parseNotes();
    console.log("notes", notes);
    filteredNotes = notes.filter((n) => n.title !== title)
    console.log(filteredNotes)
    saveNotes(notes);

    return notes.length !== filteredNotes.length;
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}
