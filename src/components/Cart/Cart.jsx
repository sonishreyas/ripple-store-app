import {Main, Header, Footer} from "./";
const Cart = () => {
    return (
        <div className="grid-3-rows w-100">
            <Header showLogout={true} />
            <Main />
            <Footer/>
        </div>
    )
};

export {Cart};