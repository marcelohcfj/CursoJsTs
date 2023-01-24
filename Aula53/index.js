(function (idade, peso, altura) {
    const sobrenome = 'Henrique';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Marcelo'));
    }

    falaNome();
    console.log(idade, peso, 'lbs', altura, 'm');
})(26, 68, 1.70,);


const nome = 'qualquer coisa';

