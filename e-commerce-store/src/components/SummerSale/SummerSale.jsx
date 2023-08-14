import SummerSaleImage from "../../assets/summersale.jpg";
import { Button } from "../Button/Button";
import { MaxWidthContainer } from "../MaxWidthContainer/MaxWidthContainter";
import styles from "./SummerSale.module.css";

function SummerSale() {
    return (
        <div
            className={styles.summerSaleCoverImage}
            style={{ backgroundImage: `url(${SummerSaleImage}` }}
        >
            <MaxWidthContainer>
                <div className={styles.summerSalePrompt}>
                    <div>
                        <h2>Letnie promocje do -70%!</h2>
                        <p>Tylko najlepsze okazje!</p>
                    </div>

                    <Button>Sprawdź produkty</Button>
                </div>
            </MaxWidthContainer>
        </div>
    );
}

export { SummerSale };
