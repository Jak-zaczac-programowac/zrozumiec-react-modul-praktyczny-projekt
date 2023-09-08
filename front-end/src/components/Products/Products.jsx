import styles from "./Products.module.css";
import { Product } from "../Product/Product";

export function Products({ products }) {
    return (
        <div className={styles.products}>
            <h2>Swetry</h2>
            <div className={styles.productsList}>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
