import { Filters, ProductListing } from "./index";
const Main = () => {
  return (
    <main className="main grid-30-70-column">
      <Filters />
      <ProductListing />
    </main>
  );
};
export { Main };
