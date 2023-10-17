const rand = (max, min) => Math.floor(Math.random() * (max - min) + min);
const GeraMaiuscula = () => String.fromCharCode(rand(65, 91));
const GeraMinuscula = () => String.fromCharCode(rand(97, 123));
const GeraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^]}@#$%&*=+-/';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];


export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);
    for (let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(GeraMaiuscula());
        minusculas && senhaArray.push(GeraMinuscula());
        numeros && senhaArray.push(GeraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
}   
