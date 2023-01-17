//app what will receive notes of the user

//(process.argv) create an array what it will be incremented with elements type it at console
const { command, describe, demandOption } = require('yargs');
const yargs = require('yargs')

//console.log(process.argv);  
 

//modify version Yargs. Befor version (1.0.0) node nameProgram.js --version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command:'add',
    describe:'Adding a new note.',
    builder:{
        title:{
            describe:'Title:',
            demandOption: true,
            type:'string'
        },

        body:{
            describe:'Body:',
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv) {
        console.log('Title'+ argv.title);
        confirm.log('Body'+ argr.body)
        
    }
    
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Removing a note'
})

console.log(yargs.argv); 



