console.log('Starting notes.js');


const fs = require('fs');

var fetchNotes = () => {
    try{
        let nodeString = fs.readFileSync('notes-data');
        return JSON.parse(nodeString);
    } catch (err){
        return [];
    }

}

var saveNote = (notes) => {
    fs.writeFileSync('notes-data', JSON.stringify(notes)); 
};


var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
   
    notes = fetchNotes();
    
    let duplicateNode = notes.filter(note => note.title === title);
    if(duplicateNode.length === 0){
        notes.push(note);
        saveNote(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
}

var readNote = (title) => {
    console.log('reading Notes', title);
    let notes = fetchNotes();
    let note = notes.filter(note => note.title === title);
    return note[0];

}

var removeNote = (title) => {
    let original = fetchNotes();
    let filtered = original.filter(note => note.title !== title);
    saveNote(filtered);
    return original.length !== filtered.length;
}

var logNote = (note) => {
    debugger;

    if(note){
        console.log('---');
        console.log(`Title : ${note.title}`);
        console.log(`Body : ${note.body}`);
    } else {
        console.log('Note not found');
    }
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
};