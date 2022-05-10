import { removeFromArray } from "utils";
/**
 * Reducer function to handle wishlist state
 * @param {Object} wishlistState State values of wishlist
 * @param {*} payload The changed state
 * @returns Updated state into wishlistState
 */
const wishlistReducer = (wishlistState, { type, payload }) => {
	switch (type) {
		case "ADD_ITEM":
			return {
				...wishlistState,
				wishlistItemsCount: payload.wishlistItemsCount,
				itemsInWishlist: [
					...wishlistState.itemsInWishlist,
					{ ...payload.itemsInWishlist },
				],
			};

		case "REMOVE_ITEM":
			return {
				...wishlistState,
				wishlistItemsCount: payload.wishlistItemsCount,
				itemsInWishlist: removeFromArray(
					wishlistState.itemsInWishlist,
					payload.itemsInWishlist
				),
			};
		case "RESET":
			return {
				...wishlistState,
				itemsInWishlist: [],
				wishlistItemsCount: 0,
			};
		default:
			return wishlistState;
	}
};

export { wishlistReducer };
