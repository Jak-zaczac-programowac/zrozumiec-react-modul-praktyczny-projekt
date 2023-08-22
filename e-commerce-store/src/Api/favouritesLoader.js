import { BACK_END_URL } from "../constants/api";

function favouritesLoader() {
    return fetch(`${BACK_END_URL}/favourites/?_expand=product`);
}

export { favouritesLoader };
