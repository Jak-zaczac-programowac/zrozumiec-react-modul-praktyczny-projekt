import { Link } from "react-router-dom";
import styles from "./CategoriesMenu.module.css";

function CategoriesMenu() {
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
            path: "akcerosria",
            name: "Akcesoria",
        },
        {
            path: "sport",
            name: "Sport",
        },
        {
            path: "kosmetykio",
            name: "Kosmetyki",
        },
    ];

    return (
        <div className={styles["menu"]}>
            <ul className={styles["menu-content"]}>
                {categories.map((category) => (
                    <li key={category.path}>
                        <Link
                            className={styles["menu-item"]}
                            to={category.path}
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { CategoriesMenu };
