import { createContext, useContext, useState, useEffect } from "react";
import { useReducer } from "react";
import { addressReducer } from "../reducers";
import { getAddressDataHandler } from "../utils";

const defaultAddressContext = {
	type: "",
	selectedAddress: {},
	addressData: [],
};

const AddressContext = createContext({ defaultAddressContext });

const AddressProvider = ({ children }) => {
	const [addressState, addressDispatch] = useReducer(
		addressReducer,
		defaultAddressContext
	);
	const [showAddressModal, setShowAddressModal] = useState(false);
	const [showAddressFormModal, setShowAddressFormModal] = useState(false);

	const token = localStorage.getItem("token");

	useEffect(
		() => getAddressDataHandler(token, addressState, addressDispatch),
		[]
	);

	// console.log("Address = ", addressState);
	return (
		<AddressContext.Provider
			value={{
				addressState,
				addressDispatch,
				showAddressModal,
				setShowAddressModal,
				showAddressFormModal,
				setShowAddressFormModal,
			}}
		>
			{children}
		</AddressContext.Provider>
	);
};

const useAddress = () => useContext(AddressContext);
export { useAddress, AddressProvider };
