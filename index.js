const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const weatherDB = [
  {
    
    day:"1/1/2023",
    averageWeather:"25 c"
  }
]
app.get("/listar", function (req, res) {
  res.send(weatherDB)
})

app.post('/cadastrar', function (req, res) {  // POST: guard of the info at server
  console.log("log body",req.body);
  
  const day = req.body.day
  const averageWeather = req.body.averageWeather
  console.log(day, averageWeather);
  if (!day || !averageWeather){
    return res.send("Day or average Weather are missing", 422)
  }
  weatherDB.push({day:day, averageWeather:averageWeather}) // PUSH: insere elementos no array, em específico, na "ultima posição".  POP: tira o elemento da primeira posição. 
  
  res.send("ok!",204)
})
console.log("Server running at p3000")
app.listen(3000) // This line create a server
