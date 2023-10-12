class DisposivitivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já ligado!`)
            return;
        }

        this.ligado = true;
    }
    
    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já desligado!`)
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DisposivitivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DisposivitivoEletronico {
    constructor(nome) {
        super(nome);
        this.wifi = true;
    }
}

const s1 = new Smartphone('Iphone', 'Preto', '15s');


const t1 = new Tablet('Ipad')
console.log(s1);  
console.log(t1);  
