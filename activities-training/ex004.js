// app for create an app of notes with package yargs, and create commands of add, remove, read and list 
const { describe } = require('yargs');
const yargs = require('yargs')

//Modify version Yargs. Befor version(1.0.0), view this by command: node nameArquivo.js --version
yargs.version('1.1.0')

//Create add command. View command created: node nameArquivo --help
yargs.command({
    command: 'add',
    describe:'Add a new note.',
    handler: function () {
        console.log('Adding note');
    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a the note.',
    handler: function () {
        console.log('Removing note.');
    }
})

//Create read command
yargs.command({
    command:'read',
    describe:'Read a the note.',
    handler: function () {
        console.log('Reading note.');
    }
})

//Create list command
yargs.command({
    command:'list',
    describe:'List the notes.',
    handler: function () {
    }
})
console.log(yargs.argv);