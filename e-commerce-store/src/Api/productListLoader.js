import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api";
import { CATEGORIES } from "../constants/productCategories";

function productListLoader({ params, request }) {
    const page = new URL(request.url).searchParams.get("page");
    console.log(page);

    const gender = PATH_TO_ENDPOINT_MAPPING[params.gender];
    const category = params.category;
    const subcategory = params.subcategory;

    const foundCategory = CATEGORIES.find((c) => c.path === category);

    if (gender && foundCategory) {
        let url = `${BACK_END_URL}/products/?gender=${gender}&category=${category}`;

        if (subcategory) {
            const foundSubCategory = foundCategory.subCategories.find(
                (sc) => sc.path === subcategory
            );

            if (foundSubCategory) {
                url = url + `&subCategory=${subcategory}`;
            } else {
                return redirect("/kobieta");
            }
        }

        return fetch(url + `&_limit=8&_page=${page}`).then((response) => {
            const numberOfPages = response.headers
                .get("Link")
                .split(";").length;

            return response.json().then((products) => {
                return {
                    products: products,
                    numberOfPages: numberOfPages,
                };
            });
        });
    } else {
        return redirect("/kobieta");
    }
}

export { productListLoader };
