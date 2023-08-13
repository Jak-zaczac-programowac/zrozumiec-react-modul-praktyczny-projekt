import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ProductPhotos } from "../../components/ProductPhotos/ProductPhotos";
import { ProductSummary } from "../../components/ProductSummary/ProductSummary";

function Product() {
    return (
        <FlexContainer>
            <ProductPhotos />
            <ProductSummary
                product={{
                    brand: "SunTzu",
                    name: "Biały Sweter",
                    price: "199pln",
                }}
            />
        </FlexContainer>
    );
}

export { Product };
