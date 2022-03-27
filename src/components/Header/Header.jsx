import { useCart, useWishlist, useAuth } from "../../context";
import { Link } from "react-router-dom";
const Header = (props) => {
    const {cartState} = useCart();
    const {wishlistState} = useWishlist();
    const { authState, authDispatch } = useAuth();
    
    const handleLogout = () => {
      localStorage.clear();
      authDispatch({type: "LOGOUT"});
    }
    
    return (
      <header className="header header-shadow flex-column">
        <div className="flex-row justify-content-space-between align-center w-100">
          <div className="brand-info flex-row justify-content-center align-center flex-gap-1 m-5">
            <section>
              <i className="fas fa-bars header-nav-icon"></i>
            </section>
            <Link to={'/'} 
              className="no-link header-brand"
            >
              <img
                src="https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/ripple-logo.png"
                alt="Logo of ripple UI"
                className="brand-logo"
              />
              <sub className="brand-name">Ripple Store</sub>
            </Link>
            <ul className="no-list spaced-list header-nav flex-row align-center flex-gap-1">
              <li>
                <Link to={'/'} className={`no-link ${props.home}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/products'}
                  className={`no-link ${props.products}`}
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
          <div className="social-icon-container flex-row align-center flex-gap-2">
            <ul className="no-list spaced-list flex-row align-center flex-gap-2 mx-5">
              <li className="search-bar h-auto">
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
              <li className="header-nav-icons h-auto pt-10">
                { 
                  authState.token !== null ? 
                  <Link to={'/profile'} className="no-link badge p-5 m-5 flex-column justify-content-center align-center">
                    <span className="badge-icon">
                      <i className="fas fa-user social"></i>
                    </span>
                    <p className="p-2 m-2">Hi, {authState.firstName.charAt(0).toUpperCase() + authState.firstName.slice(1).toLowerCase()}</p>
                  </Link>
                    : 
                  <Link to={'/auth'} state={{ state: '/profile' }} className="no-link badge p-5 m-5 flex-column justify-content-center align-center">
                    <span className="badge-icon">
                      <i className="fas fa-user social"></i>
                    </span>
                    <p className="badge-text flex-row justify-content-center align-center top right b-radius-circle">
                    </p>
                    <p className="p-2 m-2">Login</p>
                  </Link>
                }
              </li>
              <li className="header-nav-icons h-auto pt-10">
                { 
                  authState.token !== null ? 
                  <Link to={'/wishlist'}  className="no-link badge p-5 m-5 flex-column justify-content-center align-center">
                    <span className="badge-icon">
                      <i className="fas fa-heart social"></i>
                    </span>
                    <p className={`badge-text wishlist-badge-text flex-row justify-content-center align-center top right b-radius-circle ${wishlistState.wishlistItemsCount > 0 ? "" : "inactive" }`}>
                      {wishlistState.wishlistItemsCount}
                    </p>
                    <p className="p-2 m-2">Wishlist</p>
                  </Link>
                    : 
                  <Link to={'/auth'} state={{ state: '/wishlist' }} className="no-link badge p-5 m-5 flex-column justify-content-center align-center">
                    <span className="badge-icon">
                      <i className="fas fa-heart social"></i>
                    </span>
                    <p className={`badge-text wishlist-badge-text flex-row justify-content-center align-center top right b-radius-circle ${wishlistState.wishlistItemsCount > 0 ? "" : "inactive" }`}>
                      {wishlistState.wishlistItemsCount}
                    </p>
                    <p className="p-2 m-2">Wishlist</p>
                  </Link>
                }
              </li>
              <li className="header-nav-icons h-auto pt-10">
                { 
                  authState.token !== null ? 
                  <Link to={'/cart'}  className="no-link badge p-5 m-5 flex-column justify-content-center align-center">
                    <span className="badge-icon">
                      <i className="fas fa-shopping-cart social"></i>
                    </span>
                    <p className={`badge-text cart-badge-text flex-row justify-content-center align-center top right b-radius-circle ${cartState.cartItemsCount > 0 ? "" : "inactive" }`}>
                      {cartState.cartItemsCount}
                    </p>
                    <p className="p-2 m-2">Cart</p>
                  </Link>
                    : 
                  <Link to={'/auth'} state={{ state: '/cart' }} className="no-link badge p-5 m-5 flex-column justify-content-center align-center">
                    <span className="badge-icon">
                      <i className="fas fa-shopping-cart social"></i>
                    </span>
                    <p className={`badge-text cart-badge-text flex-row justify-content-center align-center top right b-radius-circle ${cartState.cartItemsCount > 0 ? "" : "inactive" }`}>
                    {cartState.cartItemsCount}
                    </p>
                    <p className="p-2 m-2">Cart</p>
                  </Link>
                }
              </li>
              <li className="header-nav-icons h-auto pr-5">
              <span className="badge-icon">
                <i
                  className="fas fa-sun theme-icon badge-icon"
                  aria-label="dark/light theme icon"
                ></i></span>
              </li>
              {props.showLogout && <li className="header-nav-icons h-auto pr-5">
                  <Link Link to={'/'} className="no-link badge p-5 m-5 flex-column justify-content-center align-center">
                    <span className="badge-icon" onClick={handleLogout}>
                      <i
                        className="fa-solid fa-arrow-right-from-bracket social"
                        aria-label="Logout"
                      ></i>
                    </span>
                  </Link>
              </li>}
            </ul>
          </div>
        </div>
      </header>
    );
};

export { Header };
  