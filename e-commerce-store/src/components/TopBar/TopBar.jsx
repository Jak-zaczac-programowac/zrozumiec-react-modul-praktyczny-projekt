import styles from "./TopBar.module.css";

function TopBar({ children }) {
    return <div className={styles.bar}>{children}</div>;
}

export { TopBar };
