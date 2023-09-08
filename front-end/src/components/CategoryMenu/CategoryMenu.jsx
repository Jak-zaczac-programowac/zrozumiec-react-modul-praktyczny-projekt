import styles from "./CategoryMenu.module.css";
import { CATEGORIES } from "../../constants/categories";
import { NavLink, useParams } from "react-router-dom";

export function CategoryMenu() {
    const { gender } = useParams();
    return (
        <div className={styles.categoryMenu}>
            <ul>
                {CATEGORIES.map(({ path, categoryName }) => (
                    <li key={path}>
                        <NavLink to={`/${gender}/${path}`}>
                            {categoryName}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
