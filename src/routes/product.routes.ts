import { Router } from 'express';
import { createProduct, getProducts } from '@/controllers';
const router = Router();
router.get('/products', getProducts);
router.post('/products', createProduct);
export default router;
