import { useContext } from "react";
import { CartProductList } from "../../components/CartProductList/CartProductList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { MaxWidthContainer } from "../../components/MaxWidthContainer/MaxWidthContainter";
import { CartContext } from "../../contexts/CartContext";

function Cart() {
    return (
        <MaxWidthContainer>
            <FlexContainer>
                <CartProductList />
                <CartSummary />
            </FlexContainer>
        </MaxWidthContainer>
    );
}

export { Cart };
