import { useProducts } from "../../context";

const ProductListing = () => {
  const {productsData} = useProducts();

  return (
    <article className="grid-col-70 ">
      <div className="products-container flex-row align-center flex-gap-2 flex-wrap">
        {productsData.length !== 0 ?  
        productsData.map(({_id, name, brand, category, discount, discountPercent, imgURL, mrp, price, rating, reviews, type }) => {
          return (
            <article
              key={_id}
              className="card vertical card-shadow p-5 b-radius-2"
            >
              <section className="card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2">
                <img
                  src={imgURL}
                  alt={`${brand} ${category}`}
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
                <h3 className="card-title">{name}</h3>
                <p className="card-category">{type}</p>
                <span className="card-price-tag mt-3 flex-row align-center flex-gap-half text-bold">
                  <p className="p-0 m-0">Rs. {price}</p>
                  <strike className="p-0 m-0">{mrp}</strike>
                  <p className="discount p-0 m-0">
                    ({discountPercent})
                  </p>
                </span>
              </section>
              <section className="card-tag m-2 px-1 py-0 b-radius-1">
                <span className="card-review m-3 p-0 text-bold flex-row align-center flex-gap-half">
                  <p>{rating}</p>
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
        })
        : <></>
      }
      </div>
    </article>
  );
};
export { ProductListing };
