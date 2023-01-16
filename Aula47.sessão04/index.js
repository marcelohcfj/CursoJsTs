// declaração de função  (function hoisting)
function falaOi() {
    console.log('Oi');
};
falaOi();
// Objetos de primeira classe 
// function expression 
const souUmDado = function () {
    console.log('Sou um dado.');
};

souUmDado();

//Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//Dentro de um Objeto 
 
const obj = {
    falar() {
        console.log("Estou falando!");
    }
};
obj.falar();