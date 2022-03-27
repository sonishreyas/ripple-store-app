import axios from "axios";

/**
 *
 * @param e Element
 * @param location useLocation()
 * @param navigate useNavigation()
 */
const loginHandler = (e, location, navigate, loginState, authDispatch) => {
	e.preventDefault();
	const loginInfo = { email: loginState.email, password: loginState.password };
	(async () => {
		try {
			const response = await axios.post(`/api/auth/login`, loginInfo);
			// saving the encodedToken in the localStorage
			authDispatch({
				token: response.data.encodedToken,
				firstName: response.data.foundUser.firstName,
				lastName: response.data.foundUser.lastName,
				email: response.data.foundUser.email,
				type: "UPDATE_USER",
			});
			localStorage.setItem("token", response.data.encodedToken);
			localStorage.setItem("email", response.data.foundUser.email);
			localStorage.setItem("firstName", response.data.foundUser.firstName);
			localStorage.setItem("lastName", response.data.foundUser.lastName);
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
const registerHandler = (
	e,
	location,
	navigate,
	registerState,
	authDispatch
) => {
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
			authDispatch({
				token: response.data.encodedToken,
				firstName: response.data.createdUser.firstName,
				lastName: response.data.createdUser.lastName,
				email: response.data.createdUser.email,
				type: "UPDATE_USER",
			});
			localStorage.setItem("token", response.data.encodedToken);
			localStorage.setItem("email", response.data.createdUser.email);
			localStorage.setItem("firstName", response.data.createdUser.firstName);
			localStorage.setItem("lastName", response.data.createdUser.lastName);
			navigate(location.state.state);
		} catch (error) {
			console.log(error);
		}
	})();
};

export { loginHandler, registerHandler };
