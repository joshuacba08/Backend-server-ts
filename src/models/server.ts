import express, { Application } from "express";
import { Server as ServerIo } from "socket.io";
import * as path from "path";

import productsRoutes from "../routes/products";
import clientProductRoutes from "../routes/client-products";
import cors from "cors";
import { socketController } from "../sockets/controller";
import RelationalDatabase from "./relationalModel";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    products: "/api/products",
    clientProducts: "/products",
    cart: "/api/cart",
  };
  private server: any;
  private io: any;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server); //toda la info de los clientes conectados
    //database config
    this.database();
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
    this.app.use(cors());
    //lectura del body
    this.app.use(express.json());
    //parseo del body:
    this.app.use(express.urlencoded({ extended: true }));
    //carpeta pública.
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.products, productsRoutes);
    this.app.use(this.apiPaths.clientProducts, clientProductRoutes);
  }

  async database() {
    const db = new RelationalDatabase({
      host: process.env.HOST!,
      user: "blhhi4imf2g989lhaov4",
      password: process.env.PASSWORD!,
      database: process.env.DATABASE!,
      ssl:true
    });
    
  }

  sockets() {
    this.io.on("connection", socketController);
  }

  views() {
    //motores de plantillas
    // this.app.set("view engine", "hbs");
    // this.app.set('views', '/views');
    this.app.set("views", path.join(__dirname, "../../views"));
    this.app.set("view engine", "hbs");
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(
        `Servidor corriendo en el puerto http://localhost:${this.port}`
      );
    });
  }
}

export default Server;
