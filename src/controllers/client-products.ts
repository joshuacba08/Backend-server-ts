import { Request, Response } from 'express';
import { Container } from '../helpers/container'

const container = new Container('products.json');


export const showForm = async (req: Request, res: Response) => {

    return res.render('index.hbs');

}

export const getAllProducts = async (req: Request, res: Response) => {
    console.log('se ejecuta get')
    try {
        const arrayProducts = await container.getAllProducts();
        return res.render('products',{arrayProducts});


    } catch (error) {
        console.error(error);
    }
}

export const addProduct = async (req: Request, res: Response) => {
  
    try {
        console.log(req.body);
        const newProduct = await container.save(req.body)
        return res.redirect('/products');

    } catch (error) {
      console.log(error)
    }

}