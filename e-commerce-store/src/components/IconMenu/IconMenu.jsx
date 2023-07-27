import HeartIcon from "../../assets/favourite.svg";
import BagIcon from "../../assets/bag.svg";

import styles from "./IconMenu.module.css";
import { Link } from "react-router-dom";

const AVAILABLE_ICONS = {
    bag: BagIcon,
    heart: HeartIcon,
};

function ActiveItem({ children }) {
    return <div className={styles["active-item"]}>{children}</div>;
}

function IconMenu() {
    const items = [
        {
            path: "/ulubione",
            icon: AVAILABLE_ICONS.heart,
        },
        {
            path: "/koszyk",
            icon: AVAILABLE_ICONS.bag,
            activeItems: 12,
        },
    ];

    return (
        <ul className={styles.menu}>
            {items.map((item) => (
                <li key={item.path}>
                    <Link to={item.path} className={styles["menu-item"]}>
                        <img className={styles.icon} src={item.icon} />
                        {item.activeItems && (
                            <ActiveItem>{item.activeItems}</ActiveItem>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export { IconMenu };
