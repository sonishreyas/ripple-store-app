import axios from "axios";

/**
 * Add address data to address list
 * @param {*} element
 * @param {Object} addressData Address to be added in address list
 * @param {function} addressDispatch Reducer function
 */
const addToAddressHandler = (e, addressData, addressDispatch) => {
	e.preventDefault();
	(async () => {
		try {
			const response = await axios.post(`/api/user/address`, addressData, {
				headers: {
					Accept: "*/*",
					authorization: JSON.parse(localStorage.getItem("user"))?.token,
				},
			});
			addressDispatch({
				type: "ADD_NEW_ADDRESS",
				payload: {
					addressData: [...response.data.address],
				},
			});
			addressDispatch({
				type: "SET_ACTIVE_ADDRESS",
				payload: {
					selectedAddress: { ...addressData.address },
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove data from address
 * @param element
 * @param {string} addressId addressId to remove from address
 * @param {function} addressDispatch Reducer function
 */
const removeFromAddressHandler = (
	element,
	addressId,
	addressDispatch,
	addressState
) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.delete(`/api/user/address/${addressId}`, {
				headers: {
					Accept: "*/*",
					authorization: JSON.parse(localStorage.getItem("user"))?.token,
				},
			});
			addressDispatch({
				type: "REMOVE_ADDRESS",
				payload: {
					addressData: addressId,
				},
			});
			addressId === addressState.selectedAddress.addressId &&
				addressDispatch({
					type: "REMOVE_SELECTED_ADDRESS",
					payload: {
						selectedAddress: {},
					},
				});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve address data
 * @param element
 * @param {function} addressDispatch Reducer function
 */
const getAddressDataHandler = (addressState, addressDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/user/address`, {
				headers: {
					Accept: "*/*",
					authorization: JSON.parse(localStorage.getItem("user"))?.token,
				},
			});

			addressDispatch({
				type: "GET_ADDRESS",
				payload: {
					addressData: response.data.address,
				},
			});

			if (Object.keys(addressState.selectedAddress).length === 0) {
				addressDispatch({
					type: "SET_ACTIVE_ADDRESS",
					payload: {
						selectedAddress: response.data.address.filter(
							(item) => item.default
						)[0],
					},
				});
			}
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Update data of address
 * @param element
 * @param {string} addressId addressId to remove from cart
 * @param {function} cartDispatch Reducer function
 */
const updateAddressHandler = (
	element,
	addressId,
	addressDispatch,
	newAddress,
	addressState
) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/user/address/${addressId}`,
				newAddress,
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user"))?.token,
					},
				}
			);
			addressDispatch({
				type: "UPDATE_ADDRESS",
				payload: {
					addressData: { addressId: addressId, ...newAddress },
				},
			});
			addressId === addressState.selectedAddress.addressId &&
				addressDispatch({
					type: "UPDATE_SELECTED_ADDRESS",
					payload: {
						selectedAddress: { addressId: addressId, ...newAddress },
					},
				});
		} catch (error) {
			console.log(error);
		}
	})();
};

export {
	addToAddressHandler,
	removeFromAddressHandler,
	getAddressDataHandler,
	updateAddressHandler,
};
