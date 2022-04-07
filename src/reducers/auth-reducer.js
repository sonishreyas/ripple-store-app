/**
 *
 * @param {Object} loginState Defines the current state of login
 * @param {*} param1 type: action to perform, payload: Defines the state to be updated
 * @returns {Object} Updated loginState
 */
const loginReducer = (loginState, { type, payload }) => {
	switch (type) {
		case "UPDATE_EMAIL":
			return { ...loginState, email: payload.email };
		case "UPDATE_PASSWORD":
			return {
				...loginState,
				password: payload.password,
			};
		case "UPDATE_FOCUS":
			return { ...loginState, focus: payload.focus };
		case "TEST_CREDENTIAL":
			return {
				...loginState,
				email: payload.email,
				password: payload.password,
			};
		case "RESET":
			return {
				...loginState,
				email: "",
				password: "",
				focus: { email: false, password: false },
			};
		default:
			return loginState;
	}
};

/**
 *
 * @param {Object} registerState Defines the current state of register
 * @param {*} param1 type: action to perform, payload: Defines the state to be updated
 * @returns {Object} Updated registerState
 */
const registerReducer = (registerState, { type, payload }) => {
	switch (type) {
		case "UPDATE_EMAIL":
			return { ...registerState, email: payload.email };
		case "UPDATE_FIRST_NAME":
			return { ...registerState, firstName: payload.firstName };
		case "UPDATE_LAST_NAME":
			return { ...registerState, lastName: payload.lastName };
		case "UPDATE_PASSWORD":
			return {
				...registerState,
				password: payload.password,
			};
		case "UPDATE_CONFIRM_PASSWORD":
			return {
				...registerState,
				confirmPassword: payload.confirmPassword,
			};
		case "UPDATE_FOCUS":
			return { ...registerState, focus: payload.focus };
		case "RESET":
			return {
				...registerState,
				email: "",
				password: "",
				firstName: "",
				lastName: "",
				confirmPassword: "",
				focus: {
					firstName: false,
					lastName: false,
					email: false,
					password: false,
					confirmPassword: false,
				},
			};
		default:
			return registerState;
	}
};

/**
 * Handle user update
 * @param {Object} authState Defines the current state of auth used to store user data
 * @param {*} param1 type: action to perform, payload: Defines the state to be updated
 * @returns
 */
const authReducer = (authState, { type, payload }) => {
	switch (type) {
		case "UPDATE_TOKEN":
			return { ...authState, token: payload.token };
		case "UPDATE_EMAIL":
			return { ...authState, email: payload.email };
		case "UPDATE_FIRSTNAME":
			return { ...authState, firstName: payload.firstName };
		case "UPDATE_LASTNAME":
			return { ...authState, lastName: payload.lastName };
		case "UPDATE_USER":
			return { ...authState, ...payload };
		case "LOGOUT":
			return {
				...authState,
				token: "",
				firstName: "",
				lastName: "",
				email: "",
			};

		default:
			return authState;
	}
};

export { loginReducer, registerReducer, authReducer };
