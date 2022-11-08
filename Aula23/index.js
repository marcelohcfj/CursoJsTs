/* entre 0 e 11 = bom dia
entre 12 e 17 = boa tarde
entre 18 e 23 = boa noite
*/


const hora = 50;
if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá!');
}
