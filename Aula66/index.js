const numeros  = [5, 80, 92, 63, 2, 23, 18, 96, 74, 10, 37, 13, 12];

const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((ac, valor) => ac + valor);
console.log(numerosPares);

