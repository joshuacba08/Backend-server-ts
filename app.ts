import dotenv from 'dotenv';
import Server from './models/server';

//Se configura dotenv.
dotenv.config();

//se inicializa una nueva instancia de la clase server.
const server = new Server();

//se ejecuta el método listen para iniciar el servidor.
server.listen();
