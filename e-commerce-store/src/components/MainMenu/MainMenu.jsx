import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css";

function MainMenu() {
    const categories = [
        {
            path: "/mezczyzna",
            name: "Mężczyzna",
        },
        {
            path: "/kobieta",
            name: "Kobieta",
        },
        {
            path: "/dzieci",
            name: "Dzieci",
        },
    ];

    return (
        <ul className={styles["menu"]}>
            {categories.map((category) => (
                <li key={category.path}>
                    <NavLink
                        className={({ isActive }) =>
                            `${styles["menu-item"]} ${
                                isActive ? styles["menu-item-active"] : ""
                            }`
                        }
                        to={category.path}
                    >
                        {category.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}

export { MainMenu };
