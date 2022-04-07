import {Link} from "react-router-dom";
const Banner = () => {
    return (
        <article className="background-image-container flex-row justify-content-center align-center flex-wrap mx-10 my-10">
            <section className="background-image"></section>
            <section className="background-content flex-column justify-content-center align-center text-center">
                <h2 className="homepage-heading text-primary-color">Ripple Store</h2>
                <h2 className="p-5 h2 text-primary-color">Wear the <i className="text-primary-color">best</i></h2>
                <h2 className="p-5 h2 text-primary-color">Upto 80% off on top brands</h2>
                <Link to={"/products"} className="no-link-decoration primary-btn p-5 b-radius-5 mx-5 my-0 text-bold icon-text-btn flex-row justify-content-center align-center flex-gap-1 w-max-content text-tertiary-color" aria-label="View Documentation">
                    <span><i className="fa-solid fa-bag-shopping "></i></span>
                    <p className="h4 text-bold">Shop Now</p>
                </Link>
            </section>
        </article>
    )
}

export { Banner };