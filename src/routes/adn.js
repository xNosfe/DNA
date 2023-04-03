import { Router } from 'express';
import ADNController from '../controllers/adn.controller.js'
const router = Router();

router.get('/',ADNController.GetCadenas);

router.post('/', ADNController.CreateCadena);

export default router;
