const fs = require('node:fs');

//Forma síncrona
//const text = fs.readFileSync('./archivo.txt', "utf-8");


//Forma asíncrona
fs.readFile('./archivo.txt', 'utf-8', (error, text) => { // ⬅ Esto es un callback
    console.log(text)
})

console.log("Hacemos cosas mientras lee el archivo....");

fs.readFile('./archivo2.txt', 'utf-8', (error, text) => {
    console.log(text)
})