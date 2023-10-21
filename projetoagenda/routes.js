const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeControler');
const loginController = require('./src/controllers/loginController');

// Rotas da home //
route.get('/', homeController.index);

// Rotas de Login // 
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);


module.exports = route;