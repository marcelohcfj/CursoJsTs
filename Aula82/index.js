function rd(min, max) {
    min *= 1000;
    max *= 1000; 
    
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
    
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad value!');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
    
    
}

esperaAi('Conexão com a base do BD', rd(1, 3))
.then((resposta) => {
    console.log(resposta);
    return esperaAi(2222, rd(1, 3));
})
.then((resposta) => {
    console.log(resposta)
    return esperaAi('Tratando os dados da base', rd(1, 3));
}).then((resposta) => {
    console.log(resposta)
    return esperaAi('Exibe dados na tela', rd(1, 3));
}).then((resposta) => {
    console.log(resposta);
})
.catch((e) => {
    console.log('Erro', e);
});
 