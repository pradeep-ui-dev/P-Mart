import AccordionWrapper from "../shared/accordion/Index";
import CategoryWrapper from "../shared/product/popular-categories/CategoryWrapper";
import SingleProductBanner from "../shared/SingleProductBanner"

const HomePage = () => {
    return(
        <>
            <CategoryWrapper/>
            <SingleProductBanner/>
            <AccordionWrapper/>
        </>
    )
}

export default HomePage;