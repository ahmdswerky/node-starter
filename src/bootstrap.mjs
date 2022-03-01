import dotenv from 'dotenv-safe';

dotenv.config();

BigInt.prototype.toJSON = function () {
	return parseInt(this);
};
