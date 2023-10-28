// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import Sequelize, { Model } from 'sequelize';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        dafaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode estar vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        dafaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode estar vazio',
          },
        },
      },
    }, {
      sequelize,
      tablename: 'fotos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
