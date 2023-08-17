import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function useCart() {
    const [cartItems, addProductToCart] = useContext(CartContext);
    const cartSummary = {
        totalPrice: cartItems.reduce((price, item) => price + item.price, 0),
    };
    return [cartItems, cartSummary, addProductToCart];
}

export { useCart };
