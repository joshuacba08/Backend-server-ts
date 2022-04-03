"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketController = void 0;
const socketController = (socket) => {
    console.log('cliente conectado', socket.id);
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });
    socket.on('chat', (payload, callback) => {
        const id = 123456;
        callback(id);
        socket.broadcast.emit('chat', payload);
    });
};
exports.socketController = socketController;
//# sourceMappingURL=controller.js.map