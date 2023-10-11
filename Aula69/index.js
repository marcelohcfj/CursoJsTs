const produto = {nome: 'Caneca', preco: 1.80};
const caneca = { ...produto };

caneca.nome = 'Marcelo';
caneca.preco = 8.2;
console.log(produto);
console.log(caneca);