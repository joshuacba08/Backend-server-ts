import express, { Application } from 'express';
import * as path from "path";

import productsRoutes from '../routes/products';
import clientProductRoutes from '../routes/client-products'
import cors from 'cors';


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        products:'/api/products',
        clientProducts:'/products'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
        this.middlewares();
        //definición de rutas
        this.routes(); 
        this.views();
    }

    middlewares(){
        //cors
        this.app.use(cors());
        //lectura del body
        this.app.use(express.json());
        //parseo del body:
        this.app.use(express.urlencoded({ extended: true }));
        //carpeta pública.
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use( this.apiPaths.products, productsRoutes );
        this.app.use( this.apiPaths.clientProducts, clientProductRoutes );
    }

    views() {
        //motores de plantillas
        // this.app.set("view engine", "hbs");
        // this.app.set('views', '/views'); 

        this.app.set('views', path.join(__dirname, '../../views'))
        this.app.set("view engine", "hbs");
    }

    listen(){

        this.app.listen( this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        }); 

    }
}

export default Server;