import styles from "./Products.module.css";
import { Product } from "../Product/Product";
import { CATEGORIES } from "../../constants/categories";
import { useParams } from "react-router-dom";

export function Products({ products }) {
    const { category, subcategory } = useParams();

    const foundCategory = CATEGORIES.find((c) => c.path === category);
    let foundSubCategory;

    if (subcategory) {
        foundSubCategory = foundCategory.subcategories.find(
            (sc) => sc.path === subcategory
        );
    }

    return (
        <div className={styles.products}>
            <h2>
                {foundSubCategory
                    ? foundSubCategory.categoryName
                    : foundCategory.categoryName}
            </h2>
            <div className={styles.productsList}>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
