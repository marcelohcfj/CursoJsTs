export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfSemDigito', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    sequencia() {
        return this.cpfSemDigito[0].repeat(11) === this.cpfSemDigito;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfSemDigito.slice(0, -2)
        const digito1 = this.geraDigito(cpfParcial);
        const digito2 = this.geraDigito(cpfParcial + digito1);
        const novoCPF = cpfParcial + digito1 + digito2;
        return novoCPF;
    }

    static geraDigito(cpfParcial) {
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
        if (!this.cpfSemDigito) return;
        if (typeof this.cpfSemDigito !== 'string') return;
        if (this.cpfSemDigito.length !== 11) return;
        if (this.sequencia()) return false;
        this.geraNovoCpf();
       
        return this.novoCPF === this.cpfSemDigito;
    }
}
