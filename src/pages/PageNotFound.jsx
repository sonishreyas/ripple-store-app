import { useDocumentTitle } from "custom-hooks";

const PageNotFound = () => {
	useDocumentTitle("404 - Page not found | Ripple");
	return (
		<main className="main flex-column justify-content-center align-center flex-gap-1">
			<div className="homepage-heading">
				<i className="text-cta-color">404 </i>
			</div>
			<div className="homepage-heading">
				<i className="text-cta-color">Page Not Found</i>
			</div>
		</main>
	);
};
export { PageNotFound };
