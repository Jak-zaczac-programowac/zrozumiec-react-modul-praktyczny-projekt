import styles from "./CategoryMenu.module.css";
import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";

export function CategoryMenu() {
    return (
        <div className={styles.categoryMenu}>
            <ul>
                {CATEGORIES.map((category) => (
                    <li key={category.path}>
                        <NavLink to={category.path}>
                            {category.categoryName}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
