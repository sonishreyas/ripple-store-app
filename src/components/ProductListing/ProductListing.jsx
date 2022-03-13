import { useProducts } from "../../context";

const ProductListing = () => {
  const { productsData } = useProducts();

  return (
    <article className="grid-col-70 ">
      <div className="products-container flex-row align-center flex-gap-2 flex-wrap">
        {productsData.map((item) => {
          return (
            <article
              key={item.productId}
              className="card vertical card-shadow p-5 b-radius-2"
            >
              <section className="card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2">
                <img
                  src={item.productImgURL}
                  alt="Puma Sneakers"
                  className="card-image b-radius-2 mt-2"
                />
              </section>
              <button className="outline-btn p-0 b-radius-2 text-bold card-wishlist m-5 flex-row justify-content-center align-center flex-gap-1">
                <span className="wishlist-icon">
                  <i className="far fa-heart"></i>
                </span>
                <p className="wishlist-text">Add to wishlist</p>
              </button>
              <section className="card-content p-5 pb-0">
                <h3 className="card-title">{item.productName}</h3>
                <p className="card-category">{item.productType}</p>
                <span className="card-price-tag mt-3 flex-row align-center flex-gap-half text-bold">
                  <p className="p-0 m-0">Rs. {item.productPrice}</p>
                  <strike className="p-0 m-0">{item.productMRP}</strike>
                  <p className="discount p-0 m-0">
                    ({item.productDiscountPercent}%)
                  </p>
                </span>
              </section>
              <section className="card-tag m-2 px-1 py-0 b-radius-1">
                <span className="card-review m-3 p-0 text-bold flex-row align-center flex-gap-half">
                  <p>{item.productRating}</p>
                  <span className="review-star">
                    <i className="fas fa-star"></i>
                  </span>
                </span>
              </section>
              <button
                // onClick={() => addToCart(item)}
                className="cursor-pointer primary-btn p-0 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1"
              >
                <span className="cart-icon">
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <p className="cart-text">Add to Cart</p>
              </button>
            </article>
          );
        })}
      </div>
    </article>
  );
};
export { ProductListing };
