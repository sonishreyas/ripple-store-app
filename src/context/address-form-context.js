import { useReducer, createContext, useContext } from "react";
import { addressFormReducer } from "../reducers";

const defaultAddressFormState = {
	type: "",
	addressId: "",
	name: {
		value: "",
		label: "Name",
		type: "UPDATE_NAME",
	},
	houseNo: {
		value: "",
		label: "House No",
		type: "UPDATE_HOUSE_NO",
	},
	society: {
		value: "",
		label: "Society",
		type: "UPDATE_SOCIETY",
	},
	area: {
		value: "",
		label: "Area",
		type: "UPDATE_AREA",
	},
	country: {
		value: "",
		label: "Country",
		type: "UPDATE_COUNTRY",
	},
	state: {
		value: "",
		label: "State",
		type: "UPDATE_STATE",
	},
	city: {
		value: "",
		label: "City",
		type: "UPDATE_CITY",
	},
	pincode: {
		value: "",
		label: "Pincode",
		type: "UPDATE_PINCODE",
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
