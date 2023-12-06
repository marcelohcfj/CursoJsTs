export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private cpf: string,
  ) {}

  getNome(): string {
    return this.nome;
  }

  getCpf() {
    return this.cpf.replace(/\D/g, '');
  }
}

const pessoa1 = new Pessoa('Marcelo', 'Henrique', 27, '437.914.968-40');
console.log(pessoa1.getCpf());
