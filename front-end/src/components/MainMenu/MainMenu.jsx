import styles from "./MainMenu.module.css";
import { NavLink } from "react-router-dom";
import { GENDERS } from "../../constants/categories";

export function MainMenu() {
    return (
        <ul className={styles.mainMenu}>
            {GENDERS.map(({ path, categoryName }) => (
                <li key={path}>
                    <NavLink to={path}>{categoryName}</NavLink>
                </li>
            ))}
        </ul>
    );
}
