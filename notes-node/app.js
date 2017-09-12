
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions =  {
        describe: 'Title of Note',
        demand : true,
        alias: 't'
    };

var bodyOptions =  {
    describe: 'Body of Note',
    demand : true,
    alias: 'b'

};
const argv = yargs
.command('add', 'Add a new note',{
    title : titleOptions,
    body : bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
    titleOptions
})
.command('Remove', 'Remove a note', {
    titleOptions
})
.help().argv;

const command = argv._[0];

if( command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    notes.logNote(note);
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes`);
    allNotes.forEach(note => notes.logNote(note));
} else if ( command === 'read'){
    var note = notes.readNote(argv.title);
    notes.logNote(note);
} else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? console.log('Note was removed') : console.log('No note removed');
}
else {
    console.log('No commands');
}

