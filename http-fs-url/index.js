const http = require('http')
const fs = require('fs')
const { parse } = require('path')

const port = 3000

const server = http.createServer((req, res) =>{
    const urlInfo = require('url').parse(req.url, true)
    const fileName = urlInfo.pathname.substring(1)

    if (fileName.includes('html')){
        if(fs.existsSync(fileName)){
            fs.readFile(fileName,(error, data) => {
            res.writeHead(200,  {'Content-Type': 'txt/html'})
            res.write(data)
            return res.end()    
            })
        }else {
            fs.readFile("404.html",(error, data) => {
                res.writeHead(404,  {'Content-Type': 'txt/html'})
                res.write(data)
                return res.end() 
            })
    }
}
})

server.listen(port,() =>{
    console.log('Server running!');
})