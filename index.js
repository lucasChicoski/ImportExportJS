/**
 * 
 * Usando Import e export com javascript
 */

//Imports
let soma = require('./src/calculator/sum');
let objeto = require('./src/calculator/object')


//Contentgit 
var scanf = require('scanf');

console.log('digite um valor')
let x = scanf('%d');
console.log('digite um valor')
let y = scanf("%d");

let z = soma(x, y)

console.log(z)

console.log(objeto.methods.soma())

console.log('digite nome')
objeto.atribute.nome = scanf("%S")
console.log(objeto.atribute.nome)



