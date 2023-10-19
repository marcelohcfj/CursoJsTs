const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
             extended: true, 
        }
    )
);

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome"><br>
    Senha: <input type="password" name="senha">
    <button>Enviar Formulário<button>
    </form>
    `);
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params)
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O formulario enviado foi ${req.body.nome} + ${req.body.senha}`)
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});
