import axios from "axios";

/**
 * Add product data to orders
 * @param {*} element
 * @param {Object} productData Product to be added in orders
 * @param {function} ordersDispatch Reducer function
 */
const addToOrdersHandler = (element, productData, token, ordersDispatch) => {
	element && element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/user/orders`,
				{ product: productData },
				{
					headers: {
						Accept: "*/*",
						authorization: token,
					},
				}
			);
			ordersDispatch({
				type: "ADD_ITEM",
				payload: {
					ordersData: productData,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve orders data
 * @param {function} ordersDispatch Reducer function
 */
const getOrdersDataHandler = (token, ordersDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/user/orders`, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			ordersDispatch({
				type: "GET_ITEM",
				payload: {
					ordersData: response.data.orders,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

export { addToOrdersHandler, getOrdersDataHandler };
