import { BACK_END_URL } from "../constants/api";

function addProductToFavouritesAction({ params }) {
    return fetch(`${BACK_END_URL}/favourites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            productId: Number(params.productId),
        }),
    });
}

export { addProductToFavouritesAction };
