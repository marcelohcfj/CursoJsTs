export class Personagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    console.log(`${this.nome} esta atacando`);
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida`);
  }
}

export class Guerreiro extends Personagem {}
export class Monstro extends Personagem {}

const guerreiro = new Guerreiro('Daarow', 100, 1000);
const monstro = new Monstro('Stregnar', 70, 1000);

guerreiro.atacar(monstro);
guerreiro.atacar(monstro);
guerreiro.atacar(monstro);
