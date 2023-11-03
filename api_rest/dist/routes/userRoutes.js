"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies, quotes
var _express = require('express');
// eslint-disable-next-line quotes, import/newline-after-import
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

// eslint-disable-next-line quotes
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', _loginRequired2.default, _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
  index => lista todos usuarios; => GET
  store/create => cria um novo usuario; => POST
  delete => apaga um usuario => DELETE
  show => mostra um usuario => GET
  update => atualiza um usuario => PATCH OU PUT
*/
