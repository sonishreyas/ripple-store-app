import { ProfileTabs } from ".";
import { useAddress } from "../../context";
import { AddressFormModal } from "../AddressManagement";
import { useEffect } from "react";
const ProfileContent = () => {
	const { showAddressFormModal, setShowAddressFormModal } = useAddress();
	useEffect(() => {
		setShowAddressFormModal(false);
	}, []);
	return (
		<>
			<main className="main flex-column justify-content-center align-center flex-gap-1">
				<ProfileTabs />
			</main>
			{showAddressFormModal && <AddressFormModal />}
		</>
	);
};

export { ProfileContent };
