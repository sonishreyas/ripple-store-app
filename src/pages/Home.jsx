import {Link} from "react-router-dom"
const Home = () => {
    return (<div><h1>This is home page</h1>
            <Link to="/products">Products</Link>
    </div>);
}

export {Home};
