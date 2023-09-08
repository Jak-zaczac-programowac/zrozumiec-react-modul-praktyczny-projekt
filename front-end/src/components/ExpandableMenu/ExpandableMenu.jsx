import styles from "./ExpandableMenu.module.css";
import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";

export function ExpandableMenu() {
    const activePath = "odziez";

    return (
        <div className={styles.expandableMenu}>
            <p>Kobieta</p>
            <ul>
                {CATEGORIES.map((category) => {
                    return (
                        <li key={category.path}>
                            <NavLink to={category.path}>
                                {category.categoryName}
                                <img
                                    src={ARROW_ICON}
                                    className={
                                        category.path === activePath
                                            ? styles.expanded
                                            : ""
                                    }
                                />
                            </NavLink>

                            {category.path === activePath && (
                                <ul>
                                    {category.subcategories.map(
                                        (subcategory) => {
                                            return (
                                                <li key={subcategory.path}>
                                                    <NavLink
                                                        to={subcategory.path}
                                                    >
                                                        {
                                                            subcategory.categoryName
                                                        }
                                                    </NavLink>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
