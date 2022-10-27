let numero = prompt('Digite um numero:');
numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const arrbx = document.getElementById('arrbx');
const arrpc = document.getElementById('arrpc');
const comdec = document.getElementById('comdec');

numeroTitulo.innerHTML = `<strong>Seu numero é: ${numero}<strong>`;
raiz.innerHTML = `<p>A raiz quadrada é ${Math.sqrt(numero)}<p>`;
inteiro.innerHTML = `<p>É um numero inteiro: ${Number.isInteger(numero)}<p>`;
nan.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}<p>`;
arrbx.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numero)}<p>`;
arrpc.innerHTML = `<p>Arredondando para cima: ${Math.ceil(numero)}<p>`;
comdec.innerHTML = `<p>Com duas casa decimais ${numero.toFixed(2)}<p>`;

