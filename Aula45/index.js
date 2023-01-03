try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('fechei o arquivo');

    try {
        console.log(b);
    } catch (e) {
        console.log('Deu erro');
    } finally {
        console.log('também sou finally');
    }


} catch (e) {
    console.log('tratar o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado');
}