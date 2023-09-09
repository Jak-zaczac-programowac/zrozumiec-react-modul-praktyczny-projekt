import styles from "./Breadcrumbs.module.css";
import { NavLink } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";
import { useParams } from "react-router-dom";
import { CATEGORIES, GENDERS } from "../../constants/categories";

export function Breadcrumbs() {
    const { gender, category, subcategory } = useParams();
    const foundGender = GENDERS.find((g) => g.path === gender);
    const foundCategory = CATEGORIES.find((c) => c.path === category);
    console.log(foundCategory);

    const breadcrumbs = [
        {
            categoryName: foundGender.categoryName,
            path: `/${foundGender.path}`,
        },
        {
            categoryName: foundCategory.categoryName,
            path: `/${foundGender.path}/${foundCategory.path}`,
        },
    ];

    if (subcategory) {
        const foundSubCategory = foundCategory.subcategories.find(
            (sc) => sc.path == subcategory
        );

        if (foundCategory) {
            breadcrumbs.push({
                categoryName: foundSubCategory.categoryName,
                path: `/${foundGender.path}/${foundCategory.path}/${foundSubCategory.path}`,
            });
        }
    }

    return (
        <ul className={styles.breadcrumbs}>
            {breadcrumbs.map((breadcrumb) => {
                return (
                    <li key={breadcrumb.path}>
                        <NavLink to={breadcrumb.path} end>
                            {breadcrumb.categoryName}
                            <img src={ARROW_ICON} />
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}
