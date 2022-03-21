import { Header, Main, Footer } from "./index";
const Products = () => {
  return (
    <div className="grid-3-rows w-100">
      <Header products="header-link-active"/>
      <Main />
      <Footer />
    </div>
  );
};
export { Products };
