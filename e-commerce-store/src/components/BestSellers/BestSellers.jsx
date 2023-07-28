import styles from "./BestSellers.module.css";
import SweaterImg from "../../assets/products/sweater.jpg";
import { ProductCard } from "../ProductCard/ProductCard";
import { MaxWidthContainer } from "../MaxWidthContainer/MaxWidthContainter";

function BestSellers() {
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
            sku: "abcdefg",
        },
    ];

    return (
        <MaxWidthContainer>
            <h2>Sprawdź nasze bestellery</h2>

            <div className={styles["products-wrapper"]}>
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
