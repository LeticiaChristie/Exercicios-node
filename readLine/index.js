const { read } = require('fs');

//script input answer user(dev)
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('What your favorite programming language?: ',(language)=>{
    if (language === 'javaScript'){

        console.log(`Congratulations! ${language} is an excellent programming language.`);
    }
    else{
        console.log('Good!');
    }
    readline.close()
})