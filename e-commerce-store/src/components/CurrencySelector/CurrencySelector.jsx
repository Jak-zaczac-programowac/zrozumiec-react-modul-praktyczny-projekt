import styles from "./CurrencySelector.module.css";
function CurrencySelector() {
    return (
        <select className={styles.currencySelector}>
            <option value="PLN">PLN</option>
            <option value="EUR">USD</option>
        </select>
    );
}

export { CurrencySelector };
