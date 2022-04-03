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
exports.socketController = void 0;
const container_1 = require("../helpers/container");
const container = new container_1.Container('products.json');
const socketController = (socket) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('cliente conectado', socket.id);
    const products = yield container.getAllProducts();
    socket.emit('product-list', products);
    // socket.on('disconnect', ()=>{
    //     console.log('Cliente desconectado',socket.id);
    // });
    socket.on('carga-producto', (payload) => {
        console.log('se recibió mensaje', payload);
        socket.broadcast.emit('carga-producto', payload);
    });
    // socket.on('chat', ( payload:any, callback:any ) =>{
    //     const id = 123456;
    //     callback( id );
    //     socket.broadcast.emit('chat', payload)
    // });
});
exports.socketController = socketController;
//# sourceMappingURL=controller.js.map