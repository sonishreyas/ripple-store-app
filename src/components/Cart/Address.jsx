import { useAddress } from "context";

const Address = () => {
	const { showAddressModal, setShowAddressModal, addressState } = useAddress();
	return (
		<>
			<li className="no-list">
				<article className="card basic-card card-shadow cart-deliver-container flex-row justify-content-space-between m-auto card-shadow p-5 b-radius-2">
					{Object.keys(addressState.selectedAddress).length > 0 ? (
						<div className="delivery-address-container">
							<p className="m-5">
								Deliver to:{" "}
								<b>
									{addressState.selectedAddress.name},{" "}
									{addressState.selectedAddress.pincode}
								</b>
							</p>
							<p className="m-5">
								{addressState.selectedAddress.houseNo},{" "}
								{addressState.selectedAddress.society},{" "}
								{addressState.selectedAddress.area},{" "}
								{addressState.selectedAddress.city},{" "}
								{addressState.selectedAddress.state},
								{addressState.selectedAddress.country}.
							</p>
						</div>
					) : (
						<div className="delivery-address-container">
							<p className="m-5">
								Deliver to: No Address Selected. Please select an address or add
								one.
							</p>
						</div>
					)}
					<button
						className="outline-btn change-address-btn p-5 b-radius-2 mx-5 my-0 text-bold cursor-pointer"
						onClick={() => setShowAddressModal(true)}
					>
						Change
					</button>
				</article>
			</li>
		</>
	);
};

export { Address };
