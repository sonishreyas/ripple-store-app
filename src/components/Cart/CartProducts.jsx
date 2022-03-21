import {getCartDataHandler, presentInArray, removeFromCartHandler} from "../../utils";
import { useWishlist, useCart } from "../../context";
import { MoveToWishlistBtn } from "../ProductListing/product-card"

const CartProducts = () => {
  const token = localStorage.getItem("token");
  const {cartState, cartDispatch} = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  return (<>
    {cartState.cartData.length !== 0 ?
      cartState.cartData.map(({_id, name, brand, category, discountPercent, imgURL, mrp, price, rating, type, qty, reviews }) => {
        return (
          <li key={_id} className="no-list">
            <article className="card horizontal card-shadow p-5 b-radius-2 m-10">
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
                  {[...Array(rating)].map(() => {
                    return <i className="fas fa-star set"></i>;
                  })}
                  {[...Array(5 - rating)].map(() => {
                    return <i className="fas fa-star unset"></i>;
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
                  <span className="icon-btn">
                    <i className="far fa-minus-square"></i>
                  </span>
                  <p className="icon-btn">{qty}</p>
                  <span className="icon-btn">
                    <i className="far fa-plus-square"></i>
                  </span>
                </div>
                <div className="horizontal-card-btn-container flex-row align-center flex-gap-half text-bold py-5 px-0">
                  <button className="p-5 my-5 mb-10 outline-btn b-radius-2 text-bold horizontal-card-btn-secondary flex-row justify-content-center align-center flex-gap-1 flex-grow-1 text-bold">
                    <span className="wishlist-icon">
                      <i className="far fa-heart"></i>
                    </span>
                    <p className="wishlist-text">Move to wishlist</p>
                  </button>
                </div>
              </div>
            </article>
          </li>
        );
      }): <h4 className="text-center m-5 p-5">Cart is empty</h4>
    }</>)
}

export {CartProducts}