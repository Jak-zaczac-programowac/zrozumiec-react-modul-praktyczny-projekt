import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";

export function Price({ product }) {
    const [currency] = useContext(CurrencyContext);
    return (
        <>
            {currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}
            {currency === CURRENCIES.PLN
                ? CURRENCY_SIGN.PLN
                : CURRENCY_SIGN.USD}
        </>
    );
}
