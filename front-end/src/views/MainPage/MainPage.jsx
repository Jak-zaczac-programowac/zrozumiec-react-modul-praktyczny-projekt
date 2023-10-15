import { Hero } from "../../components/Hero/Hero";
import { Products } from "../../components/Products/Products";
import { useLoaderData } from "react-router-dom";

export function MainPage() {
    const { bestsellers, heroImageUrl } = useLoaderData();

    return (
        <>
            <Hero heroImage={heroImageUrl} />
            <Products
                headerText="Sprawdź nasze bestsellery"
                products={bestsellers}
            />
        </>
    );
}
