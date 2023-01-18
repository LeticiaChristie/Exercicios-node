//Import a file and use the external modedule minimist
const calculation = require('./ex001').calculation
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

const a = args['a']
const b = args['b']

calculation(a,b)

 setTimeout (() =>{
    console.clear()
 },5000)