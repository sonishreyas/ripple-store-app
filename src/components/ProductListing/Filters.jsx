import { useProducts } from "../../context";
import { FilterHeader, SortByFilter, CategoryFilter, BrandFilter } from "./filter-components";

const Filters = () => {
  const { productsState, productsDispatch, filtersData,clearFilters } = useProducts();
  return (
    <div>
      {
        (Object.keys(filtersData).length !== 0 && Object.keys(productsState).length !== 0) &&
          <article className="grid-col-30 h-auto">
            <form className="flex-column p-5 m-5 w-100 h-auto">
              <FilterHeader/>
              <SortByFilter/>
              <CategoryFilter/>
              <BrandFilter/>
            </form>
          </article> 
      }
    </div>
  )
};

export { Filters };
