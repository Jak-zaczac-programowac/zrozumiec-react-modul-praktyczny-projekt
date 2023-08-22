import HeartIcon from "../../assets/favourite.svg";
import BagIcon from "../../assets/bag.svg";

import styles from "./IconMenu.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function ActiveItem({ children }) {
    return <div className={styles.activeItem}>{children}</div>;
}

function IconMenu() {
    const [cartItems] = useContext(CartContext);

    return (
        <ul className={styles.menu}>
            <li>
                <Link to="/ulubione">
                    <img className={styles.icon} src={HeartIcon} />
                </Link>
            </li>
            <li>
                <Link to="/koszyk" className={styles.cart}>
                    <img className={styles.icon} src={BagIcon} />
                    {cartItems.length > 0 ? (
                        <ActiveItem>{cartItems.length}</ActiveItem>
                    ) : (
                        ""
                    )}
                </Link>
            </li>
        </ul>
    );
}

export { IconMenu };
