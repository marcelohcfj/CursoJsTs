"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

 class Foto extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: _sequelize2.default.STRING,
        dafaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode estar vazio',
          },
        },
      },
      filename: {
        type: _sequelize2.default.STRING,
        dafaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode estar vazio',
          },
        },
      },

      url: {
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `${_appConfig2.default.url}/images/${this.getDataValue('filename')}`
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
} exports.default = Foto;
