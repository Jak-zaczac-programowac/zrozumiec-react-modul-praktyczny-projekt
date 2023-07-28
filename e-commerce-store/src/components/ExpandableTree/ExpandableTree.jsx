import { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import styles from "./ExpandableTree.module.css";
import Arrow from "../../assets/arrow.svg";

function ExpandableTree() {
    const [tree] = useState([
        {
            category: "Odzież",
            path: "odziez",
            items: [
                {
                    category: "Bluzy",
                    path: "bluzy",
                },
                {
                    category: "Jeansy",
                    path: "jeansy",
                },
                {
                    category: "Sukienki",
                    path: "sukienki",
                },
                {
                    category: "Płaszcze",
                    path: "plaszcze",
                },
                {
                    category: "Spódnice",
                    path: "spodnice",
                },
            ],
        },
        {
            category: "Obuwie",
            path: "obuwie",
            items: [
                {
                    category: "Baleriny",
                    path: "baleriny",
                },
                {
                    category: "Botki",
                    path: "botki",
                },
                {
                    category: "Espadryle",
                    path: "espadryle",
                },
                {
                    category: "Kozaki",
                    path: "kozaki",
                },
                {
                    category: "Outdoor",
                    path: "outdoor",
                },
            ],
        },
        {
            category: "Akcesoria",
            path: "akcesoria",
            items: [
                {
                    category: "Plecaki",
                    path: "plecaki",
                },
                {
                    category: "Portfele",
                    path: "portfele",
                },
                {
                    category: "Rękawiczki",
                    path: "rekawiczki",
                },
                {
                    category: "Zegarki",
                    path: "zegarki",
                },
                {
                    category: "Torebki",
                    path: "torebki",
                },
            ],
        },
        {
            category: "Sport",
            path: "sport",
            items: [
                {
                    category: "Bieganie",
                    path: "bieganie",
                },
                {
                    category: "Trening",
                    path: "trening",
                },
                {
                    category: "Sporty wodne",
                    path: "sporty-wodne",
                },
                {
                    category: "Narty",
                    path: "narty",
                },
                {
                    category: "Rower",
                    path: "rower",
                },
            ],
        },
    ]);

    const params = useParams();
    const [expandedCategory, setExpandedCategory] = useState();

    return (
        <div class={styles.tree}>
            <p>Kobieta</p>
            <ul class={styles["top-list"]}>
                {tree.map((topCategory) => {
                    return (
                        <li
                            key={topCategory.path}
                            onClick={() => setExpandedCategory(topCategory)}
                            className={`${styles["inner-list"]} ${
                                expandedCategory === topCategory
                                    ? styles.expanded
                                    : ""
                            }`}
                        >
                            <div className={styles["top-category"]}>
                                <p>{topCategory.category}</p>
                                <img src={Arrow}></img>
                            </div>
                            <ul>
                                {topCategory.items.map((item) => (
                                    <li key={item.category}>
                                        <NavLink
                                            className={({ isActive }) =>
                                                `${styles.link} ${
                                                    isActive
                                                        ? styles["link-active"]
                                                        : ""
                                                }`
                                            }
                                            to={`/${params.type}/produkty/${params.category}/${item.path}`}
                                        >
                                            {item.category}
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
