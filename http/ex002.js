const http = require('http')

const door = 3000

const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.end('<h1>First server wich response HTML.</h1>')
})

server.listen(door,()=>{
    console.log(`Running server at the door ${door}`);
})