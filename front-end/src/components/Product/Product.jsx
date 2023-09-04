import styles from "./Product.module.css";
import { Link } from "react-router-dom";

export function Product({ product }) {
    return (
        <Link className={styles.product}>
            <div className={styles.heart} />
            <img src={product.photos[0]} />
            <h3>{product.productName}</h3>
            <p>{product.pricePLN}zł</p>
        </Link>
    );
}
