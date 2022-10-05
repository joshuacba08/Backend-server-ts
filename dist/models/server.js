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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const products_1 = __importDefault(require("../routes/products"));
const client_products_1 = __importDefault(require("../routes/client-products"));
const cors_1 = __importDefault(require("cors"));
const controller_1 = require("../sockets/controller");
class Server {
    constructor() {
        this.apiPaths = {
            products: '/api/products',
            clientProducts: '/products',
            cart: '/api/cart'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server); //toda la info de los clientes conectados
        //ejecución de middlewares
        this.middlewares();
        //definición de rutas
        this.routes();
        this.views();
        // Sockets
        this.sockets();
    }
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //lectura del body
        this.app.use(express_1.default.json());
        //parseo del body:
        this.app.use(express_1.default.urlencoded({ extended: true }));
        //carpeta pública.
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.products, products_1.default);
        this.app.use(this.apiPaths.clientProducts, client_products_1.default);
    }
    sockets() {
        this.io.on('connection', controller_1.socketController);
    }
    views() {
        //motores de plantillas
        // this.app.set("view engine", "hbs");
        // this.app.set('views', '/views'); 
        this.app.set('views', path.join(__dirname, '../../views'));
        this.app.set("view engine", "hbs");
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto http://localhost:${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map