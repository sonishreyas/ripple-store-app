import { useAddress } from "../../context";
import { AddNewAddressBtn } from "./AddNewAddressBtn";
import { AddressCard } from "./AddressCard";
const AddressModal = () => {
    const {addressState} = useAddress(); 
    return (
        
        <ul className="radio-btn-container pb-10 outline-container p-5 b-radius-2 mt-10 mb-5">
        <li className="no-list form-heading text-bold mx-5 p-5 h1">Address</li>
        {
            addressState.addressData.length !== 0 ? 
            addressState.addressData.map(({_id, name, houseNo, society, area, city, state, country, pincode }) => 
                <li key={_id} className="no-list form-heading text-bold py-5 px-0 h3">
                    <label className={`basic-chip flex-row align-center flex-wrap flex-gap-1 h6 filter-chip cursor-pointer ${true ? " fliter-chip-selected":""}`}>
                        <input
                            className="filters"
                            type="radio"
                            name="sort-by"
                            // value={btnType}
                            checked={true}
                            // onChange={() => 
                            //     productsDispatch({ 
                            //     sortByType: btnType,
                            //     filterType: "PRODUCTS_SORT_BY",
                            //     })
                            // }
                        />
                        <i className="fa-solid fa-circle-check"></i>
                        <p className="basic-chip-content">
                            <AddressCard props={{_id ,name, houseNo, society, area, city, state, country, pincode}} />
                        </p>
                    </label>
                </li>
            ): <h4 className="text-center m-5 p-5"> No Address Found. Please add one.</h4>
        }
        <li key="add-address-btn" className="no-list form-heading text-bold py-5 px-0 h4">
            <AddNewAddressBtn/>    
        </li>

        </ul>
    );
}

export {AddressModal};