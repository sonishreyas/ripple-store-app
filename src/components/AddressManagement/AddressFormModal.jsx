import { useAddressForm, useAddress } from "../../context";
import { addToAddressHandler, updateAddressHandler } from "../../utils";
const AddressFormModal = () => {
    const {addressFormState, addressFormDispatch} = useAddressForm();
    const {setShowAddressFormModal, addressDispatch, addressState} = useAddress(); 
    const token = localStorage.getItem("token");
    const setFocusHandler = (field, value) => {
        const focusReset = {
            name: false,
            houseNo: false,
            society: false,
            area: false,
            country: false,
            state: false,
            city: false,
            pincode: false,
        }
        focusReset[field] = value;
        addressFormDispatch({focus: focusReset});
    }

    const setValueHandler = (value,type) => {
        const fieldValue = {"value": value, "type": type};
        addressFormDispatch(fieldValue);
    }

    const handleAddressFormDismiss = () => setShowAddressFormModal(false); 
    
    const addressFormFields = ["name", "houseNo", "society", "area", "country", "state", "city", "pincode"]
    
    const addressFormSubmitHandler = (e, token) => {
        if (addressFormState.addressId === "") {
            const addressData = {}
            addressData["address"] = {name: addressFormState.name.value, houseNo: addressFormState.houseNo.value, society: addressFormState.society.value, area: addressFormState.area.value, city: addressFormState.city.value, state: addressFormState.state.value, country: addressFormState.country.value, pincode: addressFormState.pincode.value}
            addToAddressHandler(e, addressData, token, addressDispatch)
        } else {
            const addressData = {name: addressFormState.name.value, houseNo: addressFormState.houseNo.value, society: addressFormState.society.value, area: addressFormState.area.value, city: addressFormState.city.value, state: addressFormState.state.value, country: addressFormState.country.value, pincode: addressFormState.pincode.value}
            updateAddressHandler(e, addressFormState.addressId, token, addressDispatch, addressData, addressState);
        }
        setShowAddressFormModal(false);
    }
    
    const handleFillTestAddressValues = () => {
        setValueHandler("Shreyas Soni","UPDATE_NAME");
        setValueHandler("A-604","UPDATE_HOUSE_NO");
        setValueHandler("Nisarg Nirman","UPDATE_SOCIETY");
        setValueHandler("Pimple Saudagar","UPDATE_AREA");
        setValueHandler("Pune","UPDATE_CITY");
        setValueHandler("Maharashtra","UPDATE_STATE");
        setValueHandler("India","UPDATE_COUNTRY");
        setValueHandler("411027","UPDATE_PINCODE");
    }
    return (
        <div className="address-form-modal-container address-modal-center text-center p-5 m-5 b-radius-2">
            <h3 className="p-2 my-2 mx-0">Add a new Address</h3>
            <form className="input-form flex-column flex-gap-1 flex-grow-1 flex-wrap">
                {addressFormFields.map((item) => 
                    <section className={`input-container flex-column m-5 ${addressFormState[item]["value"].length > 0 || addressFormState['focus'][item] ? "focused":"" }`} key={`addressForm-${item}`}>
                        <input id={item} className="textbox-content p-5" 
                        type="text" name={item} 
                        onChange={(e) => setValueHandler(e.target.value,addressFormState[item].type)}
                            value={addressFormState[item]["value"]}
                            onFocus={() => setFocusHandler(item,true)} 
                            onBlur={()=> setFocusHandler(item,false)}
                        />
                        <label htmlFor={item} className="textbox-label m-0 px-1">{addressFormState[item]["label"]}</label>
                    </section>
                
                )}
                <button className="cursor-pointer outline-btn cancel-btn p-5 b-radius-2 mx-5 my-0 text-bold flex-grow-1"
                        type="button" onClick={handleFillTestAddressValues}>
                        Fill Test Address
                    </button>
                <section
                    className="card-footer  flex-row flex-grow-1 justify-content-center flex-gap-1 py-5 px-0">
                    
                    <button className="cursor-pointer primary-btn save-btn p-5 b-radius-2 mx-5 my-0 text-bold flex-grow-1"
                        type="button" onClick={(e) => addressFormSubmitHandler(e, token)}>
                        Save</button>
                    <button className="cursor-pointer outline-btn cancel-btn p-5 b-radius-2 mx-5 my-0 text-bold flex-grow-1"
                        type="button" onClick={handleAddressFormDismiss}>
                        Cancel
                    </button>
                </section>
            </form>
        </div>
    );
};

export {AddressFormModal}