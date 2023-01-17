//new file of input args through terminal

console.log(process.argv);

const args = process.argv.slice(2)

const namePerson = args[0].split('=')[1]
//console.log(namePerson);

const age = args[1].split('=')[1]
//console.log(age);

const heigth = args[2].split('=')[1]
//console.log(heigth);

console.log(`${namePerson} is ${age} years and ${heigth}cm tall. `);