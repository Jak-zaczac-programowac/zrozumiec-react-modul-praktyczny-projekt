import { useContext } from "react";
import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
    const [cartProducts] = useContext(CartContext);
    return (
        <FlexContainer>
            <CartProductsList products={cartProducts} />
            <CartSummary products={cartProducts} />
        </FlexContainer>
    );
}
