import Delivery from "../../assets/delivery.svg";

import { BrandButton } from "../BrandButton/BrandButton";
import styles from "./CartSummary.module.css";

function CartSummary() {
    const cartSummary = {};

    return (
        <div className={styles.summary}>
            <h3>Podsumowanie</h3>
            <div>
                <p>Wartość produktów: </p>
                <p>{cartSummary.totalPrice} zł</p>
            </div>
            <div>
                <p>Koszt dostawy: </p>
                <p>49zł</p>
            </div>

            <div className={styles.summaryRow}>
                <p>Do zapłaty: </p>
                <p>447zł</p>
            </div>

            <BrandButton>Do kasy</BrandButton>

            <div className={styles.details}>
                <img src={Delivery} />
                <p>Darmowa dostawa od 500zł</p>
            </div>
        </div>
    );
}

export { CartSummary };
