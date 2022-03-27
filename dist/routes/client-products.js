"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_products_1 = require("../controllers/client-products");
const router = (0, express_1.Router)();
router.get('/', client_products_1.getAllProducts);
router.post('/', client_products_1.addProduct);
exports.default = router;
//# sourceMappingURL=client-products.js.map