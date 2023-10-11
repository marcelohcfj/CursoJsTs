function Produto(nome, preco, estoque) {

    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // pode mostra a chave
        configurable: true, // pode reconfiguravel
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Bad value');
                return; 
            }
            
            estoquePrivado = valor; 
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);

p1.estoque = 500;
console.log(p1.estoque)
