/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
// eslint-disable-next-line import/no-extraneous-dependencies, quotes
import { Router } from "express";
// eslint-disable-next-line quotes, import/newline-after-import
import alunoController from "../controllers/AlunoController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
