import styles from "./Breadcrumbs.module.css";
import { NavLink } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";

export function Breadcrumbs() {
    const breadcrumbs = [
        {
            categoryName: "Kobieta",
            path: "kobieta",
        },
        {
            categoryName: "Odzież",
            path: "odziez",
        },
        {
            categoryName: "Swetry",
            path: "swetry",
        },
    ];

    return (
        <ul className={styles.breadcrumbs}>
            {breadcrumbs.map((breadcrumb) => {
                return (
                    <li key={breadcrumb.path}>
                        <NavLink to={breadcrumb.path}>
                            {breadcrumb.categoryName}
                            <img src={ARROW_ICON} />
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}
