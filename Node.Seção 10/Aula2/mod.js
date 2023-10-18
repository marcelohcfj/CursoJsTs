module.exports = class Cachorro {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }

    latir() {
        console.log(`${this.nome} esta fazendo auau`)
    }
}


