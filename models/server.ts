import express, { Application } from 'express';
import productsRoutes from '../routes/products';


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        products:'/api/products'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
        
        //definición de rutas
        this.routes(); 
    }

    routes(){

        this.app.use( this.apiPaths.products, productsRoutes );

    }

    listen(){

        this.app.listen( this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        }); 

    }
}

export default Server;