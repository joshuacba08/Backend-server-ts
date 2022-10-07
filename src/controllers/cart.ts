import { Request, Response } from 'express';
import { Container } from '../helpers/container'



export const createCart = async (req:Request, res:Response) => {

    try {
        
    } catch (error) {
        return res.status(500).json({
            ok:false,
            error,
        })
    }

}