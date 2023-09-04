import styles from "./Bestsellers.module.css";

import { Product } from "../Product/Product";
export function Bestsellers({ products }) {
    return (
        <div className={styles.bestsellers}>
            <h2>Sprawdź nasze bestellery</h2>
            <div className={styles.productsWrapper}>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
