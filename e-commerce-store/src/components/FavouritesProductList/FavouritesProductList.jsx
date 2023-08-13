import { useState } from "react";
import styles from "./FavouritesProductList.module.css";
import Remove from "../../assets/remove.svg";
import Bag from "../../assets/bag.svg";

import SweaterImg from "../../assets/products/sweater.jpg";

function FavouritesProductList() {
    const [productsInCart] = useState([
        {
            name: "Biały Sweter",
            brand: "SunTzu",
            price: "199zł",
            image: SweaterImg,
            sku: "abcde",
            size: "XL",
        },
        {
            name: "Biały Sweter",
            brand: "SunTzu",
            price: "199zł",
            image: SweaterImg,
            sku: "abcdef",
            size: "M",
        },
    ]);

    return (
        <div className={styles.container}>
            <h2>Ulubione</h2>
            {productsInCart.map((product) => (
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
            ))}
        </div>
    );
}

export { FavouritesProductList };
