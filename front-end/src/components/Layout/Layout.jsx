import { useState } from "react";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";
import { Outlet } from "react-router-dom";

import { CURRENCIES } from "../../constants/currencies";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CartContext } from "../../contexts/CartContext";

export function Layout() {
    const [currency, setCurrency] = useState(
        localStorage["selectedCurrency"] || CURRENCIES.PLN
    );

    const [cartItems, setCartItems] = useState(() => {
        return localStorage["cartProduct"]
            ? JSON.parse(localStorage["cartProduct"])
            : [];
    });

    function addProductToCart(product) {
        setCartItems((prevCartItems) => {
            const newCartItems = [...prevCartItems, product];
            localStorage["cartProduct"] = JSON.stringify(newCartItems);
            return newCartItems;
        });
    }

    return (
        <>
            <CartContext.Provider value={[cartItems, addProductToCart]}>
                <CurrencyContext.Provider value={[currency, setCurrency]}>
                    <MainContent>
                        <TopBar>
                            <MainMenu />
                            <Logo />
                            <div>
                                <CurrencySelector />
                                <IconMenu />
                            </div>
                        </TopBar>
                        <CategoryMenu />
                        <Outlet />
                    </MainContent>
                    <Footer />
                </CurrencyContext.Provider>
            </CartContext.Provider>
        </>
    );
}
