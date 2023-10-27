// eslint-disable-next-line import/no-extraneous-dependencies, quotes
import { Router } from "express";
// eslint-disable-next-line quotes, import/newline-after-import
import alunoController from "../controllers/AlunoController";
const router = new Router();

router.get('/', alunoController.index);

export default router;
