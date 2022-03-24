import { useAddress } from "../../context";
import { AddNewAddressBtn } from "./AddNewAddressBtn";
import { AddressCard } from "./AddressCard";
const AddressModal = () => {
    const {addressState, addressDispatch} = useAddress(); 
    return (
        
        <ul className="modal-center radio-btn-container outline-container b-radius-2  p-5 m-5">
        <li className="no-list form-heading text-bold mx-5 p-5 h1">Address</li>
        {
            addressState.addressData.length !== 0 ? 
            addressState.addressData.map(({addressId, name, houseNo, society, area, city, state, country, pincode }) => 
                <li key={addressId} className="no-list form-heading text-bold py-5 px-0 h3">
                    <label className={`basic-chip flex-row align-center flex-wrap flex-gap-1 h6 filter-chip cursor-pointer ${ addressId === addressState.selectedAddress.addressId ? "fliter-chip-selected":""}`}>
                        <input
                            className="filters"
                            type="radio"
                            name="address"
                            value={addressId}
                            checked={addressId === addressState.selectedAddress.addressId ? true: false}
                            onChange={() => 
                                addressDispatch({ 
                                    type: "SET_ACTIVE_ADDRESS",
                                    selectedAddress: {addressId, name, houseNo, society, area, city, state, country, pincode}
                                })
                            }
                        />
                        <i className="fa-solid fa-circle-check"></i>
                        <article className="basic-chip-content">
                            <AddressCard props={{addressId ,name, houseNo, society, area, city, state, country, pincode}} />
                        </article>
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