import styles from "./Breadcrumbs.module.css";
import Arrow from "../../assets/arrow.svg";
import { NavLink, useParams } from "react-router-dom";
import { CATEGORIES, GENDERS } from "../../constants/productCategories";

function Breadrcumbs() {
    const params = useParams();

    const breadcrumbs = [];

    const gender = params.gender;
    const category = params.category;
    const subCategory = params.subcategory;

    const foundGender = GENDERS.find(({ path }) => path === gender);
    breadcrumbs.push(foundGender);

    const foundCategory = CATEGORIES.find(({ path }) => path === category);
    breadcrumbs.push(foundCategory);

    if (subCategory) {
        const foundSubCategory = foundCategory.items.find(
            ({ path }) => path === subCategory
        );
        breadcrumbs.push(foundSubCategory);
    }

    return (
        <ol className={styles.breadcrumbs}>
            {breadcrumbs.map(({ path, categoryName }) => (
                <li key={path}>
                    <NavLink className={styles.breadcrumb} to={path}>
                        {categoryName}
                        <img src={Arrow} />
                    </NavLink>
                </li>
            ))}
        </ol>
    );
}

export { Breadrcumbs };
