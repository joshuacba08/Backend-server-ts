import { Request, Response } from 'express';
import { Container } from '../helpers/container'

const container = new Container('products.json');

export const getAllProducts = async (req: Request, res: Response) => {

    try {
        const products = await container.getAllProducts();
        res.status(200).json({
            ok:true,
            msg: 'getAllProducts',
            products
        });
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'Error en el servidor',
            error
        });
    }
}

export const getProductById = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        
        const product = await container.getById(Number(id));
        if (product) {
            res.status(200).json({ok:true, msg: 'Product by id', product})
        }else{
            res.status(400).json({ok:false, msg: 'Product not found'})
        }

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'Error en el servidor',
            error
        });
    }

}

export const getRandomProduct = async (req: Request, res: Response) => {

    const productRandom = await container.productRandom();

    res.status(200).json({
        msg: 'productRandom',
        productRandom
    });

}

export const addProduct = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const newProduct = await container.save(req.body)
        res.status(200).json({ok:true, msg: 'new product', newProduct})

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'Error en el servidor',
            error
        });
    }

}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const updateProduct = await container.update(req.body)
        res.status(200).json({ok:true, msg: 'update product',updateProduct})

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'Error en el servidor',
            error
        });
    }

}

export const deleteProductById = async (req: Request, res: Response) => {
    try {
        const deleteProduct = await container.deleteById(Number(req.params.id));
        if(deleteProduct){
            res.status(200).json({ok:true, msg: 'producto eliminado'})
        }else{
            res.status(400).json({ok:false, msg: 'producto no encontrado'})
        }
        

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'Error en el servidor',
            error
        });
    }

}

