import styles from "./CartSummary.module.css";

import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR_ICON from "../../assets/car.svg";

export function CartSummary({ products }) {
    const deliveryCost = 49;
    const minSumForFreeDelivery = 500;

    let sum = 0;
    products.forEach((product) => {
        sum += product.pricePLN;
    });

    const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

    return (
        <div className={styles.cartSummary}>
            <h2>Podsumowanie</h2>
            <div className={styles.cartRow}>
                <p>Wartość produktów: </p>
                <p>{sum}zł</p>
            </div>
            <div className={styles.cartRow}>
                <p>Koszt dostawy:</p>
                <p>{sum > minSumForFreeDelivery ? 0 : deliveryCost}zł</p>
            </div>
            <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
                <p>Do zapłaty:</p>
                <p>{totalCost}zł</p>
            </div>
            <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
            <div className={styles.deliveryInfo}>
                <img src={CAR_ICON} />
                <p>Darmowa dostawa od {minSumForFreeDelivery}zł</p>
            </div>
        </div>
    );
}
