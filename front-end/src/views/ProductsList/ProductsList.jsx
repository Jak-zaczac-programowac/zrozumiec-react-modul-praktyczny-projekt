import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Products } from "../../components/Products/Products";
import { Pagination } from "../../components/Pagination/Pagination";
import { useLoaderData, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
export function ProductsList() {
    const products = useLoaderData();
    const params = useParams();

    const foundCategory = CATEGORIES.find((c) => c.path === params.category);

    let foundSubcategory;

    if (params.subcategory) {
        foundSubcategory = foundCategory.subcategories.find(
            (sc) => sc.path === params.subcategory
        );
    }

    return (
        <FlexContainer>
            <ExpandableMenu />
            <div>
                <Breadcrumbs />
                <Products
                    headerText={
                        foundSubcategory
                            ? foundSubcategory.categoryName
                            : foundCategory.categoryName
                    }
                    products={products}
                />
                <Pagination numberOfPages={5} />
            </div>
        </FlexContainer>
    );
}
