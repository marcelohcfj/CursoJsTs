

function rd(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Bad value!')
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promisse');
        }, tempo);
    });
}

async function executa() {
    try {
        const fase1 = await esperaAi('fase 1', rd());
        console.log(fase1);
        const fase2 = await esperaAi('fase 2', rd());
        console.log(fase2);
        const fase3 = await esperaAi(3  , rd());
        console.log(fase3);
        const fase4 = await esperaAi('fase 4', rd());
        console.log(fase4);
        const fase5 = await esperaAi('terminamos', rd());
        console.log(fase5);
    } catch(e) {
        console.log(e); 
    }
}
executa();