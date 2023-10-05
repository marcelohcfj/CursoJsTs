

const numeros  = [5, 80, 92, 63, 2, 23, 18, 96, 74, 10, 37, 13, 12];

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
});

// console.log(total);









const nomes = [
    {nome: 'Marcelo', idade: 27},
    {nome: 'Henrique', idade: 22},
    {nome: 'Costa', idade: 47},
    {nome: 'Ferreira', idade: 31},
    {nome: 'Junior', idade: 12},
    {nome: 'Erik', idade: 30},     
];

const maisvelha = nomes.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisvelha);
