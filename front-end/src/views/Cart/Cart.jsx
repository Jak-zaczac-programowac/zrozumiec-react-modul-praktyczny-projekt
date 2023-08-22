import { CartProductList } from "../../components/CartProductList/CartProductList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { Layout } from "../../components/Layout/Layout";
import styles from "./Cart.module.css";
import SweaterImg from "../../assets/products/sweater.jpg";

function Cart() {
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
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abc",
        },

        {
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abcdef",
        },
    ];

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <CartProductList products={products} />
                    <CartSummary products={products} />
                </div>
            </div>
        </Layout>
    );
}

export { Cart };
