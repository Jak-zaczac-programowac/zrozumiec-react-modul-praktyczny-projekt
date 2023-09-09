import { CURRENCIES } from "../../constants/currencies";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import styles from "./CurrencySelector.module.css";
import { useContext } from "react";

export function CurrencySelector() {
    const [currency, setCurrency] = useContext(CurrencyContext);
    console.log(currency);
    return (
        <select
            value={currency}
            className={styles.currencySelector}
            onChange={(e) => {
                console.log(e.currentTarget.value);
                setCurrency(e.currentTarget.value);
                localStorage["selectedCurrency"] = e.currentTarget.value;
            }}
        >
            <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
            <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
        </select>
    );
}
