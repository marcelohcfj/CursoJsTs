// eslint-disable-next-line import/no-extraneous-dependencies, quotes
import { Router } from "express";
// eslint-disable-next-line quotes, import/newline-after-import
import homeController from "../controllers/HomeController";
const router = new Router();

router.get('/', homeController.index);

export default router;
