import styles from "./ProductDetails.module.css";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Details } from "../../components/Details/Details";

import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { Photos } from "../../components/Photos/Photos";
import { useLoaderData } from "react-router-dom";

export function ProductDetails() {
    const product = useLoaderData();

    return (
        <FlexContainer>
            <ExpandableMenu />
            <div className={styles.rightSide}>
                <Breadcrumbs />
                <FlexContainer>
                    <Photos product={product} />
                    <Details product={product} />
                </FlexContainer>
            </div>
        </FlexContainer>
    );
}
