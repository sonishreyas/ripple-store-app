import {getWishlistDataHandler, presentInArray, removeFromWishlistHandler} from "../../utils";
import { useWishlist, useCart } from "../../context";
import { MoveToWishlistBtn } from "../ProductListing/product-card"
const CartProducts = () => {
  return (
    {cartData &&
      cartData.map((item) => {
        return (
          <li key={item.productId} className="no-list">
            <article className="card horizontal card-shadow p-5 b-radius-2 m-10">
              <div className="horizontal-card-img--container flex-row justify-content-center align-center flex-wrap b-radius-2">
                <img
                  src={item.productImgURL}
                  alt={item.productName}
                  className="horizontal-card-img b-radius-2 m-5"
                />
              </div>
              <div className="horizontal-card-text--container flex-column flex-gap-1 p-5 b-radius-2 my-0 mx-5">
                <h2>{item.productName}</h2>
                <p>{item.productBrand}</p>
                <span className="rating flex-row align-center flex-gap-half pb-5">
                  {[...Array(item.productRating)].map(() => {
                    return <i className="fas fa-star set"></i>;
                  })}
                  {[...Array(5 - item.productRating)].map(() => {
                    return <i className="fas fa-star unset"></i>;
                  })}{" "}
                  <p className="secondary-font">
                    | ({item.productReviews} reviews)
                  </p>
                </span>
                <div className="pricing flex-row align-center flex-gap-half text-bold py-5 px-0">
                  <h3>{item.productPrice}</h3>
                  <p className="secondary-font">
                    <strike>{item.productMRP}</strike>
                  </p>
                  <p className="discount">
                    ( Rs. {item.productDiscountPrice} OFF )
                  </p>
                </div>
                <div className="items-counter-container flex-row align-center flex-gap-half text-bold py-5 px-0">
                  <span className="icon-btn">
                    <i className="far fa-minus-square"></i>
                  </span>
                  <p className="icon-btn">{item.productQuantity}</p>
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
      })}
}