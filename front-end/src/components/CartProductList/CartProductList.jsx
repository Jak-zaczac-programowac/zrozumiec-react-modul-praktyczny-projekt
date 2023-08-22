import styles from "./CartProductList.module.css";

import { CartProduct } from "../CartProduct/CartProduct";

function CartProductList({ products }) {
    return (
        <div className={styles.container}>
            <h2>Koszyk</h2>
            {products.map((product) => (
                <CartProduct product={product} key={product.id} />
            ))}
        </div>
    );
}

export { CartProductList };
