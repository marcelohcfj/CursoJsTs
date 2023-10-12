class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    sequencia() {
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfParcial);
        const digito2 = this.geraDigito(cpfParcial + digito1);
        this.novoCPF = cpfParcial + digito1 + digito2;
    }

    geraDigito(cpfParcial) {
        let total = 0
        let reverso = cpfParcial.length + 1;

        for (let stringNumerica of cpfParcial) {
        total += reverso * Number(stringNumerica);
        reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }
    
    valida() {
        if (!this.cpfLimpo) return;
        if (typeof this.cpfLimpo !== 'string') return;
        if (this.cpfLimpo.length !== 11) return;
        if (this.sequencia()) return false;
        this.geraNovoCpf();
       
        return this.novoCPF === this.cpfLimpo;
    }
}

let validacpf = new ValidaCPF('437.914.968-40');

if (validacpf.valida()) {
    console.log('CPF valido!');
} else {
    console.log('CPF invalido!')
}