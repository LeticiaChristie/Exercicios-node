//Create an server http in script and read an file html. Use const fs 
const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) =>{
    fs.readFile('first-reading.html',(err,data) =>{
        res.writeHead(200, {'Contenty-Type':'txt/html'}) 
        res.write(data)
        return res.end()   
    })
})
server.listen(port,() =>{
    console.log(`Serve running at the port ${port}`);
})