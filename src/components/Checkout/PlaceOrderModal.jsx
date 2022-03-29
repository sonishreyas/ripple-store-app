const PlaceOrderModal = () => {
    return (
        <ul className="address-modal-container address-modal-center radio-btn-container outline-container b-radius-2  p-5 m-10">
            <li className="profile-header flex-row justify-content-space-between align-center flex-wrap p-5 my-0 mx-5" key="address-header">
                <h1 className="form-heading text-bold p-2 h1 text-center">Order Placed</h1>
                <i className="far fa-times-circle rui-cross b-radius-circle card-dismiss-btn m-3 p-1" onClick={handleAddressModal}></i>
            </li>
            <i className="fa-solid fa-circle-check h1"></i>
        </ul>
    )
}

export {PlaceOrderModal};