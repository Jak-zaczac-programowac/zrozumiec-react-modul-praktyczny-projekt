import styles from "./CategoryMenu.module.css";
import { CATEGORIES } from "../../constants/categories";
import { NavLink, useParams } from "react-router-dom";

export function CategoryMenu() {
    const params = useParams();

    return (
        <div className={styles.categoryMenu}>
            <ul>
                {CATEGORIES.map((category) => {
                    return (
                        <li key={category.path}>
                            <NavLink to={`/${params.gender}/${category.path}`}>
                                {category.categoryName}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
