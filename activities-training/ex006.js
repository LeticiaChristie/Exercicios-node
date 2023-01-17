// test core modules
const fs = require ('fs')

fs.readFile ('note.txt', 'utf-8', (err,data) => {
    if (err){
        console.log('Err message');
    }
    
    console.log(data);
})