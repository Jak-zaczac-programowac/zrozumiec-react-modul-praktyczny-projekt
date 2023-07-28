import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
    return (
        <div className={styles["product-card"]}>
            <div className={styles.favourite} />
            <img src={product.image}></img>
            <div>
                <p className={styles.name}>{product.name}</p>
                <p className={styles["product-price"]}>{product.price}</p>
            </div>
        </div>
    );
}

export { ProductCard };
