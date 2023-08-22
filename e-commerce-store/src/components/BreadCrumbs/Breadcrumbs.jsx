import styles from "./Breadcrumbs.module.css";
import Arrow from "../../assets/arrow.svg";
import { NavLink, useParams } from "react-router-dom";
import { CATEGORIES, GENDERS } from "../../constants/productCategories";

function Breadcrumbs() {
    const { gender, category, subcategory } = useParams();
    console.log(gender, category, subcategory);

    const foundGender = GENDERS.find((g) => g.path === gender);
    const foundCategory = CATEGORIES.find((c) => c.path === category);

    const breadcrumbs = [
        {
            text: "Męzczyzna",
            path: `/men`,
        },
        {
            text: foundCategory.categoryName,
            path: `/${foundGender.path}/${foundCategory.path}`,
        },
    ];

    if (subcategory) {
        const foundSubcategory = foundCategory.subCategories.find(
            (sc) => sc.path === subcategory
        );

        breadcrumbs.push({
            text: foundSubcategory.categoryName,
            path: `/${foundGender.path}/${foundCategory.path}/${foundCategory.categoryName}`,
        });
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

export { Breadcrumbs };
