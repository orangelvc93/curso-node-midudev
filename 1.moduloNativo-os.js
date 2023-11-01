//Módulos nativos de Node JS

const os = require('node:os');
//Este modulo sirve para obtener datos del sistema operativo

console.log('Información del sistema operativo');
console.log("_____________________________________");
console.log(`Arquitectura ${os.arch()}`);
console.log(`Nombre del sistema operativo: ${os.platform()}`);
console.log(`Version del sistema operativo: ${os.release()}`);
console.log("CPUs:}", os.cpus());
console.log("Memoria Total:", os.totalmem() / 1024 / 1024);
console.log("Memoria Total:", os.freemem() / 1024 / 1024);
console.log('uptime:', os.uptime() / 60 / 60)