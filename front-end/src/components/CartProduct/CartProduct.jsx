import styles from "./CartProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";
import { Price } from "../Price/Price";

export function CartProduct({ product }) {
    return (
        <div className={styles.favouriteProduct}>
            <img src={product.photos[0]} />
            <div className={styles.favouriteProductInfo}>
                <div className={styles.topRow}>
                    <h3>
                        {product.brand} {product.productName}
                    </h3>
                    <p>
                        <Price product={product} />
                    </p>
                </div>
                <p className={styles.priceRow}>
                    <span>Cena: </span>
                    <Price product={product} />
                </p>
                <div className={styles.buttonRow}>
                    <button>
                        <img src={REMOVE_ICON} />
                        Usuń
                    </button>
                </div>
            </div>
        </div>
    );
}
