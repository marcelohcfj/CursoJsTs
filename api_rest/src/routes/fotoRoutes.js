// eslint-disable-next-line import/no-extraneous-dependencies, quotes
import { Router } from "express";
// eslint-disable-next-line quotes

// eslint-disable-next-line quotes, import/newline-after-import
import fotoController from "../controllers/FotoController";

const router = new Router();

router.post('/', fotoController.store);

export default router;
