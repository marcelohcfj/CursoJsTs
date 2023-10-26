import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'Erik',
        sobrenome: 'Henderson',
        email: 'eriksbs07@gmail.com',
        idade: 31,
        peso: 300,
        altura: 2.5,
      });
      res.json(novoAluno);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new HomeController();
