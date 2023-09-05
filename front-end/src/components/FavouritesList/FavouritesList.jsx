import styles from "./FavouritesList.module.css";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";

export function FavouritesList({ products }) {
    return (
        <div className={styles.favouritesList}>
            <h2>Ulubione</h2>
            <div>
                {products.map((product) => (
                    <FavouriteProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
