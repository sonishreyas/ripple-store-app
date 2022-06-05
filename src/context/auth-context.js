import { useReducer, createContext, useContext, useEffect } from "react";
import { authReducer } from "reducers";

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
				type: "UPDATE_USER",
				payload: !JSON.parse(localStorage.getItem("user"))
					? {}
					: JSON.parse(localStorage.getItem("user")),
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
