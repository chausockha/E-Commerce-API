type AppConfig = {
	app: { port: number };
	db: { host: string; port: number; name: string };
};

const dev: AppConfig = {
	app: {
		port: 3000,
	},
	db: {
		host: 'localhost',
		port: 27017,
		name: 'shopDev',
	},
};

const pro: AppConfig = {
	app: {
		port: 3000,
	},
	db: {
		host: 'localhost',
		port: 27017,
		name: 'e-commerce-pro',
	},
};

// Main config type
type Config = {
	[key: string]: AppConfig;
};

const config: Config = { dev, pro };

// Use the environment or default to 'dev'
const env = (process.env.NODE_ENV) || 'dev';
const envConfig = config[env];

// Export the selected environment configuration
export default envConfig;
