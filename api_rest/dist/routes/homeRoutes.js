"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies, quotes
var _express = require('express');
// eslint-disable-next-line quotes, import/newline-after-import
var _HomeController = require('../controllers/HomeController'); var _HomeController2 = _interopRequireDefault(_HomeController);
const router = new (0, _express.Router)();

router.get('/', _HomeController2.default.index);

exports. default = router;
