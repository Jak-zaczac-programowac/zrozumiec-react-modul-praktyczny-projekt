import { BACK_END_URL } from "../constants/api";

function productLoader({ params }) {
    return fetch(`${BACK_END_URL}/product?id=${params.producId}`);
}
export { productLoader };
