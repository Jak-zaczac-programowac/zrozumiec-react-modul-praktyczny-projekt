import styles from "./Pagination.module.css";

import { Link } from "react-router-dom";
export function Pagination({ numberOfPages }) {
    const pages = Array(numberOfPages).fill(null);

    return (
        <ul className={styles.pagination}>
            {pages.map((_, index) => {
                return (
                    <li key={index}>
                        <Link to={`?page=${index + 1}`}>{index + 1}</Link>
                    </li>
                );
            })}
        </ul>
    );
}
