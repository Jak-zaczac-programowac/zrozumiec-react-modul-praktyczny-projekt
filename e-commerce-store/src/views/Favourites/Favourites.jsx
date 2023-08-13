import { FavouritesProductList } from "../../components/FavouritesProductList/FavouritesProductList";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { MaxWidthContainer } from "../../components/MaxWidthContainer/MaxWidthContainter";

function Favourites() {
    return (
        <MaxWidthContainer>
            <FlexContainer>
                <FavouritesProductList />
            </FlexContainer>
        </MaxWidthContainer>
    );
}

export { Favourites };
