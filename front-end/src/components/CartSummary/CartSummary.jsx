import styles from "./CartSummary.module.css";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR_ICON from "../../assets/car.svg";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";

export function CartSummary({ products }) {
    const [currency] = useContext(CurrencyContext);

    const deliveryCosts = {
        PLN: 49,
        USD: 12,
    };

    const freeDeliverySums = {
        PLN: 500,
        USD: 120,
    };

    const deliveryCost = deliveryCosts[currency];
    const minSumForFreeDelivery = freeDeliverySums[currency];

    let sum = 0;
    products.forEach((product) => {
        sum +=
            currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD;
    });

    const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

    const currencySign = CURRENCY_SIGN[currency];

    return (
        <div className={styles.cartSummary}>
            <h3>Podsumowanie</h3>
            <div className={styles.cartRow}>
                <p>Wartość produktów: </p>
                <p>
                    {sum}
                    {currencySign}
                </p>
            </div>
            <div className={styles.cartRow}>
                <p>Koszt dostawy:</p>
                <p>
                    {sum > minSumForFreeDelivery ? 0 : deliveryCost}
                    {currencySign}
                </p>
            </div>
            <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
                <p>Do zapłaty:</p>
                <p>
                    {totalCost}
                    {currencySign}
                </p>
            </div>

            <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
            <div className={styles.deliveryInfo}>
                <img src={CAR_ICON} />
                <p>
                    Darmowa dostawa od {minSumForFreeDelivery}
                    {currencySign}
                </p>
            </div>
        </div>
    );
}
