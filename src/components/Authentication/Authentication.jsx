import { Header, Main, Footer } from "./index";

const Authentication = () => {
    return (
        <div className="grid-3-rows w-100">
            <Header showLogout={false} />
            <Main />
            <Footer />
        </div>
    );
}

export { Authentication };