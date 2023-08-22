import { NavLink } from "react-router-dom";
import styles from "./CategoriesMenu.module.css";
import { CATEGORIES } from "../../constants/productCategories";

function CategoriesMenu() {
    return (
        <div className={styles.menu}>
            <div className={styles.menuContainer}>
                <ul className={styles.menuContent}>
                    {CATEGORIES.map(({ path, categoryName }) => (
                        <li key={path}>
                            <NavLink
                                className={styles.menuItem}
                                to={`/${path}`}
                            >
                                {categoryName}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export { CategoriesMenu };
