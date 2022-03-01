//import { PrismaClientInitializationError } from '@prisma/client/runtime';

export default function errorHandler(err, req, res, next) {
	//if (err instanceof PrismaClientInitializationError) {
	//	res.status(err.status || 500).send({
	//		message: err.message || `Database Error`,
	//	});
	//} else {
	res.status(err.status || 500).send({
		message: err.message || `Someting wen't wrong`,
		errors: err.errors || undefined,
	});
	//}
}
