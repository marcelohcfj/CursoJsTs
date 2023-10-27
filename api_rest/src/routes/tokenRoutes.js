// eslint-disable-next-line import/no-extraneous-dependencies, quotes
import { Router } from "express";
// eslint-disable-next-line quotes, import/newline-after-import
import tokenController from "../controllers/TokenController";
const router = new Router();

router.post('/', tokenController.store);

export default router;
