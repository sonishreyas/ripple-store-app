import axios from "axios";
const loginHandler = (e, location, navigate) => {
	e.preventDefault();

	const formData = new FormData(e.target);
	const data = {};
	for (let x of formData) {
		data[x[0]] = x[1];
	}
	const loginInfo = { email: data.email, password: data.password };
	(async () => {
		try {
			const response = await axios.post(`/api/auth/login`, loginInfo);
			// saving the encodedToken in the localStorage
			localStorage.setItem("token", response.data.encodedToken);
			navigate(location.state.state);
		} catch (error) {
			console.log(error);
		}
	})();
};

export { loginHandler };
