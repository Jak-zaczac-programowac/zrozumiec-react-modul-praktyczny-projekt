import { NavLink } from "react-router-dom";
import styles from "./TreeMenu.module.css";
import Arrow from "../../assets/arrow.svg";

function TreeMenu({ categories }) {
    const activeCategory = "odziez";

    return (
        <div className={styles.tree}>
            <p>Mezczyzna</p>
            <ul className={styles.topList}>
                {categories.map(({ path, categoryName, subCategories }) => {
                    return (
                        <li
                            key={path}
                            className={`${styles.innerList} ${
                                activeCategory === path ? styles.expanded : ""
                            }`}
                        >
                            <NavLink className={styles.topCategory}>
                                <p>{categoryName}</p>
                                <img src={Arrow}></img>
                            </NavLink>

                            <ul>
                                {subCategories.map(({ categoryName }) => (
                                    <li key={categoryName}>
                                        <NavLink className={styles.link}>
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

export { TreeMenu };
