import styles from "./Products.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import SweaterImg from "../../assets/products/sweater.jpg";
import { Pagination } from "../Pagination/Pagination";

function Products() {
    const products = [
        {
            name: "Biały Sweter",
            price: "199zł",
            image: SweaterImg,
            sku: "abcde",
        },
        {
            name: "Biały Sweter",
            price: "199zł",
            image: SweaterImg,
            sku: "abcd",
        },

        {
            name: "Biały Sweter",
            price: "199zł",
            image: SweaterImg,
            sku: "abc",
        },

        {
            name: "Biały Sweter",
            price: "199zł",
            image: SweaterImg,
            sku: "abcdef",
        },
        {
            name: "Biały Sweter",
            price: "199zł",
            image: SweaterImg,
            sku: "abcde",
        },
        {
            name: "Biały Sweter",
            price: "199zł",
            image: SweaterImg,
            sku: "abcd",
        },

        {
            name: "Biały Sweter",
            price: "199zł",
            image: SweaterImg,
            sku: "abc",
        },

        {
            name: "Biały Sweter",
            price: "199zł",
            image: SweaterImg,
            sku: "abcdef",
        },
        {
            name: "Biały Sweter",
            price: "199zł",
            image: SweaterImg,
            sku: "abcde",
        },
        {
            name: "Biały Sweter",
            price: "199zł",
            image: SweaterImg,
            sku: "abcd",
        },

        {
            name: "Biały Sweter",
            price: "199zł",
            image: SweaterImg,
            sku: "abc",
        },

        {
            name: "Biały Sweter",
            price: "199zł",
            image: SweaterImg,
            sku: "abcdef",
        },
    ];
    return (
        <>
            <div className={styles.products}>
                {products.map((product) => (
                    <ProductCard
                        key={product.sku}
                        product={product}
                    ></ProductCard>
                ))}
            </div>
            <Pagination />
        </>
    );
}

export { Products };
