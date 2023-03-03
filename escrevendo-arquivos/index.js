const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req,res) =>{ 
    const infoUrl = require('url').parse(req.url, true)
    const name = infoUrl.query.name
    if(!name){
        fs.readFile("receber-arquivos.html", (error, data)=>{
            if(error){
                throw new Error (error)
            }
            res.writeHead(200, {"Content-Type": "txt/html"})  
            res.write(data)  
        })
    }
    else{

    }
})

server.listen(port, () =>{
    console.log('Server running!');
})
