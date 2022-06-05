import { AuthenticationContent } from "components";
import { useDocumentTitle } from "custom-hooks";
const AuthenticationPage = () => {
	useDocumentTitle("Auth | Ripple Store");
	return <AuthenticationContent />;
};
export { AuthenticationPage };
