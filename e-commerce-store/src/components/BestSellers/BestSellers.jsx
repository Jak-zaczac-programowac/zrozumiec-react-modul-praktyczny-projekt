import styles from "./BestSellers.module.css";
import SweaterImg from "../../assets/products/sweater.jpg";

function Product({ product }) {
    return (
        <div className={styles.product}>
            <img src={product.image}></img>
            <div>
                <p className={styles.name}>{product.name}</p>
                <p className={styles["product-price"]}>{product.price}</p>
            </div>
        </div>
    );
}

function BestSellers() {
    const products = [
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
            sku: "abcdef",
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
            sku: "abcdef",
        },
    ];

    return (
        <div className={styles.container}>
            <h2>Sprawdź nasze bestellery</h2>

            <div className={styles["products-wrapper"]}>
                {products.map((product) => (
                    <Product product={product} key={product.sku}></Product>
                ))}
            </div>
        </div>
    );
}

export { BestSellers };
