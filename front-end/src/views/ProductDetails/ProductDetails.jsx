import { Photos } from "../../components/Photos/Photos";
import { Details } from "../../components/Details/Details";
import styles from "./ProductDetails.module.css";
import { Layout } from "../../components/Layout/Layout";
import SweaterImg from "../../assets/products/sweater.jpg";
import { TreeMenu } from "../../components/TreeMenu/TreeMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

function ProductDetails() {
    const categories = [
        {
            categoryName: "Odzież",
            path: "odziez",
            subCategories: [
                {
                    categoryName: "Koszulki",
                    path: "koszulki",
                },
                {
                    categoryName: "Swetry",
                    path: "swetry",
                },
                {
                    categoryName: "Spodnie",
                    path: "spodnie",
                },
            ],
        },
        {
            categoryName: "Obuwie",
            path: "obuwie",
            subCategories: [
                {
                    categoryName: "Elegancke",
                    path: "eleganckie",
                },
                {
                    categoryName: "Sportowe",
                    path: "sportowe",
                },
                {
                    categoryName: "Sneakersy",
                    path: "sneakersy",
                },
            ],
        },
        {
            categoryName: "Akcesoria",
            path: "akcesoria",
            subCategories: [
                {
                    categoryName: "Torby",
                    path: "torby",
                },
                {
                    categoryName: "zegarki",
                    path: "zegarki",
                },
            ],
        },
    ];

    const product = {
        id: 2,
        name: "Biały Sweter",
        brand: "Test Brand",
        pricePLN: 199,
        priceUSD: 49,
        images: [SweaterImg, SweaterImg, SweaterImg],
        sku: "abcde",
    };

    return (
        <Layout>
            <div className={styles.container}>
                <TreeMenu
                    categories={categories}
                    activeCategory="odziez"
                ></TreeMenu>
                <div className={styles.rigthContainer}>
                    <div>
                        <Breadcrumbs />
                        <Photos product={product} />
                    </div>
                    <Details product={product} />
                </div>
            </div>
        </Layout>
    );
}

export { ProductDetails };
