import styles from "./MainMenu.module.css";
import { NavLink } from "react-router-dom";
import { GENDERS } from "../../constants/categories";

export function MainMenu() {
    return (
        <ul className={styles.mainMenu}>
            {GENDERS.map((gender) => {
                return (
                    <li key={gender.path}>
                        <NavLink to={gender.path}>
                            {gender.categoryName}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}
