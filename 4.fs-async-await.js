const fs = require('node:fs/promises');

//IIFE - Inmediatly involved Function Expression
(
    async () => {
        console.log('Leyendo el primer archivo')
        const text = await fs.readFile('./archivo.txt', 'utf-8')
        console.log('Primer texto: ', text)
        console.log("Hacemos cosas mientras lee el archivo....");

        const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
        console.log('Segundo texto: ', text2)
    }
)()
