// return
// Retorna um valor 
// Termina a função

function criaMult(mult) {
    return function(n) {
         return n * mult;
    };
}

const duplica = criaMult(2);
const triplica = criaMult(3);
const quadriplica = criaMult(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));