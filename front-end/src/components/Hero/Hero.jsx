import styles from "./Hero.module.css";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

export function Hero({ heroImage }) {
    return (
        <div
            className={styles.hero}
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className={styles.wrapper}>
                <div className={styles.contentWrapper}>
                    <h2>Letnie promocje do -70%!</h2>
                    <p>Tylko najlepsze okazje!</p>
                    <FullWidthButton>Sprawdź produkty</FullWidthButton>
                </div>
            </div>
        </div>
    );
}
