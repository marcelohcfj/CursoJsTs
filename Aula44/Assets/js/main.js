function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

console.log(getTimeFromSeconds(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let seconds = 0;
let timer;

function goTimer() {
    timer = setInterval(function() {
        seconds++;
        relogio.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        seconds = 0;
    }

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        goTimer();
    }

    if (el.classList.contains('pausar')) {
        clearInterval(timer);
    relogio.classList.add('pausado');
    }

    
});

