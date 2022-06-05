import { WishlistContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const WishlistPage = () => {
	useDocumentTitle("Wishlist | Ripple Store");
	return <WishlistContent />;
};

export { WishlistPage };
