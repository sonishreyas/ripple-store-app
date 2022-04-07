import { useReducer, createContext, useContext } from "react";
import { loginReducer } from "../reducers";

const defaultLoginState = {
	email: "",
	password: "",
	focus: { email: false, password: false },
};

const LoginContext = createContext({ defaultLoginState });

const LoginProvider = ({ children }) => {
	const [loginState, loginDispatch] = useReducer(
		loginReducer,
		defaultLoginState
	);

	return (
		<LoginContext.Provider value={{ loginState, loginDispatch }}>
			{children}
		</LoginContext.Provider>
	);
};

const useLogin = () => useContext(LoginContext);

export { useLogin, LoginProvider };
