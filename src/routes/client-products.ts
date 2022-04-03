import { Router } from 'express';
import { getAllProducts, addProduct, showForm } from '../controllers/client-products';

const router = Router();

router.get('/', getAllProducts);
router.get('/add', showForm )
router.post('/', addProduct);


export default router;