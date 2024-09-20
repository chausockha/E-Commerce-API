import 'tsconfig-paths/register';
import dotenv from 'dotenv';
import app from '@/app';
dotenv.config();
const PORT = process.env.PORT;
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
app.use(morgan('dev'));
app.use(helmet);
app.use(compression);
app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});

export default app;
