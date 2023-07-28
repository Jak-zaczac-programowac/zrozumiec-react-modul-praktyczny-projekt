import { MaxWidthContainer } from "../MaxWidthContainer/MaxWidthContainter";
import styles from "./ThreeColumnsBar.module.css";

function ThreeColumnsBar({ children }) {
    return (
        <MaxWidthContainer>
            <div className={styles.bar}>{children}</div>
        </MaxWidthContainer>
    );
}

export { ThreeColumnsBar };
