import styles from "./TopBar.module.css";
export function TopBar({ children }) {
    return (
        <div className={styles.topBarWrapper}>
            <div className={styles.topBar}>{children}</div>
        </div>
    );
}
