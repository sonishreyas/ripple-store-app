import { useCart } from "../../context";
import { MoveToWishlistBtn } from "../ProductListing/product-card"
import { UpdateCartItem } from "./";
const CartProducts = () => {
  const token = localStorage.getItem("token");
  const {cartState} = useCart();
  return (<>
    {cartState.cartData.length !== 0 ?
      cartState.cartData.map(({_id, name, brand, category, discountPercent, imgURL, mrp, price, rating, type, qty, reviews, discount }) => {
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
                  <span className="icon-btn cursor-pointer">
                    { qty > 1 ?
                      <UpdateCartItem token={token} productId={_id} btnType="decrement" /> 
                      : 
                      <UpdateCartItem token={token} productId={_id} btnType="delete" /> 
                    }
                  </span>
                  <p className="icon-btn">{qty}</p>
                  <span className="icon-btn cursor-pointer">
                    <UpdateCartItem token={token} productId={_id} btnType="increment" /> 
                  </span>
                </div>
                <div className="horizontal-card-btn-container flex-row align-center flex-gap-half text-bold py-5 px-0">
                  <MoveToWishlistBtn productData={{product: {_id, name, brand, category, discountPercent, imgURL, mrp, price, rating, type, reviews, discount }}} token={token}/>
                </div>
              </div>
            </article>
          </li>
        );
      }): <h4 className="text-center m-5 p-5">Cart is empty</h4>
    }</>)
}

export {CartProducts}