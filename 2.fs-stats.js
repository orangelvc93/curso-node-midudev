// File System 

const fs = require('node:fs') // A partir de node 16, se recomienda poner node:

/* 
El módulo fs de Node.js sirve para interactuar con el sistema de archivos del ordenador en el que se está ejecutando el programa. Con él, podemos realizar operaciones como:

Crear, leer, escribir, renombrar, copiar, mover y eliminar archivos.
Crear, leer y eliminar directorios.
Obtener información sobre archivos y directorios.
Monitorizar cambios en el sistema de archivos.
*/



//EJEMPLOS:
// leer archivos
const stats = fs.statSync("./archivo.txt");
console.log(
    stats.isFile(), //Si es un fichero
    stats.isDirectory(), //Si es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbolico
    stats.size, //Tamaño en bytes
)