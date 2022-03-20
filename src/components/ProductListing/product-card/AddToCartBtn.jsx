import {Link} from "react-router-dom";
import { addToCartHandler } from "../../../utils";
import { useCart } from "../../../context";

const AddToCartBtn = (props) => {
    const {setCartItemsCount} = useCart();
    return (<button onClick={(e) => addToCartHandler(e, props.productData, props.token,setCartItemsCount)} className="cursor-pointer primary-btn p-0 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1">
        <span className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
        </span>
        <p className="cart-text">Add to Cart</p>
    </button>)
}

const AddToCartBtnRedirect = () => 
    <Link to="/auth" state={{ state: '/products' }} className="no-link-decoration cursor-pointer primary-btn p-0 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1">
        <span className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
        </span>
        <p className="cart-text">Add to Cart</p>
    </Link>

export { AddToCartBtn, AddToCartBtnRedirect };