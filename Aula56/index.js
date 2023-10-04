function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Marcelo', 'Henrique');
const p2 = new Pessoa('Costa', 'Ferreira');

console.log(p1.nome);
console.log(p2.nome);