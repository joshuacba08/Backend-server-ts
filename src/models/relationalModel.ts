import knex from 'knex';
import { DBCredentials } from '../interfaces/dbCredentials';
import { userSchema } from './models';

class RelationalDatabase{
    private knex:any;

    constructor(credentials:DBCredentials){
        console.table(credentials);
        this.connectDb(credentials);
    }

    async connectDb(credentials:DBCredentials){
        this.knex = await knex({
            client:'mysql',
            connection:credentials,
            pool: { min: 0, max: 7 }
        }); 

        // console.log(this.knex)

        await this.createTable('users',userSchema);

    }

    async createTable(name:string, schema:any[]){
        const newTable = await this.knex.schema.createTable(name, (table:any) => {
            schema.forEach(el => {
                table[el.type](el.name);
            });
        }).then((resp:any) => console.log(resp)).catch(console.error);
        console.log('se creo una nueva tabla: ', newTable);
        
    }
}

export default RelationalDatabase;