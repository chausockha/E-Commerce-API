import mongoose from 'mongoose';
import { configEnv } from '@/config';
const {
	db: { host, port, name },
} = configEnv;
console.log('host', configEnv);
//'mongodb://localhost:27017/shopDev';
const connectString = `mongodb://${host}:${port}/${name}`;
class Database {
	private static instance: Database;

	private constructor() {
		this.connect();
	}

	private connect() {
		mongoose.set('debug', true);
		mongoose.set('debug', { color: true });

		mongoose
			.connect(connectString)
			.then(() => console.log('Connected to MongoDB successfully'))
			.catch((err) => console.error('Error connecting to MongoDB', err));
	}

	public static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}
}
const instanceMongodb = Database.getInstance();
export default instanceMongodb;
