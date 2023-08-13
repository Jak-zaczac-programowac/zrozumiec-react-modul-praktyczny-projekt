import { NavLink, useParams } from "react-router-dom";
import styles from "./CategoriesMenu.module.css";
import { MaxWidthContainer } from "../MaxWidthContainer/MaxWidthContainter";

function CategoriesMenu() {
    const params = useParams();

    const categories = [
        {
            path: "odziez",
            name: "Odzież",
        },
        {
            path: "obuwie",
            name: "Obuwie",
        },
        {
            path: "akcesoria",
            name: "Akcesoria",
        },
        {
            path: "sport",
            name: "Sport",
        },
    ];

    return (
        <div className={styles["menu"]}>
            <MaxWidthContainer>
                <ul className={styles["menu-content"]}>
                    {categories.map((category) => (
                        <li key={category.path}>
                            <NavLink
                                className={styles["menu-item"]}
                                to={`/${params.type}/produkty/${category.path}`}
                                relative="path"
                            >
                                {category.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </MaxWidthContainer>
        </div>
    );
}

export { CategoriesMenu };
