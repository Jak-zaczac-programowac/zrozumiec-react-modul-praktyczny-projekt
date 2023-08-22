import styles from "./FavouritesProductList.module.css";
import Remove from "../../assets/remove.svg";
import Bag from "../../assets/bag.svg";
import { Form, useFetcher } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

function FavouritesProductList() {
    const favouirites = useLoaderData();
    const { submit } = useFetcher();

    return (
        <div className={styles.container}>
            <h2>Ulubione</h2>
            {favouirites.map(({ product, id }) => (
                <div key={product.sku} className={styles.cartProduct}>
                    <img className={styles.image} src={product.photos[0]}></img>
                    <div className={styles.cartProductDescription}>
                        <div className={styles.title}>
                            <p>
                                {product.brand} {product.name}
                            </p>
                            <p className={styles.price}>{product.pricePLN}</p>
                        </div>
                        <div className={styles.details}>
                            <p>
                                Rozmiar: <span>{product.size}</span>
                            </p>
                            <p>
                                Cena: <span>{product.price}</span>
                            </p>
                        </div>

                        <div className={styles.buttons}>
                            <Form
                                onSubmit={() => {
                                    console.log(id);
                                    submit(null, {
                                        method: "DELETE",
                                        action: `/delete-from-favourites/${id}`,
                                    });
                                }}
                            >
                                <button className={styles.button}>
                                    <img src={Remove}></img>
                                    <span>Usuń</span>
                                </button>
                            </Form>
                            <button className={styles.button}>
                                <img src={Bag}></img>
                                <span>Dodaj do koszyka</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export { FavouritesProductList };
