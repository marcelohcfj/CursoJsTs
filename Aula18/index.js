const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`)
  },

  incrementaIdade() {
    this.idade++;
  }

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

 
 






//function criaPessoa (nome, sobrenome, idade) {
//    return { nome, sobrenome, idade };
//}

//const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
//const pessoa2 = criaPessoa('Bruna', 'Luz', 19);
//const pessoa3 = criaPessoa('Flavio', 'Ortega', 42);
//const pessoa4 = criaPessoa('Andre', 'Luiz', 36);
//const pessoa5 = criaPessoa('Renato', 'Augusto', 26);
//console.log(pessoa1.nome, pessoa2.sobrenome)

//const pessoa1 = {
//    nome: 'Luiz',
 //   sobrenome: 'Miranda',
///    idade: 25
//};

//const pessoa2 = {
 //   nome: 'Maria',
 //   sobrenome: 'Oliveira',
  //  idade: 28
//};

//console.log(pessoa1.nome);

//const array = [1,2,3];
//array.push(4);
//array[0] = 'Luiz';
//console.log(array);
