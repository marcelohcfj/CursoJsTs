const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escreve');
const ler = require('./modules/ler');

//const pessoas = [
//    {nome: 'João'}, 
//    {nome: 'Marcelo'},
//    {nome: 'Junior'},
//    {nome: 'Marco'},
 //   {nome: 'Erik'},
//];

//const json = JSON.stringify(pessoas, '', 2);

async function leArquivo (caminho) {
    const dados = await ler(caminho);
    renderizaDadados(dados);
}

function renderizaDadados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
    
}

leArquivo(caminhoArquivo);