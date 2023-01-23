import inquirer from "inquirer";
import chalk from "chalk";
import { number } from "yargs";

inquirer
.prompt([
    {name: 'name', message:'What your name?'},
    {name: 'note1', message: 'What your first note?:'},
    {name: 'note2', message: 'Informe the second note:'}
])
.then((answer)=>{
    
    const name = answer.name
    try{
        const average = (Number.parseInt(answer.note1) + Number.parseInt(answer.note2)) / 2
        console.log(chalk.bgGreen.black(`Hello! ${name} your average was:${average}`));
    }
    catch{(err)
        console.log(chalk.bgRed.black('The value of the notes must be numbers interage.'));
    }
})
.catch((err)=>{
    console.log(err);
})