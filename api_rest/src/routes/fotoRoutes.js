// eslint-disable-next-line import/no-extraneous-dependencies, quotes
import { Router } from "express";
// eslint-disable-next-line quotes
import multer from "multer";
// eslint-disable-next-line quotes, import/newline-after-import
import fotoController from "../controllers/FotoController";
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), fotoController.store);

export default router;
