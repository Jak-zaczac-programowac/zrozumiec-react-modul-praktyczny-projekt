import styles from "./FavouriteProduct.module.css";
import Remove from "../../assets/remove.svg";
import Bag from "../../assets/bag.svg";

function FavouriteProduct({ product }) {
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

                <div className={styles.buttons}>
                    <button className={styles.button}>
                        <img src={Remove}></img>
                        <span>Usuń</span>
                    </button>

                    <button className={styles.button}>
                        <img src={Bag}></img>
                        <span>Dodaj do koszyka</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export { FavouriteProduct };
