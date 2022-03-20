import axios from "axios";

const addToCartHandler = (e, productData, token, setCartItemsCount) => {
	e.preventDefault();
	(async () => {
		try {
			const response = await axios.post(`/api/user/cart`, productData, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			setCartItemsCount(response.data.cart.length);
		} catch (error) {
			console.log(error);
		}
	})();
};

export { addToCartHandler };
