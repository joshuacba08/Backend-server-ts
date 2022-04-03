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
exports.addProduct = exports.getAllProducts = exports.showForm = void 0;
const container_1 = require("../helpers/container");
const container = new container_1.Container('products.json');
const showForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.render('index.hbs');
});
exports.showForm = showForm;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('se ejecuta get');
    try {
        const arrayProducts = yield container.getAllProducts();
        return res.render('products', { arrayProducts });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllProducts = getAllProducts;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const newProduct = yield container.save(req.body);
        return res.redirect('/products');
    }
    catch (error) {
        console.log(error);
    }
});
exports.addProduct = addProduct;
//# sourceMappingURL=client-products.js.map