import { Link } from "react-router-dom";
import styles from "./Product.module.css";

function Product({ product }) {
    return (
        <Link>
            <div className={styles.productCard}>
                <img src={product.images[0]} />

                <button>
                    <div className={styles.favourite}></div>
                </button>

                <div>
                    <p className={styles.name}>{product.name}</p>
                    <p className={styles.productPrice}>{product.pricePLN} zł</p>
                </div>
            </div>
        </Link>
    );
}

export { Product };
