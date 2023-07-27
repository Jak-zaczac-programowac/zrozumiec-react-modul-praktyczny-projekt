import SummerSaleImage from "../../assets/summersale.jpg";
import { Button } from "../Button/Button";
import styles from "./SummerSale.module.css";

function SummerSale() {
    return (
        <div className={styles["summer-sale"]}>
            <div
                className={styles["summer-sale-cover-image"]}
                style={{ "background-image": `url(${SummerSaleImage}` }}
            >
                <div className={styles["summer-sale-prompt"]}>
                    <div>
                        <h2>Letnie promocje do -70%!</h2>
                        <p>Tylko najlepsze okazje!</p>
                    </div>

                    <Button>Sprawdź promki</Button>
                </div>
            </div>
        </div>
    );
}

export { SummerSale };
