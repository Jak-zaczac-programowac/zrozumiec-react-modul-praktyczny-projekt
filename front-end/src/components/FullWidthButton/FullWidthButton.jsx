import styles from "./FullWidthButton.module.css";

export function FullWidthButton({ children, onClick, isBlack, isInverted }) {
    return (
        <button
            className={`${styles.button} ${isBlack ? styles.black : ""}
            ${isInverted ? styles.inverted : ""}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
