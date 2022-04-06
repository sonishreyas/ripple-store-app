import { removeObjFromArray, updateAddressObjInArray } from "../utils";

const resetAddressStatus = (addressData) =>
	Object.keys(addressData).reduce((prev, curr) => {
		prev[curr] = false;
		return prev;
	}, {});
const setAddressStatus = (addressDataId) => {
	{
		addressDataId: true;
	}
};

/**
 * Reducer function to handle address state
 * @param {*} addressState State values of address
 * @param {*} param1 type: actionType, payload: new state value
 * @returns  Updated state into addressState
 */
const addressReducer = (addressState, { type, payload }) => {
	switch (type) {
		case "ADD_NEW_ADDRESS":
			return {
				...addressState,
				addressData: [...addressState.addressData, payload.addressData],
			};

		case "REMOVE_ADDRESS":
			return {
				...addressState,
				addressData: removeAddressObjFromArray(
					addressState.addressData,
					payload.addressData
				),
			};

		case "UPDATE_ADDRESS":
			return {
				...addressState,
				addressData: updateAddressObjInArray(
					addressState.addressData,
					payload.addressData
				),
			};

		case "GET_ADDRESS":
			return {
				...addressState,
				addressData: [...payload.addressData],
			};

		case "SET_ACTIVE_ADDRESS":
			return {
				...addressState,
				selectedAddress: { ...payload.selectedAddress },
			};

		case "REMOVE_SELECTED_ADDRESS":
			return {
				...addressState,
				selectedAddress: payload.selectedAddress,
			};

		case "UPDATE_SELECTED_ADDRESS":
			return {
				...addressState,
				selectedAddress: payload.selectedAddress,
			};

		default:
			return addressState;
	}
};

const addressFormReducer = (addressFormState, { type, payload }) => {
	switch (type) {
		case "UPDATE_ADDRESS":
			return {
				...addressFormState,
				address: { ...addressFormState.address, ...payload.address },
			};
		case "UPDATE_FOCUS_ADDRESS":
			return {
				...addressFormState,
				focus: { ...addressFormState.focus, ...payload.focus },
			};
		case "UPDATE_ADDRESS_ID":
			return {
				...addressFormState,
				addressId: payload.addressId,
			};

		default:
			return addressFormState;
	}
};
export { addressReducer, addressFormReducer };
