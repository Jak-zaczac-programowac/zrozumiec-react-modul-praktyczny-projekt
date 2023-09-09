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

export function Layout() {
    const [currency, setCurrency] = useState(
        localStorage["selectedCurrency"] || CURRENCIES.PLN
    );
    return (
        <>
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
        </>
    );
}
