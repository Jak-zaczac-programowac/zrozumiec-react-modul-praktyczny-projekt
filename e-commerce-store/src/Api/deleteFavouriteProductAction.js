import { BACK_END_URL } from "../constants/api";

function deleteFavouriteProductAction({ params }) {
    return fetch(`${BACK_END_URL}/favourites/${params.favouriteId}`, {
        method: "DELETE",
    });
}

export { deleteFavouriteProductAction };
