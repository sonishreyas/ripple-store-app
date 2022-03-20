import {Link} from "react-router-dom";
const AddToWishlistBtn = () => 
    <button className="outline-btn p-0 b-radius-2 text-bold card-wishlist m-5 flex-row justify-content-center align-center flex-gap-1">
        <span className="wishlist-icon">
            <i className="far fa-heart"></i>
        </span>
        <p className="wishlist-text">Add to wishlist</p>
    </button>

const AddToWishlistBtnRedirect = () => 
    <Link to="/auth" state={{ state: '/products' }} className="no-link-decoration outline-btn p-0 b-radius-2 text-bold card-wishlist m-5 flex-row justify-content-center align-center flex-gap-1">
        <span className="wishlist-icon">
            <i className="far fa-heart"></i>
        </span>
        <p className="wishlist-text">Add to wishlist</p>
    </Link>

export {AddToWishlistBtn,AddToWishlistBtnRedirect};