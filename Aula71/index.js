function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50);
const p2 = new Produto('Calça', 100);
const p3 = new Produto('Tênis', 170);


console.log(p1);













//const objA = {
//    chaveA: 'A'
//};


//const objB = {
 //   chaveB: 'B'
//};

//const objC = new Object();
///objC.chaveC = 'C'

//Object.getPrototypeOf(objB, objA);
//Object.getPrototypeOf(objC, objB);
//console.log(objB.chave); 