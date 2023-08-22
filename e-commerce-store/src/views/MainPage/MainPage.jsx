import { Hero } from "../../components/Hero/Hero";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import HeroImage from "../../assets/summersale.jpg";
import SweaterImg from "../../assets/products/sweater.jpg";

import { Layout } from "../../components/Layout/Layout";

function MainPage() {
    const heroImage = HeroImage;
    const products = [
        {
            id: 2,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abcde",
        },
        {
            id: 3,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abcd",
        },

        {
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abc",
        },

        {
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abcdef",
        },
    ];

    return (
        <Layout>
            <Hero heroImage={heroImage} />
            <Bestsellers products={products} />
        </Layout>
    );
}

export { MainPage };
