/* Luiz Otavio Miranda tem 30 anos, pesa 84kg
Tem 1.8 de altura e seu IMC é de 25.92 
Luiz otavio nasceu em 1980 */

const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 80;
const altura = 1.80;
let imc;
let anoNascimento;

imc = peso / (altura * altura); 
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu imc é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`); 