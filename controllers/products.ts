import { Request, Response } from 'express';
import { Container } from '../helpers/container'

const container = new Container('products.json');

export const getAllProducts = async (req: Request, res: Response) => {

    const products = await container.getAllProducts();

    res.status(200).json({
        msg: 'getAllProducts',
        products
    });

}


export const getRandomProduct = async (req: Request, res: Response) => {

    const productRandom = await container.productRandom();

    res.status(200).json({
        msg: 'productRandom',
        productRandom
    });

}