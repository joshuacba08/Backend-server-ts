import { Router } from "express";
import { getAllProducts, getRandomProduct } from "../controllers/products";

const router = Router();

router.get('/', getAllProducts);
router.get('/random', getRandomProduct)

export default router;