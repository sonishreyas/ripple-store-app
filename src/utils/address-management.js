import axios from "axios";

/**
 * Add address data to address list
 * @param {*} element
 * @param {Object} addressData Address to be added in address list
 * @param {string} token encodedToken of user
 * @param {function} addressDispatch Reducer function
 */
const addToAddressHandler = (e, addressData, token, addressDispatch) => {
	e.preventDefault();
	(async () => {
		try {
			const response = await axios.post(`/api/user/address`, addressData, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			addressDispatch({
				type: "ADD_ITEM",
				addressData: { ...addressData.address },
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
 * @param {string} token encodedToken of user
 * @param {function} addressDispatch Reducer function
 */
const removeFromAddressHandler = (
	element,
	addressId,
	token,
	addressDispatch
) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.delete(`/api/user/address/${addressId}`, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			addressDispatch({
				type: "REMOVE_ITEM",
				addressData: addressId,
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve address data
 * @param element
 * @param {string} token encodedToken of user
 * @param {function} addressDispatch Reducer function
 */
const getAddressDataHandler = (token, addressState, addressDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/user/address`, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});

			addressDispatch({
				type: "GET_ITEM",
				addressData: response.data.address,
			});

			if (Object.keys(addressState.selectedAddress).length === 0) {
				addressDispatch({
					type: "SET_ACTIVE_ADDRESS",
					selectedAddress: response.data.address.filter(
						(item) => item.default
					)[0],
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
 * @param {string} token encodedToken of user
 * @param {function} cartDispatch Reducer function
 */
const updateAddressHandler = (
	element,
	addressId,
	token,
	addressDispatch,
	newAddress
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
						authorization: token,
					},
				}
			);
			console.log("Update = ", response);
			addressDispatch({
				type: "UPDATE_ITEM",
				addressData: { _id: addressId, ...newAddress },
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
