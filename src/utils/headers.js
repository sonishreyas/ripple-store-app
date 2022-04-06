const HEADERS = {
	headers: {
		Accept: "*/*",
		authorization: JSON.parse(localStorage.getItem("user"))?.token,
	},
};

export { HEADERS };
