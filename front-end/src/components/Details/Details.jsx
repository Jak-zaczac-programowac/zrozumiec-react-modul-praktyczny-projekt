import styles from "./Details.module.css";

import CAR_ICON from "../../assets/car.svg";
import RETURN_ICON from "../../assets/return.svg";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { Accordion } from "../Accordion/Accordion";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Details({ product }) {
    const [, addProductToCart] = useContext(CartContext);

    const accordionContent = [
        {
            title: "Opis produktu",
            content: product.description,
        },
        {
            title: "Wskazówki pielęgnacyjne",
            content: product.maintenanceInfo,
        },
    ];

    return (
        <div className={styles.details}>
            <h2>{product.brand}</h2>
            <p className={styles.productName}>{product.productName}</p>
            <p className={styles.price}>{product.pricePLN}zł</p>

            <FullWidthButton
                onClick={() => {
                    addProductToCart(product);
                }}
                isBlack={true}
            >
                Dodaj do koszyka
            </FullWidthButton>

            <ul className={styles.extraInfo}>
                <li>
                    <img src={CAR_ICON} />
                    Dostawa do 24h
                </li>
                <li>
                    <img src={RETURN_ICON} />
                    Zwrot do 100 dni!
                </li>
            </ul>

            <Accordion items={accordionContent} />
        </div>
    );
}
