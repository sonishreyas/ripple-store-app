import { useAddressForm, useAddress, useAuth } from "../../context";
import { addToAddressHandler, updateAddressHandler } from "../../utils";
const AddressFormModal = () => {
	const { addressFormState, addressFormDispatch } = useAddressForm();
	const { setShowAddressFormModal, addressDispatch, addressState } =
		useAddress();
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
		};
		focusReset[field] = value;
		addressFormDispatch({ focus: focusReset });
	};

	const setValueHandler = (e, fieldName) => {
		const fieldValue = { type: "UPDATE_ADDRESS", payload: {} };
		fieldValue["payload"][fieldName] = e.target.value;
		addressFormDispatch(fieldValue);
	};

	const handleAddressFormDismiss = () => setShowAddressFormModal(false);

	const addressFormFields = [
		{ fieldName: "name", label: "Name", type: "UPDATE_NAME" },
		{ fieldName: "houseNo", label: "House No", type: "UPDATE_HOUSE_NO" },
		{ fieldName: "society", label: "Society", type: "UPDATE_SOCIETY" },
		{ fieldName: "area", label: "Area", type: "UPDATE_AREA" },
		{ fieldName: "country", label: "Country", type: "UPDATE_COUNTRY" },
		{ fieldName: "state", label: "State", type: "UPDATE_STATE" },
		{ fieldName: "city", label: "City", type: "UPDATE_CITY" },
		{ fieldName: "pincode", label: "Pincode", type: "UPDATE_PINCODE" },
	];

	const addressFormSubmitHandler = (e) => {
		const addressData = {};
		addressData["address"] = {
			name: addressFormState.address.name,
			houseNo: addressFormState.address.houseNo,
			society: addressFormState.address.society,
			area: addressFormState.address.area,
			city: addressFormState.address.city,
			state: addressFormState.address.state,
			country: addressFormState.address.country,
			pincode: addressFormState.address.pincode,
		};
		addressFormState.addressId
			? addToAddressHandler(e, addressData, addressDispatch)
			: updateAddressHandler(
					e,
					addressFormState.addressId,
					addressDispatch,
					addressData.address,
					addressState
			  );
		setShowAddressFormModal(false);
	};

	const handleFillTestAddressValues = () => {
		const formField = {
			type: "UPDATE_ADDRESS",
			payload: {
				address: {
					name: "Shreyas Soni",
					houseNo: "A-604",
					society: "Nisarg Nirman",
					area: "Pimple Saudagar",
					country: "India",
					state: "Maharashtra",
					city: "India",
					pincode: "411027",
				},
			},
		};
		addressFormDispatch(formField);
	};
	return (
		<div className="address-form-modal-container address-modal-center text-center p-5 m-5 b-radius-2">
			<h3 className="p-2 my-2 mx-0">Add a new Address</h3>
			<form className="input-form flex-column flex-gap-1 flex-grow-1 flex-wrap">
				{addressFormFields.map(({ fieldName, label, type }) => (
					<section
						className={`input-container flex-column m-5 ${
							addressFormState["address"][fieldName].length > 0 ||
							addressFormState["focus"][fieldName]
								? "focused"
								: ""
						}`}
						key={`addressForm-${fieldName}`}
					>
						<input
							id={fieldName}
							className="textbox-content p-5"
							type="text"
							name={fieldName}
							onChange={(e) => setValueHandler(e, fieldName)}
							value={addressFormState["address"][fieldName]}
							onFocus={() => setFocusHandler(fieldName, true)}
							onBlur={() => setFocusHandler(fieldName, false)}
						/>
						<label htmlFor={fieldName} className="textbox-label m-0 px-1">
							{label}
						</label>
					</section>
				))}
				<button
					className="cursor-pointer outline-btn cancel-btn p-5 b-radius-2 mx-5 my-0 text-bold flex-grow-1"
					type="button"
					onClick={handleFillTestAddressValues}
				>
					Fill Test Address
				</button>
				<section className="card-footer  flex-row flex-grow-1 justify-content-center flex-gap-1 py-5 px-0">
					<button
						className="cursor-pointer primary-btn save-btn p-5 b-radius-2 mx-5 my-0 text-bold flex-grow-1"
						type="button"
						onClick={addressFormSubmitHandler}
					>
						Save
					</button>
					<button
						className="cursor-pointer outline-btn cancel-btn p-5 b-radius-2 mx-5 my-0 text-bold flex-grow-1"
						type="button"
						onClick={handleAddressFormDismiss}
					>
						Cancel
					</button>
				</section>
			</form>
		</div>
	);
};

export { AddressFormModal };
