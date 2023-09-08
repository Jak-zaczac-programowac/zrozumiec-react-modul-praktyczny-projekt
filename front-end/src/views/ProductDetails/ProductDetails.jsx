import styles from "./ProductDetails.module.css";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Details } from "../../components/Details/Details";

import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { Layout } from "../../components/Layout/Layout";
import { Photos } from "../../components/Photos/Photos";

export function ProductDetails() {
    const product = {
        id: 1,
        gender: "men",
        category: "odziez",
        subCategory: "koszulki",
        productName: "T-Shirt",
        brand: "Top Brand",
        pricePLN: 49,
        priceUSD: 10,
        photos: [
            "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
            "http://localhost:3000/product-photos/man-t-shirt-2.jpg",
            "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
        ],
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
        maintenanceInfo:
            "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibusdam voluptatem vitae voluptatum optio ab alias quisquam? Soluta ad excepturi nihil facere perspiciatis?",
    };

    return (
        <Layout>
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
        </Layout>
    );
}
