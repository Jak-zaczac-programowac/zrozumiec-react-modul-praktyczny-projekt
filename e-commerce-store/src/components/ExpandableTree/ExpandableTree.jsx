import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./ExpandableTree.module.css";
import Arrow from "../../assets/arrow.svg";

function ExpandableTree() {
    const [tree] = useState([
        {
            categoryName: "Odzież",
            path: "odziez",
            items: [
                {
                    categoryName: "Bluzy",
                    path: "bluzy",
                },
                {
                    categoryName: "Jeansy",
                    path: "jeansy",
                },
                {
                    categoryName: "Sukienki",
                    path: "sukienki",
                },
                {
                    categoryName: "Płaszcze",
                    path: "plaszcze",
                },
                {
                    categoryName: "Spódnice",
                    path: "spodnice",
                },
            ],
        },
        {
            categoryName: "Obuwie",
            path: "obuwie",
            items: [
                {
                    categoryName: "Baleriny",
                    path: "baleriny",
                },
                {
                    categoryName: "Botki",
                    path: "botki",
                },
                {
                    categoryName: "Espadryle",
                    path: "espadryle",
                },
                {
                    categoryName: "Kozaki",
                    path: "kozaki",
                },
                {
                    categoryName: "Outdoor",
                    path: "outdoor",
                },
            ],
        },
        {
            categoryName: "Akcesoria",
            path: "akcesoria",
            items: [
                {
                    categoryName: "Plecaki",
                    path: "plecaki",
                },
                {
                    categoryName: "Portfele",
                    path: "portfele",
                },
                {
                    categoryName: "Rękawiczki",
                    path: "rekawiczki",
                },
                {
                    categoryName: "Zegarki",
                    path: "zegarki",
                },
                {
                    categoryName: "Torebki",
                    path: "torebki",
                },
            ],
        },
        {
            categoryName: "Sport",
            path: "sport",
            items: [
                {
                    categoryName: "Bieganie",
                    path: "bieganie",
                },
                {
                    categoryName: "Trening",
                    path: "trening",
                },
                {
                    categoryName: "Sporty wodne",
                    path: "sporty-wodne",
                },
                {
                    categoryName: "Narty",
                    path: "narty",
                },
                {
                    categoryName: "Rower",
                    path: "rower",
                },
            ],
        },
    ]);

    const params = useParams();
    const types = {
        kobieta: "Kobieta",
        mezczyzna: "Mężczyzna",
    };

    return (
        <div className={styles.tree}>
            <p>{types[params["type"]]}</p>
            <ul className={styles["top-list"]}>
                {tree.map((category) => {
                    return (
                        <li
                            key={category.path}
                            className={`${styles["inner-list"]} ${
                                params.category === category.path
                                    ? styles.expanded
                                    : ""
                            }`}
                        >
                            <NavLink
                                className={styles["top-category"]}
                                to={`/${params.type}/produkty/${category.path}`}
                            >
                                <p>{category.categoryName}</p>
                                <img src={Arrow}></img>
                            </NavLink>

                            <ul>
                                {category.items.map((item) => (
                                    <li key={item.categoryName}>
                                        <NavLink
                                            className={styles.link}
                                            to={`/${params.type}/produkty/${params.category}/${item.path}`}
                                        >
                                            {item.categoryName}
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
