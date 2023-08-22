import styles from "./CurrencySelector.module.css";

function CurrencySelector() {
    return (
        <select className={styles.currencySelector}>
            <option value="PLN">PLN</option>
            <option value="USD">USD</option>
        </select>
    );
}

export { CurrencySelector };
