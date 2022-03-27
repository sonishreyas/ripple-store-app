import { useReducer, createContext, useContext, useEffect } from "react";
import { authReducer } from "../reducers";

const defaultAuthState = {
	token: "",
	email: "",
	firstName: "",
	lastName: "",
};

const AuthContext = createContext({ defaultAuthState });

const AuthProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);
	useEffect(
		() =>
			authDispatch({
				token: localStorage.getItem("token"),
				firstName: localStorage.getItem("firstName"),
				lastName: localStorage.getItem("lastName"),
				email: localStorage.getItem("email"),
				type: "UPDATE_USER",
			}),
		[]
	);
	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
