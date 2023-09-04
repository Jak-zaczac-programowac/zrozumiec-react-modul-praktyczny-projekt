import styles from "./CategoryMenu.module.css";
import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";

export function CategoryMenu() {
    return (
        <div className={styles.categoryMenu}>
            <ul>
                {CATEGORIES.map(({ path, categoryName }) => (
                    <li key={path}>
                        <NavLink to={path}>{categoryName}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
