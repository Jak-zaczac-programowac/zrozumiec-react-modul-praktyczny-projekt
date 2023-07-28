import styles from "./BlockContainer.module.css";

function BlockContainer({ children }) {
    return <div className={styles["block-container"]}>{children}</div>;
}

export { BlockContainer };
