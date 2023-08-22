import { Product } from "../Product/Product.jsx";
import styles from "./Products.module.css";

function Products({ products }) {
    return (
        <div className={styles.products}>
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
}

export { Products };
