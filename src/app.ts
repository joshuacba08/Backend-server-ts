import dotenv from 'dotenv';
import Server from './models/server';
import * as path from 'path'
//Se configura dotenv.
dotenv.config({ path: path.resolve(__dirname, '../.env') });

//se inicializa una nueva instancia de la clase server.
const server = new Server();

//se ejecuta el método listen para iniciar el servidor.
server.listen();
