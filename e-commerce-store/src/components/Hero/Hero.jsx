import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import styles from "./Hero.module.css";

function Hero({ heroImage }) {
    return (
        <div
            className={styles.summerSaleCoverImage}
            style={{ backgroundImage: `url(${heroImage}` }}
        >
            <div className={styles.heroContainer}>
                <div className={styles.summerSalePrompt}>
                    <div>
                        <h2>Letnie promocje do -70%!</h2>
                        <p>Tylko najlepsze okazje!</p>
                    </div>

                    <FullWidthButton type="green">
                        Sprawdź produkty
                    </FullWidthButton>
                </div>
            </div>
        </div>
    );
}

export { Hero };
