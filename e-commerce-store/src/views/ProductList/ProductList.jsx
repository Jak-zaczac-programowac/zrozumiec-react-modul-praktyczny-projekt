import { BlockContainer } from "../../components/BlockContainer/BlockContainer";
import { Breadrcumbs } from "../../components/BreadCrumbs/Breadcrumbs";
import { ExpandableTree } from "../../components/ExpandableTree/ExpandableTree";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { MaxWidthContainer } from "../../components/MaxWidthContainer/MaxWidthContainter";
import { Products } from "../../components/Products/Products";

function ProductList() {
    console.log("working?");
    return (
        <>
            <MaxWidthContainer>
                <FlexContainer>
                    <ExpandableTree />
                    <BlockContainer>
                        <Breadrcumbs />
                        <h2>Spodnie</h2>
                        <Products />
                    </BlockContainer>
                </FlexContainer>
            </MaxWidthContainer>
        </>
    );
}

export { ProductList };
