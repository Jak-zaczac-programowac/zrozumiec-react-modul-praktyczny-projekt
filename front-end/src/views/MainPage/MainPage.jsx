import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import HERO_IMAGE from "../../assets/cover.jpeg";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";

export function MainPage() {
    const products = [
        {
            id: 1,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            productName: "T-Shirt",
            brand: "Top Brand",
            pricePLN: 49,
            priceUSD: 10,
            photos: [
                "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-2.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
            ],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibusdam voluptatem vitae voluptatum optio ab alias quisquam? Soluta ad excepturi nihil facere perspiciatis?",
        },
        {
            id: 2,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            productName: "T-Shirt",
            brand: "Top Brand",
            pricePLN: 49,
            priceUSD: 10,
            photos: [
                "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-2.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
            ],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibusdam voluptatem vitae voluptatum optio ab alias quisquam? Soluta ad excepturi nihil facere perspiciatis?",
        },
        {
            id: 3,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            productName: "T-shirt 2",
            brand: "Sun Tzu",
            pricePLN: 199,
            priceUSD: 49,
            photos: [
                "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-2.jpg",
            ],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibusdam voluptatem vitae voluptatum optio ab alias quisquam? Soluta ad excepturi nihil facere perspiciatis?",
        },
        {
            id: 4,
            gender: "men",
            category: "odziez",
            subCategory: "koszulki",
            productName: "T-shirt 3",
            brand: "Sun Tzu",
            pricePLN: 199,
            priceUSD: 49,
            photos: [
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-2.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
            ],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibusdam voluptatem vitae voluptatum optio ab alias quisquam? Soluta ad excepturi nihil facere perspiciatis?",
        },
    ];
    return (
        <Layout>
            <Hero heroImage={HERO_IMAGE} />
            <Bestsellers products={products} />
        </Layout>
    );
}
