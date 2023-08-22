import styles from "./ProductSummary.module.css";
import Return from "../../assets/return.svg";
import Delivery from "../../assets/delivery.svg";
import { Accordion } from "../Accordion/Accordion";
import { BrandButton } from "../BrandButton/BrandButton";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function ProductSummary({ product }) {
    const [cartItems, setCartItems] = useContext(CartContext);
    const { brand, name, price } = product;

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

            <BrandButton
                className={styles.addToCart}
                onClick={() => {
                    setCartItems([...cartItems, cartItems]);
                }}
            >
                Dodaj do koszyka
            </BrandButton>

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

export { ProductSummary };
