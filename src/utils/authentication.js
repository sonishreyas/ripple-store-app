import axios from "axios";

/**
 *
 * @param e Element
 * @param location useLocation()
 * @param navigate useNavigation()
 */
const loginHandler = (e, location, navigate, loginState) => {
	e.preventDefault();
	const loginInfo = { email: loginState.email, password: loginState.password };
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

/**
 *
 * @param e Element
 * @param location useLocation()
 * @param navigate useNavigation()
 */
const registerHandler = (e, location, navigate, registerState) => {
	e.preventDefault();
	const registerInfo = {
		firstName: registerState.firstName,
		lastName: registerState.lastName,
		email: registerState.email,
		password: registerState.password,
	};
	(async () => {
		try {
			const response = await axios.post(`/api/auth/signup`, registerInfo);
			// saving the encodedToken in the localStorage
			localStorage.setItem("token", response.data.encodedToken);
			navigate(location.state.state);
		} catch (error) {
			console.log(error);
		}
	})();
};

export { loginHandler, registerHandler };
