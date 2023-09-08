import styles from "./ExpandableMenu.module.css";
import { CATEGORIES } from "../../constants/categories";
import { NavLink, useParams } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";

const PATH_TO_GENDER_NAME = {
    mezczyzna: "Mężczyzna",
    kobieta: "Kobieta",
    dziecko: "Dziecko",
};

export function ExpandableMenu() {
    const { gender, category: activePath } = useParams();

    return (
        <div className={styles.expandableMenu}>
            <p>{PATH_TO_GENDER_NAME[gender]}</p>
            <ul>
                {CATEGORIES.map((category) => {
                    return (
                        <li key={category.path}>
                            <NavLink to={`/${gender}/${category.path}`}>
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
                                                        to={`/${gender}/${category.path}/${subcategory.path}`}
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
