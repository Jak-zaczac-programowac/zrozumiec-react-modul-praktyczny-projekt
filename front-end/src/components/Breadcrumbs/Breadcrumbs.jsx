import styles from "./Breadcrumbs.module.css";
import Arrow from "../../assets/arrow.svg";
import { NavLink } from "react-router-dom";

function Breadcrumbs() {
    const breadcrumbs = [
        {
            text: "Męzczyzna",
            path: `/men`,
        },
        {
            text: "Odziez",
            path: `odziez`,
        },
        {
            text: "Koszulki",
            path: `koszulki`,
        },
    ];

    return (
        <ol className={styles.breadcrumbs}>
            {breadcrumbs.map(({ path, text }) => (
                <li key={path}>
                    <NavLink className={styles.breadcrumb} to={path}>
                        {text}
                        <img src={Arrow} />
                    </NavLink>
                </li>
            ))}
        </ol>
    );
}

export { Breadcrumbs };
