import { NavLink, useParams } from "react-router-dom";
import styles from "./ExpandableTree.module.css";
import Arrow from "../../assets/arrow.svg";
import { CATEGORIES } from "../../constants/productCategories";

function ExpandableTree() {
    const tree = CATEGORIES;

    const params = useParams();
    const types = {
        kobieta: "Kobieta",
        mezczyzna: "Mężczyzna",
    };

    return (
        <div className={styles.tree}>
            <p>{types[params["type"]]}</p>
            <ul className={styles.topList}>
                {tree.map(({ path, categoryName, items }) => {
                    return (
                        <li
                            key={path}
                            className={`${styles.innerList} ${
                                params.category === path ? styles.expanded : ""
                            }`}
                        >
                            <NavLink
                                className={styles.topCategory}
                                to={`/${params.gender}/produkty/${path}`}
                            >
                                <p>{categoryName}</p>
                                <img src={Arrow}></img>
                            </NavLink>

                            <ul>
                                {items.map(({ categoryName, path }) => (
                                    <li key={categoryName}>
                                        <NavLink
                                            className={styles.link}
                                            to={`/${params.gender}/produkty/${params.category}/${path}`}
                                        >
                                            {categoryName}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export { ExpandableTree };
