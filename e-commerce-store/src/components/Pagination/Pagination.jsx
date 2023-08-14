import styles from "./Pagination.module.css";
import Arrow from "../../assets/arrow.svg";

function Pagination({ pages }) {
    return (
        <div className={styles.paginationContainer}>
            <img
                src={Arrow}
                className={`${styles.arrow} ${styles.arrowLeft}`}
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
                className={`${styles.arrow} ${styles.arrowRight}`}
            />
        </div>
    );
}

export { Pagination };
