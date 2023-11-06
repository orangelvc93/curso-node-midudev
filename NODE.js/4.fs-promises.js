const fs = require('node:fs/promises');

//Forma síncrona
//const text = fs.readFileSync('./archivo.txt', "utf-8");


//Forma asíncrona
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('Primer text: ', text)
    })
console.log("Hacemos cosas mientras lee el archivo....");

fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('Segundo texto: ', text)
    })