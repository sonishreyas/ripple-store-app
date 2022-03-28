import { useCart, useAuth, useCheckout } from "../../context";
import { MoveToWishlistBtn } from "../ProductListing/product-card";
import { UpdateCartItem } from "./";
import { addToCheckoutHandler, removeFromCheckoutHandler, presentInArray } from "../../utils";

const CartProducts = () => {
  const {authState} = useAuth();
  const {cartState} = useCart();
  const {checkoutState, checkoutDispatch} = useCheckout();
  const handleCheckout = (e, productId) => e.target.checked ? addToCheckoutHandler(checkoutDispatch,productId) : removeFromCheckoutHandler(checkoutDispatch, productId) 
  const handleSelectAllToCheckout = () => checkoutState.checkoutItemsCount === cartState.cartItemsCount ?  cartState.itemsInCart.map((item) => removeFromCheckoutHandler(checkoutDispatch, item)):
    cartState.itemsInCart.map((item) => presentInArray(checkoutState.itemsInCheckout, item) ? null : addToCheckoutHandler(checkoutDispatch,item));
  
  return (<>
    <li className="no-list p-5 pl-7 cart-items-count-container border-radius-5">
      <section className="flex-row flex-gap-1 align-center justify-content-space-between">
        <section className="flex-row flex-gap-1 align-center justify-content-start">
          <i className={`cursor-pointer fa-solid fa-circle-check cart-check ${(checkoutState.checkoutItemsCount === cartState.cartItemsCount && checkoutState.checkoutItemsCount > 0) ? "text-cta-color": ""}`}
            onClick={handleSelectAllToCheckout}
          ></i>
          <h5 className="text-bold">Select All</h5>
        </section>
        <section className="flex-row flex-gap-1 align-center justify-content-start">
          <h5 className="text-bold">{checkoutState.checkoutItemsCount} / {cartState.cartItemsCount} </h5>
          <h5 className="text-bold">Items Selected for Checkout</h5>
        </section>
      </section>
      
    </li>
    {cartState.cartData.length !== 0 ?
      cartState.cartData.map(({_id, name, brand, category, discountPercent, imgURL, mrp, price, rating, type, qty, reviews, discount }) => {
        return (
          <li key={_id} className="no-list">
            <label className={`basic-chip flex-row align-center flex-wrap flex-gap-1 h6 filter-chip cursor-pointer cart-cards card-shadow ${presentInArray(checkoutState.itemsInCheckout, _id) ? "filter-chip-selected": ""}`}>
              <input
                className="filters"
                type="checkbox"
                checked={ presentInArray(checkoutState.itemsInCheckout, _id) ? true : false }
                onChange={(e) => handleCheckout(e, _id) }
              />
              <i className="fa-solid fa-circle-check cart-check"></i>
              <article className="basic-chip-content b-radius-2">
                <div className="flex-row p-2 b-radius-2 m-2">
                  <div className="horizontal-card-img--container flex-row justify-content-center align-center flex-wrap b-radius-2">
                    <img
                      src={imgURL}
                      alt={name}
                      className="horizontal-card-img b-radius-2 m-5"
                    />
                  </div>
                  <div className="horizontal-card-text--container flex-column flex-gap-1 p-5 b-radius-2 my-0 mx-5">
                    <h2>{name}</h2>
                    <p>{brand}</p>
                    <span className="rating flex-row align-center flex-gap-half pb-5">
                      {[...Array(rating)].map((item, index) => {
                        return <i className="fas fa-star set" key={`set-star-${index}`}></i>;
                      })}
                      {[...Array(5 - rating)].map((item, index) => {
                        return <i className="fas fa-star unset" key={`unset-star-${index}`}></i>;
                      })}{" "}
                      <p className="secondary-font">
                        | ({reviews} reviews)
                      </p>
                    </span>
                    <div className="pricing flex-row align-center flex-gap-half text-bold py-5 px-0">
                      <h3>{price}</h3>
                      <p className="secondary-font">
                        <strike>{mrp}</strike>
                      </p>
                      <p className="discount">
                        ( Rs. {discount} OFF )
                      </p>
                    </div>
                    <div className="items-counter-container flex-row align-center flex-gap-half text-bold py-5 px-0">
                      <span className="icon-btn cursor-pointer">
                        { qty > 1 ?
                          <UpdateCartItem token={authState.token} productId={_id} btnType="decrement" /> 
                          : 
                          <UpdateCartItem token={authState.token} productId={_id} btnType="delete" /> 
                        }
                      </span>
                      <p className="icon-btn">{qty}</p>
                      <span className="icon-btn cursor-pointer">
                        <UpdateCartItem token={authState.token} productId={_id} btnType="increment" /> 
                      </span>
                    </div>
                    <div className="horizontal-card-btn-container flex-row align-center flex-gap-half text-bold py-5 px-0">
                      <MoveToWishlistBtn productData={{product: {_id, name, brand, category, discountPercent, imgURL, mrp, price, rating, type, reviews, discount }}} token={authState.token}/>
                    </div>
                  </div>
                </div>
              </article>
            </label>
          </li>
        );
      }): <h4 className="text-center m-5 p-5">Cart is empty</h4>
    }</>)
}

export {CartProducts}