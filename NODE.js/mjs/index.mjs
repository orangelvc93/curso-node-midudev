// .js ➡ usa por defecto CommonJS
// .mjs ➡ para utilizar ES Modules
// .cjs ➡ usa por defecto CommonJS



// Sistema de modulos moderno - el que se debe utilizar actualmente
import { sum, mult, div } from "./sum.mjs";

console.log(sum(6, 8))
console.log(mult(6, 8))
console.log(div(6, 8))