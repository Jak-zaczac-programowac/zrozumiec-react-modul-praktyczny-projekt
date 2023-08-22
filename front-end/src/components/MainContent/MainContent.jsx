import styles from "./MainContent.module.css";

function MainContent({ children }) {
    return <div className={styles.mainContent}>{children}</div>;
}

export { MainContent };
