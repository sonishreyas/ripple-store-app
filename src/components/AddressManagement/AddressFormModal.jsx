import { useAddressForm, useAddress, useAuth } from "context";
import {
	addToAddressHandler,
	updateAddressHandler,
	checkIfAddressPresent,
} from "utils";
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
		addressFormDispatch({
			type: "UPDATE_FOCUS_ADDRESS",
			payload: { focus: focusReset },
		});
	};

	const setValueHandler = (e, fieldName) => {
		const fieldValue = { type: "UPDATE_ADDRESS", payload: { address: {} } };
		fieldValue["payload"]["address"][fieldName] = e.target.value;
		addressFormDispatch(fieldValue);
	};

	const handleAddressFormDismiss = () => {
		setShowAddressFormModal(false);
		addressFormDispatch({ type: "RESET" });
	};
	const addressFormFields = [
		{ fieldName: "name", label: "Name" },
		{ fieldName: "houseNo", label: "House No" },
		{ fieldName: "society", label: "Society" },
		{ fieldName: "area", label: "Area" },
		{ fieldName: "country", label: "Country" },
		{ fieldName: "state", label: "State" },
		{ fieldName: "city", label: "City" },
		{ fieldName: "pincode", label: "Pincode" },
	];

	const addressFormSubmitHandler = (e) => {
		const addressData = {};
		addressData["address"] = addressFormState.address;

		addressFormState?.addressId?.length
			? updateAddressHandler(
					e,
					addressFormState.addressId,
					addressDispatch,
					addressData.address,
					addressState
			  )
			: !checkIfAddressPresent(addressData.address, addressState)
			? addToAddressHandler(e, addressData, addressDispatch)
			: handleAddressFormDismiss();
		handleAddressFormDismiss();
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
		<div className="modal flex-row justify-content-center align-center">
			<div className="modal-background"></div>
			<div className="modal-content address-form-modal-container text-center p-5 m-5 b-radius-2">
				<h3 className="p-2 my-2 mx-0">Add a new Address</h3>
				<form className="input-form flex-column flex-gap-1 flex-grow-1 flex-wrap">
					{addressFormFields.map(({ fieldName, label }) => (
						<section
							className={`input-container flex-column m-1 ${
								addressFormState["address"][fieldName].length > 0 ||
								addressFormState["focus"][fieldName]
									? "focused"
									: ""
							}`}
							key={`addressForm-${fieldName}`}
						>
							<input
								id={fieldName}
								className="textbox-content p-3"
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
						className="cursor-pointer outline-btn cancel-btn p-5 b-radius-2 mx-5 mb-0 mt-5 text-bold flex-grow-1"
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
		</div>
	);
};

export { AddressFormModal };
