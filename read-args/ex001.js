//input through the terminal (ex' at terminal: node ex001.js namePerson=Leticia)

console.log(process.argv);

const args = process.argv.slice(2)

//console.log(args);

const namePerson = args[0].split('=')[1]
console.log(namePerson)

const age = args[1].split('=')[1]
console.log(age);

const heigth = args[2].split('=')[1]
console.log(heigth);



