import styles from "./MaxWidthContainer.module.css";

function MaxWidthContainer({ children }) {
    return <div className={styles["max-width-container"]}>{children}</div>;
}

export { MaxWidthContainer };
