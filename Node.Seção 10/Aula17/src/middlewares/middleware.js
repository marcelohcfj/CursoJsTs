exports.meuMiddleware = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local'; 
    next();
}

exports.checkCsfrError = (err, req, res, next) => {
    if(err && 'EBADCSFRTOKEN' === err.code) {
        return res.render('404.ejs');
    }
}