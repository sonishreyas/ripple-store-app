/**
 *
 * @param {Object} loginState Defines the current state of login
 * @param {Object} loginAction Defines the state to be updated
 * @returns {Object} Updated loginState
 */
const loginReducer = (loginState, loginAction) => {
	return { ...loginState, ...loginAction };
};

export { loginReducer };
