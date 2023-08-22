import styles from "./CartProduct.module.css";
import Remove from "../../assets/remove.svg";

function CartProduct({ product }) {
    return (
        <div key={product.id} className={styles.cartProduct}>
            <img className={styles.image} src={product.images[0]}></img>
            <div className={styles.cartProductDescription}>
                <div className={styles.title}>
                    <p>
                        {product.brand} {product.name}
                    </p>
                    <p className={styles.price}>{product.pricePLN}zł</p>
                </div>
                <div className={styles.details}>
                    <p>
                        Cena: <span>{product.pricePLN}zł</span>
                    </p>
                </div>

                <button className={styles.removeButton}>
                    <img src={Remove}></img>
                    <span>Usuń</span>
                </button>
            </div>
        </div>
    );
}

export { CartProduct };
