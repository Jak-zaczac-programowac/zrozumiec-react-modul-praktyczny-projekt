import styles from "./Photos.module.css";

function Photos({ product }) {
    return (
        <div className={styles.flexContainer}>
            <div>
                <ul className={styles.thumbnailsList}>
                    <li>
                        <img
                            className={`${styles.thumbnail} ${styles.currentThumbnail}`}
                            src={product.images[0]}
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            className={styles.thumbnail}
                            src={product.images[1]}
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            className={styles.thumbnail}
                            src={product.images[2]}
                            alt=""
                        />
                    </li>
                </ul>
            </div>
            <div>
                <img className={styles.currentPhoto} src={product.images[0]} />
            </div>
        </div>
    );
}

export { Photos };
