// test script with readline 
const readline = require('readline').createInterface({
    input: process.stdin,
    input: process.stdout,
})

readline.question('How old are you?:',(language) => {
    if (language >= '18'){

        console.log('Of legal age.');
    }
    else{
        console.log('Minor of age.');
    }

    readline.close()
})