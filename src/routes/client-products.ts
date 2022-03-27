import { Router } from 'express';
import { getAllProducts, addProduct } from '../controllers/client-products';

const router = Router();

router.get('/', getAllProducts);
router.post('/', addProduct);


export default router;