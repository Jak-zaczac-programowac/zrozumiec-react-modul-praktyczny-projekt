import styles from "./Button.module.css";

function Button({ children }) {
    return <button className={styles.button}>{children}</button>;
}

export { Button };
