import {Link} from "react-router-dom";
import { addToWishlistHandler, removeFromWishlistHandler } from "../../../utils" 
import { useWishlist } from "../../../context";

const AddToWishlistBtn = (props) => {
    const { wishlistState, wishlistDispatch} = useWishlist();
    console.log(wishlistState);
    return (
        <button onClick={(e) => addToWishlistHandler(e, props.productData, props.token,wishlistDispatch)} className="outline-btn p-0 b-radius-2 text-bold card-wishlist m-5 flex-row justify-content-center align-center flex-gap-1">
            <span className="wishlist-icon">
                <i className="far fa-heart"></i>
            </span>
            <p className="wishlist-text">Add to wishlist</p>
        </button>
    );
}
    
const AddToWishlistBtnRedirect = () => 
    <Link to="/auth" state={{ state: '/products' }} className="no-link-decoration outline-btn p-0 b-radius-2 text-bold card-wishlist m-5 flex-row justify-content-center align-center flex-gap-1">
        <span className="wishlist-icon">
            <i className="far fa-heart"></i>
        </span>
        <p className="wishlist-text">Add to wishlist</p>
    </Link>

const RemoveFromWishlistBtn = (props) => {
    const { wishlistDispatch} = useWishlist();
    return (
        <button onClick={(e) => removeFromWishlistHandler(e, props.productId, props.token, wishlistDispatch)} className="outline-btn p-0 b-radius-2 text-bold card-wishlist m-5 flex-row justify-content-center align-center flex-gap-1">
            <span className="wishlist-icon">
                <i className="fa-solid fa-heart"></i>
            </span>
            <p className="wishlist-text">Added to wishlist</p>
        </button>
    );
}
export {AddToWishlistBtn,AddToWishlistBtnRedirect, RemoveFromWishlistBtn};