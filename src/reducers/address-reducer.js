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

		case "REMOVE_SELECTED_ADDRESS":
			return {
				...addressState,
				selectedAddress: addressAction.selectedAddress,
			};
		default:
			return addressState;
	}
};

const addressFormReducer = (addressState, addressAction) => {
	switch (addressAction.type) {
		case "UPDATE_NAME":
			return {
				...addressState,
				name: {
					label: addressState.name.label,
					value: addressAction.value,
					type: addressAction.type,
				},
			};
		case "UPDATE_HOUSE_NO":
			return {
				...addressState,
				houseNo: {
					label: addressState.houseNo.label,
					value: addressAction.value,
					type: addressAction.type,
				},
			};
		case "UPDATE_SOCIETY":
			return {
				...addressState,
				society: {
					label: addressState.society.label,
					value: addressAction.value,
					type: addressAction.type,
				},
			};
		case "UPDATE_AREA":
			return {
				...addressState,
				area: {
					label: addressState.area.label,
					value: addressAction.value,
					type: addressAction.type,
				},
			};
		case "UPDATE_COUNTRY":
			return {
				...addressState,
				country: {
					label: addressState.country.label,
					value: addressAction.value,
					type: addressAction.type,
				},
			};
		case "UPDATE_STATE":
			return {
				...addressState,
				state: {
					label: addressState.state.label,
					value: addressAction.value,
					type: addressAction.type,
				},
			};
		case "UPDATE_CITY":
			return {
				...addressState,
				city: {
					label: addressState.city.label,
					value: addressAction.value,
					type: addressAction.type,
				},
			};
		case "UPDATE_PINCODE":
			return {
				...addressState,
				pincode: {
					label: addressState.pincode.label,
					value: addressAction.value,
					type: addressAction.type,
				},
			};
		case "UPDATE_ADDRESS_ID":
			return {
				...addressState,
				addressId: addressAction.addressId,
			};

		default:
			return { ...addressState, ...addressAction };
	}
};
export { addressReducer, addressFormReducer };
