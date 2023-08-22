import { Form, useFetcher } from "react-router-dom";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
    const { submit } = useFetcher();
    const [currency] = useContext(CurrencyContext);

    return (
        <div className={styles.productCard}>
            <div className={styles.favourite} />
            <Form
                onSubmit={() => {
                    submit(null, {
                        method: "post",
                        action: `/add-to-favourites/2`,
                    });
                }}
            >
                <button>
                    <img src={product.image} />
                </button>
            </Form>
            <div>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.productPrice}>
                    {currency === CURRENCIES.PLN
                        ? product.pricePLN
                        : product.priceUSD}
                    {currency === CURRENCIES.PLN
                        ? CURRENCY_SIGN.PLN
                        : CURRENCY_SIGN.USD}
                </p>
            </div>
        </div>
    );
}

export { ProductCard };
