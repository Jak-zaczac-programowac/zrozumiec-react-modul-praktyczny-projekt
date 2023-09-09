import { useLoaderData } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { Pagination } from "../../components/Pagination/Pagination";
import { Products } from "../../components/Products/Products";

export function ProductsList() {
    const { products, pages } = useLoaderData();

    return (
        <FlexContainer>
            <ExpandableMenu />
            <div>
                <Breadcrumbs />
                <Products products={products} />
                <Pagination numberOfPages={pages} />
            </div>
        </FlexContainer>
    );
}
