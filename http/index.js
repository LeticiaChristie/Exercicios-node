const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.write('Hello http!')
    res.end()

})

server.listen(port, () =>{
    console.log(`Running server at port ${port}`);
})