import { BACK_END_URL } from "../constants/api";

export function deleteFavouriteAction({ params: { favouriteId } }) {
    return fetch(`${BACK_END_URL}/favourites/${favouriteId}`, {
        method: "DELETE",
    });
}
