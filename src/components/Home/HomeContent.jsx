import { Banner, Categories, Brands } from ".";
const HomeContent = () => {
	return (
		<main className="main flex-row justify-content-center align-center flex-wrap">
			<Banner />
			<section className="rui-main--heading-container no-border m-2-0">
				<Categories />
				<Brands />
			</section>
		</main>
	);
};

export { HomeContent };
