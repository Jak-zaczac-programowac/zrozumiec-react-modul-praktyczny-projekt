import styles from "./Details.module.css";
import Return from "../../assets/return.svg";
import Delivery from "../../assets/delivery.svg";
import { Accordion } from "../Accordion/Accordion";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

function Details({ product }) {
    const accordionOptions = [
        {
            title: "Opis produktu",
            details:
                "Sweter z kolekcji Polo Ralph Lauren. Model z okrągłym dekoltem, wykonany z gładkiej dzianiny.",
        },
        {
            title: "Wskazówki pielęgnacyjne",
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, recusandae? Consectetur, adipisci eum. Esse, ipsam. Consequuntur, a similique adipisci voluptatem neque earum quo, tempora sapiente voluptates error facere eligendi mollitia!",
        },
    ];

    return (
        <div className={styles.productSummaryContainer}>
            <h2 className={styles.brand}>{product.brand}</h2>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>{product.pricePLN}zł</p>

            <FullWidthButton type="black">Dodaj do koszyka</FullWidthButton>

            <div className={styles.deliveryInfo}>
                <div>
                    <img src={Delivery}></img>
                    <p>Dostawa do 24h</p>
                </div>
                <div>
                    <img src={Return}></img>
                    <p>Zwrot do 100 dni!</p>
                </div>
            </div>

            <Accordion options={accordionOptions}></Accordion>
        </div>
    );
}

export { Details };
