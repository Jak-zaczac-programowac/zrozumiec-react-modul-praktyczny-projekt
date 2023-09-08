import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";

export function MainPage() {
    const { heroImageUrl, bestsellers } = useLoaderData();
    return (
        <>
            <Hero heroImage={heroImageUrl} />
            <Bestsellers products={bestsellers} />
        </>
    );
}
