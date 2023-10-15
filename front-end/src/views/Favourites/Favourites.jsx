import { useLoaderData } from "react-router-dom";
import { FavouritesList } from "../../components/FavouritesList/FavouritesList";
export function Favourites() {
    const favouriteProducts = useLoaderData();
    return <FavouritesList favourites={favouriteProducts} />;
}
