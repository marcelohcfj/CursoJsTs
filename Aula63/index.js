// Filter -> sempre retornar um array com a mesma quantidade de elementos, ou menos.


const numeros  = [5, 80, 92, 63, 2, 23, 18, 96, 74, 10, 37, 13, 12]

const numeros1 = numeros.filter(valor => (valor > 10))

console.log(numeros1);



const nomes = [
    {nome: 'Marcelo', idade: 27},
    {nome: 'Henrique', idade: 22},
    {nome: 'Costa', idade: 47},
    {nome: 'Ferreira', idade: 31},
    {nome: 'Junior', idade: 12},
    {nome: 'Erik', idade: 30},     
];

const pescomnomgr = nomes.filter(obj => obj.nome.length >= 6);
const pescommais25nos = nomes.filter(obj => obj.idade >=30);
const pessoasta = nomes.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'))

console.log(pescomnomgr);
console.log(pescommais25nos);
console.log(pessoasta)
