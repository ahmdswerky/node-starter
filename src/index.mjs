import express from 'express';
import { port } from './config/index.mjs';
import middlewares from './middlewares/index.mjs';
import routes from './routes/index.mjs';
import errorHandler from './middlewares/errors.middleware.mjs';
import HttpException from './exceptions/HttpException.mjs';
import './bootstrap.mjs';

const app = express();

app.use(...middlewares);

app.use('/api', routes);

app.use(() => {
	throw new HttpException(404, HttpException.NOT_FOUND_MSG);
});

app.use(errorHandler);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
