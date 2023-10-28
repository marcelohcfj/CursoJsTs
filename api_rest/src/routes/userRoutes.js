// eslint-disable-next-line import/no-extraneous-dependencies, quotes
import { Router } from "express";
// eslint-disable-next-line quotes, import/newline-after-import
import userController from "../controllers/UserController";

// eslint-disable-next-line quotes
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
  index => lista todos usuarios; => GET
  store/create => cria um novo usuario; => POST
  delete => apaga um usuario => DELETE
  show => mostra um usuario => GET
  update => atualiza um usuario => PATCH OU PUT
*/
