exports.paginaInicial = (req, res) => {
    console.log(req.flash('info'));
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};