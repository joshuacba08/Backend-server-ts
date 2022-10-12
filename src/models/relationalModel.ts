import knex from 'knex';
import { DBCredentials } from '../interfaces/dbCredentials';
import { userSchema, productSchema } from './models';

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

        // Descomentar solo para crear las tablas por primera vez
        // await this.createTable('users',userSchema);
        // await this.createTable('products', productSchema);
        this.insertData('users',{
            fname:'martin',
            lname:'fierro',
            email:'martin.fierro@gmail.com',
            role:'USER'
        });
    }

    async createTable(name:string, schema:any[]){
        const newTable = await this.knex.schema.createTable(name, (table:any) => {
            schema.forEach(el => {
                table[el.type](el.name);
            });
        }).then((resp:any) => console.log(resp)).catch(console.error);
        console.log('se creo una nueva tabla: ', newTable);
    }

    async insertData(tableName:string,data:any){
        try {
            console.log(tableName,data);
            const newUser = await this.knex(tableName).insert(data);
            console.log('here!', newUser);
        } catch (error) {
            console.error(error);
        }
    }


}

export default RelationalDatabase;