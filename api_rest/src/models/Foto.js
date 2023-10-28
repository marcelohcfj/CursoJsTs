// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

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

      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`
        }
      }
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
