import {getWishlistDataHandler} from "../../utils";
import { useWishlist } from "../../context";

const Main = () => {
    const token = localStorage.getItem("token");
    const {wishlistDispatch} = useWishlist();
    return (
        <button onClick={(e) => getWishlistDataHandler(e,token,wishlistDispatch)}>WishlistPage</button>
    )
};

export {Main};