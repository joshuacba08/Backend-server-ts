"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../controllers/products");
const router = (0, express_1.Router)();
router.get('/', products_1.getAllProducts);
router.get('/:id', products_1.getProductById);
router.put('/:id', products_1.updateProduct);
router.delete('/:id', products_1.deleteProductById);
router.post('/', products_1.addProduct);
router.get('/random', products_1.getRandomProduct);
exports.default = router;
/*
body para editar producto:

    {
        "price":"200",
        "title":"sushi",
        "thumbnail":"hjfhefefef",
        "id":1
    }

*/ 
//# sourceMappingURL=products.js.map