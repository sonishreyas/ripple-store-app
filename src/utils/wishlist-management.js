import axios from "axios";

const addToWishlistHandler = (e, productData, token, setWishlistItemsCount) => {
	e.preventDefault();
	(async () => {
		try {
			const response = await axios.post(`/api/user/wishlist`, productData, {
				headers: {
					Accept: "*/*",
					authorization: token,
				},
			});
			setWishlistItemsCount(response.data.wishlist.length);
		} catch (error) {
			console.log(error);
		}
	})();
};

export { addToWishlistHandler };
