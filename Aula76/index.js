class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
   }

   falar() {
    console.log(`${this.nome} esta falando!`)
}
}


function Pessoa1 (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa1.prototype.falar = function() {
    console.log(`${this.nome} esta falando!`)
};

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa1('Marcelo', 'Henrique');

console.log(p1,p2)
p1.falar();
p2.falar();