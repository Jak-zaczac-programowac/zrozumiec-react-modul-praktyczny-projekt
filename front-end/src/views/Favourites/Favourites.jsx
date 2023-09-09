import { useLoaderData } from "react-router-dom";
import { FavouritesList } from "../../components/FavouritesList/FavouritesList";

export function Favourites() {
    const favouriteProducts = useLoaderData();
    console.log(favouriteProducts);
    return <FavouritesList favouriteProducts={favouriteProducts} />;
}
