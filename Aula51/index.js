function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}


const funcao = retornaFuncao('Henrique');
const funcao2 = retornaFuncao('Costa');
console.log(funcao());
console.log(funcao2());