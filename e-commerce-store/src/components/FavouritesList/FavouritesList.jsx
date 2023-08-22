import styles from "./FavouritesList.module.css";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";

function FavouritesList({ products }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2>Ulubione</h2>
                {products.map((product) => (
                    <FavouriteProduct product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}

export { FavouritesList };
