"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
//Se configura dotenv.
dotenv_1.default.config();
//se inicializa una nueva instancia de la clase server.
const server = new server_1.default();
//se ejecuta el método listen para iniciar el servidor.
server.listen();
//# sourceMappingURL=app.js.map