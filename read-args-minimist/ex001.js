const minimist = require('minimist')

//console.log(minimist(process.argv));
const args = minimist(process.argv.slice(2))
//console.log(args);

//command for increment args. ex: node ex001.js --age=18
const namePerson = args['namePerson']
const age = args['age']
const profession = args['profession']

console.log(`Name of the studente :${namePerson}, age:${age}, profession:${profession}`);