import inquirer from 'inquirer';
import chalk  from 'chalk';

inquirer
.prompt([
    {name: 'p1',
    message: 'What value of the first note?:',},
    {name: 'p2',
    message:'Informe the second message:'}
])
.then((answer)=>{
    console.log(answer);
    const average = ((parseInt(answer.p1) + parseInt(answer.p2)) / 2)
    if (average >= 6){

        console.log(chalk.bgGreen.bold(`Congratulations! You was approved with average: ${average}`));
    }
    else{
        console.log(chalk.bgRed(`Unfortunately, you was not approved. Your average was: ${average}`));
    }
})
.catch((err) =>{
    console.log(err);
})