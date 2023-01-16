
// arguments que sustenta todos os argumentos enviados.
                                //rest operator
const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
      if (operador === '+')  acumulador += numero;
      if (operador === '-')  acumulador -= numero;
      if (operador === '/')  acumulador /= numero;
      if (operador === '*')  acumulador *= numero;
    }

    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);
