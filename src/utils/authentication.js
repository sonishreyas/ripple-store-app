import axios from "axios";
import { HEADERS } from "./headers";
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
			// saving the user data in the localStorage
			const user = {
				token: response.data.encodedToken,
				firstName: response.data.foundUser.firstName,
				lastName: response.data.foundUser.lastName,
				email: response.data.foundUser.email,
			};
			authDispatch({
				type: "UPDATE_USER",
				payload: user,
			});
			localStorage.setItem("user", JSON.stringify(user));
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
			const user = {
				token: response.data.encodedToken,
				firstName: response.data.foundUser.firstName,
				lastName: response.data.foundUser.lastName,
				email: response.data.foundUser.email,
			};
			authDispatch({
				type: "UPDATE_USER",
				payload: JSON.stringify(user),
			});
			localStorage.setItem("user", user);
			navigate(location.state.state);
		} catch (error) {
			console.log(error);
		}
	})();
};

const setValueHandler = (e, field, type, loginDispatch) => {
	const fieldValue = { type: type, payload: {} };
	fieldValue.payload[field] = e.target.value;
	loginDispatch(fieldValue);
};

const setTestHandler = (loginDispatch) =>
	loginDispatch({
		type: "TEST_CREDENTIAL",
		payload: { email: "test@gmail.com", password: "test123" },
	});

const setFocusHandler = (field, value, type, loginDispatch, focusReset) => {
	focusReset[field] = value;
	loginDispatch({ payload: { focus: focusReset }, type: type });
};
export {
	loginHandler,
	registerHandler,
	setValueHandler,
	setTestHandler,
	setFocusHandler,
};
