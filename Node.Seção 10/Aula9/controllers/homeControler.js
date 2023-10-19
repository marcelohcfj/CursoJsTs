exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome"><br>
    Senha: <input type="password" name="senha">
    <button>Enviar Formulário<button>
    </form>
    `);
}

exports.trataPost = (req, res) => [
    res.send('Sou sua nova rota')
]