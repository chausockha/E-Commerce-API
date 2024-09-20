import { Product } from '../models';
import { Request, Response } from 'express';
import * as productService from '@/services';
export const getProducts = async (req: Request, res: Response) => {
	try {
		const products = await Product.find();
		return res.status(200).json({ products });
	} catch (error: any) {
		return res.status(500).json({ error: error.message });
	}
};
export const createProduct = async (req: Request, res: Response) => {
	try {
		const product =  await productService.createProduct();
        console.log('c', product);
		return res.status(201).json({ product });
	} catch (error: any) {
		return res.status(500).json({ error: error.message });
	}
};
