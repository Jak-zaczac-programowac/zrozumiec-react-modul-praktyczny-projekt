import styles from "./Pagination.module.css";
import { NavLink } from "react-router-dom";

function Pagination({ pages, activePage }) {
    return (
        <div className={styles.paginationContainer}>
            <ul className={styles.pagination}>
                <li>
                    <NavLink to="?page=1">1</NavLink>
                </li>
                <li>2</li>
                <li>3</li>
                <li>...</li>
                <li>5</li>
            </ul>
        </div>
    );
}

export { Pagination };
