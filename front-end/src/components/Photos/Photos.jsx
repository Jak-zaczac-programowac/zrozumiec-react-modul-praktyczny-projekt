import { useState } from "react";
import styles from "./Photos.module.css";

export function Photos({ product }) {
    const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);

    return (
        <div className={styles.photos}>
            <div className={styles.thumbnails}>
                {product.photos.map((imgSrc) => (
                    <img
                        className={currentPhoto === imgSrc ? styles.active : ""}
                        src={imgSrc}
                        key={imgSrc}
                        onClick={() => setCurrentPhoto(imgSrc)}
                    />
                ))}
            </div>
            <img className={styles.mainPhoto} src={currentPhoto} />
        </div>
    );
}
