const fs = require('node:fs')

console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8', (_err, text) => {
  console.log(text)
})

console.log('Leyendo el segundo archivo ...')
fs.readFileSync('./archivo2.txt', 'utf-8', (_err, text) => {
  console.log(text)
})
