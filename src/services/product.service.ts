import { Product } from '@/models';
export const createProduct = async () => {
    try {
        const product = new Product({
            name: 'Iphone 12',
            description: 'A very nice phone',
            price: 1200,
            stock: 10,
            category: 'Electronics',
            imageUrl: 'https://www.google.com',
        });
        console.log('product', product);
        return product.save();
    } catch (error: any) {
        return error;
    }
};