import { HomeContent } from "components";
import { useDocumentTitle } from "custom-hooks";

const Home = () => {
	useDocumentTitle("Home | Ripple Store");
	return <HomeContent />;
};

export { Home };
