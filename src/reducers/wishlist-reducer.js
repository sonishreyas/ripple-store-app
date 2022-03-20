import { removeFromArray } from "../utils";
/**
 * Reducer function to handle wishlist state
 * @param {Object} wishlistState State values of wishlist
 * @param {*} wishlistAction The changed state
 * @returns Updated state into wishlistState
 */
const wishlistReducer = (wishlistState, wishlistAction) => {
	switch (wishlistAction.type) {
		case "ADD_ITEM":
			return {
				...wishlistState,
				wishlistItemsCount: wishlistAction.wishlistItemsCount,
				itemsInWishlist: [
					...wishlistState.itemsInWishlist,
					...wishlistAction.itemsInWishlist,
				],
			};

		case "REMOVE_ITEM":
			return {
				...wishlistState,
				wishlistItemsCount: wishlistAction.wishlistItemsCount,
				itemsInWishlist: removeFromArray(
					wishlistState.itemsInWishlist,
					wishlistAction.itemsInWishlist[0]
				),
			};
		default:
			return wishlistState;
	}
};

export { wishlistReducer };
