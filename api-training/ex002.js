//Create app of notes.

const fs = require('fs')

fs.writeFileSync("notes.txt", "Notes over create the apis.")
fs.appendFileSync("notes.txt", " Metod GET: search the info and print at screen.")
fs.appendFileSync("notes.txt", " Metod POST: stores on the server.")
fs.appendFileSync("notes.txt", " Metod PUSH: increment elements at array, at the last position.")
fs.appendFileSync("notes.txt", " Metod POP: put one element at the first position of the array. ")
fs.appendFileSync("notes.txt", "JSON: means notation of object javaScrip.")