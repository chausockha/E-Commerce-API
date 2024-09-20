import { Schema, model, Document } from 'mongoose';
interface IProduct extends Document {
	name: string;
	description: string;
	price: number;
	stock: number;
	category: string;
	imageUrl: string;
	createdAt: Date;
	updatedAt: Date;
}
const productSchema = new Schema<IProduct>({
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	stock: { type: Number, required: true },
	category: { type: String, required: true },
	imageUrl: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});
//Static method to
const Product = model<IProduct>('product', productSchema);
export default Product;