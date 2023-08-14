import HeartIcon from "../../assets/favourite.svg";
import BagIcon from "../../assets/bag.svg";

import styles from "./IconMenu.module.css";
import { Link } from "react-router-dom";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";

function ActiveItem({ children }) {
    return <div className={styles.activeItem}>{children}</div>;
}

function IconMenu() {
    return (
        <ul className={styles.menu}>
            <li>
                <CurrencySelector />
            </li>
            <li>
                <Link to="/ulubione">
                    <img className={styles.icon} src={HeartIcon} />
                </Link>
            </li>
            <li>
                <Link to="/koszyk" className={styles.cart}>
                    <img className={styles.icon} src={BagIcon} />
                    <ActiveItem>2</ActiveItem>
                </Link>
            </li>
        </ul>
    );
}

export { IconMenu };
