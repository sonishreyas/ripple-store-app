/**
 *
 * @param {Object} loginState Defines the current state of login
 * @param {Object} loginAction Defines the state to be updated
 * @returns {Object} Updated loginState
 */
const loginReducer = (loginState, loginAction) => {
	switch (loginAction.type) {
		case "UPDATE_EMAIL":
			return { ...loginState, email: loginAction.email };
		case "UPDATE_PASSWORD":
			return {
				...loginState,
				password: loginAction.password,
			};
		case "UPDATE_FOCUS":
			return { ...loginState, focus: loginAction.focus };
		case "TEST_CREDENTIAL":
			return {
				...loginState,
				email: loginAction.email,
				password: loginAction.password,
			};
		default:
			return loginState;
	}
};

/**
 *
 * @param {Object} registerState Defines the current state of register
 * @param {Object} registerAction Defines the state to be updated
 * @returns {Object} Updated registerState
 */
const registerReducer = (registerState, registerAction) => {
	switch (registerAction.type) {
		case "UPDATE_EMAIL":
			return { ...registerState, email: registerAction.email };
		case "UPDATE_FIRST_NAME":
			return { ...registerState, firstName: registerAction.firstName };
		case "UPDATE_LAST_NAME":
			return { ...registerState, lastName: registerAction.lastName };
		case "UPDATE_PASSWORD":
			return {
				...registerState,
				password: registerAction.password,
			};
		case "UPDATE_CONFIRM_PASSWORD":
			return {
				...registerState,
				confirmPassword: registerAction.confirmPassword,
			};
		case "UPDATE_FOCUS":
			return { ...registerState, focus: registerAction.focus };

		default:
			return registerState;
	}
};

/**
 * Handle user update
 * @param {Object} authState Defines the current state of auth used to store user data
 * @param {Object} authAction Defines the state to be updated
 * @returns
 */
const authReducer = (authState, authAction) => {
	switch (authAction.type) {
		case "UPDATE_TOKEN":
			return { ...authState, token: authAction.token };
		case "UPDATE_EMAIL":
			return { ...authState, email: authAction.email };
		case "UPDATE_FIRSTNAME":
			return { ...authState, firstName: authAction.firstName };
		case "UPDATE_LASTNAME":
			return { ...authState, lastName: authAction.lastName };
		case "UPDATE_USER":
			return { ...authState, ...authAction };
		case "LOGOUT":
			return {
				...authState,
				token: "",
				email: "",
				firstName: "",
				lastName: "",
			};
		default:
			return authState;
	}
};
export { loginReducer, registerReducer, authReducer };
