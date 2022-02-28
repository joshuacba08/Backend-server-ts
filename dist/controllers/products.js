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
exports.getRandomProduct = exports.getAllProducts = void 0;
const container_1 = require("../helpers/container");
const container = new container_1.Container('products.json');
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield container.getAllProducts();
    res.status(200).json({
        msg: 'getAllProducts',
        products
    });
});
exports.getAllProducts = getAllProducts;
const getRandomProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productRandom = yield container.productRandom();
    res.status(200).json({
        msg: 'productRandom',
        productRandom
    });
});
exports.getRandomProduct = getRandomProduct;
//# sourceMappingURL=products.js.map