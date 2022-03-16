import { useProducts } from "../../context";
// import { filters as filtersData } from "../../data/filters";

const Filters = () => {
  const { productsState, productsDispatch, filtersData,clearFilters } = useProducts();
  return (
  <div>
    {
      (Object.keys(filtersData).length !== 0 && Object.keys(productsState).length !== 0) &&
      <article className="grid-col-30 h-auto">
      <form className="flex-column p-5 m-5 w-100 h-auto">
        <section className="form-header flex-row align-center justify-content-space-between p-5 pb-10 w-100 h-auto ">
          <h3 className="form-heading text-bold py-5 px-0">Filters</h3>
          <button 
            className="primary-btn no-link-decoration text-tertiary-color text-bold p-2 px-4 b-radius-4"
            onClick={()=>{
              productsDispatch({
                ...clearFilters
              })
            }}
            >
            Clear All
          </button>
        </section>
        <ul className="radio-btn-container pb-10 outline-container p-5 b-radius-2 my-10">
          <li className="no-list form-heading text-bold py-5 px-0">Sort by</li>
          {filtersData.sortByList.map(
            ({ name, btnType }, index) => {
              return (
                <li className="no-list w-100 my-2" key={`sortby-${index}`}>
                  <label className={`basic-chip flex-row align-center flex-wrap flex-gap-1 h6 filter-chip cursor-pointer ${productsState.sortByType===btnType ? " fliter-chip-selected":""}`}>
                    <input
                      className="filters"
                      type="radio"
                      name="sort-by"
                      value={btnType}
                      checked={productsState.sortByType === btnType ? true : false}
                      onChange={() => 
                        productsDispatch({ 
                          sortByType: btnType,
                          filterType: "PRODUCTS_SORT_BY",
                        })
                      }
                    />
                    <i className="fa-solid fa-circle-check"></i>
                    <p className="basic-chip-content">{name}</p>
                  </label>
                </li>
              );
            }
          )}
        </ul>
        <ul className="checkbox-btn-container pb-10 outline-container p-5 b-radius-2 my-10">
          <li className="no-list form-heading text-bold py-5 px-0">
            Categories
          </li>
          {filtersData.categoryFilters.map(
            ({ name, btnType }, index) => {
              return (
                <li className="no-list w-100 my-2" key={`category-${index}`}>
                  <label className={`basic-chip flex-row align-center flex-wrap flex-gap-1 h6 filter-chip cursor-pointer ${productsState.categoryFilters[name] ? " fliter-chip-selected":""}`}>
                    <input
                      className="filters"
                      type="checkbox"
                      value={btnType}
                      checked={
                        productsState.categoryFilters[name] ? true : false
                      }
                      onChange={(e) =>
                        productsDispatch({
                          filterName: name,
                          filterType: btnType,
                          categoryFilters: ((categoryFilters, e) => {
                            const newCategoryFilters = { ...categoryFilters };
                            newCategoryFilters[name] = e.target.checked;
                            return newCategoryFilters;
                          })(productsState.categoryFilters, e)
                        })
                      }
                    />
                    <i className="fa-solid fa-circle-check"></i>
                    <p className="basic-chip-content">{name}</p>
                  </label>
                </li>
              );
            }
          )}
        </ul>

        <ul className="checkbox-btn-container pb-10 outline-container p-5 b-radius-2 my-10">
          <li className="no-list form-heading text-bold py-5 px-0">Brand</li>
          {filtersData.brandFilters.map(({ name, btnType }, index) => {
            return (
              <li className="no-list w-100 my-2" key={`brand-${index}`}>
                <label className={`basic-chip flex-row align-center flex-wrap flex-gap-1 h6 filter-chip cursor-pointer ${productsState.brandFilters[name] ? " fliter-chip-selected":""}`}>
                  <input
                    className="filters"
                    type="checkbox"
                    value={btnType}
                    checked={productsState.brandFilters[name] ? true : false}
                    onChange={(e) =>
                      productsDispatch({
                        filterName: name,
                        filterType: btnType,
                        brandFilters: ((brandFilters, e) => {
                          const newBrandFilters = { ...brandFilters };
                          newBrandFilters[name] = e.target.checked;
                          return newBrandFilters;
                        })(productsState.brandFilters, e)
                      })
                    }
                  />
                  <i className="fa-solid fa-circle-check"></i>
                  <p className="basic-chip-content">{name}</p>
                </label>
              </li>
            );
          })}
        </ul>
        {/* <ul className="outline-container price-slider p-5 my-5 b-radius-2 flex-column flex-gap-1 flex-wrap w-100  my-10">
          <li className="no-list form-heading text-bold py-5 px-0">Price</li>
          <article className="value-input flex-row flex-gap-2 align-center mb-10">
            <article className="field flex-row align-center">
              <span className="h6">Min </span>
              <input
                type="number"
                defaultValue={filtersData.priceFilter.minPrice}
                className="input-min w-100 ml-5 b-radius-1 h4"
              />
            </article>
            <span className="h6">-</span>
            <article className="field flex-row align-center">
              <span className="h6">Max </span>
              <input
                type="number"
                defaultValue={filtersData.priceFilter.maxPrice}
                className="input-max w-100 ml-5 b-radius-1 h4"
              />
            </article>
          </article>

          <article className="range-slider-container b-radius-1">
            <article className="range-slider-progress b-radius-1"></article>
          </article>

          <article className="range-input">
            <input
              type="range"
              name="range-min"
              min={filtersData.priceFilter.minPrice}
              max={filtersData.priceFilter.maxPrice}
              defaultValue="2000"
              className="range-min"
              step="100"
            />{" "}
            <input
              type="range"
              name="range-max"
              min={filtersData.priceFilter.minPrice}
              max={filtersData.priceFilter.maxPrice}
              defaultValue="15000"
              className="range-max"
              step="100"
            />
          </article>
        </ul>
        
        <ul className="outline-container rating-slider p-5 my-5 b-radius-2 flex-column flex-gap-1 flex-wrap w-100  my-10">
          <li className="no-list form-heading text-bold py-5 px-0">Rating</li>
          <article className="value-input flex-row flex-gap-2 align-center mb-10">
            <article className="field flex-row align-center">
              <span className="h6">Min </span>
              <input
                type="number"
                defaultValue={filtersData.ratingFilter.minRating}
                className="input-min w-100 ml-5 b-radius-1 h4"
              />
            </article>
            <span className="h6">-</span>
            <article className="field flex-row align-center">
              <span className="h6">Max </span>
              <input
                type="number"
                defaultValue={filtersData.ratingFilter.maxRating}
                className="input-max w-100 ml-5 b-radius-1 h4"
              />
            </article>
          </article>

          <article className="range-slider-container b-radius-1">
            <article className="range-slider-progress b-radius-1"></article>
          </article>

          <article className="range-input">
            <input
              type="range"
              name="range-min"
              min={filtersData.ratingFilter.minRating}
              max={filtersData.ratingFilter.maxRating}
              defaultValue="1"
              className="range-min"
              step="1"
            />
            <input
              type="range"
              name="range-max"
              min={filtersData.ratingFilter.minRating}
              max={filtersData.ratingFilter.maxRating}
              defaultValue="5"
              className="range-max"
              step="1"
            />
          </article>
        </ul> */}
      </form>
    </article> 
  }
  </div>)
};

export { Filters };
