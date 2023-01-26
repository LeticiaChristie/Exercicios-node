const http = require('http')

const port = 3000

const server = http.createServer((req, res) =>{
    const urlInfo = require('url').parse(req.url,true)
    const stok = urlInfo.query.stok

    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')

    if(!stok){
        res.end('<h1>Inform the product you want increment</h1><form method ="GET"><input type ="text" name ="stok"/><input type ="submit" value ="Enviar></form>')    
    }
    else{
        res.end(`<h1>${stok} was adding!</h1>`)

    }

})
server.listen(port,() =>{
    console.log(`Server running at the port ${port}`);
})