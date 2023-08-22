import styles from "./FullWidthButton.module.css";

function FullWidthButton({ children, type }) {
    return (
        <button
            className={`${styles.button} ${
                type === "green" ? styles.green : styles.black
            }`}
        >
            {children}
        </button>
    );
}

export { FullWidthButton };
