import styles from "./BlockContainer.module.css";

function BlockContainer({ children }) {
    return <div className={styles.blockContainer}>{children}</div>;
}

export { BlockContainer };
