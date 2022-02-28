"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const path = __importStar(require("path"));
const fs_1 = __importDefault(require("fs"));
class Container {
    constructor(file) {
        this.file = file;
        this.filePath = path.join(__dirname, `../../data/${this.file}`);
        console.log('file in: ', path.join(__dirname, `../../data/${this.file}`));
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = (yield fs_1.default.promises.readFile(this.filePath, 'utf-8')) || '[]';
            return JSON.parse(products);
        });
    }
    save(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.getAllProducts();
                product.id = products.length + 1;
                yield products.push(product);
                yield fs_1.default.promises.writeFile(this.filePath, JSON.stringify(products));
                console.log(`on save with id:${product.id}`);
                return product.id;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.getAllProducts();
                return products.find((el) => el.id === id) || null;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.getAllProducts();
                const newArray = products.filter((el) => el.id !== id);
                yield fs_1.default.promises.writeFile(this.filePath, JSON.stringify(newArray));
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs_1.default.promises.writeFile(this.filePath, JSON.stringify([]));
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    productRandom() {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield this.getAllProducts();
            const idRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
            const productoRandom = yield this.getById(idRandom(1, productos.length + 1));
            return productoRandom;
        });
    }
}
exports.Container = Container;
//# sourceMappingURL=container.js.map