import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css";
import { GENDERS } from "../../constants/productCategories";

function MainMenu() {
    return (
        <ul className={styles.menu}>
            {GENDERS.map(({ path, categoryName }) => (
                <li key={path}>
                    <NavLink className={styles.menuItem} to={`/${path}`}>
                        {categoryName}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}

export { MainMenu };
