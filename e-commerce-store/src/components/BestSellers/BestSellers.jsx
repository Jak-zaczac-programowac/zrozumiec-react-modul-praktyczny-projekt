import styles from "./BestSellers.module.css";
import SweaterImg from "../../assets/products/sweater.jpg";
import { ProductCard } from "../ProductCard/ProductCard";
import { MaxWidthContainer } from "../MaxWidthContainer/MaxWidthContainter";

function BestSellers() {
    const products = [
        {
            id: 2,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            image: SweaterImg,
            sku: "abcde",
        },
        {
            id: 3,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            image: SweaterImg,
            sku: "abcd",
        },

        {
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            image: SweaterImg,
            sku: "abc",
        },

        {
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            image: SweaterImg,
            sku: "abcdef",
        },
        {
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            image: SweaterImg,
            sku: "abcdefg",
        },
    ];

    return (
        <MaxWidthContainer>
            <h2>Sprawdź nasze bestellery</h2>

            <div className={styles.productsWrapper}>
                {products.map((product) => (
                    <ProductCard
                        product={product}
                        key={product.sku}
                    ></ProductCard>
                ))}
            </div>
        </MaxWidthContainer>
    );
}

export { BestSellers };
