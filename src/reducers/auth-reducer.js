/**
 *
 * @param {Object} loginState Defines the current state of login
 * @param {Object} loginAction Defines the state to be updated
 * @returns {Object} Updated loginState
 */
const loginReducer = (loginState, loginAction) => {
	return { ...loginState, ...loginAction };
};

/**
 *
 * @param {Object} registerState Defines the current state of register
 * @param {Object} registerAction Defines the state to be updated
 * @returns {Object} Updated registerState
 */
const registerReducer = (registerState, registerAction) => {
	return { ...registerState, ...registerAction };
};

export { loginReducer, registerReducer };
