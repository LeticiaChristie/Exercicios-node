const http = require('http')

const door = 3000

const server = http.createServer((req, res) => {
    res.write('Second test server')
    res.end()
})

server.listen(door,() => {
    console.log('Running server!!! Door 3000.');
})