import styles from "./CartProductList.module.css";
import Remove from "../../assets/remove.svg";
import { useCart } from "../../hooks/useCart";

function CartProductList() {
    const [cartItems] = useCart();

    return (
        <div className={styles.container}>
            <h2>Koszyk</h2>
            {cartItems.map((product) => (
                <div key={product.sku} className={styles.cartProduct}>
                    <img className={styles.image} src={product.image}></img>
                    <div className={styles.cartProductDescription}>
                        <div className={styles.title}>
                            <p>
                                {product.brand} {product.name}
                            </p>
                            <p className={styles.price}>{product.price}</p>
                        </div>
                        <div className={styles.details}>
                            <p>
                                Rozmiar: <span>{product.size}</span>
                            </p>
                            <p>
                                Cena: <span>{product.price}</span>
                            </p>
                        </div>

                        <button className={styles.removeButton}>
                            <img src={Remove}></img>
                            <span>Usuń</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export { CartProductList };
