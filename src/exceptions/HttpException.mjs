class HttpException extends Error {
	status;
	message;
	errors;

	static VALIDATION_MSG = 'The enterd data is invalid.';
	static NOT_FOUND_MSG = 'Not Found.';

	constructor(status = 400, message = 'Something went wrong.', errors = {}) {
		super(message);

		this.status = status;
		this.message = message;
		this.errors = errors;
	}
}

export default HttpException;
