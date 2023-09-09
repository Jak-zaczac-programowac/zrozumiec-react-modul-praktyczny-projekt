import { BACK_END_URL } from "../constants/api";

export function favouritesLoader() {
    return fetch(`${BACK_END_URL}/favourites?_expand=product`);
}
