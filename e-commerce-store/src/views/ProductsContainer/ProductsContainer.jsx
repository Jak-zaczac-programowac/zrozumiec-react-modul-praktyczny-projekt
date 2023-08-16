import { BlockContainer } from "../../components/BlockContainer/BlockContainer";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ExpandableTree } from "../../components/ExpandableTree/ExpandableTree";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { MaxWidthContainer } from "../../components/MaxWidthContainer/MaxWidthContainter";
import { Outlet, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/productCategories";

function ProductsContainer() {
    const params = useParams();

    // przejscie na strone produktu!

    let foundCategory = CATEGORIES.find(({ path }) => path === params.category);

    if (params.subcategory) {
        foundCategory = foundCategory.items.find(
            ({ path }) => path == params.subcategory
        );
    }

    console.log(foundCategory);

    return (
        <MaxWidthContainer>
            <FlexContainer>
                <ExpandableTree />
                <BlockContainer>
                    <Breadcrumbs />
                    <h2>{foundCategory && foundCategory.categoryName}</h2>
                    <Outlet />
                </BlockContainer>
            </FlexContainer>
        </MaxWidthContainer>
    );
}

export { ProductsContainer };
