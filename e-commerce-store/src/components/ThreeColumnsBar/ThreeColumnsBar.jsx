import styles from "./ThreeColumnsBar.module.css";

function ThreeColumnsBar({ children }) {
    return <div className={styles.bar}>{children}</div>;
}

export { ThreeColumnsBar };
