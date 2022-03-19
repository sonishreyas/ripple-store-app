import { useReducer, createContext, useContext } from "react";
import { registerReducer } from "../reducers";

const defaultRegisterState = {
	email: "",
	password: "",
	firstName: "",
	lastName: "",
	confirmPassword: "",
	showPassword: { password: false, confirmPassword: false },
	focus: {
		firstName: false,
		lastName: false,
		email: false,
		password: false,
		confirmPassword: false,
	},
};

const RegisterContext = createContext({ defaultRegisterState });

const RegisterProvider = ({ children }) => {
	const [registerState, registerDispatch] = useReducer(
		registerReducer,
		defaultRegisterState
	);

	return (
		<RegisterContext.Provider value={{ registerState, registerDispatch }}>
			{children}
		</RegisterContext.Provider>
	);
};

const useRegister = () => useContext(RegisterContext);

export { useRegister, RegisterProvider };
