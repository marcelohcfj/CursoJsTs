Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}


const pessoa1 = new Pessoa('Marcelo', 'Henrique');
const pessoa2 = new Pessoa('Costa', 'Ferreira');

console.log(pessoa1.nomeCompleto());
console.log(pessoa2.nomeCompleto());

