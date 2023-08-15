import { BlockContainer } from "../../components/BlockContainer/BlockContainer";
import { Breadcrumbs } from "../../components/Breadrcumbs/Breadcrumbs";
import { ExpandableTree } from "../../components/ExpandableTree/ExpandableTree";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { MaxWidthContainer } from "../../components/MaxWidthContainer/MaxWidthContainter";
import { Outlet, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/productCategories";

function ProductsContainer() {
    const params = useParams();

    let foundCategory = CATEGORIES.find(({ path }) => path === params.category);

    if (params.subcategory) {
        foundCategory = foundCategory.items.find(
            ({ path }) => path == params.subcategory
        );
    }

    return (
        <MaxWidthContainer>
            <FlexContainer>
                <ExpandableTree />
                <BlockContainer>
                    <Breadcrumbs />
                    <h2>{foundCategory.categoryName}</h2>
                    <Outlet />
                </BlockContainer>
            </FlexContainer>
        </MaxWidthContainer>
    );
}

export { ProductsContainer };
