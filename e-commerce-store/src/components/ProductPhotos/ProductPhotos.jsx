import styles from "./ProductPhotos.module.css";
import SweaterImg from "../../assets/products/sweater.jpg";

import { FlexContainer } from "../FlexContainer/FlexContainer";

function ProductPhotos() {
    return (
        <FlexContainer>
            <div>
                <ul className={styles.thumbnailsList}>
                    <li>
                        <img
                            className={`${styles.thumbnail} ${styles.currentThumbnail}`}
                            src={SweaterImg}
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            className={styles.thumbnail}
                            src={SweaterImg}
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            className={styles.thumbnail}
                            src={SweaterImg}
                            alt=""
                        />
                    </li>
                </ul>
            </div>
            <div>
                <img className={styles.currentPhoto} src={SweaterImg} />
            </div>
        </FlexContainer>
    );
}

export { ProductPhotos };
