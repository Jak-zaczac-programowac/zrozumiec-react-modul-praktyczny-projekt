import styles from "./FavouriteProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";
import BAG_ICON from "../../assets/bag.svg";
import { Form, useFetcher } from "react-router-dom";

export function FavouriteProduct({ favouriteProduct: { product, id } }) {
    const { submit } = useFetcher();
    return (
        <div className={styles.favouriteProduct}>
            <img src={product.photos[0]} />
            <div className={styles.favouriteProductInfo}>
                <div className={styles.topRow}>
                    <h3>
                        {product.brand} {product.productName}
                    </h3>
                    <p>{product.pricePLN}zł</p>
                </div>
                <p className={styles.priceRow}>
                    <span>Cena: </span>
                    {product.pricePLN}zł
                </p>
                <div className={styles.buttonRow}>
                    <Form
                        onSubmit={() => {
                            submit(null, {
                                method: "DELETE",
                                action: `/delete-from-favourites/${id}`,
                            });
                        }}
                    >
                        <button type="submit">
                            <img src={REMOVE_ICON} />
                            Usuń
                        </button>
                    </Form>
                    <button>
                        <img src={BAG_ICON} />
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        </div>
    );
}
