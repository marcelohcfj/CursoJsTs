/* 
PRIMITIVOS
(imutáveis) -> string, number,boolean, indefined, null, (bigint, symbol);
*/

 /* let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0]); 

let a = 'A';
let b = a;  // copia 
console.log(a, b);

a = 'outra coisa';
console.log(a, b); */


/* REFERENCIA
 (mutável) - array, object, function */

/* let a = [1,2,3];
let b = [...a];
let c = b;
console.log(a, b);
a.push (4);
console.log(a, b);

b.pop(4);
console.log(a, b);
a.push('luiz');
console.log(a, b, c); */


const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
};
const b = {...a};
a.nome = 'João';
console.log(a);
console.log(b);






