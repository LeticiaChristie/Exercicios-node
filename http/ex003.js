const http = require('http')

const port = 3000

const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader = ('Contenty-Type', 'text/html')
    res.write('<h1>New test server with html.</h1>')

})

server.listen(port,() =>{
    console.log('Server running at the port 3000');
})