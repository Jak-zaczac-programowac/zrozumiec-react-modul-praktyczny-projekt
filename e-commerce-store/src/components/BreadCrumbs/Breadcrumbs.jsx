import styles from "./Breadcrumbs.module.css";
import Arrow from "../../assets/arrow.svg";
import { NavLink } from "react-router-dom";

function Breadrcumbs() {
    const breadcrumbs = [
        {
            name: "Mężczyzna",
            path: "/mezczyzna",
        },
        {
            name: "Odzież",
            path: "/odziez",
        },
        {
            name: "Spodnie",
            path: "/spodnie",
        },
    ];
    return (
        <ol className={styles.breadcrumbs}>
            {breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.path}>
                    <NavLink className={styles.breadcrumb} to={breadcrumb.path}>
                        {breadcrumb.name}
                        <img src={Arrow} />
                    </NavLink>
                </li>
            ))}
        </ol>
    );
}

export { Breadrcumbs };
