import { BlockContainer } from "../../components/BlockContainer/BlockContainer";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ExpandableTree } from "../../components/ExpandableTree/ExpandableTree";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { MaxWidthContainer } from "../../components/MaxWidthContainer/MaxWidthContainter";
import {
    Outlet,
    useLoaderData,
    useParams,
    useSearchParams,
} from "react-router-dom";
import { CATEGORIES } from "../../constants/productCategories";
import { Pagination } from "../../components/Pagination/Pagination";

function ProductsContainer() {
    const params = useParams();
    const { products, numberOfPages } = useLoaderData();

    // przejscie na strone produktu!

    let foundCategory = CATEGORIES.find(({ path }) => path === params.category);

    let foundSubcategory;

    if (params.subcategory) {
        foundSubcategory = foundCategory.subCategories.find(
            ({ path }) => path == params.subcategory
        );
    }

    return (
        <MaxWidthContainer>
            <FlexContainer>
                <ExpandableTree />
                <BlockContainer>
                    <Breadcrumbs />
                    <h2>
                        {foundSubcategory
                            ? foundSubcategory.categoryName
                            : foundCategory.categoryName}
                    </h2>
                    <Pagination />
                </BlockContainer>
            </FlexContainer>
        </MaxWidthContainer>
    );
}

export { ProductsContainer };
