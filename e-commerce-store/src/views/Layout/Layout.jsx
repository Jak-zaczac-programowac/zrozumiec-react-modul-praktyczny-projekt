import { ThreeColumnsBar } from "../../components/TopBar/TopBar";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { Logo } from "../../components/Logo/Logo";
import { IconMenu } from "../../components/IconMenu/IconMenu";
import { CategoriesMenu } from "../../components/CategoriesMenu/CategoriesModule";
import { Footer } from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { MainContent } from "../../components/MainContent/MainContent";
import { CurrencySelector } from "../../components/CurrencySelector/CurrencySelector";

function Layout() {
    return (
        <>
            <MainContent>
                <ThreeColumnsBar>
                    <MainMenu />
                    <Logo />
                    <CurrencySelector />
                    <IconMenu />
                </ThreeColumnsBar>
                <CategoriesMenu />
                <Outlet />
            </MainContent>
            <Footer />
        </>
    );
}

export { Layout };
