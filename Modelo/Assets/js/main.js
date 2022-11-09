const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Invalido', false);
        return;
    } 

    if (!altura) {
        setResultado('Altura Invalida', false);
        return;
    } 

    const imc = getImc(peso, altura);

    console.log(imc);

});

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}
