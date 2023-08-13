import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
    return (
        <div className={styles.productCard}>
            <div className={styles.favourite} />
            <img src={product.image}></img>
            <div>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.productPrice}>{product.price}</p>
            </div>
        </div>
    );
}

export { ProductCard };
