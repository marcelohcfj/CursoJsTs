function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de date.');
    }

     if (!data) {
        data = new Date();
     }

     return data.toLocaleTimeString('pt-BR', {

     });
}
try {
const hora = retornaHora();
console.log(hora);
}   
catch (e) {

} finally {
    console.log('Tenha um bom dia!')
}
