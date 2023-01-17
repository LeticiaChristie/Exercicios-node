//Api test2
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

sizeEstates = []

app.get('/sizeEstates', function (req, res) {
  res.send(sizeEstates)
  console.log('ok!');
})

app.post('/sizeEstates', function (req, res) {
    const estate = req.body.estate
    const size = req.body.estate

    if (!estate || !size){
        return res.send('Missing infos.',500)
    }
    
    sizeEstates.push({estate:estate,size:size})
})

app.put ('/sizeEstates/update',function (req,res) {
    const estate = req.body.estate
    sizeEstates[req.params] = estate;
    return res.json(sizeEstates[req.params]);
})

app.delete('/sizeEstates/delete',function (req, res) {
    sizeEstates = null; //deletar item
    return res.json(sizeEstates);
})

app.listen(3005)