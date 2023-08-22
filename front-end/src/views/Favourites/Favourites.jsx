import { FavouritesList } from "../../components/FavouritesList/FavouritesList";
import { Layout } from "../../components/Layout/Layout";
import SweaterImg from "../../assets/products/sweater.jpg";

function Favourites() {
    const products = [
        {
            id: 2,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
        },
        {
            id: 3,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
        },

        {
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
        },

        {
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
        },
    ];
    return (
        <Layout>
            <FavouritesList products={products} />
        </Layout>
    );
}

export { Favourites };
