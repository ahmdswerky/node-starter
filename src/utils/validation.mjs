import { object } from 'yup';
import HttpException from '../exceptions/HttpException.mjs';

export const validate =
	(shape, path = 'body') =>
	async (req, _, next) => {
		const schema = object().shape(shape);
		const data = req[path];
		const errors = {};

		try {
			const validated = await schema.validate(data, {
				abortEarly: false,
			});

			req.validated = validated;

			return next();
		} catch (error) {
			if (typeof error === 'object') {
				error.inner.map(err => {
					errors[err.path] = err.message;
				});
			}

			console.log(errors);

			next(new HttpException(422, HttpException.VALIDATION_MSG, errors));
		}
	};
