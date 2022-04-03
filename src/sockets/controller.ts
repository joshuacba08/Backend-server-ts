export const socketController = (socket:any) => {

    console.log('cliente conectado', socket.id);

    socket.on('disconnect', ()=>{
        console.log('Cliente desconectado',socket.id);
    });

    socket.on('chat', ( payload:any, callback:any ) =>{
        const id = 123456;
        callback( id );

        socket.broadcast.emit('chat', payload)
    });

}


