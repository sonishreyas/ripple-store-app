import {Link} from "react-router-dom"

const Cart = () => {
    return (<><h1>This is Cart management page</h1>
      <Link to="/products">Products</Link>
            <Link to="/auth" state={{ state: '/cart' }}>Authentication</Link></>);
}

export {Cart};