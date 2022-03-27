import { Router } from "express";
import { getAllProducts, getRandomProduct, getProductById,addProduct, updateProduct, deleteProductById } from "../controllers/products";

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProductById);
router.post('/', addProduct);
router.get('/random', getRandomProduct);


export default router;


/*
body para editar producto:

    {
        "price":"200",
        "title":"sushi",
        "thumbnail":"hjfhefefef",
        "id":1
    }

*/