export function calculatePagination(req) {
	const page = req.query.page || 1;
	const take = 10;
	const skip = (page - 1) * take;

	return {
		page,
		take,
		skip,
	};
}
