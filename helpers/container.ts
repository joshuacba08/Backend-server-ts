import * as path from "path";
import fs from 'fs';
import { Product } from "../interfaces/products";


export class Container {

    private filePath: string;

    constructor( 
        public file:string,
        
    ){
        this.filePath = path.join(__dirname,`../../data/${this.file}`);
        console.log('file in: ',path.join(__dirname,`../../data/${this.file}`)); 
    }

    async getAllProducts(){
        const products = await fs.promises.readFile(this.filePath, 'utf-8' ) || '[]';
        return JSON.parse(products);
    }

    async save( product:Product ){
        try {
            const products = await this.getAllProducts();
            product.id= products.length + 1;
            await products.push(product);
            await fs.promises.writeFile(this.filePath, JSON.stringify(products));
            console.log(`on save with id:${product.id}`);
            return product;
        } catch (error) {
            console.log(error);
        }
    }

   async update(product: Product) {
       try {
            const products = await this.getAllProducts();
            await products.forEach((el:Product, index:number, array:Product[]) =>{
                if(el.id === product.id){
                    array.splice(index,1,product)
                }
            });
            await fs.promises.writeFile(this.filePath, JSON.stringify(products));
            console.log(`product update with id: ${product.id}`);
            return product;
            

       } catch (error) {
           console.log(error);
       }
   }

    async getById( id:number ){

        try {
            const products = await this.getAllProducts();
            return products.find( (el:Product) => el.id === id ) || null;
        } catch (error) {
            console.log(error);
        }

    }

    async deleteById( id:number ){

        try {
            const products = await this.getAllProducts();
            if(products.some( (el:Product)=>el.id===id)){
                const newArray = products.filter( (el:Product) => el.id !== id );
                await fs.promises.writeFile(this.filePath, JSON.stringify(newArray));
                return true
            }else{
                return false
            }

        } catch (error) {
            console.log(error);
        }

    }
    async deleteAll(){

        try {
            await fs.promises.writeFile(this.filePath, JSON.stringify([]));

        } catch (error) {
            console.log(error);
        }

    }

    async productRandom() {

        const productos = await this.getAllProducts();
        const idRandom =  (min:number, max: number) => Math.floor(Math.random() * (max - min)) + min;
        const productoRandom = await this.getById(idRandom(1,productos.length+1));
        return productoRandom;
    }
}