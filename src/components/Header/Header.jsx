import { useCart, useWishlist } from "../../context";
import { Link } from "react-router-dom";
const Header = (props) => {
    const {cartItemsCount} = useCart();
    const {wishlistState} = useWishlist();
    const token = localStorage.getItem("token");
    return (
      <header className="header header-shadow flex-column">
        <div className="flex-row justify-content-space-between align-center w-100">
          <div className="brand-info flex-row justify-content-center align-center flex-gap-1 m-5">
            <section>
              <i className="fas fa-bars header-nav-icon"></i>
            </section>
            <a
              href="https://ripple-store.netlify.app/"
              className="no-link header-brand"
            >
              <img
                src="https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/ripple-logo.png"
                alt="Logo of ripple UI"
                className="brand-logo"
              />
              <sub className="brand-name">Ripple Store</sub>
            </a>
            <ul className="no-list spaced-list header-nav flex-row align-center flex-gap-1">
              <li>
                <a href="https://ripple-store.netlify.app/" className={`no-link ${props.home}`}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://ripple-store.netlify.app/pages/products/products.html"
                  className={`no-link ${props.products}`}
                >
                  Products
                </a>
              </li>
            </ul>
          </div>
          <div className="social-icon-container flex-row align-center flex-gap-2">
            <ul className="no-list spaced-list flex-row align-center flex-gap-2 mx-5">
              <li className="search-bar">
                <form className="input-form flex-column flex-gap-1 flex-grow-1 flex-wrap h-auto w-100">
                  <section className="input-container input-with-icon flex-column b-radius-2 m-5">
                    <input
                      id="search"
                      className="textbox-content p-5"
                      type="text"
                      name="search"
                      placeholder="Search..."
                      aria-label="Search Products here"
                    />
                    <i className="fas fa-search search-icon"></i>
                  </section>
                </form>
              </li>
              <li className="header-nav-icons">
                <a
                  className="no-link badge p-5 m-5 flex-column justify-content-center align-center"
                  href="https://ripple-store.netlify.app/pages/profile/profile.html"
                >
                  <span className="badge-icon">
                    <i className="fas fa-user social"></i>
                  </span>
                </a>
              </li>
              <li className="header-nav-icons h-auto pt-10">
                { token ? <Link to={'/wishlist'}
                  className="no-link badge p-5 m-5 flex-column justify-content-center align-center"
                >
                  <span className="badge-icon">
                    <i className="fas fa-heart social"></i>
                  </span>
                  <p className={`badge-text flex-row justify-content-center align-center top right b-radius-circle ${wishlistState.wishlistItemsCount > 0 ? "" : "inactive" }`}>
                    {wishlistState.wishlistItemsCount}
                  </p>
                </Link>: <Link to={'/auth'} state={{ state: '/wishlist' }} 
                  className="no-link badge p-5 m-5 flex-column justify-content-center align-center"
                >
                  <span className="badge-icon">
                    <i className="fas fa-heart social"></i>
                  </span>
                  <p className={`badge-text flex-row justify-content-center align-center top right b-radius-circle ${wishlistState.wishlistItemsCount > 0 ? "" : "inactive" }`}>
                    {wishlistState.wishlistItemsCount}
                  </p>
                </Link>}
              </li>
              <li className="header-nav-icons pt-10">
                <a
                  className="no-link badge p-5 m-5 flex-column justify-content-center align-center"
                  href="https://ripple-store.netlify.app/pages/cart/cart.html"
                >
                  <span className="badge-icon">
                    <i className="fas fa-shopping-cart social"></i>
                  </span>
                  <p className="badge-text flex-row justify-content-center align-center top right b-radius-circle">
                    {cartItemsCount}
                  </p>
                </a>
              </li>
              <li>
                <i
                  className="fas fa-sun theme-icon social"
                  aria-label="dark/light theme icon"
                ></i>
              </li>
              <li className="header-nav-icons">
                <a
                  href="https://ripple-store.netlify.app/pages/authentication/authentication.html"
                  aria-label="Login/Register"
                  className="no-link-decoration primary-btn p-3 b-radius-2 my-0 text-bold text-tertiary-color"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
};

export { Header };
  