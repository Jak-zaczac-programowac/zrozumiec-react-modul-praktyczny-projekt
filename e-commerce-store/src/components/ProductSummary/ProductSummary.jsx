import styles from "./ProductSummary.module.css";
import Return from "../../assets/return.svg";
import Delivery from "../../assets/delivery.svg";
import { Accordion } from "../Accordion/Accordion";

function ProductSummary({ product: { brand, name, price } }) {
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
            <h2 className={styles.brand}>{brand}</h2>
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>{price}</p>

            <select
                className={styles.sizeSelector}
                placeholder="Wybierz rozmiar"
            >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
            <button className={styles.addToCart}>Dodaj do koszyka</button>

            <div className={styles.deliveryInfo}>
                <div>
                    <img src={Delivery}></img>
                    <p>Darmowa dostawa</p>
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

export { ProductSummary };
