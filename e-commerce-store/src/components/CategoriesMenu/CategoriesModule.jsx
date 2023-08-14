import { NavLink, useParams } from "react-router-dom";
import styles from "./CategoriesMenu.module.css";
import { MaxWidthContainer } from "../MaxWidthContainer/MaxWidthContainter";
import { CATEGORIES } from "../../constants/productCategories";

function CategoriesMenu() {
    const params = useParams();
    return (
        <div className={styles.menu}>
            <MaxWidthContainer>
                <ul className={styles.menuContent}>
                    {CATEGORIES.map(({ path, categoryName }) => (
                        <li key={path}>
                            <NavLink
                                className={styles.menuItem}
                                to={`/${params.gender}/produkty/${path}`}
                                relative="path"
                            >
                                {categoryName}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </MaxWidthContainer>
        </div>
    );
}

export { CategoriesMenu };
