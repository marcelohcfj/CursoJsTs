function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}/  ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);





// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

//const data = new Date('2019-04-20 20:59'); // (ano, mes, dia, hora, minuto, segundo, mseg)
//console.log('Dia', data.getDate());
//console.log('Mês', data.getMonth());
//console.log('Ano', data.getFullYear());
//console.log('Hora', data.getHours());
///console.log('Min', data.getMinutes());
//console.log('Seg', data.getSeconds());
//console.log('Ms', data.getMilliseconds());
//console.log('Dia semana', data.getDay());
//console.log(data.toString());
