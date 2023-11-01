/* 
En Node.js, el path es un módulo que proporciona una forma de trabajar con directorios y rutas de archivos. Este módulo ofrece una serie de funciones que permiten manipular rutas de archivos, como:

Combinar rutas
Obtener la parte del archivo de una ruta
Obtener la parte del directorio de una ruta
Obtener la extensión de un archivo
Comprobar si una ruta es absoluta o relativa
Normalizar una ruta
 */
const path = require('node:path')

//Barra separadora de carpetas segun SO
console.log(path.sep);

//Unir rutas con path.join
const filePath = path.join('content', 'subFolder', 'archivo.txt')
console.log(filePath)