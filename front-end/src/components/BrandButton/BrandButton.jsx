import styles from "./BrandButton.module.css";

function BrandButton({ children, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}

export { BrandButton };
