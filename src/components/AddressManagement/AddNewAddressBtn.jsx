const AddNewAddressBtn = () => {
    return (
        <button
            className="outline-btn p-5 b-radius-2 mx-5 my-0 text-bold icon-text-btn flex-row justify-content-center align-center flex-gap-1 address-btn">
            <span><i className="fas fa-plus"></i></span>
            <p className="btn-text">Add new address</p>
        </button>
    );
}

export {AddNewAddressBtn};