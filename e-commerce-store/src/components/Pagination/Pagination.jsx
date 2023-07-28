import styles from "./Pagination.module.css";
import Arrow from "../../assets/arrow.svg";

function Pagination({ pages }) {
    const pagesList = [...Array(pages).keys()];

    return (
        <div className={styles["pagination-container"]}>
            <img
                src={Arrow}
                className={`${styles.arrow} ${styles["arrow-left"]}`}
            />
            <ul className={styles.pagination}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>...</li>
                <li>5</li>
            </ul>
            <img
                src={Arrow}
                className={`${styles.arrow} ${styles["arrow-right"]}`}
            />
        </div>
    );
}

export { Pagination };
