import express, { Application } from 'express';
import productsRoutes from '../routes/products';
import cors from 'cors'

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        products:'/api/products'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
        this.middlewares();
        //definición de rutas
        this.routes(); 
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
    }

    listen(){

        this.app.listen( this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        }); 

    }
}

export default Server;