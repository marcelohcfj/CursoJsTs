const numeros  = [5, 80, 92, 63, 2, 23, 18, 96, 74, 10, 37, 13, 12]

const dobro = numeros.map(valor => valor * 2);

// console.log(dobro);


const nomes = [
    {nome: 'Marcelo', idade: 27},
    {nome: 'Henrique', idade: 22},
    {nome: 'Costa', idade: 47},
    {nome: 'Ferreira', idade: 31},
    {nome: 'Junior', idade: 12},
    {nome: 'Erik', idade: 30},     
];

const nomes1 = nomes.map(obj => obj.nome);
const idade = nomes.map(obj => ({ idade: obj.idade }));


const comid = nomes.map(function (obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice; 
    return newObj;
});

//console.log(nomes1);
//console.log(idade);
console.log(comid);
