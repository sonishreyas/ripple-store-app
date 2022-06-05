import { useReducer, createContext, useContext } from "react";
import { addressFormReducer } from "reducers";

const defaultAddressFormState = {
	addressId: "",
	address: {
		name: "",
		houseNo: "",
		society: "",
		area: "",
		country: "",
		state: "",
		city: "",
		pincode: "",
	},
	focus: {
		name: false,
		houseNo: false,
		society: false,
		area: false,
		country: false,
		state: false,
		city: false,
		pincode: false,
	},
};

const AddressFormContext = createContext({ defaultAddressFormState });

const AddressFormProvider = ({ children }) => {
	const [addressFormState, addressFormDispatch] = useReducer(
		addressFormReducer,
		defaultAddressFormState
	);

	return (
		<AddressFormContext.Provider
			value={{ addressFormState, addressFormDispatch }}
		>
			{children}
		</AddressFormContext.Provider>
	);
};

const useAddressForm = () => useContext(AddressFormContext);

export { useAddressForm, AddressFormProvider };
