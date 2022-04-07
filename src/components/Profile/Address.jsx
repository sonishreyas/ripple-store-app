import { useAddress } from "../../context";
import { AddNewAddressBtn } from "../AddressManagement";
import { AddressCard } from "../AddressManagement";
const Address = () => {
	const { addressState, addressDispatch, setShowAddressModal } = useAddress();
	const handleAddressModal = () => setShowAddressModal(false);
	return (
		<div className="address-container">
			<ul className="radio-btn-container outline-container b-radius-2  p-5 m-10">
				<li
					className="profile-header flex-row justify-content-space-between align-center flex-wrap p-5 my-0 mx-5"
					key="address-header"
				>
					<h1 className="form-heading text-bold p-2 h1">Address</h1>
				</li>
				{addressState.addressData.length ? (
					addressState.addressData.map(
						({
							addressId,
							name,
							houseNo,
							society,
							area,
							city,
							state,
							country,
							pincode,
						}) => (
							<li
								key={`address-${addressId}`}
								className="no-list form-heading text-bold py-5 px-0 h3"
							>
								<label
									className={`basic-chip flex-row align-center flex-wrap flex-gap-1 h6 filter-chip cursor-pointer ${
										addressId === addressState.selectedAddress.addressId
											? "fliter-chip-selected"
											: ""
									}`}
								>
									<input
										className="filters"
										type="radio"
										name="address"
										value={addressId}
										checked={
											addressId === addressState.selectedAddress.addressId
												? true
												: false
										}
										onChange={() =>
											addressDispatch({
												type: "SET_ACTIVE_ADDRESS",
												payload: {
													selectedAddress: {
														addressId,
														name,
														houseNo,
														society,
														area,
														city,
														state,
														country,
														pincode,
													},
												},
											})
										}
									/>
									<i className="fa-solid fa-circle-check"></i>
									<article className="basic-chip-content">
										<AddressCard
											props={{
												addressId,
												name,
												houseNo,
												society,
												area,
												city,
												state,
												country,
												pincode,
											}}
										/>
									</article>
								</label>
							</li>
						)
					)
				) : (
					<h4 className="text-center m-5 p-5">
						{" "}
						No Address Found. Please add one.
					</h4>
				)}
				<li
					key="add-address-btn"
					className="no-list form-heading text-bold py-5 px-0 h4"
				>
					<AddNewAddressBtn />
				</li>
			</ul>
		</div>
	);
};

export { Address };
