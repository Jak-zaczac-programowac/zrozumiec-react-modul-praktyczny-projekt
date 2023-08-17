import { ThreeColumnsBar } from "../../components/ThreeColumnsBar/ThreeColumnsBar";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { Logo } from "../../components/Logo/Logo";
import { IconMenu } from "../../components/IconMenu/IconMenu";
import { CategoriesMenu } from "../../components/CategoriesMenu/CategoriesModule";
import { Footer } from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { MainContent } from "../../components/MainContent/MainContent";
import { CartContext } from "../../contexts/CartContext";
import { useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Layout() {
    const [getDataFromLocalStorage, setDataFromLocalStorage] = useLocalStorage(
        "cart",
        []
    );
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        console.log("Run once!");
        setCartItems(getDataFromLocalStorage());
    }, []);

    const addProductToCart = useCallback(
        function (item) {
            const newState = [...cartItems, item];

            setCartItems(newState);
            setDataFromLocalStorage(newState);
        },
        [cartItems, setDataFromLocalStorage]
    );

    return (
        <>
            <CartContext.Provider value={[cartItems, addProductToCart]}>
                <MainContent>
                    <ThreeColumnsBar>
                        <MainMenu />
                        <Logo />
                        <IconMenu />
                    </ThreeColumnsBar>
                    <CategoriesMenu />
                    <Outlet />
                </MainContent>
                <Footer />
            </CartContext.Provider>
        </>
    );
}

export { Layout };
