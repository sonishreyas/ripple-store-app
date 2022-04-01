import { useAddress, useAddressForm, useAuth } from "../../context";
import { removeFromAddressHandler } from "../../utils";

const AddressCard = ({ props }) => {
	const {
		addressId,
		name,
		houseNo,
		society,
		area,
		city,
		state,
		country,
		pincode,
	} = props;
	const { setShowAddressFormModal, addressDispatch, addressState } =
		useAddress();
	const { addressFormDispatch } = useAddressForm();
	const { authState } = useAuth();

	const setValueHandler = (value, type) => {
		const fieldValue = { value: value, type: type };
		addressFormDispatch(fieldValue);
	};

	const handleEditAddress = () => {
		setShowAddressFormModal(true);
		addressFormDispatch({ addressId: addressId });
		setValueHandler(name, "UPDATE_NAME");
		setValueHandler(houseNo, "UPDATE_HOUSE_NO");
		setValueHandler(society, "UPDATE_SOCIETY");
		setValueHandler(area, "UPDATE_AREA");
		setValueHandler(city, "UPDATE_CITY");
		setValueHandler(state, "UPDATE_STATE");
		setValueHandler(country, "UPDATE_COUNTRY");
		setValueHandler(pincode, "UPDATE_PINCODE");
	};
	const handleDeleteAddress = (e) => {
		removeFromAddressHandler(
			e,
			addressId,
			authState.token,
			addressDispatch,
			addressState
		);
	};
	return (
		<div className="flex-column justify-content-center flex-wrap p-10 b-radius-2 w-100 h-auto">
			<h3 className="name p-2">{name}</h3>
			<p className="address p-2">
				{houseNo} , {society}, {area}
			</p>
			<p className="city p-2">{city}</p>
			<p className="state p-2">{state}</p>
			<p className="country p-2">{country}</p>
			<p className="pincode p-2">{pincode}</p>
			<section className="card-footer flex-row flex-grow-1 justify-content-center flex-gap-1 py-5 px-0 ">
				<button
					className="primary-btn edit-btn p-5 b-radius-2 mx-5 my-0 text-bold flex-grow-1 w-100 h5"
					onClick={handleEditAddress}
				>
					Edit
				</button>
				<button
					className="outline-btn delete-btn p-5 b-radius-2 mx-5 my-0 text-bold flex-grow-1 w-100 h5"
					onClick={handleDeleteAddress}
				>
					Delete
				</button>
			</section>
		</div>
	);
};

export { AddressCard };
