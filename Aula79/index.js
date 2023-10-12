class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // metodos de instancia
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }
    // metodo estático
    static trocaPilha() {
        console.log('Ok, trocamos a pilha!')
    }
}

const c1 = new ControleRemoto('LG');
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();

console.log(c1);
ControleRemoto.trocaPilha();