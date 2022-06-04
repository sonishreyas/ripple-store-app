import { ProfileContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const Profile = () => {
	useDocumentTitle("Profile | Ripple Store");
	<ProfileContent />;
};

export { Profile };
