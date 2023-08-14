import styles from "./MaxWidthContainer.module.css";

function MaxWidthContainer({ children }) {
    return <div className={styles.maxWidthContainer}>{children}</div>;
}

export { MaxWidthContainer };
