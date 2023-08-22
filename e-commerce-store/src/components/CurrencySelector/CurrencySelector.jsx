import { CURRENCIES } from "../../constants/currencies";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import styles from "./CurrencySelector.module.css";
import { useContext } from "react";

function CurrencySelector() {
    const [currency, setCurrency] = useContext(CurrencyContext);
    const [setCurrencyToLocalStorage] = useLocalStorage("selectedCurrency");

    return (
        <select
            className={styles.currencySelector}
            onChange={(e) => {
                setCurrency(e.currentTarget.value);
                setCurrencyToLocalStorage(e.currentTarget.value);
            }}
            value={currency}
        >
            <option value={CURRENCIES.PLN}>PLN</option>
            <option value={CURRENCIES.USD}>USD</option>
        </select>
    );
}

export { CurrencySelector };
