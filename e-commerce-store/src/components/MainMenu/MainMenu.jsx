import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css";

function MainMenu() {
    const categories = [
        {
            path: "/kobieta",
            name: "Kobieta",
        },
        {
            path: "/mezczyzna",
            name: "Mężczyzna",
        },
        {
            path: "/dzieci",
            name: "Dzieci",
        },
    ];

    return (
        <ul className={styles.menu}>
            {categories.map((category) => (
                <li key={category.path}>
                    <NavLink className={styles.menuItem} to={category.path}>
                        {category.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}

export { MainMenu };
