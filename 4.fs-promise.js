//Esto solo en modulos nativos
// const { promisify} = require('node:util')
// const readFilePromise = promisify(fs.readFile)
const fs = require('node:fs/promises')



console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8').then(text => {
    console.log('primer texto', text);
})


console.log('Leyendo el segundo archivo ...')
fs.readFileSync('./archivo.txt', 'utf-8').then(text => {
    console.log('segundo texto', text);
})

console.log(secondText)