import { Container } from '../helpers/container'
const container = new Container('products.json');

export const socketController = async (socket:any) => {

    console.log('cliente conectado', socket.id);
    const products = await container.getAllProducts();

    socket.emit('product-list',products);

    // socket.on('disconnect', ()=>{
    //     console.log('Cliente desconectado',socket.id);
    // });

    socket.on('carga-producto', (payload:any)=>{


        console.log('se recibió mensaje', payload)
        socket.broadcast.emit('carga-producto',payload);

    })

    // socket.on('chat', ( payload:any, callback:any ) =>{
    //     const id = 123456;
    //     callback( id );

    //     socket.broadcast.emit('chat', payload)
    // });


}


