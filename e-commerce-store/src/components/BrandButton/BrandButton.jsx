import styles from "./BrandButton.module.css";

function BrandButton({ children }) {
    return <button className={styles.button}>{children}</button>;
}

export { BrandButton };
