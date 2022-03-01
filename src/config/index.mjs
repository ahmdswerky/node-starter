import dotenv from 'dotenv-safe';

dotenv.config();

export const port = process.env.PORT || 8080;
