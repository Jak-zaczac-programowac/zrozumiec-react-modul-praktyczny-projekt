import { BlockContainer } from "../../components/BlockContainer/BlockContainer";
import { Breadrcumbs } from "../../components/BreadCrumbs/Breadcrumbs";
import { ExpandableTree } from "../../components/ExpandableTree/ExpandableTree";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { MaxWidthContainer } from "../../components/MaxWidthContainer/MaxWidthContainter";
import { Outlet } from "react-router-dom";

function ProductContainer() {
    return (
        <MaxWidthContainer>
            <FlexContainer>
                <ExpandableTree />
                <BlockContainer>
                    <Breadrcumbs />
                    <h2>Spodnie</h2>
                    <Outlet />
                </BlockContainer>
            </FlexContainer>
        </MaxWidthContainer>
    );
}

export { ProductContainer };
