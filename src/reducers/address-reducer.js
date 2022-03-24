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
 * @param {Object} addressState State values of address
 * @param {*} addressAction The changed state
 * @returns Updated state into addressState
 */
const addressReducer = (addressState, addressAction) => {
	switch (addressAction.type) {
		case "ADD_ITEM":
			return {
				...addressState,
				addressData: [...addressState.addressData, addressAction.addressData],
			};

		case "REMOVE_ITEM":
			return {
				...addressState,
				addressData: removeObjFromArray(
					addressState.addressData,
					addressAction.addressData
				),
			};

		case "UPDATE_ITEM":
			return {
				...addressState,
				addressData: updateAddressObjInArray(
					addressState.addressData,
					addressAction.addressData
				),
			};

		case "GET_ITEM":
			return {
				...addressState,
				addressData: [...addressAction.addressData],
			};

		case "SET_ACTIVE_ADDRESS":
			return {
				...addressState,
				selectedAddress: { ...addressAction.selectedAddress },
			};
		// case "SET_SHOW_ADDRESS_MODAL":
		// 	return {
		// 		...addressState,
		// 		selectedAddress: { ...addressAction.selectedAddress },
		// 	};

		default:
			return addressState;
	}
};

export { addressReducer };
