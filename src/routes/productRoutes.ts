import { Router } from 'express';
import ProducController from '../controllers/productController';

const router = Router();

const productController = new ProducController();

router.post('/', productController.create);
router.get('/', productController.getAll);

export default router;