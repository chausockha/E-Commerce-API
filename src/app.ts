import compression from 'compression';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import {routerProducts} from './routes';
dotenv.config();
const app: Application = express();


app.post('/post', (req, res) => {
    return res.send({ message: 'Data received', data: req.body });
});
app.use(express.json());
app.use('/api', routerProducts);
//init db
import './dbs/initMongodb';

// app.listen(PORT, () => {
// 	console.log(`Server running on poirt ${PORT}`);
// });
export default app;
