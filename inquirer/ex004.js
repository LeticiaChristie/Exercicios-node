import inquirer from "inquirer";
import chalk from "chalk";

inquirer
.prompt([
    {name: 'name', message: 'What your name?:'},
    {name: 'birthYear', message: 'What the your birth year?:'}
])
.then((answer)=>{
    const name = answer.name

    try{
        const birthYear = Number.parseInt(answer.birthYear)

        if (birthYear){
            const birth = 2023 - birthYear
            console.log(chalk.green(`You has ${birth} years`));
        }
    }
    catch{(err)
        console.log(chalk.bgRed.back(`Number incorrect! Inform a number of 4 digits.${err}`));
    }

})
.catch((err)=>{
    console.log(err);
})