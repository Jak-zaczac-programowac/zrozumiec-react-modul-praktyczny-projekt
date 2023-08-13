import styles from "./ProductsList.module.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import SweaterImg from "../../assets/products/sweater.jpg";
import { Pagination } from "../../components/Pagination/Pagination";
import { Link } from "react-router-dom";

function ProductsList() {
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
                    <Link key={product.sku} to={product.sku}>
                        <ProductCard product={product}></ProductCard>
                    </Link>
                ))}
            </div>
            <Pagination />
        </>
    );
}

export { ProductsList };
