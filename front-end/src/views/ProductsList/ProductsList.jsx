import styles from "./ProductsList.module.css";
import { Layout } from "../../components/Layout/Layout";
import SweaterImg from "../../assets/products/sweater.jpg";
import { Pagination } from "../../components/Pagination/Pagination";
import { TreeMenu } from "../../components/TreeMenu/TreeMenu";
import { Products } from "../../components/Products/Products";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

function ProductsList() {
    const products = [
        {
            id: 2,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abcde",
        },
        {
            id: 3,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abcd",
        },

        {
            id: 4,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abc",
        },

        {
            id: 5,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abcdef",
        },
        {
            id: 6,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abcde",
        },
        {
            id: 7,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abcd",
        },

        {
            id: 8,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abc",
        },

        {
            id: 9,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abcdef",
        },
    ];

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

    return (
        <Layout>
            <div className={styles.container}>
                <TreeMenu
                    categories={categories}
                    activeCategory="odziez"
                ></TreeMenu>
                <div className={styles.rigthContainer}>
                    <Breadcrumbs />
                    <Products products={products}></Products>
                    <Pagination />
                </div>
            </div>
        </Layout>
    );
}

export { ProductsList };
