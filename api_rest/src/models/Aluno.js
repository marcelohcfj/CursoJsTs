// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        dafaultValue: '',
        validate: {
          len: {
            args: [3, 100],
            msg: 'Nome precisa ter entre 3 e 100 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        dafaultValue: '',
        validate: {
          len: {
            args: [3, 100],
            msg: 'Sobrenome precisa ter entre 3 e 100 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        dafaultValue: '',
        unique: {
          msg: 'E-mail já existe',
        },
        isEmail: {
          len: {
            msg: 'E-mail inválido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        dafaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        dafaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero inteiro ou de ponto flutuante',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        dafaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um numero inteiro ou de ponto flutuante',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
