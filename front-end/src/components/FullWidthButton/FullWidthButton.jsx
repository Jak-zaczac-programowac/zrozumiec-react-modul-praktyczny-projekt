import styles from "./FullWidthButton.module.css";

export function FullWidthButton({ children, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}
