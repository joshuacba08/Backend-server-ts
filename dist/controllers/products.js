"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductById = exports.updateProduct = exports.addProduct = exports.getRandomProduct = exports.getProductById = exports.getAllProducts = void 0;
const container_1 = require("../helpers/container");
const container = new container_1.Container('products.json');
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield container.getAllProducts();
        res.status(200).json({
            ok: true,
            msg: 'getAllProducts',
            products
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor',
            error
        });
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield container.getById(Number(id));
        if (product) {
            res.status(200).json({ ok: true, msg: 'Product by id', product });
        }
        else {
            res.status(400).json({ ok: false, msg: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor',
            error
        });
    }
});
exports.getProductById = getProductById;
const getRandomProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productRandom = yield container.productRandom();
    res.status(200).json({
        msg: 'productRandom',
        productRandom
    });
});
exports.getRandomProduct = getRandomProduct;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const newProduct = yield container.save(req.body);
        res.status(200).json({ ok: true, msg: 'new product', newProduct });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor',
            error
        });
    }
});
exports.addProduct = addProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateProduct = yield container.update(req.body);
        res.status(200).json({ ok: true, msg: 'update product', updateProduct });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor',
            error
        });
    }
});
exports.updateProduct = updateProduct;
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteProduct = yield container.deleteById(Number(req.params.id));
        if (deleteProduct) {
            res.status(200).json({ ok: true, msg: 'producto eliminado' });
        }
        else {
            res.status(400).json({ ok: false, msg: 'producto no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el servidor',
            error
        });
    }
});
exports.deleteProductById = deleteProductById;
//# sourceMappingURL=products.js.map