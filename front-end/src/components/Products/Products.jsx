import styles from "./Products.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";

export function Products({ products, headerText }) {
    return (
        <CenteredContent>
            <h2 className={styles.bestsellersHeader}>{headerText}</h2>
            <div className={styles.productsWrapper}>
                {products.map((product) => {
                    return <Product key={product.id} product={product} />;
                })}
            </div>
        </CenteredContent>
    );
}
