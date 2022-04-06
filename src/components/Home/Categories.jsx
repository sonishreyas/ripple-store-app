import { useCategoriesDataHook } from "../../custom-hooks";
const Categories = () => {
    const categoriesData = useCategoriesDataHook();

    return (
        <>  
            <h2 className="rui-main--heading my-10 home-heading h1 text-bold">Featured Categories</h2>
            <section className="flex-row flex-wrap flex-gap-2 align-center justify-content-center m-2-0">
            {
                categoriesData.length !== 0 ? 
                    categoriesData[0].featuredCategories.map(({_id, name, discountOffer, imgURL}) => 
                        <article className="card vertical card-shadow p-5 b-radius-2" key={_id}>
                            <section
                                className="card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2">
                                <img src={imgURL}
                                    alt={`${name}`} className="card-image b-radius-2 mt-2" />
                                <section className="card-content  p-5 pb-0 text-center text-bold">
                                    <h2 className="text-cta-color">{name}</h2>
                                    <p className="p-3">{discountOffer}</p>
                                </section>
                            </section>
                        </article>
                    ): <></>
            }
            </section>
        </>
    );
}

export { Categories };