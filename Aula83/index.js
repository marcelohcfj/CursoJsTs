function rd(min, max) {
    min *= 1000;
    max *= 1000; 
    
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
    
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('Bad value!')
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promisse');
        }, tempo);
    });   
}

const promisses = [
    esperaAi('Primeira promisse', rd(1, 5)),
    esperaAi('Segunda promisse', rd(1, 5)),
    esperaAi('Promessa 3', rd(1, 5)),
];

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 4000)
    }
}

baixaPagina()
.then((dadosPagina) => {
    console.log(dadosPagina);
})
.catch((erro) => {
    console.log('ERRO', erro);
});



