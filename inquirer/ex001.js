import inquirer from "inquirer";
import chalk from "chalk";

inquirer
.prompt([
    {name: 'p1',
    message: 'What your name?:',},
    {name: 'p2',
    message: 'How old you are?'}
])
.then((answer) =>{
    const namePerson = answer.p1
    const age = answer.p2
    console.log(chalk.green(`${namePerson} hav ${age} years.`));
})
.catch((err)=>{
    console.log(err);
})