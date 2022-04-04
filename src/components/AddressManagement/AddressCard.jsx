import { useAddress, useAddressForm } from "../../context";
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

	const handleEditAddress = () => {
		setShowAddressFormModal(true);
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
	};
	const handleDeleteAddress = (e) => {
		removeFromAddressHandler(e, addressId, addressDispatch, addressState);
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
