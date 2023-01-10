//Test api
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const yearlyTemperature = [{
      month: "jan",
      day: "01",
      temperature: "26 c"
}]
app.get('/list', function (req, res) {
  res.send(yearlyTemperature)
})

app.post('/register',function(req, res) {
    console.log("log body",req.body);
    const month = req.body.month
    const day = req.body.day
    const temperature = req.body.temperature
    console.log(month,day,temperature);

    if (!month|| !day || !temperature) {
       return res.send("Month, day or temperature are missing",402)
        
    }
     yearlyTemperature.push({month:month, day:day, temperature:temperature})

     res.send("Ok!",204)
})
console.log("Server running at p3000");

app.listen(3000)