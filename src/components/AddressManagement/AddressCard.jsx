import { useAddress, useAddressForm } from "context";
import { removeFromAddressHandler } from "utils";

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

	const handleEditAddress = () => {
		addressFormDispatch({
			type: "UPDATE_ADDRESS_ID",
			payload: { addressId: addressId },
		});
		const formField = {
			type: "UPDATE_ADDRESS",
			payload: {
				address: {
					name: name,
					houseNo: houseNo,
					society: society,
					area: area,
					country: country,
					state: state,
					city: city,
					pincode: pincode,
				},
			},
		};
		addressFormDispatch(formField);
		setShowAddressFormModal(true);
	};
	const handleDeleteAddress = (e) => {
		removeFromAddressHandler(e, addressId, addressDispatch, addressState);
	};

	return (
		<div className="flex-column justify-content-center flex-wrap b-radius-2 w-100 h-auto">
			<h3 className="p-2">{name}</h3>
			<p className="p-2">
				{houseNo} , {society}, {area}
			</p>
			<p className="p-2">{city}</p>
			<p className="p-2">{state}</p>
			<p className="p-2">{country}</p>
			<p className="p-2">{pincode}</p>
			<section className="card-footer flex-row flex-grow-1 justify-content-center flex-gap-1 py-5 px-0 ">
				<button
					className="primary-btn edit-btn p-2 b-radius-2 my-0 text-bold flex-grow-1 w-100 h5 cursor-pointer"
					onClick={handleEditAddress}
				>
					Edit
				</button>
				<button
					className="outline-btn delete-btn p-2 b-radius-2 my-0 text-bold flex-grow-1 w-100 h5 cursor-pointer"
					onClick={handleDeleteAddress}
				>
					Delete
				</button>
			</section>
		</div>
	);
};

export { AddressCard };
