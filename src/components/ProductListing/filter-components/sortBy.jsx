import { useProducts } from "../../../context";

const SortByFilter = () => {
    const { productsState, productsDispatch, filtersData } = useProducts();
    return (
        <ul className="radio-btn-container pb-10 outline-container p-5 b-radius-2 mt-10 mb-5">
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
    );
};

export {SortByFilter};