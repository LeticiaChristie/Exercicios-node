import inquirer from "inquirer";
import chalk from "chalk";

inquirer
.prompt([
    {name: 'name', message: 'What your name?:',},
    {name: 'age', message: 'How age you are?',}
])
.then((answer)=>{
    if (!answer.name || !answer.age){
        throw new Error('Mandatory data!')
    }
    console.log(chalk.bgYellow.black(`Hello! ${answer.name}, then you has ${answer.age} years?`));
})
.catch((err) =>{
    console.log(err);
})