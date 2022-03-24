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
	const token = localStorage.getItem("token");
	useEffect(() => getAddressDataHandler(token, addressDispatch), []);

	// console.log("Address = ", addressState);
	return (
		<AddressContext.Provider value={{ addressState, addressDispatch }}>
			{children}
		</AddressContext.Provider>
	);
};

const useAddress = () => useContext(AddressContext);
export { useAddress, AddressProvider };
