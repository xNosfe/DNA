import { Router } from 'express';
import ADNController from '../controllers/adn.controller.js'
const router = Router();

router.get('/stats',ADNController.GetCadenas);

router.post('/mutation', ADNController.CreateCadena);

export default router;
