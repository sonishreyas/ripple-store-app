import {getWishlistDataHandler, presentInArray, removeFromWishlistHandler} from "../../utils";
import { useWishlist, useCart } from "../../context";
import {GoToCartBtn, AddToCartBtn} from "../ProductListing/product-card"
const WishlistProducts = () => {
    const token = localStorage.getItem("token");
    const {wishlistState, wishlistDispatch} = useWishlist();
    const { cartState } = useCart();
    return (
        <>
            <h1 className="h1 text-center m-5 p-5">Wishlist</h1>
            
            {wishlistState.wishlistData.length !== 0 ?  
            <section className="rui-main--heading-container no-border dismiss-cards flex-container my-10 text-center">
                wishlistState.wishlistData.map(({_id, name, brand, category, discountPercent, imgURL, mrp, price, rating, type }) => 
                    <article className="card vertical card-shadow p-5 b-radius-2" key={_id}>
                        <section
                            className="card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2">
                            <img src="https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/sneaker.png"
                                alt="Puma Sneakers" className="card-image b-radius-2 mt-2" />
                        </section>
                        <section className="card-content p-5 pb-0">
                            <h3 className="card-title">{name}</h3>
                            <p className="card-category">{type}</p>
                            <span className="card-price-tag mt-3 flex-row align-center flex-gap-half text-bold">
                                <p className="p-0 m-0">Rs. {price}</p>
                                <strike className="p-0 m-0">{mrp}</strike>
                                <p className="discount p-0 m-0">
                                    ({discountPercent} %)
                                </p>
                            </span>
                        </section>
                        { presentInArray(cartState.itemsInCart, _id) ? <GoToCartBtn/> : <AddToCartBtn productData={{product: {_id, name, brand, category, discountPercent, imgURL, mrp, price, rating, type }}} token={token} />}
                        <i className="far fa-times-circle rui-cross b-radius-circle card-dismiss-btn m-3 p-1" onClick={(e) => removeFromWishlistHandler(e, _id, token, wishlistDispatch)}></i>
                    </article>
                )
            </section>
            : <h4 className="text-center m-5 p-5">No product added to wishlist</h4>
            }
            
        </>
    );
}

export  {WishlistProducts};