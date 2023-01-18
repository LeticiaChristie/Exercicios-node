import chalk from 'chalk'

const note = 10

if (note >= 7){
    console.log(chalk.green.bold('Congratulations! you was approved.'));
}

else{
    console.log(chalk.bgRed('Danger! you need do  recovery proof.'));
}

setTimeout (() =>{
    console.clear ();
}, 5000)